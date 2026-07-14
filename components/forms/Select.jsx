import React from "react";
import { Icon } from "../icons/Icon";
import { Panel } from "../overlays/panel/Panel.jsx";
import { ListItem } from "./ListItem.jsx";

// Select — choose one option from a list. Instead of a floating dropdown
// (which the system avoids), the trigger opens a Panel of options — the
// canonical Forge choose-from-a-list pattern. Options: array of
// { value, label, subtitle? }. The trigger looks like a field; the current
// label (or placeholder) shows with a chevron. Fully keyboard/AT accessible via
// Panel's dialog semantics and ListItem rows.
export function Select({ value, options = [], onChange, label, placeholder = "Selecionar", title, disabled = false, style }) {
  const [open, setOpen] = React.useState(false);
  const rid = React.useId ? React.useId() : "forge-select";
  const current = options.find((o) => o.value === value);

  return (
    <div style={{ marginBottom: 12, ...style }}>
      {label ? (
        <label
          id={`${rid}-label`}
          style={{ display: "block", fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-label)", color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: "var(--forge-tracking-label)", marginBottom: 6 }}
        >
          {label}
        </label>
      ) : null}
      <button
        className="forge-focusable"
        onClick={() => !disabled && setOpen(true)}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-labelledby={label ? `${rid}-label` : undefined}
        style={{
          width: "100%", height: 44, paddingInline: 12,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
          borderRadius: "var(--forge-radius-input)",
          border: "var(--forge-border-w) solid var(--forge-border-input)",
          backgroundColor: "var(--forge-surface-raised)",
          color: current ? "var(--forge-text)" : "var(--forge-text-dim)",
          fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-input)",
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
        }}
      >
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{current ? current.label : placeholder}</span>
        <Icon name="chevron-down" color="var(--forge-text-dim)" size={18} />
      </button>

      <Panel visible={open} onClose={() => setOpen(false)} title={title || label || placeholder}>
        {options.map((o) => (
          <ListItem
            key={String(o.value)}
            title={o.label}
            subtitle={o.subtitle}
            selected={o.value === value}
            trailing={o.value === value ? <Icon name="check" color="var(--forge-accent)" size={18} /> : null}
            onClick={() => { onChange && onChange(o.value); setOpen(false); }}
          />
        ))}
      </Panel>
    </div>
  );
}
