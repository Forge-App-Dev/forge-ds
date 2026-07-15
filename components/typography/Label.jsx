import React from "react";

// Label — small uppercase tracked text. Two sizes: label (11.5) and
// miniLabel (10.5). Used for field labels, eyebrows, tiny captions.
// Pass `as="label"` + `htmlFor` to associate it with a form control (OP-111);
// `htmlFor` is only applied when the element is a real <label>. Pass `id` when a
// control references the label via `aria-labelledby` (custom controls sem htmlFor).
export const Label = React.forwardRef(function Label({ children, size = "label", color = "var(--forge-text-faint)", as = "div", htmlFor, id, className, style }, ref) {
  const El = as;
  return (
    <El
      ref={ref}
      id={id}
      className={className}
      htmlFor={as === "label" ? htmlFor : undefined}
      style={{
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: size === "miniLabel" ? "var(--forge-text-mini-label)" : "var(--forge-text-label)",
        textTransform: "uppercase",
        letterSpacing: "var(--forge-tracking-label)",
        color,
        ...style,
      }}
    >
      {children}
    </El>
  );
});
