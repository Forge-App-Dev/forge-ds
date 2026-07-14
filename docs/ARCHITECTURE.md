# Arquitetura — Forge DS

OP-179. Como o design system se posiciona entre o app, a documentação e a origem
histórica. A **fonte de verdade única é este repositório** (`Forge-App-Dev/forge-ds`);
o Claude Design foi descontinuado como origem em 2026-07-13 (ver `FLUXO_EVOLUCAO_DS.md`).

## Fluxo de origem e consumo

```mermaid
flowchart LR
    CD["Claude Design\n(origem visual histórica —\ndescontinuada 2026-07-13)"]:::dead
    APP["forge-app\n(Expo/React Native —\nsrc/components, src/theme)"]
    DS["forge-ds\n(ESTE repo — fonte de verdade)"]:::truth
    PAGES["GitHub Pages\n(catálogo renderizado)"]
    DOCS["forge-docs\n(auditoria, roadmap externo)"]

    CD -. "export inicial 1.0.0\n(não acontece mais)" .-> DS
    APP -- "espelhado / reverse-engineered\n(tokens, primitivos)" --> DS
    DS -- "publica a cada push" --> PAGES
    DS -- "informa / é auditado por" --> DOCS
    DOCS -- "prioridades (OP-*, P-*)" --> DS
    DS -. "futuro: fonte parcial de\ntokens/specs (OP §11.2, via ADR)" .-> APP

    classDef truth fill:#161E2E,stroke:#EF4444,color:#fff,stroke-width:2px;
    classDef dead fill:#121215,stroke:#555,color:#888,stroke-dasharray:4 3;
```

- **Claude Design → forge-ds:** só o export inicial (1.0.0). Relação encerrada.
- **forge-app ↔ forge-ds:** o DS é **espelho** dos primitivos do app hoje. O check-drift
  (OP-014) usa os `sourceHash` do bundle para detectar divergência. Direção futura
  (OP §11.2): inverter parcialmente — tokens/specs do DS viram fonte consumida pelo app.
- **forge-ds → Pages:** cada push publica; Mateus revisa renderizado.
- **forge-ds ↔ forge-docs:** a auditoria mora em forge-docs e pauta o `ROADMAP_DS.md`.

## Arquitetura interna do repo

```mermaid
flowchart TD
    T["tokens/*.css\n(--forge-*: cor, tipo, espaço, motion, foco)"]
    SH["components/shared/\n(color.js — onColor())"]
    P["Primitivos\ncore · typography · layout · forms ·\noverlays · navigation · feedback · icons"]
    PROD["Camada de produto\ndashboard · onboarding · product\n(compõem primitivos, carregam domínio/copy)"]
    IDX["index.js\n(barrel — única porta de import)"]
    ART["Artefatos gerados\n_ds_bundle.js · _ds_manifest.json · index.html"]
    G["guidelines/*.card.html\n(specimens + anti-patterns)"]
    UIK["ui_kits/forge-app/\n(click-through)"]

    T --> P
    SH --> P
    P --> PROD
    P --> IDX
    PROD --> IDX
    P --> ART
    PROD --> ART
    P --> G
    P --> UIK
    IDX --> UIK
```

### Regras estruturais
- **Fundação antes de superfície:** tokens existem antes do componente que os consome
  (FLUXO §4).
- **Primitivos são domain-free e white-label-safe.** A camada de produto (`product/`,
  e por posicionamento `dashboard/`/`onboarding/`) **compõe** primitivos e carrega copy —
  nunca o contrário.
- **Import só pelo barrel `index.js`** — o lint (`_adherence`) proíbe importar internals
  de componente. Ver `docs/DS_ARTIFACTS.md`.
- **Aderência forçada:** hex/px crus e fontes fora de Barlow/Inter são bloqueados; props
  fora do contrato de cada componente são bloqueadas.

## Camadas (do mais estável ao mais volátil)
`tokens` → `shared` → `primitivos` → `produto` → `ui_kit` / `guidelines`.
Mudança sobe: tocar um token pode afetar tudo acima (por isso token é a camada mais
protegida pelo versionamento, ADR-0071).
