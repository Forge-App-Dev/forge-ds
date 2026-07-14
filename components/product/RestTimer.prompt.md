Rest countdown between sets — a product component built on the signature Ring; the arc drains as rest runs down, mm:ss in the center. Self-running; controls for +15s, pause/resume, skip.

```jsx
<RestTimer duration={90} onComplete={ding} onSkip={next} />
```

## Quando usar

- Contagem regressiva de descanso entre séries num treino.
- Qualquer countdown de descanso curto com controles de pausar/adiar/pular.

## Quando NÃO usar

- Progresso genérico de uma tarefa/percentual (fora do domínio de treino).
- Um spinner de carregamento indeterminado.
- Cronômetro crescente (stopwatch) — este conta regressivo.

## Em vez disso use

- Progresso/percentual genérico → **`Ring`** (o primitivo que este compõe).
- Carregando (indeterminado) → **`Spinner`**.

## Acessibilidade

Ver "Progresso e feedback" + "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** o `Ring` interno expõe `role="progressbar"` com label "Descanso: mm:ss restantes".
- **Nome acessível:** o label do Ring descreve o tempo restante; os botões têm `aria-label` claros ("Adicionar 15 segundos", "Pausar", "Pular descanso").
- **Valor / estado:** progresso 0→1 no Ring; ao zerar, o estado vira "Pronto" e a cor muda para `--forge-success` (mais o texto, não só cor).
- **Foco / alvo:** botões `forge-focusable`, tamanho `--forge-size-control-md` (≥44px).
- **Observações:** o tempo é mostrado em texto (mm:ss tabular), não só pelo arco — informação não depende só de cor/forma.
