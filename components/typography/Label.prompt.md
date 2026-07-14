Small uppercase tracked label — form field labels, screen eyebrows, tiny captions.

```jsx
<Label>Email</Label>
<Label size="miniLabel" color="var(--forge-text-dimmer)">atualizado há 2h</Label>
<Label as="label" htmlFor="email">Email</Label>  {/* associa a um campo */}
```

Passe `as="label"` + `htmlFor` para virar um `<label>` real associado a um campo (SC 3.3.2). O `htmlFor` só se aplica quando `as="label"`.

## Quando usar

- Rótulo de campo, eyebrow de tela ou legenda pequena em maiúsculas tracked.
- Com `as="label"` + `htmlFor`, o rótulo real associado a um campo de formulário.

## Quando NÃO usar

- Título de tela, painel ou card.
- Texto de corpo/parágrafo.
- Introduzir uma lista agrupada com a margem de seção padrão.

## Em vez disso use

- Título → **`Title`**.
- Corpo → **`Text`**.
- Cabeçalho de seção acima de uma lista → **`SectionLabel`** (é este Label com a margem certa).

## Acessibilidade

Ver "Campos de formulário" (quando é rótulo) + "Regras transversais" do checklist.

- **Papel / leitor de tela:** default `<div>` (decorativo); com `as="label"` vira um `<label>` real e o `htmlFor` associa ao campo (SC 3.3.2). O `htmlFor` só é aplicado quando `as="label"`.
- **Nome acessível:** o texto em pt-BR sentence case; quando é rótulo, é o nome acessível do campo.
- **Valor / estado:** não aplicável.
- **Contraste:** cor default `--forge-text-faint` — garanta ≥4.5:1 no texto pequeno; `--forge-text-dimmer` só para decorativo/placeholder (ADR-0055).
- **Foco / alvo:** não focável (clicar num `<label>` real foca o campo associado).
- **Observações:** o tamanho `miniLabel` (10,5px) é bem pequeno — reserve para legendas realmente secundárias e cheque o contraste.
