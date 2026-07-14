Global fixed header used on every screen — brand mark + "Forge" wordmark (accent "F") on the left, contextual icon actions on the right.

```jsx
<AppHeader brand={{ name: "Forge", markSrc: "assets/forge-mark.png" }} inModule onBackToModules={goHome} onLogout={logout} />
```

Each sibling app in the family swaps only `brand` (name + mark) and keeps this exact structure (OP-120). `name` defaults to "Forge" (first letter in accent); the legacy `markSrc` prop still works as a shorthand for `brand.markSrc`.
