import React from "react";

// Text — body-copy primitive (Inter). This is the missing everyday-text
// component: screens currently style raw <div>s by hand for body text. Sizes
// map to the type scale; `weight` and `color` are props; `as` picks the
// element (span/div/p/label). cardTitle lives here (not in Title) — it's Inter
// bold, not a Barlow heading (OP-013/P-13).
const SIZE = {
  cardTitle: { fontSize: "var(--forge-text-card-title)", lineHeight: "var(--forge-lh-card-title)", fontWeight: 700 },
  listItem: { fontSize: "var(--forge-text-list-item)", lineHeight: "var(--forge-lh-list-item)" },
  body: { fontSize: "var(--forge-text-body)", lineHeight: "var(--forge-lh-body)" },
  bodySm: { fontSize: "var(--forge-text-body-sm)", lineHeight: "var(--forge-lh-body-sm)" },
  chip: { fontSize: "var(--forge-text-chip)", lineHeight: "var(--forge-lh-chip)" },
};

export function Text({ children, size = "body", weight, color = "var(--forge-text)", as = "span", style }) {
  const El = as;
  const s = SIZE[size] || SIZE.body;
  return (
    <El
      style={{
        fontFamily: "var(--forge-font-body)",
        color,
        ...s,
        ...(weight ? { fontWeight: weight } : {}),
        ...style,
      }}
    >
      {children}
    </El>
  );
}
