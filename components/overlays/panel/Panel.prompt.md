Centered modal (dark scrim + `panel` surface, 18px radius, 440px max width, 80% max height) for small choices and confirmations. Tapping the scrim closes it.

```jsx
<Panel visible={open} onClose={close} title="Treino de hoje" footer={<Button title="Pronto" onClick={close} />}>
  ...rows...
</Panel>
```

**Decision rule — Panel is the default, lighter choice.** Reach for it for: quick choices/selectors (pick a food/exercise from a list), confirmations, replicate-day, short forms (new food item). If you're unsure which modal fits, pick Panel.

For a long form or multi-section build flow, use FullScreen instead. On native the source app renders both as a platform `Modal` (Panel: transparent+fade; FullScreen: slide) with no background blur — Android doesn't blur behind a Modal, so both use a solid dark scrim/background instead (a PWA sibling may blur; that's an accepted platform difference, not a bug to fix here).

## Quando usar

- Escolha/seletor rápido (pegar um alimento ou exercício), confirmação, replicar dia, formulário curto. É a escolha padrão e mais leve — na dúvida, use Panel.

## Quando NÃO usar

- Fluxo longo de edição multi-seção ou build com rodapé de ação persistente e várias etapas.
- Reprodução de vídeo em tela cheia.
- Aviso que não precisa interromper o usuário.

## Em vez disso use

- Fluxo longo de build/edição → **`FullScreen`**.
- Vídeo/demo de exercício → **`VideoModal`**.
- Aviso inline sem interromper → **`InlineAlert`**.

## Acessibilidade

Ver "Diálogos e overlays" do checklist (via `useDialogA11y`).

- **Papel / leitor de tela:** `role="dialog"` + `aria-modal="true"` — anuncia "caixa de diálogo".
- **Nome acessível:** o `title` liga por `aria-labelledby` ao contêiner.
- **Valor / estado:** foco preso dentro; Escape fecha; foco volta ao gatilho ao fechar; scroll do fundo travado. `dismissible={false}` impede fechar por toque no scrim (fluxos que não podem se perder).
- **Contraste:** scrim escuro; texto do painel ≥4.5:1.
- **Foco / alvo:** o ✕ é `forge-focusable` + `forge-tap-min` (≥44px) com nome "Fechar".
- **Observações:** `maxHeight: 80dvh` com o corpo rolando na vertical; nunca rola na horizontal a 320px (ADR-0053).
