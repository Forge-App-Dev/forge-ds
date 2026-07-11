import React from "react";

// Discreet outlined action for a full-screen header (e.g. "Replicar").
export function HeaderAction({ title, onClick }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        border: "1px solid var(--forge-border)",
        borderRadius: 8,
        paddingBlock: 7,
        paddingInline: 11,
        backgroundColor: "transparent",
        color: "#b0b0b8",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 12.5,
        cursor: "pointer",
        opacity: pressed ? 0.8 : 1,
      }}
    >
      {title}
    </button>
  );
}
