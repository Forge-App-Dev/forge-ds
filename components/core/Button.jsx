import React from "react";
import { onColor } from "../shared/color.js";

export function Button({
  title,
  onClick,
  color = "var(--forge-accent)",
  disabled = false,
  small = false,
  style,
  resolvedColor, // pass a literal hex if you need exact onColor() contrast; else white text is used
}) {
  const [pressed, setPressed] = React.useState(false);
  const textColor = resolvedColor ? onColor(resolvedColor) : "var(--forge-on-accent)";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        height: small ? 36 : 46,
        borderRadius: small ? 9 : "var(--radius-button)",
        border: "none",
        cursor: disabled ? "default" : "pointer",
        paddingInline: small ? 13 : 18,
        backgroundColor: color,
        color: textColor,
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: small ? 12.5 : 15,
        opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
        transition: "opacity 0.1s ease",
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
