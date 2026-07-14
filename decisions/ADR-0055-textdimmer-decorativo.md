# ADR-0055: `textDimmer` (~3:1) é decorativo/placeholder, nunca informação única
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-161

## Contexto
A escala de texto tem três níveis de contraste (verificados contra `surfaceRaised`):
- `--forge-text-dim #9898A0` → ~5.4:1 (passa 4.5:1)
- `--forge-text-faint #8C8C94` → ~4.6:1 (passa 4.5:1)
- `--forge-text-dimmer #6C6C74` → **~3:1** (limiar decorativo)

`text-dimmer` está calibrado exatamente no piso de 3:1 — o comentário do token já diz "decorative-only threshold". 3:1 **reprova** texto normal (SC 1.4.3 exige 4.5:1) e só é aceitável para conteúdo que não seja informação (SC 1.4.3 isenta texto puramente decorativo, e placeholder não é conteúdo persistente).

## Decisão
`--forge-text-dimmer` é permitido **apenas** para:
1. **Texto decorativo** — ornamento que, se removido, não muda o entendimento (ex.: marca d'água, contador de fundo, glifo ilustrativo).
2. **Placeholder de campo vazio** — texto que some ao digitar e cujo conteúdo está duplicado num `<label>` visível de contraste ≥ 4.5:1 (o placeholder nunca é o único rótulo — SC 3.3.2).

**Proibido** para: qualquer informação, rótulo persistente, legenda, valor, dica que não exista em outro lugar, texto de disclaimer, timestamp, unidade. Se o usuário precisa **ler para entender ou agir**, use `text-faint` (4.6:1) ou acima.

Regra de placeholder reforçada: placeholder **não substitui label** (cruza OP-115). Campo sempre tem `<label>` visível; o placeholder é exemplo de formato ("82,5"), nunca a instrução.

Lint futuro (registrado, não implementado): regra que sinaliza `color: var(--forge-text-dimmer)` aplicado a nó de texto que não seja `::placeholder` nem marcado `aria-hidden`/`data-decorative`.

## Consequências
- Vira regra escrita no `docs/content-guide.md` (§hierarquia de texto) e item do `docs/accessibility-checklist.md`.
- Qualquer uso atual de `text-dimmer` em legenda/valor deve migrar para `text-faint` — auditoria de uso é follow-up.
- O par `text-dimmer` sobre `bg` (mais escuro que `surfaceRaised`) tem contraste ainda menor que 3:1; a regra decorativa cobre isso por definição (decorativo não tem piso).

## Alternativas consideradas
- **Subir `text-dimmer` para 4.5:1:** rejeitada — some a distinção visual com `text-faint`; o nível existe justamente para hierarquia decorativa. Melhor restringir uso que apagar o token.
- **Permitir em "texto de baixa importância":** rejeitada — "baixa importância" ainda é informação; abre brecha para reprovar 1.4.3 legitimando 3:1 em conteúdo.
