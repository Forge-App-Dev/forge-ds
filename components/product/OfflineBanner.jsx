import React from "react";
import { Icon } from "../icons/Icon";
import { content } from "../shared/content.js";

// OfflineBanner — persistent inline banner for the offline/sync state (OP-060).
// The system has no toast/snackbar (ADR-0002): a system state like being
// offline must NOT flash and disappear — it stays in the flow of the screen
// until the condition clears. So this is a persistent banner, not a transient
// notice.
//
// role="status" (a polite live region, not "alert") announces the state change
// without hijacking focus. Default copy is on-voice (pt-BR, "você", reassuring —
// changes aren't lost). An optional action ("Tentar de novo") lets the screen
// offer a manual retry. A PRODUCT component: it carries the app's offline copy.
export function OfflineBanner({
  message = content.offlineBanner.message,
  actionLabel,
  onAction,
  children,
  style,
}) {
  const accent = "var(--forge-warning)";
  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--forge-space-5)",
        padding: "var(--forge-space-6) var(--forge-space-8)",
        borderRadius: "var(--forge-radius-card)",
        border: `var(--forge-border-w) solid color-mix(in srgb, ${accent} 40%, var(--forge-border))`,
        backgroundColor: `color-mix(in srgb, ${accent} 12%, var(--forge-surface))`,
        ...style,
      }}
    >
      <Icon name="warn" color={accent} size={16} />
      <span
        style={{
          flex: 1,
          minWidth: 0,
          fontFamily: "var(--forge-font-body)",
          fontSize: "var(--forge-text-body-sm)",
          lineHeight: "var(--forge-lh-body)",
          color: "var(--forge-text)",
        }}
      >
        {children || message}
      </span>
      {actionLabel && onAction ? (
        <button
          className="forge-focusable"
          onClick={onAction}
          style={{
            flexShrink: 0,
            border: "none",
            background: "none",
            padding: "var(--forge-space-2) var(--forge-space-3)",
            borderRadius: "var(--forge-radius-chip)",
            cursor: "pointer",
            fontFamily: "var(--forge-font-body)",
            fontSize: "var(--forge-text-body-sm)",
            fontWeight: 700,
            color: accent,
          }}
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
