Single set-logging row — set badge + weight Stepper + reps Stepper + a check toggle. A product primitive so screens don't rebuild it; composes Stepper (with its TalkBack rule) and dims when done.

```jsx
<SetLogger
  set={1}
  weight={80} onWeightChange={setW}
  reps={8} onRepsChange={setR}
  done={done} onToggleDone={toggle}
/>
```

## Quando usar

- Registrar uma série durante o treino: peso, reps e marcar concluída.
- Empilhar várias linhas para as séries de um exercício.

## Quando NÃO usar

- Ajuste numérico isolado fora do contexto de série.
- Uma linha de lista/navegação genérica.
- Entrada numérica livre de valor grande.

## Em vez disso use

- Um único +/- numérico → **`Stepper`**.
- Digitar um número → **`QtyInput`**.
- Linha de lista genérica → **`ListItem`**.

## Acessibilidade

Ver "Campos de formulário" + "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** cada Stepper expõe dois botões reais + valor em `aria-live` (não `spinbutton`); o check é um `role="checkbox"` com `aria-checked`.
- **Nome acessível:** Steppers rotulados "peso"/"reps"; o check tem `aria-label` "Concluir série N".
- **Valor / estado:** `aria-checked` reflete concluído; ao concluir, a linha dim e os Steppers ficam `disabled` — o estado tem borda + preenchimento do check, não só cor.
- **Contraste:** borda/estado concluído usa `accent` com `--forge-on-accent` no ícone; alvos ≥44px.
- **Foco / alvo:** controles `forge-focusable`; check em `--forge-size-control-md`.
- **Observações:** número da série em badge (numerais tabulares); a cor de "concluído" nunca é o único indicador.
