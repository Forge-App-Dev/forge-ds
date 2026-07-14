# Guia de migração — Forge DS

OP-176. Nasce junto com o versionamento (ADR-0071). Uma seção **por breaking change**,
mais recente no topo. Toda mudança MAJOR (API ou visual — ver ADR-0071 §4) **exige** uma
entrada aqui antes de fechar a versão. Deprecações (não-breaking, minor) também são
registradas para dar o caminho antes do major que remove.

## Como ler
- **De → Para:** versão de origem e destino.
- **O que muda / Por quê / Como migrar:** o passo prático de código.
- Deprecações aparecem com o prazo ("removido em major") e o substituto.

---

## Deprecações ativas (marcadas, ainda não removidas)
_Nenhuma no momento._ Quando existir, cada linha aponta o substituto e a versão-alvo de
remoção. Ex. de formato:

> **`Button` prop `label` → `title`** — deprecado em `1.x`, removido em `2.0`. Troque
> `<Button label="Salvar" />` por `<Button title="Salvar" />`. Aviso via `@deprecated`
> no `.d.ts`/`.prompt.md`.

---

## Histórico de breaking changes

### 1.1.x → 1.2.0 — Overlay `Sheet` → `Panel`
- **O que muda:** o modal inferior "Sheet" foi renomeado e reposicionado como painel
  central (`Panel`), com scrim escuro e tap-fora-fecha. Não há mais bottom sheet no
  sistema (virou anti-pattern — `guidelines/anti-patterns.card.html`).
- **Por quê:** consolidar em dois padrões de overlay por tamanho de fluxo (Panel para
  escolhas curtas, FullScreen para fluxos longos); bottom sheet colidia com a
  `ModuleTabBar` e não trazia ganho.
- **Como migrar:** troque o componente/uso `Sheet` por `Panel`
  (`<Panel visible onClose title footer>…</Panel>`). Comportamento de abrir/fechar é
  equivalente; a posição passa a ser central.

> Nota: esta migração é anterior à adoção formal do semver (reconstruída do readme).
> A partir de 1.4.0, toda entrada aqui nasce no mesmo commit da mudança.
