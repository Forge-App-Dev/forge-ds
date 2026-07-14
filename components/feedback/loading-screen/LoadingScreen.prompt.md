Full-screen boot/loading state — spinning ring, pulsing brand mark, wordmark, status caption.

```jsx
<LoadingScreen markSrc="assets/forge-mark.png" message="preparando martelo e bigorna…" />
```

Same motif as the "Loading motif" foundation card in `guidelines/` — this is the reusable component version.

## Quando usar

- Estado de boot/carregamento em tela cheia — anel girando + marca pulsando + wordmark + legenda de status.

## Quando NÃO usar

- Espera inline dentro de um botão ou linha.
- Placeholder do formato do conteúdo.
- Uma falha que já aconteceu.

## Em vez disso use

- Espera inline → **`Spinner`**.
- Placeholder de conteúdo → **`Skeleton`**.
- Falha com retry → **`ErrorState`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** deve expor `role="status"` com um rótulo "Carregando" (OP-128); a marca é decorativa (`alt=""`).
- **Nome acessível:** a legenda de status (`message`) em pt-BR acompanha visualmente; o anúncio ao leitor de tela é "Carregando".
- **Valor / estado:** progresso indeterminado.
- **Contraste:** legenda em `--forge-text-dimmer` (uso decorativo/status secundário, ADR-0055); wordmark em `--forge-text` ≥4.5:1.
- **Foco / alvo:** não focável.
- **Observações:** o anel e o pulso respeitam `prefers-reduced-motion` (animação desligada).
