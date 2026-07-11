// Shared color utilities — single source of truth for onColor(), used by
// any component that needs to pick readable text over an arbitrary fill.
// Ported from src/theme/tokens.js (mateusutz/forge-app).
export function onColor(hex) {
  const h = String(hex).replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.62 ? "#0B0F19" : "#FFFFFF";
}
