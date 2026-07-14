# ADR-0023: Escala de fonte (Dynamic Type / fontScale)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mobile Platform & Adaptive Specialist (persona) · **OP:** OP-148, OP-020

## Contexto
iOS (Dynamic Type) e Android (fontScale de acessibilidade) permitem o usuário
ampliar a fonte do sistema. O Barlow Condensed em caixa alta é display denso e
quebra layout cedo quando ampliado; o corpo Inter tolera bem. Sem política, ou o
app ignora a acessibilidade (`allowFontScaling={false}` em tudo) ou quebra headers.

## Decisão
Política **única para as duas plataformas**:
- **Corpo (Inter):** `allowFontScaling` **ligado**, sem teto (ou teto alto ~2×) —
  acessibilidade real.
- **Display (Barlow Condensed uppercase):** teto **1.3×**
  (`maxFontSizeMultiplier={1.3}` no RN).
- **Teste obrigatório a 1.3×** nas telas-chave (Login, Module Chooser, Hoje de
  cada módulo, um FullScreen de formulário): verificar truncamento e overflow.
- Manter a disciplina de fonte por peso (`Inter_700Bold` etc.) — nunca
  `fontWeight` + fonte custom, mesmo ao escalar.

## Consequências
- Corpo acessível; títulos preservam a assinatura "stamped metal" sem estourar.
- Um teto explícito (1.3) é escolha de acessibilidade **vs** layout.
  **Ratificado (default): teto 1.3× no display Barlow Condensed.** Delegado pelo
  owner em 2026-07-14; pode ser revisitado se um valor mais alto for exigido por
  acessibilidade.
- Vira item de checklist de QA de plataforma (guias iOS/Android).

## Alternativas consideradas
- **`allowFontScaling={false}` global:** rejeitado — ignora acessibilidade.
- **Sem teto no display:** rejeitado — headers de 1 linha viram 2–3 e estouram.
- **Tetos diferentes por plataforma:** rejeitado — mesma fonte, mesmo problema;
  regra única é mais simples e testável.
