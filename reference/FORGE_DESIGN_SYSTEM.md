# Forge Design System

> Sistema de design da família de apps **Forge**. Use este documento para criar
> novos aplicativos que pertençam ao mesmo ecossistema, garantindo que todos
> tenham a mesma aparência, os mesmos componentes e a mesma experiência.
>
> Acompanha o arquivo `forge-design-system.js` — copie os tokens e estilos de lá
> direto para o `app.js` de um novo app.
>
> ⚠️ **Protótipos também seguem estes tokens.** O protótipo Snack (ver
> `FLUXO_PROTOTIPO_SNACK.md`) deve usar as cores, raios, espaçamentos e fontes
> daqui — fidelidade à UI real é obrigatória, não aproximação.

---

## 1. Princípios

- **Família visual única.** Todos os apps compartilham tipografia, componentes,
  botões, cards, gráficos, iconografia, animações, espaçamento e hierarquia. O
  que muda entre apps é o **ícone/símbolo da marca** e, opcionalmente, a **cor
  de acento**.
- **Mobile-first.** Tudo é desenhado para tela de celular: largura máxima de
  480px centralizada, navegação inferior, áreas de toque generosas.
- **Sem etapa de build.** React via CDN + Babel no navegador, estilos inline em
  objetos JS (sem framework de CSS). Os "tokens" são constantes JS.
- **Tema escuro como base.** O Forge usa tema escuro grafite. Um app irmão pode
  inverter para tema claro (ver "Variações de tema"), mas mantendo a mesma
  estrutura de componentes.
---

## 2. Cores (tokens)

### Superfícies (tema escuro Forge)
| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0B0F19` | Fundo do app |
| `surface` | `#161E2E` | Cartões (cards) |
| `surfaceRaised` | `#1B2536` | Superfícies elevadas, chips, inputs internos |
| `panel` | `#121215` | Fundo de modais/painéis |
| `border` | `#2A3344` | Bordas de cartões e painéis |
| `borderInput` | `#2E3A4D` | Bordas de inputs |
| `divider` | `#1B2536` | Linhas divisórias (header/nav) |

### Texto
| Token | Hex | Uso |
|---|---|---|
| `text` | `#f0f0f2` | Texto principal |
| `textMuted` | `#9a9aa2` | Texto secundário |
| `textDim` | `#9898A0` | Texto terciário / descrições |
| `textFaint` | `#8C8C94` | Rótulos pequenos, hints |
| `textDimmer` | `#6C6C74` | Texto muito apagado, placeholders de estado |

> **Nota (12/07/2026, DS-02):** valores de `textDim`/`textFaint`/`textDimmer`
> foram elevados para atingir WCAG AA (4,5:1 para dim/faint, ~3:1 para dimmer
> — uso não-textual) contra `surfaceRaised` (`#1B2536`), o pior caso entre as
> superfícies escuras. Valores antigos: `#7a7a82` / `#6a6a72` / `#5a5a62`.

### Marca e semânticas
| Token | Hex | Uso |
|---|---|---|
| `accent` | `#EF4444` | **Cor da marca Forge** (vermelho). Botões primários, anel, abas ativas, foco. |
| `onAccent` | `#FFFFFF` | Texto/ícone sobre o acento vermelho |
| `success` | `#10B981` | Sucesso, confirmação, deltas positivos |
| `warning` | `#F59E0B` | Avisos, atenção |
| `danger` | `#e36a5a` | Exclusão, ação destrutiva |

### Paleta de categorias (cores atribuíveis pelo usuário / categorização)
Sequência canônica, use nesta ordem:
`#EF4444` (vermelho), `#2563EB` (azul), `#8B5CF6` (roxo), `#10B981` (verde),
`#F59E0B` (âmbar), `#EC4899` (rosa).

Paleta estendida (quando precisar de mais cores, ex.: muitas categorias):
`#38BDF8` `#34D399` `#FB923C` `#84CC16` `#F472B6` `#22D3EE` `#A78BFA`
`#FBBF24` `#818CF8`.

### Contraste automático — `onColor()`
Nunca codifique manualmente a cor do texto sobre um fundo colorido. Use o helper
`onColor(hex)`: ele calcula a luminância e devolve `#0B0F19` (escuro) para cores
claras ou `#FFFFFF` (branco) para cores escuras. Isso garante legibilidade em
qualquer cor da paleta. (Implementação no `forge-design-system.js`.)

---

## 3. Tipografia

- **Fonte de título:** `Barlow Condensed` (pesos 600/700/800), sempre
  `text-transform: uppercase`, `letter-spacing` leve (~0.5px). Usada em logo,
  títulos de tela, números de destaque.
- **Fonte de corpo:** `Inter` (pesos 400–800). Usada em todo o resto.
- Importadas via Google Fonts no `globalCss`.
### Escala de tamanhos (px) e usos típicos
| Tamanho | Peso | Uso |
|---|---|---|
| 40 | 700 | Logo grande (tela de login) |
| 34 | 700 | Título principal de tela (Barlow) |
| 22–24 | 700 | Logo header / títulos de painel (Barlow) |
| 16 | 700 | Títulos de card |
| 14.5 | 500 | Texto de input |
| 14 | 600 | Texto de item de lista |
| 13–13.5 | 600 | Texto de corpo secundário |
| 12.5 | 700 | Chips, filtros |
| 11.5 | 700 | Rótulos (uppercase, `letterSpacing: 1`) |
| 10.5 | 700 | Mini-rótulos |

---

## 4. Forma e espaçamento

- **Raio de borda:** cards 14px, painéis 18px, inputs 10px, botões 11px,
  chips/inputs pequenos 7–8px, pills 999px (totalmente arredondado).
- **Largura máxima do app:** 480px, centralizado (`margin: 0 auto`).
- **Padding de tela:** 18–22px nas laterais.
- **Padding de card:** 16–18px.
- **Gaps comuns:** 8–12px entre itens de lista; 9–11px entre cards.
- **Toque mínimo:** botões e alvos com altura ~40–44px.
---

## 5. Componentes

Todos definidos como objetos de estilo (ou funções que recebem `accent`) em
`forge-design-system.js`. Os principais:

- **`root`** — container raiz do app (tema, fonte, largura máx, coluna flex).
- **`headerBar`** — cabeçalho fixo no topo (logo à esquerda, ações à direita).
- **`navBar` / `navBtn(active)`** — navegação inferior por abas; aba ativa em
  acento com borda superior.
- **`card`** — cartão base. **`rowCard`** — variante em linha (ícone + texto).
- **`primaryBtn(accent)`** — botão de ação principal (preenchido, texto via
  `onColor`).
- **`pillBtn(accent, filled)`** — botão arredondado (filled ou contornado).
- **`chipBtn(color, weight)`** — chip pequeno (ex.: timer, vídeo).
- **`filterChip(active, color)`** — chip de filtro rolável (ativo preenchido).
- **`textInput` / `inputStyle` / `selectStyle`** — campos de formulário.
- **`labelStyle` / `miniLabel`** — rótulos de campo (uppercase).
- **`overlay` / `panel` / `panelHeader`** — modais (fundo desfocado + painel
  centralizado).
- **`iconBtn`** — botão só-ícone (header, fechar modal).
### Padrões de interação
- **Confirmação destrutiva em 2 toques:** ações de excluir/reiniciar mostram um
  estado de confirmação inline (vermelho `danger`) antes de efetivar. Nunca
  excluir em um toque só.
- **Ícones:** SVG inline, traço (`stroke`) de ~2px, estilo Feather (linhas
  limpas, cantos arredondados). Tamanho base 16–18px.
- **Anel de progresso (`Ring`)** como elemento de assinatura: círculo de fundo
  + arco em acento, usado em progresso e na tela de carregamento.
---

## 6. Animações

Definidas no `globalCss`. Mantêm o nome com prefixo legado `ciclo7-` por
compatibilidade (não precisa renomear; é interno):
- **`ciclo7-spin`** — rotação contínua (anel de carregamento).
- **`ciclo7-pulse`** — pulso suave de escala+opacidade (logo no carregamento).
- **`ciclo7-dots`** — reticências animadas (".", "..", "...").
- Sempre respeite `prefers-reduced-motion: reduce` (já incluso no `globalCss`).
---

## 7. Tela de login (padrão da família)

Toda a família usa **a mesma tela de login** — muda apenas o símbolo da marca e
o texto da tagline. Estrutura, de cima para baixo:

1. **Logo:** símbolo da marca (imagem PNG transparente ou SVG) + nome do app em
   Barlow Condensed uppercase, com a inicial destacada no acento.
2. **Tagline:** uma linha curta em `textDim`.
3. **Botão "Continuar com Google"** — fundo branco, texto escuro, logo do Google
   colorido à esquerda. (Fallback para `signInWithRedirect` se o popup for
   bloqueado.)
4. **Divisor "ou".**
5. **Campos** email e senha (`textInput`).
6. **"Esqueci minha senha"** (modo entrar) — dispara reset por email.
7. **Botão primário** "Entrar" / "Criar conta" (`primaryBtn(accent)`).
8. **Alternador** entre entrar e criar conta.
Comportamentos incluídos: vínculo guiado quando o email já existe com outro
método (Google ↔ email/senha), mensagens de erro/sucesso traduzidas, estados de
carregamento. O código completo está em `forge-design-system.js`
(`LoginScreen`). Para um novo app, **copie o componente e troque só o
`<BrandMark/>` e a tagline.**

### Marca no app (`BrandMark`)
O símbolo aparece em 3 lugares: login (~40px), carregamento (~56px, dentro do
anel girando) e header (~26px). Use uma imagem PNG **com fundo transparente**
embutida como data URI (carrega offline, sem requisição), ou um SVG. Cada app
da família define o seu `BrandMark` — é o principal ponto de diferenciação.

---

## 8. Variações de tema entre apps irmãos

A família admite personalidades distintas mantendo o mesmo sistema. Duas formas
de variar, em ordem de preferência:

1. **Só o símbolo + acento (recomendado).** Mantém o tema escuro Forge e troca
   apenas o `BrandMark` e, se quiser, a cor `accent`. Máxima unidade visual.
2. **Inverter para tema claro (ex.: um app "Fuel").** Mantém os mesmos
   componentes, raios, tipografia e espaçamento, mas troca o conjunto de
   superfícies/texto para claro. Para isso, redefina os tokens de superfície e
   texto (fundo off-white, cards brancos, texto grafite) e ajuste o `accent`
   (ex.: verde). **Não** mude raios, fontes, componentes nem animações — só as
   cores. Assim os apps continuam reconhecíveis como família.
> Regra de ouro: o usuário deve bater o olho em dois apps da família e saber, na
> hora, que são do mesmo ecossistema. Estrutura e componentes são imutáveis;
> símbolo e (opcionalmente) tema/acento são os graus de liberdade.

---

## 9. Como aplicar num app novo (passo a passo)

1. Copie `forge-design-system.js` para o topo do `app.js` do novo app (tokens,
   `onColor`, estilos base, `Ring`, `LoginScreen`, `LoadingScreen`, `globalCss`).
2. Defina o `BrandMark` do novo app (seu símbolo PNG/SVG) e a tagline.
3. Use os estilos (`card`, `primaryBtn(accent)`, `textInput`, etc.) em todas as
   telas — não crie estilos avulsos fora do sistema.
4. Para um app de tema claro, redefina apenas os tokens de superfície/texto e o
   `accent`, conforme a seção 8.
5. Mantenha os padrões: navegação inferior, confirmação destrutiva em 2 toques,
   ícones Feather, anel como assinatura, animações com `prefers-reduced-motion`.
---

## 10. Referência rápida de cores

```
FUNDO        #0B0F19      TEXTO         #f0f0f2
CARTÃO       #161E2E      TEXTO MUTED   #9a9aa2
ELEVADO      #1B2536      TEXTO DIM     #9898A0
BORDA        #2A3344      TEXTO FAINT   #8C8C94
BORDA INPUT  #2E3A4D      
                          
ACENTO       #EF4444      SUCESSO       #10B981
SOBRE ACENTO #FFFFFF      AVISO         #F59E0B
                          PERIGO        #e36a5a
```
