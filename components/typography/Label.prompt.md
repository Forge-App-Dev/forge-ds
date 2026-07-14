Small uppercase tracked label — form field labels, screen eyebrows, tiny captions.

```jsx
<Label>Email</Label>
<Label size="miniLabel" color="var(--forge-text-dimmer)">atualizado há 2h</Label>
<Label as="label" htmlFor="email">Email</Label>  {/* associa a um campo */}
```

Passe `as="label"` + `htmlFor` para virar um `<label>` real associado a um campo (SC 3.3.2). O `htmlFor` só se aplica quando `as="label"`.
