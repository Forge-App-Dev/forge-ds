import React from "react";
import { onColor } from "../shared/color.js";

export function Pill({ title, onClick, active = false, color = "var(--forge-accent)", style }) {
  return (
    <button
      className="forge-focusable"
      onClick={onClick}
      style={{
        height: 40,
        borderRadius: "var(--forge-radius-pill)",
        borderWidth: "var(--forge-border-w-strong)",
        borderStyle: "solid",
        borderColor: active ? color : "var(--forge-border-input)",
        backgroundColor: active ? color : "transparent",
        color: active ? onColor(color) : "var(--forge-text-muted)",
        fontFamily: "var(--forge-font-body)",
        fontWeight: 700,
        fontSize: "var(--forge-text-chip)",
        paddingInline: 16,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {title}
    </button>
  );
}
