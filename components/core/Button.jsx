import React from "react";
import { onColor } from "../shared/color.js";
import { Icon } from "../icons/Icon";
import { Spinner } from "../feedback/Spinner.jsx";

// Button — the system's action element, one vocabulary for every button-like
// need (OP-006). Axes:
//   variant: "primary" (filled accent) | "secondary" (outlined) | "ghost"
//            (text only) | "danger" (filled danger)
//   size:    "sm" (36) | "md" (44) | "lg" (46, default for primary CTAs)
//   icon:    an ICON_NAMES glyph, placed before (default) or after the label
//   loading: shows an inline spinner and disables the button, preserving width
//   fullWidth: stretches to the container
// `color` overrides the primary fill (e.g. a module accent); text color is
// derived via onColor(). Back-compat: `small` still maps to size="sm".
// This absorbs the old HeaderAction (use variant="secondary" size="sm").
const SIZES = {
  sm: { height: "var(--forge-size-control-sm)", paddingInline: 13, fontSize: 12.5 },
  md: { height: "var(--forge-size-control-md)", paddingInline: 16, fontSize: 14 },
  lg: { height: "var(--forge-size-control-lg)", paddingInline: 18, fontSize: 15 },
};

export function Button({
  title,
  onClick,
  variant = "primary",
  size,
  small = false,
  color,
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  style,
  resolvedColor, // deprecated (OP-006): onColor() resolves tokens itself
  children,
}) {
  const [pressed, setPressed] = React.useState(false);
  const sz = SIZES[size || (small ? "sm" : "lg")] || SIZES.lg;
  const label = title != null ? title : children;
  const isDisabled = disabled || loading;

  const fill = color || "var(--forge-accent)";
  let bg, fg, border;
  if (variant === "secondary") {
    bg = "transparent"; fg = "var(--forge-text-muted)"; border = "var(--forge-border-w) solid var(--forge-border-input)";
  } else if (variant === "ghost") {
    bg = "transparent"; fg = "var(--forge-text-muted)"; border = "none";
  } else if (variant === "danger") {
    bg = "var(--forge-danger)"; fg = onColor("var(--forge-danger)"); border = "none";
  } else {
    bg = fill; fg = onColor(resolvedColor || fill); border = "none";
  }

  const iconEl = icon ? <Icon name={icon} color="currentColor" size={16} /> : null;

  return (
    <button
      className="forge-focusable"
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        height: sz.height,
        width: fullWidth ? "100%" : undefined,
        borderRadius: "var(--forge-radius-button)",
        border,
        cursor: isDisabled ? "default" : "pointer",
        paddingInline: sz.paddingInline,
        backgroundColor: bg,
        color: fg,
        fontFamily: "var(--forge-font-body)",
        fontWeight: 800,
        fontSize: sz.fontSize,
        opacity: isDisabled && !loading ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
        transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        ...style,
      }}
    >
      {loading ? <Spinner size={16} color="currentColor" label="Carregando" /> : null}
      {!loading && iconEl && iconPosition === "left" ? iconEl : null}
      {label != null ? <span>{label}</span> : null}
      {!loading && iconEl && iconPosition === "right" ? iconEl : null}
    </button>
  );
}
