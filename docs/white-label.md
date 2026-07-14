# Forge DS — White-label & apps irmãos

**Status:** Guia de implementação · **Data:** 2026-07-14
**Decisão-mãe:** `decisions/ADR-0040-arquitetura-de-tokens.md` (fonte única DTCG)
**Regra de tema:** `docs/tokens-architecture.md` §6.1 (contrato de tema) e princípio 5
("tema = troca da camada semântica, nunca da primitiva").
**OP:** OP-010/188 (content.js), OP-011 (tema claro), OP-120 (brand no AppHeader), OP-186 (prova Fuel).

Um **app irmão** ("sibling") — ex.: **Fuel**, o app de nutrição — reusa 100% dos componentes,
macros, categoria, dimensões e tipografia do Forge, trocando só **três** camadas: **marca**,
**cor de ação (accent)** e **cópia**. Nada mais. Este doc é o passo-a-passo dessas três trocas e
a lista fechada do que é **imutável**.

---

## O que um app irmão pode trocar

| Camada | Como se troca | Onde vive |
|---|---|---|
| **Marca** (wordmark + mark image) | via **props** de componente | `AppHeader`, `LoadingScreen` |
| **Accent** (cor de ação primária) | via **tema** (classe CSS que reaponta o semântico) | `.forge-theme-light` ou tema próprio |
| **Cópia** (strings default do sistema) | via **`content.js`** (ponto único de i18n) | `components/shared/content.js` |

Tudo o mais — macros, paleta de categoria, escalas de dimensão/tipo/motion — é **identidade fixa
da família** e **não** se troca (ver "O que é imutável").

---

## 1. Marca — trocar por props (nunca por fork)

Marca **não é cor e não é token**: é conteúdo (nome + imagem) que viaja por props. Os dois
componentes de marca aceitam a troca sem fork:

- **`AppHeader`** — `brand={{ name, markSrc }}` define o wordmark e a imagem do mark. O default é
  `name: "Forge"` (OP-120). `markSrc` sozinho é atalho legado.
  ```jsx
  <AppHeader brand={{ name: "Fuel", markSrc: fuelMark }} onLogout={…} />
  ```
- **`LoadingScreen`** — `markSrc` aponta para o mark do app irmão; o wordmark segue o mesmo padrão
  de tela (o "F" acentuado é tratamento tipográfico da família, não a marca literal).
  ```jsx
  <LoadingScreen markSrc={fuelMark} message="preparando seu dia…" />
  ```

Regra: **um app irmão não edita componentes** para trocar marca — passa props. Se um componente
não expõe a prop de marca de que você precisa, isso é um gap do DS a resolver no DS, não no app.

---

## 2. Accent — trocar por tema (troca a camada semântica, nunca a primitiva)

A regra-mãe (ADR-0040 / tokens-architecture §6.1, princípio 5): **tema é uma re-associação da
camada semântica; primitivos nunca mudam.** Um tema é uma classe CSS que redefine as CSS vars
semânticas (`--forge-accent`, `--forge-surface`, `--forge-text`, …) apontando para outros
primitivos.

O DS já embarca um tema irmão pronto — o **tema claro**, usado pelo Fuel:

```html
<body class="forge-theme-light"> … </body>
```

`.forge-theme-light` (gerado em `tokens/colors.css` a partir de `tokens.json`) reaponta:

- **accent** → verde de marca `#10B981` (`{color.emerald.500}`) no lugar do vermelho `#EF4444`;
- **on-accent** → **texto ESCURO** `#0B0F19` (`{graphite.950}`), porque branco sobre o verde
  reprova o contraste (2.54:1 — ADR-0050). Isto é o override que corrige a incoerência escalada
  no ADR-0050: o dark continua branco sobre o vermelho de marca; só o light inverte;
- **superfícies/bordas** → família **stone** (neutro quente) no lugar de **graphite** (neutro frio);
- **texto** → extremo escuro do ramp **gray** no lugar do extremo claro;
- **danger** → coral mais escuro `#c94b3b` (`{color.coral.600}`) para contraste de texto de erro
  sobre superfície clara.

**Prova de ponta a ponta:** `guidelines/light-theme-fuel.card.html` renderiza Button, Card,
TextField, Pill, InlineAlert e StatCard dentro de um `class="forge-theme-light"` — todos usando só
tokens, nenhum componente forkado, nenhuma cor hardcoded.

### Um tema próprio (accent diferente do verde do Fuel)

Se o app irmão quer um accent que não é o do tema claro embarcado, o caminho **não** é hardcodear
cor no app — é declarar um **tema próprio** no `tokens.json` (novo bloco
`$extensions.com.forge.theme.<nome>`) e regenerar via `npm run build:tokens`, ou, para um piloto,
uma classe local que reaponta **apenas** as vars semânticas temáveis:

```css
.app-sib-theme {
  --forge-accent: var(--forge-cat-3);        /* ex.: violet, da paleta de categoria */
  --forge-on-accent: #0B0F19;                /* rode onColor() p/ decidir claro vs escuro */
}
```

Só as vars da **lista temável** podem ser reapontadas (§6.1): `surface.*`, `text.*`, `border.*`,
`action.accent`, `scrim.*`, `feedback.negative` (+ os opcionais `on-accent`,
`feedback.success/warning/danger`). O gerador **falha o build** se um tema tentar tocar um token
imutável (validação §6.2.2) ou se deixar um token temável sem par (§6.2.1).

> **on-accent não é automático.** Ao trocar o accent, decida o on-accent com
> `components/shared/color.js` → `onColor(accent)` (ADR-0050): branco sobre fundo claro reprova.
> O tema claro já faz isso (on-accent escuro sobre o verde).

---

## 3. Cópia — trocar por `content.js` (ponto único de i18n)

`components/shared/content.js` é a **costura única de i18n / white-label** (OP-010/188). Toda
string que um componente entrega como **default** (default de prop ou label de sistema inline) vive
lá — em nenhum outro lugar. Componentes importam seu default desse objeto:

```js
import { content } from "../shared/content.js";
export function ErrorState({ title = content.errorState.title, … }) { … }
```

Consequências para o app irmão:

- **Props continuam sobrescrevendo** por call-site — `content.js` só relocou o *default*. O Fuel
  pode passar `message="preparando seu dia…"` sem tocar em nada.
- Para trocar a camada de cópia inteira (voz do app, ou um locale), fornece-se um `content`
  alternativo — sem forkar componentes.
- Um runtime de i18n futuro seleciona um bundle de locale **aqui, uma vez**, em vez de caçar
  literais pela árvore.

Componentes já costurados: `LoadingScreen`, `ErrorState`, `ConfirmButton`, `Pager`,
`OfflineBanner`, `RestTimer`. `EmptyState` não tem string default (título/subtítulo são sempre do
call-site) — nada a externalizar.

> **Marca ≠ cópia.** Nomes de marca (wordmark, imagem do mark) **não** entram em `content.js`;
> viajam por props de componente (§1). `content.js` é só texto de sistema.

---

## O que é IMUTÁVEL (não temável, não white-label)

Lista fechada (tokens-architecture §6.1; ADR-0040). Um app irmão **nunca** troca:

- **Todos os primitivos** (`primitive.*`): cor, graphite, stone, gray, overlay, dimensão, tipo,
  motion, number. São a matéria-prima absoluta.
- **Macros** (`semantic.macro.protein/carb/fat`) — identidade fixa da família nutricional (OP-102).
  A proteína é `#E5645E` em **todo** app irmão, em **todo** tema.
- **Paleta de categoria** (`semantic.category.*`) — ordem canônica atribuível; fixa por tema.
- **Marca terceira** (`semantic.brand-google.*`) — a marca do Google não é temável (OP-020).
- **Dimensão / raio / tipografia / motion** — escalas de espaço, alturas, raios,
  `fontSize/lineHeight/fontFamily/fontWeight/letterSpacing`, `duration`, `cubicBezier`, z-index,
  opacidade, breakpoints. Um app irmão tem os **mesmos** raios, a **mesma** tipografia, a **mesma**
  densidade (px=dp=pt, uma densidade só — OP-095).

O gerador de tokens **força** essa fronteira: qualquer override de tema num namespace imutável
aborta o build (validação §6.2.2). A identidade estrutural da família é, por construção,
inegociável — só marca, accent e cópia são do app.

---

## Checklist — novo app irmão

1. **Marca:** passe `brand={{ name, markSrc }}` ao `AppHeader` e `markSrc` ao `LoadingScreen`.
2. **Accent:** use `.forge-theme-light` (se o accent verde serve) ou declare um tema próprio em
   `tokens.json` + `npm run build:tokens`; nunca hardcode cor. Decida `on-accent` com `onColor()`.
3. **Cópia:** sobrescreva via props no call-site; para trocar a camada inteira, forneça um objeto
   `content` alternativo — não forke componentes.
4. **NÃO toque:** macros, categoria, dimensão, tipo, motion — são imutáveis (o build recusa).
5. **Prove:** replique o padrão de `guidelines/light-theme-fuel.card.html` para o seu tema.
