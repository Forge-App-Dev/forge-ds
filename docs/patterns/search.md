# Busca

Fecha **OP-069**. Componentes: `forms/SearchField`, `forms/ListItem` (resultados), `feedback/EmptyState`, `feedback/Skeleton`/`Spinner`. Filtros que acompanham a busca: ADR-0015 (`FilterChip` roláveis).

## Anatomia

```
SearchField                    ← topo da tela ou do Panel de busca
[ fileira de FilterChip ]      ← opcional, logo abaixo (ADR-0015)
—— resultados / estados ——
```

```jsx
<SearchField value={q} onChange={setQ} placeholder="Buscar exercício" onSubmit={run} />
```

`SearchField` já traz lupa, `type="search"`, botão limpar (✕) quando há texto, e `enterKeyHint="search"`.

## Os quatro estados

Toda busca tem exatamente estes estados — trate os quatro:

1. **Inicial (sem query)** — não mostre "nada encontrado". Mostre um `EmptyState` convidativo ou os itens recentes/sugeridos. Copy na voz da marca, nunca em branco.
   ```jsx
   <EmptyState icon="search" title="Busque um exercício" subtitle="Digite o nome pra encontrar na biblioteca." />
   ```
2. **Carregando** — `Skeleton` de linhas (preferido, mantém layout) ou `Spinner`. Não pisque a lista antiga.
3. **Com resultados** — lista de `ListItem`; exiba **contagem** ("12 resultados"), coerente com a regra de filtro visível de ADR-0015. Zero é informação: "0 resultados" nunca vira "—".
4. **Nada encontrado** — `EmptyState` específico do "nada encontrado", **ecoando o termo** e oferecendo saída:
   ```jsx
   <EmptyState icon="search" title={`Nada encontrado para "${q}"`} subtitle="Tente outro termo ou verifique a grafia." />
   ```

Distinção importante: "nada encontrado" (busca falhou por termo) é `EmptyState`, **não** `ErrorState`. `ErrorState` é só quando a busca **falhou tecnicamente** (rede) — aí com retry (ver `errors-retry.md`).

## Filtros

Quando a busca tem filtros, eles são a fileira rolável de `FilterChip` de ADR-0015: chip ativo visível, contagem no resultado, "Limpar" quando há ≥1 filtro ativo. Não esconda filtro atrás de ícone de funil como padrão primário.

## A11y

Ver "Campos de formulário" em `docs/accessibility-checklist.md`. `SearchField` já rotula o input via `aria-label` (o placeholder sozinho não conta como rótulo) e o botão limpar tem `aria-label="Limpar busca"`. Anuncie a contagem de resultados numa região `aria-live="polite"` quando a lista atualizar.
