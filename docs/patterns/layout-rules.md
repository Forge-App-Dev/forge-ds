# Regras de layout

Fecha **OP-139, OP-140, OP-143, OP-144**. Base: `readme.md` (§Visual foundations — coluna, cards, cantos), `components/core/Card`, `components/layout/screen`, `core/Button`.

## OP-139 — um CTA primário por tela

- **No máximo um `Button variant="primary"` visível por tela/overlay.** Ele carrega a ação principal daquele contexto. Tudo mais é `secondary` (contorno) ou `ghost` (texto).
- Duas ações "primárias" competindo diluem a hierarquia e a energia do acento (o sistema aposta tudo num acento só — `readme.md`).
- Em `FullScreen`, o CTA primário mora no rodapé fixo. Ação destrutiva no mesmo rodapé é `variant="danger"`, separada do primário (ver `crud.md`).

## OP-140 — hierarquia de card (stripe / tag)

- **Stripe (faixa de 4px à esquerda, `stripeColor`)** = "pertence a X": o acento de um treino, a cor de um módulo (`readme.md`). É um marcador de **origem**, não decoração — só use quando comunica pertencimento. O `Card` já implementa o stripe como filho flex (nunca `position:absolute` — pitfall do `readme.md`).
- **Tag / microlabel** (Barlow Condensed uppercase tracked) = categoria/status curto dentro do card. Um por card; não empilhe tags.
- Ordem de leitura do card: stripe (origem) → título → métrica/valor → meta/legenda. Um card = uma ideia.
- Sem sombra/elevação: profundidade vem de cor+borda (ADR-0001, ADR-0028).

## OP-143 — truncamento

- Texto que pode estourar usa **reticências em 1 linha** (`min-width:0` no flex + `text-overflow:ellipsis`) **ou** clamp de N linhas — nunca deixe quebrar o layout / empurrar o valor pra fora.
- **Nunca trunque o dado crítico** (o número, o valor). Trunque o rótulo/nome longo, preserve a métrica.
- Valor ausente é "—", zero é "0" — nunca corte por truncamento (`content-guide.md`).
- Ver `edge-cases.md` para "texto longo" e "número gigante".

## OP-144 — ordem de foco

- Ordem de foco = **ordem visual de leitura** (cima→baixo, começo→fim). Não deixe a ordem de foco divergir do DOM.
- Em formulário: campo → campo → rodapé/CTA (ADR-0024). Ao submeter com erro, foco vai ao 1º campo inválido (`validation.md`).
- Em overlay: foco entra no overlay ao abrir, fica **preso** dentro dele, e volta ao gatilho ao fechar (ver "Diálogos e overlays" no checklist).
- Nada acessível só por mouse/hover; nada de armadilha de foco fora de overlay.

## Estrutura de tela

Tudo numa coluna centrada **máx. 480px**, padding de tela 18–22px, gaps de lista 8–12px, alvo mínimo ~44px (`readme.md`). Telas grandes/tablet seguem `docs/platform/ADAPTIVE_SCREENS.md` (ADR-0025).
