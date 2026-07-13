import React from "react";
import { Icon } from "../icons/Icon";

// StatBadge — small delta indicator (up/down/flat) for a trend value, e.g.
// weight change since last week. Color follows semantic meaning, not
// direction — pass `goodDirection` to say whether "down" or "up" is the
// positive outcome for this particular stat (losing weight = good; gaining
// strength/reps = good), so color stays meaningful either way. A "bad" trend
// uses --forge-negative, kept distinct from --forge-danger (destructive) so a
// worsening metric never looks like a delete action (OP-129).
export function StatBadge({ value, unit = "", goodDirection = "down", threshold = 0.05 }) {
  const flat = Math.abs(value) < threshold;
  const dir = flat ? "flat" : value > 0 ? "up" : "down";
  const isGood = flat ? null : dir === goodDirection;
  const color = flat ? "var(--forge-text-dim)" : isGood ? "var(--forge-success)" : "var(--forge-negative)";
  const iconName = flat ? null : dir === "up" ? "up" : "down";
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 3, color, fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-chip)" }}>
      {iconName ? <Icon name={iconName} color={color} size={13} /> : null}
      <span>{flat ? "\u2014" : `${value > 0 ? "+" : ""}${value}${unit}`}</span>
    </div>
  );
}
