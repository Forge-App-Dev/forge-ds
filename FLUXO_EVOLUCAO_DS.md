# Fluxo de Evolução do Design System (Forge)

> Como o `forge-design_system` é mantido vivo e sincronizado com o **Claude
> Design**, e como novas necessidades de UI (que ainda não existem no DS) são
> resolvidas durante o desenvolvimento do app, sem travar o trabalho.
>
> Complementa: `readme.md` (conteúdo do DS), `reference/FORGE_DESIGN_SYSTEM.md`,
> `reference/FORGE_DESIGN_SYSTEM_RN.md`, e (no projeto `forge-app`)
> `FLUXO_PROTOTIPO_SNACK.md`.

---

## 1. Origem e natureza do repo

Este repositório é uma **exportação do Claude Design** (`claude.ai/design`).
Não há integração automática entre o Claude Design e este repo — toda
sincronização é **manual, via zip exportado e push**.

**Fonte de verdade prática:** este repo (`forge-design_system`), consultado via
`raw.githubusercontent.com/mateusutz/forge-design_system/main/<arquivo>`.

**Fonte de verdade "oficial" de componentes reaproveitáveis:** o Claude Design —
é onde o DS é desenhado e exportado de novo quando muda de forma significativa.

---

## 2. Dois tipos de mudança, dois caminhos

### 2.1 Mudança visual/componente (nasce no Claude Design)
Ex.: novo componente reaproveitável, alteração de cor/token, revisão de layout
de um componente existente.

1. Mateus edita/pede a criação no Claude Design.
2. Exporta o zip novo.
3. Sobe no chat (aqui, na sessão do projeto do app).
4. Claude extrai, compara com o repo, faz push (commit descreve a mudança).
5. Claude confirma o hash novo do commit.

### 2.2 Mudança textual/documentação (direto no repo)
Ex.: corrigir um `.md`, ajustar uma nota, atualizar um token pequeno sem
necessidade de redesenhar no Claude Design.

- Claude edita direto no repo, sem passar pelo Claude Design.
- Risco aceito: o registro dentro do Claude Design fica desatualizado nesse
  ponto específico até uma próxima exportação geral.

---

## 3. Necessidade nova durante o desenvolvimento do app (o caso comum)

Cenário: estamos evoluindo o `forge-app` (ou o PWA) e esbarramos numa
necessidade de UI que **não existe ainda** no design system.

**Não travamos o trabalho indo primeiro ao Claude Design.** Fluxo:

1. **Claude cria o componente ali mesmo**, no código do app, seguindo os
   tokens do DS (`forge-design_system`) à risca — nada fora do sistema
   (cores, raios, espaçamento, tipografia).
2. **Claude registra a pendência** de formalização (numa lista de "pendências
   de sync DS", guardada na memória e/ou neste documento).
3. **Quando fizer sentido** (algumas pendências acumuladas, ou a pedido do
   Mateus), Claude escreve um **prompt pronto** pra colar no Claude Design,
   descrevendo: nome do componente, propósito, tokens usados, variações,
   exemplo de uso.
4. Mateus cola o prompt no Claude Design, o componente é formalizado lá.
5. Mateus exporta o zip novo e sobe no chat.
6. Claude compara, faz push no repo — o componente "ad-hoc" vira componente
   "oficial" do DS.

### Divisão de responsabilidade

| Onde nasce o componente | Quando usar |
|---|---|
| Direto no código do app (Claude cria ali) | Urgência; o desenvolvimento não pode esperar |
| Claude Design (via prompt que o Claude escreve) | Componente reaproveitável; vale formalizar no DS |

Mateus não precisa "pensar o que pedir" no Claude Design — Claude escreve o
prompt certo; Mateus só cola.

---

## 4. Pendências de sync (lista viva)

> Atualizar esta seção conforme componentes ad-hoc forem criados no app e
> ainda não formalizados no Claude Design. Remover a entrada quando o
> componente for formalizado e o zip novo for importado.

- (nenhuma pendência registrada até o momento)

---

## 5. Checklist rápido

- Mudança visual/componente nova → nasce no Claude Design → export → push aqui.
- Mudança textual pequena → direto no repo.
- Necessidade urgente durante o dev → Claude cria no app com os tokens do DS →
  registra pendência → formaliza depois via prompt.
- Toda importação de zip novo → Claude compara e faz push, confirma hash.

---

*Criado ao definir o fluxo de manutenção do design system entre Claude Design
e este repositório. Manter atualizado conforme o processo evoluir.*
