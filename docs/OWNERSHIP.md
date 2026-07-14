# Ownership & governança — Forge DS

OP-170. Formaliza o que já é verdade na prática. A fonte de verdade única do sistema é
o repositório `Forge-App-Dev/forge-ds` (ver `FLUXO_EVOLUCAO_DS.md`).

## Papéis

| Papel | Quem | Responsabilidade | Autoridade |
|---|---|---|---|
| **Owner / decisão de produto** | **Mateus** | Decide o que construir, prioriza, revisa visualmente no GitHub Pages, aprova ou pede ajuste (em texto). Ratifica ADRs, promoções `experimental → stable` e breaking changes. | **Palavra final.** Nada vira `stable` nem major sem ratificação dele. |
| **Implementação** | **Claude** | Implementa direto no repo (visual + tokens + a11y + lógica), escreve os 6 artefatos, mantém CHANGELOG/manifest/índice, publica no Pages, propõe ADRs. | Executa e recomenda; não ratifica sozinho decisões marcadas "pendente". |
| **Origem visual histórica** | **Claude Design** | Origem visual do export inicial (1.0.0). **Descontinuada** desde 2026-07-13. | Nenhuma. Não é mais fonte, não formaliza nada, não recebe export. |

Não existe mais um terceiro papel de "formalizar depois": a formalização acontece no
mesmo commit que a criação.

## Fluxo de decisão
1. Mateus descreve a necessidade (chat).
2. Claude implementa no repo seguindo os padrões da auditoria e publica no Pages.
3. Mateus revisa o resultado renderizado (não mockup, não zip) e aprova/ajusta por texto.
4. Decisões estruturais (proibições, versionamento, ciclo de vida, tema, plataforma)
   viram **ADR** em `decisions/`. ADR proposto por Claude, ratificado por Mateus
   (status `Proposed` → `Accepted`).

## Itens pendentes de ratificação do owner
Levantados nesta entrega de governança — recomendação dada, decisão do Mateus:
- Classificação inicial de ciclo de vida (quais dos 45 são `stable` vs `experimental`) — ADR-0070.
- "Breaking visual = MAJOR" como regra de versionamento — ADR-0071 §4.
- Criar as tags git `v1.0.0`…`v1.4.0` alinhadas ao CHANGELOG.
- Manter o pacote `private` (sem publicar em registry) por ora.

## OP-191 — Governança multi-equipe (futuro)
Hoje a governança é **deliberadamente de uma pessoa** (Mateus decide, Claude implementa) —
é o que torna o fluxo rápido e sem burocracia. Isso é uma escolha, não uma limitação
acidental. **Se um dia o DS for consumido por várias equipes/apps da família Forge**, o
esqueleto de escala já está montado e é o certo:

- **Versionamento + tags** (ADR-0071) — equipes fixam uma versão e migram por CHANGELOG.
- **Ciclo de vida** (ADR-0070) — `experimental` protege quem consome de API instável.
- **ADRs** (`decisions/`) — decisões viram citáveis e reabríveis formalmente, não prosa.
- **Checklist de PR** (`docs/PR_CHECKLIST.md`) + lint de aderência — portão objetivo,
  independente de quem contribui.
- **CI mínimo** (OP-169, Fase 4 do roadmap) — o que falta ligar antes de abrir
  contribuição externa: aderência + build de tokens + check-drift a cada push.

Ordem recomendada para abrir a múltiplas equipes: ligar o CI (OP-169) → definir
_code owners_ por grupo de componentes → só então aceitar PRs externos. Até lá, a
governança de um dono continua sendo a escolha certa.
