import React from "react";

// ProgressBar — generic linear progress primitive (OP-034). A single fill
// (`value` 0..1) over a `track`, or a stacked `segments` variant (array of
// {value, color}, each value a 0..1 fraction of the full bar) for showing
// several contributors on one bar. `color`/`track`/`height` are props.
//
// This is the BASE primitive that the domain meters compose (OP-124): MacroMeter
// and MetaBar render their bar through ProgressBar and add their labels/values on
// top. For domain aria in real units (e.g. "1940 of 2000 kcal"), pass
// `valueNow`/`valueMin`/`valueMax` — they override the default 0–100 percentage.
// `separators` draws hairline dividers between segments (the striped meter look).
export function ProgressBar({
  value = 0,
  color = "var(--forge-accent)",
  track = "var(--forge-surface-raised)",
  height = 6,
  segments,
  label,
  valueNow,
  valueMin,
  valueMax,
  separators = false,
  style,
}) {
  const radius = height / 2;
  const fillTransition = "width var(--forge-duration-base) var(--forge-ease-standard), background-color var(--forge-duration-base) var(--forge-ease-standard)";

  if (segments && segments.length) {
    return (
      <div
        role="img"
        aria-label={label || "Progresso"}
        style={{ display: "flex", height, borderRadius: radius, backgroundColor: track, overflow: "hidden", ...style }}
      >
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              width: Math.max(0, Math.min(1, seg.value)) * 100 + "%",
              backgroundColor: seg.color,
              transition: "width var(--forge-duration-base) var(--forge-ease-standard)",
              ...(separators && i < segments.length - 1 ? { borderRight: "var(--forge-border-w-strong) solid var(--forge-surface-raised)" } : {}),
            }}
          />
        ))}
      </div>
    );
  }

  const pct = Math.max(0, Math.min(1, value));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={valueNow != null ? valueNow : Math.round(pct * 100)}
      aria-valuemin={valueMin != null ? valueMin : 0}
      aria-valuemax={valueMax != null ? valueMax : 100}
      style={{ height, borderRadius: radius, backgroundColor: track, overflow: "hidden", ...style }}
    >
      <div
        style={{
          height,
          borderRadius: radius,
          width: pct * 100 + "%",
          backgroundColor: color,
          transition: fillTransition,
        }}
      />
    </div>
  );
}
