Generic linear progress bar — a single fill (`value` 0..1) over a track, or a stacked `segments` variant. The base primitive for any horizontal progress.

```jsx
<ProgressBar value={0.62} label="Progresso do treino" />
<ProgressBar value={0.4} height={8} color="var(--forge-success)" />
<ProgressBar
  label="Distribuição"
  segments={[
    { value: 0.25, color: "var(--forge-macro-protein)" },
    { value: 0.35, color: "var(--forge-macro-carb)" },
    { value: 0.15, color: "var(--forge-macro-fat)" },
  ]}
/>
```

## Quando usar

- Progresso genérico de uma tarefa/percentual único (download, etapa, conclusão).
- Uma barra que empilha vários contribuintes num só trilho (`segments`).

## Quando NÃO usar

- Progresso de um macro com rótulo + valor (proteína/carbo/gordura).
- Uma barra de valor contra meta que fica em cor de alerta quando estoura.
- Um percentual circular de destaque.

## Em vez disso use

- Macro com rótulo + valor → **`MacroMeter`**.
- Valor vs. meta (kcal do dia) → **`MetaBar`**.
- Progresso circular / signature → **`Ring`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** `role="progressbar"` no modo de valor único — anuncia o percentual ("62 por cento"); o modo `segments` é `role="img"` com nome descritivo (o valor por segmento não é anunciável isoladamente).
- **Nome acessível:** vem de `label` (aria-label), em pt-BR sem repetir o papel.
- **Valor / estado:** `aria-valuenow/min/max` (0–100) no modo de valor único.
- **Contraste:** trilho e preenchimento ≥ 3:1 entre si e contra o fundo (SC 1.4.11); em `segments`, cor não é o único meio — acompanhe de legenda/rótulo.
- **Observações:** a transição de largura respeita reduced-motion via as durações de token do sistema.
