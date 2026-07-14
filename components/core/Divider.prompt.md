1px hairline separator — horizontal (default) or vertical — drawn with `var(--forge-divider)`. Optional `margin` adds spacing along the flow axis.

```jsx
<Divider margin={12} />
<div style={{ display: "flex", alignItems: "center" }}>
  <span>Séries</span>
  <Divider orientation="vertical" margin={10} />
  <span>Reps</span>
</div>
```

## Quando usar

- Separar grupos de conteúdo dentro de um card ou lista.
- Dividir dois itens numa linha (variante vertical).

## Quando NÃO usar

- Como borda de um contêiner — a borda já vem do card/superfície.
- Para "elevar" ou dar profundidade — profundidade é por cor/superfície (ADR-0028).

## Em vez disso use

- Agrupar conteúdo numa superfície → **`Card`**.
- Rótulo de seção acima de um grupo → **`SectionLabel`**.

## Acessibilidade

Ver regras transversais do checklist.

- **Papel / leitor de tela:** `role="separator"` com `aria-orientation`; é decorativo/estrutural, sem nome próprio.
- **Contraste:** `--forge-divider` é hairline; não transmite informação sozinho, apenas organiza.
- **Observações:** não substitui espaçamento semântico; use `margin` só para respiro visual.
