Isolated screen wrapper for anything OUTSIDE the module shell (boot, login) — owns its own safe-area padding.

```jsx
<Screen><LoginScreen onLogin={signIn} /></Screen>
```

Inside a module (Treino/Nutrição/Perfil), use `ScreenBody` instead — `ModuleShell`/`AppHeader` already handle the safe area there.
