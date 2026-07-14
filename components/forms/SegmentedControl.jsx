import React from "react";
import { onColor } from "../shared/color.js";

// SegmentedControl — single choice among 2–3 mutually-exclusive options
// (e.g. kg / lb, semana / mês). The Forge answer to a radio group (ADR-0008):
// it carries real group semantics — role="radiogroup" wrapping options with
// role="radio", exactly one aria-checked. Keyboard: Left/Up and Right/Down move
// AND select (roving tabindex), Home/End jump to the ends. Reuses the pill/track
// look — a rounded track with the active segment filled with the accent (or a
// module `color`), text color from onColor().
export const SegmentedControl = React.forwardRef(function SegmentedControl({ options = [], value, onChange, label, color = "var(--forge-accent-fill)", disabled = false, className, style }, ref) {
  const rid = React.useId ? React.useId() : "forge-seg";
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const idx = opts.findIndex((o) => o.value === value);
  const refs = React.useRef([]);

  const select = (i) => {
    if (disabled) return;
    const o = opts[i];
    if (!o) return;
    if (onChange && o.value !== value) onChange(o.value);
    const el = refs.current[i];
    if (el) el.focus();
  };

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % opts.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + opts.length) % opts.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = opts.length - 1;
    if (next != null) { e.preventDefault(); select(next); }
  };

  return (
    <div ref={ref} className={className} style={{ ...style }}>
      {label ? (
        <label
          id={`${rid}-label`}
          style={{ display: "block", fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-label)", color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: "var(--forge-tracking-label)", marginBottom: 6 }}
        >
          {label}
        </label>
      ) : null}
      <div
        role="radiogroup"
        aria-labelledby={label ? `${rid}-label` : undefined}
        style={{
          display: "flex",
          padding: 3,
          gap: 3,
          borderRadius: "var(--forge-radius-pill)",
          backgroundColor: "var(--forge-surface-raised)",
          border: "var(--forge-border-w) solid var(--forge-border-input)",
          opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
          boxSizing: "border-box",
        }}
      >
        {opts.map((o, i) => {
          const active = o.value === value;
          return (
            <button
              key={String(o.value)}
              ref={(el) => { refs.current[i] = el; }}
              className="forge-focusable"
              role="radio"
              aria-checked={active}
              tabIndex={disabled ? -1 : active || (idx === -1 && i === 0) ? 0 : -1}
              disabled={disabled}
              onClick={() => select(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              style={{
                flex: 1,
                minWidth: 44,
                height: 34,
                paddingInline: 14,
                borderRadius: "var(--forge-radius-pill)",
                border: "none",
                backgroundColor: active ? color : "transparent",
                color: active ? onColor(color) : "var(--forge-text-muted)",
                fontFamily: "var(--forge-font-body)",
                fontWeight: 700,
                fontSize: "var(--forge-text-chip)",
                cursor: disabled ? "default" : "pointer",
                transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard)",
              }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
});
