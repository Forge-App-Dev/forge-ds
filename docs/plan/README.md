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

- **Plataforma — Caminho A (ver `decisions/ADR-0080`).** O `forge-ds` é um DS **web** hoje; o `forge-app` é Expo/React Native. Estratégia: **agora** `tokens.json` é a fonte única que gera o theme RN (`tokens/tokens.rn.js`) consumido pelo app + o DS é fonte de conhecimento; **médio prazo** convergir os componentes para **React Native + react-native-web** (tarefa `T-65`). Não reabrir essa escolha sem o dono (Mateus).
- **Tema — dark-only.** O tema claro foi removido do DS e de todos os registros (`T-05`). White-label = trocar **accent + marca + copy** sobre o tema dark único. Não reintroduzir tema claro.

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
node scripts/render-test.mjs
node scripts/check-drift.mjs   # regenera tudo e exige árvore git limpa
```

## Contexto completo

O parecer técnico completo (12 personas, comparação com a auditoria anterior, veredito 1.0 e as 10 mudanças de maior impacto) está renderizado no próprio `index.html` (seções Veredito, Rota, Comparação, Top 10). As tarefas aqui são o desdobramento acionável dele.
