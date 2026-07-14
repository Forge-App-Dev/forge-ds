Discreet outlined button placed in a FullScreen's header, opposite the close button.

```jsx
<HeaderAction title="Replicar" onClick={duplicate} />
```

## Quando usar

- Ação discreta e compacta no header de um FullScreen (ex.: "Replicar"), oposta ao botão de fechar.
- Nota: componente DEPRECADO (OP-006) — é só um atalho para `Button variant="secondary" size="sm"`.

## Quando NÃO usar

- Código novo — prefira o Button diretamente.
- A ação primária de uma tela ou o CTA de um rodapé.

## Em vez disso use

- Sempre → **`Button variant="secondary" size="sm"`** (o que este componente já renderiza por baixo).
- Ação primária → **`Button`** (primary).

## Acessibilidade

Herda tudo de **`Button`** — ver "Botões e pressáveis" do checklist.

- **Papel / leitor de tela:** `<button>` — anuncia "botão" + nome.
- **Nome acessível:** vem do `title` em pt-BR.
- **Valor / estado:** repassa `disabled`/`loading` ao Button.
- **Contraste:** variante `secondary` (outline) — texto `--forge-text-muted` e borda ≥3:1.
- **Foco / alvo:** `forge-focusable`; tamanho `sm` (36px) por ser ação inline de header ao lado de alvos maiores.
- **Observações:** sem estado próprio; toda a a11y é a do Button.
