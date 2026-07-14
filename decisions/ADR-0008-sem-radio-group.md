# ADR-0008: Sem Radio group dedicado — seleção única via Pill, SegmentedControl ou Select
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-045

## Contexto
Radio buttons resolvem "escolha exatamente uma opção", mas o alvo de toque do círculo é pequeno, a estética de bolinha destoa do sistema (chips/pills), e o caso já está coberto por primitivos existentes.

## Decisão
**Não** criamos componente Radio group. Seleção única é feita, por número de opções:
- **2–3 opções mutuamente exclusivas:** `SegmentedControl` (OP-033) — tem semântica de grupo;
- **poucas opções como filtro/escolha:** linha de `Pill` com `active`;
- **muitas opções / listas longas:** `Select` = trigger + `Panel` de opções (OP-026), com o item escolhido marcado.

## Consequências
- Um padrão de seleção coerente com a linguagem de pills/painéis do sistema.
- Alvos de toque ≥44px por padrão nos três primitivos.
- Menos um componente para manter.

## Alternativas consideradas
- **Radio group acessível padrão:** rejeitado — não agrega sobre `SegmentedControl`/`Select` e adiciona um estilo visual estranho ao DS.
