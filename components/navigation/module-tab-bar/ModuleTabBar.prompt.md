Bottom tab bar for a module, tinted with that module's accent color.

```jsx
<ModuleTabBar
  tabs={[{ id: "hoje", label: "Hoje", icon: "dumbbell" }, { id: "treinos", label: "Treinos", icon: "list" }]}
  active="hoje"
  onChange={setTab}
  accent="var(--forge-accent)"
/>
```

## Quando usar

- Barra de abas inferior de um módulo (Treino/Nutrição/Perfil), tingida com o acento do módulo.

## Quando NÃO usar

- Navegação global entre módulos ou logout.
- Alternar entre poucas opções dentro do conteúdo de uma tela.

## Em vez disso use

- Sair do módulo / logout → **`AppHeader`**.
- Alternância de opções inline → **`SegmentedControl`** / **`Tabs`**.

## Acessibilidade

Ver "Navegação" do checklist.

- **Papel / leitor de tela:** contêiner `<nav>` com `role="navigation"` (é navegação entre módulos, não um tablist — T-30/ADR); cada item é um `button`.
- **Nome acessível:** cada aba tem `aria-label` = `label` em pt-BR; o ícone é decorativo junto do texto.
- **Valor / estado:** a aba ativa expõe `aria-current="page"`.
- **Contraste:** aba ativa no acento do módulo, inativas em `--forge-text-dim` — ≥3:1; a seleção não é só cor (indicador de forma no topo + peso + `aria-current` + rótulo).
- **Foco / alvo:** cada aba é `forge-focusable`, `minHeight:44` + `safe-area-inset-bottom` (OP-121).
- **Observações:** rótulo sempre visível junto do ícone — nunca só ícone.
