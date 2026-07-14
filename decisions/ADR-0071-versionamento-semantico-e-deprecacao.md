# ADR-0071: Versionamento semântico + política de deprecação
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Principal Design System Governance & Lifecycle Specialist (persona) · **OP:** OP-013 (respondendo P-14)

## Contexto
P-14: o DS não tinha versionamento, tags, changelog nem política de breaking change. `package.json` já está em `1.4.0` (`private: true`), mas nenhuma tag git existe e não há registro do que mudou entre estados. Impossível responder "o que quebrou entre X e Y?" fora do diff bruto. Precisamos de uma disciplina **leve o bastante para um dono só, formal o bastante para 5 anos**.

## Decisão

### 1. Semver, mas definido para um Design System
A versão vive em `package.json` (`MAJOR.MINOR.PATCH`) e em **tags git** `vX.Y.Z` (o repo é `private`; não publica npm — o contrato é o repo + Pages, não o registry).

O que conta como cada nível **num DS** (API de componentes **e** tokens são superfície pública):

| Nível | Dispara quando… |
|---|---|
| **MAJOR** | Remover/renomear prop de componente `stable`; mudar default de forma que quebra layout; **remover/renomear token**; remover componente `stable`; **redesign visual que quebra telas existentes** (mesmo com API intacta — ver §4); mudança estrutural que exige edição no consumidor |
| **MINOR** | Componente novo; prop nova retrocompatível; token novo; variante nova; **promoção experimental → stable**; **deprecação** (marcar, não remover); refinamento visual que não quebra contrato de layout |
| **PATCH** | Correção de bug; correção de a11y sem mudar API; ajuste de **valor** de token dentro da intenção (ex.: subir contraste p/ WCAG); correção de doc/card/prompt; refactor interno; regeneração de bundle sem mudança de API |

Regra de desempate sobre tokens: **adicionar** token = minor; **mudar valor** = patch (correção) ou minor (restyle intencional); **remover/renomear** = major. Token nunca some em silêncio.

### 2. Política de deprecação
- Prop/componente deprecado **sobrevive ≥ 1 minor** com aviso — `@deprecated` no `.jsx`, no `.d.ts` (risco nativo do editor) e nota no `.prompt.md`, apontando o substituto.
- Remoção **só em MAJOR**.
- Toda deprecação = entrada `Deprecated` no CHANGELOG + linha em `docs/MIGRATION.md`.
- Alinha com o ciclo de vida (ADR-0070): `deprecated` é estado formal, não um comentário solto.

### 3. Breaking change exige migração
Toda mudança MAJOR exige seção **"Migração"** correspondente em `docs/MIGRATION.md` e destaque no CHANGELOG (`Removed`/`Changed` com "BREAKING"). Sem migração escrita, não vira major — vira dívida.

### 4. Breaking visual (decisão de DS, não de código)
Num DS, uma mudança pode não tocar nenhuma API e ainda assim quebrar telas (raio, espaçamento, cor de superfície redesenhados). **Ratificado (default): tratar "visual breaking" (redesign que altera layout/identidade de telas existentes) como MAJOR, com prova visual nos cards do Pages antes de fechar.** Delegado pelo owner em 2026-07-14; pode ser revisitado — é a decisão mais sujeita a julgamento.

## Consequências
- `CHANGELOG.md` (Keep a Changelog) passa a ser obrigatório e alimentado pela convenção de commits (`docs/COMMIT_CONVENTION.md`).
- Primeiras tags `v1.0.0`…`v1.4.0` precisam ser criadas (recomendado; ver escalação — tag é escrita git, feita pelo owner/Claude fora desta entrega).
- Versionamento aplica-se ao repo/tags; se um dia publicar em registry (OP-011 §11.2), a mesma versão já está pronta.

## Alternativas consideradas
- **CalVer (data):** rejeitado — não comunica compatibilidade, que é a pergunta real de um DS.
- **Sem tags, só CHANGELOG:** rejeitado — tag é o que torna `git diff v1.3.0..v1.4.0` e um futuro CI possíveis.
