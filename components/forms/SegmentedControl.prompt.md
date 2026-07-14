Single choice among 2–3 mutually-exclusive options — the Forge alternative to a radio group (ADR-0008). One item is always active; arrow keys move and select.

```jsx
<SegmentedControl
  label="Unidade"
  options={["kg", "lb"]}
  value={unit}
  onChange={setUnit}
/>
<SegmentedControl options={[{ value: "w", label: "Semana" }, { value: "m", label: "Mês" }]} value={range} onChange={setRange} />
```

## Quando usar

- Escolher exatamente uma opção entre 2 e 3 mutuamente exclusivas (kg/lb, semana/mês/ano).
- Alternar a visão/unidade de um conteúdo com troca imediata.

## Quando NÃO usar

- Mais de ~3 opções, ou rótulos longos que não cabem lado a lado.
- Múltipla seleção (várias marcadas ao mesmo tempo).
- Uma ação que executa algo em vez de guardar uma escolha.

## Em vez disso use

- Muitas opções / listas longas → **`Select`** (abre um Panel com a lista, ADR-0008).
- Poucas opções como filtro (multi-seleção) → **`FilterChip`** / **`Pill`**.
- Preferência binária on/off imediata → **`Switch`**.
- Ação que executa algo → **`Button`**.

## Acessibilidade

Ver "Campos de formulário" / "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `role="radiogroup"` com opções `role="radio"` — anuncia "grupo de opções" + "opção X de N, selecionada".
- **Nome acessível:** o grupo recebe o `label` via `aria-labelledby`; cada opção usa seu texto.
- **Valor / estado:** exatamente um `aria-checked="true"`; os demais `false`.
- **Foco / alvo:** roving tabindex — só a opção ativa está na ordem de tabulação; setas Esquerda/Direita (e Cima/Baixo) movem E selecionam, Home/End vão às pontas. Cada segmento tem alvo ≥44px de largura mínima e 34px de altura dentro do track.
- **Contraste:** texto do segmento ativo via `onColor()` sobre o fill; segmento inativo usa `--forge-text-muted`.
- **Observações:** o item ativo não é só cor — é o único preenchido e o único anunciado como "selecionado".
