# Checklist de PR / mudança — Forge DS

OP-168. Toda mudança nasce direto no repo (ver `FLUXO_EVOLUCAO_DS.md`). Não há PR de
duas pessoas hoje, mas o checklist é o **portão de qualidade** de qualquer commit —
o gate de aderência (`scripts/check-adherence.mjs`) só valida hex de cor cru; este checklist cobre o resto.

## Componente novo — não entra sem os 6 artefatos
Um componente só é considerado completo quando existe:

- [ ] **`.jsx`** — a implementação, em `components/<grupo>/`.
- [ ] **`.d.ts`** — tipos das props (contrato para consumidores e IDE).
- [ ] **`.prompt.md`** — como usar, com **exemplo certo e exemplo ERRADO** (ver
      "Nota OP-182" no fim deste documento).
- [ ] **`.card.html`** — specimen com `@dsCard group=... name=... subtitle=...` no topo
      (renderiza no Pages; o índice é regerado por `scripts/build-index.mjs`).
- [ ] **A11y desde o nascimento** — foco visível (`forge-focusable` + token de focus
      ring), `role`/`aria-*` corretos, labels associadas, alvo de toque ≥ 44px,
      respeita reduced-motion. (Ver `guidelines/accessibility.card.html`.)
- [ ] **Tokens-only** — zero hex cru, zero px cru, zero fonte fora de Barlow
      Condensed/Inter. Só `var(--forge-*)`. (O `check-adherence.mjs` bloqueia hex de cor cru
      em `.jsx`; px e fontes são convenção — respeite mesmo sem bloqueio automático.)

## Regras transversais (qualquer mudança)
- [ ] **Fundação antes de superfície:** se o componente precisa de um token que não
      existe, o token é criado **antes** (regra de ouro do FLUXO §4).
- [ ] **Ciclo de vida** (ADR-0070): componente novo entra `@status experimental`
      + `@since <versão>`. Promoção a `stable` é decisão do owner.
- [ ] **Contrato de props:** ao adicionar/remover prop, atualizar `.d.ts` e `.prompt.md`.
      (O gate de aderência **não** valida props — é convenção, mantida pelo autor.)
- [ ] **Sem anti-patterns** (`guidelines/anti-patterns.card.html`): sem sombra/elevation,
      sem gradiente, sem toast/snackbar, sem bottom sheet, sem uppercase em Inter, sem
      hex cru. (ADR-0001, ADR-0002.)
- [ ] **Artefatos regenerados, não editados à mão:** `_ds_bundle.js`, `_ds_manifest.json`,
      `index.html` vêm dos scripts. (Ver `docs/DS_ARTIFACTS.md`.)
- [ ] **CHANGELOG:** entrada em `[Unreleased]` na categoria certa (Added/Changed/
      Deprecated/Removed/Fixed), seguindo `docs/COMMIT_CONVENTION.md`.
- [ ] **Breaking change** (API ou visual): entrada de migração em `docs/MIGRATION.md`
      + bump MAJOR (ADR-0071).
- [ ] **Publicado no Pages** no mesmo push; Mateus revisa no link renderizado.

## Mudança de token
- [ ] Valor dentro da intenção (ex.: contraste) = patch; token novo = minor;
      remover/renomear = major + migração (ADR-0071).
- [ ] Namespace `--forge-*` em `tokens/*.css` (gerado de `tokens/tokens.json`, não
      editado à mão).

---

## Nota OP-182 — todo `.prompt.md` inclui um exemplo de uso ERRADO
Agentes aprendem mais com contraexemplo do que só com o caminho feliz. Todo `.prompt.md`
deve ter, além do uso correto, um bloco **"✗ Não faça"** curto mostrando o erro típico
daquele componente e por quê — de preferência o erro que o gate de aderência **não** pega
(ele só cobre hex de cor cru; o prompt cobre o julgamento).

```md
## ✓ Uso
<Panel visible={open} onClose={close} title="Treino de hoje"> …itens… </Panel>

## ✗ Não faça
<Panel> ...formulário longo de várias seções... </Panel>
→ Fluxo longo é FullScreen, não Panel. E não use Panel como bottom sheet:
  ele é central por design (Sheet foi removido em 1.2.0 — ver anti-patterns).
```

Regra: o contraexemplo é **específico do componente** (qual confusão ele causa), não um
lembrete genérico. Um `.prompt.md` sem bloco "✗ Não faça" não passa no checklist acima.
