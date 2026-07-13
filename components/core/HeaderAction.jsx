import React from "react";

// Discreet outlined action for a full-screen header (e.g. "Replicar").
export function HeaderAction({ title, onClick }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      className="forge-focusable"
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        minHeight: "var(--forge-tap-target-min)",
        border: "var(--forge-border-w) solid var(--forge-border)",
        borderRadius: "var(--forge-radius-chip)",
        paddingBlock: 7,
        paddingInline: 11,
        backgroundColor: "transparent",
        color: "var(--forge-text-muted)",
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: 12.5,
        cursor: "pointer",
        opacity: pressed ? "var(--forge-opacity-press)" : 1,
      }}
    >
      {title}
    </button>
  );
}
