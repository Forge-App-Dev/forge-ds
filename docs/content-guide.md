# Guia de conteúdo — Forge DS

Fonte única de conteúdo do sistema. Voz e tom vêm do `readme.md` (§Content fundamentals); este guia adiciona a **camada mecânica** (OP-136, ADR-0056) e consolida a de voz para referência rápida. Cada `.prompt.md` linka para cá em vez de repetir.

## 1. Voz e tom (resumo do readme)

- **Língua:** português do Brasil, "você" informal — direto, caloroso, um pouco brincalhão, nunca corporativo.
- **Tom:** coach que incentiva, não rastreador clínico. Estados vazios/descanso são reenquadrados positivamente ("Descanso. Recuperação também é treino."), nunca deixados em branco.
- **Segunda pessoa:** fala com "você"; nunca "eu/nós" corporativo ("Escolha qualquer treino pra fazer hoje.").
- **Sem emoji.** A iconografia é só a linha Feather da marca. O "✓" é glifo de UI, não emoji.
- **Precisão com toque humano:** número exato + legenda em linguagem simples. Alvos calculados são sempre legendados como estimativa, não prescrição ("Estimativa por Mifflin-St Jeor — valores de referência, não prescrição. Para um plano individual, procure um profissional.").
- **Microcopy de segurança:** ação destrutiva tem confirmação explícita em 2 toques (ConfirmButton: toque 1 arma → "Confirmar?" → toque 2 confirma).
- **CTA:** verbo de ação, nunca "Enviar"/"OK" genérico ("Continuar treino →").

## 2. Maiúsculas (casing)

- **Sentence case** em corpo e botões ("Continuar treino", "Salvar peso").
- **UPPERCASE só no display Barlow Condensed** — títulos, tags, microlabels tracked. Nunca uppercase em Inter, exceto microlabel tracked minúsculo.
- Nome de módulo: display = "TREINO" / "NUTRIÇÃO"; em corpo = sentence case ("seu treino", "o plano de nutrição").
- Nunca combinar family de peso custom com `font-weight` CSS (readme §pitfalls) — escolher o token de peso certo.

## 3. Números

- **Vírgula decimal.** Ponto separa milhar acima de 9.999: "82,5"; "1.250 kcal". Nunca ponto decimal, nunca "82.5".
- **Precisão por grandeza:**
  - kcal → inteiro ("1.250 kcal")
  - reps / séries → inteiro ("12 reps", "3 séries")
  - macros → inteiro de grama ("120 g")
  - peso corporal e cargas → 1 decimal ("82,5 kg", "37,5 kg")
- **Sinais reais:** menos com U+2212 ("−0,5 kg"), não hífen. Intervalo com en-dash ("8–12 reps"). Multiplicação com "×" ("3 × 12").
- **Zero é informação:** "0 treinos", nunca "–" nem vazio.
- **Valor ausente é "—"** (em-dash), distinto de zero.

## 4. Unidades

- **Visual compacto pode colar** a unidade, padrão herdado do app: "82,5kg", "120g", "1.250kcal".
- **Nome acessível sempre separa e, quando ambíguo, escreve por extenso:** `aria-label="82,5 quilogramas"`, `"1.250 quilocalorias"`. Ver ADR-0054. Regra: **visual cola, leitor de tela separa.**
- Abreviações canônicas: `kg`, `g`, `kcal`, `min`, `s`, `reps`. Minúsculas sempre (kg, não Kg/KG).

## 5. Datas e horas

- **Relativas em minúscula:** "hoje", "ontem", "amanhã".
- **Absolutas:** dia abreviado + dd/mm — "seg 14/07". Nunca mm/dd. Nunca ano quando é o ano corrente.
- **Horas em 24h:** "18:30", "06:00".
- Duração: "45 min", "1 h 20 min".

## 6. Plurais e concordância

- **Concordância real, sem "(s)".** "1 série" / "2 séries" / "0 séries".
- **Zero é plural em pt-BR:** "0 treinos", "0 refeições".
- Frases com contagem escolhem a forma por ramo condicional (1 → singular, resto → plural), nunca sufixo preguiçoso.

## 7. Hierarquia de texto e contraste (ADR-0055)

Três níveis de texto atenuado (contra `surfaceRaised`):

| Token | Contraste | Uso |
|---|---|---|
| `--forge-text-dim` (~5.4:1) | passa 4.5:1 | texto secundário legível |
| `--forge-text-faint` (~4.6:1) | passa 4.5:1 | legenda, dica, timestamp — **piso para informação** |
| `--forge-text-dimmer` (~3:1) | limiar decorativo | **só decorativo ou placeholder** — nunca informação única |

Placeholder nunca substitui `<label>` (é exemplo de formato "82,5", não instrução).

## 8. Estimativas e segurança

Todo alvo calculado (calorias, macros, 1RM) é legendado como estimativa/referência, não prescrição médica, com a linha de encaminhamento a profissional. Ação destrutiva sempre em 2 toques, com copy explícita ("Descartar treino?").
