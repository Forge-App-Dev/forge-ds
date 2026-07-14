Accessible boolean checkbox for accepting terms, opt-ins, and multi-select rows. Pass `label` to render the common tappable row (box left, label right); omit it for a bare box. `indeterminate` marks a parent of a partially-selected group.

```jsx
<Checkbox label="Aceito os termos" checked={agree} onChange={setAgree} />
<Checkbox label="Selecionar todos" indeterminate={some && !all} checked={all} onChange={toggleAll} />
<Checkbox checked={done} onChange={setDone} />  {/* bare box */}
```

## Quando usar

- Uma opção binária independente (aceitar termos, "lembrar de mim", opt-in).
- Multi-seleção: marcar vários itens de uma lista, cada um com seu próprio estado.
- Cabeçalho "selecionar todos" com estado parcial (`indeterminate`).

## Quando NÃO usar

- Escolher exatamente uma entre várias opções mutuamente exclusivas.
- Uma preferência binária de efeito imediato (ativar/desativar algo agora).
- Uma ação que dispara um fluxo (salvar, enviar).

## Em vez disso use

- Escolha única entre 2–3 opções → **`SegmentedControl`** (tem semântica de grupo, ADR-0008).
- Escolha única com muitas opções → **`Select`** (abre um Panel com a lista).
- Preferência on/off imediata → **`Switch`** (parece um interruptor, é estado imediato).
- Filtro/toggle em linha de chips → **`FilterChip`** / **`Pill`** (com `aria-pressed`).

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** `role="checkbox"` — anuncia "caixa de seleção" + estado.
- **Nome acessível:** vem do `label` (via `aria-labelledby`); sem `label`, forneça um nome no contexto do pai.
- **Valor / estado:** `aria-checked` reflete `true`/`false`; com `indeterminate`, `aria-checked="mixed"` (anuncia "parcialmente marcado"). `aria-disabled` quando desabilitado.
- **Foco / alvo:** `forge-focusable`; a linha com rótulo tem `min-height` = alvo mínimo (≥44px); acionável por Espaço/Enter.
- **Observações:** o estado nunca é só cor — há glyph de check/traço além do preenchimento accent.
