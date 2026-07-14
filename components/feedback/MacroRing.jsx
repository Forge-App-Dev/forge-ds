import React from "react";
import { Ring } from "./ring/Ring.jsx";

// MacroRing — the macro-distribution ring: a composed pattern over the signature
// Ring that stacks protein/carb/fat segments (fixed macro colors, canonical
// order protein→carb→fat per ADR-0052) on one track, with a ready-made legend
// beneath. This is NOT a copy-domain product piece — it carries no coach voice,
// only the macro naming and colors — so it lives in feedback/ next to Ring and
// MacroMeter.
//
// `protein`/`carb`/`fat` are amounts (grams by default); the segments fill the
// ring in proportion to their share of the total. `center` renders inside the
// ring (e.g. total kcal). The legend keeps color + label + value together so
// meaning never rides on color alone (ADR-0052); pass `legend={false}` to drop
// it in dense contexts where the values live elsewhere.
const MACROS = [
  { key: "protein", label: "Proteína", color: "var(--forge-macro-protein)" },
  { key: "carb", label: "Carboidrato", color: "var(--forge-macro-carb)" },
  { key: "fat", label: "Gordura", color: "var(--forge-macro-fat)" },
];

export function MacroRing({
  protein = 0,
  carb = 0,
  fat = 0,
  unit = "g",
  size = 120,
  stroke = 12,
  center,
  legend = true,
  label,
  style,
}) {
  const vals = { protein, carb, fat };
  const total = Math.max(0, protein) + Math.max(0, carb) + Math.max(0, fat);
  const segments = MACROS.map((m) => ({
    value: total > 0 ? Math.max(0, vals[m.key]) / total : 0,
    color: m.color,
  }));

  const aria =
    label ||
    `Macros: ${MACROS.map((m) => `${m.label.toLowerCase()} ${Math.round(vals[m.key])} ${unit}`).join(", ")}`;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--forge-space-10)", ...style }}>
      <Ring size={size} stroke={stroke} segments={segments} label={aria}>
        {center}
      </Ring>

      {legend ? (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--forge-space-4)" }}>
          {MACROS.map((m) => (
            <li key={m.key} style={{ display: "flex", alignItems: "center", gap: "var(--forge-space-4)" }}>
              <span
                aria-hidden="true"
                style={{ width: 10, height: 10, flexShrink: 0, borderRadius: "var(--forge-radius-pill)", backgroundColor: m.color, display: "inline-block" }}
              />
              <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body-sm)", color: "var(--forge-text-muted)", fontWeight: 600 }}>
                {m.label}
              </span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body-sm)", color: "var(--forge-text-dim)", fontWeight: 700, fontVariantNumeric: "tabular-nums", paddingLeft: "var(--forge-space-6)" }}>
                {Math.round(vals[m.key])} {unit}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
