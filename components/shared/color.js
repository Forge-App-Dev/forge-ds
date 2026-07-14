// Shared color utilities — single source of truth for color helpers used by
// any component that needs to reason about an arbitrary fill.
// Ported from src/theme/tokens.js (mateusutz/forge-app).

// Map of design-system color TOKENS → literal hex. This mirrors tokens/colors.css
// and exists only so helpers that need a real hex (onColor) can resolve a token
// reference like "var(--forge-accent)". TARGET: generated from tokens.json (OP-001);
// until then, keep in sync with tokens/colors.css by hand.
const TOKEN_HEX = {
  "--forge-accent": "#EF4444",
  "--forge-accent-fill": "#DC2626",
  "--forge-danger-fill": "#c94b3b",
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

// Luminância relativa WCAG (sRGB → linear) e razão de contraste.
function _lin(ch) {
  const c = ch / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function _relLum(hex) {
  const h = hex.replace("#", "");
  return 0.2126 * _lin(parseInt(h.slice(0, 2), 16)) + 0.7152 * _lin(parseInt(h.slice(2, 4), 16)) + 0.0722 * _lin(parseInt(h.slice(4, 6), 16));
}
function _contrast(a, b) {
  const la = _relLum(a), lb = _relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

const ON_DARK = "#0B0F19";   // --forge-on-light (texto escuro)
const ON_LIGHT = "#FFFFFF";  // --forge-on-dark (texto branco)
// onColor(input, { size }) — escolhe o texto legível sobre um preenchimento por
// CONTRASTE WCAG real. SEM brand-lock (ADR-0081): os controles preenchidos com
// texto usam tokens de FILL já escurecidos (--forge-accent-fill #DC2626,
// --forge-danger-fill #c94b3b), sobre os quais o BRANCO passa 4,5:1 — então o
// vencedor de contraste é o branco, escolhido honestamente. Forge é DARK-ONLY.
//   1. resolve token → hex (resolveColor);
//   2. devolve o de MAIOR contraste entre branco e escuro;
//   3. piso: size="large" (≥18,7px bold) → 3:1; padrão (texto normal) → 4,5:1;
//      abaixo do piso devolve o vencedor e emite console.warn em dev.
// Tokens fora do mapa TOKEN_HEX (ex.: cat-ext-*) não têm hex conhecido: avisa em
// dev e devolve texto claro (default seguro). TOKEN_HEX é mantido à mão — gerar
// de tokens.json é follow-up (T-03).
export function onColor(input, { size = "normal" } = {}) {
  const hex = resolveColor(input);
  const norm = String(hex).trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(norm)) {
    if (typeof console !== "undefined")
      console.warn(`onColor: não resolvi "${input}" para um hex #rrggbb (TOKEN_HEX incompleto?); usando texto claro.`);
    return ON_LIGHT;
  }
  const hx = "#" + norm.slice(0, 6);
  const cWhite = _contrast(hx, ON_LIGHT);
  const cDark = _contrast(hx, ON_DARK);
  const winner = cWhite >= cDark ? ON_LIGHT : ON_DARK;
  const floor = size === "large" ? 3 : 4.5;
  if (Math.max(cWhite, cDark) < floor && typeof console !== "undefined") {
    console.warn(`onColor: melhor contraste ${Math.max(cWhite, cDark).toFixed(2)}:1 < ${floor}:1 sobre ${hx}; usando ${winner}.`);
  }
  return winner;
}
