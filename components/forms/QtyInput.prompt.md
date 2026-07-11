Quantity field with a unit toggle — tapping the unit button cycles through grams and any food-specific portion presets ("fatia", "copo", …).

```jsx
<QtyInput qty="150" unit="g" units={["g", "fatia"]} onChange={setQty} />
```

Grams is always the source of truth for macro calculation, regardless of displayed unit.
