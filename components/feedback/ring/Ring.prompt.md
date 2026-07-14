Circular progress ring, the brand's signature element — background track + accent arc, centered content (usually a number).

```jsx
<Ring size={120} stroke={11} progress={0.62} color="var(--forge-accent)">
  <span>62%</span>
</Ring>
```

**Indeterminate** — continuous spin, for a loading state without a known progress value:
```jsx
<Ring size={72} stroke={5} indeterminate color="var(--forge-accent)" />
```

**Segments** — stack several contributors on one ring (e.g. protein+carb+fat toward a combined macro budget) instead of a single arc:
```jsx
<Ring size={120} stroke={11} segments={[
  { value: 0.25, color: "var(--forge-macro-protein)" },
  { value: 0.35, color: "var(--forge-macro-carb)" },
  { value: 0.15, color: "var(--forge-macro-fat)" },
]}>
  <span>75%</span>
</Ring>
```

Also drives the app's loading-spinner treatment (see guidelines/animation card).

**Acessibilidade:** determinate expõe `role="progressbar"` + `aria-valuenow/min/max`; passe `label` como nome acessível (ADR-0054). Para anunciar a **conclusão** de um ciclo (série, timer) a um leitor de tela, passe `announce="Série concluída"` — uma região `role="status"`/`aria-live="polite"` invisível aparece só quando `progress` chega a 100% (OP-164). Sem `announce`, nada muda. Ver `docs/accessibility-checklist.md` (§Progresso e feedback) e `docs/a11y-advanced.md`.
