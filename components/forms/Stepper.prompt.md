Numeric +/- control for a bounded value (sets, reps, quantity). Two real buttons around a big tabular value; respects `min`/`max`/`step` and disables the button at each bound.

```jsx
<Stepper value={reps} onChange={setReps} min={0} step={1} label="reps" />
<Stepper value={weight} onChange={setWeight} min={0} step={2.5} unit="kg" label="peso" />
```

## Quando usar

- Ajustar um número pequeno por incrementos conhecidos (reps, séries, quantidade), onde tocar é mais rápido que digitar.
- Valor com limites e passo definidos.

## Quando NÃO usar

- Entrada numérica livre ou grande (peso digitado, calorias), onde incrementar seria lento.
- Alternar um estado binário.

## Em vez disso use

- Digitar um número com teclado → **`QtyInput`** (`inputmode="decimal"`, vírgula aceita).
- Liga/desliga → **`Switch`**.
- Escolher uma opção de lista → **`Select`**.

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** dois `button` reais ("Diminuir …" / "Aumentar …"); deliberadamente NÃO usa `role="spinbutton"`/`adjustable`, que esconderia os botões no TalkBack.
- **Nome acessível:** `aria-label` de cada botão combina ação + `label` (ex.: "Aumentar reps").
- **Valor / estado:** valor num `role="status"` + `aria-live="polite"` que anuncia a mudança (ex.: "peso: 12kg"); botão no limite fica `disabled`.
- **Foco / alvo:** `forge-focusable`; botões 40px (dentro de uma linha com espaçamento adequado).
- **Observações:** numerais tabulares evitam "pulo" visual ao mudar o dígito.
