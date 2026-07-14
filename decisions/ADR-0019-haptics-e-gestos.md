# ADR-0019: Haptics e gestos — mapa de feedback tátil e gestos permitidos/proibidos
**Status:** Accepted · **Data:** 2026-07-14 · **Decisor:** Interaction & Component-Inventory Architect (persona) · **OP:** OP-077, OP-078

## Contexto
Sem regra, haptics viram ruído (vibra em tudo) e gestos viram inconsistência. O sistema precisa de um mapa evento→feedback e de uma lista fechada de gestos.

## Decisão
**Haptics — só em momentos que importam** (nunca em toque comum de botão):
| Evento | Feedback (Expo Haptics) |
|---|---|
| Armar destrutivo (`ConfirmButton`, 1º toque) | `warning` (notification) |
| Confirmar destrutivo (2º toque) | `impact medium` |
| Concluir série (`SetLogger`) | `impact light` (selection) |
| PR / conquista (`PRCelebration`) | `success` (notification) |
| Erro de validação bloqueante | `error` (notification) |

Regras: respeitar o ajuste de haptics do SO; nunca vibrar em scroll, navegação de aba ou toque de botão comum; degradar silenciosamente onde não há motor.

**Gestos — lista fechada.** Permitidos: **tap**, **scroll/rolagem**, **tap-fora fecha** (`Panel`, com exceção de formulário sujo — OP-141), **swipe horizontal do pager** de onboarding, **pull-to-refresh** onde habilitado (ADR-0014). **Proibidos:** swipe destrutivo (ADR-0006); **long-press como única forma** de acessar uma ação (só permitido se houver alternativa visível equivalente); pinch/zoom, gesto de 2+ dedos e gestos "secretos".

## Consequências
- Haptic ganha significado (o corpo aprende que vibrar = algo relevante).
- Gestos previsíveis e acessíveis; nada de ação escondida em gesto.

## Alternativas consideradas
- **Haptic em todo toque:** rejeitado — dessensibiliza e irrita.
- **Long-press para menu de contexto:** rejeitado como padrão único — usar controle visível ou `Panel`.
