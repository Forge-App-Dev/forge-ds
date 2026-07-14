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

## Quando usar

- Entrada de texto rotulada num formulário (login, perfil, editores de refeição).
- Texto longo/observações com `multiline`; senha com `type="password"` (ou `PasswordField` para o olho de mostrar).

## Quando NÃO usar

- Entrada numérica com passo/ajuste (reps, quantidade).
- Escolha entre opções fixas.
- Preferência liga/desliga.

## Em vez disso use

- Quantidade numérica → **`QtyInput`** / **`Stepper`**.
- Busca com ícone e limpar → **`SearchField`**.
- Escolha de uma opção → **`Select`**.
- Senha com toggle de visibilidade → **`PasswordField`**.

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** `<input>`/`<textarea>` nativo — anuncia "caixa de edição"; o `label` é um `<label htmlFor>` real associado por id (placeholder não conta como rótulo, SC 3.3.2).
- **Nome acessível:** vem do `label`; `required` acrescenta um `*` decorativo (`aria-hidden`).
- **Valor / estado:** `error` renderiza a mensagem com `role="alert"`, marca `aria-invalid` e a liga ao campo via `aria-describedby`; `helper` usa o mesmo `aria-describedby` sem alerta.
- **Contraste:** borda do campo ≥3:1; borda em `--forge-danger` no erro; texto ≥4.5:1.
- **Foco / alvo:** `forge-focusable`; altura 44px na versão single-line — alvo ≥44px.
- **Observações:** dicas de teclado móvel (`inputMode`, `autoComplete`, `enterKeyHint`) passam direto ao campo (OP-115).
