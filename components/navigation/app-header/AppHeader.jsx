import React from "react";
import { Icon } from "../../icons/Icon";

// Global app header — Forge mark + wordmark left; back-to-modules (grid) +
// logout icon buttons right. `markSrc` should point at assets/forge-mark.png.
export function AppHeader({ markSrc, inModule = false, onBackToModules, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 18px",
        borderBottom: "1px solid var(--forge-divider)",
        fontFamily: "var(--forge-font-body)",
      }}
    >
      <button
        onClick={inModule ? onBackToModules : undefined}
        disabled={!inModule}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          background: "none",
          border: "none",
          cursor: inModule ? "pointer" : "default",
          padding: 0,
        }}
      >
        {markSrc ? <img src={markSrc} alt="" style={{ width: 26, height: 26, objectFit: "contain" }} /> : null}
        <span
          style={{
            fontFamily: "var(--forge-font-title)",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "var(--forge-tracking-title)",
            textTransform: "uppercase",
            color: "var(--forge-text)",
          }}
        >
          <span style={{ color: "var(--forge-accent)" }}>F</span>orge
        </span>
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {inModule ? (
          <button onClick={onBackToModules} style={iconBtnStyle} aria-label="Voltar aos módulos">
            <Icon name="grid" color="var(--forge-text-muted)" size={20} />
          </button>
        ) : null}
        <button onClick={onLogout} style={iconBtnStyle} aria-label="Sair da conta">
          <Icon name="logout" color="var(--forge-text-faint)" size={19} />
        </button>
      </div>
    </div>
  );
}

const iconBtnStyle = { width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer" };
