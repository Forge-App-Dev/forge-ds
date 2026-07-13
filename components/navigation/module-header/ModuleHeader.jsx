import React from "react";
import { Title } from "../../typography/Title.jsx";

// Screen-top header: small uppercase eyebrow + large Barlow title (the single
// screen-title style, via <Title size="screenTitle">, so there's one screen
// title in the system — OP-013/P-12), plus an optional right-aligned slot.
export function ModuleHeader({ eyebrow, title, right }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        {eyebrow ? (
          <div
            style={{
              fontFamily: "var(--forge-font-body)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "var(--forge-tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--forge-text-faint)",
              marginBottom: 4,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <Title size="screenTitle" as="h1">{title}</Title>
      </div>
      {right || null}
    </div>
  );
}
