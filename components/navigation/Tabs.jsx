import React from "react";

// Tabs — in-screen tabs (OP-039), for switching a view within a screen (e.g.
// "Semana" / "Mês"). Different from ModuleTabBar, which is the app-level bottom
// navigation between modules. Controlled: pass `tabs` ({id,label}[]), the
// `active` id and `onChange`. The selected tab shows an accent underline.
//
// Keyboard follows the WAI-ARIA tabs pattern: Arrow Left/Right (and Home/End)
// move selection with automatic activation, using a roving tabindex. Render the
// panel content as `children`; it gets role="tabpanel" wired to the active tab.
export const Tabs = React.forwardRef(function Tabs({ tabs, active, onChange, accent = "var(--forge-accent)", idBase = "forge-tabs", children, className, style }, ref) {
  const refs = React.useRef([]);
  const idx = tabs.findIndex((t) => t.id === active);

  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next != null) {
      e.preventDefault();
      onChange && onChange(tabs[next].id);
      const el = refs.current[next];
      if (el) el.focus();
    }
  };

  return (
    <div ref={ref} className={className} style={style}>
      <div role="tablist" style={{ display: "flex", borderBottom: "var(--forge-border-w) solid var(--forge-divider)" }}>
        {tabs.map((t, i) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => (refs.current[i] = el)}
              className="forge-focusable"
              role="tab"
              id={`${idBase}-tab-${t.id}`}
              aria-selected={on}
              aria-controls={on && children != null ? `${idBase}-panel-${t.id}` : undefined}
              tabIndex={on ? 0 : -1}
              onClick={() => onChange && onChange(t.id)}
              onKeyDown={onKeyDown}
              style={{
                flex: 1,
                minHeight: 44,
                padding: "var(--forge-space-6) var(--forge-space-8)",
                background: "none",
                border: "none",
                borderBottom: `var(--forge-border-w-strong) solid ${on ? accent : "transparent"}`,
                marginBottom: "calc(-1 * var(--forge-border-w))",
                color: on ? "var(--forge-text)" : "var(--forge-text-dim)",
                fontFamily: "var(--forge-font-body)",
                fontWeight: 700,
                fontSize: "var(--forge-text-body-sm)",
                cursor: "pointer",
                transition: "color var(--forge-duration-fast) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      {children != null ? (
        <div
          role="tabpanel"
          id={`${idBase}-panel-${active}`}
          aria-labelledby={`${idBase}-tab-${active}`}
          tabIndex={0}
          style={{ paddingTop: "var(--forge-space-24)" }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
});
