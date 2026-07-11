import React from "react";

// Screen-top header: small uppercase eyebrow + large Barlow title, with an
// optional right-aligned slot (e.g. an "Ajustar" button).
export function ModuleHeader({ eyebrow, title, right }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        {eyebrow ? (
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--forge-text-faint)",
              marginBottom: 4,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: 700,
            fontSize: 32,
            textTransform: "uppercase",
            color: "var(--forge-text)",
            lineHeight: "34px",
          }}
        >
          {title}
        </div>
      </div>
      {right || null}
    </div>
  );
}
