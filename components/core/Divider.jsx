import React from "react";

// Divider — 1px hairline separator (OP-038), horizontal (default) or vertical.
// Draws with `var(--forge-divider)`; pass `margin` (number px or CSS string)
// for optional spacing along the flow axis. Depth in Forge is by color/border,
// never shadow (ADR-0028) — this is the border-hairline separator primitive.
export function Divider({ orientation = "horizontal", margin, color = "var(--forge-divider)", style }) {
  const vertical = orientation === "vertical";
  const m = margin == null ? undefined : typeof margin === "number" ? margin + "px" : margin;
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={{
        flexShrink: 0,
        backgroundColor: color,
        ...(vertical
          ? { width: "var(--forge-border-w)", alignSelf: "stretch", margin: m ? `0 ${m}` : undefined }
          : { height: "var(--forge-border-w)", width: "100%", margin: m ? `${m} 0` : undefined }),
        ...style,
      }}
    />
  );
}
