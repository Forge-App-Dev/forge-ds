# ADR-0005: Sem Material You / dynamic color — identidade acima de personalização
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-146, OP-167

## Contexto
Android 12+ oferece Material You: a paleta do app deriva do papel de parede do usuário. Isso é incompatível com uma marca cuja energia inteira vem de **um** acento vermelho (`#EF4444`), acentos de módulo fixos (Nutrição verde) e um trio de cores de macro imutável.

## Decisão
**Não** adotamos Material You nem dynamic color. As cores são 100% dos tokens do sistema, iguais em todos os aparelhos. O tema é dark grafite fixo (a variante light é decisão de token do DS, não do SO).

## Consequências
- Marca reconhecível e consistente entre dispositivos e capturas de tela (importante para PR compartilhável — ver ADR-0018).
- Contraste e `onColor()` permanecem previsíveis; nada de recolorir superfícies em runtime.
- Mata a pergunta recorrente "vamos suportar cor dinâmica?".

## Alternativas consideradas
- **Aderir ao dynamic color no Android:** rejeitado — quebraria a semântica de acento único e das macro-cores.
- **Opt-in de tema por usuário:** fora de escopo; se surgir, é um token de tema do DS, nunca herança do papel de parede.
