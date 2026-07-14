# Guia — Telas grandes, tablets e foldables (política adaptativa)

> **OP:** OP-019, OP-185 · **Status:** Accepted · **Data:** 2026-07-14
> **Decisor:** Mobile Platform & Adaptive Specialist (persona)
> **Decisão formal associada:** ADR-0025.

Responde à pergunta obrigatória da auditoria (OP-185): *"o Forge suporta
tablets/foldables?"* — que hoje não tem resposta escrita. A resposta é uma
**decisão consciente**, não uma omissão.

---

## 1. Decisão: coluna 480 centralizada, em qualquer largura

O Forge é **phone-first por escolha de produto** (um decisor, ≤20 dispositivos,
roadmap de celular). Em qualquer largura de viewport:

- O conteúdo vive numa **coluna única de `--forge-app-max-width` (480px/dp)**,
  **centralizada**.
- A área fora da coluna é preenchida por `--forge-bg` (grafite sólido) — sem
  faixas brancas, sem letterbox visível, sem "esticar" a coluna.
- Isto vale para phone retrato, phone paisagem, tablet e foldable aberto.

Custo: um parágrafo e uma regra de layout. Benefício: elimina anos de ambiguidade
("isso funciona em tablet?") com uma resposta única e testável.

## 2. Breakpoints documentais (já tokenizados)

Existem em `tokens/spacing.css` como **documentais** (não disparam layout hoje):

| Token | Valor | Significado |
|---|---|---|
| `--forge-bp-phone` | 480px | Largura-base; limite da coluna de conteúdo. |
| `--forge-bp-large` | 600px | Limiar de tablet pequeno / foldable dobrado largo. |
| `--forge-bp-xlarge` | 840px | Limiar de tablet / foldable aberto. |

Alinhados às window size classes do Material 3 (compact <600 / medium 600–840 /
expanded ≥840). Ficam prontos para o dia de uma decisão adaptativa real — hoje
**só o `phone` é ativo** (limita a coluna).

## 3. Comportamento por classe de tela (hoje)

| Classe | Largura | Comportamento **atual** |
|---|---|---|
| Compact | < 600dp | Coluna 480 centralizada (na prática ocupa quase tudo). |
| Medium | 600–840dp | Coluna 480 centralizada, bg preenche as laterais. |
| Expanded | ≥ 840dp | Idem. **Sem** navigation rail, **sem** duas colunas, **sem** master-detail. |

Foldable: tratado como phone. Dobrado = coluna 480. Aberto = coluna 480 centrada
com mais bg nas laterais. **Sem** postura table-top / dual-pane / spanning por
enquanto.

## 4. O que NÃO fazemos agora (e por quê)

- **Navigation rail / drawer lateral em telas largas** — o Material 3 recomenda
  em ≥600dp, mas custa reestruturar a `ModuleTabBar` e o produto é phone-only.
  Não fazer.
- **Layout de duas colunas / master-detail** — idem; sem caso de uso.
- **Densidade "compacta" para telas grandes** — o DS tem uma densidade só
  (ADR-0032, px = dp). Não criar.

## 5. Regra futura registrada (não implementada)

Quando/se o produto for para tablet como alvo de primeira classe:
- **≥ 840dp:** um `FullScreen` **pode** virar um `Panel` largo centralizado (o
  fluxo de edição não precisa da tela toda num tablet) — regra candidata, **não
  implementada**.
- Reavaliar navigation rail e dual-pane só a partir de sinal de produto real
  (analytics de dispositivos, decisão do owner).

**Gatilho de revisão:** este documento deve ser reaberto se (a) o roadmap
adicionar tablet/desktop como alvo, ou (b) ≥15% dos dispositivos ativos forem
≥600dp. Até lá, a coluna 480 é a resposta — **pendente de ratificação do owner**
apenas quanto ao gatilho de reabertura.
