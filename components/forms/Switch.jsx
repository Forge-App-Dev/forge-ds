import React from "react";

// Switch — on/off toggle (e.g. kg/lb preference, enable a meal). Accessible:
// role="switch" + aria-checked, keyboard-focusable, labelled. Pass `label` to
// render a tappable row with the switch on the right (the common form layout),
// or omit it for a bare switch. Disabled supported.
export const Switch = React.forwardRef(function Switch({ checked = false, onChange, label, disabled = false, id, className, style }, ref) {
  const rid = React.useId ? React.useId() : id || "forge-switch";
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };

  const knob = (
    <span
      className="forge-focusable"
      role="switch"
      aria-checked={checked}
      aria-labelledby={label ? `${rid}-label` : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => { e.stopPropagation(); toggle(); }}
      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
      style={{
        width: 44,
        height: 26,
        borderRadius: "var(--forge-radius-pill)",
        backgroundColor: checked ? "var(--forge-accent)" : "var(--forge-surface-raised)",
        border: `var(--forge-border-w) solid ${checked ? "var(--forge-accent)" : "var(--forge-border-input)"}`,
        display: "inline-flex",
        alignItems: "center",
        padding: 2,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
        transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard)",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "var(--forge-radius-pill)",
          backgroundColor: checked ? "var(--forge-on-accent)" : "var(--forge-text-faint)",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform var(--forge-duration-fast) var(--forge-ease-standard)",
        }}
      />
    </span>
  );

  if (!label) return knob;

  return (
    <div
      ref={ref}
      className={className}
      onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        minHeight: "var(--forge-tap-target)",
        cursor: disabled ? "default" : "pointer",
        ...style,
      }}
    >
      <span id={`${rid}-label`} style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-list-item)", color: "var(--forge-text)" }}>
        {label}
      </span>
      {knob}
    </div>
  );
});
