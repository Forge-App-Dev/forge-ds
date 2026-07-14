Single expandable disclosure item — a header button with a ▾ chevron over collapsible content. Uncontrolled by default; give a unique `idBase` per instance.

```jsx
<Accordion title="Como registrar uma série?" idBase="faq-1">
  <Text as="p">Toque em registrar e informe carga e repetições.</Text>
</Accordion>

{/* controlled */}
<Accordion title="Detalhes" idBase="det" open={open} onToggle={setOpen}>
  ...
</Accordion>
```

## Quando usar

- Esconder detalhe secundário até o usuário pedir (FAQ, "ver mais").
- Empilhar várias seções expansíveis numa lista.

## Quando NÃO usar

- Alternar entre visões irmãs no mesmo nível (é troca de aba, não de expandir).
- Conteúdo essencial que precisa estar sempre visível.
- Uma escolha/confirmação em sobreposição.

## Em vez disso use

- Alternar visões → **`Tabs`**.
- Escolha/confirmação em overlay → **`Panel`**.

## Acessibilidade

Ver regras transversais do checklist.

- **Papel / leitor de tela:** o cabeçalho é um `button` com `aria-expanded`; a região expõe `role="region"` + `aria-labelledby` no cabeçalho e `aria-controls` liga os dois.
- **Nome acessível:** vem de `title` (pt-BR), sem repetir o papel.
- **Valor / estado:** `aria-expanded` reflete aberto/fechado; a chevron é decorativa (`aria-hidden`).
- **Foco / alvo:** cabeçalho ≥ 44px; foco visível via `forge-focusable`.
- **Observações:** a animação de altura/chevron usa duração de token e é desligada sob `prefers-reduced-motion`.
