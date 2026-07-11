Destructive action button that requires two taps — first tap arms a 2.5s "Confirmar?" state, second tap commits. Never wire a delete straight to one tap in this system.

```jsx
<ConfirmButton title="Descartar" confirmTitle="Descartar treino?" onConfirm={discard} />
```
