import React from "react";
import { ProgressBar } from "../ProgressBar.jsx";
import { content } from "../../shared/content.js";

// MetaBar — compact single-value progress bar (e.g. daily kcal), turns
// warning-colored when over target. Pass `segments` (array of {value, color})
// for a stacked/striped variant showing multiple contributors on one bar
// (e.g. each meal's share of the day's calories) instead of a single fill.
//
// Domain wrapper over ProgressBar (OP-124): it owns the value-vs-target math and
// the over-target warning color; ProgressBar renders the bar itself.
export function MetaBar({ value, target, color = "var(--forge-nutrition)", segments, label }) {
  if (segments && segments.length) {
    const total = target > 0 ? target : segments.reduce((s, seg) => s + seg.value, 0) || 1;
    return (
      <ProgressBar
        height={6}
        separators
        label={label || content.metaBar.distribution}
        segments={segments.map((seg) => ({ value: seg.value / total, color: seg.color }))}
      />
    );
  }
  const pct = target > 0 ? Math.min(1, value / target) : 0;
  const over = target > 0 && value > target;
  return (
    <ProgressBar
      value={pct}
      height={6}
      color={over ? "var(--forge-warning)" : color}
      valueNow={Math.round(value)}
      valueMax={Math.round(target)}
      label={label || content.metaBar.value}
    />
  );
}
