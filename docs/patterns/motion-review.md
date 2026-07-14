# Motion — item de review

Fecha **OP-159**. Traduz a regra de motion do `readme.md` (§Motion) e de `tokens/motion.css` num **checklist de review** (cole no PR — ver `docs/PR_CHECKLIST.md`). Base de "motion emocional único": OP-054 (PRCelebration).

## A regra em uma frase

Motion no Forge é **mínimo e funcional**: transições de opacidade/largura, o arco girando do `Ring`, o pulse da tela de carregamento, os dots animados. **Sem bounce, sem spring, sem loop decorativo em conteúdo normal.** Sempre respeita reduced-motion.

## Checklist de review de motion

Ao revisar qualquer animação nova, confirme **todos**:

- [ ] **Usa token de duração/ease** de `tokens/motion.css` (`--forge-duration-*`, `--forge-ease-*`) — nada de valores mágicos hardcoded.
- [ ] **Usa keyframe global** (`forge-anim-spin`/`-pulse`/`-celebrate`), não injeta `<style>` por instância.
- [ ] **Sem bounce/spring.** Curvas permitidas: `--forge-ease-standard`, `-linear`, `-emphasized`. Nada elástico.
- [ ] **Sem loop decorativo em conteúdo** — loop só nos indicadores de carregamento (`spin`, `pulse`).
- [ ] **Respeita reduced-motion:** cai em `animation: none` sob `@media (prefers-reduced-motion: reduce)` (já garantido pelas classes `forge-anim-*` — não recrie animação fora delas).
- [ ] **Press não anima cor/escala:** press é só opacidade (`--forge-opacity-press`), conforme `readme.md`.
- [ ] **Motion "emocional" só no `PRCelebration`** (scale+fade digno, roda uma vez na montagem, OP-054). Qualquer outro uso emocional é reprovado.
- [ ] **Duração honesta:** feedback ≤ `--forge-duration-base` (300ms); nada que faça o usuário esperar a animação terminar pra agir.

## Reprovar

Spring/bounce, parallax, animação de entrada em cada card de lista, micro-interação "divertida" fora do PRCelebration, animação sem fallback de reduced-motion, duração/ease hardcoded.
