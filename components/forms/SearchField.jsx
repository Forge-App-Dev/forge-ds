import React from "react";
import { Icon } from "../icons/Icon";

// SearchField — text input with a leading search glyph and a clear (✕) button
// when non-empty. For food/exercise lookup. type="search", labelled for screen
// readers; the clear button has an aria-label. Focus ring on the wrapper.
export const SearchField = React.forwardRef(function SearchField({ value = "", onChange, placeholder = "Buscar", onSubmit, autoFocus = false, className, style }, ref) {
  const rid = React.useId ? React.useId() : "forge-search";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        height: 44, paddingInline: 12,
        borderRadius: "var(--forge-radius-input)",
        border: "var(--forge-border-w) solid var(--forge-border-input)",
        backgroundColor: "var(--forge-surface-raised)",
        ...style,
      }}
    >
      <Icon name="search" color="var(--forge-text-dim)" size={18} />
      <input
        id={rid}
        className="forge-focusable"
        type="search"
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        aria-label={placeholder}
        enterKeyHint="search"
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && onSubmit) onSubmit(value); }}
        style={{
          flex: 1, minWidth: 0, height: "100%",
          background: "none", border: "none",
          color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-input)",
        }}
      />
      {value ? (
        <button
          className="forge-focusable forge-tap-min"
          onClick={() => onChange && onChange("")}
          aria-label="Limpar busca"
          style={{ background: "none", border: "none", cursor: "pointer", marginRight: -10 }}
        >
          <Icon name="x" color="var(--forge-text-dim)" size={16} />
        </button>
      ) : null}
    </div>
  );
});
