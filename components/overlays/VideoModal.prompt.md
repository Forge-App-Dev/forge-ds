Full-bleed near-black video overlay, for an exercise demo clip.

```jsx
<VideoModal visible={open} onClose={close} title="Supino Reto">
  <video src="demo.mp4" controls style={{ width: "100%", height: "100%" }} />
</VideoModal>
```

On native, wrap `react-native-youtube-iframe` rather than a raw WebView iframe — see readme "Known implementation pitfalls".

## Quando usar

- Reproduzir um clipe de demonstração de exercício numa sobreposição full-bleed escura.

## Quando NÃO usar

- Escolha, confirmação ou formulário curto.
- Fluxo longo de edição.

## Em vez disso use

- Escolha/confirmação → **`Panel`**.
- Fluxo longo → **`FullScreen`**.

## Acessibilidade

Ver "Diálogos e overlays" do checklist (via `useDialogA11y`).

- **Papel / leitor de tela:** `role="dialog"` + `aria-modal="true"` — anuncia "caixa de diálogo".
- **Nome acessível:** o `title` (nome do exercício) liga por `aria-labelledby`.
- **Valor / estado:** foco preso; Escape fecha; toque no scrim fecha; scroll travado.
- **Contraste:** scrim pesado (`--forge-scrim-heavy`); título ≥4.5:1.
- **Foco / alvo:** o ✕ é `forge-focusable` + `forge-tap-min` (≥44px) com nome "Fechar".
- **Observações:** o player embutido precisa ter os próprios controles acessíveis; em nativo, use `react-native-youtube-iframe` (iframe WebView cru falha no Android).
