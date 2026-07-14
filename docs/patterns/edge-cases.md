# Edge cases

Fecha **OP-177**. Checklist de casos-limite a verificar em **cada** componente/tela antes de dar como pronto. Cruza `content-guide.md` (zero/ausente/números), `layout-rules.md` (truncamento), `states-matrix.md` (estados), `offline-sync.md`.

## Checklist universal (rode em todo componente)

- [ ] **Texto longo** — título/rótulo que estoura: trunca com reticências ou clamp, **sem** quebrar layout nem empurrar o valor pra fora (`layout-rules.md` OP-143). Testar com string 3× o esperado.
- [ ] **Zero itens** — lista/seção vazia mostra `EmptyState` positivo (nunca em branco, nunca `ErrorState`). "0 treinos" é informação, não erro (`content-guide.md`).
- [ ] **Um item** — concordância no singular ("1 série", não "1 séries"); layout não assume ≥2.
- [ ] **Número gigante** — valor grande ("1.250 kcal", "125,5 kg", "10.000 reps"): cabe sem estourar; milhar com ponto, decimal com vírgula (`content-guide.md`). Nunca truncar o número.
- [ ] **Valor ausente vs zero** — ausente é "—" (em-dash); zero é "0". São distintos (`content-guide.md`).
- [ ] **Offline** — o componente funciona/degrada sob `OfflineBanner`? UI otimista aplica local (`offline-sync.md`)? Nada quebra sem rede.
- [ ] **Erro de carga** — há `ErrorState`/`InlineAlert` com retry (`errors-retry.md`)?
- [ ] **Loading** — há `Skeleton`/`Spinner` sem pular/reflow?
- [ ] **fontScale alto / Dynamic Type** — texto até ~200% não corta nem sobrepõe (ADR-0023, ADR-0053).
- [ ] **Reduced-motion** — animação cai em `none` (`motion-review.md`, ADR-0029).
- [ ] **Reflow 200% / RTL** — sem scroll horizontal em 320px @200% (ADR-0053); espelha em RTL (ADR-0027).
- [ ] **Alvo ≥44px** e foco visível em qualquer estado (`accessibility-checklist.md`).

## Casos por família

- **Números/métricas** (`StatCard`, `MacroMeter`, `Ring`, `MetaBar`) — negativos com U+2212 ("−0,5 kg"); intervalos com en-dash ("8–12 reps"); meta ultrapassada (>100%) não quebra a barra/anel.
- **Listas** (`ListItem`, `SetLogger`, busca) — 0 / 1 / muitos itens; item com título enorme + trailing longo; ver `search.md` para "nada encontrado".
- **Campos** (`TextField`, `QtyInput`) — vazio, valor colado no limite, entrada inválida (erro inline, `validation.md`), vírgula decimal pt-BR.
- **Overlays** (`Panel`, `FullScreen`) — conteúdo maior que a tela (rola, rodapé fixo acima do teclado, ADR-0024); form sujo ao fechar (`forms-behavior.md`).
- **Texto/copy** — pt-BR sem "(s)"; nunca deixar estado vazio sem reenquadramento de coach (`content-guide.md`).

## Uso

Cole a seção universal como gate no `docs/PR_CHECKLIST.md` de qualquer componente novo ou alterado.
