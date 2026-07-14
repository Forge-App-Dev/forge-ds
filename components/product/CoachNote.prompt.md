The coach's voice as a component — a tinted icon plus a contextual, encouraging line (the content-guide voice turned into UI). A product component embodying the brand's coach persona. Deliberately not an InlineAlert: no role/live region — it's ambient encouragement, not a status or warning.

```jsx
<CoachNote>Bom ritmo esta semana. Mantém a constância que o resto vem.</CoachNote>
```

Segue `docs/content-guide.md`: português "você", sentence case, caloroso, sem emoji (só a linha Feather).

## Quando usar

- Uma frase de incentivo contextual do coach (pós-treino, meta batida, retomada de sequência).
- Dar tom humano a uma tela sem virar aviso de sistema.

## Quando NÃO usar

- Aviso, erro ou alerta acionável → tem semântica de status, não é encorajamento.
- Estado de sistema persistente (offline/sync).
- Instrução obrigatória ou de segurança (que exige leitura garantida).

## Em vez disso use

- Aviso/lembrete/erro de seção → **`InlineAlert`** (com `role` de status/alerta).
- Estado offline/sync → **`OfflineBanner`**.
- Conquista/recorde com motion → **`PRCelebration`**.

## Acessibilidade

Ver "Regras transversais" + "Ícones" do checklist.

- **Papel / leitor de tela:** conteúdo de texto comum (`<p>`), sem live region — é ambiente, não deve interromper nem ser anunciado como status.
- **Nome acessível:** a própria frase; o ícone é decorativo (`aria-hidden`), não é a única fonte de significado.
- **Contraste:** texto em `--forge-text` sobre o fundo `color-mix` tenue; fundo/borda derivam do accent via `color-mix` sobre a superfície do tema dark.
- **Foco / alvo:** não é interativo (sem foco/alvo).
- **Observações:** manter a copy on-voice; nunca usar como canal de erro/aviso (aí é `InlineAlert`).
