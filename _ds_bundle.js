/* @ds-bundle: {"format":4,"namespace":"ForgeDesignSystem_7731a5","components":[{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Ring","sourcePath":"components/feedback/ring/Ring.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"FullScreen","sourcePath":"components/overlays/full-screen/FullScreen.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/app-header/AppHeader.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ConfirmButton","sourcePath":"components/core/ConfirmButton.jsx"},{"name":"HeaderAction","sourcePath":"components/core/HeaderAction.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"InlineAlert","sourcePath":"components/feedback/InlineAlert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatBadge","sourcePath":"components/feedback/StatBadge.jsx"},{"name":"TargetsCard","sourcePath":"components/feedback/TargetsCard.jsx"},{"name":"LoadingScreen","sourcePath":"components/feedback/loading-screen/LoadingScreen.jsx"},{"name":"MacroMeter","sourcePath":"components/feedback/macro-meter/MacroMeter.jsx"},{"name":"MetaBar","sourcePath":"components/feedback/meta-bar/MetaBar.jsx"},{"name":"MiniChart","sourcePath":"components/feedback/mini-chart/MiniChart.jsx"},{"name":"QtyInput","sourcePath":"components/forms/QtyInput.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"ScreenBody","sourcePath":"components/layout/screen-body/ScreenBody.jsx"},{"name":"Screen","sourcePath":"components/layout/screen/Screen.jsx"},{"name":"ModuleHeader","sourcePath":"components/navigation/module-header/ModuleHeader.jsx"},{"name":"ModuleTabBar","sourcePath":"components/navigation/module-tab-bar/ModuleTabBar.jsx"},{"name":"VideoModal","sourcePath":"components/overlays/VideoModal.jsx"},{"name":"Panel","sourcePath":"components/overlays/panel/Panel.jsx"},{"name":"Label","sourcePath":"components/typography/Label.jsx"},{"name":"SectionLabel","sourcePath":"components/typography/SectionLabel.jsx"},{"name":"Title","sourcePath":"components/typography/Title.jsx"}],"sourceHashes":{"components/shared/color.js":"5512119e76ff","components/icons/Icon.jsx":"417d14a55afb","components/feedback/ring/Ring.jsx":"a8a4df3a4b50","components/core/Button.jsx":"d46585186ecc","components/core/Pill.jsx":"949efa55166b","components/overlays/full-screen/FullScreen.jsx":"55098659dcbe","components/navigation/app-header/AppHeader.jsx":"e110ef815d46","components/core/Card.jsx":"c2e5ddc70f30","components/core/ConfirmButton.jsx":"03c6f335459f","components/core/HeaderAction.jsx":"4fbe7933b192","components/feedback/EmptyState.jsx":"0789cf88df3e","components/feedback/InlineAlert.jsx":"6c2e3b8d74a4","components/feedback/Spinner.jsx":"aa65a5c23cdb","components/feedback/StatBadge.jsx":"66fa461f9337","components/feedback/TargetsCard.jsx":"f9baa7de4018","components/feedback/loading-screen/LoadingScreen.jsx":"7cb0b9bdbf57","components/feedback/macro-meter/MacroMeter.jsx":"a073b84e057d","components/feedback/meta-bar/MetaBar.jsx":"c7fe41596ef2","components/feedback/mini-chart/MiniChart.jsx":"d60d8d6d8b05","components/forms/QtyInput.jsx":"469699e2996d","components/forms/TextField.jsx":"76399285db42","components/layout/screen-body/ScreenBody.jsx":"f863fda3f12a","components/layout/screen/Screen.jsx":"4f5841ceb52e","components/navigation/module-header/ModuleHeader.jsx":"63658bcb876a","components/navigation/module-tab-bar/ModuleTabBar.jsx":"65585f77b41e","components/overlays/VideoModal.jsx":"72e46184f0e0","components/overlays/panel/Panel.jsx":"99fe47ae3485","components/typography/Label.jsx":"ee61d9f59c71","components/typography/SectionLabel.jsx":"01f8bc05581d","components/typography/Title.jsx":"be757a55001a"},"inlinedExternals":[],"unexposedExports":[{"name":"onColor","sourcePath":"components/shared/color.js"},{"name":"resolveColor","sourcePath":"components/shared/color.js"}]} */

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
function Button({
  title,
  onClick,
  color = "var(--forge-accent)",
  disabled = false,
  small = false,
  style,
  resolvedColor // deprecated (OP-006): onColor() now resolves tokens itself; kept for back-compat
}) {
  const [pressed, setPressed] = React.useState(false);
  const textColor = __ds_scope.onColor(resolvedColor || color);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      height: small ? "var(--forge-size-control-sm)" : "var(--forge-size-control-lg)",
      borderRadius: "var(--forge-radius-button)",
      border: "none",
      cursor: disabled ? "default" : "pointer",
      paddingInline: small ? 13 : 18,
      backgroundColor: color,
      color: textColor,
      fontFamily: "var(--forge-font-body)",
      fontWeight: 800,
      fontSize: small ? 12.5 : 15,
      opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
      transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
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
  color = "var(--forge-accent)",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
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
  }, "✕"), /*#__PURE__*/React.createElement("div", {
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
      borderTop: "1px solid var(--forge-divider)",
      padding: "12px 18px 16px",
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
  }, "F"), "orge")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, inModule ? /*#__PURE__*/React.createElement("button", {
    onClick: onBackToModules,
    style: iconBtnStyle,
    "aria-label": "Voltar aos módulos"
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
      borderRadius: "var(--forge-radius-card)",
      border: "var(--forge-border-w) solid var(--forge-border)",
      overflow: "hidden",
      marginBottom: "var(--forge-space-card-gap)",
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
      padding: stripeColor ? "var(--forge-space-12)" : "var(--forge-space-card)"
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
      border: "var(--forge-border-w) solid var(--forge-border)",
      borderRadius: "var(--forge-radius-chip)",
      paddingBlock: 7,
      paddingInline: 11,
      backgroundColor: "transparent",
      color: "var(--forge-text-muted)",
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 12.5,
      cursor: "pointer",
      opacity: pressed ? "var(--forge-opacity-press)" : 1
    }
  }, title);
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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: "var(--forge-text-label)",
      color: "var(--forge-text-faint)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-label)",
      marginBottom: 6
    }
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: "100%",
      height: 84,
      borderRadius: "var(--forge-radius-input)",
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      padding: "10px 12px",
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-input)",
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
      borderRadius: "var(--forge-radius-input)",
      border: "1px solid var(--forge-border-input)",
      backgroundColor: "var(--forge-surface-raised)",
      color: "var(--forge-text)",
      paddingInline: 12,
      fontFamily: "var(--forge-font-body)",
      fontSize: "var(--forge-text-input)",
      boxSizing: "border-box"
    }
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

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
      fontFamily: "var(--forge-font-body)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "var(--forge-tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--forge-text-faint)",
      marginBottom: 4
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--forge-font-title)",
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
  accent = "var(--forge-accent)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      backgroundColor: "var(--forge-panel)",
      borderTop: "var(--forge-border-w) solid var(--forge-divider)",
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
      backgroundColor: "var(--forge-scrim-heavy)",
      display: "flex",
      flexDirection: "column",
      zIndex: "var(--forge-z-video)"
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
      fontFamily: "var(--forge-font-title)",
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
  }, "✕")), /*#__PURE__*/React.createElement("div", {
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
      backgroundColor: "var(--forge-scrim-heavy)",
      borderRadius: "var(--forge-radius-video)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children)));
}
Object.assign(__ds_scope, { VideoModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/VideoModal.jsx", error: String((e && e.message) || e) }); }

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
      borderRadius: "var(--forge-radius-panel)",
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
      fontFamily: "var(--forge-font-title)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--forge-text)",
      textTransform: "uppercase",
      letterSpacing: "var(--forge-tracking-title)"
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

// components/typography/Title.jsx
try { (() => {
// Title — large Barlow Condensed heading. Size variants map to the type
// scale's title tokens (screenTitle 34 / panelTitle 22 / cardTitle 16 / logoLg 40).
const SIZE = {
  logoLg: {
    fontSize: "var(--forge-text-logo-lg)",
    lineHeight: "44px"
  },
  screenTitle: {
    fontSize: "var(--forge-text-screen-title)",
    lineHeight: "34px"
  },
  panelTitle: {
    fontSize: "var(--forge-text-panel-title)",
    lineHeight: "24px"
  },
  cardTitle: {
    fontSize: "var(--forge-text-card-title)",
    lineHeight: "20px",
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
  style
}) {
  const s = SIZE[size] || SIZE.screenTitle;
  return /*#__PURE__*/React.createElement("div", {
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

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

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

__ds_ns.TargetsCard = __ds_scope.TargetsCard;

__ds_ns.LoadingScreen = __ds_scope.LoadingScreen;

__ds_ns.MacroMeter = __ds_scope.MacroMeter;

__ds_ns.MetaBar = __ds_scope.MetaBar;

__ds_ns.MiniChart = __ds_scope.MiniChart;

__ds_ns.QtyInput = __ds_scope.QtyInput;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.ScreenBody = __ds_scope.ScreenBody;

__ds_ns.Screen = __ds_scope.Screen;

__ds_ns.ModuleHeader = __ds_scope.ModuleHeader;

__ds_ns.ModuleTabBar = __ds_scope.ModuleTabBar;

__ds_ns.VideoModal = __ds_scope.VideoModal;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Title = __ds_scope.Title;

})();
