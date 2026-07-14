import React from "react";
import { content } from "../../shared/content.js";

// LoadingScreen — the signature boot/loading treatment: spinning Ring arc +
// pulsing brand mark + wordmark + status caption. markSrc should point at
// assets/forge-mark.png. Default caption comes from shared/content.js (i18n seam).
export function LoadingScreen({ markSrc, message = content.loadingScreen.message }) {
  return (
    <div role="status" aria-live="polite" style={{ minHeight: "100dvh", backgroundColor: "var(--forge-bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
      <div style={{ position: "relative", width: 72, height: 72 }}>
        <svg width="72" height="72" style={{ position: "absolute", inset: 0 }}>
          <circle cx="36" cy="36" r="31" fill="none" stroke="var(--forge-border)" strokeWidth="5" />
        </svg>
        <svg width="72" height="72" className="forge-anim-spin" style={{ position: "absolute", inset: 0 }}>
          <circle cx="36" cy="36" r="31" fill="none" stroke="var(--forge-accent)" strokeWidth="5" strokeLinecap="round" strokeDasharray="194.7" strokeDashoffset="140" />
        </svg>
        <div className="forge-anim-pulse" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {markSrc ? <img src={markSrc} alt="" style={{ width: 40, height: 40 }} /> : null}
        </div>
      </div>
      <div style={{ fontFamily: "var(--forge-font-title)", fontSize: 20, textTransform: "uppercase", color: "var(--forge-text)", letterSpacing: 0.5 }}>
        <span style={{ color: "var(--forge-accent)" }}>F</span>orge
      </div>
      <div style={{ color: "var(--forge-text-dimmer)", fontFamily: "var(--forge-font-body)", fontSize: 12 }}>{message}</div>
    </div>
  );
}
