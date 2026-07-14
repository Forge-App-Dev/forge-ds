# ADR-0022: Edge-to-edge no Android 15+
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-147

## Contexto
Android 15 (API 35) força edge-to-edge para apps que targetam API 35: o conteúdo
desenha sob as barras de status e navegação. O Forge não tinha tratamento
especificado (OP-147), e a auditoria já registrava insets bottom ausentes (P-06).

## Decisão
Adotar **edge-to-edge como obrigatório** em todos os targets novos:
- Barras de status e navegação **transparentes** sobre o `--forge-bg` grafite;
  ícones das barras em modo *light* (fundo escuro).
- Habilitar via `react-native-edge-to-edge` / `edgeToEdgeEnabled` do Expo +
  `SystemBars` transparente.
- **Insets obrigatórios**: `Screen`, `ScreenBody`, `ModuleTabBar` e o footer do
  `FullScreen` consomem `useSafeAreaInsets` (corrige o bottom ausente do P-06).
- Proibido: pintar barras com cor sólida divergente do bg; usar
  `windowOptOutEdgeToEdgeEnforcement` para "voltar atrás".

## Consequências
- Visual imersivo e conforme com Android 15; sem barras destoando do grafite.
- A correção de inset bottom serve também ao home indicator do iOS (ADR-0020) —
  uma correção, duas plataformas.
- Requer o passe de safe-area nos componentes de borda (OP-113/OP-121) antes de
  targetar API 35.

## Alternativas consideradas
- **Opt-out do edge-to-edge:** rejeitado — dívida técnica que quebra em targets
  futuros do Android.
- **Barras com cor sólida (não transparentes):** rejeitado — destoa do bg e anula
  o ganho visual.
