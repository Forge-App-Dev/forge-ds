import React from "react";

// VideoModal — full-bleed video overlay for an exercise demo. Wraps a video
// element (or any player) in a black scrim with a close button; tap outside
// or the ✕ closes it. On native this wraps react-native-youtube-iframe
// (raw WebView iframes fail on Android — see readme "known pitfalls").
export function VideoModal({ visible, onClose, title, children }) {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.94)", display: "flex", flexDirection: "column", zIndex: 70 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px" }}>
        <span style={{ color: "var(--forge-text)", fontFamily: "var(--font-title)", fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5 }}>{title}</span>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 20, cursor: "pointer" }}>✕</button>
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 18px 18px" }}>
        <div style={{ width: "100%", maxWidth: 480, aspectRatio: "16 / 9", backgroundColor: "#000", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
