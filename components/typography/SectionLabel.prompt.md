Section-heading label — same look as Label (which it composes internally), but with the standard top/bottom margin used to introduce a grouped list.

```jsx
<SectionLabel>Sua semana</SectionLabel>
{week.map(...)}
```

## Quando usar

- Cabeçalho de seção que introduz uma lista agrupada (ex.: "Sua semana", "Café da manhã"), com a margem superior/inferior padrão.

## Quando NÃO usar

- Rótulo de campo inline (sem a margem de seção).
- Título de tela ou painel.

## Em vez disso use

- Rótulo de campo/eyebrow → **`Label`** (é o que este compõe, sem a margem).
- Título grande de tela/painel → **`Title`**.

## Acessibilidade

Compõe **`Label`** internamente — mesma a11y, ver "Regras transversais" do checklist.

- **Papel / leitor de tela:** `<div>` decorativo por padrão (herdado de Label); não é um heading semântico — se a seção precisar ser um marco de navegação, use um `Title as="h2"`.
- **Nome acessível:** o texto em pt-BR.
- **Valor / estado:** não aplicável.
- **Contraste:** cor herdada de Label (`--forge-text-faint`) — ≥4.5:1 no texto pequeno.
- **Foco / alvo:** não focável.
- **Observações:** só acrescenta a margem de seção; o visual e a a11y são os de Label.
