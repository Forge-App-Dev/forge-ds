# Roadmap do Design System (Forge DS)

Roadmap **do próprio DS** (não do app), espelhando as prioridades da auditoria
`AUDITORIA_FORGE_DS_2026-07.md` (seções 9–12). Não repete as 191 oportunidades —
resume por tema e prioridade. As fases são ordenadas por **dependência**, não por data:
fundação antes de superfície (regra de ouro do `FLUXO_EVOLUCAO_DS.md`).

> Fonte de verdade das prioridades: a auditoria. Este arquivo é o índice executável dela.
> Estado: o rebuild 1.3.0/1.4.0 já entregou boa parte da Fase 0 e itens da Fase 1.

---

## Fase 0 — Quick wins e higiene (dias) · Prioridade ALTA
_Fundação barata que destrava o resto. Auditoria §9._
- **Feito no rebuild:** `index.js` + `package.json` semver (OP-012); tokens de motion/
  espaçamento/foco com namespace `--forge-*` (OP-005/008); higienização token-first
  (OP-002); `onColor()` WCAG (OP-015); foco visível nos interativos (OP-086).
- **Nesta entrega (governança):** CHANGELOG + política de versão (OP-013 → ADR-0071),
  ciclo de vida (OP-166 → ADR-0070), checklist
  de PR (OP-168), ownership (OP-170), convenção de commits (OP-173), artefatos `_ds_*`
  (OP-181), arquitetura/glossário/migração/anti-patterns (OP-179/180/176/175).
- **Pendente:** corrigir links `mateusutz/*` → `Forge-App-Dev/*` no readme (OP-178);
  atualizar lista de pendências do FLUXO (OP-171); parágrafo de política de telas
  grandes (OP-019).

## Fase 1 — Fundação de tokens e núcleo (semanas) · Prioridade ALTA
_O coração de tudo. Auditoria §10, itens 1–4._
- `tokens.json` DTCG + gerador de CSS/JS como fonte única (OP-001).
- Passe completo de a11y + checklist por componente (OP-003/160).
- `Button` com variantes + base `Overlay` compartilhada por Panel/FullScreen/VideoModal
  (OP-006/016); título de tela unificado (OP-017).

## Fase 2 — Backlog de componentes e camadas (semanas) · Prioridade ALTA→MÉDIA
_Auditoria §10, itens 5–6._
- Onda 1 do backlog: pager, dashboard tiles, Switch, Select, Stepper, ListItem,
  SearchField, week-strip, PasswordField (OP-022–033) — parte já em 1.4.0.
- Separação formal **primitives × product** (OP-009/131).
- Ampliar set de ícones + convenção de nomes (OP-018).

## Fase 3 — Multi-brand, tema claro e i18n (semanas) · Prioridade MÉDIA
_Auditoria §10, item 7._
- Strings externalizadas + tema claro completo + prova de ponta a ponta "app Fuel"
  (OP-010/011) — valida a promessa white-label (P-07/P-08).
- Estrutura de i18n/RTL (OP-010/151).

## Fase 4 — CI, drift e catálogo (semanas) · Prioridade MÉDIA
_Auditoria §10, itens 8–10._
- CI mínimo (GitHub Actions): oxlint de aderência + build de tokens + check-drift a
  cada push (OP-169).
- `scripts/check-drift.mjs` DS ↔ forge-app via sourceHashes (OP-014).
- Catálogo publicado e navegável no Pages (OP-021) + padrões de formulário/erro/
  loading/busca/auth (OP-061–080).

## Fase 5 — Fundações de 5 anos (meses) · Prioridade ESTRUTURAL
_Auditoria §11._
- Camada semântica plena; componentes só consomem semântico; contrato de tema
  validado no build (OP-004/098).
- Decidir via ADR se o DS promove de "espelho" a **fonte parcial** de tokens/specs
  consumida pelo forge-app (OP §11.2).
- Testes visuais de regressão (screenshots dos cards por CI).
- Pacote de plataforma (iOS guide, back button, edge-to-edge, font scaling) antes de
  qualquer target novo (OP-020/145/147/148).

---

## Eixo de escalabilidade (auditoria §8.10)
Perguntas obrigatórias e onde vivem no roadmap:

| Pergunta | Hoje | Ação |
|---|---|---|
| Android / iOS | Sim / estrutural | Fase 5 (pacote plataforma) |
| Tablets/foldables | Não, sem decisão | Fase 0 (parágrafo de política) |
| White-label / dark-light | Prometido, incompleto | Fase 3 |
| Centenas de componentes | Estrutura aguenta | Ciclo de vida (ADR-0070) já entregue |
| Milhares de telas | Exige tokens únicos + CI | Fases 1 e 4 |
| Dezenas de equipes | Governança de 1 pessoa | `docs/OWNERSHIP.md` §Multi-equipe (OP-191) |
