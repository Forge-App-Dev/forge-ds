import React from "react";

// Screen — isolated screen with its own safe-area padding, used OUTSIDE the
// module shell (e.g. boot/login screens that aren't wrapped by ModuleShell).
// Scrollable by default; centers content at maxWidth 480.
export function Screen({ children, scroll = true, style }) {
  const Wrap = scroll ? "div" : React.Fragment;
  const wrapProps = scroll
    ? { style: { flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" } }
    : {};
  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--forge-bg)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <Wrap {...wrapProps}>
        <div style={{ maxWidth: "var(--app-max-width)", margin: "0 auto", width: "100%", boxSizing: "border-box", ...style }}>{children}</div>
      </Wrap>
    </div>
  );
}
