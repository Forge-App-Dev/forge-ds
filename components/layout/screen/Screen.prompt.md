Isolated screen wrapper for anything OUTSIDE the module shell (boot, login) — owns its own safe-area padding.

```jsx
<Screen><LoginScreen onLogin={signIn} /></Screen>
```

Fills the dynamic viewport (`100dvh` with a `100vh` fallback) and pads all four safe-area insets, including the bottom, so fixed content clears the home indicator (OP-113).

Inside a module (Treino/Nutrição/Perfil), use `ScreenBody` instead — `ModuleShell`/`AppHeader` already handle the safe area there.

## Quando usar

- Wrapper de uma tela FORA do shell de módulo (boot, login) — dona do próprio safe-area em todos os lados.

## Quando NÃO usar

- Uma tela dentro de um módulo (o shell já cuida do safe area).
- Um overlay/diálogo.

## Em vez disso use

- Tela dentro de módulo → **`ScreenBody`**.
- Overlay → **`Panel`** / **`FullScreen`**.

## Acessibilidade

Ver "Regras transversais" do checklist (contêiner de layout, sem papel próprio).

- **Papel / leitor de tela:** contêiner neutro (`<div>`), sem role — o conteúdo define a semântica.
- **Nome acessível:** não aplicável.
- **Valor / estado:** não aplicável.
- **Contraste:** fundo `--forge-bg`; o contraste é responsabilidade do conteúdo.
- **Foco / alvo:** não focável; rola na vertical (`overflowY:auto`).
- **Observações:** preenche `100dvh` com fallback `100vh` e aplica os 4 insets de safe-area, inclusive o inferior, para o conteúdo fixo limpar o home indicator (OP-113); centra a 480px sem scroll horizontal (ADR-0053).
