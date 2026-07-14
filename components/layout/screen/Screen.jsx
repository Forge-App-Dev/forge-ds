import React from "react";

// Screen — isolated screen with its own safe-area padding, used OUTSIDE the
// module shell (e.g. boot/login screens that aren't wrapped by ModuleShell).
// Scrollable by default; centers content at maxWidth 480.
export function Screen({ children, scroll = true, style }) {
  const Wrap = scroll ? "div" : React.Fragment;
  const wrapProps = scroll
    ? { style: { flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" } }
    : {};
  // dvh is the correct dynamic-viewport unit; fall back to vh on browsers that
  // don't support it, so the screen still fills the viewport (OP-113).
  const dvhSupported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("min-height", "100dvh");
  return (
    <div
      style={{
        minHeight: dvhSupported ? "100dvh" : "100vh",
        backgroundColor: "var(--forge-bg)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <Wrap {...wrapProps}>
        <div style={{ maxWidth: "var(--forge-app-max-width)", margin: "0 auto", width: "100%", boxSizing: "border-box", ...style }}>{children}</div>
      </Wrap>
    </div>
  );
}
