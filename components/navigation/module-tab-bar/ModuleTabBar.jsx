import React from "react";
import { Icon } from "../../icons/Icon";

// Module bottom tab bar — controlled by index; active tab tinted with the
// module's accent color, inactive tabs in textDim.
export function ModuleTabBar({ tabs, active, onChange, accent = "var(--forge-accent)" }) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        backgroundColor: "var(--forge-panel)",
        borderTop: "var(--forge-border-w) solid var(--forge-divider)",
        paddingTop: 8,
        paddingBottom: "max(8px, env(safe-area-inset-bottom))",
        paddingInline: 4,
      }}
    >
      {tabs.map((t) => {
        const on = t.id === active;
        const color = on ? accent : "var(--forge-text-dim)";
        return (
          <button
            key={t.id}
            className="forge-focusable"
            role="tab"
            aria-selected={on}
            aria-label={t.label}
            onClick={() => onChange && onChange(t.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              minHeight: 44,
              paddingBlock: 2,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Icon name={t.icon} color={color} size={22} />
            <span style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 11, color }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
