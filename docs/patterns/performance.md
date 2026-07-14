# Performance

Fecha **OP-154, OP-155, OP-157, OP-158**. Disciplinas de performance que já vivem parcialmente no código; consolidadas como regra de review. Base: `tokens/motion.css` (keyframes globais), `readme.md` (§Iconography, §Caveats fonts).

## OP-154 — içar estilos estáticos

- Objetos de estilo que **não dependem de props/estado** devem ser criados **fora do render** (constante de módulo), não recriados a cada render.
- Só fica inline o que varia com prop/estado (ex.: cor por módulo, opacidade de press).
- **Keyframes/animações são globais** (`tokens/motion.css`) — nunca emitir `<style>` por instância de componente. Referencie as classes `forge-anim-*` (ver `motion-review.md`).

## OP-155 — memo de listas longas

- Linhas repetidas em lista longa (`SetLogger`, `ListItem`, resultados de busca) devem ser **memoizadas** (`React.memo`) e receber **`key` estável** (id, não índice).
- Handlers passados às linhas: estáveis (`useCallback`) para o memo valer.
- No RN, listas longas usam virtualização (`FlatList`), não `map` num `ScrollView`.
- Evite reflow: `SetLogger` preserva largura entre estados; `Button` preserva largura em `loading` (spinner no lugar do label).

## OP-157 — subset de fontes

- Duas famílias apenas: **Barlow Condensed** (display) e **Inter** (corpo), carregadas de Google Fonts via `tokens/typography.css` (`readme.md` §Caveats).
- Carregar **só os pesos usados** (ex.: `Inter_400`/`_700`/`_800`, Barlow `600`/`700`/`800`) — não a família inteira.
- **Nunca combinar family de peso custom com `font-weight` CSS** (pitfall crítico do `readme.md`): cada peso é uma family própria; um `font-weight` por cima cai no font do sistema. Escolha o token de peso certo.

## OP-158 — SVG do mark

- Ícones são **SVG inline** via o único componente `Icon` (`components/icons/Icon.jsx`), render-by-name — sem icon font, sem PNG, sem emoji (`readme.md` §Iconography).
- O único bitmap do sistema é o **mark** (`assets/forge-mark.png`, âncora+martelo), usado em 26/40/56px. Onde couber, prefira servi-lo em resolução adequada ao maior uso e evitar re-decodificar; não multiplicar variantes.
- Icons herdam cor por prop (`currentColor`) — sempre set explícito de `color` no pressável pai (pitfall do `readme.md`), nunca confie em herança.

## Checklist de review

- [ ] Estilos estáticos fora do render; nada de `<style>` por instância.
- [ ] Linhas de lista longa com `React.memo` + `key` estável + handlers estáveis.
- [ ] Só os pesos de fonte usados; nenhum `font-weight` sobre family custom.
- [ ] Ícone via `Icon` (SVG inline), cor explícita; mark só onde é mark.
