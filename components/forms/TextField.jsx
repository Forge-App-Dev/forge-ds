import React from "react";

export function TextField({ label, value, onChange, placeholder, type = "text", multiline = false, style }) {
  return (
    <div style={{ marginBottom: 12, ...style }}>
      {label ? (
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "var(--text-label)",
            color: "var(--forge-text-faint)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-label)",
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
            borderRadius: "var(--radius-input)",
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "var(--forge-surface-raised)",
            color: "var(--forge-text)",
            padding: "10px 12px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-input)",
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
            borderRadius: "var(--radius-input)",
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "var(--forge-surface-raised)",
            color: "var(--forge-text)",
            paddingInline: 12,
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-input)",
            boxSizing: "border-box",
          }}
        />
      )}
    </div>
  );
}
