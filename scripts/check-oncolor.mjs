// check-oncolor (T-26 / ADR-0050 §gate): falha o build se um par texto↔fundo
// que o DS promete legível reprovar o piso WCAG. Fonte: tokens/tokens.json
// (resolve as refs {a.b} a hex). Cobre os preenchimentos de marca com texto
// (accent-fill, danger-fill), o texto de marca sobre superfície, e o texto
// semântico sobre surface.raised. Ver ADR-0081.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tree = JSON.parse(fs.readFileSync(path.join(ROOT, "tokens", "tokens.json"), "utf8"));

const byPath = new Map();
(function walk(node, parts) {
  if (node && typeof node === "object" && Object.prototype.hasOwnProperty.call(node, "$value")) {
    byPath.set(parts.join("."), node.$value);
    const stripped = parts.slice(1).join(".");
    if (stripped && !byPath.has(stripped)) byPath.set(stripped, node.$value);
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$")) continue;
    if (v && typeof v === "object") walk(v, [...parts, k]);
  }
})(tree, []);

const isRef = (v) => typeof v === "string" && /^\{[^}]+\}$/.test(v);
function hex(ref) {
  let v = byPath.get(ref) ?? ref;
  let guard = 0;
  while (isRef(v) && guard++ < 20) v = byPath.get(v.slice(1, -1));
  return v;
}
const lin = (c) => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); };
function lum(h) {
  const m = /^#?([0-9a-f]{6})/i.exec(String(h)); if (!m) return null;
  const n = parseInt(m[1], 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
}
function ratio(a, b) { const la = lum(a), lb = lum(b); if (la == null || lb == null) return null; return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); }

// Pares obrigatórios: [rótulo, foreground, background, piso].
const PAIRS = [
  ["texto branco sobre accent-fill (Button primário / chips ativas)", "semantic.action.on-accent", "semantic.action.accent-fill", 4.5],
  ["texto branco sobre danger-fill (Button danger / ConfirmButton armado)", "semantic.action.on-dark", "semantic.feedback.danger-fill", 4.5],
  ["accent como TEXTO DE MARCA grande/wordmark sobre surface.raised (piso texto grande 3:1)", "semantic.action.accent", "semantic.surface.raised", 3.0],
  ["danger como TEXTO sobre surface.raised", "semantic.feedback.danger", "semantic.surface.raised", 4.5],
  ["negative como TEXTO sobre surface.raised", "semantic.feedback.negative", "semantic.surface.raised", 4.5],
];

let failed = 0;
for (const [name, fgP, bgP, floor] of PAIRS) {
  const fg = hex(fgP), bg = hex(bgP);
  const r = ratio(fg, bg);
  if (r == null) { console.error(`check-oncolor: não resolvi ${fgP} (${fg}) ou ${bgP} (${bg})`); failed++; continue; }
  const ok = r >= floor;
  console.log(`  ${ok ? "OK  " : "FALHA"} ${r.toFixed(2)}:1 (piso ${floor}) — ${name}`);
  if (!ok) failed++;
}
if (failed) { console.error(`check-oncolor: FALHOU — ${failed} par(es) abaixo do piso WCAG.`); process.exit(1); }
console.log(`check-oncolor OK — ${PAIRS.length} pares texto↔fundo passam o piso WCAG.`);
