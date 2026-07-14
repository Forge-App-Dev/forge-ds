Inline banner for persistent notices — program reminders, over-target warnings, success confirmations. No toast/snackbar exists in this system; use this instead, placed in the normal flow of the screen.

```jsx
<InlineAlert kind="warning" title="Lembrete do programa.">
  Rode por 8–10 semanas antes de reavaliar.
</InlineAlert>
```

`kind` picks the accent + icon: `info` (blue, info icon), `success` (green, check), `warning` (amber, warn — default), `danger` (red, warn).

## Quando usar

- Aviso persistente no fluxo da tela: lembrete de programa, alerta de estouro de meta, confirmação de sucesso. Não existe toast neste sistema.

## Quando NÃO usar

- Uma falha de carga/ação com retry.
- Um estado vazio/descanso.
- Uma notificação efêmera que some sozinha (não há toast — coloque o aviso no fluxo).

## Em vez disso use

- Falha com retry → **`ErrorState`**.
- Vazio/descanso → **`EmptyState`**.
- Erro de um campo específico → mensagem `error` do **`TextField`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** `role="status"` (educado) para info/success/warning; `role="alert"` (imediato) para `danger`, conforme a urgência.
- **Nome acessível:** o `title` + o conteúdo em pt-BR carregam a mensagem.
- **Valor / estado:** o `kind` define acento + ícone (info/success/warning/danger).
- **Contraste:** fill/borda derivados via `color-mix` sobre a superfície do tema dark único; texto do corpo em `--forge-text` ≥4.5:1.
- **Foco / alvo:** não interativo (a menos que haja um filho acionável).
- **Observações:** o significado vem do texto + ícone, não só da cor do acento (SC 1.4.1).
