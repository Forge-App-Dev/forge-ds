# ADR-0011: Sem Command palette — navegação é por abas e busca contextual
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-052

## Contexto
Command palette (⌘K) é um padrão de app desktop/produtividade orientado a teclado e a grandes espaços de comando. Num app mobile touch com navegação por `ModuleTabBar` e fluxos rasos, não há teclado de atalho nem superfície para invocá-la.

## Decisão
**Não** haverá command palette. A descoberta e a navegação acontecem por:
- **`ModuleTabBar`** entre módulos e abas;
- **`SearchField`** contextual dentro do domínio (alimento, exercício) com resultados em `ListItem` (OP-069);
- **`QuickAction`** para atalhos de destaque no dashboard.

## Consequências
- Sem superfície global de comandos para manter/indexar.
- Busca vive onde o dado vive, com EmptyState que oferece "criar 'X'".

## Alternativas consideradas
- **Busca global no header:** rejeitada por ora — sem massa de conteúdo cross-módulo que justifique; reabrir por ADR se o catálogo crescer.
