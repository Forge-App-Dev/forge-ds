import React from "react";

// MetaBar — compact single-value progress bar (e.g. daily kcal), turns
// warning-colored when over target. Pass `segments` (array of {value, color})
// for a stacked/striped variant showing multiple contributors on one bar
// (e.g. each meal's share of the day's calories) instead of a single fill.
export function MetaBar({ value, target, color = "var(--forge-nutrition)", segments }) {
  if (segments && segments.length) {
    const total = target > 0 ? target : segments.reduce((s, seg) => s + seg.value, 0) || 1;
    return (
      <div style={{ display: "flex", height: 6, borderRadius: 3, backgroundColor: "var(--forge-surface-raised)", overflow: "hidden" }}>
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              width: Math.max(0, Math.min(1, seg.value / total)) * 100 + "%",
              backgroundColor: seg.color,
              transition: "width 0.3s ease",
              borderRight: i < segments.length - 1 ? "1.5px solid var(--forge-surface-raised)" : "none",
            }}
          />
        ))}
      </div>
    );
  }
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  const over = target > 0 && value > target;
  return (
    <div style={{ height: 6, borderRadius: 3, backgroundColor: "var(--forge-surface-raised)", overflow: "hidden" }}>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          width: pct * 100 + "%",
          backgroundColor: over ? "var(--forge-warning)" : color,
          transition: "width 0.3s ease, background-color 0.3s ease",
        }}
      />
    </div>
  );
}
