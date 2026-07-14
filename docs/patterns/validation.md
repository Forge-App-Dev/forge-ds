# Validação de formulário

Fecha **OP-061**. Componentes: `forms/TextField`, `forms/PasswordField`, `forms/QtyInput`, `core/Button`. Relacionado: ADR-0024 (teclado/foco), ADR-0002 (erro é inline, nunca toast), `docs/content-guide.md` (copy).

## Onde o erro mora

O erro de um campo mora **no próprio campo**, via a prop `error` do `TextField` (não há toast — ADR-0002). Isso já:

- pinta a borda em `--forge-danger`,
- seta `aria-invalid`,
- renderiza a mensagem com `role="alert"` amarrada ao campo por `aria-describedby`.

```jsx
<TextField
  label="Email"
  type="email" inputMode="email" autoComplete="email" enterKeyHint="next"
  value={email} onChange={setEmail}
  error={emailError}            // string → vira a mensagem; falsy → campo limpo
/>
```

Use `helper` (não `error`) para dica não-bloqueante ("Mínimo 8 caracteres"). Nunca mostre `helper` e `error` competindo — quando há erro, ele substitui a dica.

## Quando validar

1. **No blur do campo** (saiu do campo já preenchido) → valida aquele campo. Não valide enquanto o usuário ainda digita o primeiro caractere: só irrita.
2. **No submit** → valida tudo. Campos ainda não tocados que estejam inválidos aparecem todos de uma vez.
3. **Enquanto digita, só para _limpar_ um erro já visível** — se o campo estava vermelho e o valor agora é válido, apague o erro na hora. Nunca faça o contrário (acender erro a cada tecla).

## Foco no primeiro erro

Ao submeter com erro, **mova o foco para o primeiro campo inválido** (ordem visual de cima pra baixo) — regra também fixada em ADR-0024. Isso garante que o `role="alert"` seja anunciado e que o teclado abra no campo certo. Nunca só role a tela sem focar.

## Botão de submit

Não desabilite o botão de submit "até o form ficar válido" — isso esconde do usuário o que falta. Deixe submeter, valide, e mostre os erros. O botão usa `loading` durante o envio (spinner, largura preservada — ver `core/Button`) e o sucesso é a transição de estado do próprio botão / fechamento do overlay (ADR-0012), não um toast.

## Copy (voz da marca)

Ver `docs/content-guide.md`. Regras específicas de erro de campo:

- Diga **o que fazer**, não só "inválido": "Email precisa de um @" > "Email inválido".
- Sem culpa, sem código técnico, "você" informal.
- pt-BR, sentence case (nunca UPPERCASE em Inter).

## A11y

Já resolvida pelo `TextField` (ver "Campos de formulário" em `docs/accessibility-checklist.md`): `aria-invalid`, `role="alert"` na mensagem, `aria-describedby`. O asterisco de `required` é `aria-hidden` — a obrigatoriedade real vem do atributo, não do "*".
