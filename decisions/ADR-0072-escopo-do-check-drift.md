# ADR-0072: Escopo do check-drift — frescor de artefato, não diff DS↔app

**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** delegado pelo owner (pode ser revisitado) · **OP:** OP-014

## Contexto
A OP-014 pedia "check-drift" e, no texto original da auditoria, sugeria comparar
os componentes do DS contra o código-fonte do `forge-app` via os `sourceHashes`
embutidos no bundle — ou seja, detectar quando o espelho web divergiu do app
nativo. O `scripts/check-drift.mjs` implementado faz outra coisa: regenera os
artefatos (`tokens/*.css`, `index.html`, `_ds_bundle.js`, `_ds_manifest.json`,
`tokens.d.ts`) e falha se o working tree mudar — isto é, garante que os
artefatos gerados estão em dia com as fontes do próprio repo.

## Decisão
**Aceitar a releitura: check-drift = frescor de artefato gerado.** Não
implementar o diff DS↔`forge-app` por ora.

Motivos:
- O diff contra o `forge-app` acopla o build do DS a um segundo repositório
  (precisaria cloná-lo/tê-lo como dependência de CI), o que contraria o DS ser
  uma fonte independente (o app consome o DS, não o contrário).
- O valor prático diário é o frescor de artefato: o maior risco real é alguém
  editar uma fonte (`tokens.json`, um `.jsx`) e esquecer de regenerar, ou editar
  um artefato à mão — exatamente o que o check atual pega, e roda no CI.
- Os `sourceHashes` continuam no bundle; se um dia a verificação DS↔app for
  desejada, ela nasce como um check SEPARADO (ex.: um job que clona o forge-app
  e compara), sem misturar com o frescor de artefato.

## Consequências
- CI verde = artefatos coerentes com as fontes do repo.
- A divergência DS↔app (se houver) não é vigiada automaticamente — fica como
  possível trabalho futuro, decidido por ADR próprio quando houver caso.

## Alternativas consideradas
- **Implementar o diff DS↔forge-app agora:** rejeitado — acopla repositórios e o
  forge-app não está no escopo deste ambiente; alto custo, baixo retorno atual.
