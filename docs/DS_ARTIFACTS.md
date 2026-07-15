# Artefatos gerados (`_ds_*`, `index.html`) — Forge DS

OP-181. O repo contém arquivos que **parecem editáveis mas são gerados**. Editar à mão
qualquer um deles cria drift silencioso: o próximo `build` sobrescreve a edição, ou pior,
o manifest passa a mentir sobre o código. **Regra única: só o script edita.**

## Mapa dos artefatos

| Arquivo | O que é | Gerado por | Regenera quando… | Nunca editar à mão? |
|---|---|---|---|---|
| **`_ds_bundle.js`** | Bundle único com todos os componentes compilados (Babel/preset-react), namespaced `ForgeDesignSystem_7731a5`, formato `format:4`. É o que uma ferramenta de design/preview consome. Inclui `sourceHash` por componente (base do check-drift, OP-014). | `scripts/build-bundle.mjs` (`npm run build:bundle`) | Qualquer `.jsx` de componente muda | **Sim** |
| **`_ds_manifest.json`** | Índice de componentes (nome + `sourcePath`) e `startingPoints` (previews). Espelha a lista canônica de `build-bundle.mjs`. Passará a carregar o campo `status` do ciclo de vida (ADR-0070, pendente). | `scripts/build-bundle.mjs` | Componente adicionado/removido/movido | **Sim** |
| **`index.html`** (raiz) | Catálogo do GitHub Pages. Gerado dos metadados `@dsCard group/name/subtitle` no topo de cada `*.card.html`. | `scripts/build-index.mjs` (`npm run build:index`) | Um `.card.html` é criado/removido/renomeado | **Sim** |

> **Gate de aderência:** o único gate de aderência real é `scripts/check-adherence.mjs`, e ele
> bloqueia **apenas hex de cor cru** em `.jsx` (`components/` + `ui_kits/forge-app/`). Não valida
> px, contrato de props, import-via-barrel nem fontes. (O antigo `_adherence.oxlintrc.json`, que
> alegava impor essas regras, nunca era executado — o oxlint não parseava — e foi removido, junto
> com o órfão `_ds_omelette.json`.)

## Onde a verdade mora (fonte → artefato)
- **Componente:** `components/<grupo>/*.jsx` → `_ds_bundle.js` + `_ds_manifest.json`.
- **Specimen/card:** `*.card.html` (cabeçalho `@dsCard`) → `index.html`.
- **Tokens:** `tokens/{colors,typography,spacing,motion}.css` (`--forge-*`), gerados por
  `build:tokens` a partir de `tokens/tokens.json` — o gate de aderência
  (`scripts/check-adherence.mjs`) exige que cor em `.jsx` venha de `var(--forge-*)`, nunca hex cru.
- **Fontes:** `tokens/fonts.css` (self-hosted, woff2 embutido) — **ativo estático**, NÃO
  regenerado pelo `build:tokens`. Fonte: `scripts/build-fonts.mjs` (`npm run build:fonts`,
  fora da cadeia `build` — não depende de rede no CI). Regerar só ao mudar famílias/pesos.
- **Ciclo de vida:** `@status`/`@since` no `.jsx` → campo `status` do manifest (pendente
  de implementação no `build-bundle.mjs`, ADR-0070).

## Se você precisa mudar um artefato
1. Edite a **fonte** (o `.jsx`, o `.card.html`, o token, a lista canônica no script).
2. Rode o gerador: `npm run build:bundle` e/ou `npm run build:index`.
3. Commit inclui fonte + artefato regenerado no mesmo push (o Pages atualiza sozinho).

Nunca comite uma edição manual em `_ds_bundle.js` / `index.html` / `_ds_manifest.json`.
