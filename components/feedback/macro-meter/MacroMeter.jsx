import React from "react";
import { ProgressBar } from "../ProgressBar.jsx";

// MacroMeter — labeled progress bar for a single macro (protein/carb/fat).
// Pass `compact` to drop the label row entirely (dot + bar only) for dense
// contexts like a food-item row inside a meal card.
//
// Domain wrapper over ProgressBar (OP-124): the bar is a ProgressBar; MacroMeter
// adds the macro dot, label and value/target readout around it.
export const MacroMeter = React.forwardRef(function MacroMeter({ label, color, value, target, unit = "g", compact = false, className, style }, ref) {
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  const bar = (
    <ProgressBar
      value={pct}
      color={color}
      height={compact ? 5 : 6}
      label={label}
      valueNow={Math.round(value)}
      valueMax={Math.round(target)}
    />
  );

  if (compact) {
    return (
      <div ref={ref} className={className} style={{ display: "flex", alignItems: "center", gap: 8, ...style }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color, display: "inline-block", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>{bar}</div>
        <span style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 11, flexShrink: 0 }}>
          {Math.round(value)}{unit}
        </span>
      </div>
    );
  }
  return (
    <div ref={ref} className={className} style={{ marginBottom: 10, ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color, display: "inline-block" }} />
          <span style={{ color: "var(--forge-text-muted)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 12.5 }}>{label}</span>
        </div>
        <span style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 12 }}>
          {Math.round(value)} / {Math.round(target)} {unit}
        </span>
      </div>
      {bar}
    </div>
  );
});
