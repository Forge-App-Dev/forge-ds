Selectable strip of week days (seg→dom) — the minimum date picker the app hand-draws in TreinoHoje. Active day = accent, "today" is marked (and echoed in the accessible name). role="group" of buttons with roving tabindex and arrow-key navigation.

```jsx
<WeekStrip
  days={[
    { label: "seg", sub: 8, done: true },
    { label: "ter", sub: 9, done: true },
    { label: "qua", sub: 10 },
    { label: "qui", sub: 11 },
    { label: "sex", sub: 12 },
    { label: "sáb", sub: 13 },
    { label: "dom", sub: 14 },
  ]}
  selected={2}
  today={2}
  onSelect={setDay}
/>
```

## Quando usar

- Escolher um dia dentro da semana corrente (treino de hoje, histórico do dia, plano do dia).
- O "mini date picker" horizontal que várias telas redesenham à mão.

## Quando NÃO usar

- Escolher uma data arbitrária em qualquer mês/ano → precisa de calendário completo (fora do escopo, ver `docs/deferred-components.md`).
- Só exibir constância sem selecionar → é indicador, não seletor.
- Navegação entre módulos/abas.

## Em vez disso use

- Só mostrar a sequência de dias → **`StreakIndicator`**.
- Navegação entre seções/telas → **`ModuleTabBar`**.
- Passos de um fluxo → **`Pager`** + **`PageDots`**.

## Acessibilidade

Ver "Navegação" + "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `role="group"` com botões (não radiogroup — ADR-0008); cada dia anuncia "botão".
- **Nome acessível:** por dia — "qua, dia 10, hoje, concluído" (o estado "hoje"/"concluído" vai no nome, nunca só cor).
- **Valor / estado:** dia ativo via `aria-pressed`; hoje via `aria-current="date"`.
- **Foco / alvo:** roving tabindex (só o dia em foco é tabbável); ArrowLeft/Right/Home/End movem o foco; alvo `min-height` = `--forge-size-control-md` (44px).
- **Contraste:** dia ativo usa accent com texto `--forge-on-accent`; pontos de "hoje"/"concluído" acompanham rótulo textual.
- **Observações:** reflow ok em 320px (dias `flex:1`); estado nunca depende só de cor.
