# Offline e sincronização

Fecha **OP-067**. Componente central: `product/OfflineBanner`. Também: `feedback/Ring`/`Spinner` (indicador de sync), `feedback/InlineAlert`. Base: ADR-0002 (estado de sistema é persistente, nunca toast), ADR-0012 (sucesso = transição no gatilho), ADR-0014 (pull-to-refresh só em dados remotos).

## Três peças

### 1. OfflineBanner — estado de sistema persistente

```jsx
<OfflineBanner actionLabel="Tentar de novo" onAction={retry} />
```

Banner inline, `role="status"` (região viva educada — não rouba foco), com copy default tranquilizadora ("Você está offline. Suas alterações ficam salvas e sincronizam quando a conexão voltar."). Fica **até a condição passar** — não pisca e some (por isso não é toast, ADR-0002). Colocar no topo do conteúdo da tela afetada.

### 2. UI otimista

A ação do usuário **aplica na hora, localmente**, sem esperar o servidor:

- registrar série, editar refeição, marcar concluído → refletem imediatamente na UI.
- o sucesso é a própria transição de estado do controle (ADR-0012) — nunca "salvando..." travando a tela.
- a sincronização acontece em segundo plano; a falha de rede não desfaz a ação local.

### 3. Indicador de sync

- Sync em andamento discreto (ex.: `Ring` indeterminado / `Spinner` pequeno na área relevante) — sem bloquear interação.
- Pull-to-refresh, quando existir, usa o `Ring` como indicador e **só** em telas de dado remoto (ADR-0014).

## Conflito: última escrita vence, com aviso

Quando a mesma entidade mudou local e remotamente:

- **Resolução: última escrita vence** (last-write-wins) — simples e previsível para um app single-user multi-dispositivo.
- **Sempre avisar** quando isso descartou algo: `InlineAlert` calmo ("Atualizamos com a versão mais recente deste treino."), nunca silencioso e nunca um diálogo de merge manual.
- Nada de perder trabalho sem o usuário saber.

## Copy

Tranquilizar, nunca alarmar (`content-guide.md`): a mensagem-chave é sempre "nada foi perdido, sincroniza sozinho". Evite jargão ("sem conectividade", "sync error").

## A11y

`OfflineBanner` já é `role="status"` com ícone `warn` acompanhando o texto (cor não é o único meio, ADR-0052). Ação de retry é `forge-focusable`, alvo ≥44px. Ver "Progresso e feedback" em `docs/accessibility-checklist.md`.
