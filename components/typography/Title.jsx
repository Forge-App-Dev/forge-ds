import React from "react";

// Title — large Barlow Condensed uppercase heading. Sizes map to the type
// scale's title tokens (logoLg 40 / screenTitle 34 / panelTitle 22).
// Pass `as` ("h1".."h3") for correct heading semantics (defaults to a div).
// NOTE: cardTitle moved to <Text size="cardTitle"> — a card title is Inter
// body-bold, not a Barlow heading; the alias below is kept for back-compat but
// deprecated (OP-013/P-13).
const SIZE = {
  logoLg: { fontSize: "var(--forge-text-logo-lg)", lineHeight: "var(--forge-lh-logo-lg)" },
  screenTitle: { fontSize: "var(--forge-text-screen-title)", lineHeight: "var(--forge-lh-screen-title)" },
  panelTitle: { fontSize: "var(--forge-text-panel-title)", lineHeight: "var(--forge-lh-panel-title)" },
  cardTitle: { fontSize: "var(--forge-text-card-title)", lineHeight: "var(--forge-lh-card-title)", textTransform: "none", letterSpacing: 0, fontFamily: "var(--forge-font-body)", fontWeight: 700 },
};

export const Title = React.forwardRef(function Title({ children, size = "screenTitle", color = "var(--forge-text)", as = "div", className, style }, ref) {
  const El = as;
  const s = SIZE[size] || SIZE.screenTitle;
  const isCard = size === "cardTitle";
  return (
    <El
      ref={ref}
      className={className}
      style={{
        fontFamily: "var(--forge-font-title)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "var(--forge-tracking-title)",
        color,
        ...s,
        ...style,
      }}
    >
      {children}
    </El>
  );
});
