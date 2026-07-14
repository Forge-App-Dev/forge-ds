# ADR-0054: Terminologia de leitor de tela (TalkBack / VoiceOver) em pt-BR
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Accessibility & Content Specialist (persona) · **OP:** OP-165

## Contexto
Sem glossário, cada componente arrisca anunciar papel/estado de forma inconsistente ou em inglês. TalkBack (Android) e VoiceOver (iOS) leem o **papel** (role) traduzido pelo SO + o **nome acessível** (que definimos) + o **estado/valor**. O nome nós escrevemos em pt-BR; o papel o SO fala — precisamos escolher o `role`/`accessibilityRole` certo para o SO falar a palavra certa ("botão", "guia", "caixa de diálogo").

## Decisão
Glossário canônico pt-BR de papel → como anunciar, por tipo de elemento. O **nome acessível** é sempre pt-BR, sentence case, sem o nome do papel embutido (não escrever "botão Salvar" no label — o SO já diz "botão").

| Elemento Forge | `role` / `accessibilityRole` | SO anuncia (pt-BR) | Nome acessível (exemplo) |
|---|---|---|---|
| Button, ConfirmButton, HeaderAction, QuickAction | `button` | "botão" | "Salvar", "Continuar treino" |
| Pill (filtro/toggle) | `button` + `aria-pressed`/`selected` | "botão", "selecionado/não selecionado" | "Peito" |
| ModuleTabBar item | `tab` (em `tablist`) | "guia", "selecionado" | "Treino, guia, selecionada, 1 de 3" |
| Panel / FullScreen / VideoModal | `dialog` + `aria-modal` | "caixa de diálogo" | via `aria-labelledby` do título |
| TextField, QtyInput, SearchField | `textbox` | "caixa de edição" | via `<label>` associada |
| Switch | `switch` | "alternar", "ativado/desativado" | "Notificações" |
| Stepper (+/−) | dois `button` | "botão" | "Diminuir reps" / "Aumentar reps" |
| Select | `button`/`combobox` | "menu suspenso" | "Unidade: gramas" |
| Ring / MacroMeter / MetaBar | `progressbar` + valuenow/min/max | "barra de progresso, 55 por cento" | "Proteína" |
| InlineAlert / erro de campo | `alert` (`role="alert"`) | anúncio imediato | texto do alerta |
| Spinner / LoadingScreen | `status` (`role="status"`) | anúncio educado | "Carregando" |
| StatBadge (tendência) | texto + `aria-label` | lê o rótulo | "Peso: 82,5 kg, queda de 0,5" |
| Icon decorativo | `aria-hidden="true"` | (silencioso) | — |
| Icon informativo | `img` + `title`/`aria-label` | "imagem" | "Recorde pessoal" |
| Card pressável | `button` (não "card") | "botão" | título do card |

Regras transversais:
- **Não** repetir o papel no nome ("botão Salvar" → só "Salvar"). O SO já fala o papel.
- Estado é `aria-*` (`aria-pressed`, `aria-selected`, `aria-invalid`, `aria-busy`, `aria-expanded`), nunca embutido no texto do label.
- Números com unidade são lidos por extenso quando ambíguos: preferir `aria-label="82,5 quilogramas"` sobre o "82,5kg" visual quando o leitor soletraria "kg" mal (ver ADR-0056 §unidades).
- Ícone é `aria-hidden` por padrão (OP-132); só ganha nome quando é a única fonte de significado.

## Consequências
- Vira a coluna "Leitor de tela" do `docs/accessibility-checklist.md` e a seção de a11y de cada `.prompt.md` (ADR-0055/framework OP-135).
- ModuleTabBar deve usar `tab`/`tablist` (cruza OP-121); Card pressável usa `button`, não role custom (cruza OP-107).

## Alternativas consideradas
- **Deixar o SO decidir sem glossário:** rejeitada — sem `role` explícito, `div`/`View` viram "grupo" ou nada; papel errado ou mudo.
- **Embutir o papel no label (pt-BR "botão X"):** rejeitada — dupla locução ("botão botão X"); anti-padrão de a11y.
