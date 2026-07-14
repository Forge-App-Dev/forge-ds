// Forge Design System — default system copy (i18n / white-label seam).
//
// THIS IS THE SINGLE POINT OF INTERNATIONALIZATION (OP-010/188).
// Every pt-BR string that a component ships as a *default* (prop default or
// inline system label) lives here — nowhere else. Components import their
// default from this object instead of hard-coding the literal, so that:
//   • a white-label / sibling app (e.g. "Fuel") can swap the whole copy layer
//     by providing its own `content` object, without forking components;
//   • a future i18n runtime can select a locale bundle here, once, instead of
//     hunting literals across the tree;
//   • props still override per call site — this only relocates the DEFAULT.
//
// INVARIANT: the strings below must stay BYTE-IDENTICAL to the literals they
// replaced. This module changes WHERE the default lives, never WHAT renders.
// Adding a locale later means adding sibling bundles + a selector — not editing
// these values. Brand names (wordmarks, mark images) are NOT copy: they travel
// through component props (AppHeader `brand`, LoadingScreen `markSrc`) — see
// docs/white-label.md.
//
// Keys are grouped by component. Values are strings, or functions where the
// original literal was a template (so the interpolation stays identical).

export const content = {
  loadingScreen: {
    // feedback/loading-screen/LoadingScreen.jsx — status caption under the mark.
    message: "carregando…",
  },

  errorState: {
    // feedback/ErrorState.jsx — no-blame failure copy + retry action label.
    title: "Algo não carregou",
    subtitle: "Verifique a conexão e tente de novo.",
    retryLabel: "Tentar de novo",
  },

  confirmButton: {
    // core/ConfirmButton.jsx — 2-tap destructive action.
    title: "Excluir",
    confirmTitle: "Confirmar?",
    // sr-only aria-live announcement while the confirm window is armed.
    armedHint: "Toque de novo para confirmar a exclusão",
  },

  pager: {
    // onboarding/Pager.jsx — carousel navigation labels.
    skipLabel: "Pular",
    nextLabel: "Próximo",
    doneLabel: "Começar",
  },

  offlineBanner: {
    // product/OfflineBanner.jsx — persistent offline/sync copy (on-voice, "você").
    message:
      "Você está offline. Suas alterações ficam salvas e sincronizam quando a conexão voltar.",
  },

  restTimer: {
    // product/RestTimer.jsx — rest-countdown labels (all copy is inline here,
    // the component has no string prop defaults).
    statusResting: "Descanso",
    statusDone: "Pronto",
    addTime: "Adicionar 15 segundos",
    restart: "Reiniciar descanso",
    pause: "Pausar",
    resume: "Retomar",
    skip: "Pular descanso",
    // Ring accessible label — template kept identical (mm:ss injected).
    ringLabel: (time) => `Descanso: ${time} restantes`,
  },
};
