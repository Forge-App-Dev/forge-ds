import React from "react";
import { useDialogA11y } from "../shared/useDialogA11y.js";

// VideoModal — full-bleed video overlay for an exercise demo. Wraps a video
// element (or any player) in a heavy scrim with a close button; tap outside or
// the ✕ closes it. On native this wraps react-native-youtube-iframe (raw
// WebView iframes fail on Android — see readme "known pitfalls"). Accessible
// dialog: role + aria-modal, Escape, focus trap, scroll lock.
export function VideoModal({ visible, onClose, title, children }) {
  const ref = useDialogA11y(visible, onClose);
  const rid = React.useId ? React.useId() : "forge-video";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, backgroundColor: "var(--forge-scrim-heavy)", display: "flex", flexDirection: "column", zIndex: "var(--forge-z-video)" }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", paddingTop: "max(14px, env(safe-area-inset-top))" }}>
          <span id={titleId} style={{ color: "var(--forge-text)", fontFamily: "var(--forge-font-title)", fontSize: 18, textTransform: "uppercase", letterSpacing: "var(--forge-tracking-title)" }}>{title}</span>
          <button
            className="forge-focusable forge-tap-min"
            onClick={onClose}
            aria-label="Fechar"
            style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 20, cursor: "pointer" }}
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 18px 18px" }}>
          <div style={{ width: "100%", maxWidth: 480, aspectRatio: "16 / 9", backgroundColor: "var(--forge-scrim-heavy)", borderRadius: "var(--forge-radius-video)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
