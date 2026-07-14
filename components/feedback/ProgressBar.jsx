import React from "react";

// ProgressBar — generic linear progress primitive (OP-034). A single fill
// (`value` 0..1) over a `track`, or a stacked `segments` variant (array of
// {value, color}, each value a 0..1 fraction of the full bar) for showing
// several contributors on one bar. `color`/`track`/`height` are props.
//
// This is the BASE primitive: MacroMeter/MetaBar are domain wrappers that may
// derive from it later. Reach for MacroMeter for a labeled macro, MetaBar for a
// value-vs-target meter, and ProgressBar for a plain percentage/segmented bar.
export function ProgressBar({ value = 0, color = "var(--forge-accent)", track = "var(--forge-surface-raised)", height = 6, segments, label, style }) {
  const radius = height / 2;

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
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ height, borderRadius: radius, backgroundColor: track, overflow: "hidden", ...style }}
    >
      <div
        style={{
          height,
          borderRadius: radius,
          width: pct * 100 + "%",
          backgroundColor: color,
          transition: "width var(--forge-duration-base) var(--forge-ease-standard)",
        }}
      />
    </div>
  );
}
