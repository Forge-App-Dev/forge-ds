Standard list row — leading (icon/avatar/dot) + title/subtitle + trailing slot. Pass `onClick` for a pressable row (gets `role="button"`, focus, press, chevron); omit for a static row.

```jsx
<ListItem leadingIcon="dumbbell" title="Supino reto" subtitle="4 séries × 8" onClick={open} />
<ListItem title="Peso" trailing={<Text>82 kg</Text>} />          {/* static, value */}
<ListItem title="Notificações" trailing={<Switch checked={on} onChange={setOn} />} />
```

## Quando usar

- Linhas de uma lista/tabela de escolhas: exercícios, alimentos, configurações.
- Uma linha que navega (com `onClick` + chevron) ou que expõe um valor/controle no `trailing`.

## Quando NÃO usar

- Um bloco de destaque com métrica grande e tendência (não é uma linha).
- Uma célula de ação de dashboard em grade.

## Em vez disso use

- Métrica de destaque com valor grande/tendência → **`StatCard`**.
- Atalho de ícone+rótulo numa grade → **`QuickAction`**.
- Escolher uma opção de uma lista dentro de um seletor → **`Select`** (que usa ListItem internamente).

## Acessibilidade

Ver "Botões e pressáveis" do checklist (quando `onClick`).

- **Papel / leitor de tela:** com `onClick`, é um `button` real — anuncia "botão" + título; sem `onClick`, é um `div` estático.
- **Nome acessível:** vem do `title` (e `subtitle`); mantenha em pt-BR sentence case, sem repetir o papel.
- **Valor / estado:** o controle no `trailing` (ex.: Switch) carrega seu próprio estado; `disabled` bloqueia a interação de verdade.
- **Foco / alvo:** `forge-focusable`; `min-height` = alvo mínimo (≥44px); press state também em touch.
- **Observações:** título/subtítulo truncam com ellipsis; o chevron é decorativo (o papel "botão" já sinaliza navegação).
