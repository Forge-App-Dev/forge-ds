# ADR-0053: Zoom e reflow a 200% (WCAG 1.4.10 / 1.4.4)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-163

## Contexto
Forge é mobile-first: coluna centralizada de **480px máx**, nav inferior, tema dark. WCAG 2.2 exige:
- **1.4.10 Reflow:** conteúdo utilizável a 400% de zoom (equiv. 320 CSS px de largura) **sem scroll horizontal** em conteúdo unidirecional.
- **1.4.4 Resize text:** texto ampliável até 200% sem perda de conteúdo/função.

O risco no kit não é a coluna de 480px em si — é (a) larguras/paddings/tamanhos de fonte fixados em `px` que não reflowam, (b) valores fixos de altura que cortam conteúdo, (c) linhas que forçam scroll horizontal (tabelas, chips numéricos colados como "82,5kg", números grandes).

## Decisão
1. **A coluna de 480px é `max-width`, não `width`.** Abaixo de 480 CSS px (o que 200–400% de zoom produz num viewport estreito) o conteúdo ocupa 100% da largura disponível e reflowa verticalmente. Já é a intenção do sistema; fica **gravado como requisito de conformidade**, não só estética.
2. **Sem scroll horizontal a 320 CSS px.** Qualquer conteúdo largo (MiniChart, tabela de macros, linha de stats) deve caber ou rolar **dentro do próprio contêiner** (`overflow-x:auto` local), nunca fazer o `body` rolar na horizontal.
3. **Texto e tap targets não podem depender de altura/px fixos que cortem a 200%.** Alturas de linha/campo usam `min-height`, não `height`; `line-height` unitless; paddings toleram reflow.
4. **Teste de aceite** (vira item de checklist e de PR): abrir o kit no navegador, zoom do navegador a **200%** e reduzir a janela a **320px** de largura — verificar (a) nenhuma barra de rolagem horizontal no `body`, (b) nenhum texto truncado/sobreposto, (c) nav inferior e CTAs ainda acessíveis, (d) diálogos (Panel/FullScreen) cabem com corpo rolável vertical.
5. **`dvh` com fallback `vh`** em alturas de overlay/tela (já rastreado em OP-016/113) é pré-requisito para o reflow de diálogo não cortar o rodapé fixo.

## Consequências
- Vira checklist item em `docs/accessibility-checklist.md` (seção "layout/reflow") e item do checklist de PR.
- MiniChart e qualquer tabela precisam de contêiner com `overflow-x:auto` próprio — cruza com OP-125.
- Prioridade baixa (o desenho já é fluido), mas o teste passa a ser obrigatório e reprodutível.

## Alternativas consideradas
- **Assumir conformidade sem teste** (status quo): rejeitada — 1.4.10 exige verificação real; `px` fixos escondidos só aparecem sob zoom.
- **Layout adaptativo com breakpoints:** fora de escopo (o produto é phone-only por decisão — ver OP-019); reflow ≠ responsividade multi-coluna.
