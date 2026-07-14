# ADR-0017: Push notifications — anatomia, opt-in por priming e horários
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-075

## Contexto
Notificações são alavanca de retenção, mas mal calibradas viram desinstalação. Precisam falar na voz da marca e nunca surpreender o usuário com o diálogo de permissão do SO.

## Decisão
- **Opt-in:** nunca pedir permissão de cara. Tela de **priming** própria (OP-063) explica o valor **antes** do diálogo do SO; recusa não bloqueia o uso.
- **Anatomia:** título curto e direto (voz Forge, imperativo encorajador — "Bora treinar peito hoje"); corpo em 1 linha na voz da marca, sem culpa; deep link para a tela relevante (ADR-0016). Ícone = marca.
- **Categorias:** lembrete de treino, lembrete de refeição/água, celebração de PR/streak. Cada categoria é desativável individualmente nas preferências.
- **Frequência:** teto de ~1–2/dia por padrão; sem notificação madrugada; respeitar fuso local.

## Consequências
- Permissão pedida no momento de maior intenção → taxa de opt-in melhor.
- Voz consistente reforça a marca a cada notificação.

## Alternativas consideradas
- **Diálogo do SO no primeiro boot:** rejeitado — queima a permissão.
- **Notificações genéricas do sistema:** rejeitado — perdem a voz e a marca.

## Pendente de ratificação do owner
Horários exatos, cadência por categoria e copy final são **escolha de produto** — recomendo fortemente o padrão acima (1–2/dia, opt-in por priming, sem madrugada) como default até o owner (Mateus) ratificar ou ajustar.
