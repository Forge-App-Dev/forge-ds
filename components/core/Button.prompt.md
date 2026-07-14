Filled, accent-colored primary action button — use for the one main call to action on a screen.

```jsx
<Button title="Começar treino  →" color="#EF4444" resolvedColor="#EF4444" onClick={start} />
```

Variants: `small` (36px, for inline header actions like "Ajustar"); `disabled` (0.5 opacity); pass any module accent as `color` (e.g. `--forge-nutrition` for the Nutrição module) plus its literal hex as `resolvedColor` so text contrast stays correct.

## Quando usar

- A ação principal ou secundária de uma tela, diálogo ou formulário.
- Um CTA que executa algo (começar treino, salvar, enviar).

## Quando NÃO usar

- Um filtro ou toggle selecionável numa lista de chips — parece ação, mas é estado.
- Alternar uma preferência binária de efeito imediato.
- Navegar como um link textual puro dentro de um parágrafo.

## Em vez disso use

- Filtro/toggle em linha de chips → **`Pill`** (com `aria-pressed`).
- Preferência liga/desliga → **`Switch`**.
- Ação destrutiva (excluir, descartar) → **`ConfirmButton`** (dois toques).
- Ação compacta no header de um FullScreen → **`Button variant="secondary" size="sm"`** (absorve o antigo `HeaderAction`, OP-006).

## Acessibilidade

Ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `<button>` nativo — anuncia "botão" + nome.
- **Nome acessível:** vem do `title` (ou `children`) em pt-BR sentence case, sem repetir "botão".
- **Valor / estado:** `disabled`/`aria-busy` reais (não só opacidade); `loading` desabilita e mostra Spinner preservando a largura.
- **Contraste:** cor do texto derivada via `onColor()` sobre o `fill` (nunca herdada), garantindo ≥4.5:1; a variante `danger` usa `onColor("var(--forge-danger)")`.
- **Foco / alvo:** classe `forge-focusable`; alturas `md` 44 / `lg` 46 ≥44px (a variante `sm` de 36px é só para ação inline no header, ao lado de alvos maiores).
- **Observações:** o press state responde a `:active`/touch, não só mouse (OP-104).
