# Autenticação

Fecha **OP-064**. Componentes: `forms/TextField`, `forms/PasswordField`, `core/Button`, `overlays/panel` (confirmações danger), `feedback/InlineAlert`, `feedback/ErrorState`. Base: ADR-0013 (árvore de confirmações), ADR-0016 (deep link → login → destino), ADR-0002 (feedback inline).

## Logout com estado limpo

- Logout **descarta todo estado de sessão em memória** (dados do usuário, caches de tela) e volta ao login. Nada de dado de um usuário vazar para a próxima sessão/conta.
- Logout **não** é destrutivo de dados (o dado remoto continua) → é reversível → **não exige `ConfirmButton`** (ADR-0013). Um toque no item "Sair" basta; no máximo um Panel leve se houver trabalho não sincronizado pendente (ver `offline-sync.md`).
- Ao voltar pro login, limpe campos sensíveis; não pré-preencha senha.

## Sessão expirada

- Quando o token expira, **não jogue o usuário na rua sem contexto**. Leve ao login preservando o destino (mesma regra de deep link não-autenticado, ADR-0016): após reautenticar, **volte à tela onde ele estava**.
- Sinalize com copy calma, sem culpa: "Sua sessão expirou. Entre de novo pra continuar." (`content-guide.md`).
- Trabalho local não sincronizado deve sobreviver à reautenticação sempre que possível — combine com o padrão otimista de `offline-sync.md`.

## Vínculo Google ↔ senha

- Uma **conta é identificada pelo email**. Se o usuário entrou por senha e depois usa "Entrar com Google" com o mesmo email (ou vice-versa), **vincule os métodos à mesma conta** — nunca crie uma conta duplicada silenciosa.
- Deixe o usuário ver e gerenciar métodos vinculados no perfil; permita adicionar senha a uma conta só-Google e vice-versa.
- Ao vincular, feedback inline de sucesso (transição do próprio controle, ADR-0012), não toast.

## Exclusão de conta

- É **irreversível e de conta** → topo da árvore de ADR-0013: **`Panel` danger + confirmação forte** (reautenticação/senha), listando explicitamente o que será perdido.
- O ponto de entrada fica no perfil, **fora** do alcance de toque acidental, separado das ações comuns.
- Copy sem ambiguidade: "Excluir conta?" + lista do que some ("Isto apaga seu histórico de treinos e não pode ser desfeito."). Botão destrutivo usa `Button variant="danger"`.
- Após excluir: sessão limpa (regra de logout) e volta ao login.

## Erros de auth

Erro de credencial → `error` no campo (ver `validation.md`); falha de rede na tela de login → `ErrorState`/`InlineAlert` com retry (ver `errors-retry.md`). Nunca revelar se foi o email ou a senha que errou (mensagem genérica de credencial).

## A11y

Campos com `autoComplete` correto (`email`, `current-password`, `new-password`, `one-time-code`), `enterKeyHint` coerente, foco no 1º campo inválido ao submeter (ADR-0024). Ver `docs/accessibility-checklist.md`.
