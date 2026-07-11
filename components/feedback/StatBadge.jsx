import React from "react";

// StatBadge — small delta indicator (up/down/flat) for a trend value, e.g.
// weight change since last week. Color follows semantic meaning, not
// direction — pass `goodDirection` to say whether "down" or "up" is the
// positive outcome for this particular stat (losing weight = good; gaining
// strength/reps = good), so color stays meaningful either way.
export function StatBadge({ value, unit = "", goodDirection = "down" }) {
  const { Icon } = window.ForgeDesignSystem_7731a5 || {};
  const flat = Math.abs(value) < 0.05;
  const dir = flat ? "flat" : value > 0 ? "up" : "down";
  const isGood = flat ? null : dir === goodDirection;
  const color = flat ? "var(--forge-text-dim)" : isGood ? "var(--forge-success)" : "var(--forge-danger)";
  const iconName = flat ? null : dir === "up" ? "up" : "down";
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 3, color, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12.5 }}>
      {iconName && Icon ? <Icon name={iconName} color={color} size={13} /> : null}
      <span>{flat ? "—" : `${value > 0 ? "+" : ""}${value}${unit}`}</span>
    </div>
  );
}
