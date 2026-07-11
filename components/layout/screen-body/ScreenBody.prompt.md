Body wrapper for a screen inside a module (Treino/Nutrição/Perfil) — standard 20px horizontal screen padding + 480px max-width centering + scroll.

```jsx
<ScreenBody>
  <ModuleHeader eyebrow="Terça" title="Hoje" />
  ...
</ScreenBody>
```

All 4 UI-kit screens (`TreinoHojeScreen`, `NutricaoHojeScreen`, …) use this exact padding pattern inline; prefer `ScreenBody` for anything new.
