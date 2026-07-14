Macro-distribution ring — a composed pattern over Ring that stacks protein/carb/fat segments (fixed macro colors, canonical order protein→carb→fat) with a ready-made legend. Not a copy-domain piece, so it lives in feedback/ next to Ring and MacroMeter.

```jsx
<MacroRing
  protein={120}
  carb={200}
  fat={60}
  center={<span style={{ fontFamily: "var(--forge-font-title)", fontSize: 20, color: "var(--forge-text)" }}>1.850</span>}
/>
```

## Quando usar

- Mostrar a **distribuição** dos macros do dia/refeição (quanto cada um representa do total) num anel único.
- Resumo compacto de macros com legenda, no topo de Nutrição ou num card de refeição.

## Quando NÃO usar

- Progresso de UM macro contra sua meta com barra rotulada → é outro recorte.
- Percentual único de conclusão de tarefa → é ruído de macro aqui.
- Série histórica de um valor no tempo.

## Em vez disso use

- Um macro vs. sua meta → **`MacroMeter`** (barra rotulada por macro).
- Percentual único genérico → **`Ring`** (o primitivo que este compõe).
- Histórico no tempo → **`MiniChart`**.

## Acessibilidade

Ver "Progresso e feedback" + "Gráficos" do checklist.

- **Papel / leitor de tela:** o `Ring` segmentado expõe `role="img"` com label somando os três macros e valores.
- **Nome acessível:** gerado — "Macros: proteína 120 g, carboidrato 200 g, gordura 60 g"; sobreponível via `label`. Unidade separada no nome (ADR-0054).
- **Valor / estado:** cada segmento é proporcional à sua fração do total; a legenda repete cor + rótulo + valor.
- **Contraste:** cores de macro registradas para contraste/daltonismo (ADR-0051/0052); série ≥ 3:1.
- **Observações:** **cor + rótulo + valor sempre juntos** — a legenda garante que a informação não fica só na cor (ADR-0052); ordem canônica proteína→carbo→gordura.
