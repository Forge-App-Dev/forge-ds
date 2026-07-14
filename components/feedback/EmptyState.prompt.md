Empty/rest-state row — always reframes positively, never a bare "nothing here".

```jsx
<EmptyState icon="moon" title="Descanso" subtitle="Recuperação também é treino." />
<EmptyState icon="book" title="Nenhum alimento registrado ainda" subtitle='Toque em "+" para adicionar sua primeira refeição.' />
```

## Quando usar

- Estado vazio ou de descanso, sempre reenquadrado de forma positiva (nunca um "nada aqui" seco).
- Passe `action` para oferecer o próximo passo natural ("criar o primeiro X").

## Quando NÃO usar

- Uma falha de carga/ação (isso é erro, não vazio).
- Um aviso não bloqueante dentro de um formulário.
- Carregamento em andamento.

## Em vez disso use

- Falha com retry → **`ErrorState`**.
- Aviso inline → **`InlineAlert`**.
- Carregando → **`Skeleton`** / **`Spinner`** / **`LoadingScreen`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** bloco de conteúdo comum (sem `role="alert"` — vazio não é urgente); o ícone é decorativo.
- **Nome acessível:** `title` + `subtitle` em pt-BR, em tom positivo, sem culpar o usuário.
- **Valor / estado:** o `action` opcional (ex.: `Button small`) oferece o caminho adiante — um vazio sem saída é um beco (OP-127).
- **Contraste:** título em `--forge-text-faint` e subtítulo em `--forge-text-dim` — ≥4.5:1 no texto pequeno.
- **Foco / alvo:** o bloco não é focável; a `action` é `forge-focusable`, alvo ≥44px.
- **Observações:** o significado vem do texto, não só do ícone.
