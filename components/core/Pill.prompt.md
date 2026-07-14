Rounded filter/choice chip — outlined when inactive, filled with its color when active. Exposes `aria-pressed` (it is a selectable toggle, not navigation).

```jsx
<Pill title="Peito" active={filter === "peito"} color="#EF4444" onClick={() => setFilter("peito")} />
<Pill title="Favoritos" icon="trophy" size="sm" active={onlyFav} onClick={() => setOnlyFav(v => !v)} />
<Pill title="Indisponível" disabled />
```

Use in a horizontally scrolling row for filters (muscle groups, meal moments, categories). Additive props (OP-105): `icon` (leading glyph), `size` (`sm`/`md`, `md` = original 40px height), `disabled`.

## Quando usar

- Filtro/escolha selecionável dentro de uma linha de chips.
- Poucas opções onde ver todas de uma vez ajuda.

## Quando NÃO usar

- Ação que executa algo (parece chip, mas é ação).
- Muitas opções / listas longas.

## Em vez disso use

- Fileira de filtro rolável com contagem e reset → **`FilterChip`** (padrão de filtro do ADR-0015).
- Ação → **`Button`**.
- Escolha única entre 2–3 → **`SegmentedControl`**; muitas → **`Select`**.

## Acessibilidade

Ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `role="button"` + `aria-pressed` — anuncia "botão, ativado/não ativado".
- **Nome acessível:** o `title`; se usar `icon`, ele é decorativo (`currentColor`, sem nome próprio).
- **Valor / estado:** `aria-pressed={active}`; `disabled` real (não só opacidade).
- **Foco / alvo:** `forge-focusable`; altura 34–40px, garanta espaçamento na fileira para alvo efetivo ≥44px.
- **Contraste:** texto ativo via `onColor()` sobre o fill; inativo `--forge-text-muted`.
- **Observações:** estado não é só cor — borda/preenchimento mudam E `aria-pressed` acompanha.
