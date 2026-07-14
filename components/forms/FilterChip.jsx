import React from "react";
import { onColor } from "../shared/color.js";
import { Icon } from "../icons/Icon";

// FilterChip — a selectable filter chip for the scrollable filter row that sits
// under a SearchField / list header (ADR-0015). Toggles on/off and exposes its
// state via aria-pressed (it is a toggle, not an action). Optional `count` shows
// how many results the filter matches. Outlined when inactive, filled with its
// `color` when active (text via onColor). It is `flex-shrink: 0` and never
// wraps — the CONSUMER provides the horizontally-scrolling container (a flex row
// with overflow-x: auto), keeping every active filter visible.
export function FilterChip({ label, active = false, onClick, count, color = "var(--forge-accent)", icon, disabled = false, style }) {
  return (
    <button
      className="forge-focusable"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={active}
      style={{
        height: 34,
        flexShrink: 0,
        borderRadius: "var(--forge-radius-pill)",
        borderWidth: "var(--forge-border-w-strong)",
        borderStyle: "solid",
        borderColor: active ? color : "var(--forge-border-input)",
        backgroundColor: active ? color : "transparent",
        color: active ? onColor(color) : "var(--forge-text-muted)",
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: "var(--forge-text-chip)",
        paddingInline: 14,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {icon ? <Icon name={icon} color="currentColor" size={15} /> : null}
      {label}
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
}
