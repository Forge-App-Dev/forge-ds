# Matriz de estados

Fecha **OP-137**. Estados que cada família de componente **deve** tratar. Fonte visual dos estados: `readme.md` (§Hover/press states) e `tokens/colors.css`/`base.css` (opacidades). A11y de cada estado: `docs/accessibility-checklist.md`.

## Regras transversais de estado

- **Press:** esmaece para `--forge-opacity-press` (~0.85). Sem color-shift, sem scale-shrink (`readme.md`).
- **Disabled:** cai para `--forge-opacity-disabled` (~0.5). Não é só visual — o alvo não recebe foco nem toque.
- **Focus:** anel visível via classe `forge-focusable` (nunca `outline:none` sem substituto). Vale em teclado e navegação por foco.
- **Cor nunca é o único meio** (ADR-0052): todo estado semântico (error/success/etc.) carrega também ícone/rótulo/texto.

## Matriz por família

`—` = não se aplica. "n/a" = a família não expõe esse estado por design.

| Família | default | hover¹ | press | focus | disabled | loading | error | empty |
|---|---|---|---|---|---|---|---|---|
| **Botões/pressáveis** (`Button`, `ConfirmButton`, `Pill`, `QuickAction`, `Card` pressável) | ✓ | ✓ | opacity-press | forge-focusable | opacity-disabled, sem foco | `Button` prop `loading` (spinner, largura preservada) | via `ConfirmButton` armado / haptic error (ADR-0019) | — |
| **Campos** (`TextField`, `QtyInput`, `SearchField`, `Select`, `Switch`, `Stepper`) | ✓ | ✓ | — | forge-focusable | opacity-disabled | — | `error` → borda danger + `role="alert"` + `aria-invalid` (ver `validation.md`) | placeholder |
| **Overlays** (`Panel`, `FullScreen`, `VideoModal`) | aberto/fechado | — | — | foco preso | — | conteúdo pode ter `Skeleton`/`Spinner` | `ErrorState` no corpo | `EmptyState` no corpo |
| **Progresso/feedback** (`Ring`, `MacroMeter`, `MetaBar`, `ProgressBar`, `Spinner`, `Skeleton`) | valor | — | — | — | — | Spinner/Skeleton/Ring indeterminado | `ErrorState`/`InlineAlert` | `EmptyState` (reenquadra) |
| **Listas/linhas** (`ListItem`, `SetLogger`) | ✓ | ✓ | opacity-press (se `onClick`) | forge-focusable (se pressável) | opacity-disabled | Skeleton de linha | `InlineAlert` de seção | `EmptyState` |
| **Navegação** (`Tabs`, `ModuleTabBar`, `WeekStrip`, `Accordion`) | ✓ | ✓ | opacity-press | forge-focusable | opacity-disabled | — | — | — |

¹ Hover só existe em ponteiro (web kit); no mobile o estado relevante é press.

## Matriz por componente (detalhe — T-54)

A tabela por família dá a regra; esta seção lista, **por componente**, o
mecanismo concreto de cada estado (o prop/atributo real do contrato `.d.ts`).
Só componentes com estado interativo aparecem — primitivos de puro texto/layout
(`Title`, `Text`, `Label`, `SectionLabel`, `Divider`, `Screen`, `ScreenBody`,
`AppHeader`, `ModuleHeader`, `Avatar`, `Timeline`, `MacroRing`, `StreakIndicator`,
`PRCelebration`) **não expõem estado** — renderizam o valor recebido.

### Ação (botões/pressáveis)

| Componente | Estados e mecanismo |
|---|---|
| **Button** | `variant` (primary/secondary/ghost/danger) · `loading` (spinner, largura preservada) · `disabled` (opacity-disabled, sem foco/toque) · press (opacity-press) · focus (`forge-focusable`) |
| **ConfirmButton** | Máquina de 2 toques: **repouso** (`title`) → **armado** (`confirmTitle`, muda cor p/ danger + `aria-live` anuncia) → confirma. `small` só ajusta tamanho. Não tem `loading` próprio |
| **HeaderAction** | ⚠️ `@deprecated` (ADR-0082) → alias fino de `Button variant="secondary" size="sm"`. Herda os estados do Button |
| **Pill** | `active` (`aria-pressed`, chip selecionado) · `disabled` · press/focus. Chip canônico (absorve FilterChip) |
| **FilterChip** | ⚠️ `@deprecated` (ADR-0082) → migrar p/ `Pill`. `active`/`disabled` idênticos ao Pill |
| **QuickAction** | `disabled` · press/focus. Tile de dashboard; sem loading/selected |
| **Card** | `selected` (borda/realce) · `disabled` · press/focus **apenas quando pressável** (`onClick`); Card estático não tem estado interativo |

### Campos (forms)

| Componente | Estados e mecanismo |
|---|---|
| **TextField** / **PasswordField** | `value` (controlado) · `error` (borda danger + `role="alert"` + `aria-invalid`) · `required` · `disabled` · focus (`forge-focusable`). Ver `validation.md` |
| **SearchField** | `value` · focus · disabled. Sem `error` (busca não valida) |
| **QtyInput** / **Stepper** | `value` numérico · `disabled` (inclui os botões +/−). Sem `error` inline |
| **Select** / **SegmentedControl** | `value` (opção ativa) · `disabled` · focus. Seleção via `value`, não `selected` |
| **Checkbox** | `checked` · `indeterminate` · `disabled` · focus |
| **Switch** | `checked` (on/off) · `disabled` · focus |
| **Slider** | `value` · `disabled` · focus (thumb) |
| **ListItem** | `selected` · `disabled` · press/focus **se** `onClick`; senão é linha estática |

### Overlays

| Componente | Estados e mecanismo |
|---|---|
| **Panel** | `visible` (aberto/fechado) · `dismissible` (permite fechar por scrim/ESC) · foco preso enquanto aberto. Corpo pode carregar `Skeleton`/`ErrorState`/`EmptyState` |
| **FullScreen** | `visible` · `right`/`footer` (slots). Fluxo longo; foco preso |
| **VideoModal** | `visible`. Estados do player (buffering) são do `<video>`, não do componente |

### Feedback / progresso

| Componente | Estados e mecanismo |
|---|---|
| **Spinner** | Indeterminado sempre. `label` = texto de status; **`label={null}` → decorativo** (`aria-hidden`, não anuncia) quando já há rótulo no contexto |
| **Skeleton** / **SkeletonText** | `variant` (forma do placeholder). Estado único: carregando |
| **ProgressBar** / **MetaBar** / **MacroMeter** | `value` (determinado). Sem indeterminado — use Spinner p/ isso |
| **Ring** | `value` **ou** `indeterminate` (carregando). Dois modos |
| **InlineAlert** | `kind` (info/success/warning/danger) — o tom É o estado; sempre com ícone+texto (cor nunca sozinha, ADR-0052) |
| **Badge** / **StatBadge** | `variant` (accent/neutral) · `dot` (sem número) · `count`. Estático — reflete valor |
| **EmptyState** | Estado de tela "vazio" empacotado: `icon`+`title`+`subtitle`+`action` |
| **ErrorState** | Estado de tela "erro": `title`+`subtitle`+retry (`retryLabel`) · `compact` |
| **LoadingScreen** | Estado de tela "carregando" (arco + marca). Sem props de estado |

### Navegação

| Componente | Estados e mecanismo |
|---|---|
| **Tabs** / **ModuleTabBar** | `active` (aba/ícone atual) · press/focus · disabled por item |
| **WeekStrip** | `selected` (dia atual) · press/focus |
| **Accordion** | `open` (expandido/recolhido) · focus no cabeçalho |
| **PageDots** | `active` (página atual) — indicador, não pressável |

### Produto (composições de domínio)

| Componente | Estados e mecanismo |
|---|---|
| **RestTimer** | `running` (contando/pausado) · `duration`. Compõe Ring/ProgressBar |
| **SetLogger** | `done` (série registrada vs pendente) · `weight`/`reps` editáveis (herdam estados de QtyInput) |
| **OfflineBanner** | Presente/ausente (transversal) · `actionLabel` opcional |
| **CoachNote** / **TargetsCard** | Estáticos — exibem conteúdo; sem estado interativo próprio |

## Estados de tela (não de componente)

Toda tela que carrega dado deve tratar os quatro: **loading** (`Skeleton`/`LoadingScreen`), **conteúdo**, **vazio** (`EmptyState`, positivo — nunca em branco), **erro** (`ErrorState` com retry). Offline é transversal (`OfflineBanner`). Ver `search.md` e `edge-cases.md`.

## Nota

Não há estado "selected" genérico universal: seleção é específica — `Card selected`, `Pill`/`FilterChip` `active` (`aria-pressed`), item de `Select`. Não invente um novo.
