import React from "react";
import { Icon } from "../icons/Icon";

// Stepper — numeric +/- control (sets, reps, quantity). The most-touched
// control in a training app. Accessibility follows the hard-won TalkBack rule
// from the app: do NOT wrap the pair in role="adjustable"/spinbutton (that
// hides the inner buttons); instead expose two real buttons with clear labels
// and a live region announcing the value. Respects min/max/step and disables
// the relevant button at the bounds.
export const Stepper = React.forwardRef(function Stepper({ value = 0, onChange, min = -Infinity, max = Infinity, step = 1, unit = "", label, disabled = false, className, style }, ref) {
  const rid = React.useId ? React.useId() : "forge-stepper";
  const set = (v) => { const c = Math.min(max, Math.max(min, v)); if (onChange && c !== value) onChange(c); };
  const canDec = !disabled && value - step >= min;
  const canInc = !disabled && value + step <= max;

  const btn = (dir, enabled, onClick, glyph) => (
    <button
      className="forge-focusable"
      onClick={onClick}
      disabled={!enabled}
      aria-label={dir === "dec" ? `Diminuir ${label || ""}`.trim() : `Aumentar ${label || ""}`.trim()}
      style={{
        width: 40, height: 40,
        borderRadius: "var(--forge-radius-input)",
        border: "var(--forge-border-w) solid var(--forge-border-input)",
        backgroundColor: "var(--forge-surface-raised)",
        color: "var(--forge-text)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        cursor: enabled ? "pointer" : "default",
        opacity: enabled ? 1 : "var(--forge-opacity-disabled)",
        flexShrink: 0,
      }}
    >
      <Icon name={glyph} color="currentColor" size={18} />
    </button>
  );

  return (
    <div ref={ref} className={className} style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}>
      {btn("dec", canDec, () => set(value - step), "minus")}
      <span
        role="status"
        aria-live="polite"
        aria-label={label ? `${label}: ${value}${unit}` : undefined}
        style={{ minWidth: 48, textAlign: "center", fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: 20, color: "var(--forge-text)", fontVariantNumeric: "tabular-nums" }}
      >
        {value}{unit ? <span style={{ fontSize: 13, color: "var(--forge-text-dim)" }}>{unit}</span> : null}
      </span>
      {btn("inc", canInc, () => set(value + step), "plus")}
    </div>
  );
});
