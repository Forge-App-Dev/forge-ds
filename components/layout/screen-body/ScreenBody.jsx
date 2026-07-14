import React from "react";

// ScreenBody — body of a screen INSIDE a module; the module shell (AppHeader
// + ModuleTabBar) already owns the safe area, so this just handles scroll +
// screen padding + max-width centering.
//
// Pass `footer` for an optional pinned action bar at the bottom of the screen
// (OP-114): the body scrolls, the footer stays put with a hairline top border
// and safe-area-aware bottom padding (matches the FullScreen footer pattern).
export const ScreenBody = React.forwardRef(function ScreenBody({ children, footer, scroll = true, className, style }, ref) {
  const inner = (
    <div ref={ref} className={className} style={{ padding: "8px var(--forge-space-screen-h) 24px", maxWidth: "var(--forge-app-max-width)", margin: "0 auto", boxSizing: "border-box", ...style }}>
      {children}
    </div>
  );
  const body = scroll ? <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>{inner}</div> : inner;

  if (!footer) return body;

  return (
    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
      {body}
      <div
        style={{
          borderTop: "var(--forge-border-w) solid var(--forge-divider)",
          padding: "var(--forge-space-12) var(--forge-space-screen-h)",
          paddingBottom: "max(var(--forge-space-16), env(safe-area-inset-bottom))",
          backgroundColor: "var(--forge-bg)",
        }}
      >
        <div style={{ maxWidth: "var(--forge-app-max-width)", margin: "0 auto", boxSizing: "border-box" }}>{footer}</div>
      </div>
    </div>
  );
});
