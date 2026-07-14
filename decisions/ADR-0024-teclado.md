# ADR-0024: Tratamento de teclado
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-152

## Contexto
As regras de teclado (KeyboardAvoidingView, resize, maxHeight do Panel) viviam só
no doc RN §4.3 (OP-152/P-25). Faltava consolidá-las como decisão de plataforma e
cobrir o teclado correto por tipo de campo (OP-142).

## Decisão
- `app.json` → `android.softwareKeyboardLayoutMode: "resize"` (conteúdo encolhe;
  footer de ação sobe acima do teclado).
- `KeyboardAvoidingView` com `behavior` por plataforma: `height` (Android) /
  `padding` (iOS).
- `Panel` limita `maxHeight` ≤80% da tela para o conteúdo subir acima do teclado.
- **Teclado por tipo de campo:** numéricos (peso, reps, kcal, qtd) →
  `keyboardType="decimal-pad"` / `inputmode="decimal"`; `enterKeyHint`/
  `returnKeyType` coerente (`next` entre campos, `done`/`go` no último).
- Foco: ordem campo→campo→footer nos FullScreen; ao submeter com erro, focar o
  primeiro campo inválido.

## Consequências
- Regra única de teclado, portável entre RN e o web kit.
- Casa com `QtyInput`/normalização de vírgula pt-BR (OP-116) e com validação de
  formulário (OP-061).
- Sem custo de código novo além de aplicar consistentemente o que o app já faz.

## Alternativas consideradas
- **Deixar cada tela resolver o teclado:** rejeitado — origem de bugs de campo
  coberto pelo teclado.
- **`adjustPan` no Android:** rejeitado — `resize` funciona melhor com footer fixo.
