Labeled form field, used throughout forms (login, profile, meal editors).

```jsx
<TextField label="Email" value={email} onChange={setEmail} placeholder="voce@email.com" />
```

Set `multiline` for a textarea (e.g. notes), `type="password"` for secure entry (or use `PasswordField` for the eye toggle).

Mobile keyboard hints (OP-115) pass straight through to the field:

```jsx
<TextField label="Email" type="email" inputMode="email" autoComplete="email" enterKeyHint="next" value={email} onChange={setEmail} />
```

- `inputMode` — which on-screen keyboard to show (`"email"`, `"numeric"`, `"decimal"`, `"tel"`…).
- `autoComplete` — autofill token (`"email"`, `"current-password"`, `"one-time-code"`…).
- `enterKeyHint` — label for the Enter key (`"go"`, `"search"`, `"next"`, `"done"`).
- `trailing` — optional adornment inside the single-line field (used by `PasswordField` for its eye toggle); omitted by default, so the render is unchanged.
