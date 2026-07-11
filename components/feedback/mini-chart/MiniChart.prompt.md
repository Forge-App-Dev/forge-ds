Small inline line chart with dots at each point — used for weight/progress history.

```jsx
<MiniChart values={[82, 81.5, 81, 80.6, 80.2]} color="#EF4444" />
```

**Bar variant** — simple columns, better for discrete daily totals:
```jsx
<MiniChart variant="bar" values={[420, 780, 610, 0, 390]} color="#10B981" />
```

**Area variant** — line with a soft filled gradient beneath, for a slightly more prominent trend read:
```jsx
<MiniChart variant="area" values={[82, 81.5, 81, 80.6, 80.2]} color="#EF4444" />
```
