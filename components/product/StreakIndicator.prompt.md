Training streak — a week of dots (completed day = accent, empty = dimmer) plus the running count "X dias". A product component meant to sit next to the WeekStrip. The whole block is one labeled image for screen readers.

```jsx
<StreakIndicator count={12} days={[true, true, true, false, true, true, false]} />
```

## Quando usar

- Mostrar a sequência de dias treinados (hábito/streak) no topo de Treino ou no dashboard.
- Reforço leve de constância, ao lado ou acima da `WeekStrip`.

## Quando NÃO usar

- Selecionar um dia da semana (isto só exibe) → é seletor, não indicador.
- Progresso de uma meta contra alvo (calorias, macro) → é outra grandeza.
- Contagem genérica sem a ideia de sequência de dias.

## Em vez disso use

- Escolher/navegar por dia → **`WeekStrip`** (o seletor que este acompanha).
- Progresso contra meta → **`MacroMeter`** / **`Ring`**.
- Número seco com rótulo e tendência → **`StatCard`** / **`StatBadge`**.

## Acessibilidade

Ver "Progresso e feedback" + "Regras transversais" do checklist.

- **Papel / leitor de tela:** `role="img"` — anuncia como uma imagem única com nome descritivo; os dots são `aria-hidden` (decorativos).
- **Nome acessível:** gerado — "Sequência de 12 dias. 5 de 7 dias nesta semana" (concordância real de plural, ADR-0056); sobreponível via `label`.
- **Valor / estado:** a contagem aparece em texto (Barlow tabular), não só pelos dots — informação não depende só de cor.
- **Contraste:** dot cumprido usa o accent; vazio usa `--forge-text-dimmer` (limiar decorativo — ok, pois o significado está no texto).
- **Observações:** a cor sozinha nunca carrega o dado; o número textual é a fonte de verdade.
