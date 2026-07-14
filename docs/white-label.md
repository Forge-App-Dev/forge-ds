# Forge DS — White-label & apps irmãos

**Status:** Guia de implementação · **Data:** 2026-07-14
**Decisão-mãe:** `decisions/ADR-0040-arquitetura-de-tokens.md` (fonte única DTCG)
**Regra de accent:** `docs/tokens-architecture.md` §6.1 (contrato de tema) e princípio 5
("o accent é re-associação da camada semântica, nunca da primitiva").
**OP:** OP-010/188 (content.js), OP-120 (brand no AppHeader), OP-186 (white-label). Forge é
**dark-only** — OP-011 (tema claro) foi encerrada (tema claro removido, 2026-07-14).

Um **app irmão** ("sibling") — ex.: **Fuel**, o app de nutrição — reusa 100% dos componentes,
macros, categoria, dimensões e tipografia do Forge, trocando só **três** camadas: **marca**,
**cor de ação (accent)** e **cópia**. Nada mais. Este doc é o passo-a-passo dessas três trocas e
a lista fechada do que é **imutável**.

---

## O que um app irmão pode trocar

| Camada | Como se troca | Onde vive |
|---|---|---|
| **Marca** (wordmark + mark image) | via **props** de componente | `AppHeader`, `LoadingScreen` |
| **Accent** (cor de ação primária) | via **tema de accent** (classe CSS que reaponta `--forge-accent`) | tema próprio no `tokens.json` |
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

## 2. Accent — trocar por tema de accent (reaponta o semântico, nunca a primitiva)

A regra-mãe (ADR-0040 / tokens-architecture §6.1, princípio 5): **um tema de accent é uma
re-associação da camada semântica; primitivos e superfícies nunca mudam.** Forge é **dark-only**:
o tema escuro grafite é fixo. O que um app irmão troca é a **cor de ação** — a var semântica
`--forge-accent` (e seu par `--forge-on-accent`) — apontando para outro primitivo de cor.
Superfícies, texto e bordas continuam os do tema dark.

> **Não existe tema claro.** O tema claro era um experimento abandonado e foi removido (decisão do
> owner, 2026-07-14). White-label **não** é troca de tema claro/escuro — é troca de **accent**
> (+ marca + cópia) sobre o único tema dark.

O accent já varia dentro do próprio Forge por módulo: Treino usa o vermelho de marca `#EF4444`;
Nutrição usa o verde `#10B981` (o app irmão "Fuel" adota esse accent verde). Um app irmão declara
o **seu** accent do mesmo jeito.

### Declarar o accent de um app irmão

O caminho **não** é hardcodear cor no app — é declarar um **tema de accent** no `tokens.json`
(bloco `$extensions.com.forge.theme.<nome>`) e regenerar via `npm run build:tokens`, ou, para um
piloto, uma classe local que reaponta **apenas** a var de accent:

```css
.app-sib-theme {
  --forge-accent: var(--forge-cat-3);        /* ex.: violet, da paleta de categoria */
  --forge-on-accent: #0B0F19;                /* rode onColor() p/ decidir claro vs escuro */
}
```

A única var que o white-label reaponta é `action.accent` (+ o par `on-accent`). Superfícies, texto,
bordas, scrim, macros, categoria e as escalas de dimensão/tipo/motion são **imutáveis** — o gerador
**falha o build** se um tema tentar tocá-los (validação §6.2.2).

> **on-accent não é automático.** Ao trocar o accent, decida o on-accent com
> `components/shared/color.js` → `onColor(accent)` (ADR-0050): branco sobre fundo claro reprova.
> Ex.: sobre o verde de Nutrição, o on-accent é escuro (`#0B0F19`).

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
2. **Accent:** declare o accent do app irmão como tema no `tokens.json` + `npm run build:tokens`
   (ou uma classe local reapontando `--forge-accent`); nunca hardcode cor. Decida `on-accent` com
   `onColor()`.
3. **Cópia:** sobrescreva via props no call-site; para trocar a camada inteira, forneça um objeto
   `content` alternativo — não forke componentes.
4. **NÃO toque:** macros, categoria, dimensão, tipo, motion — são imutáveis (o build recusa).
5. **Prove:** renderize os componentes-chave (Button, Card, TextField, Pill, InlineAlert, StatCard)
   com o accent do app irmão sobre o tema dark, usando só tokens — nenhum componente forkado,
   nenhuma cor hardcoded.
