Personal-record celebration — a product component with brand copy and the system's one sanctioned emotional motion (trophy scale/fade, off under reduced-motion). Names the record and offers a way forward.

```jsx
<PRCelebration exercise="Supino reto" value={92.5} unit="kg" previous="90 kg" onContinue={next} />
```

## Quando usar

- Marcar um recorde pessoal (PR) alcançado — o momento comemorativo do treino.
- Onde faz sentido celebrar antes de seguir (fim de série/treino).

## Quando NÃO usar

- Confirmação neutra ou mensagem de sucesso genérica.
- Qualquer feedback fora do domínio de treino (não é primitivo neutro).
- Motion "emocional" em outro lugar — este é o único ponto sancionado.

## Em vez disso use

- Sucesso/aviso genérico inline → **`InlineAlert`**.
- Confirmação de ação → **`ConfirmButton`** / **`Panel`**.
- Progresso/percentual → **`Ring`**.

## Acessibilidade

Ver "Progresso e feedback" + regras transversais do checklist.

- **Papel / leitor de tela:** contêiner `role="status"` + `aria-live="polite"` — anuncia o recorde ao aparecer, sem interromper.
- **Nome acessível:** título + exercício + valor/unidade em pt-BR; o troféu é decorativo.
- **Valor / estado:** valor com numerais tabulares; "anterior" contextualiza a marca batida.
- **Contraste:** título tinge com `accent` — garanta ≥ 3:1 (texto grande) contra o fundo; valor em `--forge-text` ≥ 4.5:1.
- **Foco / alvo:** o botão Continuar (quando presente) é `forge-focusable`, alvo ≥44px.
- **Observações:** a animação `.forge-anim-celebrate` roda uma vez e é desativada sob `prefers-reduced-motion` (motion não carrega significado).
