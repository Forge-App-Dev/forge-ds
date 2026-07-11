Circular progress ring, the brand's signature element — background track + accent arc, centered content (usually a number).

```jsx
<Ring size={120} stroke={11} progress={0.62} color="#EF4444">
  <span>62%</span>
</Ring>
```

**Indeterminate** — continuous spin, for a loading state without a known progress value:
```jsx
<Ring size={72} stroke={5} indeterminate color="#EF4444" />
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
