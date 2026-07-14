# ADR-0007: Sem Tooltip — contexto é texto de apoio visível
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-043

## Contexto
Tooltip é um padrão de hover, nascido no desktop. No touch não há hover: exige long-press ou tap num "?", tem descoberta ruim, posiciona mal em telas pequenas e é frágil para leitores de tela.

## Decisão
**Não** haverá Tooltip. Explicação e contexto aparecem de forma persistente:
- **helper text** abaixo do campo (`TextField`);
- **`InlineAlert`** para avisos de seção;
- **`CoachNote`** para orientação na voz da marca;
- quando precisar de detalhe sob demanda, um `Panel` de "Saiba mais" acionado por um controle rotulado — não um balão de hover.

## Consequências
- Toda informação de apoio é legível sem gesto de descoberta e acessível por padrão.
- Elimina bug de posicionamento de balão em telas estreitas.

## Alternativas consideradas
- **Tooltip por long-press:** rejeitado — gesto escondido sem affordance (fere OP-078).
- **Popover de ajuda:** rejeitado — é o `Panel` com outro nome; usar o `Panel`.
