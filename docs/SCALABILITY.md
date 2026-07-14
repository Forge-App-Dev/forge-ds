# Escalabilidade — Forge DS

> **OP:** OP-183–191 (auditoria §8.10) · **Status:** Índice consolidado · **Data:** 2026-07-14
> **Decisor:** consolidação (as decisões vivem nos ADRs/docs linkados).

Índice único das **nove perguntas obrigatórias de escalabilidade** da auditoria
(§8.10). Cada linha traz a **resposta atual** e o **link para o ADR/doc que a
fundamenta** — este arquivo não redecide nada; é o mapa de "onde a resposta mora".
O eixo de execução no tempo está no `ROADMAP_DS.md` (§Eixo de escalabilidade); a
governança, em `docs/OWNERSHIP.md`.

## As 9 perguntas

| # | Pergunta | Resposta atual | Fonte |
|---|---|---|---|
| OP-183 | **Suporta Android?** | **Sim** — é a plataforma de origem (RN/Expo). As quatro decisões de plataforma (voltar, edge-to-edge, font scaling, teclado) estão fechadas. | ADR-0021, ADR-0022, ADR-0023, ADR-0024 · `docs/platform/PLATFORM_ANDROID.md` |
| OP-184 | **Suporta iOS?** | **Estruturalmente sim** (RN roda nas duas). Identidade herdada 100%; só gesto/expectativa de plataforma muda (safe areas, edge-swipe back, sem sheet arrastável, Dynamic Type, haptics). Decidido **antes** do primeiro build. | ADR-0020, ADR-0023, ADR-0029 · `docs/platform/PLATFORM_IOS.md` |
| OP-185 | **Tablets / foldables?** | **Sim, por coluna única** de `--forge-app-max-width` (480) centralizada em qualquer largura, bg preenchendo as laterais. Sem rail, sem dual-pane, sem densidade compacta. Regra futura (≥840dp → Panel largo) registrada e pendente de gatilho. | ADR-0025, ADR-0032 · `docs/platform/ADAPTIVE_SCREENS.md` |
| OP-186 | **White-label / multi-brand?** | **Prometido; caminho decidido, ainda não provado de ponta a ponta.** Primitivos são domain-free e white-label-safe; a camada de produto (`product/`) concentra marca e domínio. Theming = trocar a camada semântica de tokens (fonte única DTCG). Falta a prova "app Fuel" + externalização de strings (Fase 3). | ADR-0040 · `docs/tokens-architecture.md`, `docs/ARCHITECTURE.md` (§camadas) · `ROADMAP_DS.md` Fase 3 (OP-010/011) |
| OP-187 | **Dark / Light?** | **Dark é o tema base;** light existe como sibling (`.forge-theme-light`) reapontando a camada semântica. Cobertura ainda **incompleta** (semânticas/macros/categorias e fundos legados do kit) — completar o tema claro é Fase 3. | ADR-0040 · `docs/tokens-architecture.md` (§`.forge-theme-light`) · contraste registrado em ADR-0050, ADR-0051 · `ROADMAP_DS.md` Fase 3 (OP-011) |
| OP-188 | **i18n / RTL?** | **i18n de strings:** estrutura decidida (conteúdo mecânico pt-BR canônico; externalização de strings é Fase 3). **RTL:** fora de escopo enquanto o produto for pt-BR only, com inventário do que quebraria registrado + mitigação preventiva (propriedades lógicas). | ADR-0056 (conteúdo mecânico) · ADR-0027 (RTL) · `docs/content-guide.md` · `ROADMAP_DS.md` Fase 3 (OP-010/151) |
| OP-189 | **Centenas de componentes?** | **Sim.** A estrutura de pastas por família + `_ds_manifest.json` gerado + `check-adherence` escalam. O **ciclo de vida** (`experimental → stable → deprecated → removed`) e o versionamento dão o eixo de maturidade que faltava. | ADR-0070 (ciclo de vida), ADR-0071 (semver) · `docs/DS_ARTIFACTS.md`, `docs/OWNERSHIP.md` |
| OP-190 | **Milhares de telas?** | **Sim, condicionado à fonte única de tokens + CI.** Sem tokens.json único e verificação automática, o drift DS↔app explode em escala. Arquitetura decidida (DTCG → gera CSS/JS/.d.ts); `check-adherence` já roda; CI de regressão visual é Fase 4. | ADR-0040 · `docs/tokens-architecture.md` · `scripts/check-adherence.mjs` · `ROADMAP_DS.md` Fases 1 e 4 |
| OP-191 | **Dezenas de equipes?** | **Hoje: governança de um dono** (Mateus ratifica; Claude implementa). O esqueleto para multi-equipe — CODEOWNERS, RFC leve, contribuição via os 6 artefatos, semver como contrato — está registrado como cenário futuro, não ativado. | `docs/OWNERSHIP.md` (§OP-191 Governança multi-equipe) · ADR-0071 · `FLUXO_EVOLUCAO_DS.md` |

## Como ler esta tabela

- **"Sim"** = decisão fechada e aplicável hoje.
- **"Estruturalmente sim"** = a base técnica suporta; faltam só decisões/prova de
  plataforma, já mapeadas.
- **"Prometido / incompleto"** = o caminho está decidido (ADR), mas a entrega tem
  fase no roadmap — não assumir conformidade antes da fase concluir.

Nenhuma resposta é aspiracional sem lastro: cada uma aponta para um ADR aceito ou
um doc de especificação. Quando um item avança de fase, atualiza-se **a fonte**
(o ADR/doc) e esta tabela reflete via o link, não por cópia.
