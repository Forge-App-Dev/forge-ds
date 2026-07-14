Circular user image with initials fallback (Barlow). Shows `src`; on a missing or broken image falls back to up-to-two initials from `name`.

```jsx
<Avatar src="/u/mateus.jpg" name="Mateus Utz" />
<Avatar name="Ana Paula" size="lg" />           {/* initials "AP" */}
<Avatar name="Mateus" alt="" />                  {/* decorative, name shown elsewhere */}
```

## Quando usar

- Foto de perfil de usuário com fallback confiável de iniciais.
- Identidade compacta numa linha de lista, header de perfil ou comentário.

## Quando NÃO usar

- Um ícone genérico de ação/navegação.
- Uma imagem de conteúdo grande (thumbnail de mídia).

## Em vez disso use

- Ícone de sistema → **`Icon`**.
- Chip de ícone de atalho → **`QuickAction`**.

## Acessibilidade

Ver regras transversais + "Ícones" do checklist.

- **Papel / leitor de tela:** `img` com nome; o fallback de iniciais também expõe `role="img"` + `aria-label`. Anuncia "imagem".
- **Nome acessível:** `alt` (ou `name` por padrão), em pt-BR; passe `alt=""` só quando o nome já está visível ao lado (então é decorativo).
- **Contraste:** iniciais em `--forge-text` sobre `--forge-surface-raised` ≥ 4.5:1.
- **Observações:** círculo por `--forge-radius-pill`; não depende de cor para transmitir identidade.
