Base surface card — the fundamental container of the whole system (list rows, stat blocks, panels of content).

```jsx
<Card stripeColor="var(--forge-accent)"><Text>...</Text></Card>
```

Every screen is built from cards on the `bg` background. Use `stripeColor` for the accent stripe pattern seen on "today's workout" and module-chooser cards.

## Quando usar

- Contêiner base de qualquer conteúdo sobre o fundo `bg` (linha de lista, bloco de stat, cabeçalho de seção).
- Com `onClick`, uma linha/bloco inteiro que leva a um detalhe ou seleciona uma opção (card pressável).

## Quando NÃO usar

- Como rótulo de ação textual dentro de outro conteúdo — o card pressável é a superfície inteira, não um botão de texto.
- Para envolver um diálogo/overlay (o Panel já traz a própria superfície).

## Em vez disso use

- Ação pontual (salvar, começar) → **`Button`**.
- Escolha entre opções num overlay → **`Panel`** (já é uma superfície).
- Aviso inline dentro do fluxo → **`InlineAlert`**.

## Acessibilidade

Card estático é decorativo (uma `<div>`); o card **pressável** segue "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** com `onClick` vira um `<button>` real — anuncia "botão" + nome (nunca um role custom).
- **Nome acessível:** vem do conteúdo textual do card; garanta um texto claro em pt-BR quando ele for pressável.
- **Valor / estado:** `selected` expõe `aria-pressed` (contexto de escolher-da-lista) e desenha a borda de acento; `disabled` real desabilita o botão.
- **Contraste:** borda ≥3:1 contra a superfície; a `stripeColor` é decorativa — o significado nunca vem só dela.
- **Foco / alvo:** `forge-focusable`; o alvo é a superfície inteira do card (≥44px na prática).
- **Observações:** o press state também responde a `:active`/touch.
