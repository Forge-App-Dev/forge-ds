Full chart with labelled x/y axes, a subtle grid and plotted points — the rich sibling of `MiniChart`. One series or many, as line, bar or area. Color comes from tokens; the SVG is inline and responsive.

```jsx
{/* Single line series, x labels + unit for a descriptive summary */}
<Chart
  title="Peso"
  variant="line"
  values={[80, 79.4, 79, 78.8, 78.6]}
  xLabels={["S1", "S2", "S3", "S4", "S5"]}
  unit="kg"
  xUnit="semanas"
  color="var(--forge-accent)"
/>
```

**Bar variant** — discrete totals (grouped when multi-series):
```jsx
<Chart variant="bar" values={[420, 780, 610, 0, 390]} xLabels={["Seg","Ter","Qua","Qui","Sex"]} />
```

**Area variant** — a more prominent trend read:
```jsx
<Chart variant="area" title="Volume" values={[3.8, 4.0, 4.1, 4.28]} unit="t" />
```

**Multiple series** — pass named series; each gets a palette color + a legend entry:
```jsx
<Chart
  title="Comparativo"
  series={[
    { name: "Este mês", values: [12, 15, 14, 18], color: "var(--forge-cat-1)" },
    { name: "Mês passado", values: [10, 11, 13, 12], color: "var(--forge-cat-2)" },
  ]}
  xLabels={["Sem 1", "Sem 2", "Sem 3", "Sem 4"]}
/>
```

## Quando usar

- Um gráfico "de verdade": eixos rotulados, grade, comparação de várias séries, leitura de valores.
- Progresso ao longo do tempo que precisa de contexto de escala (eixo y) e categorias (eixo x).

## Quando NÃO usar

- Tendência compacta de um único valor num card ou linha de lista, sem eixos.
- Percentual único de conclusão de uma tarefa.

## Em vez disso use

- Sparkline/tendência compacta dentro de um card → **`MiniChart`** (line/bar/area, sem eixos).
- Percentual único de conclusão → **`Ring`**; barra de meta → **`MetaBar`/`ProgressBar`**.

## Acessibilidade

Ver regras transversais + "Gráficos" do checklist.

- **Papel / leitor de tela:** `role="img"` no SVG; anuncia "imagem" + o nome acessível.
- **Nome acessível:** `aria-label` gerado automaticamente resumindo os dados (ex.: "Peso: de 80 a 78,6 kg em 5 semanas"); sobrescreva com `ariaLabel`. Também há `<title>` (o `title`) e `<desc>` (o resumo) no SVG.
- **Valor / estado:** valores plotados como pontos; `showValues` rotula cada ponto; eixo y com rótulos numéricos formatados em pt-BR.
- **Contraste:** séries via tokens `var(--forge-cat-*)` ≥ 3:1 contra o fundo (SC 1.4.11); rótulos de eixo em `--forge-text-faint`.
- **Cor não é o único meio:** multi-série sempre acompanha legenda com swatch **e** rótulo (SC 1.4.1); nunca distingue séries só por cor.
- **Reflow:** o SVG vive num contêiner `overflow-x:auto` próprio — nunca faz o body rolar (ADR-0053). Responsivo por `viewBox` + `width:100%`.
- **Observações:** guardas contra dados vazios (SVG rotulado "Sem dados") e ponto único (escala não colapsa).
