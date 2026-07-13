import React from "react";

// MacroMeter — labeled progress bar for a single macro (protein/carb/fat).
// Pass `compact` to drop the label row entirely (dot + bar only) for dense
// contexts like a food-item row inside a meal card.
export function MacroMeter({ label, color, value, target, unit = "g", compact = false }) {
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  if (compact) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color, display: "inline-block", flexShrink: 0 }} />
        <div role="progressbar" aria-label={label} aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={Math.round(target)} style={{ flex: 1, height: 5, borderRadius: 2.5, backgroundColor: "var(--forge-surface-raised)", overflow: "hidden" }}>
          <div style={{ height: 5, borderRadius: 2.5, width: pct * 100 + "%", backgroundColor: color, transition: "width var(--forge-duration-base) var(--forge-ease-standard)" }} />
        </div>
        <span style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 11, flexShrink: 0 }}>
          {Math.round(value)}{unit}
        </span>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color, display: "inline-block" }} />
          <span style={{ color: "var(--forge-text-muted)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 12.5 }}>{label}</span>
        </div>
        <span style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 12 }}>
          {Math.round(value)} / {Math.round(target)} {unit}
        </span>
      </div>
      <div role="progressbar" aria-label={label} aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={Math.round(target)} style={{ height: 6, borderRadius: 3, backgroundColor: "var(--forge-surface-raised)", overflow: "hidden" }}>
        <div style={{ height: 6, borderRadius: 3, width: pct * 100 + "%", backgroundColor: color, transition: "width var(--forge-duration-base) var(--forge-ease-standard)" }} />
      </div>
    </div>
  );
}
