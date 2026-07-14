# ADR-0009: Sem Data table — dados tabulares viram listas e cards
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-048

## Contexto
Tabela com múltiplas colunas é um padrão de desktop/planilha. Numa coluna de ~480px de largura máxima, uma tabela exige scroll horizontal, rótulos minúsculos e leitura penosa — anti-padrão mobile.

## Decisão
**Não** haverá componente Data table. Dados que seriam tabela são apresentados como:
- **`ListItem`/Row** com slots leading/title/subtitle/trailing (o par chave→valor por linha);
- **`StatCard`/`DashboardTile`** para métricas destacadas;
- **`Timeline`** para histórico cronológico;
- **Chart** (MiniChart/Chart completo) quando o objetivo é comparar tendência.

## Consequências
- Nada de scroll horizontal; cada registro é uma unidade legível de uma coluna.
- Comparações densas viram gráfico, não grade de números.

## Alternativas consideradas
- **Tabela rolável horizontalmente:** rejeitada — leitura ruim e quebra o modelo de uma coluna.
- **Tabela responsiva que colapsa em cards:** é exatamente o padrão ListItem/Card — adotado sem o intermediário "tabela".
