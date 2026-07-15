import React from "react";

// Badge — small count/dot indicator (OP-036) for tabs, icons and list rows.
// Two shapes: a numeric pill (`count`) or a bare `dot`. Variants: `accent`
// (brand fill, on-accent text) and `neutral` (raised surface). Position it
// yourself (usually absolutely, over the thing it annotates).
//
// A dot carries no text, so give it a `label` when it's the only signal (else
// it's treated as decorative). A count is visible text; `label` overrides its
// accessible name (e.g. "3 alertas não lidos" instead of just "3").
export const Badge = React.forwardRef(function Badge({ count, dot = false, variant = "accent", label, className, style }, ref) {
  const neutral = variant === "neutral";
  const bg = neutral ? "var(--forge-surface-raised)" : "var(--forge-accent)";
  const fg = neutral ? "var(--forge-text)" : "var(--forge-on-accent)";

  if (dot) {
    return (
      <span
        ref={ref}
        className={className}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        style={{ display: "inline-block", width: 8, height: 8, borderRadius: "var(--forge-radius-pill)", backgroundColor: bg, ...style }}
      />
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      aria-label={label}
      style={{
        minWidth: 18,
        height: 18,
        paddingInline: "var(--forge-space-8)",
        borderRadius: "var(--forge-radius-pill)",
        backgroundColor: bg,
        color: fg,
        fontFamily: "var(--forge-font-body)",
        fontSize: "var(--forge-text-mini-label)",
        fontWeight: 700,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {count}
    </span>
  );
});
