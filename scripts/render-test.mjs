// Render smoke-test do bundle gerado (OP-169). Avalia o _ds_bundle.js num
// contexto com React global, checa erros de init E monta um conjunto
// representativo de componentes (inclusive os que consomem `content`), de forma
// que uma dependência faltando no bundle (ex.: content.js fora do FILES) quebre
// o teste em vez de passar silenciosamente. Usado pelo CI e à mão.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import vm from "vm";
import React from "react";
import ReactDOMServer from "react-dom/server";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NS = "ForgeDesignSystem_7731a5";

const sandbox = { window: { setInterval: () => 0, clearInterval: () => {} }, React, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "_ds_bundle.js"), "utf8"), sandbox);

const ns = sandbox.window[NS] || {};
const errors = ns.__errors || [];
if (errors.length) {
  console.error(`render-test: ${errors.length} erro(s) de init no bundle:`);
  for (const e of errors) console.error(`  - ${e.path}: ${e.error}`);
  process.exit(1);
}

const P = React.createElement;
const page = P("div", null, "slide");
// Amostra representativa. Foco: todo componente que consome `content` + um de
// cada família, montado de fato (renderToStaticMarkup) para exercitar o corpo.
const cases = [
  ["Button", { title: "OK", onClick() {} }],
  ["Pill", { title: "Peito", active: true }],
  ["ConfirmButton", { onConfirm() {} }],
  ["TextField", { label: "Email" }],
  ["TargetsCard", { kcal: 2000, protein: 150, carb: 200, fat: 60, onEdit() {} }],
  ["RestTimer", { duration: 90 }],
  ["Pager", { pages: [page, page], onDone() {} }],
  ["ErrorState", { onRetry() {} }],
  ["OfflineBanner", {}],
  ["LoadingScreen", {}],
  ["PRCelebration", { exercise: "Supino", value: "80", unit: "kg" }],
  ["MacroMeter", { label: "Proteína", color: "var(--forge-macro-protein)", value: 92, target: 150 }],
  ["MetaBar", { value: 1900, target: 2000 }],
  ["Ring", { progress: 0.6 }],
];

let mounted = 0;
for (const [name, props] of cases) {
  const C = ns[name];
  if (typeof C !== "function") { console.error(`render-test: componente ausente no bundle: ${name}`); process.exit(1); }
  try {
    const html = ReactDOMServer.renderToStaticMarkup(P(C, props));
    if (!html) throw new Error("render vazio");
    mounted++;
  } catch (e) {
    console.error(`render-test: ${name} quebrou ao renderizar: ${(e && e.message) || e}`);
    process.exit(1);
  }
}

const exported = Object.keys(ns).filter((k) => !k.startsWith("__"));
console.log(`render-test OK — ${exported.length} símbolos expostos, 0 erros de init, ${mounted}/${cases.length} componentes montados.`);
