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
- Camada de governança e ciclo de vida (auditoria seção 8.8/8.9): `CHANGELOG.md`,
  `ROADMAP_DS.md`, `docs/` (PR_CHECKLIST, OWNERSHIP, COMMIT_CONVENTION, DS_ARTIFACTS,
  ARCHITECTURE, GLOSSARY, MIGRATION), ADR-0070 (ciclo de vida) e ADR-0071
  (versionamento + deprecação), e o card `guidelines/anti-patterns.card.html`.

### Deprecated
- _(nada)_

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
