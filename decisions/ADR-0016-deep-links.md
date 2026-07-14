# ADR-0016: Deep links — mapa de rotas e comportamento não-autenticado
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-074

## Contexto
Push notifications (ADR-0017) e compartilhamento (ADR-0018) exigem abrir o app numa tela específica. Sem um mapa de rotas e uma regra para o usuário deslogado, deep link vira comportamento imprevisível.

## Decisão
Definir rotas nomeadas por destino (ex.: `forge://treino/hoje`, `forge://treino/sessao/:id`, `forge://nutricao/hoje`, `forge://nutricao/refeicao/:id`, `forge://perfil`). Regras:
- **Autenticado:** navega direto ao destino, empilhando de forma que o back respeite o mapa do botão voltar (OP-145).
- **Não autenticado:** guarda o destino, envia para o login e, **após autenticar, redireciona ao alvo original**. Nunca descarta o link silenciosamente.
- **Destino inexistente/sem permissão:** cai na raiz do módulo mais próximo com `ErrorState` se aplicável — nunca tela em branco.
- Deep link **não** dispara ação destrutiva nem pula confirmação (ADR-0013).

## Consequências
- Base sólida para notificações e sharing abrirem o lugar certo.
- Login vira um portão que preserva intenção, não um beco.

## Alternativas consideradas
- **Sempre abrir na home:** rejeitado — desperdiça o valor do deep link.
- **Abrir destino mesmo deslogado:** rejeitado — vaza tela protegida.
