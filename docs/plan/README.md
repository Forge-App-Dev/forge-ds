# Plano tático do Forge DS — guia de continuação (handoff para IA)

> **Se você é uma IA/agente e recebeu este repositório com a instrução de "continuar o plano": comece por aqui.** Este documento diz o que é o plano, onde está o estado, e o **loop obrigatório** para atualizá-lo a cada entrega.

## O que é

Após uma revisão de prontidão ("readiness review") do `forge-ds`, consolidamos um **plano tático** de correções (defeitos 🔴, regressões 🟠, inconsistências 🟡, oportunidades 🔵). Este diretório é a memória viva desse plano:

| Arquivo | Papel |
|---|---|
| **`plan.json`** | **Fonte única da verdade.** Metadados, fases, tarefas (com `status`/`note`/evidência), lista "preservar" e o registro de entregas. **Edite só este arquivo.** |
| `index.html` | Dashboard navegável — **GERADO**. Não edite à mão. |
| `../../scripts/build-plan.mjs` | Gerador: `plan.json` → `index.html`. |
| `../../scripts/plan.fonts.css` | Fontes do Forge (Inter + Barlow Condensed) embutidas (base64) — usadas pelo dashboard. |
| `README.md` | Este guia. |

## Decisões já tomadas (não relitigar)

- **Plataforma — RN-first (ver `decisions/ADR-0080`, EMENDADO 2026-07-15).** O produto (`forge-app`) é **Android/iOS, sem alvo web**. **`react-native-web` está FORA.** Os componentes web (react-dom) do `forge-ds` são **spec/espelho** — o catálogo web fica **estático** (documentação, "perfumaria"). Estratégia: **agora** `tokens.json` gera o theme RN (`tokens/tokens.rn.js`) consumido pelo app; **depois** os componentes canônicos nascem em **React Native puro** (promovidos do `forge-app`), oportunista (`T-65`/`T-66`). Não reabrir sem o dono (Mateus).
- **Tema — dark-only.** O tema claro foi removido do DS e de todos os registros (`T-05`). White-label = trocar **accent + marca + copy** sobre o tema dark único. Não reintroduzir tema claro.
- **Integração com o app — JÁ COMEÇOU.** O `forge-app/src/theme/tokens.js` agora deriva os valores de `tokens.rn.js` (cópia vendorizada). `onColor` WCAG e a migração de botões p/ `accent-fill` são um upgrade **acoplado e adiado** (mudaria o visual). Detalhe no handoff cross-repo (abaixo).
- **Handoff completo (4 repos):** `forge-docs/HANDOFF_FORGE_2026-07.md` é o ponto de entrada que amarra `forge-ds` + `forge-app` + `forge-docs` + `forge-public`. Leia-o junto deste guia.

## Vocabulário de status

`todo` (não iniciado) · `doing` (em andamento) · `done` (concluído) · `blocked` (bloqueado). Severidade: `def`/`reg`/`inc`/`opo`.

## Loop obrigatório a cada entrega (lote)

Sempre que concluir um trabalho — um lote ou uma entrega pontual:

1. **Atualize `plan.json`:**
   - Na(s) tarefa(s) mexida(s): ajuste `status`, escreva uma `note` curta (o que foi feito / o que falta) e atualize `meta.updatedAt`.
   - Se abriu trabalho novo não previsto, **adicione uma tarefa** (id `T-NN`, `phase`, `sev`, `title`, `ev`, `action`, `effort`, `status`).
   - Acrescente uma entrada em `deliveries` (`date`, `title`, `summary`, `tasks: [ids]`).
2. **Regenere o dashboard:** `npm run build:plan`.
3. **Verifique o repo:** `npm run build` → `node scripts/check-adherence.mjs` → `node scripts/render-test.mjs`. Tudo verde.
4. **Commit** `plan.json` **e** `index.html` juntos (mais os arquivos que você mexeu). Convenção de commit: ver `docs/COMMIT_CONVENTION.md`.

O `check-drift` do CI **regenera e falha se o `index.html` não corresponder ao `plan.json`** — ou seja, o dashboard nunca fica dessincronizado do estado real. É isso que torna a atualização "automática": o estado vive no JSON, o HTML é derivado, e o gate impede divergência.

## Como escolher o que fazer

- Ordem sugerida: **Fase 0 → 1 → 2 → 3 → 4** (dependência, não data). As Fases 2 e 3 são independentes de plataforma e podem correr em paralelo.
- Comece pelas 🔴/🟠 dentro da fase corrente. Tarefas com `deps` na `note` esperam o pré-requisito.
- `T-25` (piso de contraste / brand-lock) e qualquer mudança **visível de marca** exigem decisão do dono — deixe `doing` com nota e pergunte.

## Verificar / rodar

```bash
npm install
npm run build        # tokens (+ tokens.rn.js) + index + bundle + plano
npm run build:plan   # só o dashboard do plano
node scripts/check-adherence.mjs
node scripts/check-oncolor.mjs   # contraste WCAG dos pares de marca
node scripts/render-test.mjs
node scripts/check-drift.mjs   # regenera tudo e exige árvore git limpa
```

## Contexto completo

O parecer técnico completo (12 personas, comparação com a auditoria anterior, veredito 1.0 e as 10 mudanças de maior impacto) está renderizado no próprio `index.html` (seções Veredito, Rota, Comparação, Top 10). As tarefas aqui são o desdobramento acionável dele.
