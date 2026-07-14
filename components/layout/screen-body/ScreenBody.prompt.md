Body wrapper for a screen inside a module (Treino/Nutrição/Perfil) — standard 20px horizontal screen padding + 480px max-width centering + scroll.

```jsx
<ScreenBody>
  <ModuleHeader eyebrow="Terça" title="Hoje" />
  ...
</ScreenBody>
```

All 4 UI-kit screens (`TreinoHojeScreen`, `NutricaoHojeScreen`, …) use this exact padding pattern inline; prefer `ScreenBody` for anything new.

Pass `footer` for a pinned action bar at the bottom — the body scrolls while the footer stays put, with a hairline top border and safe-area-aware bottom padding (OP-114):

```jsx
<ScreenBody footer={<Button>Salvar treino</Button>}>
  <ModuleHeader eyebrow="Terça" title="Editar" />
  ...
</ScreenBody>
```
