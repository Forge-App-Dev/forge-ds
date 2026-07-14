# ADR-0030: Splash screen alinhada ao LoadingScreen
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-149

## Contexto
A splash nativa (Android 12+ splash screen API / iOS launch screen) e o
`LoadingScreen` do app são dois momentos de abertura distintos; sem alinhamento, o
usuário vê um salto visual (cor, posição do mark) entre a splash do SO e o boot do
app (OP-149).

## Decisão
Splash nativa e `LoadingScreen` usam a **mesma composição**: `--forge-bg` grafite
como fundo e o **mark centralizado** na mesma posição/tamanho. Handoff via
`expo-splash-screen`: manter a splash até o `LoadingScreen` (com o Ring) estar
pronto e chamar `hideAsync()` — sem flash de tela em branco, sem salto de posição
do mark. O Ring (assinatura) só aparece no `LoadingScreen`, dando continuidade
natural (mark estático → mark com Ring girando).

## Consequências
- Abertura sem "piscada" nem reposicionamento; percepção de app polido.
- Reusa a arte do mark e o bg token — nada novo a desenhar.
- Depende do mark em densidade adequada (ADR-0031) para não pixelar na splash.

## Alternativas consideradas
- **Splash com arte própria (diferente do LoadingScreen):** rejeitado — cria o
  salto visual que o ADR resolve.
- **Sem splash nativa (só LoadingScreen):** inviável — o SO exige uma launch/splash
  screen; melhor controlá-la que aceitar o default branco.
