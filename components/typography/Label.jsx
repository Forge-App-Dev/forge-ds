import React from "react";

// Label — small uppercase tracked text. Two sizes: label (11.5) and
// miniLabel (10.5). Used for field labels, eyebrows, tiny captions.
export function Label({ children, size = "label", color = "var(--forge-text-faint)", style }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: size === "miniLabel" ? "var(--text-mini-label)" : "var(--text-label)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-label)",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
