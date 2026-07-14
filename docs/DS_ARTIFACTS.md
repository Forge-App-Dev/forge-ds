# Artefatos gerados (`_ds_*`, `index.html`) — Forge DS

OP-181. O repo contém arquivos que **parecem editáveis mas são gerados**. Editar à mão
qualquer um deles cria drift silencioso: o próximo `build` sobrescreve a edição, ou pior,
o manifest passa a mentir sobre o código. **Regra única: só o script edita.**

## Mapa dos artefatos

| Arquivo | O que é | Gerado por | Regenera quando… | Nunca editar à mão? |
|---|---|---|---|---|
| **`_ds_bundle.js`** | Bundle único com todos os componentes compilados (Babel/preset-react), namespaced `ForgeDesignSystem_7731a5`, formato `format:4`. É o que uma ferramenta de design/preview consome. Inclui `sourceHash` por componente (base do check-drift, OP-014). | `scripts/build-bundle.mjs` (`npm run build:bundle`) | Qualquer `.jsx` de componente muda | **Sim** |
| **`_ds_manifest.json`** | Índice de componentes (nome + `sourcePath`) e `startingPoints` (previews). Espelha a lista canônica de `build-bundle.mjs`. Passará a carregar o campo `status` do ciclo de vida (ADR-0070, pendente). | `scripts/build-bundle.mjs` | Componente adicionado/removido/movido | **Sim** |
| **`_adherence.oxlintrc.json`** | Config oxlint que **impõe** as regras do DS: sem hex/px cru, só Barlow/Inter, contrato de props por componente, import só via `index.js`. Contém `x-omelette` com a lista de tokens e componentes. | Semi-gerado / mantido junto ao build; a lista de props e tokens acompanha os componentes | Props de um componente mudam; token adicionado/removido | **A lista `x-omelette` e as regras de props: sim** (acompanham o gerador). Ajustes de regra novos: com cuidado, via ADR/commit dedicado |
| **`index.html`** (raiz) | Catálogo do GitHub Pages. Gerado dos metadados `@dsCard group/name/subtitle` no topo de cada `*.card.html`. | `scripts/build-index.mjs` (`npm run build:index`) | Um `.card.html` é criado/removido/renomeado | **Sim** |

## Onde a verdade mora (fonte → artefato)
- **Componente:** `components/<grupo>/*.jsx` → `_ds_bundle.js` + `_ds_manifest.json`.
- **Specimen/card:** `*.card.html` (cabeçalho `@dsCard`) → `index.html`.
- **Tokens:** `tokens/*.css` (`--forge-*`) → citados por `_adherence` `x-omelette.tokens`.
- **Ciclo de vida:** `@status`/`@since` no `.jsx` → campo `status` do manifest (pendente
  de implementação no `build-bundle.mjs`, ADR-0070).

## Se você precisa mudar um artefato
1. Edite a **fonte** (o `.jsx`, o `.card.html`, o token, a lista canônica no script).
2. Rode o gerador: `npm run build:bundle` e/ou `npm run build:index`.
3. Commit inclui fonte + artefato regenerado no mesmo push (o Pages atualiza sozinho).

Nunca comite uma edição manual em `_ds_bundle.js` / `index.html` / `_ds_manifest.json`.
