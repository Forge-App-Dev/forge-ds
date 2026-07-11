Inline banner for persistent notices — program reminders, over-target warnings, success confirmations. No toast/snackbar exists in this system; use this instead, placed in the normal flow of the screen.

```jsx
<InlineAlert kind="warning" title="Lembrete do programa.">
  Rode por 8–10 semanas antes de reavaliar.
</InlineAlert>
```

`kind` picks the accent + icon: `info` (blue, info icon), `success` (green, check), `warning` (amber, warn — default), `danger` (red, warn).
