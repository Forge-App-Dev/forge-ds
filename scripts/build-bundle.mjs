// Gerador do _ds_bundle.js e _ds_manifest.json a partir dos .jsx do repo.
// Substitui a exportação do Claude Design. Fiel ao formato format:4.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as babel from "@babel/core";
import { parse } from "@babel/parser";
import _traverseMod from "@babel/traverse";
import crypto from "crypto";
const traverse = (_traverseMod.default || _traverseMod);

const ROOT = "/home/claude/ds/repo";
const NS = "ForgeDesignSystem_7731a5";

// Ordem canônica (mesma do manifest atual) — componentes primeiro, depois shared.
const COMPONENTS = [
  ["Card", "components/core/Card.jsx"],
  ["ConfirmButton", "components/core/ConfirmButton.jsx"],
  ["HeaderAction", "components/core/HeaderAction.jsx"],
  ["EmptyState", "components/feedback/EmptyState.jsx"],
  ["InlineAlert", "components/feedback/InlineAlert.jsx"],
  ["Spinner", "components/feedback/Spinner.jsx"],
  ["StatBadge", "components/feedback/StatBadge.jsx"],
  ["ErrorState", "components/feedback/ErrorState.jsx"],
  ["Skeleton", "components/feedback/Skeleton.jsx"],
  ["TargetsCard", "components/feedback/TargetsCard.jsx"],
  ["LoadingScreen", "components/feedback/loading-screen/LoadingScreen.jsx"],
  ["MacroMeter", "components/feedback/macro-meter/MacroMeter.jsx"],
  ["MetaBar", "components/feedback/meta-bar/MetaBar.jsx"],
  ["MiniChart", "components/feedback/mini-chart/MiniChart.jsx"],
  ["QtyInput", "components/forms/QtyInput.jsx"],
  ["TextField", "components/forms/TextField.jsx"],
  ["Switch", "components/forms/Switch.jsx"],
  ["Stepper", "components/forms/Stepper.jsx"],
  ["SearchField", "components/forms/SearchField.jsx"],
  ["Select", "components/forms/Select.jsx"],
  ["ScreenBody", "components/layout/screen-body/ScreenBody.jsx"],
  ["Screen", "components/layout/screen/Screen.jsx"],
  ["ModuleHeader", "components/navigation/module-header/ModuleHeader.jsx"],
  ["ModuleTabBar", "components/navigation/module-tab-bar/ModuleTabBar.jsx"],
  ["VideoModal", "components/overlays/VideoModal.jsx"],
  ["Panel", "components/overlays/panel/Panel.jsx"],
  ["Label", "components/typography/Label.jsx"],
  ["SectionLabel", "components/typography/SectionLabel.jsx"],
  ["Text", "components/typography/Text.jsx"],
  ["Title", "components/typography/Title.jsx"],
];
// Estes precisam vir ANTES de quem os consome (referência via __ds_scope em init? não —
// só em render; mas mantemos deps cedo por segurança): shared/color, Icon, Ring, Button,
// Pill, FullScreen, AppHeader.
const DEPS_FIRST = [
  ["onColor", "components/shared/color.js"],   // + resolveColor
  ["useDialogA11y", "components/shared/useDialogA11y.js"],
  ["Icon", "components/icons/Icon.jsx"],        // + ICON_NAMES
  ["ListItem", "components/forms/ListItem.jsx"],
  ["Ring", "components/feedback/ring/Ring.jsx"],
  ["Button", "components/core/Button.jsx"],
  ["Pill", "components/core/Pill.jsx"],
  ["FullScreen", "components/overlays/full-screen/FullScreen.jsx"],
  ["AppHeader", "components/navigation/app-header/AppHeader.jsx"],
];

// Lista final de arquivos únicos, na ordem: deps primeiro, depois o resto.
const seen = new Set();
const FILES = [];
for (const [, p] of [...DEPS_FIRST, ...COMPONENTS]) {
  if (!seen.has(p)) { seen.add(p); FILES.push(p); }
}

function analyze(src) {
  const ast = parse(src, { sourceType: "module", plugins: ["jsx"] });
  const imported = new Set();
  const exported = [];
  traverse(ast, {
    ImportDeclaration(p) {
      for (const s of p.node.specifiers) {
        if (s.type === "ImportSpecifier" || s.type === "ImportDefaultSpecifier") {
          // React fica global; não reescrever
          if (s.local.name !== "React") imported.add(s.local.name);
        }
      }
    },
    ExportNamedDeclaration(p) {
      const d = p.node.declaration;
      if (d && d.type === "FunctionDeclaration") exported.push(d.id.name);
      if (d && d.type === "VariableDeclaration") for (const v of d.declarations) exported.push(v.id.name);
      for (const s of p.node.specifiers || []) exported.push(s.exported.name);
    },
  });
  return { imported, exported };
}

function transformFile(src, imported) {
  // Plugin: remove imports; reescreve referências de nomes importados → __ds_scope.NAME
  const plugin = ({ types: t }) => ({
    visitor: {
      ImportDeclaration(p) { p.remove(); },
      ReferencedIdentifier(p) {
        const n = p.node.name;
        if (imported.has(n)) {
          // não reescrever se for propriedade (obj.NAME) ou key
          if (p.parentPath.isMemberExpression({ property: p.node }) && !p.parentPath.node.computed) return;
          if (p.parentPath.isObjectProperty({ key: p.node }) && !p.parentPath.node.computed) return;
          p.replaceWith(t.memberExpression(t.memberExpression(t.identifier("__ds_scope"), t.identifier("__ds_scope_marker_REMOVE")), t.identifier(n)));
        }
      },
    },
  });
  // Primeiro JSX→createElement, depois rewrite. Fazemos em 2 passes p/ robustez.
  const pass1 = babel.transformSync(src, {
    presets: [["@babel/preset-react", { runtime: "classic", pragma: "React.createElement", pragmaFrag: "React.Fragment", development: false }]],
    babelrc: false, configFile: false,
  }).code;
  const pass2 = babel.transformSync(pass1, {
    plugins: [pluginRewrite(imported)], babelrc: false, configFile: false,
  }).code;
  return pass2;
}

function pluginRewrite(imported) {
  return ({ types: t }) => ({
    visitor: {
      ImportDeclaration(p) { p.remove(); },
      ExportNamedDeclaration(p) {
        if (p.node.declaration) p.replaceWith(p.node.declaration);
        else p.remove();
      },
      ExportDefaultDeclaration(p) {
        const d = p.node.declaration;
        if (d && (d.type === "FunctionDeclaration" || d.type === "ClassDeclaration") && d.id) p.replaceWith(d);
        else p.remove();
      },
      ReferencedIdentifier(p) {
        const n = p.node.name;
        if (!imported.has(n)) return;
        if (p.parentPath.isMemberExpression({ property: p.node }) && !p.parentPath.node.computed) return;
        if (p.parentPath.isObjectProperty({ key: p.node }) && !p.parentPath.node.computed) return;
        p.replaceWith(t.memberExpression(t.identifier("__ds_scope"), t.identifier(n)));
      },
    },
  });
}

// ---- montar bundle ----
const manifestComponents = [];
const sourceHashes = {};
let body = "";

for (const rel of FILES) {
  const abs = path.join(ROOT, rel);
  const src = fs.readFileSync(abs, "utf8");
  sourceHashes[rel] = crypto.createHash("sha256").update(src).digest("hex").slice(0, 12);
  const { imported, exported } = analyze(src);
  const code = transformFile(src, imported);
  const assign = exported.length ? `\nObject.assign(__ds_scope, { ${exported.join(", ")} });` : "";
  body += `\n// ${rel}\ntry { (() => {\n${code}${assign}\n})(); } catch (e) { ${NS === "" ? "" : ""}__ds_ns.__errors.push({ path: ${JSON.stringify(rel)}, error: String((e && e.message) || e) }); }\n`;
  for (const name of exported) {
    if (rel.startsWith("components/shared/")) continue; // utils internos — não expostos
    manifestComponents.push({ name, sourcePath: rel });
  }
}

// Exposição ao namespace (todos exceto onColor/resolveColor de shared)
const exposeNames = manifestComponents.map((c) => c.name);
let expose = "";
for (const n of exposeNames) expose += `\n__ds_ns.${n} = __ds_scope.${n};\n`;

const header = {
  format: 4, namespace: NS,
  components: manifestComponents,
  sourceHashes,
  inlinedExternals: [],
  unexposedExports: [
    { name: "onColor", sourcePath: "components/shared/color.js" },
    { name: "resolveColor", sourcePath: "components/shared/color.js" },
    { name: "useDialogA11y", sourcePath: "components/shared/useDialogA11y.js" },
  ],
};

const bundle =
  `/* @ds-bundle: ${JSON.stringify(header)} */\n\n` +
  `(() => {\n\n` +
  `const __ds_ns = (window.${NS} = window.${NS} || {});\n\n` +
  `const __ds_scope = {};\n\n` +
  `(__ds_ns.__errors = __ds_ns.__errors || []);\n` +
  body +
  expose +
  `\n})();\n`;

fs.writeFileSync(path.join(ROOT, "_ds_bundle.js"), bundle);

// manifest (mantém startingPoints do existente se houver)
let startingPoints = [];
try { startingPoints = JSON.parse(fs.readFileSync(path.join(ROOT, "_ds_manifest.json"), "utf8")).startingPoints || []; } catch {}
const manifest = { namespace: NS, components: manifestComponents.concat([{ name: "ICON_NAMES", sourcePath: "components/icons/Icon.jsx" }]), startingPoints };
fs.writeFileSync(path.join(ROOT, "_ds_manifest.json"), JSON.stringify(manifest, null, 1));

console.log("bundle gerado:", manifestComponents.length, "exports");
console.log("arquivos:", FILES.length);
