// Gera index.html (catálogo do GitHub Pages) a partir dos metadados @dsCard
// no topo de cada *.card.html. Não editar index.html à mão.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith(".card.html")) out.push(full);
  }
  return out;
}

const order = ["Colors", "Type", "Spacing", "Brand", "Components"];
const labels = { Colors: "Colors", Type: "Type", Spacing: "Spacing & Radius", Brand: "Brand & Patterns", Components: "Components" };
const cards = [];
for (const f of walk(ROOT)) {
  const first = fs.readFileSync(f, "utf8").split("\n")[0];
  const g = /group="([^"]*)"/.exec(first)?.[1] || "Other";
  const n = /name="([^"]*)"/.exec(first)?.[1] || path.basename(f);
  const s = /subtitle="([^"]*)"/.exec(first)?.[1] || "";
  cards.push({ path: path.relative(ROOT, f), group: g, name: n, subtitle: s });
}
cards.sort((a, b) => (order.indexOf(a.group) - order.indexOf(b.group)) || a.name.localeCompare(b.name));

const groups = {};
for (const c of cards) (groups[c.group] ||= []).push(c);

let cardsHtml = "";
for (const g of order) {
  if (!groups[g]) continue;
  cardsHtml += `<div class="group"><h2>${labels[g] || g}</h2><div class="grid">`;
  for (const c of groups[g]) cardsHtml += `<a class="card" href="${c.path}"><div class="name">${c.name}</div><div class="sub">${c.subtitle}</div></a>`;
  cardsHtml += `</div></div>\n`;
}

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Forge Design System</title>
<link rel="stylesheet" href="styles.css">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--forge-bg); font-family: var(--forge-font-body); color: var(--forge-text); }
  header { padding: 28px 20px 20px; border-bottom: 1px solid var(--forge-divider); max-width: 960px; margin: 0 auto; }
  .logo { font-family: var(--forge-font-title); font-size: 28px; text-transform: uppercase; letter-spacing: var(--forge-tracking-title); }
  .logo span { color: var(--forge-accent); }
  .tagline { color: var(--forge-text-dim); font-size: 13px; margin-top: 6px; }
  main { max-width: 960px; margin: 0 auto; padding: 20px; }
  .group { margin-bottom: 32px; }
  .group h2 { font-family: var(--forge-font-title); font-size: 13px; letter-spacing: var(--forge-tracking-eyebrow); text-transform: uppercase; color: var(--forge-text-faint); margin: 0 0 10px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
  a.card { display: block; background: var(--forge-surface); border: 1px solid var(--forge-border); border-radius: var(--forge-radius-card); padding: 14px 16px; text-decoration: none; color: inherit; transition: border-color 0.15s ease; }
  a.card:hover { border-color: var(--forge-accent); }
  .card .name { font-weight: 700; font-size: 14px; color: var(--forge-text); }
  .card .sub { font-size: 12px; color: var(--forge-text-dim); margin-top: 4px; line-height: 16px; }
  footer { max-width: 960px; margin: 0 auto; padding: 20px; color: var(--forge-text-dimmer); font-size: 11px; border-top: 1px solid var(--forge-divider); }
</style>
</head>
<body>
<header>
  <div class="logo"><span>F</span>orge Design System</div>
  <div class="tagline">Catálogo vivo — direto do repo, sem exportação. Editado aqui, publicado aqui.</div>
</header>
<main>
${cardsHtml}
<div class="group">
  <h2>UI Kit</h2>
  <div class="grid">
    <a class="card" href="ui_kits/forge-app/index.html"><div class="name">Forge App — click-through</div><div class="sub">Login → Módulos → Treino / Nutrição / Perfil + fluxos FullScreen</div></a>
  </div>
</div>
<div class="group">
  <h2>Referência</h2>
  <div class="grid">
    <a class="card" href="readme.md"><div class="name">README</div><div class="sub">Visão geral do sistema</div></a>
    <a class="card" href="reference/FORGE_DESIGN_SYSTEM_RN.md"><div class="name">FORGE_DESIGN_SYSTEM_RN.md</div><div class="sub">Tradução RN — vence em conflito para o forge-app</div></a>
    <a class="card" href="reference/FORGE_DESIGN_SYSTEM.md"><div class="name">FORGE_DESIGN_SYSTEM.md</div><div class="sub">Doc da família</div></a>
    <a class="card" href="FLUXO_EVOLUCAO_DS.md"><div class="name">FLUXO_EVOLUCAO_DS.md</div><div class="sub">Como este sistema evolui</div></a>
  </div>
</div>
</main>
<footer>Forge-App-Dev/forge-ds · gerado por scripts/build-index.mjs a partir dos @dsCard. Não editar à mão.</footer>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, "index.html"), html);
console.log("index.html gerado:", cards.length, "cards");
