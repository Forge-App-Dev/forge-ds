import React from "react";

// Full-screen flow (edit a plan, build a workout) — slide-in, own header
// with close (X) + title + optional right action, scrollable body, and an
// optional fixed footer for save/delete actions.
export function FullScreen({ visible = true, onClose, title, right, children, footer }) {
  if (!visible) return null;
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor: "var(--forge-bg)", display: "flex", flexDirection: "column", zIndex: 60 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          borderBottom: "1px solid var(--forge-divider)",
        }}
      >
        <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 18, cursor: "pointer", padding: 6, marginLeft: -6 }}>
          ✕
        </button>
        <div
          style={{
            flex: 1,
            fontFamily: "var(--font-title)",
            fontWeight: 700,
            fontSize: "var(--text-panel-title)",
            color: "var(--forge-text)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-title)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
        {right || null}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18 }}>{children}</div>
      {footer ? (
        <div style={{ borderTop: "1px solid var(--forge-divider)", padding: "12px 18px 16px", backgroundColor: "var(--forge-bg)" }}>{footer}</div>
      ) : null}
    </div>
  );
}
