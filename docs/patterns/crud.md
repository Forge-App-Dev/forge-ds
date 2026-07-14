# CRUD — criar / editar / excluir

Fecha **OP-080**. Fluxo canônico que amarra overlays e confirmação. Componentes: `overlays/panel`, `overlays/full-screen`, `core/Button`, `core/ConfirmButton`. Base: ADR-0013 (árvore de confirmações), ADR-0006 (sem swipe destrutivo), ADR-0021 (back Android + guard de form sujo), ADR-0012 (sucesso sem toast).

## Qual overlay — escolha pelo tamanho do fluxo

Regra do `readme.md` (§Overlays) e `when-to-use-template.md`:

- **`Panel`** — escolha padrão e mais leve: escolha rápida, confirmação, formulário **curto**. Na dúvida, Panel.
- **`FullScreen`** — fluxo **longo / multi-seção**: criar/editar um treino, uma refeição, um exercício. Tem header (✕ à esquerda, título Barlow, ação opcional à direita) + corpo rolável + rodapé fixo opcional para o CTA.

## Criar / editar

- Abre em `Panel` (curto) ou `FullScreen` (longo). Um **único CTA primário** por overlay ("Salvar", "Criar") — ver `layout-rules.md`.
- Salvar: `Button` com `loading` → o fechamento do overlay **é** o sinal de sucesso (ADR-0012); não empilhe toast nem mensagem.
- **Form sujo:** fechar (✕, tap-fora no Panel, ou back do Android) com alterações não salvas passa pelo guard `onBeforeClose` → `Panel` "Descartar alterações?" (ADR-0021, `forms-behavior.md`). Nunca perde dado em 1 back/tap.

## Onde fica o "excluir"

- O excluir mora **dentro do fluxo de edição** daquele item — no rodapé do `FullScreen` de edição ou no fim do `Panel`, separado do CTA primário. **Não** numa linha de lista via swipe (proibido, ADR-0006) nem colado no botão de salvar.
- Sempre um controle **visível**, nunca gesto escondido.

## Confirmação de exclusão — por ADR-0013

Escolha o peso pela reversibilidade e alcance:

| Caso | Confirmação |
|---|---|
| Reversível (desmarcar série) | **Nenhuma** — undo inline se houver |
| Destrutivo local e contido (excluir 1 alimento avulso) | **`ConfirmButton`** (2 toques) |
| Destrutivo em cascata (excluir treino com histórico) | **`Panel` danger** listando o que some ("Isto também apaga 12 sessões registradas") |
| Irreversível de conta | `Panel` danger + reautenticação (ver `auth.md`) |

```jsx
<ConfirmButton onConfirm={remove}>Excluir alimento</ConfirmButton>       // contido
```

## A11y

Overlays: `role="dialog"` + `aria-modal`, título via `aria-labelledby`, foco preso, Escape/✕ fecha, foco volta ao gatilho. `ConfirmButton` anuncia o estado "armado". Ver "Diálogos e overlays" e "Botões e pressáveis" em `docs/accessibility-checklist.md`.
