# Guia de plataforma — Android

> **OP:** OP-145 (botão voltar), OP-147 (edge-to-edge), OP-148 (font scaling), OP-152 (teclado)
> **Status:** Accepted · **Data:** 2026-07-14
> **Decisor:** Mobile Platform & Adaptive Specialist (persona)
> **Decisões formais associadas:** ADR-0021 (back button), ADR-0022 (edge-to-edge), ADR-0023 (font scaling), ADR-0024 (teclado).

O Forge **nasceu no Android** (RN/Expo). Este guia fecha as quatro decisões de
plataforma Android que a auditoria apontou como indefinidas.

---

## 1. Botão / gesto "voltar" — mapa por contexto (OP-145 · ADR-0021)

O Android tem back de sistema (botão de 3 botões **ou** gesto de borda no modo
gestual). Hoje o comportamento é indefinido. **Mapa canônico:**

| Contexto atual | `onBack` faz | Observação |
|---|---|---|
| **FullScreen** aberto | Fecha o FullScreen, passando pelo guard `onBeforeClose` | Se há formulário sujo → Panel "descartar alterações?". Nunca perde dados em 1 back. Mesmo guard do swipe iOS. |
| **Panel** aberto | Fecha o Panel (equivale a tap-fora) | Panel não guarda estado a perder. |
| **VideoModal** aberto | Fecha o vídeo | — |
| Tela secundária numa **pilha** de módulo | Volta 1 nível na pilha | React Navigation padrão. |
| Aba não-inicial dentro de um módulo | Volta para a **primeira aba** do módulo | Não sai do app. |
| **Primeira aba** do módulo (não é a raiz) | Volta para o **Module Chooser** (raiz) | "Voltar aos módulos". |
| **Raiz** (Module Chooser / Login) | **Sai do app** (comportamento padrão do SO) | **Sem** "toque de novo para sair" — ver escalação. |

Regra de ouro: **um back = um nível de reversão previsível**, e back nunca
executa ação destrutiva sem passar pelo guard. Implementar via
`BackHandler` (Android) + `beforeRemove` do React Navigation, centralizado —
não espalhar `BackHandler` por tela.

## 2. Edge-to-edge — Android 15+ (OP-147 · ADR-0022)

Android 15 (API 35) **força** edge-to-edge para apps que targetam API 35: o
conteúdo desenha sob as barras de status e navegação. **Decisão: adotar
edge-to-edge como obrigatório em todos os targets novos.**

- **Barras transparentes** sobre o `--forge-bg` grafite (status bar e navigation
  bar transparentes; ícones das barras em modo *light* porque o fundo é escuro).
- Habilitar via `react-native-edge-to-edge` / config do Expo
  (`edgeToEdgeEnabled`) + `SystemBars` transparente.
- **Insets são obrigatórios**, não opcionais: todo conteúdo de borda consome
  `useSafeAreaInsets`. Pontos que a auditoria marcou como faltando o inset
  bottom (P-06): `Screen`, `ScreenBody`, `ModuleTabBar`, footer do `FullScreen`.
  Sem isso, no edge-to-edge a tab bar fica **atrás** da barra de navegação
  gestual. É a mesma correção do home indicator do iOS — feita uma vez, serve às
  duas plataformas.
- **Não** pintar barras com cor sólida diferente do bg; **não** desativar
  edge-to-edge com `windowOptOutEdgeToEdgeEnforcement` (dívida técnica, quebra em
  targets futuros).

## 3. Escala de fonte do sistema (OP-148 · ADR-0023)

Android tem *Font size* (fontScale) nas configurações de acessibilidade —
independente do zoom de display. **Política idêntica ao Dynamic Type do iOS**
(por isso mora no ADR-0023, não se duplica):
- **Corpo (Inter):** acompanha o fontScale (sem teto, ou teto alto).
- **Display (Barlow Condensed uppercase):** teto **1.3×** (condensado em caixa
  alta estoura headers de 1 linha).
- **Teste obrigatório a 1.3×** nas telas-chave (Login, Module Chooser, Hoje de
  cada módulo, um FullScreen de formulário). Verificar truncamento e overflow.
- Lembrete da armadilha do repo (§6 do doc RN): peso é família própria
  (`Inter_700Bold`), **nunca** `fontWeight` + fonte custom — vale ao escalar
  também.

## 4. Teclado (OP-152 · ADR-0024)

Portar para guia geral as regras que hoje só vivem no doc RN §4.3:
- `app.json` → `android.softwareKeyboardLayoutMode: "resize"` (o conteúdo
  encolhe; o footer de ação sobe acima do teclado).
- `KeyboardAvoidingView` com `behavior` por plataforma: `height` no Android,
  `padding` no iOS.
- `Panel` limita `maxHeight` relativo à tela (≤80%) para o conteúdo subir acima
  do teclado.
- **Teclado certo por campo** (OP-142): campos numéricos (peso, reps, kcal, qtd)
  abrem teclado decimal — `keyboardType="decimal-pad"` (RN) / `inputmode="decimal"`
  (web kit). `enterKeyHint`/`returnKeyType` coerente com o fluxo
  (`next` entre campos, `done`/`go` no último). Ver também `QtyInput` e a
  normalização de vírgula pt-BR (OP-116/P-29).
- Foco: em FullScreen de formulário, ordem campo→campo→footer (OP-144); ao
  submeter com erro, focar o primeiro campo inválido (OP-061).

## 5. Notas herdadas (já no doc RN, reafirmadas)
- `Modal` do Android **não desfoca** o fundo → scrim sólido `--forge-scrim`.
  É decisão, não bug (ver readme e ADR-0028). Não "consertar" para blur.
- Vídeo YouTube: usar `react-native-youtube-iframe` (iframe cru → Erro 152/153).

## 6. Checklist Android
- [ ] Back handler central com o mapa da §1 + `beforeRemove` guard.
- [ ] Edge-to-edge ligado; barras transparentes; insets bottom em tab bar/footers.
- [ ] Teto 1.3× no display; teste a 1.3×.
- [ ] `softwareKeyboardLayoutMode: resize`; teclado decimal nos numéricos.
