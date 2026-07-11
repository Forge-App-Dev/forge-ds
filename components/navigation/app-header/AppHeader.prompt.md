Global fixed header used on every screen — brand mark + "Forge" wordmark (accent "F") on the left, contextual icon actions on the right.

```jsx
<AppHeader markSrc="assets/forge-mark.png" inModule onBackToModules={goHome} onLogout={logout} />
```

Each sibling app in the family swaps only `markSrc` and keeps this exact structure.
