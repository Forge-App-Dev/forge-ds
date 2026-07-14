# Guia de plataforma — iOS

> **OP:** OP-020, OP-184 · **Status:** Accepted · **Data:** 2026-07-14
> **Decisor:** Mobile Platform & Adaptive Specialist (persona)
> **Decisões formais associadas:** ADR-0020 (estratégia iOS), ADR-0023 (Dynamic Type / font scaling), ADR-0029 (som/áudio).

Guia curto, **decidido antes do primeiro build iOS** (o custo de fechar plataforma é
decisão, não código). O Forge é RN/Expo, nascido no Android; iOS é
estruturalmente suportado (mesmo código RN). Este doc registra **o que muda vs
Android** e **o que NÃO muda por decisão de identidade**.

Princípio-mãe: **consistência de família vence a convenção de plataforma** sempre
que o conflito for estético/de assinatura; **a convenção de plataforma vence**
quando for acessibilidade, gesto de sistema ou expectativa motora do usuário.

---

## 1. O que NÃO muda no iOS (identidade acima da convenção)

| Item | Decisão | Por quê |
|---|---|---|
| **Ícones** | Manter **Feather-style** (stroke 2px). **Não** usar SF Symbols. | Traço é assinatura da marca; SF Symbols quebraria a coesão com Android/PWA. |
| **Tipografia** | Barlow Condensed + Inter nas duas plataformas. Sem San Francisco. | Fonte é identidade. |
| **Cor / tema** | Grafite escuro + accent vermelho, dark-default, iguais. | Sem "modo iOS". |
| **FullScreen** | Continua `Modal animationType="slide"` com **✕ à esquerda**. **Não** vira sheet arrastável com grabber, **não** fecha por swipe-down. | Fluxos de edição com footer fixo (MealForm, WorkoutEditor) não podem fechar por gesto acidental e perder dados. **Conflito consciente com a HIG** — ver §4. |
| **Panel** | Idêntico ao Android: centralizado, scrim sólido `--forge-scrim`, tap-fora fecha. | Regra de decisão de overlay é do sistema, não da plataforma. |
| **Sem sombra / sem blur** | Profundidade por cor/borda; scrim sólido (sem frosted glass). Ver ADR-0028. | O `Modal` do Android já não desfoca; manter simetria evita divergência de família. |
| **Sem toast / sem bottom sheet / sem FAB** | Valem em iOS também. | Proibições de sistema. |

## 2. O que MUDA no iOS (respeitar a plataforma)

### 2.1 Safe areas
- iOS tem notch/Dynamic Island (topo) e home indicator (base). O padrão RN
  (`useSafeAreaInsets` / `SafeAreaProvider`) já cobre — **mas** a auditoria
  registrou que o **inset bottom está ausente** em `Screen`/`ScreenBody`/
  `ModuleTabBar`/footer de `FullScreen` (P-06, tabela §2.1). No iOS isso é
  visível: a tab bar cola no home indicator.
- **Decisão:** todo container de borda de tela consome `insets.bottom` (footer
  fixo, tab bar, botão persistente). É a mesma correção que o edge-to-edge do
  Android exige (ver `PLATFORM_ANDROID.md` §2) — resolver uma vez, para as duas
  plataformas.

### 2.2 Gesto de voltar (edge-swipe)
- iOS espera **swipe da borda esquerda = voltar** em navegação de pilha.
  **Decisão:** habilitar `gestureEnabled` na navegação de pilha (padrão do
  React Navigation no iOS) — é expectativa motora, a plataforma vence.
- **Exceção:** telas `FullScreen` com formulário sujo desabilitam o swipe-back
  (como desabilitam o swipe-down) e só saem pelo ✕ com guard `onBeforeClose`
  ("descartar alterações?"). Coerente com ADR-0021 (back do Android): o mesmo
  guard atende os dois gestos.

### 2.3 Haptics (o mapa canônico vive no ADR-0019)
Haptics são o **único** canal de feedback tátil/sonoro do sistema (não há sons
de UI — ver ADR-0029). O **mapa evento→feedback é definido no ADR-0019**
(haptics e gestos) — não redefinir aqui. Reproduzido para conveniência do build
iOS, alinhado ao ADR-0019 e usando `expo-haptics`:

| Evento | Feedback | API `expo-haptics` |
|---|---|---|
| Armar destrutivo (1º toque do `ConfirmButton`) | notificação de aviso | `notificationAsync(Warning)` |
| Confirmar destrutivo (2º toque) | impacto médio | `impactAsync(Medium)` |
| Concluir série / marcar check (`SetLogger`) | impacto leve | `impactAsync(Light)` |
| Recorde pessoal (`PRCelebration`) | notificação de sucesso | `notificationAsync(Success)` |
| Fim do descanso (`RestTimer`) | notificação de sucesso | `notificationAsync(Success)` *(complemento iOS/Android; ver ADR-0029)* |
| Erro de validação bloqueante | notificação de erro | `notificationAsync(Error)` |
| Toque comum (botão, pill, tab, scroll, aba) | **nenhum** | — |

Regra (do ADR-0019): haptic só em **eventos de significado** (conclusão, alerta,
marco), nunca em toque trivial. Respeitar o *Reduce Motion / system haptics off*
do usuário — se desligado no SO, o iOS já suprime; degradar em silêncio onde não
há motor.

### 2.4 Dynamic Type (escala de fonte) — ver ADR-0023
- **Corpo (Inter):** `allowFontScaling` **ligado**, sem teto (ou teto alto ~2×) —
  acessibilidade real.
- **Display (Barlow Condensed uppercase):** teto **1.3×**. Condensado em caixa
  alta quebra layout cedo (títulos de 1 linha viram 2–3, estouram headers).
- Testar telas-chave a **1.3×** (a mesma bateria do font scaling Android, OP-148).
- Regra idêntica nas duas plataformas → mora no ADR-0023, não se duplica aqui.

## 3. Ícone de app, splash e boot
- Splash screen do iOS usa a **mesma composição do LoadingScreen** (mark
  centralizado sobre `--forge-bg`) — ver ADR-0030. Handoff `expo-splash-screen`
  → LoadingScreen (Ring) sem flash nem salto de posição do mark.
- Mark precisa existir em resolução densa (Retina @2x/@3x ou SVG) — ver ADR-0031.

## 4. Conflito documentado com a HIG (e por que aceitamos)
A HIG recomenda que sheets modais possam ser **dispensadas por arrasto** e usem
grabber. O Forge **recusa** isso para `FullScreen` porque são fluxos de
construção/edição longos com footer de ação: fechar por gesto acidental =
perda de trabalho não confirmada, o que viola a filosofia "destrutivo nunca em
1 toque / sem 1 gesto". Trade-off aceito: usuário de iOS não terá o swipe-down
de dispensa nesses fluxos; terá ✕ explícito + guard de descarte. `Panel`
(interações curtas, sem estado a perder) **poderia** ganhar swipe-down no
futuro — registrado como possível, não implementado, **pendente de ratificação
do owner**.

## 5. Checklist antes do primeiro build iOS
- [ ] `insets.bottom` aplicado em tab bar, footers e botões persistentes.
- [ ] `gestureEnabled` na pilha; desabilitado em FullScreen com guard.
- [ ] `expo-haptics` cabeado ao mapa da §2.3.
- [ ] Teto 1.3× no display; teste a 1.3× nas telas-chave.
- [ ] Splash = composição do LoadingScreen; mark em densidade Retina/SVG.
- [ ] Feather mantido; nenhum SF Symbol introduzido.
