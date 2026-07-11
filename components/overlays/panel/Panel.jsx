import React from "react";

// Centered modal panel — dark scrim + panel (radius 18, maxWidth 440).
// Used for small choices/confirmations (pick-a-workout, schedule editor).
export function Panel({ visible, onClose, title, children, footer }) {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10,10,12,0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 14,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--forge-panel)",
          borderRadius: "var(--radius-panel)",
          border: "1px solid var(--forge-border)",
          width: "100%",
          maxWidth: 440,
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 18px" }}>
          <div
            style={{
              flex: 1,
              fontFamily: "var(--font-title)",
              fontWeight: 700,
              fontSize: 20,
              color: "var(--forge-text)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-title)",
            }}
          >
            {title}
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 18, cursor: "pointer", padding: 4 }}
          >
            ✕
          </button>
        </div>
        <div style={{ overflowY: "auto", padding: `0 18px ${footer ? 4 : 18}px` }}>{children}</div>
        {footer ? <div style={{ padding: "0 18px 16px" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
