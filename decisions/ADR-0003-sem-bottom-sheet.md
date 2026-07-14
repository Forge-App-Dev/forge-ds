# ADR-0003: Sem Bottom Sheet — overlays só Panel e FullScreen
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-167

## Contexto
O `Panel` já foi uma folha inferior ("Sheet") e foi convertido em painel centralizado no lote v1.2.0. Bottom sheets arrastáveis têm gesto e altura ambíguos, brigam com a `ModuleTabBar` e o teclado no Android, e multiplicam o número de padrões de overlay.

## Decisão
O sistema tem **exatamente dois** overlays, escolhidos pelo tamanho do fluxo:
- **`Panel`** (centralizado, fade, tap-fora fecha) — escolhas, seletores, confirmações, formulários curtos.
- **`FullScreen`** (slide, header com ✕) — formulários longos e telas de montagem.

Bottom sheet (fixo ou arrastável) é **proibido**.

## Consequências
- Regra de decisão binária e memorável (pequeno → Panel; grande → FullScreen).
- Sem gesto de arraste para manter/dispensar; comportamento previsível com teclado.
- `Panel` respeita a exceção de tap-fora para formulário sujo (ver OP-141).

## Alternativas consideradas
- **Bottom sheet para seletores:** rejeitado — o `Panel` cobre o caso sem gesto ambíguo.
- **Sheet arrastável em 2 alturas:** rejeitado — complexidade de estado sem ganho no mobile de uma coluna.
