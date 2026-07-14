import React from "react";
import { Icon } from "../icons/Icon";

// CoachNote — the coach's voice as a component (OP-059). The system's voice
// guideline (warm, second-person "você", encouraging, never clinical — see
// docs/content-guide.md) turned into a reusable block: a small tinted icon plus
// a contextual encouraging line. A PRODUCT component because it embodies the
// brand's coach persona.
//
// It is deliberately NOT an InlineAlert: this is not a status, warning or error
// (no role="alert"/"status", no live region) — it's ambient encouragement in
// the flow of the screen. Keep the copy on-voice: sentence case, "você", no
// emoji (the Feather icon is the only iconography).
export const CoachNote = React.forwardRef(function CoachNote({ children, icon = "flame", accent, className, style }, ref) {
  const tint = accent || "var(--forge-accent)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--forge-space-12)",
        padding: "var(--forge-space-12) var(--forge-space-16)",
        borderRadius: "var(--forge-radius-card)",
        backgroundColor: `color-mix(in srgb, ${tint} 10%, var(--forge-surface))`,
        border: `var(--forge-border-w) solid color-mix(in srgb, ${tint} 26%, var(--forge-border))`,
        ...style,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          flexShrink: 0,
          borderRadius: "var(--forge-radius-pill)",
          backgroundColor: `color-mix(in srgb, ${tint} 18%, var(--forge-surface))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={icon} color={tint} size={16} />
      </div>
      <p
        style={{
          margin: 0,
          flex: 1,
          minWidth: 0,
          fontFamily: "var(--forge-font-body)",
          fontSize: "var(--forge-text-body-sm)",
          lineHeight: "var(--forge-lh-body)",
          color: "var(--forge-text)",
          fontWeight: 500,
        }}
      >
        {children}
      </p>
    </div>
  );
});
