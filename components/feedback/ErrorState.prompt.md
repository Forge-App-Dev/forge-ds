Failed-to-load state — warn glyph + no-blame message + retry. Brand voice, never a raw error code. `compact` for an inline row; default is a centered full-screen block.

```jsx
<ErrorState onRetry={reload} />
<ErrorState compact title="Não foi possível sincronizar" onRetry={sync} />
```

## Quando usar

- Uma carga/ação falhou e há como tentar de novo (rede, sincronização).
- Substituir uma tela ou seção que não conseguiu montar.

## Quando NÃO usar

- Não há dado por opção legítima (dia de descanso, lista vazia) — não é erro.
- Aviso não bloqueante dentro de um formulário.
- Feedback de carregamento em andamento.

## Em vez disso use

- Estado vazio/descanso → **`EmptyState`** (reenquadra positivo).
- Aviso inline não bloqueante → **`InlineAlert`**.
- Carregando → **`Skeleton`** / **`Spinner`** / **`LoadingScreen`**.

## Acessibilidade

Ver "Progresso e feedback" do checklist.

- **Papel / leitor de tela:** contêiner com `role="alert"` — anuncia a mensagem imediatamente ao aparecer.
- **Nome acessível:** título + subtítulo em pt-BR, sem culpar o usuário nem expor código técnico.
- **Valor / estado:** o botão de retry (Button `secondary`) só existe quando `onRetry` é passado — sempre oferece um caminho adiante.
- **Contraste:** ícone em `--forge-danger` ≥ 3:1; texto ≥ 4.5:1.
- **Foco / alvo:** o botão de retry é `forge-focusable`, alvo ≥44px.
- **Observações:** o significado vem do texto, não só da cor do ícone.
