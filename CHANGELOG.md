# Changelog

Todas as mudanças relevantes do **Forge Design System** (`@forge/ds`).

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/);
o projeto segue [Versionamento Semântico](https://semver.org/lang/pt-BR/) conforme
definido em [`decisions/ADR-0071`](decisions/ADR-0071-versionamento-semantico-e-deprecacao.md)
(o que é major/minor/patch **num DS**).

> **Nota de reconstrução:** não existiam tags git antes desta entrega (era o P-14 da
> auditoria). As versões **1.0.0–1.4.0** foram reconstruídas a partir do histórico git
> e das notas do readme. A partir daqui, cada versão nasce com tag `vX.Y.Z` e entrada
> própria. Categorias: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.

## [Unreleased]

### Added
- _(nada)_

## [1.10.0] — 2026-07-15
Fase 4: sistema de tokens redondo — um namespace só, provenance de macros, `.d.ts` gerado.
Sem mudança visual (renomeações de token com valores idênticos).

### Changed
- **Um namespace só: `--forge-*` (T-47).** A camada de **alias reverso** foi
  **removida** por completo do `tokens.json` (28 entradas ao todo — `--surface-*`,
  `--border-*` no 1.8.0; agora `--font-*`, `--text-*`, `--tracking-*`, `--weight-*`,
  `--radius-*`, `--space-*`, `--app-max-width`, `--tap-target-min`). Os primitivos
  passaram a emitir `--forge-*` direto (24 cssVars); 90 usos crus migraram em 23
  arquivos (UI kit + guidelines). Cada token tem exatamente **um** cssVar.
  `tokens/tokens.rn.js` **inalterado** (as chaves RN independem do prefixo).
- **`semantic.macro` referencia a camada primitiva (T-48).** As cores de macro
  (proteína/carbo/gordura) deixaram de ser hex literal no semântico e passam a
  referenciar `primitive.color.macro.*` (valores idênticos). Provenance DTCG de 2
  camadas.
- **`ForgeTokens` do `tokens.d.ts` agora é GERADA (T-52).** Antes escrita à mão e
  divergente da forma real; agora derivada do mesmo conjunto do `tokens.rn.js`
  (chaves camelCase + tipos), batendo 1:1 (137 chaves).

### Notes
- **Sem camada semântica de motion (T-51 → ADR-0084).** Decisão registrada de
  **não** adicionar tokens `enter/exit/press`: seriam especulativos (o consumo real
  distingue rapidez, não intenção) e contrariam a limpeza de tokens sem uso.

## [1.9.0] — 2026-07-14
Fase 4: modo decorativo do Spinner + matriz de estados por componente.

### Added
- **`Spinner` — modo decorativo.** Passar `label={null}` (ou `""`) rende o spinner
  como decorativo (`aria-hidden`, **sem** `role="status"`/`aria-label`), para uso
  dentro de um contexto que já anuncia o carregamento (ex.: `Button loading`, uma
  seção com `aria-busy`). Evita anúncios duplicados no leitor de tela. O padrão
  segue anunciando (`role="status"`, label "Carregando"). Resolve o bloqueador do
  T-64; `Ring`/`LoadingScreen` mantêm geometria própria por decisão.
- **`docs/patterns/states-matrix.md` — matriz por componente.** Além da matriz por
  família, agora há o detalhe **por componente**: o mecanismo real de cada estado
  (o prop do contrato) para Ação/Campos/Overlays/Feedback/Navegação/Produto,
  verificado 1:1 contra os `.d.ts` (T-54).

## [1.8.0] — 2026-07-14
Fase 4: decisão de arquitetura de ícones + limpeza de tokens (sem mudança visual).

### Added
- **`decisions/ADR-0083`** e seção nova em `docs/iconography.md` — política de
  escala do registro de ícones: o registro monolítico é intencional na escala
  atual (33 ícones); gatilho de divisão explícito (**~60 ícones ou ~600 linhas**
  → um módulo ES por ícone, mantendo a API `<Icon name>`); sprite/icon-font
  seguem proibidos, agora com justificativa (quebram `currentColor`/white-label).
  Resolve T-60 como decisão documentada — sem mudança de código de runtime.

### Removed
- **Aliases de cor sem prefixo `--surface-bg/-card/-raised/-panel`,
  `--border-card`, `--border-input`.** Eram compat legada (OP-097) e não tinham
  nenhum consumidor (0 usos em `components/`, `ui_kits/`, `guidelines/`). Cor
  sai sempre dos tokens `--forge-*`. Parte do T-47 (unificação de namespace);
  o restante do tangle (tipografia primitivo↔alias, `--radius-*` sem prefixo)
  fica para um passe dedicado.

## [1.7.0] — 2026-07-14
Limpeza de artefatos mortos + correções de honestidade (gráfico e doc de camadas).

### Removed
- **`_adherence.oxlintrc.json` e `_ds_omelette.json` (artefatos mortos).** O
  `_adherence.oxlintrc.json` nunca era executado (o oxlint atual não parseava suas regras) e o
  `_ds_omelette.json` era órfão (nada o gerava ou lia). O único gate de aderência real segue sendo
  `scripts/check-adherence.mjs` (só hex de cor cru em `.jsx`).

### Changed
- **`MiniChart variant=bar` agora tem base zero** (não engana visualmente).
- **Doc de camadas corrigida:** `dashboard/` e `onboarding/` são primitivos domain-free, não
  camada de produto.

## [1.6.0] — 2026-07-14
Tema claro removido (Forge é dark-only) + reconciliações de honestidade da documentação
(apontadas na revisão de prontidão).

### Removed
- **Tema claro removido — Forge é dark-only.** O tema claro era um experimento abandonado; foi
  retirado de toda a documentação. White-label passa a significar troca de **accent** (+ marca via
  props + cópia via `content.js`) sobre o **único tema dark**, não troca de tema claro/escuro.
  Docs afetados: `readme.md`, `docs/white-label.md`, `docs/tokens-architecture.md`,
  `docs/SCALABILITY.md`, `reference/FORGE_DESIGN_SYSTEM.md`, ADR-0040/0050/0051. O ramp primitivo
  `stone`, os scrims `*-light` e os overrides `com.forge.theme.light` ficam **sem consumidor** — a
  limpeza dos artefatos de código/tokens cabe ao dono do código.

### Changed
- **Contagem de componentes corrigida para 63** onde os docs divergiam (constavam 64/66) — `ROADMAP_DS.md`.
- **White-label reportado com honestidade:** caminho decidido, mas a prova de ponta a ponta "app
  Fuel" **não existe** — marcado como planejado / não-provado (antes constava "concluído" /
  "provado") em `ROADMAP_DS.md` e `docs/SCALABILITY.md`. (Corrige a menção da entrada [1.5.0] que
  dava o "tema claro completo (app Fuel)" como concluído.)
- **`docs/ARCHITECTURE.md` — aderência real:** o gate de CI (`scripts/check-adherence.mjs`) bloqueia
  **só hex de cor cru** em `.jsx` de `components/`/`ui_kits`; verificação de px, props e fontes
  **ainda não implementada** (planejada). Removida a alegação de que px/props/fontes já eram bloqueados.
- **`check-drift` descrito corretamente (ADR-0072):** regenera os artefatos locais e falha se o
  working tree ficar sujo — **não** compara DS↔forge-app via `sourceHash`. Corrigido em
  `docs/ARCHITECTURE.md` e `docs/GLOSSARY.md`.
- **ADR-0050 / ADR-0051:** removidas as linhas/análises de contraste do tema claro (mantidos só os
  valores do dark). Seguem `Accepted` — a decisão é sobre `onColor()` / macro colors no tema dark.

## [1.5.0] — 2026-07-14
Execução do roadmap completo da auditoria (fecha a maioria das 191 oportunidades).

### Added
- **Fonte única de tokens (OP-001):** `tokens/tokens.json` (W3C DTCG, 3 camadas
  primitive→semantic→component) + gerador próprio `scripts/build-tokens.mjs` +
  `tokens.d.ts`. Os `tokens/*.css` passam a ser gerados (byte-fiéis).
- **Governança e decisões:** 44 ADRs em `decisions/` (proibições, "não-ter",
  plataforma iOS/Android/tablet/RTL, a11y/conteúdo, lifecycle, semver, ownership);
  `CHANGELOG`, `ROADMAP_DS`, e docs em `docs/` (patterns, platform, SCALABILITY,
  a11y-advanced, content-guide, white-label, glossary, migration, etc.).
- **CI (OP-169/014):** GitHub Actions + `check-drift` + `check-adherence` +
  `render-test`.
- **Componentes novos:** `Checkbox`, `SegmentedControl`, `PasswordField`, `Slider`,
  `FilterChip`, `Divider`, `ProgressBar`, `Badge`, `Avatar`, `MacroRing`, `Timeline`,
  `Tabs`, `Accordion`, `WeekStrip`, `StreakIndicator`, `CoachNote`, `OfflineBanner`,
  `Chart` (OP-053), `ImagePicker` (OP-050).
- **White-label / i18n:** `components/shared/content.js` (strings externalizadas) +
  tema claro completo (`app Fuel`) + `docs/white-label.md`.
- Trio `.jsx` + `.d.ts` + `.prompt.md` em 100% dos componentes.

### Changed
- **`onColor()` (OP-015):** contraste WCAG real + brand-lock (ADR-0050) — texto
  sobre verde/danger/warning passa a ser escuro (correção de contraste).
- **`TargetsCard` → `components/product/`** (OP-009/131), com strings externalizadas.
- **`MacroMeter`/`MetaBar`** passam a compor `ProgressBar` (OP-124).
- Cards do catálogo convertidos para HTML estático (sem CDN) — corrige cards vazios.
- Higienização token-first concluída no UI kit (0 hex cru).

### Fixed
- `content.js` incluído no `_ds_bundle.js` (componentes que o consomem renderizam
  do bundle); colisão de nome `content` no `Pager` resolvida.

## [1.4.0] — 2026-07-14
Lote de camadas de produto e superfície (backlog PF-01/PF-02 + assinatura).

### Added
- **`product/`** (camada de domínio Forge): `PRCelebration`, `RestTimer`, `SetLogger`.
- **`onboarding/`**: `Pager`, `PageDots` (PF-01).
- **`dashboard/`**: `StatCard`, `QuickAction` (PF-02).

### Changed
- `readme.md` sincronizado com o catálogo real (45 componentes / 11 grupos).

> Estes componentes nascem `experimental` (ADR-0070) até consumo real no app + ratificação.

## [1.3.0] — 2026-07-14
Rebuild orientado pela auditoria. Estado auditado (a auditoria propôs marcar este ponto como a primeira tag). Reúne os lotes tokens → higienização → a11y → APIs → forms → estados.

### Added
- **Fundação de tokens** com namespace `--forge-*`: motion, espaçamento, tamanhos,
  z-index, foco, opacidade, scrim, line-heights; card `tokens-foundations`.
- **Lote de formulários:** `Switch`, `Stepper`, `Select`, `SearchField`, `ListItem`
  (e endurecimento de `TextField`, `QtyInput`).
- **Estados:** `ErrorState`, `Skeleton`/`SkeletonText`.
- Geração própria do bundle/manifest (`scripts/build-bundle.mjs`), substituindo a
  exportação do Claude Design.

### Changed
- **Higienização token-first** de componentes e UI kit (hex/px crus → `var()`).
- **Endurecimento das APIs do núcleo** (props explícitas, contratos validados pelo
  lint de aderência `_adherence.oxlintrc.json`).

### Fixed
- **Passe de acessibilidade estrutural:** foco visível (`:focus-visible` + token de
  focus ring), `role`/`aria-*` em diálogos e progresso, labels associadas, alvos ≥ 44px.

## [1.2.0] — 2026-07-13
### Added
- Índice do catálogo publicado no **GitHub Pages** (gerado por `scripts/build-index.mjs`).

### Changed
- **Fonte de verdade migra para o repositório + edição direta**, descartando o fluxo
  baseado em Claude Design (ver `FLUXO_EVOLUCAO_DS.md`).
- Overlay **`Sheet` → `Panel`**: o modal inferior vira painel central com scrim
  (renomeação registrada no readme).

## [1.1.0] — 2026-07-13
### Fixed
- Contraste dos tokens de texto `text-dim`/`text-faint`/`text-dimmer` elevado para
  **WCAG AA** (DS-02).

### Added
- Documento inicial do fluxo de evolução do DS.

## [1.0.0] — 2026-07-12
### Added
- Export inicial (origem Claude Design): primitivos base (core, typography, layout,
  forms, overlays, navigation, feedback), tokens iniciais e cards de guidelines.
