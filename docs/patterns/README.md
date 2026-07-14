# Padrões de UX — Forge DS

Padrões de fluxo e regras de UI/UX que atravessam **vários** componentes. Cada doc é curto e prático: cruza os **ADRs** que já decidiram o assunto (não repete a decisão — aponta pra ela) e os **componentes reais** do repo que realizam o padrão.

Onde um tema já está 100% decidido num ADR, o doc aqui é só um mapa de aplicação — a fonte da decisão continua sendo o ADR.

Regras de escrita: voz e conteúdo seguem `docs/content-guide.md` (ADR-0056) e o `readme.md` (§Content fundamentals). A11y por componente segue `docs/accessibility-checklist.md` (ADR-0057).

## Padrões de fluxo (auditoria §7)

| Doc | Fecha | O que cobre |
|---|---|---|
| [validation.md](./validation.md) | OP-061 | Validação de formulário: erro inline, quando validar, foco no 1º erro, copy |
| [errors-retry.md](./errors-retry.md) | OP-066 | Hierarquia erro-de-campo → InlineAlert → ErrorState; sempre com ação |
| [search.md](./search.md) | OP-069 | SearchField + resultados + "nada encontrado" + estado inicial |
| [permissions.md](./permissions.md) | OP-063 | Priming: tela de valor **antes** do diálogo do SO |
| [auth.md](./auth.md) | OP-064 | Logout com estado limpo, sessão expirada, Google↔senha, exclusão de conta |
| [biometrics.md](./biometrics.md) | OP-065 | Gate opcional pós-login, fallback do SO, nunca bloquear 1º uso |
| [offline-sync.md](./offline-sync.md) | OP-067 | OfflineBanner + UI otimista + indicador de sync; conflito = última escrita vence |
| [crud.md](./crud.md) | OP-080 | Fluxo canônico criar/editar/excluir (overlay, onde fica excluir, confirmação) |

## Regras de UI/UX (auditoria §8.5)

| Doc | Fecha | O que cobre |
|---|---|---|
| [states-matrix.md](./states-matrix.md) | OP-137 | Matriz de estados por família (default/hover/press/focus/disabled/loading/error/empty) |
| [layout-rules.md](./layout-rules.md) | OP-139/140/143/144 | 1 CTA primário por tela; hierarquia de card; truncamento; ordem de foco |
| [forms-behavior.md](./forms-behavior.md) | OP-141/142 | Tap-fora + form sujo; teclado por tipo de campo |
| [motion-review.md](./motion-review.md) | OP-159 | Regra de motion como item de checklist de review |
| [performance.md](./performance.md) | OP-154/155/157/158 | Estilos estáticos içados, memo de listas, subset de fontes, SVG do mark |
| [edge-cases.md](./edge-cases.md) | OP-177 | Checklist de edge cases por componente (texto longo, 0 itens, número gigante, offline) |

## Ver também

- ADRs de interação: `decisions/` (0002, 0006, 0012–0021, 0024).
- Framework "Quando usar" por componente: `docs/when-to-use-template.md` (ADR-0057).
- Tokens de motion: `tokens/motion.css`.
