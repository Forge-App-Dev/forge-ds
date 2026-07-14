Dashboard metric cell — eyebrow label, big tabular value, optional icon, trend (StatBadge) and sparkline (MiniChart). Holds no product copy. Pass `onClick` to make it a navigable tile.

```jsx
<StatCard label="Peso" value="82,4" unit="kg" icon="scale"
  trend={{ value: -1.2, unit: "kg", goodDirection: "down" }}
  chart={{ values: [84, 83.5, 83, 82.4], variant: "area" }} onClick={openWeight} />
```

## Quando usar

- Uma métrica de destaque num dashboard: valor grande + rótulo, opcionalmente tendência e mini-histórico.
- Célula navegável que leva ao detalhe da métrica.

## Quando NÃO usar

- Uma linha de lista comum (título + valor à direita).
- Um atalho de ação (ícone + rótulo) numa grade.
- Só a tendência isolada, sem valor de destaque.

## Em vez disso use

- Linha título/valor → **`ListItem`**.
- Atalho de ação em grade → **`QuickAction`**.
- Só o delta/tendência → **`StatBadge`**.
- Só o mini-histórico → **`MiniChart`**.

## Acessibilidade

Ver "Botões e pressáveis" do checklist (quando `onClick`) + regras transversais.

- **Papel / leitor de tela:** quando pressável, o `Card` interno expõe `role="button"` (não role custom); anuncia "botão" + conteúdo.
- **Nome acessível:** composto por rótulo + valor + unidade lidos em sequência; mantenha o `label` em pt-BR.
- **Valor / estado:** o `trend` (StatBadge) traz seta + sinal "−" real + `aria-label`; a cor da tendência não é o único meio.
- **Contraste:** valor e rótulo ≥ 4.5:1; `accent` é usado só na faixa/ícone, não como cor de texto sobre fundo.
- **Foco / alvo:** `forge-focusable` via Card; alvo ≥44px.
- **Observações:** numerais tabulares evitam jitter; a sparkline (MiniChart) tem `<title>/<desc>` próprios.
