# ADR-0004: Sem FAB — um único CTA primário por tela
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-049, OP-167

## Contexto
O Floating Action Button é a assinatura do Material, mas pressupõe uma ação flutuante persistente. O sistema tem hierarquia de CTA única (1 ação primária por tela), acento vermelho reservado e navegação por `ModuleTabBar` inferior — onde o FAB tipicamente flutua e colide.

## Decisão
**Não** haverá FAB. A ação primária de uma tela é:
- um `Button` (accent) no fluxo/rodapé, ou `footer` fixo de `ScreenBody`/`FullScreen` quando precisa ser persistente;
- `QuickAction` em grade para atalhos no dashboard;
- `HeaderAction`/slot `right` do header para ação secundária contextual.

## Consequências
- Preserva a regra "1 CTA primário por tela" (OP-139) e o significado do acento.
- Sem elemento flutuante sobre a tab bar / conteúdo rolável.
- "Adicionar" mora num lugar previsível por contexto, não num botão global flutuante.

## Alternativas consideradas
- **FAB de "adicionar" global:** rejeitado — compete com o CTA da tela e ocupa o acento fora de contexto.
- **Speed-dial (FAB expansível):** rejeitado — esconde ações atrás de gesto; usar `Panel` de escolha.
