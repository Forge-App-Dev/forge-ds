Persistent inline banner for the offline/sync state. The system has no toast/snackbar (ADR-0002): a system state must not flash and vanish — it stays in the flow until the condition clears. role="status" (polite live region). On-voice default copy; optional retry action.

```jsx
<OfflineBanner actionLabel="Tentar de novo" onAction={retry} />
```

## Quando usar

- Sinalizar que o app está offline / sem sincronização, de forma persistente no topo do conteúdo.
- Qualquer estado de sistema que precisa ficar visível até resolver, com ação opcional de retry.

## Quando NÃO usar

- Confirmação efêmera de sucesso pós-ação → é transição no próprio gatilho (ADR-0012).
- Aviso/erro pontual de uma seção → é inline no fluxo, mas não é estado de sistema.
- Erro de um campo específico → mensagem inline no `TextField`.

## Em vez disso use

- Aviso/erro de seção com "Tentar de novo" → **`InlineAlert`** (kind `warning`/`danger`).
- Tela inteira em erro (sem conteúdo) → **`ErrorState`**.
- Incentivo do coach → **`CoachNote`**.

## Acessibilidade

Ver "Progresso e feedback" + "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `role="status"` — região viva educada; anuncia a mudança de estado sem roubar foco (não é `alert`, pois offline não é urgente-bloqueante).
- **Nome acessível:** a mensagem (default on-voice pt-BR); a ação, quando presente, é um botão com rótulo verbo ("Tentar de novo").
- **Valor / estado:** persistente — não depende de janela de tempo para ser lido (motivo do não-toast, ADR-0002).
- **Contraste:** ícone/borda derivados de `--forge-warning` via `color-mix`; texto em `--forge-text`.
- **Foco / alvo:** botão `forge-focusable`; em uso, garantir alvo ≥44px no container tocável.
- **Observações:** nunca virar toast; o ícone `warn` acompanha o texto (cor não é o único meio).
