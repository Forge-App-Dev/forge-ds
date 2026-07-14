Choose one option from a list. The field-like trigger opens a `Panel` of options (no floating dropdown — the system avoids those). Options are `{ value, label, subtitle? }`.

```jsx
<Select
  label="Unidade"
  value={unit}
  onChange={setUnit}
  options={[{ value: "kg", label: "Quilos (kg)" }, { value: "lb", label: "Libras (lb)" }]}
/>
```

## Quando usar

- Escolher exatamente uma opção de um conjunto conhecido (unidade, categoria, objetivo).
- Onde um menu suspenso nativo seria a escolha óbvia — aqui vira um Panel.

## Quando NÃO usar

- Alternar um único estado on/off.
- Pesquisa por texto livre em lista muito longa.
- Ação que executa algo em vez de guardar uma escolha.

## Em vez disso use

- Liga/desliga → **`Switch`**.
- Busca textual → **`SearchField`**.
- Ação → **`Button`**.

## Acessibilidade

Ver "Campos de formulário" + "Diálogos e overlays" do checklist.

- **Papel / leitor de tela:** o gatilho é um `button` com `aria-haspopup="dialog"` + `aria-expanded`; a lista abre num `Panel` (`role="dialog"` + `aria-modal`).
- **Nome acessível:** vem do `label` (via `aria-labelledby`); a opção marcada mostra um check (não só cor).
- **Valor / estado:** `aria-expanded` reflete aberto/fechado; a opção atual recebe o ícone de check no `trailing` do ListItem.
- **Foco / alvo:** `forge-focusable`; altura 44px; foco preso no Panel, Escape fecha, foco volta ao gatilho.
- **Observações:** as opções são ListItem pressáveis (papel "botão"); a escolha não depende só de cor.
