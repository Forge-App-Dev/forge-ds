import React from "react";
import { onColor } from "../shared/color.js";
import { Icon } from "../icons/Icon";

// Pill — the canonical selectable chip: outlined when inactive, filled with its
// `color` when active (text via onColor). `active` is a selection boolean, so it
// exposes aria-pressed for screen readers. Optional leading `icon`, a `size`
// (sm/md), `disabled`, and an optional result `count` badge.
//
// Prop de rótulo canônica = `label` (ADR-0082). `title` continua aceito como
// alias retrocompatível (deprecado). Este componente ABSORVE o papel do antigo
// FilterChip (que agora é um alias deprecado sobre Pill) — use Pill numa linha
// rolável (flex + overflow-x:auto) para filtros com contagem.
const SIZES = {
  sm: { height: 34, paddingInline: 12, icon: 15 },
  md: { height: 40, paddingInline: 16, icon: 16 },
};

export const Pill = React.forwardRef(function Pill({ title, label, onClick, active = false, color = "var(--forge-accent-fill)", size = "md", icon, count, disabled = false, className, style }, ref) {
  const sz = SIZES[size] || SIZES.md;
  const text = label != null ? label : title;
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
        gap: (icon || count != null) ? 6 : 0,
        ...style,
      }}
    >
      {icon ? <Icon name={icon} color="currentColor" size={sz.icon} /> : null}
      {text}
      {count != null ? (
        <span
          aria-hidden="true"
          style={{
            fontVariantNumeric: "tabular-nums",
            fontSize: "var(--forge-text-mini-label)",
            fontWeight: 700,
            color: active ? "currentColor" : "var(--forge-text-dim)",
            backgroundColor: active
              ? "color-mix(in srgb, var(--forge-on-accent) 22%, transparent)"
              : "var(--forge-surface-raised)",
            borderRadius: "var(--forge-radius-pill)",
            minWidth: 18,
            height: 18,
            paddingInline: 5,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
});
