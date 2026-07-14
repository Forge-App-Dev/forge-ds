import React from "react";
import { Icon } from "../icons/Icon";

// Checkbox — accessible independent boolean (accept terms, opt-in, multi-select
// rows). Renders role="checkbox" + aria-checked, keyboard-focusable and toggled
// by Space/Enter. Pass `label` to render a tappable row (box left, label right,
// ≥44px target); omit it for a bare box. Supports `disabled` and
// `indeterminate` (a parent of a partially-selected group → aria-checked="mixed"
// with a dash glyph). NOT for choosing one of several options (ADR-0008) nor for
// an immediate on/off preference (that is Switch).
export function Checkbox({ checked = false, indeterminate = false, onChange, label, disabled = false, id, style }) {
  const rid = React.useId ? React.useId() : id || "forge-checkbox";
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  const filled = checked || indeterminate;

  const box = (
    <span
      className="forge-focusable"
      role="checkbox"
      aria-checked={indeterminate ? "mixed" : checked}
      aria-labelledby={label ? `${rid}-label` : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => { e.stopPropagation(); toggle(); }}
      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
      style={{
        width: 22,
        height: 22,
        borderRadius: "var(--forge-radius-chip)",
        backgroundColor: filled ? "var(--forge-accent)" : "var(--forge-surface-raised)",
        border: `var(--forge-border-w-strong) solid ${filled ? "var(--forge-accent)" : "var(--forge-border-input)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
        transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard)",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {indeterminate ? (
        <Icon name="minus" color="var(--forge-on-accent)" size={16} />
      ) : checked ? (
        <Icon name="check" color="var(--forge-on-accent)" size={16} />
      ) : null}
    </span>
  );

  if (!label) return box;

  return (
    <div
      onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        minHeight: "var(--forge-tap-target-min)",
        cursor: disabled ? "default" : "pointer",
        ...style,
      }}
    >
      {box}
      <span id={`${rid}-label`} style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-list-item)", color: "var(--forge-text)" }}>
        {label}
      </span>
    </div>
  );
}
