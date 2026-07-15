# ADR-0082: Vocabulário de botões/chips e prop de rótulo canônica
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mateus (delegou ao conselho) · **Task:** T-53, T-43

## Contexto
A auditoria apontou "5 vocabulários de botão concorrentes" (Button, ConfirmButton, HeaderAction, Pill, QuickAction) e inconsistência na prop de rótulo (`title` em Button/Pill; `label` no resto). Revendo caso a caso, os cinco **não são cinco jeitos de fazer o mesmo botão** — são papéis distintos. A duplicação real é só **Pill ≈ FilterChip** (ambos chips selecionáveis).

## Decisão

### 1. Papéis (mantidos, com fronteiras documentadas)
- **Button** — elemento de AÇÃO (primary/secondary/ghost/danger, loading, ícone). Texto via `title`/`children`.
- **ConfirmButton** — comportamento (ação destrutiva em 2 toques + aria-live). Não é estilo; permanece separado.
- **QuickAction** — tile de dashboard (ícone grande + rótulo em grade). Não é um botão de ação genérico.
- **Pill** — **chip selecionável canônico** (escolha/toggle/filtro), com `aria-pressed`, `icon`, `size`, e agora `count`.
- **HeaderAction** — **DEPRECADO**: alias fino de `Button variant="secondary" size="sm"`. Migrar para Button.

### 2. FilterChip → Pill
`FilterChip` era um quase-duplicado de `Pill` (mesma semântica de chip). **Pill absorve** o papel: ganhou `count` (badge) e a prop `label`. `FilterChip` fica como **alias deprecado** (0 consumidores reais hoje — só o barrel e um card de guideline). Migrar usos para `Pill`.

### 3. Prop de rótulo canônica
- **Chips e campos** usam **`label`** (Pill passou a aceitar `label`; `title` vira alias deprecado no Pill).
- **Botões de ação** (Button) mantêm **`title`/`children`** — é o conteúdo do botão, não o rótulo de um controle. Distinção principiada (label descreve o propósito de um controle; title/children é o texto do botão), que evita uma renomeação em cascata de baixo valor.

## Consequências
- Sem quebra imediata: `title` segue funcionando em Pill (deprecado); HeaderAction/FilterChip seguem funcionando (deprecados).
- A remoção efetiva de HeaderAction/FilterChip e a migração dos exemplos/cards ficam para uma limpeza incremental (v2.x), guiada por estes @deprecated.

## Pendente (não neste ADR)
- **T-43 (DRY de rótulo):** compor o primitivo `Label` dentro dos campos que hoje reimplementam o eyebrow inline (TextField/Select/SegmentedControl/Slider). Adiado por ser sensível a verificação VISUAL (o `Label` casa com o inline, mas a troca precisa de um olhar renderizado) — fazer com preview.
