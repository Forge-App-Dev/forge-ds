import React from "react";

// Spinner — small inline loading indicator (distinct from the full-screen
// LoadingScreen). Just a spinning Ring arc at icon scale, for inline use
// inside a button, row, or section while content loads.
export function Spinner({ size = 20, stroke, color = "var(--forge-accent)" }) {
  const sw = stroke || Math.max(2, size * 0.14);
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ animation: "forge-spinner-spin 0.8s linear infinite" }}>
      <style>{`
        @keyframes forge-spinner-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { svg[style*="forge-spinner-spin"] { animation: none; } }
      `}</style>
      <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={sw} fill="none" strokeDasharray={circ} strokeDashoffset={circ * 0.7} strokeLinecap="round" opacity={0.9} />
    </svg>
  );
}
