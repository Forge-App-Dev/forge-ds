# ADR-0070: Ciclo de vida de componente — experimental → stable → deprecated
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Principal Design System Governance & Lifecycle Specialist (persona) · **OP:** OP-166 (respondendo OP-189)

## Contexto
O DS tem 45 componentes num único nível de maturidade implícito. Não há como um agente (ou o Mateus) saber se um componente é seguro para depender ("stable"), ainda em prova ("experimental") ou a caminho da remoção ("deprecated"). Sem esse eixo, versionamento (ADR-0071) e checklist de PR (`docs/PR_CHECKLIST.md`) não têm âncora: um componente novo e um consolidado entram pela mesma porta.

## Decisão
Adotar **três estados de ciclo de vida** por componente, mais um estado terminal:

| Estado | Significado | Contrato de estabilidade |
|---|---|---|
| `experimental` | Recém-nascido, API pode mudar sem major | **Sem** garantia de estabilidade; pode mudar/sair em qualquer minor |
| `stable` | Consolidado, API sob semver | Só quebra em major; deprecação antes de remover |
| `deprecated` | Marcado para remoção, substituto indicado | Sobrevive ≥ 1 minor com aviso; removido só em major |
| `removed` | Fora do sistema (terminal) | Documentado em `docs/MIGRATION.md` |

### Onde marcar (uma fonte, propagada)
1. **Fonte de verdade:** tag JSDoc no topo do `.jsx` — `@status experimental` + `@since 1.4.0` (e `@deprecated <motivo/substituto>` quando aplicável).
2. **`.d.ts`:** usar o `@deprecated` nativo de TypeScript quando `deprecated` — o editor risca o símbolo e avisa no autocomplete (ganho gratuito para consumidores).
3. **`.prompt.md`:** primeira linha `> **Status:** experimental · **Desde:** 1.4.0` — é o que o agente lê primeiro.
4. **`_ds_manifest.json`:** campo `status` por componente, **gerado** por `scripts/build-bundle.mjs` a partir do `@status` (nunca editado à mão — ver `docs/DS_ARTIFACTS.md`).
5. **Catálogo (`*.card.html`):** atributo opcional `status="experimental"` no `@dsCard`, renderizado como selo por `scripts/build-index.mjs`.

### Regras de transição
- **Nasce em `experimental`.** Todo componente novo entra experimental.
- **experimental → stable:** só quando (a) sobreviveu ≥ 1 minor sem breaking na API; (b) tem `jsx + d.ts + prompt.md + card + a11y + tokens-only` (checklist de PR completo); (c) consumido por ≥ 1 lugar real (ui_kit ou forge-app); (d) **owner ratifica**. Promoção é entrada `Changed` no CHANGELOG (minor).
- **stable → deprecated:** só com substituto indicado (ou decisão explícita de remoção). Exige `@deprecated` nas 3 superfícies, entrada `Deprecated` no CHANGELOG e nota em `docs/MIGRATION.md`.
- **deprecated → removed:** **só em major**, após ≥ 1 minor deprecado. Entrada `Removed` + seção de migração.
- Sem pular etapas: nada vai de `stable` direto a `removed`.

### Classificação inicial
**Ratificado (default):** a classificação abaixo. Delegado pelo owner em 2026-07-14; pode ser revisitada.
- **`stable`:** os primitivos que espelham o app real — core, typography, layout, forms, overlays, navigation, feedback (mapeiam `ui.jsx`, `Ring.jsx`, `meters.jsx`, etc.).
- **`experimental`:** as camadas adicionadas no lote 1.4.0 sem consumo no app ainda — `product/` (PRCelebration, RestTimer, SetLogger), `onboarding/` (Pager, PageDots), `dashboard/` (StatCard, QuickAction).

## Consequências
- O checklist de PR e o CHANGELOG passam a ter um eixo objetivo de maturidade.
- Agentes deixam de tratar um protótipo como contrato estável.
- **Implementação pendente:** propagar `@status` no `build-bundle.mjs`/`build-index.mjs` (fora do escopo desta entrega de docs) — até lá, o estado vive no `.jsx`/`.prompt.md` e no manifest editado pelo gerador.

## Alternativas consideradas
- **Dois estados (stable/deprecated):** rejeitado — sem `experimental` todo protótipo vira dívida de compatibilidade imediata.
- **Estado por pasta (camada = maturidade):** rejeitado — maturidade é por componente, não por grupo; um `forms/` pode ter primitivo estável e outro experimental.
