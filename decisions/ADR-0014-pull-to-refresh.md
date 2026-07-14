# ADR-0014: Pull-to-refresh — Ring como indicador, só em dados remotos
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-072

## Contexto
Pull-to-refresh é um gesto esperado, mas só faz sentido onde há dado remoto que pode mudar fora do app. Aplicá-lo a listas puramente locais confunde (nada muda ao puxar).

## Decisão
Pull-to-refresh é permitido **apenas em telas de dados remotos** (Fase 3 — Firestore/sync). O indicador é o **`Ring`** (motivo de assinatura), em modo indeterminado, na cor do módulo — nunca o spinner nativo genérico da plataforma. Em telas de dado 100% local, o gesto é desabilitado. Não substitui a atualização automática por foco/sync — é ação manual complementar.

## Consequências
- O gesto reforça a marca via `Ring` em vez do spinner do SO.
- Comportamento previsível: puxar só faz efeito onde há o que buscar.
- Depende da infra de sync da Fase 3 para telas reais.

## Alternativas consideradas
- **Spinner nativo do RefreshControl:** rejeitado — quebra a identidade visual (usar `Ring`).
- **Pull-to-refresh em todas as listas:** rejeitado — gesto sem efeito em dado local é ruído.
