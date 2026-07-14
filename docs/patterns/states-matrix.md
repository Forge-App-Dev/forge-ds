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

## Estados de tela (não de componente)

Toda tela que carrega dado deve tratar os quatro: **loading** (`Skeleton`/`LoadingScreen`), **conteúdo**, **vazio** (`EmptyState`, positivo — nunca em branco), **erro** (`ErrorState` com retry). Offline é transversal (`OfflineBanner`). Ver `search.md` e `edge-cases.md`.

## Nota

Não há estado "selected" genérico universal: seleção é específica — `Card selected`, `Pill`/`FilterChip` `active` (`aria-pressed`), item de `Select`. Não invente um novo.
