In-screen tabs for switching a view inside a screen (e.g. progress by week vs. month). Not the app's bottom navigation — that's `ModuleTabBar`.

```jsx
const [tab, setTab] = React.useState("semana");
<Tabs
  active={tab}
  onChange={setTab}
  tabs={[{ id: "semana", label: "Semana" }, { id: "mes", label: "Mês" }]}
>
  {tab === "semana" ? <SemanaView /> : <MesView />}
</Tabs>
```

## Quando usar

- Alternar entre visões irmãs de um mesmo conteúdo dentro da tela (Semana/Mês).
- Poucas abas, rótulos curtos, todas no mesmo nível.

## Quando NÃO usar

- Navegação entre módulos do app (Treino/Nutrição/Perfil).
- Filtros de estado que não trocam de painel.
- Muitas seções longas empilhadas.

## Em vez disso use

- Navegação entre módulos → **`ModuleTabBar`**.
- Filtro/toggle → **`Pill`** (com `aria-pressed`).
- Seções expansíveis empilhadas → **`Accordion`**.

## Acessibilidade

Ver "Navegação" do checklist.

- **Papel / leitor de tela:** `tablist` com itens `tab`; a aba ativa expõe `aria-selected`. Anuncia "guia, selecionada, 1 de 2". O painel é `tabpanel` com `aria-labelledby` na aba.
- **Nome acessível:** vem de `label` (pt-BR sentence case), sem repetir o papel.
- **Valor / estado:** `aria-selected`; foco roving (`tabindex` 0 na ativa, −1 nas demais).
- **Teclado:** Seta ←/→ e Home/End movem e ativam; foco visível via `forge-focusable`.
- **Foco / alvo:** alvo ≥ 44px de altura; indicador accent + cor de texto (não só cor).
