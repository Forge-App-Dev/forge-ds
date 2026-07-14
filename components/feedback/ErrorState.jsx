import React from "react";
import { Icon } from "../icons/Icon";
import { Button } from "../core/Button.jsx";
import { content } from "../shared/content.js";

// ErrorState — sibling of EmptyState for when something failed to load. Warn
// glyph + no-blame message + a retry action (an error state without a way
// forward is a dead end — OP-041/066). Copy should follow the brand voice:
// "Não conseguimos carregar" over "Erro 500". `onRetry` renders the retry
// button; `retryLabel` customizes it. Two layouts: inline `compact` (row, like
// EmptyState) and full (centered block) for whole-screen failures.
export const ErrorState = React.forwardRef(function ErrorState({
  title = content.errorState.title,
  subtitle = content.errorState.subtitle,
  onRetry,
  retryLabel = content.errorState.retryLabel,
  icon = "warn",
  compact = false,
  className,
  style,
}, ref) {
  if (compact) {
    return (
      <div ref={ref} className={className} role="alert" style={{ display: "flex", alignItems: "center", gap: "var(--forge-space-6)", backgroundColor: "var(--forge-surface)", border: "var(--forge-border-w) solid var(--forge-border)", borderRadius: "var(--forge-radius-card)", padding: "var(--forge-space-8)", ...style }}>
        <div style={{ width: 34, height: 34, borderRadius: "var(--forge-radius-chip)", backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={icon} color="var(--forge-danger)" size={16} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 15 }}>{title}</div>
          {subtitle ? <div style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", marginTop: 3, lineHeight: "var(--forge-lh-chip)" }}>{subtitle}</div> : null}
        </div>
        {onRetry ? <Button variant="secondary" size="sm" icon="refresh" title={retryLabel} onClick={onRetry} /> : null}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} role="alert" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--forge-space-6)", padding: "var(--forge-space-16) var(--forge-space-8)", ...style }}>
      <div style={{ width: 56, height: 56, borderRadius: "var(--forge-radius-pill)", backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name={icon} color="var(--forge-danger)" size={26} />
      </div>
      <div>
        <div style={{ color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 17 }}>{title}</div>
        {subtitle ? <div style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body)", marginTop: 5, lineHeight: "var(--forge-lh-body)", maxWidth: 280 }}>{subtitle}</div> : null}
      </div>
      {onRetry ? <Button variant="secondary" size="md" icon="refresh" title={retryLabel} onClick={onRetry} /> : null}
    </div>
  );
});
