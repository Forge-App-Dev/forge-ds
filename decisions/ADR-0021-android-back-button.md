# ADR-0021: Comportamento do "voltar" no Android
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-145

## Contexto
O Android tem back de sistema (botão ou gesto de borda). O comportamento no Forge
era indefinido (OP-145): um back podia fechar algo errado, sair do app sem aviso
ou executar ação destrutiva sem guard.

## Decisão
Mapa canônico de `onBack` por contexto, do mais interno ao mais externo:
1. **FullScreen aberto** → fecha passando pelo guard `onBeforeClose` (form sujo →
   Panel "descartar alterações?"). Nunca perde dados em 1 back.
2. **Panel / VideoModal aberto** → fecha (equivale a tap-fora).
3. **Tela secundária numa pilha** → volta 1 nível.
4. **Aba não-inicial de um módulo** → volta à primeira aba do módulo.
5. **Primeira aba do módulo** → volta ao Module Chooser.
6. **Raiz (Module Chooser / Login)** → sai do app (padrão do SO), **sem** "toque de
   novo para sair".
Implementação central via `BackHandler` + `beforeRemove` do React Navigation —
não espalhado por tela. O mesmo guard atende o edge-swipe do iOS (ADR-0020).

## Consequências
- Back é previsível: um back = um nível de reversão; nunca destrói sem guard.
- Regra reaproveitada no iOS (gesto de borda), reduzindo divergência de plataforma.
- "Toque de novo para sair" fica de fora. **Ratificado (default): não adotar
  "toque de novo para sair"; back na raiz sai do app (padrão do SO).** Padrão de
  mercado é dividido; mantém-se simples por ora. Delegado pelo owner em
  2026-07-14; pode ser revisitado.

## Alternativas consideradas
- **Deixar o padrão do React Navigation cru:** rejeitado — não cobre modais com
  guard nem a volta ao Module Chooser.
- **Double-back-to-exit na raiz:** não adotado agora (ver acima).
- **Back sempre fecha o app:** rejeitado — perde a hierarquia de módulos.
