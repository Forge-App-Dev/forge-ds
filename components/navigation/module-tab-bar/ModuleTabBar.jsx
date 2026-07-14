import React from "react";
import { Icon } from "../../icons/Icon";
import { content } from "../../shared/content.js";

// Module bottom navigation bar — app-level navigation BETWEEN modules. É
// navegação, não um tablist (T-30 / ADR): usa role="navigation" + aria-current
// ="page" no item ativo (não role="tab"/aria-selected, que exigiria roving
// tabindex, setas e um tabpanel — ver Tabs para o padrão de abas in-screen).
// O ativo tem um INDICADOR DE FORMA (barra de accent no topo) + peso maior,
// além da cor — para não depender só de cor (WCAG 1.4.1). Tinta = accent do
// módulo (ou o accent do DS por padrão).
export const ModuleTabBar = React.forwardRef(function ModuleTabBar({ tabs, active, onChange, accent = "var(--forge-accent)", ariaLabel = content.moduleTabBar.nav, className, style }, ref) {
  return (
    <nav
      ref={ref}
      role="navigation"
      aria-label={ariaLabel}
      className={className}
      style={{
        display: "flex",
        backgroundColor: "var(--forge-panel)",
        borderTop: "var(--forge-border-w) solid var(--forge-divider)",
        paddingBottom: "max(8px, env(safe-area-inset-bottom))",
        paddingInline: 4,
        ...style,
      }}
    >
      {tabs.map((t) => {
        const on = t.id === active;
        const color = on ? accent : "var(--forge-text-dim)";
        return (
          <button
            key={t.id}
            className="forge-focusable"
            aria-current={on ? "page" : undefined}
            aria-label={t.label}
            onClick={() => onChange && onChange(t.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              minHeight: 48,
              paddingBottom: 6,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              aria-hidden="true"
              style={{ height: 3, width: 22, borderRadius: "0 0 3px 3px", backgroundColor: on ? accent : "transparent", marginBottom: 5 }}
            />
            <Icon name={t.icon} color={color} size={22} />
            <span style={{ fontFamily: "var(--forge-font-body)", fontWeight: on ? 700 : 600, fontSize: 11, color }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
});
