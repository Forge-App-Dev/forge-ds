# Biometria

Fecha **OP-065**. Relacionado: `auth.md` (sessão/login), ADR-0017/`permissions.md` (padrão de opt-in), ADR-0013 (nada de gate destrutivo).

## Regra de ouro: biometria é conveniência, não muro

Face ID / Touch ID / biometria do Android é um **gate opcional pós-login** que reabre o app mais rápido. Nunca é a única porta.

## Fluxo

1. **1º uso: nunca bloquear.** No primeiro acesso o usuário entra por email/senha ou Google (ver `auth.md`). Biometria **não** aparece como exigência antes de conhecer o produto.
2. **Opt-in explícito.** Depois de logado, oferecer "Desbloquear com Face ID / digital?" como preferência — padrão **desligado**. Segue o espírito de priming (`permissions.md`): explicar o valor antes do prompt do SO.
3. **Gate na reabertura.** Com a opção ligada, ao reabrir o app peça a biometria antes de revelar dados.

## Fallback obrigatório

- Sempre há um **fallback para o PIN/senha/padrão do SO** — usar o prompt nativo, que já oferece "usar senha" quando a biometria falha. Nunca implemente um teclado de PIN próprio.
- Falha ou indisponibilidade da biometria (sem hardware, sensor sujo, N tentativas) **cai no login normal** (`auth.md`), nunca num beco sem saída.
- Se o dispositivo não tem biometria, a opção simplesmente **não aparece** — degradar em silêncio, como haptics em aparelho sem motor (ADR-0019).

## Não faça

- **Não** trave o 1º uso atrás de biometria.
- **Não** use biometria como confirmação de ação destrutiva — isso é a árvore de ADR-0013 (`ConfirmButton`/`Panel`). Biometria protege *acesso*, não substitui *intenção*.
- **Não** guarde credencial biométrica você mesmo — delegue ao SO/keychain.

## Copy

Voz da marca, sem tecnês: "Desbloquear com Face ID" / "Usar senha". Erro calmo: "Não reconhecemos. Tenta de novo ou usa sua senha." (`content-guide.md`).

## A11y

Confie no prompt nativo (já acessível). A tela de opt-in é conteúdo normal: `Switch` rotulado, alvo ≥44px. Ver `docs/accessibility-checklist.md`.
