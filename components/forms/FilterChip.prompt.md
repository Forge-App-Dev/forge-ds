Selectable filter chip for the scrollable filter row under a SearchField or list header (ADR-0015). Toggles a filter on/off; optional result count. The consumer provides the scrolling row.

```jsx
<div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
  <FilterChip label="Todos" active={f === "all"} onClick={() => setF("all")} />
  <FilterChip label="Peito" count={12} active={f === "peito"} onClick={() => setF("peito")} />
  <FilterChip label="Costas" count={8} active={f === "costas"} onClick={() => setF("costas")} />
</div>
```

## Quando usar

- Filtrar/segmentar uma lista ou busca (grupos musculares, categorias de alimento, períodos).
- Uma fileira horizontal rolável de filtros logo abaixo do `SearchField`/header, com o estado sempre visível (ADR-0015).

## Quando NÃO usar

- Escolha única mutuamente exclusiva de 2–3 opções (aqui vários chips podem ficar ativos).
- Uma ação (aplicar, buscar) — chip é estado, não ação.
- Filtro complexo multidimensional: abra um `Panel`, mas traga os ativos de volta como chips.

## Em vez disso use

- Escolha única entre 2–3 → **`SegmentedControl`**.
- Escolha única com muitas opções → **`Select`**.
- Ação → **`Button`**.
- Chip de escolha genérico fora de uma fileira de filtro → **`Pill`**.

## Acessibilidade

Ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `role="button"` + `aria-pressed` — anuncia "botão, ativado/não ativado" (é um toggle, não navegação).
- **Nome acessível:** o `label` (o `count` é decorativo, `aria-hidden`; se relevante, inclua a contagem no texto do resultado, não no chip).
- **Valor / estado:** `aria-pressed` reflete `active`; o chip ativo continua visível na fileira (nunca esconde um filtro que zera a lista — ADR-0015).
- **Foco / alvo:** `forge-focusable`; altura 34px — garanta espaçamento na fileira para o alvo efetivo ≥44px.
- **Contraste:** texto ativo via `onColor()` sobre o fill; inativo `--forge-text-muted`; badge de contagem usa `color-mix` sobre a cor do chip.
- **Observações:** estado não é só cor — a borda/preenchimento muda E `aria-pressed` acompanha.
