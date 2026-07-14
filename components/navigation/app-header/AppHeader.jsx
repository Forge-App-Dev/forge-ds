import React from "react";
import { Icon } from "../../icons/Icon";

// Global app header — brand mark + wordmark left; back-to-modules (grid) +
// logout icon buttons right. `brand={{ name, markSrc }}` sets the wordmark and
// mark image (default name "Forge") so sibling apps in the family swap only
// their brand (OP-120); `markSrc` is kept as a legacy shorthand. The brand is
// its own element (AppBrand). markSrc should point at assets/forge-mark.svg.
export const AppHeader = React.forwardRef(function AppHeader({ brand, markSrc, inModule = false, onBackToModules, onLogout, className, style }, ref) {
  const name = (brand && brand.name) || "Forge";
  const mark = (brand && brand.markSrc) || markSrc;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 18px",
        borderBottom: "1px solid var(--forge-divider)",
        fontFamily: "var(--forge-font-body)",
        ...style,
      }}
    >
      {inModule ? (
      <button
        className="forge-focusable"
        onClick={onBackToModules}
        aria-label="Voltar aos módulos"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <AppBrand name={name} markSrc={mark} />
      </button>
      ) : (
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <AppBrand name={name} markSrc={mark} />
      </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {inModule ? (
          <button className="forge-focusable" onClick={onBackToModules} style={iconBtnStyle} aria-label="Voltar aos módulos">
            <Icon name="grid" color="var(--forge-text-muted)" size={20} />
          </button>
        ) : null}
        <button className="forge-focusable" onClick={onLogout} style={iconBtnStyle} aria-label="Sair da conta">
          <Icon name="logout" color="var(--forge-text-faint)" size={19} />
        </button>
      </div>
    </div>
  );
});

function AppBrand({ name = "Forge", markSrc }) {
  const first = name.slice(0, 1);
  const rest = name.slice(1);
  return (
    <>
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
        <span style={{ color: "var(--forge-accent)" }}>{first}</span>{rest}
      </span>
    </>
  );
}

const iconBtnStyle = { width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer" };
