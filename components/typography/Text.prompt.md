Body-copy primitive (Inter). Use it for everyday text instead of styling raw `<div>`s. `size` maps to the type scale; `cardTitle` (Inter bold) lives here, not in Title.

```jsx
<Text>Registre suas séries conforme treina.</Text>
<Text size="cardTitle">Treino de hoje</Text>
<Text size="chip" color="var(--forge-text-dim)" as="p">4 séries × 8 reps</Text>
```

## Quando usar

- Texto de corpo, legendas, títulos de card (Inter bold) e rótulos de linha.
- Sempre que precisar de texto consistente com o type scale, sem estilizar `<div>` na mão.

## Quando NÃO usar

- Um título de tela/display grande (Barlow).
- Um mini-rótulo uppercase de campo/seção.

## Em vez disso use

- Título de tela/painel (Barlow display) → **`Title`**.
- Rótulo uppercase de campo → **`Label`**.
- Rótulo de seção → **`SectionLabel`**.

## Acessibilidade

Ver regras transversais do checklist.

- **Papel / leitor de tela:** semântica vem do `as` — use `p` para parágrafos, `label` para rótulos de campo (associe via `htmlFor`); `span`/`div` são neutros.
- **Nome acessível:** o próprio conteúdo textual.
- **Contraste:** cor padrão `--forge-text` ≥ 4.5:1; ao passar `color`, garanta o contraste (evite `textDimmer`, que é só decorativo — ADR-0055).
- **Observações:** o tamanho respeita o type scale; reflow a 200%/320px preservado por usar unidades do sistema.
