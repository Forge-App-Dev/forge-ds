// check-drift (OP-014): garante que os artefatos gerados estão em dia com as
// fontes. Regenera tokens, índice e bundle e falha se o working tree mudar —
// ou seja, se alguém editou fonte sem regenerar (ou editou artefato à mão).
// Roda no CI (OP-169) e no protocolo do FLUXO_EVOLUCAO_DS.md.
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: "pipe" }).toString();

const GENERATED = [
  "tokens/colors.css", "tokens/typography.css", "tokens/spacing.css", "tokens/motion.css",
  "tokens.d.ts", "tokens/tokens.rn.js", "index.html", "_ds_bundle.js", "_ds_manifest.json",
  "docs/plan/index.html",
];

console.log("check-drift: regenerando artefatos…");
for (const script of ["build:tokens", "build:index", "build:bundle", "build:plan"]) {
  run(`npm run --silent ${script}`);
}

const dirty = run(`git status --porcelain -- ${GENERATED.join(" ")}`).trim();
if (dirty) {
  console.error("check-drift: FALHOU — artefatos desatualizados. Rode os geradores e commite:");
  console.error(dirty);
  console.error("\nDica: `npm run build:tokens && npm run build:index && npm run build:bundle`");
  process.exit(1);
}
console.log("check-drift OK — todos os artefatos em dia com as fontes.");
