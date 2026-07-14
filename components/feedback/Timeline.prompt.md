Vertical history of events/sessions — marker + connecting line + content per item. Renders a semantic ordered list (`<ol>`/`<li>`); the marker line is decorative. The line is drawn between markers and omitted after the last item.

```jsx
<Timeline
  items={[
    { title: "Treino de peito", time: "hoje", description: "6 exercícios · 45 min", icon: "dumbbell", done: true },
    { title: "Corrida leve", time: "ontem", description: "5 km", icon: "flame", done: true },
    { title: "Descanso", time: "seg 13/07", description: "Recuperação também é treino." },
  ]}
/>
```

## Quando usar

- Histórico vertical de sessões/eventos em ordem (feed de atividade, log de treinos, pesagens).
- Sequência de marcos com marcador + conteúdo por item.

## Quando NÃO usar

- Lista simples de opções tocáveis sem eixo temporal → é lista de itens, não linha do tempo.
- Série numérica que pede um gráfico.
- Dados tabulares (ADR-0009 — sem data-table).

## Em vez disso use

- Linha tocável de configuração/seleção → **`ListItem`**.
- Tendência de um valor no tempo → **`MiniChart`**.
- Estado vazio de histórico → **`EmptyState`**.

## Acessibilidade

Ver "Regras transversais" do checklist.

- **Papel / leitor de tela:** lista ordenada nativa (`<ol>`/`<li>`) — anuncia "lista, N itens" e cada evento como item; o marcador/linha são `aria-hidden`.
- **Nome acessível:** o texto de cada item (título + hora + descrição) é lido diretamente; nada de significado só no marcador.
- **Contraste:** título em `--forge-text`, hora em `--forge-text-faint` (piso de informação), descrição em `--forge-text-dim` — todos passam 4.5:1.
- **Foco / alvo:** o componente é apresentacional; se um item for tornado clicável, embrulhar num alvo ≥44px focável.
- **Observações:** ícone/cor do marcador acompanham o texto (cor não é o único meio); marcador `done={false}` fica vazado, além da cor.
