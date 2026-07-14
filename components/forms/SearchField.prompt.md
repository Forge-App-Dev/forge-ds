Search input with a leading magnifier and a clear (✕) button when non-empty — for food/exercise lookup. `type="search"`, submits on Enter.

```jsx
<SearchField value={q} onChange={setQ} placeholder="Buscar exercício" onSubmit={run} />
```

## Quando usar

- Filtrar/pesquisar uma lista longa (alimentos, exercícios) por texto livre.
- Topo de uma tela ou Panel de busca.

## Quando NÃO usar

- Um campo de formulário comum com rótulo persistente (email, nome).
- Escolher entre poucas opções conhecidas.

## Em vez disso use

- Campo de formulário rotulado → **`TextField`**.
- Poucas opções fixas → **`Select`**.

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** `input type="search"` — anuncia "caixa de edição de busca".
- **Nome acessível:** vem do `placeholder` via `aria-label` (placeholder sozinho não conta como rótulo — aqui ele é espelhado no `aria-label`).
- **Valor / estado:** o botão limpar aparece só com texto e tem `aria-label="Limpar busca"`; `enterKeyHint="search"` ajusta a tecla do teclado virtual.
- **Foco / alvo:** `forge-focusable` no input; altura 44px; o botão limpar é alvo tocável.
- **Observações:** ícone de lupa é decorativo (`aria-hidden` via Icon).
