Feather-style inline SVG icon, selected by name. Consolidates the source app's ~25 individual icon components into one wrapper (intentional addition — see Icon.d.ts).

```jsx
<Icon name="dumbbell" color="#EF4444" size={30} />
```

Icons are always inline SVG with `currentColor`/explicit stroke — never emoji, never an icon font.
