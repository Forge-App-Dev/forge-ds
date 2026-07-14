# ADR-0020: Estratégia de plataforma iOS
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-020, OP-184

## Contexto
O Forge é RN/Expo, nascido no Android, mas se declara "mobile, Android e iOS no
futuro". Não havia decisões escritas de iOS (transições, gesto de voltar,
haptics, Dynamic Type, ícones), o que a auditoria marcou como P-27/OP-020. Fechar
essas decisões antes do primeiro build iOS é barato agora e caro depois.

## Decisão
iOS herda 100% da identidade (grafite + accent vermelho, dark-default, Barlow +
Inter, ícones **Feather** — **sem** SF Symbols, sem San Francisco, sem sombra/blur).
Muda apenas o que é gesto/expectativa de plataforma:
- **Safe areas:** consumir `insets.bottom` (home indicator) em tab bar, footers e
  botões persistentes — mesma correção do edge-to-edge Android.
- **Edge-swipe back:** habilitado na navegação de pilha; **desabilitado** em
  `FullScreen` com formulário sujo (só sai pelo ✕ + guard `onBeforeClose`).
- **`FullScreen` não vira sheet arrastável** e não fecha por swipe-down — conflito
  consciente com a HIG, justificado por perda de dados (§4 do guia).
- **Haptics** como único canal tátil (mapa em ADR-0019; sem sons de UI em ADR-0029).
- **Dynamic Type** conforme ADR-0023 (teto 1.3× no display Barlow).
Detalhes operacionais em `docs/platform/PLATFORM_IOS.md`.

## Consequências
- Um único código RN serve as duas plataformas sem fork visual.
- Usuário iOS não terá swipe-to-dismiss em fluxos de edição (troca aceita por
  segurança de dados). `Panel` poderá ganhar swipe-down no futuro — **pendente de
  ratificação do owner**.
- Exige mark em densidade Retina/SVG (ADR-0031) e splash alinhado (ADR-0030).

## Alternativas consideradas
- **Adotar SF Symbols + San Francisco no iOS:** rejeitado — destruiria a coesão de
  família e a assinatura da marca.
- **FullScreen como sheet HIG-compliant (arrastável):** rejeitado — risco de
  descarte acidental de formulários longos.
- **Não decidir até o build iOS:** rejeitado — decisões tardias viram retrabalho.
