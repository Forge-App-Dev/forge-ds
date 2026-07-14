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
      light: ext["com.forge.theme"] ? ext["com.forge.theme"].light : undefined,
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
    "semantic.action.accent", "semantic.action.on-accent",
    "semantic.feedback.success", "semantic.feedback.warning", "semantic.feedback.danger", "semantic.feedback.nutrition",
    "semantic.macro.protein", "semantic.macro.carb", "semantic.macro.fat",
    "semantic.category.1", "semantic.category.2", "semantic.category.3", "semantic.category.4", "semantic.category.5", "semantic.category.6",
    "semantic.category.ext-1", "semantic.category.ext-2", "semantic.category.ext-3", "semantic.category.ext-4", "semantic.category.ext-5",
    "semantic.category.ext-6", "semantic.category.ext-7", "semantic.category.ext-8", "semantic.category.ext-9",
    "aliases.surface-bg", "aliases.surface-card", "aliases.surface-raised", "aliases.surface-panel",
    "aliases.border-card", "aliases.border-input", "aliases.text-body", "aliases.text-secondary",
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
    "primitive.fontSize.chip", "primitive.fontSize.label", "primitive.fontSize.mini-label",
    "primitive.letterSpacing.title", "primitive.letterSpacing.label", "primitive.letterSpacing.eyebrow",
    "primitive.lineHeight.logo-lg", "primitive.lineHeight.screen-title", "primitive.lineHeight.panel-title", "primitive.lineHeight.card-title",
    "primitive.lineHeight.input", "primitive.lineHeight.list-item", "primitive.lineHeight.body", "primitive.lineHeight.body-sm",
    "primitive.lineHeight.chip", "primitive.lineHeight.label", "primitive.lineHeight.mini-label",
    "aliases.forge-font-title", "aliases.forge-font-body",
    "aliases.forge-text-logo-lg", "aliases.forge-text-screen-title", "aliases.forge-text-panel-title", "aliases.forge-text-card-title",
    "aliases.forge-text-input", "aliases.forge-text-list-item", "aliases.forge-text-body", "aliases.forge-text-body-sm",
    "aliases.forge-text-chip", "aliases.forge-text-label", "aliases.forge-text-mini-label",
    "aliases.forge-tracking-title", "aliases.forge-tracking-label", "aliases.forge-tracking-eyebrow",
  ],
  spacing: [
    "primitive.dimension.space.0", "primitive.dimension.space.1", "primitive.dimension.space.2", "primitive.dimension.space.3",
    "primitive.dimension.space.4", "primitive.dimension.space.5", "primitive.dimension.space.6", "primitive.dimension.space.8",
    "primitive.dimension.space.10", "primitive.dimension.space.12", "primitive.dimension.space.16", "primitive.dimension.space.20",
    "primitive.dimension.space.screen-h", "primitive.dimension.space.card", "primitive.dimension.space.gap", "primitive.dimension.space.card-gap",
    "primitive.dimension.radius.card", "primitive.dimension.radius.panel", "primitive.dimension.radius.input", "primitive.dimension.radius.button",
    "primitive.dimension.radius.chip", "primitive.dimension.radius.pill", "primitive.dimension.radius.video",
    "primitive.dimension.control.sm", "primitive.dimension.control.md", "primitive.dimension.control.lg",
    "primitive.dimension.icon.sm", "primitive.dimension.icon.md", "primitive.dimension.icon.lg", "primitive.dimension.icon.xl",
    "primitive.dimension.border-w.default", "primitive.dimension.border-w.strong",
    "primitive.dimension.focus.ring-w", "primitive.dimension.focus.ring-offset",
    "primitive.number.opacity.press", "primitive.number.opacity.disabled",
    "primitive.number.z.nav", "primitive.number.z.overlay", "primitive.number.z.fullscreen", "primitive.number.z.video", "primitive.number.z.top",
    "primitive.dimension.layout.app-max-width", "primitive.dimension.layout.tap-target-min",
    "primitive.number.breakpoint.phone", "primitive.number.breakpoint.large", "primitive.number.breakpoint.xlarge",
    "aliases.radius-card", "aliases.radius-panel", "aliases.radius-input", "aliases.radius-button", "aliases.radius-chip", "aliases.radius-pill",
    "aliases.space-screen-h", "aliases.space-card", "aliases.space-gap", "aliases.space-card-gap",
    "aliases.app-max-width", "aliases.tap-target-min",
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
  if (theme === "light" && token.light !== undefined) raw = token.light;
  if (isRef(raw)) {
    const target = lookup(raw);
    if (!target) fail(`referência não resolve: ${raw} (em ${token.path})`);
    if (emitted.has(target.path)) return `var(${target.cssVar})`;
    return emitCss(target, theme, seen);
  }
  return serializeScalar(raw, token.type);
}

// Um token "muda entre temas"? (tem override, ou é alias vivo que aponta
// para um token que muda). Usado p/ montar o bloco .forge-theme-light.
function changesInTheme(token, seen = new Set()) {
  if (seen.has(token.path)) return false;
  seen.add(token.path);
  if (token.light !== undefined) return true;
  if (isRef(token.value)) {
    const target = lookup(token.value);
    if (target) return changesInTheme(target, seen);
  }
  return false;
}

// ---------------------------------------------------------------------------
// 2b. validações (§6.2). Falha aborta antes de escrever.
// ---------------------------------------------------------------------------
function isThemeable(p) {
  return p.startsWith("semantic.surface.") || p.startsWith("semantic.text.") ||
    p.startsWith("semantic.border.") || p === "semantic.action.accent" ||
    p.startsWith("semantic.scrim.") || p === "semantic.feedback.negative";
}
function isImmutable(p) {
  return p.startsWith("primitive.") || p.startsWith("component.") ||
    p.startsWith("semantic.macro.") || p.startsWith("semantic.category.") ||
    p.startsWith("semantic.brand-google.") || p.startsWith("semantic.elevation.") ||
    p.startsWith("aliases.");
}

function validate() {
  // §6.2.3 — referências resolvem, sem ciclos (percorre base e light de todos).
  for (const t of all) {
    emitCss(t, "base");
    emitCss(t, "light");
    if (t.light !== undefined && isRef(t.light) && !lookup(t.light))
      fail(`override de tema não resolve: ${t.light} (em ${t.path})`);
  }
  // §6.2.1 — cobertura de tema: todo token temável produz valor no tema light.
  for (const t of all) {
    if (isThemeable(t.path) && !changesInTheme(t))
      fail(`${t.path}: token temável sem par no tema light (nem alias vivo)`);
  }
  // §6.2.2 — pureza do override: nenhum token imutável declara override de tema.
  for (const t of all) {
    if (isImmutable(t.path) && t.light !== undefined)
      fail(`${t.path}: token imutável não pode declarar override de tema`);
  }
  console.log(`build-tokens: validações §6.2.1-3 OK (${all.length} tokens; ${emitted.size} emitidos).`);
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
  for (const theme of ["base", "light"]) {
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
    "   GENERATED — do not edit. Source: tokens/tokens.json (npm run build:tokens). */\n";
  const root = rootBlock(plan.colors, "base");
  const lightPaths = plan.colors.filter((p) => {
    const t = byPath.get(p);
    return t.group !== "aliases" && changesInTheme(t);
  });
  const light = `\n.forge-theme-light {\n${decls(lightPaths, "light")}\n}\n`;
  return banner + root + light;
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
  return `// GENERATED — do not edit. Fonte: tokens/tokens.json (npm run build:tokens).
export type ForgeCssVar =
${union};

export interface ForgeTokens {
  color: { accent: string; onAccent: string; success: string; warning: string; danger: string; negative: string; nutrition: string };
  surface: { canvas: string; default: string; raised: string; panel: string };
  text: { primary: string; secondary: string; tertiary: string; quaternary: string; disabled: string };
  border: { default: string; input: string; divider: string; focus: string };
  space: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20, number>;
  radius: { chip: number; input: number; button: number; video: number; card: number; panel: number; pill: number };
  control: { sm: number; md: number; lg: number };
  duration: Record<"instant" | "fast" | "base" | "slow" | "loopSpin" | "loopPulse", number>;
}

export declare const tokens: ForgeTokens;            // valores do tema base (dark)
export declare const tokensLight: Partial<ForgeTokens>; // só o que o tema light troca
`;
}

// ---------------------------------------------------------------------------
// 2c/§6.2.4 — snapshot: compara declarações geradas vs arquivo atual.
// ---------------------------------------------------------------------------
function declSet(css) {
  return (css.match(/--[a-z0-9-]+:[^;]+;/g) || []);
}
function snapshotCheck(file, generated) {
  const abs = path.join(TOKENS, file);
  if (!fs.existsSync(abs)) return;
  const before = declSet(fs.readFileSync(abs, "utf8"));
  const after = declSet(generated);
  const n = Math.max(before.length, after.length);
  for (let i = 0; i < n; i++) {
    if (before[i] !== after[i])
      fail(`snapshot divergiu em ${file} #${i + 1}:\n  antes: ${before[i]}\n  depois: ${after[i]}`);
  }
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

console.log("build-tokens: escrito tokens/{colors,typography,spacing,motion}.css + tokens.d.ts");
