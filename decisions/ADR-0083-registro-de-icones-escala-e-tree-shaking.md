# ADR-0083: Registro de ícones — escala, tree-shaking e a proibição de sprite/fonte
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mateus (delegou ao conselho) · **Task:** T-60

## Contexto
A auditoria apontou que o `Icon` usa um registro **monolítico** (`PATHS`, um objeto
em `components/icons/Icon.jsx` — hoje 33 ícones / ~240 linhas). Importar `Icon`
puxa o registro inteiro: **não é tree-shakeable por ícone**. Ao mesmo tempo, o
`iconography.md` proíbe sprite e icon-font — o que a auditoria leu como "travar a
única saída escalável". São duas questões que precisam de resposta conjunta.

## Decisão

### 1. Manter o registro monolítico na escala atual
Com dezenas de ícones o peso é irrelevante (paths de contorno são poucos bytes) e a
API `<Icon name="flame" />` é a mais simples de consumir — para humano, para IA
(um nome de string; `ICON_NAMES` lista tudo) e para a convergência RN (o mesmo
mapa `name → componente` casa direto com `react-native-svg`). Dividir 33 ícones em
33 módulos hoje seria complexidade sem retorno.

### 2. Gatilho de divisão documentado
Quando o catálogo passar de **~60 ícones** _ou_ o `Icon.jsx` cruzar **~600 linhas**,
migrar para **um módulo ES por ícone** (`icons/paths/<nome>.js`), com o `Icon`
montando o registro por import — aí o bundler subseta. **A API pública
(`<Icon name>`) não muda**; só a organização interna. Um novo ADR registra a
migração quando ela ocorrer.

### 3. A saída escalável é módulo ES por ícone — NÃO sprite/fonte
A proibição de sprite (`<use href>`) e icon-font **continua de pé** e não contradiz
o item 2: sprite/fonte quebram o `stroke="currentColor"` por-token, complicam o
white-label e adicionam asset/build externo. O caminho tree-shakeable do Forge é
**módulos ES por ícone** (mantém currentColor, sem asset externo).

## Consequências
- Nenhuma mudança de código agora além de documentação (`iconography.md` ganhou a
  seção "Escala, tree-shaking e o gatilho de divisão").
- O não-tree-shaking atual passa a ser uma escolha **registrada e com gatilho**, não
  uma dívida silenciosa. T-60 fica resolvido como decisão; a refatoração só dispara
  no gatilho.

## Pendente (não neste ADR)
- **T-47 (namespace):** unificar o vocabulário de tokens (`--forge-*`). Os aliases de
  cor sem prefixo (`--surface-*`, `--border-card/input`) já foram removidos (0
  consumidores); resta destrinchar tipografia (primitivo `--text-*` vs alias
  `--forge-text-*`) e migrar os usos de `--radius-*` sem prefixo.
