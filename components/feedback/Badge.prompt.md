Small count/dot indicator for tabs, icons and rows — a numeric pill (`count`) or a bare `dot`, in `accent` or `neutral`.

```jsx
<Badge count={3} label="3 alertas não lidos" />
<Badge count={12} variant="neutral" />
<Badge dot label="Novidades" />
```

Position it yourself over the thing it annotates (usually absolutely):

```jsx
<span style={{ position: "relative" }}>
  <Icon name="bell" />
  <span style={{ position: "absolute", top: -4, right: -4 }}><Badge count={3} /></span>
</span>
```

## Quando usar

- Contador pequeno sobre um ícone/aba (itens pendentes, não lidos).
- Um ponto de "há novidade" sem número.

## Quando NÃO usar

- Um rótulo de status com texto (ativo, pausado).
- Uma métrica de destaque com valor grande.
- Uma tendência com sinal (+/−) e cor de direção.

## Em vez disso use

- Status textual → **`Pill`** / **`InlineAlert`**.
- Métrica de destaque → **`StatCard`**.
- Tendência assinada → **`StatBadge`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** span simples; o número é texto visível. Um `dot` sem `label` é decorativo (`aria-hidden`) — se o ponto for a única fonte de significado, passe `label`.
- **Nome acessível:** `label` (pt-BR, sem repetir o papel); num contador, prefira "3 alertas não lidos" ao número solto.
- **Contraste:** texto sobre o fill via `--forge-on-accent`/`--forge-text` ≥ 4.5:1 (ADR-0050) — nunca cor de texto chutada.
- **Observações:** cor não é o único meio — anexe o significado ao rótulo do elemento anotado.
