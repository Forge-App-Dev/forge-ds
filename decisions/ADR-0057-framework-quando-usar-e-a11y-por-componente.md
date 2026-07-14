# ADR-0057: Framework "Quando usar / Quando NÃO usar / Em vez disso use" + a11y por componente
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-135, OP-174

## Contexto
Cada componente tem `.jsx` + `.d.ts` + `.prompt.md` + card, mas os `.prompt.md` não têm seção de **orientação de escolha** ("quando usar / quando não") nem **seção de acessibilidade** padronizada. O resultado é uso errado (Panel onde caberia FullScreen), reinvenção e a11y aplicada ad hoc. OP-174 pede o framework de uso; OP-135 pede a seção de a11y — as duas colam no mesmo lugar (o `.prompt.md`) e ganham um template único.

## Decisão
Todo `.prompt.md` de componente passa a ter, ao final, dois blocos padronizados, colados do template `docs/when-to-use-template.md`:

1. **Quando usar / Quando NÃO usar / Em vez disso use** — três listas curtas. "Em vez disso use" sempre aponta para o componente correto do sistema (ex.: "para fluxo longo de edição → FullScreen"), tornando o mapa de decisão navegável.
2. **Acessibilidade** — preenchido a partir de `docs/accessibility-checklist.md` para o **tipo** daquele componente (papel, nome, valor/estado, foco, alvo ≥44px, contraste, terminologia de leitor de tela do ADR-0054, cor-não-única do ADR-0052 quando aplicável).

O template é a única fonte da estrutura; os componentes preenchem o conteúdo. Docs de foundation (não-componentes) ganham só o bloco 1 quando fizer sentido.

Prioridade de preenchimento (o framework aplica a todos, mas começa pelos ambíguos): Panel vs FullScreen vs VideoModal (regra de tamanho de fluxo do readme §Overlays), MacroMeter vs MetaBar vs Ring, InlineAlert vs ErrorState vs EmptyState, Button vs Pill vs HeaderAction, Card vs Card pressável.

## Consequências
- Nasce `docs/when-to-use-template.md` (o gabarito a colar) e `docs/accessibility-checklist.md` (checklist WCAG por tipo).
- Cruza com OP-160 (checklist WCAG por componente) e OP-175 (anti-patterns) — o "Quando NÃO usar" é o gancho natural para linkar o card de Don'ts.
- Trabalho incremental: o template entra no protocolo de "novo componente só entra com prompt.md completo" (OP-168).

## Alternativas consideradas
- **Só "quando usar" sem "quando NÃO / em vez disso":** rejeitada — a maior fonte de erro é usar o componente errado; o "em vez disso use" é o que redireciona.
- **Seção de a11y livre por componente:** rejeitada — vira cobertura desigual; checklist por tipo garante que ninguém esquece papel/nome/valor.
- **Um doc central em vez de por-componente:** rejeitada — a orientação precisa estar onde o agente lê o componente (`.prompt.md`); o doc central é a fonte, não o ponto de consumo.
