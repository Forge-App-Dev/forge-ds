# Convenção de commits — Forge DS

OP-173. Documenta a convenção **já em uso** (`feat/fix/docs(escopo)`), para que o
CHANGELOG (Keep a Changelog) seja semi-automático e o versionamento (ADR-0071) tenha
sinal de origem.

## Formato
```
<tipo>(<escopo>): <resumo no imperativo, minúsculo, sem ponto final>
```
Exemplos reais do histórico:
```
feat(tokens): fundacao de tokens (motion, espacamento, tamanhos, z-index, foco...)
feat(a11y): passe de acessibilidade estrutural
feat(core-api): endurece APIs do nucleo
feat(forms): lote de componentes de formulario
feat(product): PRCelebration + RestTimer + SetLogger (5e / assinatura)
docs(readme): sincroniza catálogo de componentes com o estado real
```

## Tipos e como mapeiam no CHANGELOG / semver

| Tipo | Uso | CHANGELOG | Semver (default) |
|---|---|---|---|
| `feat` | Componente, prop, variante ou token novo | `Added` (ou `Changed` se altera existente) | **MINOR** |
| `fix` | Correção de bug ou de a11y sem mudar API | `Fixed` | **PATCH** |
| `tokens` | Mudança específica de token (valor/adição) | `Added`/`Changed` | PATCH se valor, MINOR se novo |
| `docs` | Doc, readme, prompt.md, card, ADR | (fora do changelog de versão, ou `Changed`) | — / PATCH |
| `refactor` | Reorganização interna sem mudança de contrato | (interno) | PATCH |
| `a11y` | Passe de acessibilidade (usado como escopo de `feat`/`fix`) | `Fixed`/`Changed` | PATCH/MINOR |
| `chore` | Build, scripts, manifest, deps | (interno) | PATCH |

## Escopo
O escopo é **o grupo ou o componente afetado**: `tokens`, `a11y`, `core`, `core-api`,
`forms`, `states`, `dashboard`, `onboarding`, `product`, `overlays`, `navigation`,
`readme`, `index`. Um escopo por commit; se a mudança atravessa grupos, prefira o mais
específico ou quebre em commits.

## Breaking change
Sinalizar com `!` após o escopo **e** rodapé `BREAKING CHANGE:` — dispara **MAJOR** e
exige entrada em `docs/MIGRATION.md`:
```
feat(core)!: renomeia prop `label` -> `title` no Button

BREAKING CHANGE: consumidores devem trocar label= por title=. Ver docs/MIGRATION.md.
```

## Deprecação
Deprecar (sem remover) é `feat`/`docs` com rodapé `DEPRECATED:` → categoria
`Deprecated` no CHANGELOG, `@deprecated` nas 3 superfícies (jsx/d.ts/prompt.md), ADR-0071.

## Ligação com o changelog
Ao commitar, adicione a linha correspondente em `CHANGELOG.md` → `[Unreleased]`, na
categoria da tabela acima. No corte de versão, `[Unreleased]` vira `[X.Y.Z] — data` e
uma tag git `vX.Y.Z` é criada.
