# ADR-0032: Densidade — px = dp, densidade única
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-095

## Contexto
Os tokens de dimensão são numéricos (ex.: raio 14, espaçamento 16) e existem em duas
formas: `px` no CSS do DS (espelho web) e números sem unidade no `tokens.js` do RN.
Faltava declarar como esses valores se relacionam com a densidade de tela e se o DS
tem um modo "compacto" (OP-095).

## Decisão
- **No RN, 1 token = 1 dp** (density-independent pixel). O RN já escala dp→px físico
  por densidade de tela; os tokens são expressos em dp e **não** se ajustam por
  densidade na mão.
- **No web kit, `px` do CSS espelha 1:1 o dp** do RN (14px ↔ 14dp) — mesma métrica,
  duas sintaxes.
- **Densidade única:** o DS **não** tem modo "compacto"/"confortável". Uma escala de
  espaçamento e uma de tamanhos de controle servem a todas as telas (ver também
  ADR-0025: sem densidade compacta para telas grandes).

## Consequências
- Um número no token vale o mesmo em RN e no espelho web — leitura direta, sem
  conversão mental.
- Sem a complexidade de múltiplas densidades (que exigiria variantes de todos os
  tokens de tamanho).
- A escala tipográfica herda meios-pixels da web (13.5/12.5/11.5); avaliar
  arredondar para inteiro no RN é assunto separado (OP-085), não bloqueia este ADR.

## Alternativas consideradas
- **Modo compacto/confortável (como algumas plataformas):** rejeitado — sem caso de
  uso; dobraria os tokens de tamanho.
- **Tokens em px físico:** rejeitado — quebraria em telas de densidade diferente.
