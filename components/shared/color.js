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
  "--forge-cat-6": "#EC4899",
};

// resolveColor(c) — returns a literal hex for a token reference "var(--forge-x)"
// or passes through an already-literal hex. Falls back to the input unchanged.
export function resolveColor(c) {
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
export function onColor(input) {
  const hex = resolveColor(input);
  const h = String(hex).replace("#", "");
  if (h.length < 6) return "#FFFFFF"; // unresolved token — default safe
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.62 ? "#0B0F19" : "#FFFFFF";
}
