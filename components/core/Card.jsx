import React from "react";

export function Card({ children, stripeColor, style }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--forge-surface)",
        borderRadius: "var(--radius-card)",
        border: "1px solid var(--forge-border)",
        overflow: "hidden",
        marginBottom: "var(--space-card-gap)",
        ...style,
      }}
    >
      {stripeColor ? <div style={{ width: 4, flexShrink: 0, backgroundColor: stripeColor }} /> : null}
      <div style={{ flex: 1, minWidth: 0, padding: stripeColor ? 22 : "var(--space-card)" }}>{children}</div>
    </div>
  );
}
