import React from "react";
import { onColor } from "../shared/color.js";
import { Icon } from "../icons/Icon";

// Pill — rounded filter/choice chip: outlined when inactive, filled with its
// `color` when active (text via onColor). `active` is a selection boolean, so it
// exposes aria-pressed for screen readers (OP-105). Additive (OP-105): optional
// leading `icon`, a `size` (sm/md — md preserves the original 40px height), and
// `disabled`. Signature is unchanged for existing callers.
const SIZES = {
  sm: { height: 34, paddingInline: 12, icon: 15 },
  md: { height: 40, paddingInline: 16, icon: 16 },
};

export const Pill = React.forwardRef(function Pill({ title, onClick, active = false, color = "var(--forge-accent-fill)", size = "md", icon, disabled = false, className, style }, ref) {
  const sz = SIZES[size] || SIZES.md;
  return (
    <button
      ref={ref}
      className={["forge-focusable", className].filter(Boolean).join(" ")}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={active}
      style={{
        height: sz.height,
        borderRadius: "var(--forge-radius-pill)",
        borderWidth: "var(--forge-border-w-strong)",
        borderStyle: "solid",
        borderColor: active ? color : "var(--forge-border-input)",
        backgroundColor: active ? color : "transparent",
        color: active ? onColor(color) : "var(--forge-text-muted)",
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: "var(--forge-text-chip)",
        paddingInline: sz.paddingInline,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: icon ? 6 : 0,
        ...style,
      }}
    >
      {icon ? <Icon name={icon} color="currentColor" size={sz.icon} /> : null}
      {title}
    </button>
  );
});
