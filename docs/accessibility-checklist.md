# Checklist de acessibilidade — Forge DS

Checklist WCAG 2.2 AA (mobile) por **tipo** de componente. Cada `.prompt.md` cola a seção do seu tipo na sua área "Acessibilidade" (ADR-0057). Referências: ADR-0050 (onColor), ADR-0051/0052 (macros), ADR-0053 (reflow), ADR-0054 (terminologia leitor de tela), ADR-0055 (textDimmer).

## Regras transversais (todo componente)

- [ ] **Contraste de texto** ≥ 4.5:1 (corpo) / ≥ 3:1 (texto grande/negrito ≥18,66px bold ou ≥24px). SC 1.4.3.
- [ ] **Contraste de UI/gráfico** ≥ 3:1 para bordas de controle, ícones informativos, séries de gráfico. SC 1.4.11.
- [ ] **Texto sobre cor de marca/semântica** usa `onColor()` (ADR-0050), nunca cor chutada. Verde/danger/warning → texto escuro; vermelho de marca → branco.
- [ ] **Cor não é o único meio** de transmitir informação (SC 1.4.1) — sempre há rótulo, ícone, texto ou posição junto. Ver ADR-0052 (macros).
- [ ] **Alvo de toque ≥ 44×44px** (SC 2.5.8 exige 24px; Forge adota 44px). Espaçamento entre alvos evita toque acidental.
- [ ] **Foco visível** via `:focus-visible` + `--forge-focus-ring` (classe `forge-focusable`). Nunca `outline:none` sem substituto. SC 2.4.7 / 2.4.11.
- [ ] **Ordem de foco** segue a ordem visual/lógica. SC 2.4.3.
- [ ] **Nome acessível** presente e em pt-BR sentence case, sem repetir o papel ("Salvar", não "botão Salvar"). SC 4.1.2.
- [ ] **Papel e valor/estado** expostos via `role`/`aria-*` conforme ADR-0054.
- [ ] **Reflow:** utilizável a 200% de zoom e 320 CSS px sem scroll horizontal no body (ADR-0053). SC 1.4.10.
- [ ] **Reduced motion** respeitado em qualquer animação (readme §Motion). SC 2.3.3.
- [ ] **`textDimmer` só decorativo/placeholder** (ADR-0055).

## Botões e pressáveis (Button, ConfirmButton, HeaderAction, Pill, QuickAction, Card pressável)

- [ ] `role="button"` (Card pressável também — não role custom).
- [ ] Leitor de tela: "botão" + nome. Pill toggle expõe `aria-pressed`.
- [ ] Cor de texto explícita (não herdada) sobre o fill — via `onColor()`.
- [ ] Estado `disabled` real (`aria-disabled`/`disabled`), não só opacidade 0.5.
- [ ] Press state também em `:active`/touch, não só mouse (OP-104).
- [ ] ConfirmButton: `aria-live` ao armar anuncia "Confirmar?" (OP-106).

## Campos de formulário (TextField, QtyInput, SearchField, Select, Switch, Stepper)

- [ ] `<label>` visível **associada** (`htmlFor`/`id`) — placeholder não conta como label (SC 3.3.2).
- [ ] Leitor de tela: "caixa de edição" / "menu suspenso" / "alternar" conforme ADR-0054.
- [ ] Erro: `role="alert"` na mensagem + `aria-invalid` + `aria-describedby` no campo (ver card Accessibility).
- [ ] `inputmode`/`enterkeyhint` por tipo; `inputmode="decimal"` no QtyInput (OP-115/116).
- [ ] Vírgula decimal aceita e normalizada; unidade separada no `aria-label` (ADR-0056).
- [ ] Switch/Stepper: estado/valor anunciado ("ativado", "12").

## Diálogos e overlays (Panel, FullScreen, VideoModal)

- [ ] `role="dialog"` + `aria-modal="true"`; título via `aria-labelledby`.
- [ ] Leitor de tela anuncia "caixa de diálogo".
- [ ] Foco preso dentro; Escape fecha; foco volta ao gatilho ao fechar. SC 2.4.3.
- [ ] Scroll do fundo travado; corpo do diálogo rola vertical (nunca horizontal a 320px — ADR-0053).
- [ ] `dvh` com fallback `vh` para não cortar rodapé fixo.
- [ ] ✕ é alvo ≥44px com nome "Fechar".

## Progresso e feedback (Ring, MacroMeter, MetaBar, Spinner, InlineAlert, StatBadge, LoadingScreen)

- [ ] `role="progressbar"` + `aria-valuenow/min/max` + `aria-label` (Ring/MacroMeter/MetaBar). Anuncia "55 por cento".
- [ ] Spinner/LoadingScreen: `role="status"` + label visually-hidden "Carregando" (OP-128).
- [ ] InlineAlert/erro: `role="alert"` (imediato) ou `status` (educado) conforme urgência.
- [ ] **Macros:** cor + rótulo + valor sempre juntos; nunca só cor (ADR-0052). Ordem canônica proteína→carbo→gordura. Em barra fina sem rótulo por segmento, legenda com swatch+rótulo ou padrão por macro.
- [ ] StatBadge: cor de tendência negativa (`--forge-negative`) distinta de danger; sinal "−" real + `aria-label` (ADR-0056).

## Gráficos (MiniChart)

- [ ] `<title>`/`<desc>` no SVG; séries ≥ 3:1 contra fundo.
- [ ] Não depende só de cor para distinguir séries (rótulo/legenda).
- [ ] Contêiner com `overflow-x:auto` próprio — nunca faz o body rolar (ADR-0053).

## Ícones (Icon)

- [ ] Decorativo → `aria-hidden="true"` (default).
- [ ] Informativo (única fonte de significado) → `title`/`aria-label` em pt-BR; anuncia "imagem".
- [ ] Ícone dentro de pressável tem `color` explícito (readme §pitfalls).

## Navegação (AppHeader, ModuleHeader, ModuleTabBar)

- [ ] ModuleTabBar: `tablist` com itens `tab`; item ativo `aria-selected`. Anuncia "guia, selecionada, 1 de 3".
- [ ] Altura útil ≥ 49px + inset bottom (OP-121).
- [ ] Marca fora de módulo é `div`, não button (OP-120).
