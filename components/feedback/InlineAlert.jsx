import React from "react";
import { Icon } from "../icons/Icon";

// InlineAlert — the banner treatment used for program reminders / warnings
// (e.g. the amber "Lembrete do programa" banner in Treino). Never a toast —
// this design system has no toast pattern; persistent context-relevant
// notices live inline, in the flow of the screen.
//
// Fill/border are derived from the semantic accent via color-mix over the
// current surface, so the component adapts to light theme automatically
// (OP-011) instead of relying on dark-only hex.
const KIND = {
  info: { accent: "var(--forge-macro-fat)", icon: "info", role: "status" },
  success: { accent: "var(--forge-success)", icon: "check", role: "status" },
  warning: { accent: "var(--forge-warning)", icon: "warn", role: "status" },
  danger: { accent: "var(--forge-danger)", icon: "warn", role: "alert" },
};

export function InlineAlert({ kind = "warning", title, children }) {
  const s = KIND[kind] || KIND.warning;
  const bg = `color-mix(in srgb, ${s.accent} 12%, var(--forge-surface))`;
  const border = `color-mix(in srgb, ${s.accent} 40%, var(--forge-border))`;
  return (
    <div
      role={s.role}
      style={{
        display: "flex",
        gap: "var(--forge-space-5)",
        alignItems: "flex-start",
        padding: "var(--forge-space-8)",
        borderRadius: "var(--forge-radius-card)",
        border: `var(--forge-border-w) solid ${border}`,
        backgroundColor: bg,
      }}
    >
      <Icon name={s.icon} color={s.accent} size={16} />
      <div
        style={{
          flex: 1,
          fontSize: "var(--forge-text-body-sm)",
          color: "var(--forge-text)",
          lineHeight: "var(--forge-lh-body)",
          fontFamily: "var(--forge-font-body)",
        }}
      >
        {title ? <span style={{ color: s.accent, fontWeight: 700 }}>{title} </span> : null}
        {children}
      </div>
    </div>
  );
}
