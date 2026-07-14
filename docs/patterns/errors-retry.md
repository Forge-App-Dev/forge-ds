# Erros e retry

Fecha **OP-066**. Componentes: `forms/TextField` (erro de campo), `feedback/InlineAlert`, `feedback/ErrorState`, `product/OfflineBanner`. Base: ADR-0002 (feedback inline, sem toast), ADR-0056/`content-guide.md` (copy).

## Hierarquia — escolha pelo alcance do erro

Três níveis, do mais local ao mais amplo. Use **sempre o mais local que couber**.

| Alcance | Componente | Papel a11y | Quando |
|---|---|---|---|
| Um campo | `TextField` prop `error` | `role="alert"` | Valor inválido num campo (ver `validation.md`) |
| Uma seção / ação | `InlineAlert` (`kind="danger"`/`warning`) | — | Uma parte da tela falhou, mas o resto funciona; aviso não-bloqueante |
| A tela inteira | `ErrorState` | `role="alert"` | A tela/seção não conseguiu montar (rede, carga) — não há conteúdo |
| Estado de sistema | `OfflineBanner` | `role="status"` | Offline/sync — persistente, não é "erro" pontual (ver `offline-sync.md`) |

```jsx
// seção falhou, resto da tela ok
<InlineAlert kind="danger" title="Não foi possível carregar seus PRs.">
  <Button variant="secondary" size="sm" onClick={reload}>Tentar de novo</Button>
</InlineAlert>

// tela inteira sem conteúdo
<ErrorState title="Não foi possível carregar" onRetry={reload} />
<ErrorState compact title="Não foi possível sincronizar" onRetry={sync} />  // versão em linha
```

## Regra 1 — sempre uma ação

Todo erro oferece um **caminho adiante**. `ErrorState` só renderiza o botão de retry quando recebe `onRetry` — então sempre passe um. `InlineAlert` recebe a ação no slot de conteúdo. Nunca um beco sem saída ("Erro." e nada mais).

## Regra 2 — copy sem culpa e sem código

Ver `content-guide.md`. Nunca expor stack/erro técnico bruto nem culpar o usuário. Voz de coach, pt-BR, "você":

- Bom: "Não foi possível sincronizar. Suas alterações estão salvas — toque para tentar de novo."
- Ruim: "Error 500: sync failed" / "Você não tem conexão."

## Não use

- **Toast/snackbar** — não existe (ADR-0002).
- `ErrorState` para lista vazia legítima ou dia de descanso → é `EmptyState` (reenquadra positivo), não erro.
- `ErrorState` para offline → é `OfflineBanner` (estado persistente de sistema).
