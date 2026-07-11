/* @ds-bundle: {"format":4,"namespace":"ForgeDesignSystem_7731a5","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ConfirmButton","sourcePath":"components/core/ConfirmButton.jsx"},{"name":"HeaderAction","sourcePath":"components/core/HeaderAction.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"InlineAlert","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatBadge","sourcePath":"components/feedback/StatBadge.jsx"},{"name":"TargetsCard","sourcePath":"components/feedback/TargetsCard.jsx"},{"name":"LoadingScreen","sourcePath":"components/feedback/loading-screen/LoadingScreen.jsx"},{"name":"MacroMeter","sourcePath":"components/feedback/macro-meter/MacroMeter.jsx"},{"name":"MetaBar","sourcePath":"components/feedback/meta-bar/MetaBar.jsx"},{"name":"MiniChart","sourcePath":"components/feedback/mini-chart/MiniChart.jsx"},{"name":"Ring","sourcePath":"components/feedback/ring/Ring.jsx"},{"name":"QtyInput","sourcePath":"components/forms/QtyInput.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"ScreenBody","sourcePath":"components/layout/screen-body/ScreenBody.jsx"},{"name":"Screen","sourcePath":"components/layout/screen/Screen.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/app-header/AppHeader.jsx"},{"name":"ModuleHeader","sourcePath":"components/navigation/module-header/ModuleHeader.jsx"},{"name":"ModuleTabBar","sourcePath":"components/navigation/module-tab-bar/ModuleTabBar.jsx"},{"name":"VideoModal","sourcePath":"components/overlays/VideoModal.jsx"},{"name":"FullScreen","sourcePath":"components/overlays/full-screen/FullScreen.jsx"},{"name":"Panel","sourcePath":"components/overlays/panel/Panel.jsx"},{"name":"Label","sourcePath":"components/typography/Label.jsx"},{"name":"SectionLabel","sourcePath":"components/typography/SectionLabel.jsx"},{"name":"Title","sourcePath":"components/typography/Title.jsx"}],"sourceHashes":{"components/core/Button.jsx":"4ee46de3e36c","components/core/Card.jsx":"74839381e714","components/core/ConfirmButton.jsx":"0aebc7901ba3","components/core/HeaderAction.jsx":"c9e85eb1eda0","components/core/Pill.jsx":"b75afa48c801","components/feedback/EmptyState.jsx":"2790eb35770e","components/feedback/InlineAlert.jsx":"c37679c21d2b","components/feedback/Spinner.jsx":"4b9c40f9c6d5","components/feedback/StatBadge.jsx":"93c3320f5a61","components/feedback/TargetsCard.jsx":"8bc4911b4405","components/feedback/loading-screen/LoadingScreen.jsx":"785041b54ee7","components/feedback/macro-meter/MacroMeter.jsx":"b8814f792c65","components/feedback/meta-bar/MetaBar.jsx":"c7fe41596ef2","components/feedback/mini-chart/MiniChart.jsx":"b0e0b4eee713","components/feedback/ring/Ring.jsx":"2316af2d3e04","components/forms/QtyInput.jsx":"f30ce26bc42b","components/forms/TextField.jsx":"8cd257107369","components/icons/Icon.jsx":"dd16b3097fec","components/layout/screen-body/ScreenBody.jsx":"5344ec3b6c3f","components/layout/screen/Screen.jsx":"29a3e61c394b","components/navigation/app-header/AppHeader.jsx":"294541b4ac19","components/navigation/module-header/ModuleHeader.jsx":"9e7f6141143d","components/navigation/module-tab-bar/ModuleTabBar.jsx":"66fb60d5c6bb","components/overlays/VideoModal.jsx":"90dac415d7d1","components/overlays/full-screen/FullScreen.jsx":"925194b44c51","components/overlays/panel/Panel.jsx":"b183a77682f5","components/shared/color.js":"96d075bab076","components/typography/Label.jsx":"90b1ef55a703","components/typography/SectionLabel.jsx":"8df87aa41c4a","components/typography/Title.jsx":"04cf5d4bc78e","ui_kits/forge-app/DayPlannerScreen.jsx":"0a14207a372e","ui_kits/forge-app/ExerciseForm.jsx":"293304f25f62","ui_kits/forge-app/LoginScreen.jsx":"6898e09b6046","ui_kits/forge-app/MealForm.jsx":"f43993c6fbb4","ui_kits/forge-app/ModuleChooserScreen.jsx":"34e1a898d658","ui_kits/forge-app/NutricaoHojeScreen.jsx":"db1e31088855","ui_kits/forge-app/PerfilScreen.jsx":"e0152a46c3a9","ui_kits/forge-app/TreinoHojeScreen.jsx":"590bfeb6b42b","ui_kits/forge-app/WorkoutEditorScreen.jsx":"b48b4fdee4ec"},"inlinedExternals":[],"unexposedExports":[{"name":"onColor","sourcePath":"components/shared/color.js"}]} */

(() => {

const __ds_ns = (window.ForgeDesignSystem_7731a5 = window.ForgeDesignSystem_7731a5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  stripeColor,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      backgroundColor: "var(--forge-surface)",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--forge-border)",
      overflow: "hidden",
      marginBottom: "var(--space-card-gap)",
      ...style
    }
  }, stripeColor ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      flexShrink: 0,
      backgroundColor: stripeColor
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: stripeColor ? 22 : "var(--space-card)"
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ConfirmButton.jsx
try { (() => {
// Destructive action, confirmed in 2 taps — design-system rule: never
// delete on a single tap. First tap arms a 2.5s confirm window.
function ConfirmButton({
  title = "Excluir",
  confirmTitle = "Confirmar?",
  onConfirm,
  small = true,
  style
}) {
  const [arming, setArming] = React.useState(false);
  const timer = React.useRef(null);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const press = () => {
    if (!arming) {
      setArming(true);
      timer.current = setTimeout(() => setArming(false), 2500);
    } else {
      clearTimeout(timer.current);
      setArming(false);
      onConfirm && onConfirm();
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: press,
    style: {
      height: small ? 34 : 44,
      borderRadius: 8,
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: "var(--forge-danger)",
      backgroundColor: arming ? "var(--forge-danger)" : "transparent",
      color: arming ? "#fff" : "var(--forge-danger)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      paddingInline: 12,
      cursor: "pointer",
      transition: "background-color 0.15s ease, color 0.15s ease",
      ...style
    }
  }, arming ? confirmTitle : title);
}
Object.assign(__ds_scope, { ConfirmButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ConfirmButton.jsx", error: String((e && e.message) || e) }); }

// components/core/HeaderAction.jsx
try { (() => {
// Discreet outlined action for a full-screen header (e.g. "Replicar").
function HeaderAction({
  title,
  onClick
}) {
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      border: "1px solid var(--forge-border)",
      borderRadius: 8,
      paddingBlock: 7,
      paddingInline: 11,
      backgroundColor: "transparent",
      color: "#b0b0b8",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12.5,
      cursor: "pointer",
      opacity: pressed ? 0.8 : 1
    }
  }, title);
}
Object.assign(__ds_scope, { HeaderAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HeaderAction.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
// EmptyState — reframed-positive empty/rest content block (never just
// blank). Componentized version of the pattern seen for rest days and
// "no items yet" lists.
function EmptyState({
  icon = "moon",
  title,
  subtitle
}) {
  const {
    Icon
  } = window.ForgeDesignSystem_7731a5 || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: 14,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    color: "var(--forge-text-faint)",
    size: 16
  }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-faint)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      marginTop: 3,
      lineHeight: "16px"
    }
  }, subtitle) : null));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineAlert.jsx
try { (() => {
// InlineAlert — the banner treatment used for program reminders / warnings
// (e.g. the amber "Lembrete do programa" banner in Treino). Never a toast —
// this design system has no toast pattern; persistent context-relevant
// notices live inline, in the flow of the screen.
const KIND_STYLES = {
  info: {
    border: "#2a3a4a",
    bg: "#111a24",
    accent: "var(--forge-macro-fat)",
    icon: "info"
  },
  success: {
    border: "#1f3a2c",
    bg: "#0f1a14",
    accent: "var(--forge-success)",
    icon: "check"
  },
  warning: {
    border: "#3a2f1f",
    bg: "#1a1610",
    accent: "var(--forge-warning)",
    icon: "warn"
  },
  danger: {
    border: "#3a2320",
    bg: "#1a1210",
    accent: "var(--forge-danger)",
    icon: "warn"
  }
};
function InlineAlert({
  kind = "warning",
  title,
  children
}) {
  const {
    Icon
  } = window.ForgeDesignSystem_7731a5 || {};
  const s = KIND_STYLES[kind] || KIND_STYLES.warning;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      padding: 18,
      borderRadius: 14,
      border: `1px solid ${s.border}`,
      backgroundColor: s.bg
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    color: s.accent,
    size: 18
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      color: "#c9c4b6",
      lineHeight: "20px",
      fontFamily: "var(--font-body)"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.accent,
      fontWeight: 700
    }
  }, title, " ") : null, children));
}
Object.assign(__ds_scope, { InlineAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
// Spinner — small inline loading indicator (distinct from the full-screen
// LoadingScreen). Just a spinning Ring arc at icon scale, for inline use
// inside a button, row, or section while content loads.
function Spinner({
  size = 20,
  stroke,
  color = "var(--forge-accent)"
}) {
  const sw = stroke || Math.max(2, size * 0.14);
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      animation: "forge-spinner-spin 0.8s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes forge-spinner-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { svg[style*="forge-spinner-spin"] { animation: none; } }
      `), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: color,
    strokeWidth: sw,
    fill: "none",
    strokeDasharray: circ,
    strokeDashoffset: circ * 0.7,
    strokeLinecap: "round",
    opacity: 0.9
  }));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatBadge.jsx
try { (() => {
// StatBadge — small delta indicator (up/down/flat) for a trend value, e.g.
// weight change since last week. Color follows semantic meaning, not
// direction — pass `goodDirection` to say whether "down" or "up" is the
// positive outcome for this particular stat (losing weight = good; gaining
// strength/reps = good), so color stays meaningful either way.
function StatBadge({
  value,
  unit = "",
  goodDirection = "down"
}) {
  const {
    Icon
  } = window.ForgeDesignSystem_7731a5 || {};
  const flat = Math.abs(value) < 0.05;
  const dir = flat ? "flat" : value > 0 ? "up" : "down";
  const isGood = flat ? null : dir === goodDirection;
  const color = flat ? "var(--forge-text-dim)" : isGood ? "var(--forge-success)" : "var(--forge-danger)";
  const iconName = flat ? null : dir === "up" ? "up" : "down";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      color,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12.5
    }
  }, iconName && Icon ? /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    color: color,
    size: 13
  }) : null, /*#__PURE__*/React.createElement("span", null, flat ? "—" : `${value > 0 ? "+" : ""}${value}${unit}`));
}
Object.assign(__ds_scope, { StatBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TargetsCard.jsx
try { (() => {
// TargetsCard — daily kcal + macro targets summary, with an edit affordance.
// Used atop the Nutrição "Hoje" screen and in the targets-setup flow.
function TargetsCard({
  kcal,
  protein,
  carb,
  fat,
  onEdit,
  accent = "#10B981"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: "var(--radius-card)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: "var(--forge-text-faint)"
    }
  }, "Suas metas di\xE1rias"), onEdit ? /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      background: "none",
      border: "none",
      color: accent,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      cursor: "pointer",
      padding: 0
    }
  }, "Ajustar") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Kcal",
    value: kcal,
    color: "var(--forge-text)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Prote\xEDna",
    value: protein,
    unit: "g",
    color: "var(--forge-macro-protein)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Carbo",
    value: carb,
    unit: "g",
    color: "var(--forge-macro-carb)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Gordura",
    value: fat,
    unit: "g",
    color: "var(--forge-macro-fat)"
  })));
}
function Stat({
  label,
  value,
  unit = "",
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 24,
      color
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      color: "var(--forge-text-dim)",
      marginTop: 2
    }
  }, label));
}
Object.assign(__ds_scope, { TargetsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TargetsCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/loading-screen/LoadingScreen.jsx
try { (() => {
// LoadingScreen — the signature boot/loading treatment: spinning Ring arc +
// pulsing brand mark + wordmark + status caption. markSrc should point at
// assets/forge-mark.png.
function LoadingScreen({
  markSrc,
  message = "carregando…"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      backgroundColor: "var(--forge-bg)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes forge-spin { to { transform: rotate(360deg); } }
        @keyframes forge-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.86); opacity: 0.62; } }
        .forge-ls-spin { animation: forge-spin 1s linear infinite; }
        .forge-ls-pulse { animation: forge-pulse 1.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .forge-ls-spin, .forge-ls-pulse { animation: none; } }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      height: 72
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "72",
    height: "72",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "31",
    fill: "none",
    stroke: "var(--forge-border)",
    strokeWidth: "5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "72",
    height: "72",
    className: "forge-ls-spin",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "31",
    fill: "none",
    stroke: "var(--forge-accent)",
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeDasharray: "194.7",
    strokeDashoffset: "140"
  })), /*#__PURE__*/React.createElement("div", {
    className: "forge-ls-pulse",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 20,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      letterSpacing: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-accent)"
    }
  }, "F"), "orge"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dimmer)",
      fontFamily: "var(--font-body)",
      fontSize: 12
    }
  }, message));
}
Object.assign(__ds_scope, { LoadingScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/loading-screen/LoadingScreen.jsx", error: String((e && e.message) || e) }); }

// components/feedback/macro-meter/MacroMeter.jsx
try { (() => {
// MacroMeter — labeled progress bar for a single macro (protein/carb/fat).
// Pass `compact` to drop the label row entirely (dot + bar only) for dense
// contexts like a food-item row inside a meal card.
function MacroMeter({
  label,
  color,
  value,
  target,
  unit = "g",
  compact = false
}) {
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: color,
        display: "inline-block",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: "var(--forge-surface-raised)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        borderRadius: 2.5,
        width: pct * 100 + "%",
        backgroundColor: color,
        transition: "width 0.3s ease"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--forge-text-dim)",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 11,
        flexShrink: 0
      }
    }, Math.round(value), unit));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: color,
      display: "inline-block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-muted)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12.5
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12
    }
  }, Math.round(value), " / ", Math.round(target), " ", unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      backgroundColor: "var(--forge-surface-raised)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      width: pct * 100 + "%",
      backgroundColor: color,
      transition: "width 0.3s ease"
    }
  })));
}
Object.assign(__ds_scope, { MacroMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/macro-meter/MacroMeter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/meta-bar/MetaBar.jsx
try { (() => {
// MetaBar — compact single-value progress bar (e.g. daily kcal), turns
// warning-colored when over target. Pass `segments` (array of {value, color})
// for a stacked/striped variant showing multiple contributors on one bar
// (e.g. each meal's share of the day's calories) instead of a single fill.
function MetaBar({
  value,
  target,
  color = "var(--forge-nutrition)",
  segments
}) {
  if (segments && segments.length) {
    const total = target > 0 ? target : segments.reduce((s, seg) => s + seg.value, 0) || 1;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: 6,
        borderRadius: 3,
        backgroundColor: "var(--forge-surface-raised)",
        overflow: "hidden"
      }
    }, segments.map((seg, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: Math.max(0, Math.min(1, seg.value / total)) * 100 + "%",
        backgroundColor: seg.color,
        transition: "width 0.3s ease",
        borderRight: i < segments.length - 1 ? "1.5px solid var(--forge-surface-raised)" : "none"
      }
    })));
  }
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  const over = target > 0 && value > target;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      backgroundColor: "var(--forge-surface-raised)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      width: pct * 100 + "%",
      backgroundColor: over ? "var(--forge-warning)" : color,
      transition: "width 0.3s ease, background-color 0.3s ease"
    }
  }));
}
Object.assign(__ds_scope, { MetaBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/meta-bar/MetaBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/mini-chart/MiniChart.jsx
try { (() => {
// MiniChart — small chart of a history (e.g. weight over time).
// variant="line" (default): 2.5px line + 3.5r dots.
// variant="bar": simple column bars.
// variant="area": line with a soft filled gradient beneath it.
// viewBox 280x60, pad 6, all in the accent color.
function MiniChart({
  values,
  color = "#EF4444",
  variant = "line"
}) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const W = 280,
    H = 60,
    pad = 6;
  const gradId = "forge-minichart-grad";
  if (variant === "bar") {
    const n = values.length;
    const bw = (W - 2 * pad) / n;
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: 60,
      viewBox: `0 0 ${W} ${H}`
    }, values.map((v, i) => {
      const h = (v - min) / range * (H - 2 * pad - 4) + 4;
      const x = pad + i * bw;
      const y = H - pad - h;
      return /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x + bw * 0.15,
        y: y,
        width: bw * 0.7,
        height: h,
        rx: 2,
        fill: color
      });
    }));
  }
  const pts = values.map((v, i) => {
    const x = pad + i / Math.max(values.length - 1, 1) * (W - 2 * pad);
    const y = H - pad - (v - min) / range * (H - 2 * pad);
    return [x, y];
  });
  const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  if (variant === "area") {
    const areaD = d + ` L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pts[0][0].toFixed(1)},${H - pad} Z`;
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: 60,
      viewBox: `0 0 ${W} ${H}`
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: gradId,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: color,
      stopOpacity: "0.35"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: color,
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: areaD,
      fill: `url(#${gradId})`,
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: color,
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: 60,
    viewBox: `0 0 ${W} ${H}`
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: 3.5,
    fill: color
  })));
}
Object.assign(__ds_scope, { MiniChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/mini-chart/MiniChart.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ring/Ring.jsx
try { (() => {
// Ring — signature progress element: background track + accent arc.
// Pass `indeterminate` for a continuously-spinning loading variant (no
// fixed progress value); pass `segments` (array of {value, color}) for a
// multi-segment ring that shows several contributors (e.g. macros) at once
// on a single track, each segment stacked after the previous.
function Ring({
  size = 120,
  stroke = 10,
  progress = 0,
  color = "#EF4444",
  track,
  children,
  indeterminate = false,
  segments
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  if (indeterminate) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("style", null, `
          @keyframes forge-ring-spin { to { transform: rotate(360deg); } }
          .forge-ring-indeterminate { animation: forge-ring-spin 1s linear infinite; transform-origin: center; }
          @media (prefers-reduced-motion: reduce) { .forge-ring-indeterminate { animation: none; } }
        `), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        position: "absolute"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      stroke: track || "var(--forge-surface-raised)",
      strokeWidth: stroke,
      fill: "none"
    })), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      className: "forge-ring-indeterminate",
      style: {
        position: "absolute"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      stroke: color,
      strokeWidth: stroke,
      fill: "none",
      strokeDasharray: circ,
      strokeDashoffset: circ * 0.72,
      strokeLinecap: "round"
    })), children);
  }
  if (segments && segments.length) {
    let acc = 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        position: "absolute",
        transform: "rotate(-90deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      stroke: track || "var(--forge-surface-raised)",
      strokeWidth: stroke,
      fill: "none"
    }), segments.map((seg, i) => {
      const clamped = Math.max(0, Math.min(1, seg.value));
      const dash = circ * clamped;
      const gap = circ - dash;
      const rotation = acc * 360;
      acc += clamped;
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: size / 2,
        cy: size / 2,
        r: r,
        stroke: seg.color,
        strokeWidth: stroke,
        fill: "none",
        strokeDasharray: `${dash} ${gap}`,
        strokeLinecap: "butt",
        style: {
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center",
          transition: "stroke-dasharray 0.4s ease"
        }
      });
    })), children);
  }
  const clamped = Math.max(0, Math.min(1, progress));
  const offset = circ * (1 - clamped);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      position: "absolute",
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: track || "var(--forge-surface-raised)",
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: color,
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: circ,
    strokeDashoffset: offset,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset 0.4s ease"
    }
  })), children);
}
Object.assign(__ds_scope, { Ring });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ring/Ring.jsx", error: String((e && e.message) || e) }); }

// components/forms/QtyInput.jsx
try { (() => {
// Quantity + unit selector for a food item — the unit selector only appears
// when the food has portion presets; tapping it cycles through units ("g"
// plus any portions). Grams stays the source of truth for calculation.
function QtyInput({
  qty,
  unit = "g",
  units = ["g"],
  onChange
}) {
  const cycleUnit = () => {
    const i = units.indexOf(unit);
    const next = units[(i + 1) % units.length];
    onChange && onChange({
      qty,
      unit: next
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: qty ?? "",
    onChange: e => onChange && onChange({
      qty: e.target.value.replace(/[^\d,.]/g, ""),
      unit
    }),
    placeholder: "0",
    style: {
      width: 64,
      height: 36,
      borderRadius: 8,
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13.5
    }
  }), units.length > 1 ? /*#__PURE__*/React.createElement("button", {
    onClick: cycleUnit,
    style: {
      height: 36,
      minWidth: 44,
      borderRadius: 8,
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "transparent",
      color: "var(--forge-text-muted)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      paddingInline: 8,
      cursor: "pointer"
    }
  }, unit) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-muted)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      paddingInline: 8
    }
  }, "g"));
}
Object.assign(__ds_scope, { QtyInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QtyInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-label)",
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      marginBottom: 6
    }
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: "100%",
      height: 84,
      borderRadius: "var(--radius-input)",
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      padding: "10px 12px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-input)",
      resize: "none",
      boxSizing: "border-box"
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: "100%",
      height: 44,
      borderRadius: "var(--radius-input)",
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      paddingInline: 12,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-input)",
      boxSizing: "border-box"
    }
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Feather-style inline SVG icons — ~2px stroke, rounded caps/joins.
// Ported 1:1 from src/components/icons.jsx (mateusutz/forge-app).
// Each entry is a FUNCTION returning JSX (not a bare JSX value) — the JSX
// must be created lazily inside a render call, not evaluated once at
// module-load time.
const PATHS = {
  dumbbell: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "4",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "7",
    x2: "17",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "20",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "12",
    x2: "17",
    y2: "12"
  })),
  flame: () => /*#__PURE__*/React.createElement("path", {
    d: "M12 2C12 2 6 8 6 14a6 6 0 0 0 12 0c0-2-1-3.5-2-5 0 1.5-1 2.5-2 2.5 0-3-2-6.5-2-9.5z"
  }),
  user: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  arrow: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6l6 6-6 6"
  })),
  list: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  })),
  book: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })),
  chart: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  })),
  calendar: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h18v18H3z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })),
  grid: () => /*#__PURE__*/React.createElement("path", {
    d: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"
  }),
  logout: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17l5-5-5-5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  })),
  moon: () => /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }),
  swap: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M17 1l4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 23l-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })),
  plus: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  timer: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "2",
    x2: "14",
    y2: "2"
  })),
  play: () => /*#__PURE__*/React.createElement("path", {
    d: "M6 4l14 8-14 8z"
  }),
  pause: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "5",
    x2: "8",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "5",
    x2: "16",
    y2: "19"
  })),
  refresh: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M23 4v6h-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 20v-6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 15a9 9 0 0 1-14.85 3.36L1 14"
  })),
  check: () => /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  info: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  })),
  pencil: () => /*#__PURE__*/React.createElement("path", {
    d: "M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }),
  x: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  warn: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  up: () => /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }),
  down: () => /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }),
  trophy: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 22h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
  }))
};
function Icon({
  name,
  color = "currentColor",
  size = 24,
  strokeWidth = 2
}) {
  const render = PATHS[name];
  if (!render) return null;
  const filled = name === "play";
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : "none",
    stroke: color,
    strokeWidth: filled ? 1 : strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, render());
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/screen-body/ScreenBody.jsx
try { (() => {
// ScreenBody — body of a screen INSIDE a module; the module shell (AppHeader
// + ModuleTabBar) already owns the safe area, so this just handles scroll +
// screen padding + max-width centering.
function ScreenBody({
  children,
  scroll = true,
  style
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px var(--space-screen-h) 24px",
      maxWidth: "var(--app-max-width)",
      margin: "0 auto",
      boxSizing: "border-box",
      ...style
    }
  }, children);
  return scroll ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch"
    }
  }, inner) : inner;
}
Object.assign(__ds_scope, { ScreenBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/screen-body/ScreenBody.jsx", error: String((e && e.message) || e) }); }

// components/layout/screen/Screen.jsx
try { (() => {
// Screen — isolated screen with its own safe-area padding, used OUTSIDE the
// module shell (e.g. boot/login screens that aren't wrapped by ModuleShell).
// Scrollable by default; centers content at maxWidth 480.
function Screen({
  children,
  scroll = true,
  style
}) {
  const Wrap = scroll ? "div" : React.Fragment;
  const wrapProps = scroll ? {
    style: {
      flex: 1,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch"
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      backgroundColor: "var(--forge-bg)",
      display: "flex",
      flexDirection: "column",
      paddingTop: "env(safe-area-inset-top)",
      paddingLeft: "env(safe-area-inset-left)",
      paddingRight: "env(safe-area-inset-right)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, wrapProps, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--app-max-width)",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, children)));
}
Object.assign(__ds_scope, { Screen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/screen/Screen.jsx", error: String((e && e.message) || e) }); }

// components/navigation/app-header/AppHeader.jsx
try { (() => {
// Global app header — Forge mark + wordmark left; back-to-modules (grid) +
// logout icon buttons right. `markSrc` should point at assets/forge-mark.png.
function AppHeader({
  markSrc,
  inModule = false,
  onBackToModules,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      borderBottom: "1px solid var(--forge-divider)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: inModule ? onBackToModules : undefined,
    disabled: !inModule,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      background: "none",
      border: "none",
      cursor: inModule ? "pointer" : "default",
      padding: 0
    }
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 26,
      height: 26,
      objectFit: "contain"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "var(--tracking-title)",
      textTransform: "uppercase",
      color: "var(--forge-text)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-accent)"
    }
  }, "F"), "orge")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, inModule ? /*#__PURE__*/React.createElement("button", {
    onClick: onBackToModules,
    style: iconBtnStyle,
    "aria-label": "Voltar aos m\xF3dulos"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grid",
    color: "var(--forge-text-muted)",
    size: 20
  })) : null, /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: iconBtnStyle,
    "aria-label": "Sair da conta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "logout",
    color: "var(--forge-text-faint)",
    size: 19
  }))));
}
const iconBtnStyle = {
  width: 38,
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer"
};
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/app-header/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/module-header/ModuleHeader.jsx
try { (() => {
// Screen-top header: small uppercase eyebrow + large Barlow title, with an
// optional right-aligned slot (e.g. an "Ajustar" button).
function ModuleHeader({
  eyebrow,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 32,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "34px"
    }
  }, title)), right || null);
}
Object.assign(__ds_scope, { ModuleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/module-header/ModuleHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/module-tab-bar/ModuleTabBar.jsx
try { (() => {
// Module bottom tab bar — controlled by index; active tab tinted with the
// module's accent color, inactive tabs in textDim.
function ModuleTabBar({
  tabs,
  active,
  onChange,
  accent = "#EF4444"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      backgroundColor: "var(--forge-panel)",
      borderTop: "1px solid var(--forge-divider)",
      paddingTop: 8,
      paddingBottom: 8,
      paddingInline: 4
    }
  }, tabs.map(t => {
    const on = t.id === active;
    const color = on ? accent : "var(--forge-text-dim)";
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        paddingBlock: 2,
        background: "none",
        border: "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      color: color,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 11,
        color
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { ModuleTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/module-tab-bar/ModuleTabBar.jsx", error: String((e && e.message) || e) }); }

// components/overlays/VideoModal.jsx
try { (() => {
// VideoModal — full-bleed video overlay for an exercise demo. Wraps a video
// element (or any player) in a black scrim with a close button; tap outside
// or the ✕ closes it. On native this wraps react-native-youtube-iframe
// (raw WebView iframes fail on Android — see readme "known pitfalls").
function VideoModal({
  visible,
  onClose,
  title,
  children
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.94)",
      display: "flex",
      flexDirection: "column",
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--font-title)",
      fontSize: 18,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 20,
      cursor: "pointer"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 480,
      aspectRatio: "16 / 9",
      backgroundColor: "#000",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children)));
}
Object.assign(__ds_scope, { VideoModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/VideoModal.jsx", error: String((e && e.message) || e) }); }

// components/overlays/full-screen/FullScreen.jsx
try { (() => {
// Full-screen flow (edit a plan, build a workout) — slide-in, own header
// with close (X) + title + optional right action, scrollable body, and an
// optional fixed footer for save/delete actions.
function FullScreen({
  visible = true,
  onClose,
  title,
  right,
  children,
  footer
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "var(--forge-bg)",
      display: "flex",
      flexDirection: "column",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 18px",
      borderBottom: "1px solid var(--forge-divider)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 18,
      cursor: "pointer",
      padding: 6,
      marginLeft: -6
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--text-panel-title)",
      color: "var(--forge-text)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-title)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), right || null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 18
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--forge-divider)",
      padding: "12px 18px 16px",
      backgroundColor: "var(--forge-bg)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { FullScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/full-screen/FullScreen.jsx", error: String((e && e.message) || e) }); }

// components/overlays/panel/Panel.jsx
try { (() => {
// Centered modal panel — dark scrim + panel (radius 18, maxWidth 440).
// Used for small choices/confirmations (pick-a-workout, schedule editor).
function Panel({
  visible,
  onClose,
  title,
  children,
  footer
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(10,10,12,0.82)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: "var(--forge-panel)",
      borderRadius: "var(--radius-panel)",
      border: "1px solid var(--forge-border)",
      width: "100%",
      maxWidth: 440,
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--forge-text)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-title)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 18,
      cursor: "pointer",
      padding: 4
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: `0 18px ${footer ? 4 : 18}px`
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px 16px"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/panel/Panel.jsx", error: String((e && e.message) || e) }); }

// components/shared/color.js
try { (() => {
// Shared color utilities — single source of truth for onColor(), used by
// any component that needs to pick readable text over an arbitrary fill.
// Ported from src/theme/tokens.js (mateusutz/forge-app).
function onColor(hex) {
  const h = String(hex).replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.62 ? "#0B0F19" : "#FFFFFF";
}
Object.assign(__ds_scope, { onColor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/color.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  title,
  onClick,
  color = "var(--forge-accent)",
  disabled = false,
  small = false,
  style,
  resolvedColor // pass a literal hex if you need exact onColor() contrast; else white text is used
}) {
  const [pressed, setPressed] = React.useState(false);
  const textColor = resolvedColor ? __ds_scope.onColor(resolvedColor) : "var(--forge-on-accent)";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      height: small ? 36 : 46,
      borderRadius: small ? 9 : "var(--radius-button)",
      border: "none",
      cursor: disabled ? "default" : "pointer",
      paddingInline: small ? 13 : 18,
      backgroundColor: color,
      color: textColor,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: small ? 12.5 : 15,
      opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
      transition: "opacity 0.1s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, title);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  title,
  onClick,
  active = false,
  color = "#EF4444",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: 40,
      borderRadius: "var(--radius-pill)",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: active ? color : "var(--forge-border-input)",
      backgroundColor: active ? color : "transparent",
      color: active ? __ds_scope.onColor(color) : "var(--forge-text-muted)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-chip)",
      paddingInline: 16,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, title);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/typography/Label.jsx
try { (() => {
// Label — small uppercase tracked text. Two sizes: label (11.5) and
// miniLabel (10.5). Used for field labels, eyebrows, tiny captions.
function Label({
  children,
  size = "label",
  color = "var(--forge-text-faint)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: size === "miniLabel" ? "var(--text-mini-label)" : "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Label.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionLabel.jsx
try { (() => {
// SectionLabel — a Label pre-set with the section-heading margin used above
// grouped list content (e.g. "Sua semana", "Café da manhã").
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--forge-text-faint)",
      marginTop: 14,
      marginBottom: 8,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/typography/Title.jsx
try { (() => {
// Title — large Barlow Condensed heading. Size variants map to the type
// scale's title tokens (screenTitle 34 / panelTitle 22 / cardTitle 16 / logoLg 40).
const SIZE = {
  logoLg: {
    fontSize: "var(--text-logo-lg)",
    lineHeight: "44px"
  },
  screenTitle: {
    fontSize: "var(--text-screen-title)",
    lineHeight: "34px"
  },
  panelTitle: {
    fontSize: "var(--text-panel-title)",
    lineHeight: "24px"
  },
  cardTitle: {
    fontSize: "var(--text-card-title)",
    lineHeight: "20px",
    textTransform: "none",
    letterSpacing: 0,
    fontFamily: "var(--font-body)",
    fontWeight: 700
  }
};
function Title({
  children,
  size = "screenTitle",
  color = "var(--forge-text)",
  style
}) {
  const s = SIZE[size] || SIZE.screenTitle;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-title)",
      color,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Title });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Title.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/DayPlannerScreen.jsx
try { (() => {
// DayPlannerScreen — FullScreen flow to plan/adjust a nutrition day's meal
// slots. Long, multi-section flow → FullScreen per the modal decision rule.
function DayPlannerScreen({
  visible,
  onClose
}) {
  const {
    FullScreen,
    Button,
    HeaderAction,
    Icon
  } = window.ForgeDesignSystem_7731a5;
  const [slots, setSlots] = React.useState([{
    id: "cafe",
    label: "Café da manhã",
    enabled: true
  }, {
    id: "almoco",
    label: "Almoço",
    enabled: true
  }, {
    id: "lanche",
    label: "Lanche da tarde",
    enabled: false
  }, {
    id: "jantar",
    label: "Jantar",
    enabled: true
  }, {
    id: "ceia",
    label: "Ceia",
    enabled: false
  }]);
  const toggle = id => setSlots(slots.map(s => s.id === id ? {
    ...s,
    enabled: !s.enabled
  } : s));
  return /*#__PURE__*/React.createElement(FullScreen, {
    visible: visible,
    onClose: onClose,
    title: "Plano do dia",
    right: /*#__PURE__*/React.createElement(HeaderAction, {
      title: "Replicar",
      onClick: () => {}
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      title: "Salvar plano",
      onClick: onClose,
      style: {
        width: "100%"
      }
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 13,
      marginBottom: 16,
      fontFamily: "var(--font-body)"
    }
  }, "Escolha quais refei\xE7\xF5es fazem parte do seu dia. Isso ajusta a distribui\xE7\xE3o das metas de macros."), slots.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onClick: () => toggle(s.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "var(--forge-surface)",
      border: `1px solid ${s.enabled ? "var(--forge-nutrition)" : "var(--forge-border)"}`,
      borderRadius: 12,
      padding: 14,
      marginBottom: 9,
      cursor: "pointer",
      opacity: s.enabled ? 1 : 0.55
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      border: `1.5px solid ${s.enabled ? "var(--forge-nutrition)" : "var(--forge-border-input)"}`,
      backgroundColor: s.enabled ? "var(--forge-nutrition)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, s.enabled ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    color: "#0B0F19",
    size: 13
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14
    }
  }, s.label))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/DayPlannerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/ExerciseForm.jsx
try { (() => {
// ExerciseForm — FullScreen create/edit a single exercise: name, muscle
// group pills, target sets/reps, optional video URL, destructive delete.
function ExerciseForm({
  visible,
  onClose,
  exercise
}) {
  const {
    FullScreen,
    TextField,
    Pill,
    ConfirmButton,
    Button
  } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState(exercise ? exercise.name : "");
  const [muscle, setMuscle] = React.useState("peito");
  const [sets, setSets] = React.useState(exercise ? String(exercise.sets) : "4");
  const [reps, setReps] = React.useState(exercise ? exercise.reps : "8-10");
  React.useEffect(() => {
    setName(exercise ? exercise.name : "");
    setSets(exercise ? String(exercise.sets) : "4");
    setReps(exercise ? exercise.reps : "8-10");
  }, [exercise, visible]);
  const groups = ["peito", "costas", "pernas", "ombro", "braço", "core"];
  return /*#__PURE__*/React.createElement(FullScreen, {
    visible: visible,
    onClose: onClose,
    title: exercise ? "Editar exercício" : "Novo exercício",
    footer: exercise ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConfirmButton, {
      title: "Excluir",
      confirmTitle: "Excluir exerc\xEDcio?",
      onConfirm: onClose
    }), /*#__PURE__*/React.createElement(Button, {
      title: "Salvar",
      onClick: onClose,
      style: {
        flex: 1
      }
    })) : /*#__PURE__*/React.createElement(Button, {
      title: "Adicionar ao treino",
      onClick: onClose,
      style: {
        width: "100%"
      }
    })
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nome do exerc\xEDcio",
    value: name,
    onChange: setName,
    placeholder: "Ex: Supino Reto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      margin: "16px 0 8px"
    }
  }, "Grupo muscular"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 6
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(Pill, {
    key: g,
    title: g[0].toUpperCase() + g.slice(1),
    active: muscle === g,
    color: "#EF4444",
    onClick: () => setMuscle(g)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "S\xE9ries",
    value: sets,
    onChange: setSets,
    type: "number"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Repeti\xE7\xF5es",
    value: reps,
    onChange: setReps,
    placeholder: "8-10"
  }))), /*#__PURE__*/React.createElement(TextField, {
    label: "V\xEDdeo de demonstra\xE7\xE3o (opcional)",
    placeholder: "URL do YouTube"
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/ExerciseForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/LoginScreen.jsx
try { (() => {
// LoginScreen — faithful recreation of src/components/LoginScreen.jsx.
// Google button + email/senha fields + esqueci senha + alternar entrar/criar.
function LoginScreen({
  onLogin
}) {
  const [mode, setMode] = React.useState("in");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--forge-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 26px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 11,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/forge-mark.png",
    style: {
      width: 40,
      height: 40
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 40,
      letterSpacing: 0.5,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "44px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-accent)"
    }
  }, "F"), "orge")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--forge-text-dim)",
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      marginBottom: 30
    }
  }, "Seu treino, em qualquer aparelho."), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      backgroundColor: "#fff",
      border: "none",
      borderRadius: 12,
      padding: "14px 0",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 0 0 9 18z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M3.98 10.72a5.4 5.4 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.02-2.34z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.42 0 9 0A9 9 0 0 0 .96 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1a1a1a",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15
    }
  }, "Continuar com Google")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      backgroundColor: "var(--forge-border)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-dimmer)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12
    }
  }, "ou"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      backgroundColor: "var(--forge-border)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Email",
    style: inputStyle({
      marginBottom: 10
    })
  }), /*#__PURE__*/React.createElement("input", {
    value: pass,
    onChange: e => setPass(e.target.value),
    type: "password",
    placeholder: "Senha",
    style: inputStyle({
      marginBottom: mode === "in" ? 6 : 14
    })
  }), mode === "in" ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#8a8a92",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12.5,
      cursor: "pointer"
    }
  }, "Esqueci minha senha")) : null, /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: "100%",
      backgroundColor: "var(--forge-accent)",
      border: "none",
      borderRadius: "var(--radius-button)",
      padding: "14px 0",
      color: "var(--forge-on-accent)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer"
    }
  }, mode === "up" ? "Criar conta" : "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#8a8a92",
      fontFamily: "var(--font-body)",
      fontSize: 13.5
    }
  }, mode === "up" ? "Já tem conta? " : "Ainda não tem conta? "), /*#__PURE__*/React.createElement("span", {
    onClick: () => setMode(mode === "up" ? "in" : "up"),
    style: {
      color: "var(--forge-accent)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13.5,
      cursor: "pointer"
    }
  }, mode === "up" ? "Entrar" : "Criar conta"))));
}
function inputStyle(extra) {
  return {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "var(--forge-surface-raised)",
    border: "1px solid var(--forge-border-input)",
    borderRadius: "var(--radius-input)",
    padding: "13px 14px",
    color: "var(--forge-text)",
    fontFamily: "var(--font-body)",
    fontSize: 14.5,
    ...extra
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/MealForm.jsx
try { (() => {
// MealForm — FullScreen create/edit a meal: name, food item list with
// QtyInput, add-food row, destructive discard via ConfirmButton in footer.
function MealForm({
  visible,
  onClose
}) {
  const {
    FullScreen,
    TextField,
    QtyInput,
    ConfirmButton,
    Button,
    Icon
  } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState("Almoço");
  const [items, setItems] = React.useState([{
    id: 1,
    name: "Peito de frango grelhado",
    qty: "180",
    unit: "g",
    units: ["g"]
  }, {
    id: 2,
    name: "Arroz integral",
    qty: "150",
    unit: "g",
    units: ["g", "colher"]
  }, {
    id: 3,
    name: "Feijão",
    qty: "1",
    unit: "concha",
    units: ["g", "concha"]
  }]);
  const updateItem = (id, val) => setItems(items.map(it => it.id === id ? {
    ...it,
    ...val
  } : it));
  return /*#__PURE__*/React.createElement(FullScreen, {
    visible: visible,
    onClose: onClose,
    title: "Editar refei\xE7\xE3o",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConfirmButton, {
      title: "Excluir",
      confirmTitle: "Excluir refei\xE7\xE3o?",
      onConfirm: onClose
    }), /*#__PURE__*/React.createElement(Button, {
      title: "Salvar",
      onClick: onClose,
      style: {
        flex: 1
      }
    }))
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nome da refei\xE7\xE3o",
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      margin: "16px 0 8px"
    }
  }, "Alimentos"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: 10,
      padding: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, it.name), /*#__PURE__*/React.createElement(QtyInput, {
    qty: it.qty,
    unit: it.unit,
    units: it.units,
    onChange: v => updateItem(it.id, v)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "1px dashed var(--forge-border-input)",
      borderRadius: 10,
      padding: 12,
      marginTop: 4,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    color: "var(--forge-nutrition)",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-nutrition)",
      fontSize: 13,
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Adicionar alimento")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/MealForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/ModuleChooserScreen.jsx
try { (() => {
// ModuleChooserScreen — faithful recreation of src/screens/ModuleChooser.jsx.
function ModuleChooserScreen({
  onChoose
}) {
  const {
    Icon
  } = window.ForgeDesignSystem_7731a5;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      maxWidth: 480,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, "Escolha um m\xF3dulo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 30,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      marginBottom: 22,
      lineHeight: "32px"
    }
  }, "O que vamos fazer hoje?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ModuleCard, {
    color: "#EF4444",
    iconName: "dumbbell",
    name: "Treino",
    desc: "Treinos, cargas e progresso.",
    onClick: () => onChoose("treino"),
    Icon: Icon
  }), /*#__PURE__*/React.createElement(ModuleCard, {
    color: "#10B981",
    iconName: "flame",
    name: "Nutri\xE7\xE3o",
    desc: "Alimenta\xE7\xE3o, calorias e macros.",
    onClick: () => onChoose("nutricao"),
    Icon: Icon
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => onChoose("perfil"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "var(--forge-surface)",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--forge-border)",
      padding: 14,
      marginTop: 14,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    color: "var(--forge-text-muted)",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--forge-text)"
    }
  }, "Perfil"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--forge-text-dim)",
      marginTop: 1
    }
  }, "Sua conta, dados corporais e objetivo")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    color: "var(--forge-text-dimmer)",
    size: 18
  })));
}
function ModuleCard({
  color,
  iconName,
  name,
  desc,
  onClick,
  Icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      backgroundColor: "var(--forge-surface)",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--forge-border)",
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      backgroundColor: color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: 22,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: color + "22",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    color: color,
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 26,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "28px"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "#8a8a92",
      marginTop: 6,
      lineHeight: "18px"
    }
  }, desc)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    color: color,
    size: 18
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/ModuleChooserScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/NutricaoHojeScreen.jsx
try { (() => {
// NutricaoHojeScreen — faithful recreation of src/screens/nutricao/HojeTab.jsx
// (abbreviated: kcal ring + macro meters, meal list with items).
function NutricaoHojeScreen({
  onAdjust,
  onEditMeal
}) {
  const {
    Ring,
    MacroMeter,
    Button
  } = window.ForgeDesignSystem_7731a5;
  const NG = "#10B981";
  const totals = {
    kcal: 1680,
    p: 92,
    c: 180,
    f: 40
  };
  const target = {
    kcal: 2400,
    proteinG: 150,
    carbG: 260,
    fatG: 70
  };
  const meals = [{
    name: "Café da manhã",
    kcal: 420,
    p: 28,
    c: 45,
    f: 12,
    items: [["Ovos mexidos", "3 un"], ["Pão integral", "2 fatias"], ["Café com leite", "200 ml"]]
  }, {
    name: "Almoço",
    kcal: 780,
    p: 48,
    c: 85,
    f: 18,
    items: [["Peito de frango grelhado", "180 g"], ["Arroz integral", "150 g"], ["Feijão", "100 g"], ["Salada verde", "à vontade"]]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      maxWidth: 480,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, "Ter\xE7a \xB7 11/07/2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 32,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "34px"
    }
  }, "Hoje")), /*#__PURE__*/React.createElement(Button, {
    small: true,
    title: "Ajustar",
    color: NG,
    resolvedColor: NG,
    onClick: onAdjust
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: "var(--radius-card)",
      padding: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 110,
    stroke: 11,
    progress: totals.kcal / target.kcal,
    color: NG
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 26,
      color: "var(--forge-text)"
    }
  }, totals.kcal), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 10,
      color: "var(--forge-text-dim)"
    }
  }, "/ ", target.kcal, " kcal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(MacroMeter, {
    label: "Prote\xEDna",
    color: "var(--forge-macro-protein)",
    value: totals.p,
    target: target.proteinG
  }), /*#__PURE__*/React.createElement(MacroMeter, {
    label: "Carbo",
    color: "var(--forge-macro-carb)",
    value: totals.c,
    target: target.carbG
  }), /*#__PURE__*/React.createElement(MacroMeter, {
    label: "Gordura",
    color: "var(--forge-macro-fat)",
    value: totals.f,
    target: target.fatG
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginTop: 14,
      marginBottom: 8
    }
  }, "Caf\xE9 da manh\xE3"), meals.slice(0, 1).map((meal, idx) => /*#__PURE__*/React.createElement(MealCard, {
    key: idx,
    meal: meal,
    onEdit: onEditMeal
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginTop: 14,
      marginBottom: 8
    }
  }, "Almo\xE7o"), meals.slice(1, 2).map((meal, idx) => /*#__PURE__*/React.createElement(MealCard, {
    key: idx,
    meal: meal,
    defaultOpen: true,
    onEdit: onEditMeal
  })));
}
function MealCard({
  meal,
  defaultOpen = false,
  onEdit
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const {
    Icon
  } = window.ForgeDesignSystem_7731a5;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: "var(--radius-card)",
      padding: 16,
      marginBottom: 10,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14
    }
  }, meal.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      marginTop: 2
    }
  }, meal.kcal, " kcal \xB7 P ", meal.p, " \xB7 C ", meal.c, " \xB7 G ", meal.f)), onEdit ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onEdit(meal);
    },
    style: {
      background: "none",
      border: "none",
      padding: 4,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    color: "var(--forge-text-dimmer)",
    size: 14
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 13
    }
  }, open ? "▴" : "▾")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, meal.items.map(([name, qty], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-muted)",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      flex: 1,
      minWidth: 0
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12
    }
  }, qty)))) : null);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/NutricaoHojeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/PerfilScreen.jsx
try { (() => {
// PerfilScreen — Profile module home (data not found built out in source app
// screens/ folder at time of writing; built from ui.jsx primitives + the
// account/body-data fields implied by TargetsCard/onboarding flow).
function PerfilScreen({
  onOpenTargets
}) {
  const {
    Icon,
    Card
  } = window.ForgeDesignSystem_7731a5;
  const rows = [{
    icon: "user",
    label: "Dados da conta",
    sub: "Nome, email, senha"
  }, {
    icon: "chart",
    label: "Dados corporais",
    sub: "Peso, altura, idade"
  }, {
    icon: "flame",
    label: "Metas nutricionais",
    sub: "Kcal e macros diários",
    onClick: onOpenTargets
  }, {
    icon: "dumbbell",
    label: "Nível de treino",
    sub: "Iniciante · 3x por semana"
  }, {
    icon: "moon",
    label: "Notificações",
    sub: "Lembretes de treino e refeição"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      maxWidth: 480,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 29,
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    color: "var(--forge-text-muted)",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 26,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "28px"
    }
  }, "Mateus"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 12.5,
      fontFamily: "var(--font-body)",
      marginTop: 2
    }
  }, "mateus@email.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 8
    }
  }, "Conta e prefer\xEAncias"), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    onClick: r.onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: 12,
      padding: 14,
      marginBottom: 9,
      cursor: r.onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    color: "var(--forge-text-muted)",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 12,
      fontFamily: "var(--font-body)",
      marginTop: 1
    }
  }, r.sub)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    color: "var(--forge-text-dimmer)",
    size: 16
  }))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/PerfilScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/TreinoHojeScreen.jsx
try { (() => {
// TreinoHojeScreen — faithful recreation of src/screens/treino/TodayTab.jsx
// (abbreviated: today's workout card, week row, reminder banner).
function TreinoHojeScreen({
  onContinueWorkout,
  onEditWorkout
}) {
  const {
    Icon,
    Button
  } = window.ForgeDesignSystem_7731a5;
  const ACCENT = "#EF4444";
  const workout = {
    name: "Peito & Tríceps",
    tag: "A",
    items: 6,
    accent: ACCENT
  };
  const setsDone = 3,
    setsTotal = 18;
  const pct = setsDone / setsTotal;
  const week = [{
    day: "SEG",
    tag: "A",
    name: "Peito & Tríceps",
    exos: 6,
    today: false,
    done: true
  }, {
    day: "TER",
    tag: "B",
    name: "Costas & Bíceps",
    exos: 7,
    today: true,
    done: false
  }, {
    day: "QUA",
    tag: null,
    name: "Descanso",
    exos: 0,
    today: false,
    done: false
  }, {
    day: "QUI",
    tag: "C",
    name: "Pernas",
    exos: 8,
    today: false,
    done: false
  }, {
    day: "SEX",
    tag: "A",
    name: "Peito & Tríceps",
    exos: 6,
    today: false,
    done: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 24px",
      maxWidth: 480,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, "Treino"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 32,
      textTransform: "uppercase",
      color: "var(--forge-text)",
      lineHeight: "34px"
    }
  }, "Hoje"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      marginTop: 4,
      marginBottom: 14
    }
  }, "Ter\xE7a \xB7 treino de hoje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      backgroundColor: workout.accent,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingRight: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      backgroundColor: workout.accent,
      borderRadius: 6,
      padding: "3px 11px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: 1
    }
  }, workout.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 34,
      lineHeight: "36px",
      marginTop: 12,
      textTransform: "uppercase",
      color: "var(--forge-text)"
    }
  }, workout.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#8a8a92",
      fontSize: 14,
      marginTop: 6,
      fontFamily: "var(--font-body)"
    }
  }, workout.items, " exerc\xEDcios \xB7 ", setsDone, "/", setsTotal, " s\xE9ries")), /*#__PURE__*/React.createElement(Ring, {
    size: 100,
    stroke: 11,
    progress: pct,
    color: workout.accent
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontFamily: "var(--font-title)",
      color: "var(--forge-text)"
    }
  }, Math.round(pct * 100), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "%")))), /*#__PURE__*/React.createElement(Button, {
    title: "Continuar treino  \u2192",
    color: workout.accent,
    resolvedColor: workout.accent,
    style: {
      marginTop: 18,
      width: "100%"
    },
    onClick: onContinueWorkout
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "1px dashed #3a3a42",
      borderRadius: 12,
      padding: 13,
      marginBottom: 28,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "swap",
    color: "#b0b0b8",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b0b0b8",
      fontSize: 14,
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Fazer outro treino hoje")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Sua semana"), /*#__PURE__*/React.createElement("div", {
    onClick: onEditWorkout,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid var(--forge-border-input)",
      borderRadius: 8,
      padding: "6px 12px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    color: "#b0b0b8",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b0b0b8",
      fontSize: 12,
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Editar agenda"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
      marginBottom: 24
    }
  }, week.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.day,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      backgroundColor: "var(--forge-surface)",
      border: `1px solid ${w.today ? workout.accent : "var(--forge-border)"}`,
      borderRadius: 12,
      padding: 12,
      opacity: w.today ? 1 : 0.72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      fontSize: 11,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      textTransform: "uppercase",
      color: w.today ? "var(--forge-text)" : "var(--forge-text-faint)"
    }
  }, w.day), w.tag ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      backgroundColor: workout.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: 13
    }
  }, w.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15
    }
  }, w.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 12,
      fontFamily: "var(--font-body)"
    }
  }, w.today ? "Hoje " : "", w.exos, " exerc\xEDcios"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "moon",
    color: "#4a4a52",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--forge-text-faint)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15
    }
  }, "Descanso"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      padding: 18,
      borderRadius: 14,
      border: "1px solid #3a2f1f",
      backgroundColor: "#1a1610"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warn",
    color: ACCENT,
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      color: "#c9b896",
      lineHeight: "20px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ACCENT,
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Lembrete do programa. "), "Rode por 8\u201310 semanas antes de reavaliar. Qualidade de execu\xE7\xE3o vale mais que quantidade.")));
}
function Ring({
  size,
  stroke,
  progress,
  color,
  children
}) {
  const {
    Ring: DSRing
  } = window.ForgeDesignSystem_7731a5;
  return /*#__PURE__*/React.createElement(DSRing, {
    size: size,
    stroke: stroke,
    progress: progress,
    color: color
  }, children);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/TreinoHojeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forge-app/WorkoutEditorScreen.jsx
try { (() => {
// WorkoutEditorScreen — FullScreen build/edit a workout: title + tag, list
// of exercises with sets x reps, add-exercise row, save footer.
function WorkoutEditorScreen({
  visible,
  onClose,
  onEditExercise
}) {
  const {
    FullScreen,
    TextField,
    Button,
    Icon
  } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState("Peito & Tríceps");
  const [exercises, setExercises] = React.useState([{
    id: 1,
    name: "Supino Reto",
    sets: 4,
    reps: "8-10"
  }, {
    id: 2,
    name: "Supino Inclinado com Halteres",
    sets: 3,
    reps: "10-12"
  }, {
    id: 3,
    name: "Crucifixo",
    sets: 3,
    reps: "12-15"
  }, {
    id: 4,
    name: "Tríceps Corda",
    sets: 4,
    reps: "10-12"
  }]);
  return /*#__PURE__*/React.createElement(FullScreen, {
    visible: visible,
    onClose: onClose,
    title: "Montar treino",
    footer: /*#__PURE__*/React.createElement(Button, {
      title: "Salvar treino",
      onClick: onClose,
      style: {
        width: "100%"
      }
    })
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nome do treino",
    value: name,
    onChange: setName
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: 1,
      margin: "16px 0 8px"
    }
  }, "Exerc\xEDcios"), exercises.map((ex, i) => /*#__PURE__*/React.createElement("div", {
    key: ex.id,
    onClick: () => onEditExercise && onEditExercise(ex),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      backgroundColor: "var(--forge-surface)",
      border: "1px solid var(--forge-border)",
      borderRadius: 10,
      padding: 12,
      marginBottom: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      color: "var(--forge-text-dimmer)",
      fontFamily: "var(--font-title)",
      fontSize: 16
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13.5
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontSize: 12,
      marginTop: 1
    }
  }, ex.sets, " s\xE9ries \xD7 ", ex.reps, " reps")), /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    color: "var(--forge-text-dimmer)",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: () => onEditExercise && onEditExercise(null),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      border: "1px dashed var(--forge-border-input)",
      borderRadius: 10,
      padding: 12,
      marginTop: 4,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    color: "#EF4444",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#EF4444",
      fontSize: 13,
      fontFamily: "var(--font-body)",
      fontWeight: 700
    }
  }, "Adicionar exerc\xEDcio")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forge-app/WorkoutEditorScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ConfirmButton = __ds_scope.ConfirmButton;

__ds_ns.HeaderAction = __ds_scope.HeaderAction;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.InlineAlert = __ds_scope.InlineAlert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StatBadge = __ds_scope.StatBadge;

__ds_ns.TargetsCard = __ds_scope.TargetsCard;

__ds_ns.LoadingScreen = __ds_scope.LoadingScreen;

__ds_ns.MacroMeter = __ds_scope.MacroMeter;

__ds_ns.MetaBar = __ds_scope.MetaBar;

__ds_ns.MiniChart = __ds_scope.MiniChart;

__ds_ns.Ring = __ds_scope.Ring;

__ds_ns.QtyInput = __ds_scope.QtyInput;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ScreenBody = __ds_scope.ScreenBody;

__ds_ns.Screen = __ds_scope.Screen;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.ModuleHeader = __ds_scope.ModuleHeader;

__ds_ns.ModuleTabBar = __ds_scope.ModuleTabBar;

__ds_ns.VideoModal = __ds_scope.VideoModal;

__ds_ns.FullScreen = __ds_scope.FullScreen;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Title = __ds_scope.Title;

})();
