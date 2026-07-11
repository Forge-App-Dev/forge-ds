Progress bar for one macronutrient's daily consumption vs. target.

```jsx
<MacroMeter label="Proteína" color="var(--forge-macro-protein)" value={92} target={150} />
```

**Compact** — dot + thin bar + short readout, no label row, for a dense row (e.g. inside a food item):
```jsx
<MacroMeter compact color="var(--forge-macro-protein)" value={18} target={30} />
```

The three macro colors (protein/carb/fat) are fixed brand identity — never reassign them.
