Barlow Condensed display heading — the one heading component every screen title, panel title, and card title should use instead of hand-rolled font styles.

```jsx
<Title size="screenTitle">Hoje</Title>
<Title size="panelTitle">Editar plano</Title>
```

Sizes map 1:1 to the type scale tokens (`--text-logo-lg`, `--text-screen-title`, `--text-panel-title`, `--text-card-title`). `cardTitle` is the one exception — Inter 700, not uppercase — matching how card titles read in the source app.

## Quando usar

- Qualquer título de tela, painel ou card — a única fonte de heading, em vez de estilos de fonte à mão.

## Quando NÃO usar

- Rótulo pequeno de campo, eyebrow ou legenda.
- Texto de corpo/parágrafo.
- Título de card (Inter body-bold, não Barlow).

## Em vez disso use

- Rótulo pequeno/eyebrow → **`Label`** / **`SectionLabel`**.
- Corpo e título de card → **`Text`** (`size="cardTitle"` para o título de card — o alias `cardTitle` aqui é deprecado, OP-013).

## Acessibilidade

Ver "Regras transversais" do checklist (componente de texto, sem papel interativo).

- **Papel / leitor de tela:** passe `as` (`"h1"`..`"h3"`) para semântica de heading correta; sem `as` renderiza uma `<div>` sem nível — use `as` quando for de fato um título de navegação.
- **Nome acessível:** o próprio texto (`children`) em pt-BR.
- **Valor / estado:** não aplicável (não interativo).
- **Contraste:** cor default `--forge-text` ≥4.5:1; como texto grande (≥24px em screenTitle/logoLg) o mínimo relaxa para 3:1, mas o token já cumpre 4.5:1.
- **Foco / alvo:** não focável.
- **Observações:** respeita reflow a 320px — o texto quebra, nunca força scroll horizontal (ADR-0053).
