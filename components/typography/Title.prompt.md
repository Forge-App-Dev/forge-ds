Barlow Condensed display heading — the one heading component every screen title, panel title, and card title should use instead of hand-rolled font styles.

```jsx
<Title size="screenTitle">Hoje</Title>
<Title size="panelTitle">Editar plano</Title>
```

Sizes map 1:1 to the type scale tokens (`--text-logo-lg`, `--text-screen-title`, `--text-panel-title`, `--text-card-title`). `cardTitle` is the one exception — Inter 700, not uppercase — matching how card titles read in the source app.
