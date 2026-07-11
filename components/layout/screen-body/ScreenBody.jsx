import React from "react";

// ScreenBody — body of a screen INSIDE a module; the module shell (AppHeader
// + ModuleTabBar) already owns the safe area, so this just handles scroll +
// screen padding + max-width centering.
export function ScreenBody({ children, scroll = true, style }) {
  const inner = (
    <div style={{ padding: "8px var(--space-screen-h) 24px", maxWidth: "var(--app-max-width)", margin: "0 auto", boxSizing: "border-box", ...style }}>
      {children}
    </div>
  );
  return scroll ? <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>{inner}</div> : inner;
}
