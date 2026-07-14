# ADR-0027: Suporte a RTL — fora de escopo por ora
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-151

## Contexto
O Forge é pt-BR only (LTR). RTL (árabe, hebraico) não tem caso de uso hoje, mas a
auditoria pediu decisão + inventário do que quebraria no dia em que mudar (OP-151),
para não descobrir tarde.

## Decisão
**RTL fora de escopo enquanto o produto for pt-BR only.** Não implementar
espelhamento agora. Registrar o inventário do que quebraria:
- **Faixa de acento** dos cards (borda esquerda) → precisaria virar `start`.
- **Ícone `arrow`** só aponta à direita; **chevrons** direcionais → espelhar.
- **Alinhamento de texto** e paddings assimétricos.
- **✕** no header (esquerda) e slot `right` do header → trocar lados.

**Recomendação de baixo custo (mitigação preventiva):** ao escrever componentes
novos, preferir propriedades lógicas (`start`/`end`, `marginStart`) em vez de
`left`/`right` onde não custa nada — reduz o custo futuro sem entregar RTL agora.
Marcada como recomendação, **pendente de ratificação do owner** quanto a exigir
isso já no lint/review.

## Consequências
- Zero custo agora; caminho de saída conhecido e barato quando um idioma RTL entrar.
- Não bloqueia o white-label/i18n de strings (ADR de conteúdo / OP-010), que é
  independente de direção de texto.

## Alternativas consideradas
- **Suportar RTL já:** rejeitado — esforço sem usuário; risco de bugs de layout sem
  quem valide.
- **Ignorar totalmente (sem inventário):** rejeitado — o inventário é o que torna a
  virada futura barata.
