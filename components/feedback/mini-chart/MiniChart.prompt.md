Small inline line chart with dots at each point — used for weight/progress history.

```jsx
<MiniChart values={[82, 81.5, 81, 80.6, 80.2]} color="var(--forge-accent)" />
```

**Bar variant** — simple columns, better for discrete daily totals:
```jsx
<MiniChart variant="bar" values={[420, 780, 610, 0, 390]} color="var(--forge-success)" />
```

**Area variant** — line with a soft filled gradient beneath, for a slightly more prominent trend read:
```jsx
<MiniChart variant="area" values={[82, 81.5, 81, 80.6, 80.2]} color="var(--forge-accent)" />
```

## Quando usar

- Gráfico pequeno de um histórico (peso/progresso ao longo do tempo): linha, área ou barras.

## Quando NÃO usar

- Progresso de um valor único contra uma meta.
- Progresso de um macro.
- Um percentual único de conclusão.

## Em vez disso use

- Valor vs. meta → **`MetaBar`**.
- Macro vs. meta → **`MacroMeter`**.
- Percentual de conclusão → **`Ring`**.

## Acessibilidade

Ver "Gráficos" do checklist.

- **Papel / leitor de tela:** SVG com `role="img"` + `aria-label` (via `title`, com fallback por variante); o estado sem dados anuncia "Sem dados".
- **Nome acessível:** passe `title` descrevendo a série em pt-BR (ex.: "Peso nos últimos 5 dias").
- **Valor / estado:** resume a tendência; para valores exatos, apresente também um texto/tabela ao lado.
- **Contraste:** a série usa `currentColor` — garanta ≥3:1 contra o fundo.
- **Foco / alvo:** não focável.
- **Observações:** não depende só de cor para leitura (rótulo/legenda de apoio); o SVG escala a 100% de largura sem forçar scroll horizontal do body (ADR-0053).
