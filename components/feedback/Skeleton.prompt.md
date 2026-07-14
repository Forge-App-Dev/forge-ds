Content placeholder shown while data loads. `Skeleton` is a single shape (`line`/`block`/`circle`); `SkeletonText` stacks N lines for a paragraph. Honors reduced-motion via the global pulse.

```jsx
<Skeleton variant="circle" width={40} />
<Skeleton variant="block" height={80} />
<SkeletonText lines={3} />
```

## Quando usar

- Enquanto o conteúdo de uma tela ou seção carrega e você conhece a forma dele.
- Para reduzir o "salto" de layout: esboce cards/linhas antes de os dados chegarem.

## Quando NÃO usar

- Boot/splash de tela inteira.
- Carregamento pontual de uma seção/botão sem forma definida.
- Uma falha (não é carregamento).

## Em vez disso use

- Boot de tela inteira → **`LoadingScreen`**.
- Spinner de seção/botão → **`Spinner`**.
- Falha ao carregar → **`ErrorState`**.

## Acessibilidade

Ver "Progresso e feedback" + regras transversais do checklist.

- **Papel / leitor de tela:** `Skeleton` isolado é decorativo (`aria-hidden="true"`); `SkeletonText` envolve num `role="status"` com `aria-label="Carregando"`.
- **Nome acessível:** "Carregando" no `SkeletonText`; um `Skeleton` avulso não deve ser a única pista de carregamento para o leitor de tela — envolva num `status` se for.
- **Valor / estado:** não há valor; representa "aguardando dados".
- **Foco / alvo:** não é focável (não interativo).
- **Observações:** usa `.forge-anim-pulse`, desativado sob `prefers-reduced-motion`; sem informação transmitida só por cor/movimento.
