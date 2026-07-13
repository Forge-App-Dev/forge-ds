import React from "react";

// SectionLabel — a Label pre-set with the section-heading margin used above
// grouped list content (e.g. "Sua semana", "Café da manhã").
export function SectionLabel({ children, style }) {
  return (
    <div
      style={{
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: "var(--forge-text-label)",
        textTransform: "uppercase",
        letterSpacing: "var(--forge-tracking-label)",
        color: "var(--forge-text-faint)",
        marginTop: 14,
        marginBottom: 8,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
