# ADR-0015: Filtros — filterChips roláveis, contagem ativa e reset visível
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-070

## Contexto
Filtragem aparecerá em buscas e listas (biblioteca de exercícios, alimentos, histórico). Precisa de um padrão único, sem esconder o estado de filtro do usuário.

## Decisão
Filtro é uma **fileira horizontal rolável de `filterChip`** (OP-046), logo abaixo do `SearchField`/header da lista:
- chip ativo usa o estado `active` (borda/preenchimento accent ou do módulo);
- filtros ativos são sempre **visíveis** (o chip fica marcado) e o resultado exibe **contagem** ("12 resultados");
- **reset sempre acessível**: um chip/link "Limpar" aparece assim que houver ≥1 filtro ativo;
- filtro complexo (múltiplas dimensões) abre em `Panel`, mas o resumo do que está ativo volta como chips na fileira.

## Consequências
- O usuário nunca "perde" um filtro escondido que zera a lista sem explicação.
- Um só padrão de filtro em todo o app; reaproveita `Pill`/`filterChip`.

## Alternativas consideradas
- **Ícone de funil que abre menu:** rejeitado como padrão primário — esconde o estado ativo; aceitável só como entrada para o `Panel` de filtro complexo, com os chips ainda visíveis.
- **Dropdown de filtro:** rejeitado — o sistema não usa dropdown flutuante (usa Panel).
