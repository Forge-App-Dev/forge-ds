# ADR-0002: Sem Toast / Snackbar — feedback é inline e persistente
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-042, OP-167

## Contexto
Toast/Snackbar é o padrão de mercado para feedback efêmero. Problemas: aparece fora do foco de leitura, some antes de ser lido, é hostil a leitores de tela e a fontScale alto, e empilha/colide com a `ModuleTabBar` inferior. O sistema já pratica feedback ancorado ao conteúdo.

## Decisão
**Não** haverá Toast/Snackbar. O feedback mora onde a ação aconteceu:
- **Sucesso pós-ação:** transição de estado no próprio gatilho (ver ADR-0012).
- **Aviso/erro de seção:** `InlineAlert` no fluxo (com slot de ação "Tentar de novo").
- **Estado de sistema persistente** (offline/sync): `OfflineBanner` inline, não efêmero.
- **Erro de campo:** mensagem inline no `TextField`.

## Consequências
- Nenhuma mensagem crítica depende de janela de tempo para ser lida.
- Fecha a pergunta recorrente "onde mostro o sucesso?" por tela.
- Exige que cada ação tenha uma âncora visível de feedback (bom para a11y).

## Alternativas consideradas
- **Toast só para sucesso:** rejeitado — reabre a porta e cria inconsistência.
- **Região "status" global no topo:** rejeitada — vira um toast disfarçado; feedback deve ser local à ação.
