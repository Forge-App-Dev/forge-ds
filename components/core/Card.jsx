import React from "react";

export function Card({ children, stripeColor, style }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--forge-surface)",
        borderRadius: "var(--forge-radius-card)",
        border: "var(--forge-border-w) solid var(--forge-border)",
        overflow: "hidden",
        marginBottom: "var(--forge-space-card-gap)",
        ...style,
      }}
    >
      {stripeColor ? <div style={{ width: 4, flexShrink: 0, backgroundColor: stripeColor }} /> : null}
      <div style={{ flex: 1, minWidth: 0, padding: stripeColor ? "var(--forge-space-12)" : "var(--forge-space-card)" }}>{children}</div>
    </div>
  );
}
