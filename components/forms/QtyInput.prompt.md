Quantity field with a unit toggle — tapping the unit button cycles through grams and any food-specific portion presets ("fatia", "copo", …).

```jsx
<QtyInput qty="150" unit="g" units={["g", "fatia"]} onChange={setQty} />
```

Grams is always the source of truth for macro calculation, regardless of displayed unit.

## Acessibilidade (OP-116)

Ver "Campos de formulário" do checklist.

- **Nome acessível:** o campo não tem rótulo visível, então usa `aria-label="Quantidade"`; a unidade é um controle separado com `aria-label` próprio ("Unidade: g. Toque para trocar"), nunca embutida no número.
- **Teclado:** `inputMode="decimal"` abre o teclado numérico com separador decimal no mobile.
- **Normalização:** aceita vírgula decimal e normaliza vírgula→ponto ("1,5" → "1.5", ADR-0056); só dígitos e separadores são mantidos.
- **Foco:** o botão de unidade é `forge-focusable`.
