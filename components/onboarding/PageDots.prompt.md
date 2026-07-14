Position indicator for a carousel — active dot grows into an accent pill, others stay small and dim. Presentational only (`aria-hidden`); the Pager announces the position.

```jsx
<PageDots count={3} active={1} accent="var(--forge-nutrition)" />
```

## Quando usar

- Indicar posição dentro de um Pager/carrossel de poucos slides.
- Junto do `Pager`, que já cuida do anúncio falado.

## Quando NÃO usar

- Como controle navegável de página (os dots aqui não recebem toque/foco).
- Barra de progresso de uma tarefa/percentual.
- Muitos itens (dezenas de páginas) — vira ruído.

## Em vez disso use

- Progresso de tarefa/percentual → **`Ring`** ou **`MetaBar`**.
- Navegação por abas → **`ModuleTabBar`**.
- O carrossel completo com CTAs → **`Pager`** (que embute PageDots).

## Acessibilidade

Ver regras transversais do checklist.

- **Papel / leitor de tela:** `aria-hidden="true"` — deliberadamente silencioso; o `Pager` faz o anúncio "slide X de N" para não duplicar.
- **Nome acessível:** não aplicável (não exposto ao leitor de tela).
- **Valor / estado:** posição indicada visualmente (dot ativo em pill/accent).
- **Contraste:** dot ativo em `accent` e inativos em `--forge-text-dimmer` ≥ 3:1 contra o fundo.
- **Observações:** transição de largura/cor respeita reduced-motion via tokens de duração; nunca é a única forma de saber a posição (o Pager anuncia).
