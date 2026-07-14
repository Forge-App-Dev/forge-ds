import React from "react";
import { Icon } from "../icons/Icon";

// EmptyState — reframed-positive empty/rest content block (never just
// blank). Componentized version of the pattern seen for rest days and
// "no items yet" lists. Pass `action` (e.g. a <Button small />) to offer the
// natural next step ("criar o primeiro X") — an empty state without a way
// forward is a dead end (OP-127).
export const EmptyState = React.forwardRef(function EmptyState({ icon = "moon", title, subtitle, action, className, style }, ref) {
  return (
    <div ref={ref} className={className} style={{ display: "flex", alignItems: "center", gap: "var(--forge-space-6)", backgroundColor: "var(--forge-surface)", border: "var(--forge-border-w) solid var(--forge-border)", borderRadius: "var(--forge-radius-card)", padding: "var(--forge-space-8)", ...style }}>
      <div style={{ width: 34, height: 34, borderRadius: "var(--forge-radius-chip)", backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} color="var(--forge-text-faint)" size={16} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "var(--forge-text-faint)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 15 }}>{title}</div>
        {subtitle ? <div style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", marginTop: 3, lineHeight: "var(--forge-lh-chip)" }}>{subtitle}</div> : null}
      </div>
      {action || null}
    </div>
  );
});
