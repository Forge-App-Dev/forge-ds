Filled, accent-colored primary action button — use for the one main call to action on a screen.

```jsx
<Button title="Começar treino  →" color="#EF4444" resolvedColor="#EF4444" onClick={start} />
```

Variants: `small` (36px, for inline header actions like "Ajustar"); `disabled` (0.5 opacity); pass any module accent as `color` (e.g. `--forge-nutrition` for the Nutrição module) plus its literal hex as `resolvedColor` so text contrast stays correct.
