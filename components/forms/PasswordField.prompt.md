Password field with a show/hide eye toggle — a `TextField` for secure entry. Same label/error/helper/required semantics as TextField.

```jsx
<PasswordField label="Senha" value={pw} onChange={setPw} />
<PasswordField label="Nova senha" autoComplete="new-password" value={pw} onChange={setPw} error={weak ? "Muito curta" : undefined} />
```

## Quando usar

- Qualquer entrada de senha (login, cadastro, redefinição).
- Quando o usuário precisa poder revelar o que digitou para conferir.

## Quando NÃO usar

- Texto comum, e-mail, número → não é senha.
- Código OTP de um dígito por caixa (padrão próprio, fora deste componente).

## Em vez disso use

- Texto/e-mail/número → **`TextField`** (com `type`, `inputMode`, `autoComplete`).
- Quantidade numérica de alimento → **`QtyInput`**.
- Busca → **`SearchField`**.

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** herda o `<label htmlFor>` associado do TextField — anuncia "caixa de edição, senha".
- **Nome acessível:** vem do `label`. O toggle tem `aria-label` que muda entre "Mostrar senha" / "Ocultar senha".
- **Valor / estado:** o toggle expõe `aria-pressed`; erro via `role="alert"` + `aria-invalid` + `aria-describedby` (do TextField).
- **Foco / alvo:** campo e toggle são `forge-focusable`; o toggle é um `<button type="button">` para não submeter o formulário.
- **Observações:** `autoComplete` correto ("current-password"/"new-password") deixa o gerenciador de senhas funcionar; `type` alterna password↔text sem perder o valor.
