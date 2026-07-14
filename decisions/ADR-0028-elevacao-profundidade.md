# ADR-0028: Escala de profundidade (níveis 0/1/2 sem sombra)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-089

## Contexto
A **proibição** de sombra/gradiente já foi decidida no **ADR-0001** (profundidade
plana por cor e borda). O que faltava (parte de OP-089) é o outro lado da pergunta:
*se não há sombra, como marcar profundidade?* — ou seja, uma **escala de níveis**
citável, mapeando as superfícies existentes a degraus de profundidade. Este ADR
**complementa** o ADR-0001; não reabre a proibição.

## Decisão
Escala de profundidade oficial, por **cor de superfície + borda hairline** (nunca
sombra — ADR-0001):

| Nível | Token de superfície | Uso |
|---|---|---|
| 0 | `--forge-bg` (`#0B0F19`) | Fundo da tela. |
| 1 | `--forge-surface` (`#161E2E`) + `--forge-border` 1px | Card, input. |
| 2 | `--forge-surface-raised` (`#1B2536`) | Elemento realçado sobre card. |
| Overlay | `--forge-panel` (`#121215`) + `--forge-scrim` | Panel/FullScreen sobre scrim. |

Empilhamento em Z usa a escala `--forge-z-*` já tokenizada (nav 10 / overlay 50 /
fullscreen 60 / video 70 / top 100). Um componente marca profundidade **escolhendo
o nível de superfície certo**, não inventando sombra ou borda mais grossa.

## Consequências
- Dá nome aos degraus que hoje eram só valores de cor soltos — vira vocabulário
  citável ("suba para nível 2") e reforça o token-first (OP-002).
- Coerente com ADR-0001 e com a simetria Android/iOS (nenhuma elevação nativa).
- Não cria tokens novos: apenas nomeia e ordena os de superfície/z já existentes.

## Alternativas consideradas
- **Repetir a proibição de sombra aqui:** rejeitado — já é o ADR-0001; este só
  adiciona a escala.
- **Introduzir um token de "elevação" abstrato:** rejeitado — sem sombra, elevação
  abstrata não tem render; o degrau de superfície é a profundidade.
