Small inline spinner for a button or row awaiting data — not the full-screen boot treatment (that's `LoadingScreen`).

```jsx
<Button title={saving ? <Spinner size={16} color="#fff" /> : "Salvar"} disabled={saving} />
```

## Quando usar

- Indicador pequeno inline enquanto um botão, linha ou seção aguarda dados.

## Quando NÃO usar

- Estado de boot/carregamento em tela cheia.
- Placeholder do formato do conteúdo enquanto carrega.
- Uma falha que já aconteceu.

## Em vez disso use

- Boot/carregamento de tela inteira → **`LoadingScreen`**.
- Placeholder de conteúdo → **`Skeleton`**.
- Falha com retry → **`ErrorState`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** `role="status"` — anúncio educado, não interrompe.
- **Nome acessível:** o `label` (default "Carregando") vira o `aria-label`.
- **Valor / estado:** progresso indeterminado (sem valuenow).
- **Contraste:** arco em `currentColor`/`--forge-accent` — garanta ≥3:1 sobre o fundo onde é usado.
- **Foco / alvo:** não focável.
- **Observações:** a animação usa `.forge-anim-spin`, que honra reduced-motion globalmente (P-11).
