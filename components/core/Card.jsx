import React from "react";

// Card — base surface container. Optional left accent stripe (stripeColor).
// Pass `onClick` to make it a pressable card (keyboard-focusable, role=button,
// press/selected states) — the pattern several screens reconstruct by hand.
// `selected` draws an accent border (for choose-from-a-list contexts).
// `header`/`footer` are optional slots rendered above/below the body inside the
// content column. When a stripe is present the body padding is slightly larger
// so text clears the stripe.
export const Card = React.forwardRef(function Card({ children, stripeColor, onClick, selected = false, header, footer, disabled = false, className, style }, ref) {
  const pressable = typeof onClick === "function";
  const [pressed, setPressed] = React.useState(false);

  const base = {
    display: "flex",
    backgroundColor: "var(--forge-surface)",
    borderRadius: "var(--forge-radius-card)",
    border: `var(--forge-border-w) solid ${selected ? "var(--forge-accent)" : "var(--forge-border)"}`,
    overflow: "hidden",
    marginBottom: "var(--forge-space-card-gap)",
    width: "100%",
    textAlign: "left",
    opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
    transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
    cursor: pressable && !disabled ? "pointer" : "default",
    ...style,
  };

  const inner = (
    <>
      {stripeColor ? <div style={{ width: 4, flexShrink: 0, backgroundColor: stripeColor }} /> : null}
      <div style={{ flex: 1, minWidth: 0, padding: stripeColor ? "var(--forge-space-24)" : "var(--forge-space-card)" }}>
        {header ? <div style={{ marginBottom: "var(--forge-space-10)" }}>{header}</div> : null}
        {children}
        {footer ? <div style={{ marginTop: "var(--forge-space-10)" }}>{footer}</div> : null}
      </div>
    </>
  );

  if (pressable) {
    return (
      <button
        ref={ref}
        className={["forge-focusable", className].filter(Boolean).join(" ")}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-pressed={selected || undefined}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{ ...base, font: "inherit", padding: 0 }}
      >
        {inner}
      </button>
    );
  }

  return <div ref={ref} className={className} style={base}>{inner}</div>;
});
