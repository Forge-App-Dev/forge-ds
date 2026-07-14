# ADR-0081: Tokens de *fill* para contraste de marca (branco no vermelho/coral passa AA)
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Mateus (delegou ao conselho) · **Task:** T-25 · Substitui o brand-lock do ADR-0050

## Contexto
O botão primário e as chips ativas preenchem com o vermelho de marca `#EF4444`; o `danger` preenche com coral `#e36a5a`. O texto era **branco**, forçado por um "brand-lock" no `onColor()`. Medições WCAG:

- Branco sobre `#EF4444` = **3,8:1** → reprova AA para texto normal (piso 4,5:1). O rótulo do botão é bold 12,5–15px, ou seja **texto normal** (só ≥18,7px bold conta como "grande" a 3:1).
- Branco sobre `#e36a5a` = **3,2:1** → reprova.

Além disso, `accent` e `danger` têm **dois papéis opostos**: como TEXTO/borda sobre superfície escura precisam ser *claros* (`#EF4444` = 4,8:1 e `#e36a5a` = 5,1:1 como texto no dark — passam); como PREENCHIMENTO sob texto precisam ser *escuros* o bastante para o texto passar. Uma cor só não atende os dois papéis.

## Decisão
Adotar o padrão de **fill token** (como Material, Carbon e o Claude DS):

- `--forge-accent` (`#EF4444`) e `--forge-danger` (`#e36a5a`) permanecem para **texto, borda, anel de foco e marca**.
- Criam-se `--forge-accent-fill` (`#DC2626`, red-600) e `--forge-danger-fill` (`#c94b3b`, coral-600) para **superfícies preenchidas que carregam texto**: Button (primary/danger), Pill/FilterChip/SegmentedControl ativos, ConfirmButton armado.
- O texto permanece **branco** e agora passa **honestamente**: branco sobre `#DC2626` = **4,8:1** ✓ e sobre `#c94b3b` = **4,6:1** ✓.
- **Remove-se o brand-lock** do `onColor()` e sobe-se o piso padrão de **3:1 para 4,5:1** (texto normal); `size:"large"` mantém 3:1 para texto ≥18,7px bold. O `onColor()` passa a escolher o branco porque ele vence o contraste, não na marra.

## Consequências
- Preserva o vermelho de marca exato `#EF4444` **e** o branco-no-vermelho icônico, passando WCAG AA.
- Novo par de tokens a manter; consumidores de fill migram do accent para o accent-fill (feito nos 5 componentes).
- `onColor()` fica sem exceções — qualquer par que reprove o piso emite warning (base para o gate `check-oncolor.mjs`, T-26).

## Alternativas consideradas
- **Texto escuro sobre o vermelho atual** (sem fill token): passa AA (5,0:1) e é a menor mudança, mas troca o rótulo do CTA primário para quase-preto — perde a assinatura branco-no-vermelho de uma marca de treino. Rejeitada.
- **Manter branco como exceção documentada** (3,8:1): reprova AA no tamanho do rótulo; barra a 1.0/OSS e reaparece em auditoria. Rejeitada.
