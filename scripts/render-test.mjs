// Render smoke-test do bundle gerado (OP-169). Avalia o _ds_bundle.js num
// contexto com React global e falha se algum componente lançar no init
// (o bundle empurra erros de módulo para __errors). Usado pelo CI e à mão.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import vm from "vm";
import React from "react";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NS = "ForgeDesignSystem_7731a5";

const sandbox = { window: { setInterval: () => 0, clearInterval: () => {} }, React, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "_ds_bundle.js"), "utf8"), sandbox);

const ns = sandbox.window[NS] || {};
const errors = ns.__errors || [];
const exported = Object.keys(ns).filter((k) => !k.startsWith("__"));

if (errors.length) {
  console.error(`render-test: ${errors.length} erro(s) no bundle:`);
  for (const e of errors) console.error(`  - ${e.path}: ${e.error}`);
  process.exit(1);
}
console.log(`render-test OK — ${exported.length} símbolos expostos, 0 erros no bundle.`);
