Full-screen flow for anything bigger than a quick confirmation.

```jsx
<FullScreen visible={open} onClose={close} title="Editar plano" right={<HeaderAction title="Replicar" onClick={dup} />} footer={<Button title="Salvar" onClick={save} />}>
  ...form...
</FullScreen>
```

**Decision rule — use FullScreen for a long form or a multi-section build flow:** planning/adjusting a whole day, creating or editing a meal, building/editing a workout, creating or editing an exercise. If the flow is just a quick choice, selector, or confirmation, use Panel instead — it's the lighter default.
