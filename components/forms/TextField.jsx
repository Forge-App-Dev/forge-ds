import React from "react";

export function TextField({ label, value, onChange, placeholder, type = "text", multiline = false, style }) {
  return (
    <div style={{ marginBottom: 12, ...style }}>
      {label ? (
        <div
          style={{
            fontFamily: "var(--forge-font-body)",
            fontWeight: 700,
            fontSize: "var(--forge-text-label)",
            color: "var(--forge-text-faint)",
            textTransform: "uppercase",
            letterSpacing: "var(--forge-tracking-label)",
            marginBottom: 6,
          }}
        >
          {label}
        </div>
      ) : null}
      {multiline ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          style={{
            width: "100%",
            height: 84,
            borderRadius: "var(--forge-radius-input)",
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "var(--forge-surface-raised)",
            color: "var(--forge-text)",
            padding: "10px 12px",
            fontFamily: "var(--forge-font-body)",
            fontSize: "var(--forge-text-input)",
            resize: "none",
            boxSizing: "border-box",
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          style={{
            width: "100%",
            height: 44,
            borderRadius: "var(--forge-radius-input)",
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "var(--forge-surface-raised)",
            color: "var(--forge-text)",
            paddingInline: 12,
            fontFamily: "var(--forge-font-body)",
            fontSize: "var(--forge-text-input)",
            boxSizing: "border-box",
          }}
        />
      )}
    </div>
  );
}
