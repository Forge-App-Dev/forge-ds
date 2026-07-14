// check-adherence (OP-002/169): enforcement executável da regra de aderência
// nº 1 — nenhum hex de cor cru na VIEW de um componente; cor sai sempre de token
// (var(--forge-*)). Substitui a dependência do _adherence.oxlintrc.json, que o
// oxlint atual não parseia (usa regras não suportadas).
//
// Escopo: components/**/*.jsx + ui_kits/forge-app/**/*.jsx (as views). Exclui de
// propósito:
//   - components/shared/color.js — é a ÚNICA ponte token↔hex do sistema (o mapa
//     var(--forge-*)→hex que onColor()/resolveColor() usam para calcular
//     contraste). Follow-up (OP-001/015): gerar esse mapa a partir de
//     tokens.json em vez de hardcode, e então incluí-lo aqui. (Já fica de fora
//     naturalmente: só varremos .jsx, e color.js é .js.)
// Comentários são ignorados (notas do tipo "was #7a7a82" são permitidas).
//
// UI kit (OP-002): higienizado token-first — todo hex de COR com token
// var(--forge-*) de valor idêntico foi trocado pelo token. Restam apenas hexes
// que NÃO têm token exato correspondente (não inventamos tokens novos): a marca
// Google (logo de terceiro, nunca vira token do DS) e alguns cinzas/âmbares
// legados exclusivos do dark theme do kit. Esses ficam num allowlist explícito
// (UI_KIT_HEX_SEM_TOKEN), documentado e reportado como NOTA — follow-up: cunhar
// tokens em tokens.json ou migrar para color-mix (padrão OP-011). O allowlist
// vale SÓ para o UI kit; components/ segue estrito (qualquer hex cru falha).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HEX = /#[0-9a-fA-F]{3,8}\b/g;

// Hexes sem token --forge-* exato, tolerados APENAS no UI kit (comparação
// case-insensitive). Cada um foi verificado contra tokens/colors.css.
const UI_KIT_HEX_SEM_TOKEN = new Set(
  [
    // Marca Google (logo "Continuar com Google") — cores de terceiro.
    "#4285f4", "#34a853", "#fbbc05", "#ea4335",
    // Cinzas/âmbares legados do dark theme do kit, sem token exato.
    "#8a8a92", "#b0b0b8", "#3a3a42", "#4a4a52",
    "#3a2f1f", "#1a1610", "#c9b896",
  ].map((h) => h.toLowerCase()),
);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith(".jsx")) out.push(full);
  }
  return out;
}

const targets = [
  ...walk(path.join(ROOT, "components")),
  ...walk(path.join(ROOT, "ui_kits", "forge-app")),
];

const violations = [];
const notes = [];
for (const f of targets) {
  const rel = path.relative(ROOT, f);
  const isUiKit = rel.startsWith("ui_kits" + path.sep) || rel.startsWith("ui_kits/");
  const src = fs.readFileSync(f, "utf8").replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const m = src.match(HEX);
  if (!m) continue;
  const bad = [];
  const allowed = [];
  for (const hex of [...new Set(m)]) {
    if (isUiKit && UI_KIT_HEX_SEM_TOKEN.has(hex.toLowerCase())) allowed.push(hex);
    else bad.push(hex);
  }
  if (bad.length) violations.push({ file: rel, hexes: bad });
  if (allowed.length) notes.push({ file: rel, hexes: allowed });
}

if (notes.length) {
  console.log("check-adherence: NOTA — hex sem token exato tolerado no UI kit (follow-up: cunhar token ou color-mix):");
  for (const n of notes) console.log(`  ${n.file}: ${n.hexes.join(" ")}`);
}

if (violations.length) {
  console.error("check-adherence: FALHOU — hex cru encontrado (use um token var(--forge-*)):");
  for (const v of violations) console.error(`  ${v.file}: ${v.hexes.join(" ")}`);
  process.exit(1);
}
console.log(`check-adherence OK — ${targets.length} arquivos, 0 hex cru sem token (components/ + ui_kits/forge-app/).`);
