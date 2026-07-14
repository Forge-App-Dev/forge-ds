# ADR-0040: Arquitetura de tokens (fonte única DTCG)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Design Tokens Architect (persona) · **OP:** 001/004/084/098/099/101

## Contexto

Hoje o Forge tem **4 fontes de verdade manuais em 2 repos** (P-03): `tokens/*.css` no forge-ds,
`src/theme/tokens.js` no forge-app, prosa no doc da família, e valores hardcoded em componentes.
Não existe fonte única legível por máquina (OP-001 é o gap nº 1 da auditoria). Consequências:
drift silencioso DS↔produção, custo de N edições por mudança, e impossibilidade de tooling (lint
contra tokens reais, diff de tema, doc gerada, autocomplete tipado).

Os tokens atuais (`colors/typography/spacing/motion/base.css`) são a **verdade a preservar**: já
passaram por trabalho de acessibilidade (contraste ajustado, textos elevados a 4.5:1) e namespace
`--forge-*` (OP-096). Qualquer arquitetura nova precisa **emitir exatamente esses CSS** (mesmos
nomes e valores) — a mudança é de origem, não de produto.

> **Nota (2026-07-14):** este ADR foi escrito quando o DS embarcava um tema claro "sibling"
> (`.forge-theme-light`). O owner decidiu que **Forge é dark-only** e o tema claro foi removido.
> A arquitetura de tokens (fonte única DTCG, 3 camadas, gerador próprio) continua válida; o que
> muda é que o white-label reaponta só o **accent** sobre o tema dark, sem par claro/escuro. Ver
> CHANGELOG 1.6.0.

Restrições do repo: ESM puro, sem framework de build pesado, um único dono, horizonte de 5 anos.

## Decisão

Adotar **um único `tokens/tokens.json` no formato W3C DTCG** (`$value`/`$type`/`$description` —
OP-101) como fonte de verdade, gerado para CSS + JS + `.d.ts` por um **script Node próprio
(`scripts/build-tokens.mjs`), sem dependências novas** (OP-001, alternativa "b" da auditoria).

Arquitetura de **3 camadas** (OP-004): **primitive → semantic → component**, com a 3ª sob demanda
(nasce da divergência real, não da simetria).

Decisões concretas embutidas:
- **OP-084 — famílias neutras separadas:** `graphite` (frio, superfícies/bordas do tema dark) e
  `gray` (quase-puro, texto). Ramps 50–950 ancorados **nos valores já embarcados** (fidelidade >
  grade teórica); o texto lê o extremo claro do ramp `gray` sobre o grafite escuro — separação
  limpa primitivo/semântico. (O ramp `stone`, neutro quente, nasceu para o tema claro; com Forge
  dark-only ficou **sem consumidor** — ver CHANGELOG 1.6.0.)
- **OP-098 — contrato de tema como validação de build**: lista fechada do que um tema (de accent)
  PODE trocar (`action.accent` + o par `on-accent`) e do que NUNCA troca (todo o resto: primitivos,
  superfícies, texto, bordas, scrim, raios, tipo, espaço, motion, macros, categoria). O build falha
  se um token imutável declarar um override de tema. A troca é override da camada semântica via
  `$extensions.com.forge.theme.<nome>`, nunca da primitiva.
- **OP-099 — platform tokens + `tokens.d.ts`**: `px = dp = pt` (número único, unidade por
  plataforma); saída tipada para autocomplete no app; o `tokens.js` do forge-app passa a ser gerado.
- **OP-101** — `$description` com uso/anti-uso em cada token; vira doc gerada.
- **Fidelidade garantida por snapshot**: os `*.css` atuais viram baseline; o build aborta se o
  output divergir. Invariante de aceite: `git diff tokens/*.css` = vazio após a migração.

Especificação completa (árvore de tokens, paleta com hex, mapa semântico→primitivo, pipeline do
gerador): `docs/tokens-architecture.md`.

## Consequências

**Positivas:** elimina a classe inteira de bugs de drift; uma edição em vez de quatro; habilita
lint/CI contra tokens reais, doc gerada e autocomplete tipado; white-label real (accent/multi-brand =
trocar a camada semântica); vocabulário de intenção ("por que este cinza?") legível. Escala para centenas de
componentes sem inflar o vocabulário (camada 3 sob demanda).

**Negativas / custos:** adiciona um passo de build ao fluxo (`npm run build:tokens` antes do commit);
os `*.css` deixam de ser editáveis à mão (viram artefatos "GENERATED"); exige criar antes os tokens
que a auditoria pediu (OP-004..008, já em curso); a persona única precisa manter o gerador. Os
half-steps de escala (gray 450/550/650/750; graphite 850/panel) tornam os ramps menos "redondos" —
aceito conscientemente em nome da fidelidade.

**Neutras:** meio-pixels de tipografia (14.5…) ficam no JSON como valor web canônico e são
arredondados por transform de plataforma no RN — a fonte não muda, o alvo decide.

## Alternativas consideradas

1. **Style Dictionary completo (Amazon).** Padrão de indústria (Carbon/Spectrum/Fluent usam pipeline
   equivalente), muitos transforms prontos. **Rejeitado agora:** adiciona dependência pesada e
   configuração a um repo que quer ficar leve e de dono único; 90% do valor vem do gerador próprio de
   ~150 linhas. Reavaliar se surgir necessidade de múltiplos formatos de plataforma exóticos —
   migrar do DTCG puro para Style Dictionary depois é barato (o `tokens.json` já é compatível).
2. **Gerador próprio + `tokens.json` DTCG (ESCOLHIDA).** 90% do valor, 10% do custo, zero dependência
   pesada; controle total do output byte-a-byte (crítico para a fidelidade).
3. **Manter manual com checklist.** Não resolve nada; o drift continua estrutural. Rejeitada.
4. **3 camadas plenas estilo Carbon já (component tokens exaustivos).** É o norte de 5 anos, mas
   infla o vocabulário agora sem consumidores que justifiquem. **Escolhido:** 2 camadas plenas +
   camada 3 mínima sob demanda (OP-004 rec. b).
5. **Um único ramp neutro** para superfícies e texto. Rejeitado: quebraria a fidelidade — as
   superfícies dark são azuladas e o texto é quase-neutro (dois matizes reais distintos). Famílias
   neutras separadas é o que o produto já é. (O ramp quente `stone` existia para o tema claro, hoje
   removido — dark-only.)
</content>
