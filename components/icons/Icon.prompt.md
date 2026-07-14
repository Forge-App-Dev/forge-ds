Feather-style inline SVG icon, selected by name. Consolidates the source app's ~25 individual icon components into one wrapper (intentional addition — see Icon.d.ts).

```jsx
<Icon name="dumbbell" color="var(--forge-accent)" size={30} />
```

Icons are always inline SVG with `currentColor`/explicit stroke — never emoji, never an icon font.

## Quando usar

- Glifo SVG inline por nome, dentro de botões, abas, badges e linhas.

## Quando NÃO usar

- Como única fonte de significado sem um `title` (viraria conteúdo mudo para o leitor de tela).
- Emoji ou fonte de ícone (o sistema nunca usa).

## Em vez disso use

- Precisa de rótulo textual visível → combine o Icon (decorativo) com um `Label`/`Text` ao lado.
- Indicador de tendência com valor → **`StatBadge`**.

## Acessibilidade

Ver "Ícones" do checklist.

- **Papel / leitor de tela:** decorativo por padrão → `aria-hidden="true"`; passar `title` vira `role="img"` e anuncia "imagem" com o nome.
- **Nome acessível:** o `title` em pt-BR, só quando o ícone é a única fonte de significado.
- **Valor / estado:** não aplicável.
- **Contraste:** ícone informativo ≥3:1 contra o fundo; a cor entra via CSS `color`/`currentColor` para os tokens resolverem.
- **Foco / alvo:** não focável em si — quem recebe foco/alvo é o pressável que o contém.
- **Observações:** dentro de um pressável, defina `color` explícito (readme §pitfalls); nunca deixe o significado depender só da cor.
