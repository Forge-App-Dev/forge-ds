Isolated screen wrapper for anything OUTSIDE the module shell (boot, login) — owns its own safe-area padding.

```jsx
<Screen><LoginScreen onLogin={signIn} /></Screen>
```

Fills the dynamic viewport (`100dvh` with a `100vh` fallback) and pads all four safe-area insets, including the bottom, so fixed content clears the home indicator (OP-113).

Inside a module (Treino/Nutrição/Perfil), use `ScreenBody` instead — `ModuleShell`/`AppHeader` already handle the safe area there.
