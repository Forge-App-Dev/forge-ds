# ADR-0025: Política de telas grandes (tablet / foldable)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-019, OP-185

## Contexto
A pergunta obrigatória da auditoria (OP-185) "suporta tablets/foldables?" não tinha
resposta escrita (P-26). O app centraliza uma coluna de 480, mas isso nunca foi
declarado como decisão nem havia resposta para navigation rail / dual-pane /
postura de foldable.

## Decisão
**Coluna única de `--forge-app-max-width` (480) centralizada em qualquer largura**,
com `--forge-bg` preenchendo as laterais. Vale para phone (retrato/paisagem),
tablet e foldable (dobrado ou aberto). **Sem** navigation rail, **sem** duas
colunas, **sem** master-detail, **sem** densidade compacta. Breakpoints
`--forge-bp-large` (600) e `--forge-bp-xlarge` (840) permanecem **documentais**;
só `phone` (480) é ativo. Detalhes em `docs/platform/ADAPTIVE_SCREENS.md`.

## Consequências
- Resposta única e testável para "funciona em tablet?" por anos, a custo de um
  parágrafo.
- Em tablets, muito espaço de bg vazio — aceito enquanto o produto é phone-first.
- **Regra futura registrada (não implementada):** em ≥840dp um `FullScreen` pode
  virar `Panel` largo. **Ratificado (default): gatilho de reabertura = alvo de
  tablet no roadmap OU ≥15% dos dispositivos ≥600dp.** Delegado pelo owner em
  2026-07-14; pode ser revisitado.

## Alternativas consideradas
- **Sistema adaptativo Material 3 (rail + dual-pane em 600/840):** rejeitado agora —
  caro e sem caso de uso; produto é phone-only por escolha.
- **Esticar a coluna para preencher telas largas:** rejeitado — quebra a métrica de
  linha e a densidade calibrada para 480.
