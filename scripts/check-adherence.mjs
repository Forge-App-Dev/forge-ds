// check-adherence (OP-002/169): enforcement executável da regra de aderência
// nº 1 — nenhum hex de cor cru na VIEW de um componente; cor sai sempre de token
// (var(--forge-*)). Substitui a dependência do _adherence.oxlintrc.json, que o
// oxlint atual não parseia (usa regras não suportadas).
//
// Escopo: components/**/*.jsx (as views). Exclui de propósito:
//   - components/shared/color.js — é a ÚNICA ponte token↔hex do sistema (o mapa
//     var(--forge-*)→hex que onColor()/resolveColor() usam para calcular
//     contraste). Follow-up (OP-001/015): gerar esse mapa a partir de
//     tokens.json em vez de hardcode, e então incluí-lo aqui.
//   - o UI kit (ui_kits/) — ainda tem hex legado; entra após a higienização.
// Comentários são ignorados (notas do tipo "was #7a7a82" são permitidas).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HEX = /#[0-9a-fA-F]{3,8}\b/g;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith(".jsx")) out.push(full);
  }
  return out;
}

const targets = walk(path.join(ROOT, "components"));
const violations = [];
for (const f of targets) {
  const src = fs.readFileSync(f, "utf8").replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const m = src.match(HEX);
  if (m) violations.push({ file: path.relative(ROOT, f), hexes: [...new Set(m)] });
}

if (violations.length) {
  console.error("check-adherence: FALHOU — hex cru encontrado (use um token var(--forge-*)):");
  for (const v of violations) console.error(`  ${v.file}: ${v.hexes.join(" ")}`);
  process.exit(1);
}
console.log(`check-adherence OK — ${targets.length} arquivos, 0 hex cru em componentes.`);
