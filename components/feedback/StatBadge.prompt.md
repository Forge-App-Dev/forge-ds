Signed trend badge — arrow + value, colored green/red by whether that direction is the desired outcome for this stat (not just up=green).

```jsx
<StatBadge value={-1.2} unit="kg" goodDirection="down" />  {/* weight loss → green */}
<StatBadge value={+5} unit=" reps" goodDirection="up" />   {/* more reps → green */}
```

## Quando usar

- Indicador de tendência assinado (seta + valor) para a variação de um stat (peso desde a semana passada, reps).

## Quando NÃO usar

- Um número neutro sem direção de "bom/ruim".
- Uma ação destrutiva (a cor negativa não é danger).
- Progresso contra uma meta.

## Em vez disso use

- Rótulo/contagem simples → **`Badge`**.
- Progresso vs. meta → **`MetaBar`** / **`MacroMeter`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** texto inline com ícone de seta decorativo; o valor com sinal é lido diretamente.
- **Nome acessível:** o próprio conteúdo (sinal + valor + unidade), ex.: "+5 reps", "−1,2kg".
- **Valor / estado:** a direção deriva de `value` vs. `goodDirection` — cor semântica (bom = `--forge-success`, ruim = `--forge-negative`), não up=verde cego.
- **Contraste:** `--forge-negative` é distinto de `--forge-danger` para não parecer ação de excluir (OP-129); texto ≥4.5:1.
- **Foco / alvo:** não focável.
- **Observações:** a cor nunca é o único sinal — seta (posição) + sinal "+"/"−" + valor acompanham (ADR-0056); o estado flat usa um traço "—".
