On/off toggle for a boolean preference or setting. Pass `label` to render the common tappable row (label left, switch right); omit it for a bare switch.

```jsx
<Switch label="Usar quilos (kg)" checked={useKg} onChange={setUseKg} />
<Switch checked={enabled} onChange={setEnabled} />  {/* bare switch */}
```

## Quando usar

- Uma preferência binária de efeito imediato (kg/lb, ativar/desativar uma refeição, notificações).
- Dentro de uma linha de formulário/configuração, com rótulo à esquerda.

## Quando NÃO usar

- Escolher uma entre várias opções mutuamente exclusivas.
- Uma ação que dispara um fluxo (salvar, enviar) em vez de guardar um estado.
- Um filtro/toggle selecionável dentro de uma lista de chips.

## Em vez disso use

- Escolha entre várias opções → **`Select`** (abre um Panel com a lista).
- Ação que executa algo → **`Button`** (parece ação, é ação).
- Filtro/toggle em linha de chips → **`Pill`** (com `aria-pressed`).
- Ajuste numérico (reps, quantidade) → **`Stepper`**.

## Acessibilidade

Ver "Campos de formulário" do checklist.

- **Papel / leitor de tela:** `role="switch"` — anuncia "alternar" + estado.
- **Nome acessível:** vem do `label` (via `aria-labelledby`); sem `label`, forneça um nome no contexto do pai.
- **Valor / estado:** `aria-checked` reflete on/off; anuncia "ativado"/"desativado". `aria-disabled` quando desabilitado.
- **Foco / alvo:** `forge-focusable`; a linha com rótulo tem `min-height` = alvo mínimo (≥44px); acionável por Espaço/Enter.
- **Observações:** o estado nunca é comunicado só por cor — a posição do knob e o anúncio do leitor de tela acompanham.
