import React from "react";

// InlineAlert — the banner treatment used for program reminders / warnings
// (e.g. the amber "Lembrete do programa" banner in Treino). Never a toast —
// this design system has no toast pattern; persistent context-relevant
// notices live inline, in the flow of the screen.
const KIND_STYLES = {
  info: { border: "#2a3a4a", bg: "#111a24", accent: "var(--forge-macro-fat)", icon: "info" },
  success: { border: "#1f3a2c", bg: "#0f1a14", accent: "var(--forge-success)", icon: "check" },
  warning: { border: "#3a2f1f", bg: "#1a1610", accent: "var(--forge-warning)", icon: "warn" },
  danger: { border: "#3a2320", bg: "#1a1210", accent: "var(--forge-danger)", icon: "warn" },
};

export function InlineAlert({ kind = "warning", title, children }) {
  const { Icon } = window.ForgeDesignSystem_7731a5 || {};
  const s = KIND_STYLES[kind] || KIND_STYLES.warning;
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: 18, borderRadius: 14, border: `1px solid ${s.border}`, backgroundColor: s.bg }}>
      {Icon ? <Icon name={s.icon} color={s.accent} size={18} /> : null}
      <div style={{ flex: 1, fontSize: 13, color: "#c9c4b6", lineHeight: "20px", fontFamily: "var(--font-body)" }}>
        {title ? <span style={{ color: s.accent, fontWeight: 700 }}>{title} </span> : null}
        {children}
      </div>
    </div>
  );
}
