Accessible single-value range slider for a continuous quantity (peso alvo, intensidade, volume). Track + accent fill + thumb; keyboard and pointer driven.

```jsx
<Slider label="Peso alvo" value={weight} onChange={setWeight} min={40} max={150} step={0.5} unit="kg" />
<Slider value={intensity} onChange={setIntensity} min={0} max={10} step={1} />
```

## Quando usar

- Ajustar um valor contínuo dentro de uma faixa, onde o valor exato importa menos que a posição relativa.
- Quando ver o valor mudar ao arrastar ajuda (intensidade, meta aproximada).

## Quando NÃO usar

- Valor discreto preciso e frequente (reps, séries, quantidade exata) — arrastar é impreciso.
- Escolher entre poucas opções nomeadas.
- Um liga/desliga.

## Em vez disso use

- Incremento numérico preciso (reps, séries) → **`Stepper`**.
- Quantidade de alimento com unidade → **`QtyInput`**.
- Escolha entre 2–3 opções → **`SegmentedControl`**.
- On/off → **`Switch`**.

## Acessibilidade

Ver "Progresso e feedback" / "Campos de formulário" do checklist.

- **Papel / leitor de tela:** `role="slider"` — anuncia "controle deslizante" + valor.
- **Nome acessível:** `aria-labelledby` aponta para o `label`; sem `label`, forneça um nome no pai.
- **Valor / estado:** `aria-valuemin`/`aria-valuemax`/`aria-valuenow`; `aria-valuetext` inclui a unidade (ex.: "72,5 kg") quando há `unit`.
- **Foco / alvo:** a trilha é `forge-focusable` (altura útil 24px); teclado — Setas ±`step`, PageUp/PageDown ±10×, Home/End nas pontas; ponteiro arrasta com `touch-action: none`.
- **Contraste:** trilha `--forge-surface-raised`, preenchimento accent (≥3:1), thumb com anel `--forge-on-accent`.
- **Observações:** o valor também é exibido em texto ao lado do rótulo — não depende só da posição do thumb.
