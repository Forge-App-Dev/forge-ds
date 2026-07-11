import React from "react";
import { onColor } from "../shared/color.js";

export function Pill({ title, onClick, active = false, color = "#EF4444", style }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: 40,
        borderRadius: "var(--radius-pill)",
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: active ? color : "var(--forge-border-input)",
        backgroundColor: active ? color : "transparent",
        color: active ? onColor(color) : "var(--forge-text-muted)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "var(--text-chip)",
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
