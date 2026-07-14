import React from "react";
import { Icon } from "../icons/Icon";

// QuickAction — an icon+label shortcut for a dashboard grid (PF-02, OP-024).
// One cell: a rounded icon chip over a short label, the whole thing a real
// button (keyboard-focusable, press state, ≥44px target). Lay several out in a
// CSS grid on the consumer side — QuickAction fills its cell (width 100%).
//
// `accent` tints the icon chip (e.g. a module color); omit for neutral.
// `badge` shows a small count dot (e.g. pending items). No product copy lives
// here — `icon`/`label` are supplied by the screen.
export const QuickAction = React.forwardRef(function QuickAction({ icon, label, onClick, accent, badge, disabled = false, className, style }, ref) {
  const [pressed, setPressed] = React.useState(false);
  const tint = accent || "var(--forge-accent)";

  return (
    <button
      ref={ref}
      className={className ? `forge-focusable ${className}` : "forge-focusable"}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        width: "100%",
        minHeight: "var(--forge-tap-target)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--forge-space-5)",
        padding: "var(--forge-space-8) var(--forge-space-6)",
        backgroundColor: "var(--forge-surface)",
        border: "var(--forge-border-w) solid var(--forge-border)",
        borderRadius: "var(--forge-radius-card)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
        transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
        font: "inherit",
        ...style,
      }}
    >
      <span style={{ position: "relative", width: 44, height: 44, borderRadius: "var(--forge-radius-input)", backgroundColor: "var(--forge-surface-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} color={tint} size={22} />
        {badge != null ? (
          <span style={{ position: "absolute", top: -4, right: -4, minWidth: 18, height: 18, paddingInline: 4, borderRadius: "var(--forge-radius-pill)", backgroundColor: "var(--forge-accent)", color: "var(--forge-on-accent)", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-mini-label)", fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>
            {badge}
          </span>
        ) : null}
      </span>
      <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", fontWeight: 600, color: "var(--forge-text)", textAlign: "center", lineHeight: "var(--forge-lh-chip)" }}>
        {label}
      </span>
    </button>
  );
});
