# ADR-0050: `onColor()` — contraste WCAG híbrido com brand-lock explícito
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-015

## Contexto
`components/shared/color.js` escolhe texto sobre um preenchimento por uma heurística de **luma percebida** (`0.299R+0.587G+0.114B`) com corte em `0.62`: acima → texto escuro `#0B0F19`, abaixo → branco `#FFFFFF`. O comentário no código declara isso "decisão de marca" (branco sobre o vermelho accent), não um resultado de contraste.

Contraste WCAG real (luminância relativa, `(L1+0.05)/(L2+0.05)`) dos pares que a heurística resolve hoje:

| Fill | vs branco `#FFFFFF` | vs escuro `#0B0F19` | luma | heurística devolve | melhor WCAG |
|---|---|---|---|---|---|
| accent `#EF4444` | **3.76** | 5.09 | 0.467 | branco | escuro |
| danger `#e36a5a` | 3.24 | 5.91 | 0.550 | branco | escuro |
| success/green `#10B981` | **2.54** | 7.55 | 0.502 | **branco** | escuro |
| warning `#F59E0B` | 2.15 | 8.92 | 0.656 | escuro | escuro |
| cat-2 blue `#2563EB` | 5.17 | 3.71 | 0.376 | branco | branco |

Dois problemas reais:
1. **A heurística devolve branco sobre o verde `#10B981` a 2.54:1** — reprova até o piso de 3:1 (texto grande/UI). Como `#10B981` é o accent do módulo Nutrição **e** o accent do tema claro, a heurística produz hoje um par reprovado no tema padrão.
2. Um "WCAG puro pega o maior contraste" jogaria **tudo** para texto escuro, quebrando o único par que a marca protege: branco sobre o vermelho de marca.

Nota sobre o vermelho: `#EF4444` a 3.76:1 com branco **reprova** para texto normal (piso 4.5:1) mas **passa** o piso de 3:1 que vale para *texto grande/negrito* e para componentes de UI (SC 1.4.3 / 1.4.11). Botão e Pill Forge usam peso 800 em tamanho de botão → qualificam como texto grande → 3:1 aplica → o par é conforme para o uso real.

## Decisão
Adotar **híbrido**: cálculo WCAG real + **um** brand-lock explícito e documentado.

Algoritmo-alvo de `onColor(input, { size = "large" } = {})`:
1. Resolve o token para hex (mantém `resolveColor`).
2. **Brand-lock:** se o hex resolvido for o **vermelho de marca `#EF4444`**, devolve `#FFFFFF` sem calcular. Justificativa gravada no código: par de marca, válido porque veste só texto negrito/grande (piso 3:1; 3.76:1 ≥ 3:1). O lock é uma lista de 1 cor, não "branco sobre qualquer accent".
3. Caso contrário: calcular contraste WCAG contra `#FFFFFF` e `#0B0F19`, devolver o de **maior razão**.
4. Piso: `size:"large"` → 3:1; `size:"body"` → 4.5:1. Se nem o vencedor atinge o piso, devolver o vencedor **e** emitir `console.warn` em dev com o par e a razão.
5. Manter a assinatura retrocompatível (segundo argumento opcional; default `large` = comportamento atual dos consumidores Button/Pill).

Verificação: script de mesa (`scripts/check-oncolor.mjs`, follow-up) roda os ~20 hexes das paletas e falha o build se algum par reprovar o piso sem estar no brand-lock.

## Consequências
- **Correções visíveis desejadas:** on-color do verde `#10B981` (Nutrição / tema claro), do `danger` e do `warning` passa a ser **texto escuro** — todos sobem para 5.9–8.9:1. O bug de branco-a-2.54:1 sobre verde desaparece.
- O vermelho de marca preserva branco. Nenhuma regressão de marca.
- `--forge-on-accent: #FFFFFF` (token global em `colors.css`) fica **incoerente com o accent verde** do tema claro/Nutrição. Escalação abaixo.
- Consumidores que quiserem contraste de texto de corpo passam `size:"body"`.

## Alternativas consideradas
- **Manter heurística de luma:** rejeitada — produz par reprovado (branco/verde 2.54:1) e é uma pseudo-medida de contraste.
- **WCAG puro (maior contraste sempre):** rejeitada — flipa branco→escuro sobre o vermelho de marca, quebrando identidade sem ganho de conformidade (o par já é conforme a 3:1 no uso real).
- **Brand-lock amplo "branco sobre qualquer accent":** rejeitada — o accent verde reprovaria (2.54:1).

## Escalação
`--forge-on-accent` é hard-coded `#FFFFFF` no `:root` e não é sobrescrito em `.forge-theme-light` (onde accent = verde). Recomenda-se: tema claro/Nutrição define `--forge-on-accent: #0B0F19` (dark), OU o token passa a ser derivado por `onColor(var(--forge-accent))` no build. Decisão de produto para Mateus.
