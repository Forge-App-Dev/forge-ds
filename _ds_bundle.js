/* @ds-bundle: {"format":4,"namespace":"ForgeDesignSystem_7731a5","components":[{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"ListItem","sourcePath":"components/forms/ListItem.jsx"},{"name":"Ring","sourcePath":"components/feedback/ring/Ring.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"FullScreen","sourcePath":"components/overlays/full-screen/FullScreen.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/app-header/AppHeader.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ConfirmButton","sourcePath":"components/core/ConfirmButton.jsx"},{"name":"HeaderAction","sourcePath":"components/core/HeaderAction.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"InlineAlert","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatBadge","sourcePath":"components/feedback/StatBadge.jsx"},{"name":"ErrorState","sourcePath":"components/feedback/ErrorState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonText","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"TargetsCard","sourcePath":"components/feedback/TargetsCard.jsx"},{"name":"LoadingScreen","sourcePath":"components/feedback/loading-screen/LoadingScreen.jsx"},{"name":"MacroMeter","sourcePath":"components/feedback/macro-meter/MacroMeter.jsx"},{"name":"MetaBar","sourcePath":"components/feedback/meta-bar/MetaBar.jsx"},{"name":"MiniChart","sourcePath":"components/feedback/mini-chart/MiniChart.jsx"},{"name":"QtyInput","sourcePath":"components/forms/QtyInput.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ScreenBody","sourcePath":"components/layout/screen-body/ScreenBody.jsx"},{"name":"Screen","sourcePath":"components/layout/screen/Screen.jsx"},{"name":"ModuleHeader","sourcePath":"components/navigation/module-header/ModuleHeader.jsx"},{"name":"ModuleTabBar","sourcePath":"components/navigation/module-tab-bar/ModuleTabBar.jsx"},{"name":"VideoModal","sourcePath":"components/overlays/VideoModal.jsx"},{"name":"Panel","sourcePath":"components/overlays/panel/Panel.jsx"},{"name":"Label","sourcePath":"components/typography/Label.jsx"},{"name":"SectionLabel","sourcePath":"components/typography/SectionLabel.jsx"},{"name":"Text","sourcePath":"components/typography/Text.jsx"},{"name":"Title","sourcePath":"components/typography/Title.jsx"},{"name":"StatCard","sourcePath":"components/dashboard/StatCard.jsx"},{"name":"QuickAction","sourcePath":"components/dashboard/QuickAction.jsx"}],"sourceHashes":{"components/shared/color.js":"5512119e76ff","components/shared/useDialogA11y.js":"8b5f788c604f","components/icons/Icon.jsx":"039b7e49bc28","components/forms/ListItem.jsx":"37c11943aaee","components/feedback/ring/Ring.jsx":"a8a4df3a4b50","components/core/Button.jsx":"a4b1af3bac6c","components/core/Pill.jsx":"56cd66d63996","components/overlays/full-screen/FullScreen.jsx":"801e51729185","components/navigation/app-header/AppHeader.jsx":"1f64ca692f41","components/core/Card.jsx":"91f1cb5a1da3","components/core/ConfirmButton.jsx":"96eecbd838a0","components/core/HeaderAction.jsx":"1961ef324d72","components/feedback/EmptyState.jsx":"0789cf88df3e","components/feedback/InlineAlert.jsx":"6c2e3b8d74a4","components/feedback/Spinner.jsx":"aa65a5c23cdb","components/feedback/StatBadge.jsx":"66fa461f9337","components/feedback/ErrorState.jsx":"a0ec269642cf","components/feedback/Skeleton.jsx":"dc3c940737a7","components/feedback/TargetsCard.jsx":"f9baa7de4018","components/feedback/loading-screen/LoadingScreen.jsx":"7cb0b9bdbf57","components/feedback/macro-meter/MacroMeter.jsx":"c687297c9510","components/feedback/meta-bar/MetaBar.jsx":"1ba70539ec74","components/feedback/mini-chart/MiniChart.jsx":"d60d8d6d8b05","components/forms/QtyInput.jsx":"469699e2996d","components/forms/TextField.jsx":"833401ce32fd","components/forms/Switch.jsx":"44b245d7f2b7","components/forms/Stepper.jsx":"c1158a4bd0b0","components/forms/SearchField.jsx":"11330adffcee","components/forms/Select.jsx":"2ee127ce0dc0","components/layout/screen-body/ScreenBody.jsx":"f863fda3f12a","components/layout/screen/Screen.jsx":"4f5841ceb52e","components/navigation/module-header/ModuleHeader.jsx":"65ff473cba3c","components/navigation/module-tab-bar/ModuleTabBar.jsx":"2d5c041ea6c1","components/overlays/VideoModal.jsx":"0ea775930666","components/overlays/panel/Panel.jsx":"7ecffd34027d","components/typography/Label.jsx":"ee61d9f59c71","components/typography/SectionLabel.jsx":"01f8bc05581d","components/typography/Text.jsx":"aa960d14104d","components/typography/Title.jsx":"0efb463641b9","components/dashboard/StatCard.jsx":"fd17eabb7ea5","components/dashboard/QuickAction.jsx":"6a15a25833ea"},"inlinedExternals":[],"unexposedExports":[{"name":"onColor","sourcePath":"components/shared/color.js"},{"name":"resolveColor","sourcePath":"components/shared/color.js"},{"name":"useDialogA11y","sourcePath":"components/shared/useDialogA11y.js"}]} */

(() => {

const __ds_ns = (window.ForgeDesignSystem_7731a5 = window.ForgeDesignSystem_7731a5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/shared/color.js
try { (() => {
// Shared color utilities — single source of truth for color helpers used by
// any component that needs to reason about an arbitrary fill.
// Ported from src/theme/tokens.js (mateusutz/forge-app).

// Map of design-system color TOKENS → literal hex. This mirrors tokens/colors.css
// and exists only so helpers that need a real hex (onColor) can resolve a token
// reference like "var(--forge-accent)". TARGET: generated from tokens.json (OP-001);
// until then, keep in sync with tokens/colors.css by hand.
const TOKEN_HEX = {
  "--forge-accent": "#EF4444",
  "--forge-nutrition": "#10B981",
  "--forge-success": "#10B981",
  "--forge-warning": "#F59E0B",
  "--forge-danger": "#e36a5a",
  "--forge-macro-protein": "#E5645E",
  "--forge-macro-carb": "#E0A23B",
  "--forge-macro-fat": "#4C9BD6",
  "--forge-cat-1": "#EF4444",
  "--forge-cat-2": "#2563EB",
  "--forge-cat-3": "#8B5CF6",
  "--forge-cat-4": "#10B981",
  "--forge-cat-5": "#F59E0B",
  "--forge-cat-6": "#EC4899"
};

// resolveColor(c) — returns a literal hex for a token reference "var(--forge-x)"
// or passes through an already-literal hex. Falls back to the input unchanged.
function resolveColor(c) {
  if (typeof c !== "string") return c;
  const m = c.match(/var\((--[\w-]+)\)/);
  if (m && TOKEN_HEX[m[1]]) return TOKEN_HEX[m[1]];
  return c;
}

// onColor(input) — picks readable text (#0B0F19 dark / #FFFFFF white) over a fill.
// Uses the brand's perceived-luma heuristic (cut at 0.62): this deliberately
// keeps WHITE text on the accent red (#EF4444), which is a Forge brand rule
// (onAccent = #FFFFFF), not a raw-contrast outcome. Accepts a hex OR a
// design-system token reference (resolved via resolveColor).
// NOTE (OP-015): a pure WCAG max-contrast choice would flip white-on-accent to
// dark-on-accent, breaking the brand. Any future change here must preserve the
// white-on-accent rule; treat that pair as a brand constant, not a computation.
function onColor(input) {
  const hex = resolveColor(input);
  const h = String(hex).replace("#", "");
  if (h.length < 6) return "#FFFFFF"; // unresolved token — default safe
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.62 ? "#0B0F19" : "#FFFFFF";
}
Object.assign(__ds_scope, { resolveColor, onColor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/color.js", error: String((e && e.message) || e) }); }

// components/shared/useDialogA11y.js
try { (() => {
// useDialogA11y — shared modal accessibility for Panel / FullScreen / VideoModal.
// When active: locks body scroll, closes on Escape, and traps Tab focus inside
// the dialog (moving focus into it on open and restoring it on close). Returns
// a ref to attach to the dialog container.
//
// Usage:
//   const ref = useDialogA11y(visible, onClose);
//   <div ref={ref} role="dialog" aria-modal="true" ...>
function useDialogA11y(active, onClose) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!active) return;
    const node = ref.current;
    const prevFocus = typeof document !== "undefined" ? document.activeElement : null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => node ? Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled && el.offsetParent !== null) : [];

    // move focus into the dialog
    const first = focusables()[0];
    if (first) first.focus();else if (node) node.focus();
    const onKey = e => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) {
          e.preventDefault();
          return;
        }
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    };
  }, [active, onClose]);
  return ref;
}
Object.assign(__ds_scope, { useDialogA11y });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/useDialogA11y.js", error: String((e && e.message) || e) }); }

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
  "chevron-right": () => /*#__PURE__*/React.createElement("polyline", {
    points: "9 6 15 12 9 18"
  }),
  "chevron-left": () => /*#__PURE__*/React.createElement("polyline", {
    points: "15 6 9 12 15 18"
  }),
  "chevron-down": () => /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }),
  "chevron-up": () => /*#__PURE__*/React.createElement("polyline", {
    points: "6 15 12 9 18 15"
  }),
  search: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.5",
    y2: "16.5"
  })),
  minus: () => /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }),
  trash: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  })),
  settings: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  share: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8.6",
    y1: "13.5",
    x2: "15.4",
    y2: "17.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15.4",
    y1: "6.5",
    x2: "8.6",
    y2: "10.5"
  })),
  bell: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  clock: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 7 12 12 15 14"
  })),
  "more-horizontal": () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  })),
  eye: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  "eye-off": () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  })),
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
  strokeWidth = 2,
  title
}) {
  const render = PATHS[name];
  if (!render) return null;
  const filled = name === "play";
  // Route color through CSS `color` + currentColor so design-system tokens
  // (e.g. "var(--forge-text-muted)") resolve — a raw var() does NOT resolve as
  // an SVG presentation attribute, but currentColor does. Mirrors the RN source
  // (icons.jsx uses stroke="currentColor").
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      color
    },
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: filled ? 1 : strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title || undefined
  }, title ? /*#__PURE__*/React.createElement("title", null, title) : null, render());
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/ListItem.jsx
try { (() => {
// ListItem — a standard row: optional leading (icon/avatar/dot), title +
// optional subtitle, and an optional trailing slot (value, chevron, Switch…).
// The pattern every screen rebuilds by hand (the family doc calls it rowCard).
// Pass `onClick` to make it a pressable row (role=button, focus, press,
// chevron by default); omit for a static row. `leadingIcon` is a convenience
// for the common icon-in-a-tile leading.
function ListItem({
  title,
  subtitle,
  leading,
  leadingIcon,
  trailing,
  onClick,
  showChevron,
  disabled = false,
  style
}) {
  const pressable = typeof onClick === "function";
  const [pressed, setPressed] = React.useState(false);
  const chevron = (showChevron ?? pressable) && !trailing;
  const lead = leading || (leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--forge-radius-chip)",
      backgroundColor: "var(--forge-surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    color: "var(--forge-text-muted)",
    size: 18
  })) : null);
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, lead, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontWeight: 600,
      fontSize: "var(--forge-text-list-item)",
      color: "var(--forge-text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-chip)",
      color: "var(--forge-text-dim)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subtitle) : null), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center"
    }
  }, trailing) : null, chevron ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    color: "var(--forge-text-faint)",
    size: 18
  }) : null);
  const base = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    minHeight: "var(--forge-tap-target-min)",
    padding: "10px 2px",
    background: "none",
    border: "none",
    opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
    transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
    cursor: pressable && !disabled ? "pointer" : "default",
    ...style
  };
  if (pressable) {
    return /*#__PURE__*/React.createElement("button", {
      className: "forge-focusable",
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseLeave: () => setPressed(false),
      onTouchStart: () => setPressed(true),
      onTouchEnd: () => setPressed(false),
      style: {
        ...base,
        font: "inherit"
      }
    }, body);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, body);
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ring/Ring.jsx
try { (() => {
// Ring — signature progress element: background track + accent arc.
// Pass `indeterminate` for a continuously-spinning loading variant (no
// fixed progress value); pass `segments` (array of {value, color}) for a
// multi-segment ring that shows several contributors (e.g. macros) at once
// on a single track, each segment stacked after the previous.
//
// Color is applied via CSS (stroke in `style`), not as an SVG attribute, so
// design-system tokens like "var(--forge-accent)" resolve. The indeterminate
// spin uses the global .forge-anim-spin class (tokens/motion.css) instead of
// an injected <style>, so reduced-motion is honored in one place.
function Ring({
  size = 120,
  stroke = 10,
  progress = 0,
  color = "var(--forge-accent)",
  track = "var(--forge-surface-raised)",
  children,
  indeterminate = false,
  segments,
  label
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const wrap = {
    position: "relative",
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  if (indeterminate) {
    return /*#__PURE__*/React.createElement("div", {
      style: wrap,
      role: "progressbar",
      "aria-label": label || "Carregando"
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        position: "absolute"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      style: {
        stroke: track
      },
      strokeWidth: stroke,
      fill: "none"
    })), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      className: "forge-anim-spin",
      style: {
        position: "absolute"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      style: {
        stroke: color
      },
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
      style: wrap,
      role: "img",
      "aria-label": label || "Progresso segmentado"
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
      style: {
        stroke: track
      },
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
        style: {
          stroke: seg.color,
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center",
          transition: "stroke-dasharray var(--forge-duration-slow) var(--forge-ease-standard)"
        },
        strokeWidth: stroke,
        fill: "none",
        strokeDasharray: `${dash} ${gap}`,
        strokeLinecap: "butt"
      });
    })), children);
  }
  const clamped = Math.max(0, Math.min(1, progress));
  const offset = circ * (1 - clamped);
  return /*#__PURE__*/React.createElement("div", {
    style: wrap,
    role: "progressbar",
    "aria-valuenow": Math.round(clamped * 100),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label
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
    style: {
      stroke: track
    },
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    style: {
      stroke: color,
      transition: "stroke-dashoffset var(--forge-duration-slow) var(--forge-ease-standard)"
    },
    strokeWidth: stroke,
    fill: "none",
    strokeDasharray: circ,
    strokeDashoffset: offset,
    strokeLinecap: "round"
  })), children);
}
Object.assign(__ds_scope, { Ring });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ring/Ring.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
// Button — the system's action element, one vocabulary for every button-like
// need (OP-006). Axes:
//   variant: "primary" (filled accent) | "secondary" (outlined) | "ghost"
//            (text only) | "danger" (filled danger)
//   size:    "sm" (36) | "md" (44) | "lg" (46, default for primary CTAs)
//   icon:    an ICON_NAMES glyph, placed before (default) or after the label
//   loading: shows an inline spinner and disables the button, preserving width
//   fullWidth: stretches to the container
// `color` overrides the primary fill (e.g. a module accent); text color is
// derived via onColor(). Back-compat: `small` still maps to size="sm".
// This absorbs the old HeaderAction (use variant="secondary" size="sm").
const SIZES = {
  sm: {
    height: "var(--forge-size-control-sm)",
    paddingInline: 13,
    fontSize: 12.5
  },
  md: {
    height: "var(--forge-size-control-md)",
    paddingInline: 16,
    fontSize: 14
  },
  lg: {
    height: "var(--forge-size-control-lg)",
    paddingInline: 18,
    fontSize: 15
  }
};
function Button({
  title,
  onClick,
  variant = "primary",
  size,
  small = false,
  color,
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  style,
  resolvedColor,
  // deprecated (OP-006): onColor() resolves tokens itself
  children
}) {
  const [pressed, setPressed] = React.useState(false);
  const sz = SIZES[size || (small ? "sm" : "lg")] || SIZES.lg;
  const label = title != null ? title : children;
  const isDisabled = disabled || loading;
  const fill = color || "var(--forge-accent)";
  let bg, fg, border;
  if (variant === "secondary") {
    bg = "transparent";
    fg = "var(--forge-text-muted)";
    border = "var(--forge-border-w) solid var(--forge-border-input)";
  } else if (variant === "ghost") {
    bg = "transparent";
    fg = "var(--forge-text-muted)";
    border = "none";
  } else if (variant === "danger") {
    bg = "var(--forge-danger)";
    fg = __ds_scope.onColor("var(--forge-danger)");
    border = "none";
  } else {
    bg = fill;
    fg = __ds_scope.onColor(resolvedColor || fill);
    border = "none";
  }
  const iconEl = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: "currentColor",
    size: 16
  }) : null;
  return /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    type: type,
    onClick: onClick,
    disabled: isDisabled,
    "aria-busy": loading || undefined,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: {
      height: sz.height,
      width: fullWidth ? "100%" : undefined,
      borderRadius: "var(--forge-radius-button)",
      border,
      cursor: isDisabled ? "default" : "pointer",
      paddingInline: sz.paddingInline,
      backgroundColor: bg,
      color: fg,
      fontFamily: "var(--forge-font-body)",
      fontWeight: 800,
      fontSize: sz.fontSize,
      opacity: isDisabled && !loading ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
      transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement(__ds_scope.Spinner, {
    size: 16,
    color: "currentColor",
    label: "Carregando"
  }) : null, !loading && iconEl && iconPosition === "left" ? iconEl : null, label != null ? /*#__PURE__*/React.createElement("span", null, label) : null, !loading && iconEl && iconPosition === "right" ? iconEl : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  title,
  onClick,
  active = false,
  color = "var(--forge-accent)",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: onClick,
    style: {
      height: 40,
      borderRadius: "var(--forge-radius-pill)",
      borderWidth: "var(--forge-border-w-strong)",
      borderStyle: "solid",
      borderColor: active ? color : "var(--forge-border-input)",
      backgroundColor: active ? color : "transparent",
      color: active ? __ds_scope.onColor(color) : "var(--forge-text-muted)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-chip)",
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

// components/overlays/full-screen/FullScreen.jsx
try { (() => {
// Full-screen flow (edit a plan, build a workout) — own header with close (X)
// + title + optional right action, scrollable body, optional fixed footer for
// save/delete. Accessible dialog: role="dialog" + aria-modal, labelled by
// title, Escape to close, focus trapped, scroll locked. Footer respects the
// bottom safe-area inset. Pass `onBeforeClose` to guard unsaved changes — if it
// returns false, the close is cancelled (e.g. "descartar alterações?").
function FullScreen({
  visible = true,
  onClose,
  onBeforeClose,
  title,
  right,
  children,
  footer
}) {
  const requestClose = React.useCallback(() => {
    if (onBeforeClose && onBeforeClose() === false) return;
    onClose && onClose();
  }, [onBeforeClose, onClose]);
  const ref = __ds_scope.useDialogA11y(visible, requestClose);
  const rid = React.useId ? React.useId() : "forge-fs";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "var(--forge-bg)",
      display: "flex",
      flexDirection: "column",
      zIndex: "var(--forge-z-fullscreen)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 18px",
      paddingTop: "max(14px, env(safe-area-inset-top))",
      borderBottom: "var(--forge-border-w) solid var(--forge-divider)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable forge-tap-min",
    onClick: requestClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 18,
      cursor: "pointer",
      marginLeft: -6
    }
  }, "✕"), /*#__PURE__*/React.createElement("div", {
    id: titleId,
    style: {
      flex: 1,
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: "var(--forge-text-panel-title)",
      color: "var(--forge-text)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-title)",
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
      borderTop: "var(--forge-border-w) solid var(--forge-divider)",
      padding: "12px 18px 16px",
      paddingBottom: "max(16px, env(safe-area-inset-bottom))",
      backgroundColor: "var(--forge-bg)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { FullScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/full-screen/FullScreen.jsx", error: String((e && e.message) || e) }); }

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
      fontFamily: "var(--forge-font-body)"
    }
  }, inModule ? /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: onBackToModules,
    "aria-label": "Voltar aos módulos",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(AppBrand, {
    markSrc: markSrc
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(AppBrand, {
    markSrc: markSrc
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, inModule ? /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: onBackToModules,
    style: iconBtnStyle,
    "aria-label": "Voltar aos módulos"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grid",
    color: "var(--forge-text-muted)",
    size: 20
  })) : null, /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: onLogout,
    style: iconBtnStyle,
    "aria-label": "Sair da conta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "logout",
    color: "var(--forge-text-faint)",
    size: 19
  }))));
}
function AppBrand({
  markSrc
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 26,
      height: 26,
      objectFit: "contain"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: "var(--forge-tracking-title)",
      textTransform: "uppercase",
      color: "var(--forge-text)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-accent)"
    }
  }, "F"), "orge"));
}
const iconBtnStyle = {
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer"
};
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/app-header/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
// Card — base surface container. Optional left accent stripe (stripeColor).
// Pass `onClick` to make it a pressable card (keyboard-focusable, role=button,
// press/selected states) — the pattern several screens reconstruct by hand.
// `selected` draws an accent border (for choose-from-a-list contexts).
// `header`/`footer` are optional slots rendered above/below the body inside the
// content column. When a stripe is present the body padding is slightly larger
// so text clears the stripe.
function Card({
  children,
  stripeColor,
  onClick,
  selected = false,
  header,
  footer,
  disabled = false,
  style
}) {
  const pressable = typeof onClick === "function";
  const [pressed, setPressed] = React.useState(false);
  const base = {
    display: "flex",
    backgroundColor: "var(--forge-surface)",
    borderRadius: "var(--forge-radius-card)",
    border: `var(--forge-border-w) solid ${selected ? "var(--forge-accent)" : "var(--forge-border)"}`,
    overflow: "hidden",
    marginBottom: "var(--forge-space-card-gap)",
    width: "100%",
    textAlign: "left",
    opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
    transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
    cursor: pressable && !disabled ? "pointer" : "default",
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, stripeColor ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      flexShrink: 0,
      backgroundColor: stripeColor
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: stripeColor ? "var(--forge-space-12)" : "var(--forge-space-card)"
    }
  }, header ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--forge-space-5)"
    }
  }, header) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--forge-space-5)"
    }
  }, footer) : null));
  if (pressable) {
    return /*#__PURE__*/React.createElement("button", {
      className: "forge-focusable",
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      "aria-pressed": selected || undefined,
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseLeave: () => setPressed(false),
      onTouchStart: () => setPressed(true),
      onTouchEnd: () => setPressed(false),
      style: {
        ...base,
        font: "inherit",
        padding: 0
      }
    }, inner);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ConfirmButton.jsx
try { (() => {
// Destructive action, confirmed in 2 taps — design-system rule: never
// delete on a single tap. First tap arms a 2.5s confirm window. The armed
// state is announced to screen readers via an aria-live region, and the
// button's accessible name updates to the confirm label. Min height is 44px
// (a11y tap target) even in the compact form.
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: press,
    "aria-label": arming ? confirmTitle : title,
    style: {
      minHeight: "var(--forge-tap-target-min)",
      height: small ? 34 : 44,
      borderRadius: "var(--forge-radius-chip)",
      borderWidth: "var(--forge-border-w-strong)",
      borderStyle: "solid",
      borderColor: "var(--forge-danger)",
      backgroundColor: arming ? "var(--forge-danger)" : "transparent",
      color: arming ? "var(--forge-on-dark)" : "var(--forge-danger)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 12,
      paddingInline: 12,
      cursor: "pointer",
      transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard), color var(--forge-duration-fast) var(--forge-ease-standard)",
      ...style
    }
  }, arming ? confirmTitle : title), /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    className: "forge-sr-only"
  }, arming ? "Toque de novo para confirmar a exclusão" : ""));
}
Object.assign(__ds_scope, { ConfirmButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ConfirmButton.jsx", error: String((e && e.message) || e) }); }

// components/core/HeaderAction.jsx
try { (() => {
// HeaderAction — discreet outlined action for a full-screen header (e.g.
// "Replicar"). DEPRECATED as a distinct component (OP-006): this is now just
// Button variant="secondary" size="sm". Kept as a thin alias so existing
// call sites keep working; prefer <Button variant="secondary" size="sm" /> in
// new code.
function HeaderAction({
  title,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    title: title,
    onClick: onClick,
    ...rest
  });
}
Object.assign(__ds_scope, { HeaderAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HeaderAction.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
// EmptyState — reframed-positive empty/rest content block (never just
// blank). Componentized version of the pattern seen for rest days and
// "no items yet" lists. Pass `action` (e.g. a <Button small />) to offer the
// natural next step ("criar o primeiro X") — an empty state without a way
// forward is a dead end (OP-127).
function EmptyState({
  icon = "moon",
  title,
  subtitle,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--forge-space-6)",
      backgroundColor: "var(--forge-surface)",
      border: "var(--forge-border-w) solid var(--forge-border)",
      borderRadius: "var(--forge-radius-card)",
      padding: "var(--forge-space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--forge-radius-chip)",
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: "var(--forge-text-faint)",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-faint)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 600,
      fontSize: 15
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-chip)",
      marginTop: 3,
      lineHeight: "var(--forge-lh-chip)"
    }
  }, subtitle) : null), action || null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineAlert.jsx
try { (() => {
// InlineAlert — the banner treatment used for program reminders / warnings
// (e.g. the amber "Lembrete do programa" banner in Treino). Never a toast —
// this design system has no toast pattern; persistent context-relevant
// notices live inline, in the flow of the screen.
//
// Fill/border are derived from the semantic accent via color-mix over the
// current surface, so the component adapts to light theme automatically
// (OP-011) instead of relying on dark-only hex.
const KIND = {
  info: {
    accent: "var(--forge-macro-fat)",
    icon: "info",
    role: "status"
  },
  success: {
    accent: "var(--forge-success)",
    icon: "check",
    role: "status"
  },
  warning: {
    accent: "var(--forge-warning)",
    icon: "warn",
    role: "status"
  },
  danger: {
    accent: "var(--forge-danger)",
    icon: "warn",
    role: "alert"
  }
};
function InlineAlert({
  kind = "warning",
  title,
  children
}) {
  const s = KIND[kind] || KIND.warning;
  const bg = `color-mix(in srgb, ${s.accent} 12%, var(--forge-surface))`;
  const border = `color-mix(in srgb, ${s.accent} 40%, var(--forge-border))`;
  return /*#__PURE__*/React.createElement("div", {
    role: s.role,
    style: {
      display: "flex",
      gap: "var(--forge-space-5)",
      alignItems: "flex-start",
      padding: "var(--forge-space-8)",
      borderRadius: "var(--forge-radius-card)",
      border: `var(--forge-border-w) solid ${border}`,
      backgroundColor: bg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    color: s.accent,
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: "var(--forge-text-body-sm)",
      color: "var(--forge-text)",
      lineHeight: "var(--forge-lh-body)",
      fontFamily: "var(--forge-font-body)"
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
// LoadingScreen). A spinning Ring arc at icon scale, for inline use inside a
// button, row, or section while content loads. Uses the global .forge-anim-spin
// class (tokens/motion.css) so reduced-motion is honored globally — the old
// inline-<style> attribute-selector approach did not reliably match React's
// serialized style and could keep spinning under reduced-motion (P-11).
function Spinner({
  size = 20,
  stroke,
  color = "var(--forge-accent)",
  label = "Carregando"
}) {
  const sw = stroke || Math.max(2, size * 0.14);
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    className: "forge-anim-spin",
    style: {
      color
    },
    role: "status",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    style: {
      stroke: "currentColor"
    },
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
// strength/reps = good), so color stays meaningful either way. A "bad" trend
// uses --forge-negative, kept distinct from --forge-danger (destructive) so a
// worsening metric never looks like a delete action (OP-129).
function StatBadge({
  value,
  unit = "",
  goodDirection = "down",
  threshold = 0.05
}) {
  const flat = Math.abs(value) < threshold;
  const dir = flat ? "flat" : value > 0 ? "up" : "down";
  const isGood = flat ? null : dir === goodDirection;
  const color = flat ? "var(--forge-text-dim)" : isGood ? "var(--forge-success)" : "var(--forge-negative)";
  const iconName = flat ? null : dir === "up" ? "up" : "down";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      color,
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-chip)"
    }
  }, iconName ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    color: color,
    size: 13
  }) : null, /*#__PURE__*/React.createElement("span", null, flat ? "\u2014" : `${value > 0 ? "+" : ""}${value}${unit}`));
}
Object.assign(__ds_scope, { StatBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ErrorState.jsx
try { (() => {
// ErrorState — sibling of EmptyState for when something failed to load. Warn
// glyph + no-blame message + a retry action (an error state without a way
// forward is a dead end — OP-041/066). Copy should follow the brand voice:
// "Não conseguimos carregar" over "Erro 500". `onRetry` renders the retry
// button; `retryLabel` customizes it. Two layouts: inline `compact` (row, like
// EmptyState) and full (centered block) for whole-screen failures.
function ErrorState({
  title = "Algo não carregou",
  subtitle = "Verifique a conexão e tente de novo.",
  onRetry,
  retryLabel = "Tentar de novo",
  icon = "warn",
  compact = false,
  style
}) {
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      role: "alert",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--forge-space-6)",
        backgroundColor: "var(--forge-surface)",
        border: "var(--forge-border-w) solid var(--forge-border)",
        borderRadius: "var(--forge-radius-card)",
        padding: "var(--forge-space-8)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--forge-radius-chip)",
        backgroundColor: "var(--forge-surface-raised)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      color: "var(--forge-danger)",
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--forge-text)",
        fontFamily: "var(--forge-font-body)",
        fontWeight: 600,
        fontSize: 15
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--forge-text-dim)",
        fontFamily: "var(--forge-font-body)",
        fontSize: "var(--forge-text-chip)",
        marginTop: 3,
        lineHeight: "var(--forge-lh-chip)"
      }
    }, subtitle) : null), onRetry ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      size: "sm",
      icon: "refresh",
      title: retryLabel,
      onClick: onRetry
    }) : null);
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--forge-space-6)",
      padding: "var(--forge-space-16) var(--forge-space-8)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--forge-radius-pill)",
      backgroundColor: "var(--forge-surface-raised)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: "var(--forge-danger)",
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 17
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-body)",
      marginTop: 5,
      lineHeight: "var(--forge-lh-body)",
      maxWidth: 280
    }
  }, subtitle) : null), onRetry ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "md",
    icon: "refresh",
    title: retryLabel,
    onClick: onRetry
  }) : null);
}
Object.assign(__ds_scope, { ErrorState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ErrorState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
// Skeleton — content placeholder shown while data loads (sits between the
// full-screen LoadingScreen and the inline Spinner in the loading hierarchy:
// boot=LoadingScreen, screen/content=Skeleton, section/button=Spinner).
// Uses the global pulse animation (tokens/motion.css → .forge-anim-pulse),
// so it honors reduced-motion. `variant`: "line" | "block" | "circle".
// Compose several to sketch a card's shape.
function Skeleton({
  variant = "line",
  width,
  height,
  radius,
  style
}) {
  const dims = variant === "circle" ? {
    width: width || 34,
    height: height || width || 34,
    borderRadius: "var(--forge-radius-pill)"
  } : variant === "block" ? {
    width: width || "100%",
    height: height || 64,
    borderRadius: radius || "var(--forge-radius-card)"
  } : {
    width: width || "100%",
    height: height || 12,
    borderRadius: radius || "var(--forge-radius-chip)"
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "forge-anim-pulse",
    style: {
      backgroundColor: "var(--forge-surface-raised)",
      ...dims,
      ...style
    }
  });
}

// SkeletonText — n stacked lines, last one shorter, for paragraph placeholders.
function SkeletonText({
  lines = 3,
  gap = 8,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-label": "Carregando",
    style: {
      display: "flex",
      flexDirection: "column",
      gap,
      ...style
    }
  }, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    variant: "line",
    width: i === lines - 1 ? "60%" : "100%"
  })));
}
Object.assign(__ds_scope, { Skeleton, SkeletonText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

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
  accent = "var(--forge-nutrition)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "var(--forge-surface)",
      border: "var(--forge-border-w) solid var(--forge-border)",
      borderRadius: "var(--forge-radius-card)",
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 11.5,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: "var(--forge-text-faint)"
    }
  }, "Suas metas diárias"), onEdit ? /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      background: "none",
      border: "none",
      color: accent,
      fontFamily: "var(--forge-font-body)",
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
    label: "Proteína",
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
      fontFamily: "var(--forge-font-title)",
      fontSize: 24,
      color
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--forge-font-body)",
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
      fontFamily: "var(--forge-font-title)",
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
      fontFamily: "var(--forge-font-body)",
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
      role: "progressbar",
      "aria-label": label,
      "aria-valuenow": Math.round(value),
      "aria-valuemin": 0,
      "aria-valuemax": Math.round(target),
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
        transition: "width var(--forge-duration-base) var(--forge-ease-standard)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--forge-text-dim)",
        fontFamily: "var(--forge-font-body)",
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 600,
      fontSize: 12.5
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-dim)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 600,
      fontSize: 12
    }
  }, Math.round(value), " / ", Math.round(target), " ", unit)), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-label": label,
    "aria-valuenow": Math.round(value),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(target),
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
      transition: "width var(--forge-duration-base) var(--forge-ease-standard)"
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
      role: "img",
      "aria-label": "Distribuição por refeição",
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
        transition: "width var(--forge-duration-base) var(--forge-ease-standard)",
        borderRight: i < segments.length - 1 ? "var(--forge-border-w-strong) solid var(--forge-surface-raised)" : "none"
      }
    })));
  }
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  const over = target > 0 && value > target;
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": Math.round(value),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(target),
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
      transition: "width var(--forge-duration-base) var(--forge-ease-standard), background-color var(--forge-duration-base) var(--forge-ease-standard)"
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
// viewBox 280x60, pad 6. Color applied via CSS (currentColor) so tokens
// resolve. Guards against empty/single-point input (P-10). Gradient id is
// unique per instance via React.useId so multiple charts on one page don't
// bleed into each other (P-10).
function MiniChart({
  values,
  color = "var(--forge-accent)",
  variant = "line",
  title
}) {
  const uid = React.useId ? React.useId() : "forge-mc";
  const gradId = `forge-minichart-grad-${uid}`;
  const data = Array.isArray(values) ? values.filter(v => typeof v === "number" && !Number.isNaN(v)) : [];
  const W = 280,
    H = 60,
    pad = 6;
  if (data.length === 0) {
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: 60,
      viewBox: `0 0 ${W} ${H}`,
      role: "img",
      "aria-label": title || "Sem dados",
      style: {
        color
      }
    });
  }
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  if (variant === "bar") {
    const n = data.length;
    const bw = (W - 2 * pad) / n;
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: 60,
      viewBox: `0 0 ${W} ${H}`,
      style: {
        color
      },
      role: "img",
      "aria-label": title || "Gráfico de barras"
    }, data.map((v, i) => {
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
        fill: "currentColor"
      });
    }));
  }
  const pts = data.map((v, i) => {
    const x = pad + i / Math.max(data.length - 1, 1) * (W - 2 * pad);
    const y = H - pad - (v - min) / range * (H - 2 * pad);
    return [x, y];
  });
  const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  if (variant === "area") {
    const areaD = d + ` L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pts[0][0].toFixed(1)},${H - pad} Z`;
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: 60,
      viewBox: `0 0 ${W} ${H}`,
      style: {
        color
      },
      role: "img",
      "aria-label": title || "Gráfico de área"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: gradId,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "currentColor",
      stopOpacity: "0.35"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "currentColor",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: areaD,
      fill: `url(#${gradId})`,
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: 60,
    viewBox: `0 0 ${W} ${H}`,
    style: {
      color
    },
    role: "img",
    "aria-label": title || "Gráfico de linha"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p[0],
    cy: p[1],
    r: 3.5,
    fill: "currentColor"
  })));
}
Object.assign(__ds_scope, { MiniChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/mini-chart/MiniChart.jsx", error: String((e && e.message) || e) }); }

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
      fontFamily: "var(--forge-font-body)",
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 12,
      paddingInline: 8,
      cursor: "pointer"
    }
  }, unit) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-text-muted)",
      fontFamily: "var(--forge-font-body)",
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
// TextField — labelled text input (single or multiline).
// The label is a real <label htmlFor>, associated to the field by a generated
// id, so screen readers announce it. Pass `error` to show an inline error
// message (role="alert"), set aria-invalid, and tie the message to the field
// via aria-describedby; pass `helper` for non-error guidance. `required` and
// `disabled` supported.
function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  error,
  helper,
  required = false,
  disabled = false,
  inputMode,
  style
}) {
  const rid = React.useId ? React.useId() : "forge-tf";
  const fieldId = `${rid}-field`;
  const msgId = `${rid}-msg`;
  const describedBy = error || helper ? msgId : undefined;
  const fieldStyle = {
    width: "100%",
    borderRadius: "var(--forge-radius-input)",
    border: `var(--forge-border-w) solid ${error ? "var(--forge-danger)" : "var(--forge-border-input)"}`,
    backgroundColor: "var(--forge-surface-raised)",
    color: "var(--forge-text)",
    fontFamily: "var(--forge-font-body)",
    fontSize: "var(--forge-text-input)",
    boxSizing: "border-box",
    opacity: disabled ? "var(--forge-opacity-disabled)" : 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "block",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-label)",
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-label)",
      marginBottom: 6
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--forge-danger)"
    },
    "aria-hidden": "true"
  }, " *") : null) : null, multiline ? /*#__PURE__*/React.createElement("textarea", {
    id: fieldId,
    className: "forge-focusable",
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      ...fieldStyle,
      height: 84,
      padding: "10px 12px",
      resize: "none"
    }
  }) : /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    className: "forge-focusable",
    type: type,
    inputMode: inputMode,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      ...fieldStyle,
      height: 44,
      paddingInline: 12
    }
  }), error ? /*#__PURE__*/React.createElement("div", {
    id: msgId,
    role: "alert",
    style: {
      marginTop: 5,
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-body-sm)",
      color: "var(--forge-danger)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("div", {
    id: msgId,
    style: {
      marginTop: 5,
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-body-sm)",
      color: "var(--forge-text-dim)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
// Switch — on/off toggle (e.g. kg/lb preference, enable a meal). Accessible:
// role="switch" + aria-checked, keyboard-focusable, labelled. Pass `label` to
// render a tappable row with the switch on the right (the common form layout),
// or omit it for a bare switch. Disabled supported.
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const rid = React.useId ? React.useId() : id || "forge-switch";
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const knob = /*#__PURE__*/React.createElement("span", {
    className: "forge-focusable",
    role: "switch",
    "aria-checked": checked,
    "aria-labelledby": label ? `${rid}-label` : undefined,
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--forge-radius-pill)",
      backgroundColor: checked ? "var(--forge-accent)" : "var(--forge-surface-raised)",
      border: `var(--forge-border-w) solid ${checked ? "var(--forge-accent)" : "var(--forge-border-input)"}`,
      display: "inline-flex",
      alignItems: "center",
      padding: 2,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
      transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard)",
      flexShrink: 0,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--forge-radius-pill)",
      backgroundColor: checked ? "var(--forge-on-accent)" : "var(--forge-text-faint)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--forge-duration-fast) var(--forge-ease-standard)"
    }
  }));
  if (!label) return knob;
  return /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      minHeight: "var(--forge-tap-target-min)",
      cursor: disabled ? "default" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    id: `${rid}-label`,
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-list-item)",
      color: "var(--forge-text)"
    }
  }, label), knob);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
// Stepper — numeric +/- control (sets, reps, quantity). The most-touched
// control in a training app. Accessibility follows the hard-won TalkBack rule
// from the app: do NOT wrap the pair in role="adjustable"/spinbutton (that
// hides the inner buttons); instead expose two real buttons with clear labels
// and a live region announcing the value. Respects min/max/step and disables
// the relevant button at the bounds.
function Stepper({
  value = 0,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  unit = "",
  label,
  disabled = false,
  style
}) {
  const rid = React.useId ? React.useId() : "forge-stepper";
  const set = v => {
    const c = Math.min(max, Math.max(min, v));
    if (onChange && c !== value) onChange(c);
  };
  const canDec = !disabled && value - step >= min;
  const canInc = !disabled && value + step <= max;
  const btn = (dir, enabled, onClick, glyph) => /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: onClick,
    disabled: !enabled,
    "aria-label": dir === "dec" ? `Diminuir ${label || ""}`.trim() : `Aumentar ${label || ""}`.trim(),
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--forge-radius-input)",
      border: "var(--forge-border-w) solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: enabled ? "pointer" : "default",
      opacity: enabled ? 1 : "var(--forge-opacity-disabled)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    color: "currentColor",
    size: 18
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, btn("dec", canDec, () => set(value - step), "minus"), /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    "aria-label": label ? `${label}: ${value}${unit}` : undefined,
    style: {
      minWidth: 48,
      textAlign: "center",
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--forge-text)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--forge-text-dim)"
    }
  }, unit) : null), btn("inc", canInc, () => set(value + step), "plus"));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
// SearchField — text input with a leading search glyph and a clear (✕) button
// when non-empty. For food/exercise lookup. type="search", labelled for screen
// readers; the clear button has an aria-label. Focus ring on the wrapper.
function SearchField({
  value = "",
  onChange,
  placeholder = "Buscar",
  onSubmit,
  autoFocus = false,
  style
}) {
  const rid = React.useId ? React.useId() : "forge-search";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      paddingInline: 12,
      borderRadius: "var(--forge-radius-input)",
      border: "var(--forge-border-w) solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    color: "var(--forge-text-dim)",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    id: rid,
    className: "forge-focusable",
    type: "search",
    value: value,
    placeholder: placeholder,
    autoFocus: autoFocus,
    "aria-label": placeholder,
    enterKeyHint: "search",
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && onSubmit) onSubmit(value);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      background: "none",
      border: "none",
      outline: "none",
      color: "var(--forge-text)",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-input)"
    }
  }), value ? /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: () => onChange && onChange(""),
    "aria-label": "Limpar busca",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    color: "var(--forge-text-dim)",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
// Select — choose one option from a list. Instead of a floating dropdown
// (which the system avoids), the trigger opens a Panel of options — the
// canonical Forge choose-from-a-list pattern. Options: array of
// { value, label, subtitle? }. The trigger looks like a field; the current
// label (or placeholder) shows with a chevron. Fully keyboard/AT accessible via
// Panel's dialog semantics and ListItem rows.
function Select({
  value,
  options = [],
  onChange,
  label,
  placeholder = "Selecionar",
  title,
  disabled = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const rid = React.useId ? React.useId() : "forge-select";
  const current = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    id: `${rid}-label`,
    style: {
      display: "block",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-label)",
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-label)",
      marginBottom: 6
    }
  }, label) : null, /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: () => !disabled && setOpen(true),
    disabled: disabled,
    "aria-haspopup": "dialog",
    "aria-expanded": open,
    "aria-labelledby": label ? `${rid}-label` : undefined,
    style: {
      width: "100%",
      height: 44,
      paddingInline: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      borderRadius: "var(--forge-radius-input)",
      border: "var(--forge-border-w) solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: current ? "var(--forge-text)" : "var(--forge-text-dim)",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-input)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? "var(--forge-opacity-disabled)" : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    color: "var(--forge-text-dim)",
    size: 18
  })), /*#__PURE__*/React.createElement(__ds_scope.Panel, {
    visible: open,
    onClose: () => setOpen(false),
    title: title || label || placeholder
  }, options.map(o => /*#__PURE__*/React.createElement(__ds_scope.ListItem, {
    key: String(o.value),
    title: o.label,
    subtitle: o.subtitle,
    trailing: o.value === value ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      color: "var(--forge-accent)",
      size: 18
    }) : null,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

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
      padding: "8px var(--forge-space-screen-h) 24px",
      maxWidth: "var(--forge-app-max-width)",
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
      maxWidth: "var(--forge-app-max-width)",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, children)));
}
Object.assign(__ds_scope, { Screen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/screen/Screen.jsx", error: String((e && e.message) || e) }); }

// components/navigation/module-header/ModuleHeader.jsx
try { (() => {
// Screen-top header: small uppercase eyebrow + large Barlow title (the single
// screen-title style, via <Title size="screenTitle">, so there's one screen
// title in the system — OP-013/P-12), plus an optional right-aligned slot.
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "var(--forge-tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement(__ds_scope.Title, {
    size: "screenTitle",
    as: "h1"
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
  accent = "var(--forge-accent)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      backgroundColor: "var(--forge-panel)",
      borderTop: "var(--forge-border-w) solid var(--forge-divider)",
      paddingTop: 8,
      paddingBottom: "max(8px, env(safe-area-inset-bottom))",
      paddingInline: 4
    }
  }, tabs.map(t => {
    const on = t.id === active;
    const color = on ? accent : "var(--forge-text-dim)";
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "forge-focusable",
      role: "tab",
      "aria-selected": on,
      "aria-label": t.label,
      onClick: () => onChange && onChange(t.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        minHeight: 44,
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
        fontFamily: "var(--forge-font-body)",
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
// element (or any player) in a heavy scrim with a close button; tap outside or
// the ✕ closes it. On native this wraps react-native-youtube-iframe (raw
// WebView iframes fail on Android — see readme "known pitfalls"). Accessible
// dialog: role + aria-modal, Escape, focus trap, scroll lock.
function VideoModal({
  visible,
  onClose,
  title,
  children
}) {
  const ref = __ds_scope.useDialogA11y(visible, onClose);
  const rid = React.useId ? React.useId() : "forge-video";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "var(--forge-scrim-heavy)",
      display: "flex",
      flexDirection: "column",
      zIndex: "var(--forge-z-video)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    onClick: e => e.stopPropagation(),
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    id: titleId,
    style: {
      color: "var(--forge-text)",
      fontFamily: "var(--forge-font-title)",
      fontSize: 18,
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-title)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable forge-tap-min",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 20,
      cursor: "pointer"
    }
  }, "✕")), /*#__PURE__*/React.createElement("div", {
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
      backgroundColor: "var(--forge-scrim-heavy)",
      borderRadius: "var(--forge-radius-video)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children))));
}
Object.assign(__ds_scope, { VideoModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/VideoModal.jsx", error: String((e && e.message) || e) }); }

// components/overlays/panel/Panel.jsx
try { (() => {
// Centered modal panel — dark scrim + panel. Used for small
// choices/confirmations (pick-a-workout, schedule editor). Accessible dialog:
// role="dialog" + aria-modal, labelled by its title, Escape to close, focus
// trapped inside, body scroll locked, focus restored on close. Tap-outside
// closes unless `dismissible={false}` (use for flows that must not be lost).
function Panel({
  visible,
  onClose,
  title,
  children,
  footer,
  dismissible = true
}) {
  const ref = __ds_scope.useDialogA11y(visible, dismissible ? onClose : undefined);
  const rid = React.useId ? React.useId() : "forge-panel";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: dismissible ? onClose : undefined,
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "var(--forge-scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      zIndex: "var(--forge-z-overlay)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    tabIndex: -1,
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: "var(--forge-panel)",
      borderRadius: "var(--forge-radius-panel)",
      border: "var(--forge-border-w) solid var(--forge-border)",
      width: "100%",
      maxWidth: 440,
      maxHeight: "80dvh",
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
    id: titleId,
    style: {
      flex: 1,
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: "var(--forge-text-panel-title)",
      color: "var(--forge-text)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-title)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable forge-tap-min",
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: "none",
      border: "none",
      color: "var(--forge-text-muted)",
      fontSize: 18,
      cursor: "pointer"
    }
  }, "✕")), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: size === "miniLabel" ? "var(--forge-text-mini-label)" : "var(--forge-text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-label)",
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-label)",
      color: "var(--forge-text-faint)",
      marginTop: 14,
      marginBottom: 8,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/typography/Text.jsx
try { (() => {
// Text — body-copy primitive (Inter). This is the missing everyday-text
// component: screens currently style raw <div>s by hand for body text. Sizes
// map to the type scale; `weight` and `color` are props; `as` picks the
// element (span/div/p/label). cardTitle lives here (not in Title) — it's Inter
// bold, not a Barlow heading (OP-013/P-13).
const SIZE = {
  cardTitle: {
    fontSize: "var(--forge-text-card-title)",
    lineHeight: "var(--forge-lh-card-title)",
    fontWeight: 700
  },
  listItem: {
    fontSize: "var(--forge-text-list-item)",
    lineHeight: "var(--forge-lh-list-item)"
  },
  body: {
    fontSize: "var(--forge-text-body)",
    lineHeight: "var(--forge-lh-body)"
  },
  bodySm: {
    fontSize: "var(--forge-text-body-sm)",
    lineHeight: "var(--forge-lh-body-sm)"
  },
  chip: {
    fontSize: "var(--forge-text-chip)",
    lineHeight: "var(--forge-lh-chip)"
  }
};
function Text({
  children,
  size = "body",
  weight,
  color = "var(--forge-text)",
  as = "span",
  style
}) {
  const El = as;
  const s = SIZE[size] || SIZE.body;
  return /*#__PURE__*/React.createElement(El, {
    style: {
      fontFamily: "var(--forge-font-body)",
      color,
      ...s,
      ...(weight ? {
        fontWeight: weight
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Text.jsx", error: String((e && e.message) || e) }); }

// components/typography/Title.jsx
try { (() => {
// Title — large Barlow Condensed uppercase heading. Sizes map to the type
// scale's title tokens (logoLg 40 / screenTitle 34 / panelTitle 22).
// Pass `as` ("h1".."h3") for correct heading semantics (defaults to a div).
// NOTE: cardTitle moved to <Text size="cardTitle"> — a card title is Inter
// body-bold, not a Barlow heading; the alias below is kept for back-compat but
// deprecated (OP-013/P-13).
const SIZE = {
  logoLg: {
    fontSize: "var(--forge-text-logo-lg)",
    lineHeight: "var(--forge-lh-logo-lg)"
  },
  screenTitle: {
    fontSize: "var(--forge-text-screen-title)",
    lineHeight: "var(--forge-lh-screen-title)"
  },
  panelTitle: {
    fontSize: "var(--forge-text-panel-title)",
    lineHeight: "var(--forge-lh-panel-title)"
  },
  cardTitle: {
    fontSize: "var(--forge-text-card-title)",
    lineHeight: "var(--forge-lh-card-title)",
    textTransform: "none",
    letterSpacing: 0,
    fontFamily: "var(--forge-font-body)",
    fontWeight: 700
  }
};
function Title({
  children,
  size = "screenTitle",
  color = "var(--forge-text)",
  as = "div",
  style
}) {
  const El = as;
  const s = SIZE[size] || SIZE.screenTitle;
  const isCard = size === "cardTitle";
  return /*#__PURE__*/React.createElement(El, {
    style: {
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-title)",
      color,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Title });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Title.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/StatCard.jsx
try { (() => {
// StatCard — a dashboard metric cell (PF-02, OP-023). The "DashboardTile" the
// screens would otherwise remount by hand: an eyebrow label, a big Barlow value
// (tabular numerals so figures don't jitter), an optional leading icon, an
// optional trend (StatBadge) and an optional sparkline (MiniChart). Composes
// primitives — it holds no product copy, so it works for a workout stat, a
// nutrition total, or a sibling app.
//
// Pass `onClick` to make the whole cell a pressable tile (Card handles the
// role=button + focus + press state) — this is the navigable "tile" sense.
// `accent` tints the left stripe and the icon (e.g. a module color); when
// omitted the cell is neutral. `chart` takes MiniChart props ({ values,
// variant, color }); `trend` takes StatBadge props ({ value, unit,
// goodDirection }).
function StatCard({
  label,
  value,
  unit,
  icon,
  accent,
  trend,
  chart,
  caption,
  onClick,
  style
}) {
  const head = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--forge-space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--forge-space-4)",
      minWidth: 0
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "var(--forge-radius-chip)",
      backgroundColor: "var(--forge-surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: accent || "var(--forge-text-faint)",
    size: 15
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-label)",
      letterSpacing: "var(--forge-tracking-label)",
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      fontWeight: 700,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, label)), trend ? /*#__PURE__*/React.createElement(__ds_scope.StatBadge, trend) : null);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    stripeColor: accent,
    onClick: onClick,
    style: {
      marginBottom: 0,
      ...style
    }
  }, head, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--forge-space-2)",
      marginTop: "var(--forge-space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1,
      color: "var(--forge-text)",
      fontVariantNumeric: "tabular-nums",
      letterSpacing: "var(--forge-tracking-title)"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-body)",
      color: "var(--forge-text-dim)",
      fontWeight: 600
    }
  }, unit) : null), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-chip)",
      color: "var(--forge-text-dim)",
      marginTop: "var(--forge-space-2)",
      lineHeight: "var(--forge-lh-chip)"
    }
  }, caption) : null, chart ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--forge-space-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MiniChart, chart)) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/QuickAction.jsx
try { (() => {
// QuickAction — an icon+label shortcut for a dashboard grid (PF-02, OP-024).
// One cell: a rounded icon chip over a short label, the whole thing a real
// button (keyboard-focusable, press state, ≥44px target). Lay several out in a
// CSS grid on the consumer side — QuickAction fills its cell (width 100%).
//
// `accent` tints the icon chip (e.g. a module color); omit for neutral.
// `badge` shows a small count dot (e.g. pending items). No product copy lives
// here — `icon`/`label` are supplied by the screen.
function QuickAction({
  icon,
  label,
  onClick,
  accent,
  badge,
  disabled = false,
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const tint = accent || "var(--forge-accent)";
  return /*#__PURE__*/React.createElement("button", {
    className: "forge-focusable",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: {
      width: "100%",
      minHeight: "var(--forge-tap-target-min)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--forge-space-5)",
      padding: "var(--forge-space-8) var(--forge-space-6)",
      backgroundColor: "var(--forge-surface)",
      border: "var(--forge-border-w) solid var(--forge-border)",
      borderRadius: "var(--forge-radius-card)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
      transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
      font: "inherit",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      borderRadius: "var(--forge-radius-input)",
      backgroundColor: "var(--forge-surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    color: tint,
    size: 22
  }), badge != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -4,
      minWidth: 18,
      height: 18,
      paddingInline: 4,
      borderRadius: "var(--forge-radius-pill)",
      backgroundColor: "var(--forge-accent)",
      color: "var(--forge-on-accent)",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-mini-label)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box"
    }
  }, badge) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-chip)",
      fontWeight: 600,
      color: "var(--forge-text)",
      textAlign: "center",
      lineHeight: "var(--forge-lh-chip)"
    }
  }, label));
}
Object.assign(__ds_scope, { QuickAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/QuickAction.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Ring = __ds_scope.Ring;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.FullScreen = __ds_scope.FullScreen;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ConfirmButton = __ds_scope.ConfirmButton;

__ds_ns.HeaderAction = __ds_scope.HeaderAction;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.InlineAlert = __ds_scope.InlineAlert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StatBadge = __ds_scope.StatBadge;

__ds_ns.ErrorState = __ds_scope.ErrorState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonText = __ds_scope.SkeletonText;

__ds_ns.TargetsCard = __ds_scope.TargetsCard;

__ds_ns.LoadingScreen = __ds_scope.LoadingScreen;

__ds_ns.MacroMeter = __ds_scope.MacroMeter;

__ds_ns.MetaBar = __ds_scope.MetaBar;

__ds_ns.MiniChart = __ds_scope.MiniChart;

__ds_ns.QtyInput = __ds_scope.QtyInput;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ScreenBody = __ds_scope.ScreenBody;

__ds_ns.Screen = __ds_scope.Screen;

__ds_ns.ModuleHeader = __ds_scope.ModuleHeader;

__ds_ns.ModuleTabBar = __ds_scope.ModuleTabBar;

__ds_ns.VideoModal = __ds_scope.VideoModal;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.Title = __ds_scope.Title;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.QuickAction = __ds_scope.QuickAction;

})();
