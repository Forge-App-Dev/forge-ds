Bottom tab bar for a module, tinted with that module's accent color.

```jsx
<ModuleTabBar
  tabs={[{ id: "hoje", label: "Hoje", icon: "dumbbell" }, { id: "treinos", label: "Treinos", icon: "list" }]}
  active="hoje"
  onChange={setTab}
  accent="#EF4444"
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

- **Papel / leitor de tela:** contêiner `role="tablist"`; cada item `role="tab"` — anuncia "guia, selecionada, 1 de N".
- **Nome acessível:** cada aba tem `aria-label` = `label` em pt-BR; o ícone é decorativo junto do texto.
- **Valor / estado:** a aba ativa expõe `aria-selected`.
- **Contraste:** aba ativa no acento do módulo, inativas em `--forge-text-dim` — ≥3:1; a seleção não é só cor (posição + `aria-selected` + rótulo).
- **Foco / alvo:** cada aba é `forge-focusable`, `minHeight:44` + `safe-area-inset-bottom` (OP-121).
- **Observações:** rótulo sempre visível junto do ícone — nunca só ícone.
