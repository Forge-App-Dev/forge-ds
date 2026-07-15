# Iconografia — como construir um glifo Forge (OP-090)

Todo ícone do sistema vive em `components/icons/Icon.jsx` (um componente
render-by-name; `ICON_NAMES` lista os disponíveis). Para um glifo novo manter o
traço da família, siga estas regras — são as que os ícones existentes já seguem.

## Regras de construção

- **Estilo:** Feather-style — linha, não preenchimento. Traço de **~2px**, com
  `stroke-linecap="round"` e `stroke-linejoin="round"`. Sem sombra, sem gradiente.
- **Grid / viewBox:** desenhe num `viewBox="0 0 24 24"`. Mantenha ~1–2px de
  margem óptica nas bordas (o desenho "respira" dentro do quadro de 24).
- **Cor:** **nunca** fixe cor no path. O `Icon` aplica `stroke="currentColor"`
  (ou a prop `color`), então o glifo herda a cor do contexto/token. Zero hex cru.
- **Tamanho:** o `Icon` recebe `size` (usa os tokens `--forge-icon-sm/md/lg/xl` =
  16/20/24/30). Desenhe pensando em 24 e deixe o `size` escalar.
- **Preenchimento:** a única exceção de fill sólido é o **Play** (triângulo);
  todo o resto é contorno.
- **Peso visual consistente:** um glifo novo deve parecer irmão dos existentes —
  compare lado a lado no card `components/icons/icons.card.html` antes de aceitar.

## Como adicionar

1. Adicione a entrada em `PATHS` no `components/icons/Icon.jsx` (`nome: <paths SVG>`),
   usando só elementos de contorno (`path`/`line`/`circle`/`polyline`) sem `fill`
   nem cor fixa.
2. `ICON_NAMES` é derivado de `PATHS` automaticamente — não edite à mão.
3. Regenere o bundle (`npm run build:bundle`) e o índice; confira no card de ícones.

## Anti-exemplos (não faça)

- ❌ Ícone com `fill` de cor (vira mancha; foge do estilo linha).
- ❌ Cor hardcoded no path (quebra tema/white-label e o lint de aderência).
- ❌ Traço fino demais (1px) ou grosso demais (3px+) — destoa da família.
- ❌ PNG/emoji/ícone de fonte — o sistema é SVG inline por nome, só.

## Escala, tree-shaking e o gatilho de divisão (T-60)

O registro `PATHS` é **monolítico** (um objeto no `Icon.jsx`, hoje 33 ícones /
~240 linhas). Importar `Icon` puxa o registro inteiro — não é tree-shakeable por
ícone. **Isso é intencional na escala atual**, e a decisão foi tomada de olho no
trade-off, não por descuido:

- **Por que manter monolítico agora:** com dezenas de ícones o peso é irrelevante
  (paths de contorno são poucos bytes) e a API `<Icon name="flame" />` é a mais
  simples de consumir — inclusive para IA (um nome de string, `ICON_NAMES` lista
  tudo) e para a convergência RN (o mesmo `name → componente` mapeia direto para
  `react-native-svg`). Dividir em 33 módulos hoje seria complexidade sem retorno.
- **O gatilho de divisão:** quando o catálogo passar de **~60 ícones** _ou_ o
  `Icon.jsx` cruzar **~600 linhas**, migrar para **um módulo ES por ícone**
  (`icons/paths/flame.js` etc.), com o `Icon` montando o registro por import —
  aí o bundler consegue subsetar. A API pública (`<Icon name>`) **não muda**; só
  a organização interna. Registre um ADR quando isso acontecer.
- **Por que NÃO sprite nem fonte de ícone** (a proibição continua de pé, e não é
  contradição com o item acima): sprite (`<use href>`) e icon-font quebram o
  `stroke="currentColor"` por-token, complicam o white-label e adicionam um passo
  de build/asset externo. O caminho escalável do Forge é **módulos ES por ícone**
  (tree-shakeable, mantém currentColor, sem asset externo) — não sprite/fonte.
