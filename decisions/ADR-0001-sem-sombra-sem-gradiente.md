# ADR-0001: Sem sombra e sem gradiente — profundidade plana por cor e borda
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-167

## Contexto
DS mobile-first, dark-default sobre grafite quase-preto (`bg #0B0F19`). Material e outros DS usam elevação por sombra e gradientes para hierarquia. Sobre fundo escuro, sombra some (baixo contraste com o preto) e vira ruído; gradiente compete com o único acento vermelho e com o motivo de assinatura (o `Ring`).

## Decisão
Proibir **drop shadow / elevation** e **gradientes de fundo** em toda a superfície do sistema. Profundidade vem de: (1) `surface`/`surfaceRaised`/`panel` — degraus de cor sólida; (2) hairline de 1–1.5px em `border`/`borderInput`, ligeiramente mais clara que a superfície. Fundos são sempre cor sólida — sem fotografia, sem full-bleed, sem textura/grão. O único grafismo é o `Ring`.

## Consequências
- Cards, inputs e painéis se separam do fundo por contraste de cor + borda, não por sombra.
- Lint de aderência bloqueia `boxShadow`/`elevation`/`shadow*` e `linear-gradient`/`LinearGradient` (exceto o arco do `Ring`).
- Handoff visual mais barato e consistente entre RN e PWA (sombra do Android/`Modal` é irregular).

## Alternativas consideradas
- **Elevação sutil por sombra:** rejeitada — invisível sobre grafite, inconsistente entre plataformas.
- **Gradiente de marca:** rejeitado — dilui o acento único e a identidade "flat + Ring".
