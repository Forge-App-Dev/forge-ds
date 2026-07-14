Body wrapper for a screen inside a module (Treino/Nutrição/Perfil) — standard 20px horizontal screen padding + 480px max-width centering + scroll.

```jsx
<ScreenBody>
  <ModuleHeader eyebrow="Terça" title="Hoje" />
  ...
</ScreenBody>
```

All 4 UI-kit screens (`TreinoHojeScreen`, `NutricaoHojeScreen`, …) use this exact padding pattern inline; prefer `ScreenBody` for anything new.

Pass `footer` for a pinned action bar at the bottom — the body scrolls while the footer stays put, with a hairline top border and safe-area-aware bottom padding (OP-114):

```jsx
<ScreenBody footer={<Button>Salvar treino</Button>}>
  <ModuleHeader eyebrow="Terça" title="Editar" />
  ...
</ScreenBody>
```

## Quando usar

- Corpo de uma tela DENTRO de um módulo (Treino/Nutrição/Perfil) — padding horizontal padrão + centragem a 480px + scroll.
- Passe `footer` para uma barra de ação fixa no rodapé (OP-114).

## Quando NÃO usar

- Uma tela fora do shell de módulo (boot/login), que precisa do próprio safe area.
- Um overlay/diálogo.

## Em vez disso use

- Tela fora do módulo → **`Screen`**.
- Overlay → **`Panel`** / **`FullScreen`**.

## Acessibilidade

Ver "Regras transversais" do checklist (contêiner de layout).

- **Papel / leitor de tela:** contêiner neutro (`<div>`), sem role.
- **Nome acessível:** não aplicável.
- **Valor / estado:** não aplicável.
- **Contraste:** responsabilidade do conteúdo; o rodapé usa `--forge-bg`.
- **Foco / alvo:** não focável; o corpo rola enquanto o `footer` fica fixo.
- **Observações:** o shell (AppHeader + ModuleTabBar) já cuida do safe area; o `footer` acrescenta borda superior fina e `safe-area-inset-bottom`; centra a 480px sem scroll horizontal (ADR-0053).
