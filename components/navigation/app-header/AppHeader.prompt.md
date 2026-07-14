Global fixed header used on every screen — brand mark + "Forge" wordmark (accent "F") on the left, contextual icon actions on the right.

```jsx
<AppHeader brand={{ name: "Forge", markSrc: "assets/forge-mark.png" }} inModule onBackToModules={goHome} onLogout={logout} />
```

Each sibling app in the family swaps only `brand` (name + mark) and keeps this exact structure (OP-120). `name` defaults to "Forge" (first letter in accent); the legacy `markSrc` prop still works as a shorthand for `brand.markSrc`.

## Quando usar

- Cabeçalho global fixo em toda tela: marca + wordmark à esquerda, ações de ícone contextuais à direita.
- Apps irmãos da família trocam só `brand` (nome + mark) e mantêm a estrutura (OP-120).

## Quando NÃO usar

- Título de uma tela dentro de um módulo (eyebrow + título grande).
- Navegação entre abas de um módulo.

## Em vez disso use

- Título de tela → **`ModuleHeader`**.
- Navegação por abas do módulo → **`ModuleTabBar`**.

## Acessibilidade

Ver "Navegação" do checklist.

- **Papel / leitor de tela:** dentro de um módulo, a marca é um `<button>` "Voltar aos módulos"; fora de módulo, a marca é uma `<div>` (não button — OP-120).
- **Nome acessível:** cada botão de ícone tem `aria-label` em pt-BR ("Voltar aos módulos", "Sair da conta"); a imagem da marca é decorativa (`alt=""`), o wordmark textual carrega o nome.
- **Valor / estado:** as ações são disparos simples, sem estado selecionável.
- **Contraste:** wordmark `--forge-text` com a inicial em `--forge-accent`; ícones ≥3:1.
- **Foco / alvo:** botões de ícone `forge-focusable`, 44×44px.
- **Observações:** a cor de acento na inicial não é o único sinal — o nome textual completo acompanha.
