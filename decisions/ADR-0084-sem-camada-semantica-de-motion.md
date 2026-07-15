# ADR-0084: Sem camada semântica de motion (enter/exit/press) — primitivos bastam
**Status:** Accepted · **Data:** 2026-07-15 · **Decisor:** Mateus (delegou ao conselho) · **Task:** T-51

## Contexto
A auditoria (T-51) apontou que só existem tokens **primitivos** de motion
(`--forge-duration-*`, `--forge-ease-*`) e sugeriu uma camada **semântica**
(`enter`/`exit`/`press`), no espírito de Material/Carbon.

Revendo o consumo real: os componentes usam `--forge-duration-fast` (16x),
`-base` (7x), `-instant` (4x), `-slow` (2x) e `--forge-ease-standard` (29x) — em
**velocidades diferentes que não se agrupam** limpo em enter/exit/press. O código
não distingue "entrada" de "saída"; distingue *rapidez* (fast/base/slow), que é
justamente o que os primitivos já expressam.

## Decisão
**Não adicionar** a camada semântica de motion agora. Os primitivos de duração e
easing são a API pública de motion do sistema.

Motivos:
1. **Seria especulativo.** Tokens `enter/exit/press` nasceriam sem consumidor real
   — mapear as ~30 transições existentes para essas intenções seria *adivinhar* a
   semântica de cada uma. Isso contradiz a limpeza de tokens sem consumo
   (ADR/T-49, que removeu tokens especulativos).
2. **O sistema de motion é deliberadamente mínimo** (OP-054): três keyframes
   (`spin`/`pulse`/`celebrate`) + transições rápidas de feedback. Uma taxonomia
   enter/exit/press é peso conceitual maior que o sistema comporta.
3. **`press` nem é duração** — o feedback de toque é opacidade
   (`--forge-opacity-press`), já tokenizada.

## Gatilho de revisão
Se/quando o sistema ganhar um vocabulário de transição mais rico (ex.: overlays
com curvas de entrada/saída distintas, ou o app pedir tokens de motion
compartilhados na convergência RN), revisitar — aí a camada semântica teria
consumidor e deixaria de ser especulativa. Registrar novo ADR nesse momento.

## Consequências
- Motion segue via primitivos `--forge-duration-*`/`--forge-ease-*` + as classes
  `.forge-anim-*`. Sem tokens novos.
- Decisão registrada (não é lacuna): T-51 fechado como decisão, não como pendência.
