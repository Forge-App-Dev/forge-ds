Full-screen flow for anything bigger than a quick confirmation.

```jsx
<FullScreen visible={open} onClose={close} title="Editar plano" right={<HeaderAction title="Replicar" onClick={dup} />} footer={<Button title="Salvar" onClick={save} />}>
  ...form...
</FullScreen>
```

**Decision rule — use FullScreen for a long form or a multi-section build flow:** planning/adjusting a whole day, creating or editing a meal, building/editing a workout, creating or editing an exercise. If the flow is just a quick choice, selector, or confirmation, use Panel instead — it's the lighter default.

## Quando usar

- Fluxo longo ou build multi-seção: planejar/ajustar um dia inteiro, criar/editar refeição, montar/editar treino, criar/editar exercício.

## Quando NÃO usar

- Escolha, seletor ou confirmação rápida — é peso demais.
- Vídeo/demo de exercício.

## Em vez disso use

- Escolha/confirmação rápida → **`Panel`** (o padrão mais leve).
- Vídeo → **`VideoModal`**.

## Acessibilidade

Ver "Diálogos e overlays" do checklist (via `useDialogA11y`).

- **Papel / leitor de tela:** `role="dialog"` + `aria-modal="true"` — anuncia "caixa de diálogo".
- **Nome acessível:** o `title` liga por `aria-labelledby`.
- **Valor / estado:** foco preso; Escape fecha; scroll travado; `onBeforeClose` pode cancelar o fechamento para guardar alterações não salvas (ex.: "descartar alterações?").
- **Contraste:** fundo `--forge-bg`; título e ações ≥4.5:1.
- **Foco / alvo:** o ✕ é `forge-focusable` + `forge-tap-min` (≥44px) com nome "Fechar"; o slot `right` costuma ser um Button secundário.
- **Observações:** o header respeita `safe-area-inset-top` e o rodapé fixo respeita `safe-area-inset-bottom`; o corpo rola na vertical, nunca na horizontal (ADR-0053).
