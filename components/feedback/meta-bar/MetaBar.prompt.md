Thin progress bar for a single running total against a target — turns amber when over.

```jsx
<MetaBar value={2100} target={2400} color="var(--forge-nutrition)" />
```

**Segmented** — several contributors stacked on one bar (e.g. each meal's kcal share of the day), no over-target warning color:
```jsx
<MetaBar target={2400} segments={[
  { value: 420, color: "var(--forge-macro-protein)" },
  { value: 780, color: "var(--forge-macro-carb)" },
  { value: 480, color: "var(--forge-macro-fat)" },
]} />
```

## Quando usar

- Barra fina de um total único contra uma meta (ex.: kcal do dia) — fica âmbar ao estourar; `segments` para vários contribuintes empilhados numa barra.

## Quando NÃO usar

- Progresso de um macro específico com rótulo e cor de identidade.
- Percentual único de conclusão.
- Histórico ao longo do tempo.

## Em vez disso use

- Macro vs. meta → **`MacroMeter`**.
- Percentual de conclusão → **`Ring`**.
- Tendência histórica → **`MiniChart`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist (envolve `ProgressBar`).

- **Papel / leitor de tela:** o `ProgressBar` interno expõe `role="progressbar"` + `aria-valuenow/min/max` + `aria-label`.
- **Nome acessível:** o `label` ("Distribuição por refeição" no modo segmentado) descreve a barra; no modo simples, garanta o nome no contexto.
- **Valor / estado:** `valueNow`/`valueMax` = total/meta; ao estourar, a cor vira `--forge-warning`.
- **Contraste:** fill ≥3:1 contra o trilho; os separadores no modo segmentado ajudam a distinguir os trechos.
- **Foco / alvo:** não interativo.
- **Observações:** o estouro não é comunicado só pela cor âmbar — o `valuenow > valuemax` também o expressa (SC 1.4.1); no modo segmentado, cada cor precisa de rótulo/legenda de apoio (ADR-0052).
