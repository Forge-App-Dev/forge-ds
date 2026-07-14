# ADR-0013: Árvore de confirmações — nada / 2 toques / Panel, e exclusão em cascata
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-079, OP-071

## Contexto
O sistema confirma destrutivo em 2 toques (`ConfirmButton`), mas faltava a regra de **quando** basta 2 toques, quando exige `Panel`, e quando não se confirma nada. Excluir um item simples e apagar um treino com histórico não podem ter o mesmo peso.

## Decisão
Decisão pela **reversibilidade** e pelo **alcance** da ação:
- **Ação reversível → NÃO confirmar.** Oferecer undo inline quando existir; nunca um diálogo. (Ex.: desmarcar uma série.)
- **Destrutivo local e contido → `ConfirmButton` (2 toques).** Apaga só aquele item, sem efeito colateral. (Ex.: excluir um alimento avulso, uma refeição.)
- **Destrutivo com consequência em cascata → `Panel` de confirmação (variante danger, OP-117).** Quando apagar arrasta dados dependentes (ex.: excluir treino que tem histórico de sessões). O Panel **lista explicitamente o que será perdido** ("Isto também apaga 12 sessões registradas") e exige toque no botão destrutivo. Opcionalmente `dismissible=false`.
- **Irreversível e de conta** (excluir conta): `Panel` danger + reautenticação/confirmação forte.

Regra de bolso: 2 toques prova intenção; `Panel` é obrigatório quando o usuário **não consegue prever** o que mais some.

## Consequências
- Peso da confirmação proporcional ao dano; sem fadiga de diálogo em ações triviais.
- `Panel` de confirmação padroniza a divulgação de consequências (bom para confiança).

## Alternativas consideradas
- **Sempre `ConfirmButton`:** rejeitado — não revela consequências em cascata.
- **Sempre diálogo:** rejeitado — fere a leveza do sistema e treina o usuário a confirmar no automático.
