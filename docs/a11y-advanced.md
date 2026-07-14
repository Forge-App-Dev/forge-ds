# Acessibilidade avançada — Forge DS

> **OP:** OP-160–165 (auditoria §8.4) · **Status:** Índice consolidado · **Data:** 2026-07-14
> **Decisor:** consolidação (as decisões vivem nos ADRs/docs linkados).

A acessibilidade **estrutural** (foco visível, papel/nome/valor, alvo ≥44px,
associação label→campo, semântica de diálogo/tabs/progresso) está no
`docs/accessibility-checklist.md` e no `.prompt.md` de cada componente (ADR-0057).
Este doc consolida a camada **avançada** — as seis questões da §8.4 que não têm doc
próprio: o que está **feito** e **como um autor de componente aplica** cada uma.
Nada é redecidido aqui; cada seção aponta para o ADR/checklist que é a fonte.

## Índice OP-160–165

| # | Tema | Feito? | Fonte |
|---|---|---|---|
| OP-160 | Checklist WCAG por componente | ✅ existe | `docs/accessibility-checklist.md` |
| OP-161 | `textDimmer` (~3:1) só decorativo/placeholder | ✅ regra escrita | ADR-0055 |
| OP-162 | Daltonismo das macros — reforço não-cromático | ✅ regra obrigatória | ADR-0052 |
| OP-163 | Zoom / reflow 200% sem scroll horizontal | ✅ requisito + teste de aceite | ADR-0053 |
| OP-164 | Anúncios dinâmicos (conclusão de progresso) | ✅ padrão + suporte no Ring | ADR-0054, este doc §OP-164 |
| OP-165 | Terminologia de leitor de tela pt-BR | ✅ glossário canônico | ADR-0054 |

---

## OP-160 · Checklist WCAG 2.2 AA por componente

**Feito.** O `docs/accessibility-checklist.md` traz as regras transversais + uma
seção por **tipo** de componente (botões, campos, diálogos, progresso/feedback,
gráficos, ícones, navegação), cada item mapeado à SC do WCAG.

**Como o autor aplica:** ao criar/editar um componente, cole na seção
"Acessibilidade" do `.prompt.md` a seção do checklist correspondente ao **tipo**
daquele componente (contrato do ADR-0057 + `docs/when-to-use-template.md`). O
checklist é a fonte; o `.prompt.md` é o ponto de consumo do agente.

## OP-161 · `textDimmer` só decorativo/placeholder

**Feito** (ADR-0055). `--forge-text-dimmer` (~3:1) é **decorativo-only**: permitido
só em ornamento (marca d'água, glifo ilustrativo) e em placeholder de campo cujo
rótulo real vive num `<label>` visível ≥4.5:1. **Proibido** para qualquer
informação, rótulo persistente, legenda, valor, disclaimer, timestamp ou unidade.

**Como o autor aplica:** se o usuário precisa **ler para entender ou agir**, use
`--forge-text-faint` (4.6:1) ou acima — nunca `text-dimmer`. Placeholder nunca
substitui label (SC 3.3.2). Um lint que sinaliza `text-dimmer` em nó de texto não
marcado `::placeholder`/`aria-hidden` está registrado como follow-up (ADR-0055).

## OP-162 · Daltonismo das macros — reforço não-cromático

**Feito** (ADR-0052). Vermelho (protein) e âmbar (carb) convergem sob
protanopia/deuteranopia; a cor **sozinha não distingue** proteína de carboidrato.
Regra obrigatória: **macro color nunca carrega significado sozinha** — acompanha
sempre pelo menos um identificador não-cromático, na ordem: (1) **rótulo textual
curto + valor numérico** sempre que couber; (2) quando não cabe rótulo por segmento
(barra fina, dot isolado) → **legenda adjacente** (swatch + rótulo) ou **padrão por
macro**; (3) **ordem canônica fixa** proteína → carbo → gordura.

**Estado nos componentes (verificado):**
- `MacroMeter` (variante padrão) — dot **+ rótulo visível** ("Proteína") + valor. ✅
- `MacroRing` — segmentos coloridos no anel **+ legenda** com swatch + rótulo +
  valor por macro. ✅ (`legend={false}` só em contexto denso onde os valores vivem
  ao lado.)
- `MacroMeter compact` — dot + barra + valor, sem rótulo visível **por desenho**
  (contexto denso, ex.: linha de item de refeição); a identidade da macro vem do
  contexto/posição e o nome vai no `aria-label`. ADR-0052 ratifica o compact como
  conforme — **não adicionar rótulo visível** (mudaria o visual e contradiz o
  propósito do variant).
- `MetaBar segments` — barra segmentada **genérica** (distribuição por refeição,
  cores definidas pelo chamador), não um componente de macro. Tem `aria-label`; a
  legenda com rótulo é responsabilidade do consumidor quando os segmentos forem
  macros (item do checklist).

**Como o autor aplica:** ao exibir macro, garanta rótulo + valor visíveis; em barra
empilhada fina sem espaço para rótulo por segmento, forneça legenda com swatch +
rótulo (preferível) ou padrão por macro. Mantenha a ordem canônica. Ver a linha
"Macros" da seção "Progresso e feedback" do checklist.

## OP-163 · Zoom e reflow a 200%

**Feito** (ADR-0053). A coluna de 480 é `max-width`, não `width`: abaixo disso o
conteúdo ocupa 100% e reflowa na vertical. Sem scroll horizontal a 320 CSS px —
conteúdo largo (MiniChart, tabelas) rola **dentro do próprio contêiner**
(`overflow-x:auto` local), nunca o `body`. Alturas usam `min-height`, não `height`;
`line-height` unitless; `dvh` com fallback `vh` em overlays.

**Teste de aceite (item de PR):** abrir o kit no navegador, zoom a **200%**, janela
a **320px** — verificar: (a) sem barra horizontal no `body`, (b) sem texto
truncado/sobreposto, (c) nav inferior e CTAs acessíveis, (d) diálogos cabem com
corpo rolável vertical.

**Como o autor aplica:** nunca fixe largura/altura em `px` que corte a 200%; use
`max-width`/`min-height`; embale qualquer bloco largo num contêiner com
`overflow-x:auto` próprio.

## OP-164 · Anúncios dinâmicos (conclusão de progresso)

**Feito.** A terminologia de anúncio está no glossário (ADR-0054): progresso é
`progressbar` com valuenow/min/max; mudanças de estado educadas usam `role="status"`
+ `aria-live="polite"` (padrão já aplicado em `OfflineBanner`, `Stepper`,
`ConfirmButton`, `Pager`, `PRCelebration`).

**Suporte no `Ring`:** o `Ring` aceita uma prop **opcional** `announce` (string).
Quando fornecida **e** o progresso chega a 100%, o Ring renderiza uma região
`role="status"`/`aria-live="polite"` invisível (`.forge-sr-only`) com essa mensagem
— anuncia a **conclusão** (ex.: "Série concluída") sem alterar o comportamento nem o
visual padrão. Sem a prop, nada muda.

**Como o autor aplica:** para anunciar a conclusão de um ciclo (série, timer,
upload) passe `announce="Série concluída"` ao `Ring`. Para estados que aparecem e
somam informação (offline, recorde) use `role="status"` + `aria-live="polite"` no
contêiner; para erro urgente-bloqueante use `role="alert"` (ver ADR-0054 e a seção
"Progresso e feedback" do checklist).

## OP-165 · Terminologia de leitor de tela pt-BR

**Feito** (ADR-0054). Glossário canônico papel → como o SO anuncia em pt-BR
("botão", "guia", "caixa de diálogo", "caixa de edição", "barra de progresso"…),
com o `role`/`accessibilityRole` certo por elemento Forge e o nome acessível sempre
em pt-BR sentence case.

**Regras que o autor não pode esquecer:**
- **Não repetir o papel no nome** — "Salvar", nunca "botão Salvar" (o SO já fala o
  papel; senão vira "botão botão Salvar").
- **Estado é `aria-*`** (`aria-pressed`, `aria-selected`, `aria-invalid`,
  `aria-busy`, `aria-expanded`), nunca embutido no texto do label.
- **Números com unidade** vão por extenso no `aria-label` quando o leitor soletraria
  mal ("82,5 quilogramas"), enquanto o visual pode colar ("82,5kg") — ADR-0056,
  regra "visual cola, leitor de tela separa".
- **Ícone é `aria-hidden` por padrão**; só ganha nome quando é a única fonte de
  significado.

Consulte a tabela do ADR-0054 para o `role` e o nome acessível de cada tipo antes
de escrever `accessibilityRole`/`aria-label`.
