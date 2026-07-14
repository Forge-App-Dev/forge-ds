# Comportamento de formulário

Fecha **OP-141, OP-142**. Já **decidido** em ADR-0024 (teclado) e ADR-0013/ADR-0021 (guard de form sujo) — este doc reúne a aplicação. Componentes: `forms/TextField`, `forms/QtyInput`, `overlays/panel`, `overlays/full-screen`.

## OP-141 — tap-fora + form sujo

`Panel` fecha com tap-fora (gesto permitido, ADR-0019). **Exceção: formulário sujo.**

- Se o formulário tem alterações não salvas, tap-fora / ✕ / back do Android **não descartam direto**: passam pelo guard `onBeforeClose` → `Panel` "Descartar alterações?" (ADR-0021).
- Form **limpo** (nada mudou) fecha sem perguntar — não crie fricção à toa.
- Regra: **nunca perder edição em 1 gesto.** Vale para Panel, FullScreen e back de sistema.

```
tap-fora / ✕ / back
   ├─ form limpo  → fecha
   └─ form sujo   → Panel "Descartar alterações?" → [Descartar] / [Continuar editando]
```

O botão "Descartar" é a ação de saída; "Continuar editando" é o padrão seguro (cancelar o fechamento).

## OP-142 — teclado por tipo de campo

Regra de ADR-0024. O `TextField` repassa `inputMode`/`autoComplete`/`enterKeyHint` direto ao input (OP-115); no RN é `keyboardType`/`returnKeyType`.

| Campo | inputMode / keyboardType | Observação |
|---|---|---|
| Peso, carga, kcal, macros, qtd | `decimal` (`decimal-pad`) | Vírgula decimal pt-BR; normalizar (`QtyInput`, OP-116) |
| Reps, séries (inteiros) | `numeric` | Sem separador decimal |
| Email | `email` + `autoComplete="email"` | — |
| Telefone | `tel` | — |
| Código OTP | `numeric` + `autoComplete="one-time-code"` | — |
| Senha | (texto) + `autoComplete="current-password"`/`"new-password"` | Use `PasswordField` (olho) |
| Busca | (texto, `type="search"`) + `enterKeyHint="search"` | `SearchField` já faz |

**`enterKeyHint`/`returnKeyType`:** `next` entre campos, `done`/`go` no último (ADR-0024).

```jsx
<TextField label="Peso" inputMode="decimal" enterKeyHint="next" value={w} onChange={setW} />
<TextField label="Reps" inputMode="numeric" enterKeyHint="done" value={r} onChange={setR} />
```

## Teclado não pode cobrir o campo

Regra de plataforma (ADR-0024): Android `softwareKeyboardLayoutMode: "resize"`, `KeyboardAvoidingView` por plataforma, `Panel` limita `maxHeight ≤80%`. O rodapé de ação sobe acima do teclado. Ordem de foco campo→campo→rodapé (`layout-rules.md`).

## A11y

Rótulo real (`<label htmlFor>`), `required`/`aria-invalid`, foco no 1º erro ao submeter, alvo ≥44px. Ver `validation.md` e "Campos de formulário" em `docs/accessibility-checklist.md`.
