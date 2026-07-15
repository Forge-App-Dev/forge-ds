// Forge Design System — gerador de tokens (fonte única DTCG → CSS + .d.ts).
// Pipeline (docs/tokens-architecture.md §7): parse → validar (§6.2) → resolver
// refs {a.b} (2 passes: base/light) → serializar → concatenar templates → escrever.
// Node ESM puro, zero dependências novas. Ver ADR-0040.
//
// NÃO editar os tokens/*.css à mão — eles são artefatos GENERATED. Editar
// tokens/tokens.json e rodar `npm run build:tokens`.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TOKENS = path.join(ROOT, "tokens");
const TPL = path.join(ROOT, "scripts", "templates");

// ---------------------------------------------------------------------------
// 1. parse
// ---------------------------------------------------------------------------
const tree = JSON.parse(fs.readFileSync(path.join(TOKENS, "tokens.json"), "utf8"));

// ---------------------------------------------------------------------------
// 2. index: achata a árvore em tokens-folha (nós que têm $value), herdando
//    $type do ancestral mais próximo. Indexa por caminho completo e pelo
//    caminho sem o primeiro segmento (refs usam ambas as formas).
// ---------------------------------------------------------------------------
const byPath = new Map();   // "primitive.color.red.500" e "color.red.500" → token
const byCssVar = new Map(); // "--forge-bg" → token
const all = [];             // lista de tokens-folha (ordem de inserção)

function walk(node, pathParts, inheritedType) {
  const type = node.$type || inheritedType;
  if (Object.prototype.hasOwnProperty.call(node, "$value")) {
    const full = pathParts.join(".");
    const ext = node.$extensions || {};
    const token = {
      path: full,
      value: node.$value,
      type,
      cssVar: ext["com.forge.cssVar"] || null,
      description: node.$description || "",
      group: pathParts[0],
    };
    all.push(token);
    byPath.set(full, token);
    const stripped = pathParts.slice(1).join(".");
    if (stripped && !byPath.has(stripped)) byPath.set(stripped, token);
    // Nota: o nome --text-body colide de propósito entre typography (font-size)
    // e colors (alias de cor) no CSS embarcado — preservamos os dois (last-wins).
    if (token.cssVar) byCssVar.set(token.cssVar, token);
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$")) continue;
    if (v && typeof v === "object") walk(v, [...pathParts, k], type);
  }
}
for (const [k, v] of Object.entries(tree)) {
  if (k.startsWith("$")) continue;
  walk(v, [k], undefined);
}

function fail(msg) {
  console.error("build-tokens: ERRO — " + msg);
  process.exit(1);
}
function lookup(ref) {
  // ref = "{a.b.c}"
  const key = ref.slice(1, -1);
  return byPath.get(key) || null;
}
const isRef = (v) => typeof v === "string" && /^\{[^}]+\}$/.test(v);

// ---------------------------------------------------------------------------
// planos de emissão (ordem canônica por arquivo). A ORDEM vive aqui; os
// NOMES e VALORES vivem no JSON. Cada entrada é o caminho completo do token.
// ---------------------------------------------------------------------------
const plan = {
  colors: [
    "semantic.surface.canvas", "semantic.surface.default", "semantic.surface.raised", "semantic.surface.panel",
    "semantic.border.default", "semantic.border.input", "semantic.border.divider",
    "semantic.text.primary", "semantic.text.secondary", "semantic.text.tertiary", "semantic.text.quaternary", "semantic.text.disabled",
    "semantic.action.accent", "semantic.action.accent-fill", "semantic.action.on-accent",
    "semantic.feedback.success", "semantic.feedback.warning", "semantic.feedback.danger", "semantic.feedback.danger-fill", "semantic.feedback.nutrition",
    "semantic.macro.protein", "semantic.macro.carb", "semantic.macro.fat",
    "semantic.category.1", "semantic.category.2", "semantic.category.3", "semantic.category.4", "semantic.category.5", "semantic.category.6",
    "semantic.category.ext-1", "semantic.category.ext-2", "semantic.category.ext-3", "semantic.category.ext-4", "semantic.category.ext-5",
    "semantic.category.ext-6", "semantic.category.ext-7", "semantic.category.ext-8", "semantic.category.ext-9",
    "semantic.scrim.default", "semantic.scrim.heavy",
    "semantic.border.focus",
    "semantic.feedback.negative",
    "semantic.brand-google.bg", "semantic.brand-google.text",
    "semantic.action.on-light", "semantic.action.on-dark",
  ],
  typography: [
    "primitive.fontFamily.title", "primitive.fontFamily.body",
    "primitive.fontWeight.title-semi", "primitive.fontWeight.title-bold", "primitive.fontWeight.title-extra",
    "primitive.fontWeight.body-regular", "primitive.fontWeight.body-medium", "primitive.fontWeight.body-semi",
    "primitive.fontWeight.body-bold", "primitive.fontWeight.body-extra",
    "primitive.fontSize.logo-lg", "primitive.fontSize.screen-title", "primitive.fontSize.panel-title", "primitive.fontSize.card-title",
    "primitive.fontSize.input", "primitive.fontSize.list-item", "primitive.fontSize.body", "primitive.fontSize.body-sm",
    "primitive.fontSize.chip", "primitive.fontSize.label", "primitive.fontSize.mini-label", "primitive.fontSize.stat", "primitive.fontSize.stat-sm",
    "primitive.letterSpacing.title", "primitive.letterSpacing.label", "primitive.letterSpacing.eyebrow",
    "primitive.lineHeight.logo-lg", "primitive.lineHeight.screen-title", "primitive.lineHeight.panel-title", "primitive.lineHeight.card-title",
    "primitive.lineHeight.input", "primitive.lineHeight.list-item", "primitive.lineHeight.body", "primitive.lineHeight.body-sm",
    "primitive.lineHeight.chip", "primitive.lineHeight.label", "primitive.lineHeight.mini-label",
  ],
  spacing: [
    "primitive.dimension.space.0", "primitive.dimension.space.2", "primitive.dimension.space.4", "primitive.dimension.space.6",
    "primitive.dimension.space.8", "primitive.dimension.space.10", "primitive.dimension.space.12", "primitive.dimension.space.16",
    "primitive.dimension.space.20", "primitive.dimension.space.24", "primitive.dimension.space.32", "primitive.dimension.space.40",
    "primitive.dimension.space.screen-h", "primitive.dimension.space.card", "primitive.dimension.space.gap", "primitive.dimension.space.card-gap",
    "primitive.dimension.radius.card", "primitive.dimension.radius.panel", "primitive.dimension.radius.input", "primitive.dimension.radius.button",
    "primitive.dimension.radius.chip", "primitive.dimension.radius.pill", "primitive.dimension.radius.video",
    "primitive.dimension.control.sm", "primitive.dimension.control.md", "primitive.dimension.control.lg",
    "primitive.dimension.icon.sm", "primitive.dimension.icon.md", "primitive.dimension.icon.lg",
    "primitive.dimension.border-w.default", "primitive.dimension.border-w.strong",
    "primitive.dimension.focus.ring-w", "primitive.dimension.focus.ring-offset",
    "primitive.number.opacity.press", "primitive.number.opacity.disabled",
    "primitive.number.z.nav", "primitive.number.z.overlay", "primitive.number.z.fullscreen", "primitive.number.z.video",
    "primitive.dimension.layout.app-max-width", "primitive.dimension.layout.tap-target-min", "primitive.dimension.layout.tap-target",
    "primitive.number.breakpoint.phone", "primitive.number.breakpoint.large", "primitive.number.breakpoint.xlarge",
  ],
  motion: [
    "primitive.duration.instant", "primitive.duration.fast", "primitive.duration.base", "primitive.duration.slow",
    "primitive.duration.loop-spin", "primitive.duration.loop-pulse",
    "primitive.cubicBezier.standard", "primitive.cubicBezier.linear", "primitive.cubicBezier.emphasized",
  ],
};

// conjunto dos tokens que ganham CSS var própria (para decidir live-alias)
const emitted = new Set();
for (const f of Object.keys(plan)) for (const p of plan[f]) emitted.add(p);
for (const p of emitted) {
  const t = byPath.get(p);
  if (!t) fail(`plano de emissão referencia token inexistente: ${p}`);
  if (!t.cssVar) fail(`token emitido sem cssVar: ${p}`);
}

// ---------------------------------------------------------------------------
// 3. resolução de referências + serialização por $type
// ---------------------------------------------------------------------------
const GENERIC_FONTS = new Set(["sans-serif", "serif", "monospace", "system-ui",
  "ui-sans-serif", "ui-serif", "ui-monospace", "cursive", "fantasy", "emoji", "math", "fangsong"]);

function serializeScalar(raw, type) {
  if (Array.isArray(raw)) {
    if (type === "cubicBezier") return `cubic-bezier(${raw.map((n) => String(n)).join(", ")})`;
    if (type === "fontFamily") return raw.map((f) => (GENERIC_FONTS.has(f) ? f : `"${f}"`)).join(", ");
    return raw.join(", ");
  }
  if (typeof raw === "number") return String(raw);
  return String(raw); // strings verbatim (#hex, rgba(...), "14.5px", "ease", ...)
}

// Emite o valor CSS de um token no tema dado. Se o valor é uma ref para um
// token EMITIDO, produz var(--forge-...) (alias vivo); senão resolve ao literal.
function emitCss(token, theme, seen = new Set()) {
  if (seen.has(token.path + "@" + theme)) fail(`ciclo de referência em ${token.path}`);
  seen.add(token.path + "@" + theme);
  let raw = token.value;
  if (isRef(raw)) {
    const target = lookup(raw);
    if (!target) fail(`referência não resolve: ${raw} (em ${token.path})`);
    if (emitted.has(target.path)) return `var(${target.cssVar})`;
    return emitCss(target, theme, seen);
  }
  return serializeScalar(raw, token.type);
}

// ---------------------------------------------------------------------------
// 2b. validações (§6.2). Falha aborta antes de escrever.
// Forge é dark-only (tema único; overlays de tema removidos em 2026-07-14):
// resta validar que as referências {a.b} resolvem sem ciclos.
// ---------------------------------------------------------------------------
function validate() {
  for (const t of all) emitCss(t, "base");
  // Nenhum cssVar emitido pode ser reivindicado por dois tokens diferentes (T-20).
  const byVar = new Map();
  for (const p of emitted) {
    const t = byPath.get(p);
    if (byVar.has(t.cssVar) && byVar.get(t.cssVar) !== p)
      fail(`cssVar duplicado ${t.cssVar}: reivindicado por ${byVar.get(t.cssVar)} e ${p}`);
    byVar.set(t.cssVar, p);
  }
  console.log(`build-tokens: validações OK (${all.length} tokens; ${emitted.size} emitidos; sem cssVar duplicado).`);
}

// §6.2.5 — contraste (warning, não bloqueia).
function luminance(hex) {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}
function ratio(a, b) {
  const la = luminance(a), lb = luminance(b);
  if (la == null || lb == null) return null;
  const hi = Math.max(la, lb), lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}
function contrastReport() {
  const surfaceRaised = byPath.get("semantic.surface.raised");
  const texts = ["primary", "secondary", "tertiary", "quaternary", "disabled"].map((k) => byPath.get("semantic.text." + k));
  for (const theme of ["base"]) {
    const bg = emitCss(surfaceRaised, theme);
    for (const t of texts) {
      const fg = emitCss(t, theme);
      const r = ratio(fg, bg);
      if (r == null) continue;
      const floor = t.path.endsWith("disabled") ? 3.0 : 4.5;
      if (r < floor)
        console.warn(`build-tokens: WARNING contraste ${t.path} sobre surface.raised (${theme}) = ${r.toFixed(2)}:1 < ${floor}:1`);
    }
  }
}

// ---------------------------------------------------------------------------
// 5-6. serializar blocos + concatenar templates
// ---------------------------------------------------------------------------
function decls(paths, theme, filter) {
  const lines = [];
  for (const p of paths) {
    const t = byPath.get(p);
    if (filter && !filter(t)) continue;
    lines.push(`  ${t.cssVar}: ${emitCss(t, theme)};`);
  }
  return lines.join("\n");
}
function rootBlock(paths, theme = "base") {
  return `:root {\n${decls(paths, theme)}\n}\n`;
}

function buildColors() {
  const banner = "/* Forge Design System — color tokens\n" +
    "   GENERATED — do not edit. Source: tokens/tokens.json (npm run build:tokens).\n" +
    "   Forge é dark-only: tema único, sem bloco .forge-theme-light. */\n";
  return banner + rootBlock(plan.colors, "base");
}
function buildTypography() {
  const header = fs.readFileSync(path.join(TPL, "typography.header.css"), "utf8");
  return header + "\n" + rootBlock(plan.typography, "base");
}
function buildSpacing() {
  const banner = "/* Forge Design System — spacing, radius, sizing, layout, z-index, opacity tokens\n" +
    "   GENERATED — do not edit. Source: tokens/tokens.json (npm run build:tokens). */\n";
  return banner + rootBlock(plan.spacing, "base");
}
function buildMotion() {
  const banner = "/* Forge Design System — motion tokens\n" +
    "   GENERATED — do not edit. Source: tokens/tokens.json (npm run build:tokens). */\n";
  const footer = fs.readFileSync(path.join(TPL, "motion.footer.css"), "utf8");
  return banner + rootBlock(plan.motion, "base") + footer;
}

// ---------------------------------------------------------------------------
// 7.4 — tokens.d.ts
// ---------------------------------------------------------------------------
function buildDts() {
  const names = [];
  const seenName = new Set();
  for (const f of ["colors", "typography", "spacing", "motion"])
    for (const p of plan[f]) {
      const n = byPath.get(p).cssVar;
      if (seenName.has(n)) continue;
      seenName.add(n);
      names.push(n);
    }
  const union = names.map((n) => `  | ${JSON.stringify(n)}`).join("\n");

  // ForgeTokens: GERADA do mesmo conjunto que tokens.rn.js (chaves camelCase,
  // tipo derivado do valor resolvido) — antes era escrita à mão e nem batia com
  // a forma flat do tokens.rn.js (T-52).
  const seenKey = new Set();
  const fields = [];
  for (const f of ["colors", "typography", "spacing", "motion"])
    for (const p of plan[f]) {
      const t = byPath.get(p);
      if (t.group === "aliases") continue;
      const key = camelVar(t.cssVar);
      if (seenKey.has(key)) continue;
      seenKey.add(key);
      const v = rnValue(t);
      const ty = Array.isArray(v) ? "readonly number[]" : typeof v === "number" ? "number" : "string";
      fields.push(`  ${JSON.stringify(key)}: ${ty};`);
    }
  const iface = fields.join("\n");

  return `// GENERATED — do not edit. Fonte: tokens/tokens.json (npm run build:tokens).
export type ForgeCssVar =
${union};

// Forma do objeto \`tokens\` exportado por tokens/tokens.rn.js (tema dark único),
// gerada do mesmo conjunto de tokens: chaves camelCase, valores resolvidos
// (string p/ cor/família/keyword, number p/ dp/ms).
export interface ForgeTokens {
${iface}
}

export declare const tokens: ForgeTokens;            // valores do tema dark (único)
`;
}

// ---------------------------------------------------------------------------
// 2c/§6.2.4 — snapshot: compara declarações geradas vs arquivo atual.
// ---------------------------------------------------------------------------
function declSet(css) {
  return (css.match(/--[a-z0-9-]+:[^;]+;/g) || []);
}
// Reporta (NÃO aborta) mudanças de declaração vs o CSS atual. Foi guarda da
// migração inicial (§6.2.4); com a fonte já migrada, mudanças de valor são
// legítimas (ex.: novos overrides de tema). O guarda de staleness real é o
// check-drift (regenera → git tem de ficar limpo). Aqui só damos visibilidade
// no log a QUAIS valores mudaram, para revisão do diff.
function snapshotCheck(file, generated) {
  const abs = path.join(TOKENS, file);
  if (!fs.existsSync(abs)) return;
  const before = declSet(fs.readFileSync(abs, "utf8"));
  const after = declSet(generated);
  const n = Math.max(before.length, after.length);
  const diffs = [];
  for (let i = 0; i < n; i++) {
    if (before[i] !== after[i]) diffs.push(`  ${file} #${i + 1}: ${before[i] || "(—)"} → ${after[i] || "(—)"}`);
  }
  if (diffs.length) console.warn(`build-tokens: NOTA — ${diffs.length} declaração(ões) mudaram em ${file} (revise o git diff):\n${diffs.join("\n")}`);
}

// ---------------------------------------------------------------------------
// 7.5 — tokens.rn.js: tokens resolvidos para consumo em React Native pelo
// forge-app (valores literais dp/ms/número/cor/família; sem CSS vars nem a
// camada de alias). É a fonte única do tema (dark) chegando ao app. Ver OP-002.
// ---------------------------------------------------------------------------
function resolveLiteral(token, seen = new Set()) {
  if (seen.has(token.path)) fail(`ciclo de referência em ${token.path}`);
  seen.add(token.path);
  const raw = token.value;
  if (isRef(raw)) {
    const target = lookup(raw);
    if (!target) fail(`referência não resolve: ${raw} (em ${token.path})`);
    return resolveLiteral(target, seen);
  }
  return serializeScalar(raw, token.type);
}
function camelVar(cssVar) {
  return cssVar.replace(/^--(forge-)?/, "").replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}
function rnValue(token) {
  const raw = isRef(token.value) ? lookup(token.value).value : token.value;
  if (token.type === "fontFamily") {
    const arr = Array.isArray(raw) ? raw : [raw];
    return arr.find((f) => !GENERIC_FONTS.has(f)) || String(arr[0]);
  }
  if (token.type === "cubicBezier") return Array.isArray(raw) ? raw : String(raw);
  const lit = resolveLiteral(token);
  if (token.type === "dimension" || token.type === "number") return parseFloat(lit);
  if (token.type === "duration") {
    const m = /^([\d.]+)(ms|s)$/.exec(lit);
    return m ? (m[2] === "s" ? parseFloat(m[1]) * 1000 : parseFloat(m[1])) : parseFloat(lit);
  }
  return lit; // color, keywords (ease/linear), etc.
}
function buildTokensRn() {
  const seen = new Set();
  const lines = [];
  for (const f of ["colors", "typography", "spacing", "motion"]) {
    for (const p of plan[f]) {
      const t = byPath.get(p);
      if (t.group === "aliases") continue; // RN não usa a camada de alias CSS
      const key = camelVar(t.cssVar);
      if (seen.has(key)) continue;
      seen.add(key);
      lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(rnValue(t))}`);
    }
  }
  return "// GENERATED — do not edit. Fonte: tokens/tokens.json (npm run build:tokens).\n" +
    "// Tokens do Forge DS resolvidos para React Native (dp/ms/número/cor). Tema dark único.\n" +
    "// Uso no forge-app: import { tokens } from \"@forge/ds/tokens/tokens.rn.js\";\n" +
    "export const tokens = {\n" + lines.join(",\n") + "\n};\nexport default tokens;\n";
}

// ---------------------------------------------------------------------------
// 7.6 — TOKEN_HEX de components/shared/color.js (T-03): mapa token→hex que o
// onColor()/resolveColor() usam. Antes hand-synced com colors.css; agora gerado
// aqui, entre marcadores, para não sair de sincronia (check-drift força).
// Escopo: cores que podem ser FILL (semantic.action/feedback/macro/category),
// exceto foregrounds "on-*". NÃO é um import — o bloco é reescrito inline, então
// o _ds_bundle.js continua lendo um objeto literal, sem dependência a resolver.
// ---------------------------------------------------------------------------
function tokenHexLines() {
  const prefixes = ["semantic.action.", "semantic.feedback.", "semantic.macro.", "semantic.category."];
  const out = [];
  for (const [p, t] of byPath) {
    if (!t.cssVar) continue;
    if (!prefixes.some((pre) => p.startsWith(pre))) continue;
    if (p.split(".").pop().startsWith("on-")) continue; // foreground, não é fill
    let hex;
    try { hex = resolveLiteral(t); } catch { continue; }
    if (!/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(hex)) continue;
    out.push(`  ${JSON.stringify(t.cssVar)}: ${JSON.stringify(hex)},`);
  }
  return out;
}
function writeTokenHex() {
  const colorPath = path.join(ROOT, "components", "shared", "color.js");
  let src = fs.readFileSync(colorPath, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  const block = tokenHexLines().join(eol);
  const re = /(\/\/ <auto:token-hex>[^\r\n]*\r?\n)[\s\S]*?(\r?\n[ \t]*\/\/ <\/auto:token-hex>)/;
  if (!re.test(src)) fail("color.js: marcadores <auto:token-hex> não encontrados");
  src = src.replace(re, (_m, open, close) => open + block + close);
  fs.writeFileSync(colorPath, src);
}

// ---------------------------------------------------------------------------
// run
// ---------------------------------------------------------------------------
validate();
contrastReport();

const outputs = {
  "colors.css": buildColors(),
  "typography.css": buildTypography(),
  "spacing.css": buildSpacing(),
  "motion.css": buildMotion(),
};
for (const [file, css] of Object.entries(outputs)) snapshotCheck(file, css);
for (const [file, css] of Object.entries(outputs)) fs.writeFileSync(path.join(TOKENS, file), css);
fs.writeFileSync(path.join(ROOT, "tokens.d.ts"), buildDts());
fs.writeFileSync(path.join(TOKENS, "tokens.rn.js"), buildTokensRn());
writeTokenHex();

console.log("build-tokens: escrito tokens/{colors,typography,spacing,motion}.css + tokens.d.ts + tokens/tokens.rn.js + TOKEN_HEX de color.js");
