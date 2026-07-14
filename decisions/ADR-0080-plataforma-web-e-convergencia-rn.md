# ADR-0080: Posicionamento de plataforma — DS web hoje, convergência React Native (Caminho A)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mateus (owner) · **OP/Task:** T-01

## Contexto
O `forge-ds` é implementado em **React-DOM (web)**: componentes usam `div/button/svg`, `onMouseDown/onTouchStart`, `className` e CSS custom properties — nada disso existe em React Native. O `forge-app` (o produto a ser servido) é **Expo/React Native**. Consequência dura: **hoje o app não consegue `import` de componentes do `forge-ds`**. O DS nasceu como *espelho reverso* do app (ver `docs/ARCHITECTURE.md`), então os componentes RN reais já existem no `forge-app`, e o catálogo web do DS é feito de réplicas HTML (mockups), não do componente real.

O objetivo do owner é que o DS seja **consumível** pelo trabalho no `forge-app` em três níveis: (1) tokens de fonte única; (2) conhecimento para IA+humano (prompts, guidelines, ADRs); (3) **componentes importáveis** em código.

## Decisão
Adotar o **Caminho A (faseado)**:

- **Agora (nível 1 e 2):** `tokens/tokens.json` é a **fonte única** e passa a gerar `tokens/tokens.rn.js` (valores literais dp/ms/número/cor) consumido pelo `forge-app`. O DS segue como fonte de conhecimento (SKILL.md, `*.prompt.md`, guidelines, ADRs).
- **Médio prazo (nível 3):** convergir os componentes para uma **fonte única em React Native + `react-native-web`** — o app importa nativamente e o catálogo web renderiza **o mesmo** componente real (elimina o drift de mockup). Estratégia de execução: **promover** os componentes RN que já existem no `forge-app` para um pacote versionado (não reescrever a partir do espelho web). Ver `T-65`/`T-66` em `docs/plan/plan.json`.

As correções de contraste, acessibilidade, tokens e documentação do plano são **independentes de plataforma** e correm em paralelo, sem esperar a convergência.

## Consequências
- As alegações "Android: Sim / iOS: estruturalmente sim" descrevem o `forge-app`, não este pacote — a documentação passa a dizer isso com honestidade (dark-only, web hoje).
- Durante a transição convivem dois mundos de componente (web atual + RN do app); o valor de consumo já flui via tokens desde já.
- O catálogo só renderiza o "componente real" ao fim da fase 2 (`T-65`).

## Alternativas consideradas
- **B — Unificar já em RN + react-native-web (reescrever/mover os 63 componentes agora):** entrega o nível 3 de imediato e mata o drift de catálogo, mas é o maior esforço, **concentrado e bloqueante** para um dono só, com alto risco big-bang. Rejeitada como primeiro passo (é o destino, não a largada).
- **C — Web-only como documentação/spec (app mantém componentes próprios):** menor esforço, mas **nunca** entrega "componentes importáveis" — contraria o objetivo declarado. Rejeitada.
