import React from "react";

// Title — large Barlow Condensed heading. Size variants map to the type
// scale's title tokens (screenTitle 34 / panelTitle 22 / cardTitle 16 / logoLg 40).
const SIZE = {
  logoLg: { fontSize: "var(--text-logo-lg)", lineHeight: "44px" },
  screenTitle: { fontSize: "var(--text-screen-title)", lineHeight: "34px" },
  panelTitle: { fontSize: "var(--text-panel-title)", lineHeight: "24px" },
  cardTitle: { fontSize: "var(--text-card-title)", lineHeight: "20px", textTransform: "none", letterSpacing: 0, fontFamily: "var(--font-body)", fontWeight: 700 },
};

export function Title({ children, size = "screenTitle", color = "var(--forge-text)", style }) {
  const s = SIZE[size] || SIZE.screenTitle;
  return (
    <div
      style={{
        fontFamily: "var(--font-title)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-title)",
        color,
        ...s,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
