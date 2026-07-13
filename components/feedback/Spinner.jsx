import React from "react";

// Spinner — small inline loading indicator (distinct from the full-screen
// LoadingScreen). A spinning Ring arc at icon scale, for inline use inside a
// button, row, or section while content loads. Uses the global .forge-anim-spin
// class (tokens/motion.css) so reduced-motion is honored globally — the old
// inline-<style> attribute-selector approach did not reliably match React's
// serialized style and could keep spinning under reduced-motion (P-11).
export function Spinner({ size = 20, stroke, color = "var(--forge-accent)", label = "Carregando" }) {
  const sw = stroke || Math.max(2, size * 0.14);
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="forge-anim-spin"
      style={{ color }}
      role="status"
      aria-label={label}
    >
      <circle cx={size / 2} cy={size / 2} r={r} style={{ stroke: "currentColor" }} strokeWidth={sw} fill="none" strokeDasharray={circ} strokeDashoffset={circ * 0.7} strokeLinecap="round" opacity={0.9} />
    </svg>
  );
}
