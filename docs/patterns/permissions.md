# Permissões (priming)

Fecha **OP-063**. Já **decidido** em ADR-0017 (push, §opt-in) — este doc generaliza o padrão de priming para qualquer permissão do SO. Componentes para montar a tela: `overlays/full-screen` ou `overlays/panel`, `core/Button`, `feedback/EmptyState`/ilustração.

## Regra

**Nunca dispare o diálogo de permissão do SO de cara.** Antes dele vem uma **tela de priming** própria, na voz da marca, que explica o *valor* da permissão. Isso vale para push (ADR-0017), câmera, galeria, e qualquer outra permissão.

```
[ tela de priming — nossa UI ]
   ícone/ilustração + título + 1 frase de valor
   [ Ativar ]  (primário)   → só então dispara o diálogo do SO
   [ Agora não ] (ghost)    → fecha, NÃO bloqueia o uso
        ↓ (usuário tocou Ativar)
[ diálogo nativo do SO ]  ← só aparece depois do nosso priming
```

## Por que

O diálogo do SO só pode ser pedido **uma vez** de forma limpa; se o usuário nega ali, recuperar exige mandá-lo às Configurações do sistema. O priming qualifica o pedido: quem chega no diálogo do SO já entendeu o porquê e tende a aceitar. Recusa no priming não gasta o pedido do SO.

## Copy

Voz de coach, foco no benefício pro usuário, sem chantagem (`content-guide.md`):

- Bom: "Quer um empurrãozinho nos dias de treino? A gente te lembra na hora certa." → **Ativar** / **Agora não**
- Ruim: "Ative as notificações para não perder nada!" (genérico, ansioso).

## Regras firmes

- **Recusa nunca bloqueia o app.** "Agora não" fecha e segue. Nada de tela-refém.
- **Não repita à exaustão.** Se recusou, espere um gatilho de valor claro (ex.: acabou de configurar um programa) para reabrir — no máximo com parcimônia.
- **Se o SO já negou** e a feature depende disso, mostre um `InlineAlert` calmo com link pras Configurações — nunca um diálogo insistente.
- Frequência e categorias de push seguem ADR-0017 (teto ~1–2/dia, cada categoria desativável).

## A11y

A tela de priming é conteúdo normal: título como heading, botões `forge-focusable` com alvo ≥44px, contraste dos tokens. Ver `docs/accessibility-checklist.md`.
