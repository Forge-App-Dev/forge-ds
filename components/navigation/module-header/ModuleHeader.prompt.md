Top-of-screen title block — eyebrow + big uppercase Barlow Condensed title, optional right-aligned action.

```jsx
<ModuleHeader eyebrow="Terça · 11/07/2026" title="Hoje" right={<Button small title="Ajustar" onClick={open} />} />
```

## Quando usar

- Bloco de título no topo de uma tela dentro de um módulo: eyebrow + título grande em Barlow Condensed, com slot de ação opcional à direita.

## Quando NÃO usar

- Cabeçalho global do app (marca + logout).
- Cabeçalho de um overlay/diálogo.

## Em vez disso use

- Cabeçalho global → **`AppHeader`**.
- Título dentro de um Panel/FullScreen → o `title` do próprio overlay.

## Acessibilidade

Ver "Regras transversais" do checklist (bloco de título com ação opcional).

- **Papel / leitor de tela:** o título usa `<Title size="screenTitle" as="h1">` — expõe um heading de nível 1 da tela.
- **Nome acessível:** o `title` em pt-BR é o heading; o `eyebrow` é contexto textual acima dele.
- **Valor / estado:** o slot `right` costuma ser um `Button small` — a a11y é a do Button.
- **Contraste:** eyebrow em `--forge-text-faint` — ≥4.5:1 no texto pequeno; título em `--forge-text`.
- **Foco / alvo:** o bloco em si não é focável; a ação à direita é `forge-focusable`.
- **Observações:** `minWidth:0` no bloco de texto permite reflow/elipse sem empurrar scroll horizontal (ADR-0053).
