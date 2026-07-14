Progress bar for one macronutrient's daily consumption vs. target.

```jsx
<MacroMeter label="Proteína" color="var(--forge-macro-protein)" value={92} target={150} />
```

**Compact** — dot + thin bar + short readout, no label row, for a dense row (e.g. inside a food item):
```jsx
<MacroMeter compact color="var(--forge-macro-protein)" value={18} target={30} />
```

The three macro colors (protein/carb/fat) are fixed brand identity — never reassign them.

## Quando usar

- Progresso de um macronutriente (proteína/carbo/gordura) contra a meta diária, com rótulo + valor; `compact` para uma linha densa (dot + barra + leitura curta).

## Quando NÃO usar

- Progresso genérico de uma tarefa/percentual único (é ruído de domínio).
- Uma barra de meta não-macro (kcal do dia).
- Histórico ao longo do tempo.

## Em vez disso use

- Percentual único de conclusão → **`Ring`**.
- Meta genérica não-macro → **`MetaBar`**.
- Tendência histórica → **`MiniChart`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist (envolve `ProgressBar`).

- **Papel / leitor de tela:** o `ProgressBar` interno expõe `role="progressbar"` + `aria-valuenow/min/max` + `aria-label` — anuncia o progresso.
- **Nome acessível:** vem do `label` do macro (ex.: "Proteína"); no modo `compact` sem linha de rótulo, garanta o nome no contexto do pai.
- **Valor / estado:** `valueNow`/`valueMax` = consumo/meta arredondados; o fill satura em 100%.
- **Contraste:** as 3 cores de macro são identidade fixa (nunca reatribuir); a barra ≥3:1 contra o trilho.
- **Foco / alvo:** não interativo.
- **Observações:** cor + rótulo + valor sempre juntos, nunca só cor (ADR-0052); ordem canônica proteína→carbo→gordura.
