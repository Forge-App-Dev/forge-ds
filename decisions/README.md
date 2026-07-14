# Decisões de Arquitetura (ADRs) — Forge DS

Cada `ADR-XXXX-*.md` registra uma decisão estrutural: contexto, decisão, consequências e alternativas consideradas. São **citáveis e reabríveis** — mudar de ideia é abrir uma nova ADR que supersede a anterior (não editar a história).

## Esquema de numeração (blocos por tema)

Os números são agrupados por tema, com faixas **reservadas** entre os blocos para crescer sem renumerar. **Buracos são intencionais** (espaço reservado), não ADRs perdidas.

| Faixa | Tema | Exemplos |
|---|---|---|
| **0001–0018** | Interação & inventário (o que o sistema **não** tem, e o padrão substituto) | sem-sombra, sem-toast, sem-bottom-sheet, sem-FAB, árvore de confirmações, filtros, deep-links, push, compartilhamento |
| **0019–0032** | Plataforma & mobile | haptics/gestos, estratégia iOS, back button Android, edge-to-edge, font scaling, teclado, telas grandes (tablet/foldable), RTL, elevação, som, splash, densidade px/dp |
| **0040–0049** | Arquitetura de tokens | 0040 (arquitetura DTCG de tokens) |
| **0050–0069** | Cor, contraste, acessibilidade & conteúdo | onColor WCAG, contraste de macros, daltonismo, zoom/reflow, terminologia de leitor de tela, textDimmer, guia de conteúdo, framework "quando usar + a11y" |
| **0070–0079** | Governança & Design Ops | ciclo de vida do componente, versionamento semântico, escopo do check-drift |
| **0080+** | Decisões recentes / transversais | 0080 posicionamento de plataforma (web → RN), 0081 tokens de fill de contraste de marca |

Faixas reservadas hoje sem ADR (livres para o tema do bloco): 0033–0039, 0041–0049, 0058–0069.

## Status
`Accepted` (vigente) · `Proposed` (em discussão) · `Superseded — <motivo> (data)` (substituída; o arquivo permanece como registro histórico, apontando para a que a substitui).

## Convenção do arquivo
Cabeçalho: **Status · Data · Decisor · OP/Task**. Corpo: **Contexto → Decisão → Consequências → Alternativas consideradas**. Um assunto por ADR; título em `kebab-case` descrevendo a decisão.
