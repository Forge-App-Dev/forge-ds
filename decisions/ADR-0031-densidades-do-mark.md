# ADR-0031: Densidades do mark (SVG + PNG @1x/2x/3x)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-150, OP-091

## Contexto
O único asset de marca é `assets/forge-mark.png` — um PNG único (~18KB). Ele aparece
a 26px (header), 40px (login) e 56px (loading/splash), em telas de densidade
variada (Android mdpi→xxxhdpi, iOS @1x→@3x). PNG único escala mal em telas densas e
na splash (OP-150/OP-091).

## Decisão
Fornecer o mark em **SVG** (formato preferencial — vetor, uma fonte, escala
perfeita) **e**, onde o pipeline exigir bitmap (ícone de app, splash nativa), em
**PNG @1x/2x/3x**. Consumo:
- Componentes RN (`AppHeader`, `LoadingScreen`) → SVG (`react-native-svg`) por
  padrão.
- Ícone de app / splash nativa → PNGs por densidade gerados a partir do SVG.
O SVG passa a ser a **fonte** do mark; os PNGs são derivados (regenerados do SVG,
nunca editados à mão).

## Consequências
- Mark nítido em qualquer densidade e na splash; menor peso no caso vetorial.
- Um passo de exportação (SVG → PNGs) entra no fluxo de assets.
- Habilita ADR-0030 (splash sem pixelar) e melhora print/telas densas.

## Alternativas consideradas
- **Manter só o PNG único:** rejeitado — pixela em xxxhdpi/@3x e na splash grande.
- **Só PNGs por densidade (sem SVG):** rejeitado — perde a fonte vetorial única e
  multiplica arquivos a manter.
