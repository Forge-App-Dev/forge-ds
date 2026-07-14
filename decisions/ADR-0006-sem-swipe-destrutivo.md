# ADR-0006: Sem swipe destrutivo — ação destrutiva nunca fica escondida num gesto
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-073, OP-078, OP-167

## Contexto
Swipe-to-delete em linhas de lista é comum, mas esconde uma ação irreversível atrás de um gesto sem affordance visível, é fácil de disparar por engano e conflita com a filosofia do sistema de **destrutivo em 2 toques** (`ConfirmButton`).

## Decisão
**Proibido** swipe para revelar ou executar ações destrutivas. Excluir/remover sempre por controle **visível**: `ConfirmButton` (arma no 1º toque, confirma no 2º) na linha/tela, ou `Panel` de confirmação quando há consequências em cascata (ver ADR-0013). Swipe permanece válido apenas como scroll e como paginação do pager de onboarding — nunca como atalho destrutivo.

## Consequências
- Nenhuma exclusão acontece sem intenção explícita e affordance na tela.
- Linhas de lista (`SetLogger`, `ListItem`) não carregam estado de swipe oculto.
- Coerência total com o modelo mental de 2 toques do produto.

## Alternativas consideradas
- **Swipe + undo (padrão Gmail):** rejeitado — o sistema não tem toast/snackbar para hospedar o "desfazer" (ADR-0002); a reversibilidade, quando existir, é undo inline explícito.
- **Swipe só para arquivar (não destrutivo):** fora de escopo hoje; reabrir por ADR se surgir caso real.
