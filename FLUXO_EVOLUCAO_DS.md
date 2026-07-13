# Fluxo de Evolução do Design System (Forge)

> Como o `forge-ds` nasce, evolui e é validado. **Este documento substitui
> integralmente a versão anterior baseada em Claude Design.** A partir de
> 2026-07-13, o Claude Design deixou de ser usado neste projeto — todo o
> design nasce, é editado e é revisado diretamente aqui.

---

## 1. Por que essa mudança

O modelo anterior (Claude Design → export zip → import → push) resolvia
"preciso ver antes de aprovar" com um custo alto: 4 fontes de verdade
sincronizadas na mão, componentes que só existiam visualmente e não
tecnicamente (sem acessibilidade, sem tokens reais, sem lógica), e retrabalho
sempre que um export novo sobrescrevia uma correção feita aqui.

**Constatação:** "ver antes de aprovar" não exige uma ferramenta de design
separada. Exige apenas que o resultado renderize em algum lugar visível.
O forge-ds já produz HTML real (`.card.html`) — só faltava publicá-lo.

## 2. Fonte de verdade única

**O repositório `Forge-App-Dev/forge-ds`, no GitHub, é a única fonte de
verdade do design system.** Não existe mais uma versão "oficial" em outro
lugar. O que está no repo é o sistema.

## 3. Como uma mudança nasce

Um único caminho, para qualquer tipo de mudança — visual, de token, de
comportamento, de acessibilidade:

1. **Mateus descreve a necessidade** (aqui, no chat).
2. **Claude implementa direto no repo** — componente, token, guideline, doc
   — já seguindo os padrões definidos nesta auditoria (tokens antes de hex
   cru, acessibilidade desde o nascimento, sem retrabalho por design).
3. **Claude publica no GitHub Pages** (`https://forge-app-dev.github.io/forge-ds/`)
   fazendo push para `main` — o Pages atualiza sozinho a cada push.
4. **Mateus abre o link e vê o resultado renderizado de verdade** (não
   mockup, não export) — pelo celular, sem precisar abrir editor.
5. **Ajustes voltam por texto** ("aumenta o espaçamento", "esse vermelho tá
   forte") — Claude edita e publica de novo. Sem exportação, sem zip, sem
   segunda cópia do componente.

Não existe mais "nasce no Claude Design" vs "nasce no código". **Tudo nasce
no código, e o código é visível imediatamente.**

## 4. Regra de ouro contra retrabalho

**Fundação antes de superfície.** Um componente só nasce depois que os
tokens que ele vai consumir existem (cor, raio, espaçamento, motion,
foco, tamanho). Isso evita o problema descrito por Mateus: criar algo e
precisar reeditar depois porque a base mudou embaixo. A ordem de execução
segue o roadmap da auditoria (`AUDITORIA_FORGE_DS_2026-07.md`, seção 12):
tokens → higienização → APIs do núcleo → componentes novos.

## 5. GitHub Pages — o que é e como usar

- **URL:** `https://forge-app-dev.github.io/forge-ds/`
- **Fonte:** branch `main`, raiz do repo (sem passo de build).
- **Índice:** `index.html` na raiz — lista todos os cards de componentes e
  guidelines, agrupados, mais o UI Kit clicável e os docs de referência.
- **Atualizar o índice:** sempre que um `.card.html` novo for criado ou
  removido, o `index.html` é regenerado (script interno) e re-publicado no
  mesmo push.
- **Não editar `index.html` na mão** — ele é gerado a partir dos metadados
  (`@dsCard group=... name=... subtitle=...`) já presentes no topo de cada
  card.

## 6. Papel de cada parte

| Quem | Faz |
|---|---|
| Mateus | Decide o quê construir, revisa visualmente no Pages, aprova/pede ajuste em texto |
| Claude | Implementa (visual + tokens + acessibilidade + lógica) direto no repo, publica no Pages, mantém o índice atualizado |

Não há mais um terceiro papel ("Claude Design formaliza depois"). A
formalização acontece no mesmo commit que a criação.

## 7. O que isso substitui

- ❌ Onboarding do Claude Design lendo o repo.
- ❌ Export de zip do Claude Design.
- ❌ Import/comparação de zip no chat.
- ❌ "Pendências de sync DS" (lista de componentes ad-hoc aguardando
  formalização) — não existe mais essa fila, porque não existe mais uma
  segunda ferramenta para formalizar nela.
- ❌ Qualquer menção a `claude.ai/design` neste projeto.

## 8. Checklist rápido

- Mudança de qualquer tipo → Claude edita o repo direto.
- Token novo necessário → cria o token antes do componente que o usa.
- Toda mudança visual → publicada no Pages no mesmo push.
- Mateus revisa no link do Pages, não em zip nem em screenshot.
- Ajuste → texto → novo push → Pages atualiza.

---

*Reescrito em 2026-07-13 para descartar o fluxo baseado em Claude Design e
adotar GitHub Pages como superfície de revisão visual. Substitui a versão
anterior deste documento por completo.*
