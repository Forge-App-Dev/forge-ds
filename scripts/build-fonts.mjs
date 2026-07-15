// build-fonts (T-50): gera tokens/fonts.css com as fontes do Forge (Inter +
// Barlow Condensed), subset latin, woff2 embutido como data: URI.
//
// POR QUE NÃO roda no build:tokens: baixar do Google a cada build seria
// não-reproduzível (o CI ficaria dependente de rede e o base64 poderia divergir
// entre versões de fonte servidas → falha de check-drift). Então tokens/fonts.css
// é um ATIVO ESTÁTICO commitado, gerado UMA VEZ por este script e revisado no PR.
//
// Quando rodar de novo: só ao mudar as famílias/pesos abaixo. Depois de rodar,
// commite o tokens/fonts.css resultante.
//
//   node scripts/build-fonts.mjs            # escreve tokens/fonts.css
//
// Resultado: @font-face self-contained (CSP-safe, offline, sem Google Fonts em
// runtime). Importado por styles.css; o typography.css só declara --forge-font-*.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "tokens", "fonts.css");
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

// Pesos DEVEM casar com typography.css (title 600/700/800; body 400–800).
const REQS = [
  { fam: "Inter", url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
  { fam: "Barlow Condensed", url: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&display=swap" },
];

const faces = [];
let bytes = 0;
for (const r of REQS) {
  const css = await (await fetch(r.url, { headers: { "User-Agent": UA } })).text();
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[\s\S]*?\})/g;
  let m;
  while ((m = re.exec(css))) {
    if (m[1] !== "latin") continue; // só o subset latin
    const block = m[2];
    const fam = (block.match(/font-family:\s*'([^']+)'/) || [])[1] || r.fam;
    const weight = (block.match(/font-weight:\s*(\d+)/) || [])[1] || "400";
    const style = (block.match(/font-style:\s*(\w+)/) || [])[1] || "normal";
    const url = (block.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
    if (!url) continue;
    const buf = Buffer.from(await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer());
    bytes += buf.length;
    faces.push(`@font-face{font-family:"${fam}";font-style:${style};font-weight:${weight};font-display:swap;src:url(data:font/woff2;base64,${buf.toString("base64")}) format("woff2")}`);
    console.error(`  ${fam} ${weight} ${style} — ${(buf.length / 1024).toFixed(1)}KB`);
  }
}
const head = "/* Forge Design System — fontes self-hosted (Inter + Barlow Condensed), subset latin,\n" +
  "   woff2 embutido como data: URI (CSP-safe, offline, sem Google Fonts). ATIVO ESTÁTICO:\n" +
  "   gerado UMA VEZ por scripts/build-fonts.mjs — NÃO é regenerado pelo build:tokens (não\n" +
  "   depende de rede no CI). Regerar só ao mudar pesos/famílias. Ver docs/tokens-architecture.md. */\n";
fs.writeFileSync(OUT, head + faces.join("\n") + "\n");
console.error(`\nEscrito ${faces.length} faces, ${(bytes / 1024).toFixed(0)}KB → ${path.relative(ROOT, OUT)}`);
