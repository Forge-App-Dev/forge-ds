Rounded filter/choice chip — outlined when inactive, filled with its color when active.

```jsx
<Pill title="Peito" active={filter === "peito"} color="#EF4444" onClick={() => setFilter("peito")} />
```

Use in a horizontally scrolling row for filters (muscle groups, meal moments, categories).
