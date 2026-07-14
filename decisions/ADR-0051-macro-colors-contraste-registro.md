# ADR-0051: Contraste registrado das macro colors (tema dark)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-102

## Contexto
As macro colors (`protein #E5645E`, `carb #E0A23B`, `fat #4C9BD6`) são um trio fixo de identidade, nunca reutilizado. Nunca foram auditadas para contraste (DS-02). São usadas como **preenchimento** (barra do MacroMeter, dot, fill do MetaBar) sobre as superfícies, e ocasionalmente como cor de rótulo/número.

Contraste WCAG das macros contra as superfícies:

Contraste no tema dark (único tema — Forge é dark-only):
| Macro | vs surface `#161E2E` | vs surfaceRaised `#1B2536` | vs bg `#0B0F19` |
|---|---|---|---|
| protein `#E5645E` | 5.02 | 4.63 | 5.76 |
| carb `#E0A23B` | 7.47 | 6.89 | 8.57 |
| fat `#4C9BD6` | 5.53 | 5.11 | 6.35 |

## Decisão
1. As três macros passam ≥ 4.63:1 contra qualquer superfície → **aprovadas para uso não-textual (3:1) e para texto grande (3:1); protein/fat aprovam texto de corpo (4.5:1) só contra `surface`/`bg`, não contra `surfaceRaised` (4.63 ok; carb ok em tudo)**. Regra prática: macro color como **preenchimento de gráfico/barra/dot** é sempre válida (componente gráfico → 3:1, SC 1.4.11).
2. As macros **não mudam** (identidade de família, conforme readme). A conformidade é obtida por **regra de uso**, não por reajuste de hex.
3. Números de macro (ex.: "120 g") herdam `--forge-text` / `--forge-text-muted`, nunca a macro color.

## Consequências
- Tabela de contraste acima vira o card de foundation das macro colors (guidelines) e entra em `docs/accessibility-checklist.md`.
- Regra explícita: número de macro nunca usa a cor da macro (herda a cor de texto).
- Reforço não-cromático das macros (dot/label/padrão) é tratado no ADR-0052 (daltonismo) — este ADR cobre só contraste de luminância.

## Alternativas consideradas
- **Não registrar (status quo):** rejeitada — OP-102 existe justamente porque o par nunca foi medido; sem número não há regra citável.
