import React from "react";
import { Icon } from "../icons/Icon";
import { content } from "../shared/content.js";

// StreakIndicator — a training streak: a week of dots (a completed day is the
// accent, an empty day the dimmer token, mirroring the accent-active/dimmer-
// inactive rule) plus the running count ("X dias"). A PRODUCT component: it
// knows the training-habit concept and is meant to sit next to (or share the
// grid of) the WeekStrip.
//
// `days` is this week's completion (booleans, ideally 7, seg→dom). `count` is
// the true streak length in days; if omitted it falls back to the number of
// completed days shown. The whole block is a single labeled image for screen
// readers — the dots are decorative, the aria-label carries the meaning.
export const StreakIndicator = React.forwardRef(function StreakIndicator({ days = [], count, accent, label, className, style }, ref) {
  const week = Array.isArray(days) ? days : [];
  const doneThisWeek = week.filter(Boolean).length;
  const total = count != null ? count : doneThisWeek;
  const tint = accent || "var(--forge-accent)";
  const aria = label || content.streakIndicator.label(total, doneThisWeek, week.length);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={aria}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--forge-space-6)", ...style }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          borderRadius: "var(--forge-radius-chip)",
          backgroundColor: `color-mix(in srgb, ${tint} 14%, var(--forge-surface))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="flame" color={tint} size={18} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--forge-space-2)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--forge-space-2)" }}>
          <span
            style={{
              fontFamily: "var(--forge-font-title)",
              fontWeight: 800,
              fontSize: "var(--forge-text-panel-title)",
              lineHeight: 1,
              letterSpacing: "var(--forge-tracking-title)",
              color: "var(--forge-text)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {total}
          </span>
          <span
            style={{
              fontFamily: "var(--forge-font-body)",
              fontSize: "var(--forge-text-label)",
              letterSpacing: "var(--forge-tracking-label)",
              textTransform: "uppercase",
              color: "var(--forge-text-faint)",
              fontWeight: 700,
            }}
          >
            {content.streakIndicator.dayUnit(total)}
          </span>
        </div>

        {week.length ? (
          <div aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "var(--forge-space-3)" }}>
            {week.map((done, i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "var(--forge-radius-pill)",
                  backgroundColor: done ? tint : "var(--forge-text-dimmer)",
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
});
