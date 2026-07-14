Onboarding carousel — one slide at a time, with the rules baked in: max 3 slides, "Pular" always visible until the last, single primary CTA on the last slide. Uncontrolled; ←/→ navigate.

```jsx
<Pager
  pages={[<Slide1 />, <Slide2 />, <Slide3 />]}
  onSkip={finish}
  onDone={finish}
  doneLabel="Começar"
/>
```

## Quando usar

- Introdução/onboarding curto (até 3 telas) com "Pular" e CTA final.
- Qualquer carrossel de poucos passos onde o usuário nunca deve ficar preso.

## Quando NÃO usar

- Um fluxo de formulário multi-etapa com validação e rodapé de ações.
- Navegação principal entre seções do app.
- Mais de 3 slides (dispara aviso em dev — OP-062).

## Em vez disso use

- Fluxo longo com rodapé fixo → **`FullScreen`**.
- Navegação entre módulos → **`ModuleTabBar`**.
- Só o indicador de posição → **`PageDots`**.

## Acessibilidade

Ver "Navegação" + regras transversais do checklist.

- **Papel / leitor de tela:** `section` com `aria-roledescription="carrossel"` + `aria-label`; um `role="status"`/`aria-live="polite"` anuncia "slide X de N" na troca.
- **Nome acessível:** "Introdução" no contêiner; slides inativos ficam `aria-hidden` para o leitor ler só o atual.
- **Valor / estado:** slide atual controla o CTA (Próximo vs. CTA final) e os PageDots; "Pular" sempre disponível até o fim, nunca prende o usuário.
- **Foco / alvo:** contêiner `forge-focusable` (recebe ←/→); botões ≥44px.
- **Observações:** o PageDots interno é decorativo — o anúncio de posição vem daqui, sem duplicar.
