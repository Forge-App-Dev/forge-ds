# ADR-0052: Macro colors e daltonismo — reforço não-cromático obrigatório
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-162

## Contexto
As macros usam **vermelho / âmbar / azul** (`protein #E5645E`, `carb #E0A23B`, `fat #4C9BD6`). Vermelho e âmbar caem os dois no eixo problemático da protanopia/deuteranopia (deficiência vermelho-verde, ~8% dos homens).

Simulação (Machado 2009, severidade 1.0) e distância perceptual ΔE (CIE76 em Lab):

| Par | Normal | Protanopia | Deuteranopia |
|---|---|---|---|
| protein–carb | 49.4 | 45.4 | **28.4** |
| protein–fat | 86.3 | 54.2 | 74.0 |
| carb–fat | 99.5 | 95.3 | 101.2 |

Hex simulados (deuteranopia): protein `#A4975B` (cáqui), carb `#C8B43F` (amarelo-oliva), fat `#6E8ED5` (azul). Sob deuteranopia **protein e carb convergem para dois tons de oliva/amarelo que diferem sobretudo em luminosidade** — o "vermelho" perde identidade de vermelho. Fat (azul) permanece nitidamente separado em todos os casos (o azul não está no eixo confundido).

Conclusão: a **cor sozinha não distingue proteína de carboidrato** para usuários protan/deuteran. Gordura está segura, mas a regra precisa ser uniforme para o trio.

## Decisão
**Macro color nunca carrega significado sozinha.** Toda apresentação de macro acompanha, além da cor, pelo menos **um** identificador não-cromático, na seguinte ordem de preferência:

1. **Rótulo textual curto sempre presente** — `Proteína` / `Carbo` / `Gordura` (ou as iniciais `P` / `C` / `G` quando o espaço for mínimo) **+ o valor numérico** ("120 g"). Este é o reforço primário e é obrigatório sempre que houver espaço (MacroMeter, MacroMeter compact, TargetsCard, legendas).
2. **Quando não cabe rótulo por segmento** (ex.: barra empilhada fina, dot isolado): a cor deve vir com **legenda adjacente** (swatch + rótulo) OU com **textura/padrão distinto por macro** — sugestão canônica: protein = sólido, carb = hachura diagonal, fat = pontilhado. A textura é o último recurso; legenda com rótulo é preferível.
3. **Ordem canônica fixa** proteína → carbo → gordura em qualquer barra empilhada/segmentada, para que a posição também seja um sinal aprendível.

O `MacroMeter` compact já cumpre a regra (dot **+ label**). Esta ADR eleva o comportamento dele a **regra escrita e obrigatória para todos** os componentes que exibem macro. Nenhum componente pode exibir macro só por cor.

## Consequências
- MetaBar segmentado e qualquer futura barra empilhada de macros precisam de legenda com rótulo (não só faixas coloridas) ou padrão por segmento — vira item do checklist de a11y por componente.
- Entra em `docs/accessibility-checklist.md` (linha "cor não é o único meio", SC 1.4.1) e no card de foundation das macros.
- Não altera os hex (identidade de família, readme).

## Alternativas consideradas
- **Trocar carb ou protein por cores mais separadas no eixo (ex.: âmbar → azul-esverdeado):** rejeitada — quebra identidade de família fixa e o trio é parte da marca.
- **Só cor, confiando no ΔE 28 da deuteranopia:** rejeitada — 28 vem quase todo de luminância entre dois olivas; para categorização instantânea de dois swatches pequenos é insuficiente e reprova SC 1.4.1.
- **Textura como reforço primário:** rejeitada como padrão — hachura em barra fina é ruído visual; rótulo+valor é mais legível e já é o padrão do compact.
