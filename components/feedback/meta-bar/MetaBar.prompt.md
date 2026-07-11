Thin progress bar for a single running total against a target — turns amber when over.

```jsx
<MetaBar value={2100} target={2400} color="var(--forge-nutrition)" />
```

**Segmented** — several contributors stacked on one bar (e.g. each meal's kcal share of the day), no over-target warning color:
```jsx
<MetaBar target={2400} segments={[
  { value: 420, color: "var(--forge-macro-protein)" },
  { value: 780, color: "var(--forge-macro-carb)" },
  { value: 480, color: "var(--forge-macro-fat)" },
]} />
```
