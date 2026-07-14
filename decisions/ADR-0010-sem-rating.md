# ADR-0010: Sem Rating — sem estrelas/nota no produto
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-051

## Contexto
Componente de rating (estrelas, 1–5) serve avaliação de conteúdo/marketplace. O produto é treino e nutrição pessoais — não há conteúdo a ser avaliado por nota nem loja. Criar o componente seria inventário morto.

## Decisão
**Não** criamos componente Rating. Se surgir necessidade de percepção subjetiva (ex.: RPE — esforço percebido na série), ela será modelada como escala semântica explícita via `SegmentedControl` ou `Pill` row com rótulos (leve/médio/pesado), **não** como estrelas.

## Consequências
- Sem estrelas na linguagem visual (coerente com a estética sóbria do DS).
- Escalas de esforço, se vierem, reusam primitivos existentes com rótulos claros.

## Alternativas consideradas
- **Star rating genérico "por precaução":** rejeitado — YAGNI; adiciona manutenção sem caso de uso.
- **Escala de emojis:** rejeitada — destoa da voz e do visual do sistema.
