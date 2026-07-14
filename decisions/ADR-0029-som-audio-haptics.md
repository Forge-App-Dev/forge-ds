# ADR-0029: Som/áudio — haptics-only, sem sons de UI
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-093

## Contexto
O DS não menciona áudio (OP-093). Faltava decidir se há sons de UI e qual o canal de
feedback não-visual, coerente com um sistema minimalista e sem toasts.

## Decisão
**Sem sons de UI.** Nenhum toque, transição, sucesso ou erro emite som. O canal de
feedback não-visual é **haptics**, cujo mapa evento→feedback é definido no
**ADR-0019** (haptics e gestos) e reproduzido em `docs/platform/PLATFORM_IOS.md`
§2.3, respeitando o ajuste de haptics/Reduce Motion do SO.

**Exceção (produto):** o `RestTimer` pode emitir um **alerta sonoro no fim do
descanso** — é o único momento em que a tela pode estar apagada / o telefone no
bolso e o haptic sozinho não basta. Deve ser: opcional (toggle nas preferências),
curto, e nunca tocar com o app em foreground silencioso se o usuário desligou.
**Ratificado (default): permitir o alerta sonoro opcional do `RestTimer` nas
condições acima.** Delegado pelo owner em 2026-07-14; pode ser revisitado.

## Consequências
- App silencioso por padrão — coerente com "sem toasts, minimalista".
- Feedback tátil consistente entre plataformas via `expo-haptics`.
- O único som (fim de descanso) é justificado por caso de uso real de treino e fica
  sob controle do usuário.

## Alternativas consideradas
- **Sons de UI (cliques, sucesso):** rejeitado — ruído, quebra o tom minimalista,
  raramente bem-vindo em app de treino em academia.
- **RestTimer sem som algum:** rejeitado como padrão — usuário perde o fim do
  descanso com a tela apagada; por isso a exceção opcional.
