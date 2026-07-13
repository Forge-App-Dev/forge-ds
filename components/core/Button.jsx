import React from "react";
import { onColor } from "../shared/color.js";

export function Button({
  title,
  onClick,
  color = "var(--forge-accent)",
  disabled = false,
  small = false,
  style,
  resolvedColor, // deprecated (OP-006): onColor() now resolves tokens itself; kept for back-compat
}) {
  const [pressed, setPressed] = React.useState(false);
  const textColor = onColor(resolvedColor || color);
  return (
    <button
      className="forge-focusable"
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        height: small ? "var(--forge-size-control-sm)" : "var(--forge-size-control-lg)",
        borderRadius: "var(--forge-radius-button)",
        border: "none",
        cursor: disabled ? "default" : "pointer",
        paddingInline: small ? 13 : 18,
        backgroundColor: color,
        color: textColor,
        fontFamily: "var(--forge-font-body)",
        fontWeight: 800,
        fontSize: small ? 12.5 : 15,
        opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
        transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
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
