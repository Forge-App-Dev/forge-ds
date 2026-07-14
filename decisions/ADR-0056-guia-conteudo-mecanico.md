# ADR-0056: Conteúdo mecânico em pt-BR (números, unidades, datas, plurais, maiúsculas)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-136

## Contexto
O readme fixa fundamentos de voz (você informal, tom de coach, sem emoji, sentence case). Falta a camada **mecânica**: como grafar números, unidades, datas, plurais e maiúsculas de forma consistente e localizada (pt-BR). Sem isso, "82,5kg" vs "82.5 Kg" vs "82,5 kg" convivem.

## Decisão
Regras canônicas, detalhadas em `docs/content-guide.md`. Resumo executivo:

- **Decimais:** vírgula decimal, ponto para milhar acima de 9.999 ("1.250 kcal"; "82,5"). Nunca ponto decimal.
- **Precisão por grandeza:** kcal e reps são **inteiros** (sem decimal: "1.250 kcal", "12 reps"); **peso corporal e cargas** têm **1 decimal** ("82,5 kg", "37,5 kg"); macros em **inteiros de grama** ("120 g").
- **Unidade colada vs separada:** no visual compacto do produto a unidade cola ("82,5kg", padrão herdado do app). Para **leitor de tela** o `aria-label` separa e escreve por extenso quando ambíguo ("82,5 quilogramas") — ver ADR-0054. Regra: **visual pode colar, nome acessível sempre separa.**
- **Datas relativas:** "hoje", "ontem", "amanhã" em minúscula; além disso "seg 14/07" (dia abreviado + dd/mm). Nunca mm/dd. Horas em 24h ("18:30").
- **Plurais:** concordância real, sem "(s)". "1 série" / "2 séries"; "1 treino" / "0 treinos". Zero vai para plural em pt-BR ("0 treinos"). Frases com contagem usam a forma correta por ramo condicional, não sufixo preguiçoso.
- **Maiúsculas:** sentence case em corpo e botões; **UPPERCASE só** no display Barlow Condensed (títulos, tags, labels tracked) — nunca uppercase em Inter, exceto microlabel tracked. Nomes de módulo em título são display ("TREINO"); em corpo são sentence case ("seu treino").
- **Sinais e intervalos:** menos com sinal real "−0,5 kg" (U+2212, não hífen); intervalo com en-dash "8–12 reps"; multiplicação "3 × 12".
- **Sem emoji** (readme) — inclusive em estados de sucesso; o "✓" é glifo de UI, não emoji.
- **Números grandes / edge:** acima de 9.999 usa separador de milhar; "0" nunca vira "–" ou vazio (0 é informação); valor ausente é "—" (em-dash), não "0".

## Consequências
- `docs/content-guide.md` é a fonte; cada `.prompt.md` linka para ele em vez de repetir.
- QtyInput normaliza vírgula→ponto internamente mas exibe vírgula (cruza OP-116).
- Cria acoplamento com ADR-0054 (nome acessível separa unidade e escreve por extenso).

## Alternativas consideradas
- **Deixar como prosa no readme:** rejeitada — OP-136 pede guia completo citável; regras mecânicas precisam de exemplos exatos, não princípios.
- **Unidade sempre separada no visual:** rejeitada — contraria o padrão compacto herdado do app ("82,5kg"); resolvido separando só no nome acessível.
