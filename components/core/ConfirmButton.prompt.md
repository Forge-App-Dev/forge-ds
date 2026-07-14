Destructive action button that requires two taps — first tap arms a 2.5s "Confirmar?" state, second tap commits. Never wire a delete straight to one tap in this system.

```jsx
<ConfirmButton title="Descartar" confirmTitle="Descartar treino?" onConfirm={discard} />
```

## Quando usar

- Uma ação destrutiva ou irreversível (descartar treino, excluir refeição) que precisa de uma trava contra toque acidental.

## Quando NÃO usar

- Uma ação comum/não destrutiva — os dois toques viram fricção desnecessária.
- Uma confirmação com contexto longo ou várias consequências a explicar.

## Em vez disso use

- Ação comum → **`Button`** (um toque).
- Confirmação que precisa explicar o impacto → **`Panel`** com um Button de confirmação.

## Acessibilidade

Ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `<button>` — anuncia "botão" + nome.
- **Nome acessível:** o `aria-label` alterna de `title` para `confirmTitle` ao armar, então o leitor anuncia o novo significado ("Descartar treino?").
- **Valor / estado:** ao armar, uma região `role="status"` `aria-live="polite"` anuncia o hint de confirmação (OP-106); a janela de 2,5s reseta o estado sozinha.
- **Contraste:** borda/texto em `--forge-danger`; no estado armado, texto via `--forge-on-dark` sobre o fill danger.
- **Foco / alvo:** `forge-focusable`; `min-height` = `--forge-tap-target-min` (≥44px) mesmo na forma compacta.
- **Observações:** o significado destrutivo vem do texto + estado, não só da cor vermelha.
