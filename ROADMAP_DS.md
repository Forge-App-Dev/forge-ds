# Roadmap do Design System (Forge DS)

Roadmap **do próprio DS** (não do app), espelhando as prioridades da auditoria
`AUDITORIA_FORGE_DS_2026-07.md` (seções 9–12). Não repete as 191 oportunidades —
resume por tema e prioridade. As fases são ordenadas por **dependência**, não por data:
fundação antes de superfície (regra de ouro do `FLUXO_EVOLUCAO_DS.md`).

> Fonte de verdade das prioridades: a auditoria. Este arquivo é o índice executável dela.
> **Estado (2026-07-14, v1.5.0):** o programa de 7 fases fechou as Fases 0–4 por
> inteiro e a maior parte da Fase 5. `tokens/tokens.json` é a fonte única (CSS
> gerado), o CI está ativo (drift/adherence/render-test), o backlog de componentes
> foi entregue (64 componentes / 12 grupos), o tema claro + white-label estão
> provados ("app Fuel") e as tags `v1.0.0..v1.5.0` foram criadas (release v1.5.0).
> Resta apenas o horizonte estrutural/opcional marcado abaixo.

---

## Fase 0 — Quick wins e higiene (dias) · Prioridade ALTA — ✅ CONCLUÍDA
_Fundação barata que destrava o resto. Auditoria §9._
- **Feito no rebuild:** `index.js` + `package.json` semver (OP-012); tokens de motion/
  espaçamento/foco com namespace `--forge-*` (OP-005/008); higienização token-first
  (OP-002); `onColor()` WCAG (OP-015); foco visível nos interativos (OP-086).
- **Nesta entrega (governança):** CHANGELOG + política de versão (OP-013 → ADR-0071),
  ciclo de vida (OP-166 → ADR-0070), checklist
  de PR (OP-168), ownership (OP-170), convenção de commits (OP-173), artefatos `_ds_*`
  (OP-181), arquitetura/glossário/migração/anti-patterns (OP-179/180/176/175).
- **✅ Concluído:** links `mateusutz/*` → `Forge-App-Dev/*` no readme (OP-178);
  lista de pendências do FLUXO sincronizada (OP-171); política de telas grandes
  documentada como ADR (OP-019).

## Fase 1 — Fundação de tokens e núcleo (semanas) · Prioridade ALTA — ✅ CONCLUÍDA
_O coração de tudo. Auditoria §10, itens 1–4._
- ✅ `tokens.json` DTCG + gerador de CSS/JS como fonte única (OP-001) — CSS gerado byte-fiel.
- ✅ Passe completo de a11y + checklist por componente (OP-003/160), incl. backfill nos `.prompt.md` (OP-135/057).
- ✅ `Button` com variantes + base `Overlay` compartilhada por Panel/FullScreen/VideoModal
  (OP-006/016); título de tela unificado (OP-017).

## Fase 2 — Backlog de componentes e camadas (semanas) · Prioridade ALTA→MÉDIA — ✅ CONCLUÍDA
_Auditoria §10, itens 5–6._
- ✅ Backlog do §6 entregue: pager, dashboard tiles, Switch, Select, Stepper, ListItem,
  SearchField, WeekStrip, PasswordField, Checkbox, SegmentedControl, Slider, FilterChip,
  Divider, ProgressBar, Badge, Avatar, MacroRing, Timeline, Tabs, Accordion,
  StreakIndicator, CoachNote, OfflineBanner (OP-022–060) — 64 componentes / 12 grupos.
- ✅ Separação formal **primitives × product** (OP-009/131): `TargetsCard` movido para
  `product/`; grupo `media/` criado com `ImagePicker` (OP-050); `Chart` em feedback (OP-053).
- ✅ Ampliar set de ícones + convenção de nomes (OP-018) + guia de ícones (OP-090).

## Fase 3 — Multi-brand, tema claro e i18n (semanas) · Prioridade MÉDIA — ✅ CONCLUÍDA
_Auditoria §10, item 7._
- ✅ Strings externalizadas (`content.js`) + tema claro completo + prova de ponta a ponta
  "app Fuel" (OP-010/011) — valida a promessa white-label (P-07/P-08); `onColor()` WCAG (OP-015).
- ✅ Estrutura de i18n pronta (strings fora dos componentes). ◐ RTL fica como horizonte
  (estrutura não bloqueia; ativar quando houver 2º idioma) (OP-010/151).

## Fase 4 — CI, drift e catálogo (semanas) · Prioridade MÉDIA — ✅ CONCLUÍDA
_Auditoria §10, itens 8–10._
- ✅ CI ativo (`.github/workflows/ci.yml`): check-adherence + build de tokens +
  check-drift + render-test a cada push (OP-169).
- ✅ `scripts/check-drift.mjs` DS ↔ forge-app via sourceHashes (OP-014 → ADR-0072).
  ◐ A verificação viva DS↔app (rodar contra o forge-app real a cada sessão) fica como
  hábito de horizonte.
- ✅ Catálogo publicado e navegável no Pages (OP-021) + padrões de formulário/erro/
  loading/busca/auth (OP-061–080).

## Fase 5 — Fundações de 5 anos (meses) · Prioridade ESTRUTURAL — ◐ MAIORIA ENTREGUE
_Auditoria §11._
- ✅ Camada semântica plena; componentes só consomem semântico; contrato de tema
  validado no build (OP-004/098).
- ✅ Marca vetorial (`assets/forge-mark.svg`, primária; `.png` como fallback) (OP-091);
  versionamento/tags `v1.0.0..v1.5.0` + release v1.5.0 (OP-013).
- ✅ Testes visuais de regressão via render-test no CI (screenshots dos cards).
- ◐ Decidir via ADR se o DS promove de "espelho" a **fonte parcial** de tokens/specs
  consumida pelo forge-app (OP §11.2) — horizonte.
- ◐ Pacote de plataforma (iOS guide, back button, edge-to-edge, font scaling) antes de
  qualquer target novo (OP-020/145/147/148) — guias escritos; ativar por target.
- ◐ **Horizonte/opcional:** densidades raster do mark (o `.svg` já cobre todos os
  tamanhos); revisitar as decisões de produto ratificadas quando o app pedir.

---

## Eixo de escalabilidade (auditoria §8.10)
Perguntas obrigatórias e onde vivem no roadmap:

| Pergunta | Hoje | Ação |
|---|---|---|
| Android / iOS | Sim / estrutural | Fase 5 (pacote plataforma) |
| Tablets/foldables | Decisão documentada (ADR, phone-first) | ✅ Fase 0 |
| White-label / dark-light | Provado ("app Fuel"), tema claro completo | ✅ Fase 3 |
| Centenas de componentes | Estrutura aguenta | Ciclo de vida (ADR-0070) já entregue |
| Milhares de telas | Tokens únicos + CI ativos | ✅ Fases 1 e 4 |
| Dezenas de equipes | Governança de 1 pessoa | `docs/OWNERSHIP.md` §Multi-equipe (OP-191) |
