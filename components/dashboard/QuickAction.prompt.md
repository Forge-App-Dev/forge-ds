Icon+label shortcut cell for a dashboard grid — rounded icon chip over a short label, whole cell a real button. Fills its grid cell; `badge` shows a count dot.

```jsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
  <QuickAction icon="plus" label="Registrar" onClick={log} />
  <QuickAction icon="bell" label="Alertas" badge={3} onClick={openAlerts} />
</div>
```

## Quando usar

- Atalho de ação num grid de dashboard (registrar, buscar, alertas).
- Ação disparadora, curta, representada por um ícone + rótulo.

## Quando NÃO usar

- Uma linha de lista com título/subtítulo.
- Uma métrica de destaque com valor grande.
- A ação primária persistente de uma tela ou diálogo.

## Em vez disso use

- Linha de lista navegável → **`ListItem`**.
- Métrica de destaque → **`StatCard`**.
- CTA primária de tela/diálogo → **`Button`**.

## Acessibilidade

Ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `button` real — anuncia "botão" + rótulo.
- **Nome acessível:** vem do `label` (pt-BR sentence case); o ícone é decorativo.
- **Valor / estado:** `disabled` real (não só opacidade); o `badge` é uma contagem visível — anexe-o ao rótulo se for a única fonte de significado.
- **Foco / alvo:** `forge-focusable`; `min-height` ≥44px; press state em mouse e touch.
- **Observações:** `accent` tinge só o chip do ícone, nunca é usado como cor de texto.
