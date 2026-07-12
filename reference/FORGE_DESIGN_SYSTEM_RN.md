# Forge Design System — React Native (forge-app)

> Design system **dedicado ao app nativo** `forge-app` (React Native / Expo).
> Documento **vivo**: manter e aprimorar à medida que o app evolui. Descreve os
> tokens, os componentes de UI e os padrões **como estão no código real** de
> `src/`, não de memória.
>
> **Relação com os outros docs de design:**
> - `FORGE_DESIGN_SYSTEM.md` = design system **da família** (PWA + apps irmãos),
>   escrito em termos de CSS/JS inline. É a referência conceitual.
> - **Este documento** = a **tradução para RN** desses princípios, com as
>   particularidades da plataforma (StyleSheet, famílias de fonte por peso,
>   `react-native-svg`, `Modal`, `KeyboardAvoidingView`, safe area).
> - Em conflito de detalhe entre os dois, **para o forge-app vale este**.
>
> **Fonte da verdade no código:** `src/theme/tokens.js` (tokens) e
> `src/components/ui.jsx` (componentes). Ao mudar um token ou componente lá,
> atualizar aqui.

---

## 1. Princípios (RN)

- **Tokens centralizados.** Toda cor, raio, espaçamento, família de fonte e
  tamanho vem de `src/theme/tokens.js`. Nunca cravar hex/raio/tamanho solto num
  `StyleSheet` de tela — importar do token.
- **Componentes base reutilizáveis.** Telas montam a partir dos componentes de
  `src/components/ui.jsx` (`Card`, `Button`, `Panel`, `FullScreen`, etc.), não
  reinventam `View` estilizada por conta própria.
- **`StyleSheet.create` sempre.** Estilos em objeto no fim do arquivo, não inline
  espalhado (exceto ajustes pontuais de uma prop calculada).
- **Tema escuro grafite** como base (mesma paleta da família).
- **Mobile-first, uma coluna.** Conteúdo centralizado com `maxWidth` (480);
  navegação inferior por abas dentro de cada módulo.

---

## 2. Tokens — `src/theme/tokens.js`

### 2.1 Cores (`colors`)
Superfícies: `bg #0B0F19` · `surface #161E2E` · `surfaceRaised #1B2536` ·
`panel #121215` · `border #2A3344` · `borderInput #2E3A4D` · `divider #1B2536`.

Texto: `text #f0f0f2` · `textMuted #9a9aa2` · `textDim #9898A0` ·
`textFaint #8C8C94` · `textDimmer #6C6C74`.

Marca e semânticas: `accent #EF4444` (vermelho Forge) · `onAccent #FFFFFF` ·
`success #10B981` · `warning #F59E0B` · `danger #e36a5a`.

Acento do módulo Nutrição/Fuel: `nutrition #10B981` (usado como `NG` nas telas
de nutrição — botões, anel, chips).

### 2.2 Paletas
- `palette` (categorias, sequência canônica): `#EF4444 #2563EB #8B5CF6 #10B981
  #F59E0B #EC4899`.
- `paletteExtended` (quando precisar de mais): `#38BDF8 #34D399 #FB923C #84CC16
  #F472B6 #22D3EE #A78BFA #FBBF24 #818CF8`.
- `macroColors` (**fixas**, identidade da família — nunca mudam):
  proteína `#E5645E`, carbo `#E0A23B`, gordura `#4C9BD6`.

### 2.3 `onColor(hex)`
Decide texto claro/escuro sobre um fundo colorido pela luminância
(`lum > 0.62 → #0B0F19`, senão `#FFFFFF`). **Nunca** cravar cor de texto sobre
fundo colorido na mão — passar por `onColor`.

### 2.4 Raios (`radius`)
`card 14` · `panel 18` · `input 10` · `button 11` · `chip 8` · `pill 999`.

### 2.5 Espaçamento (`spacing`) e largura
`screenH 20` (padding horizontal de tela) · `card 16` · `gap 10`.
`maxWidth 480` (conteúdo centralizado).

### 2.6 Tipografia
Fontes carregadas via `expo-font` + `@expo-google-fonts`. **Cada peso é uma
família própria** — no Android **nunca** combinar `fontWeight` com fonte custom
(derruba pro sistema). Famílias (`fonts`):
- Títulos (Barlow Condensed, uppercase): `title` = `BarlowCondensed_700Bold`,
  `titleSemi` = `_600SemiBold`, `titleExtra` = `_800ExtraBold`.
- Corpo (Inter): `body` = `Inter_400Regular`, `bodySemi` = `_600SemiBold`,
  `bodyBold` = `_700Bold`, `bodyExtra` = `_800ExtraBold`.

Escala (`fontSize`): `logoLg 40` · `screenTitle 34` · `panelTitle 22` ·
`cardTitle 16` · `input 14.5` · `listItem 14` · `body 13.5` · `bodySm 13` ·
`chip 12.5` · `label 11.5` · `miniLabel 10.5`.

---

## 3. Componentes base — `src/components/ui.jsx`

Layout e tela:
- **`Screen`** — tela isolada com safe area própria (`edges top/left/right`),
  rolável por padrão. Usada fora dos módulos (ex.: telas de boot).
- **`ScreenBody`** — corpo de tela **dentro** de um módulo (o `ModuleShell` já
  cuida da safe area). Rolável por padrão.
- **`ModuleHeader`** — cabeçalho de módulo: `eyebrow` (rótulo pequeno) + `title`
  grande (Barlow) + slot `right` (ex.: botão "Ajustar").

Texto: **`Title`**, **`Label`** (uppercase, `letterSpacing 1`),
**`SectionLabel`** (label com margem de seção).

Superfície e ação:
- **`Card`** — cartão base (`surface`, raio 14, borda).
- **`Button`** — ação principal preenchida; `small` para versão compacta; cor do
  texto via `onColor(color)`. Cor padrão `accent`; passar `colors.nutrition` no
  Fuel.
- **`Pill`** — botão arredondado (contornado / preenchido quando `active`).
- **`ConfirmButton`** — **destrutivo em 2 toques** (arma por 2,5 s e mostra
  `confirmTitle`, depois confirma). Nunca excluir em 1 toque.
- **`TextField`** — input com rótulo; suporta `multiline`, `keyboardType`,
  `maxLength`, `autoCapitalize`.
- **`HeaderAction`** — botão de ação do header de tela cheia (contornado,
  discreto; ex.: "⇄ Replicar").

Modais (ver seção 4): **`Panel`**, **`FullScreen`**.

Outros componentes em `src/components/`:
- **`Ring`** (`Ring.jsx`) — anel de progresso (assinatura da marca), em
  `react-native-svg`: círculo de fundo (`track`) + arco em `color`, girado −90°,
  `strokeLinecap round`. Props: `size`, `stroke`, `progress` (0..1), `color`,
  `track`, `children` (conteúdo central). Usado no Hoje da Nutrição e no boot.
- **`MacroMeter` / `MetaBar`** (`meters.jsx`) — barras consumido/meta com as
  `macroColors`.
- **`QtyInput`** (`QtyInput.jsx`) — quantidade + seletor de unidade (só aparece
  se o alimento tem porções).
- **`MiniChart`**, **`TargetsCard`**, **`VideoModal`**, **`LoadingScreen`**,
  **`LoginScreen`**, **`AppHeader`**, **`ModuleShell`**, **`ModuleTabBar`**.

### Ícones — `src/components/icons.jsx`
SVG via `react-native-svg`, `stroke="currentColor"` (herdam cor por prop
`color`), traço ~2px estilo Feather. Conjunto disponível (sufixo `Icon`):
`Dumbbell, Flame, User, Arrow, List, Book, Chart, Calendar, Grid, Logout, Moon,
Swap, Plus, Timer, Play, Pause, Refresh, Check, Info, Pencil, X, Warn, Up, Down,
Trophy`. Marca: `ForgeMark`. **Não** existem ícones de seta esquerda/direita
dedicados além de `Arrow`.

---

## 4. Padrões de modal (o coração deste doc) — **duas variantes**

Regra de decisão pelo **tamanho do fluxo**:

### 4.1 `FullScreen` — tela cheia (fluxos grandes)
`Modal animationType="slide"` ocupando a tela toda. Estrutura:
- **Header:** `✕` à esquerda (fecha) · **título** Barlow uppercase no centro
  (`fsTitle`, tamanho `panelTitle`) · slot `right` opcional (tipicamente um
  `HeaderAction`). Borda inferior `divider`.
- **Corpo:** rolável (`scroll` padrão true), padding 18.
- **Footer opcional:** fixo embaixo, borda superior `divider`, respeita
  `insets.bottom`. Usado para o botão primário (salvar) ou destrutivo.
- Respeita safe area via `useSafeAreaInsets` (padding no topo e no footer).
- `KeyboardAvoidingView` por plataforma (`padding` iOS / `height` Android).

**Usar em:** montar/ajustar o dia (`DayPlanner`), criar/editar refeição
(`MealForm`), criar/editar/montar treino (`WorkoutEditor`), criar/editar
exercício (`ExerciseForm`). Regra: **formulário longo ou tela de montagem com
várias seções → tela cheia.**

### 4.2 `Panel` — painel centralizado (interações pequenas)
`Modal transparent animationType="fade"`. Estrutura:
- **Overlay** escuro `rgba(10,10,12,0.82)` cobrindo a tela; **tocar fora fecha**
  (`Pressable` em `absoluteFill`).
- **Painel** centralizado: fundo `panel #121215`, raio 18, borda, `width 100%`
  `maxWidth 440`, `maxHeight 80%` da tela.
- **Header:** título Barlow uppercase + `✕`.
- **Corpo:** `ScrollView` interno; `footer` opcional (ex.: botão confirmar).
- `KeyboardAvoidingView` por plataforma.

**Usar em:** escolhas rápidas (cardápio × criar na hora), seletores (alimento,
exercício), confirmações, replicar dia, formulários curtos (novo alimento,
pasta). Regra: **escolha / seletor / confirmação → painel centralizado.** Na
dúvida, `Panel` é o padrão mais leve.

### 4.3 Notas de plataforma
- **Sem desfoque de fundo no RN.** O `Modal` do Android não desfoca o conteúdo
  atrás; usa-se overlay escuro sólido. (No PWA o fundo é desfocado — diferença
  conhecida e aceita.)
- **Teclado.** `app.json` usa `android.softwareKeyboardLayoutMode: "resize"`;
  os dois modais usam `KeyboardAvoidingView` com `behavior` por plataforma, e o
  `Panel` limita `maxHeight` relativo à tela para o conteúdo subir acima do
  teclado.
- **Histórico:** `Panel` era antes um "Sheet" (folha inferior). Virou painel
  centralizado no lote **v1.2.0** e foi renomeado (`Sheet` → `Panel`) em todo o
  app. O regex do rename evitou `StyleSheet` (só a palavra isolada `Sheet`).

---

## 5. Padrões de interação (RN)

- **Faixa/barra de acento nos cards:** usar **flex-row** com a faixa como filho
  natural (`width: 4`, `alignSelf: "stretch"`) e o conteúdo num wrapper com o
  padding. **Nunca** `position: "absolute" + height: "100%"` — não cobre um card
  de altura automática (fica curta). Padrão a repetir em toda faixa lateral.
- **Confirmação destrutiva em 2 toques** via `ConfirmButton`.
- **Anel `Ring`** como elemento de assinatura (progresso e boot).
- **Cores dentro de `Pressable`/`Text`:** sempre setar `color` explícito nos
  textos/ícones importantes (não confiar em herança).

---

## 6. Armadilhas conhecidas (não repetir)

- **Fontes no Android:** nunca `fontWeight` + família custom. Usar a família do
  peso (`Inter_700Bold`, etc.). Ver `tokens.fonts`.
- **Faixa de acento:** ver seção 5 (nunca `absolute + 100%`).
- **Vídeo do YouTube:** iframe cru em WebView falha (Erro 152/153). Usar
  `react-native-youtube-iframe` (IFrame Player API por postMessage). Detalhe em
  `ESTADO_FORGE_APP_RN.md` §13.
- **Snack (protótipo):** só resolve `.js` (não `.jsx`); entrada é `App.js` com
  `export default`; sem `index.js`/`registerRootComponent`. Ver
  `FLUXO_PROTOTIPO_SNACK.md`.

---

## 7. Como evoluir este documento

1. Mudou token em `tokens.js` → atualizar seção 2.
2. Novo componente em `ui.jsx` (ou `components/`) → registrar na seção 3.
3. Novo padrão de modal/interação → seções 4 ou 5.
4. Ao portar uma tela do protótipo Snack para produção, conferir se algum token
   ou componente novo precisa entrar aqui.
5. Manter tudo **fiel ao código** — na dúvida, ler `src/` antes de escrever.

*Criado no lote v1.2.0 (novo padrão de modais). Manter vivo.*
