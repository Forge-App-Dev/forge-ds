import React from "react";

// EmptyState — reframed-positive empty/rest content block (never just
// blank). Componentized version of the pattern seen for rest days and
// "no items yet" lists.
export function EmptyState({ icon = "moon", title, subtitle }) {
  const { Icon } = window.ForgeDesignSystem_7731a5 || {};
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: 14, padding: 18 }}>
      <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {Icon ? <Icon name={icon} color="var(--forge-text-faint)" size={16} /> : null}
      </div>
      <div>
        <div style={{ color: "var(--forge-text-faint)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15 }}>{title}</div>
        {subtitle ? <div style={{ color: "var(--forge-text-dim)", fontFamily: "var(--font-body)", fontSize: 12, marginTop: 3, lineHeight: "16px" }}>{subtitle}</div> : null}
      </div>
    </div>
  );
}
