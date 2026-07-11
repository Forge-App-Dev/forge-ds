import React from "react";

// Ring — signature progress element: background track + accent arc.
// Pass `indeterminate` for a continuously-spinning loading variant (no
// fixed progress value); pass `segments` (array of {value, color}) for a
// multi-segment ring that shows several contributors (e.g. macros) at once
// on a single track, each segment stacked after the previous.
export function Ring({ size = 120, stroke = 10, progress = 0, color = "#EF4444", track, children, indeterminate = false, segments }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;

  if (indeterminate) {
    return (
      <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <style>{`
          @keyframes forge-ring-spin { to { transform: rotate(360deg); } }
          .forge-ring-indeterminate { animation: forge-ring-spin 1s linear infinite; transform-origin: center; }
          @media (prefers-reduced-motion: reduce) { .forge-ring-indeterminate { animation: none; } }
        `}</style>
        <svg width={size} height={size} style={{ position: "absolute" }}>
          <circle cx={size / 2} cy={size / 2} r={r} stroke={track || "var(--forge-surface-raised)"} strokeWidth={stroke} fill="none" />
        </svg>
        <svg width={size} height={size} className="forge-ring-indeterminate" style={{ position: "absolute" }}>
          <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeDasharray={circ} strokeDashoffset={circ * 0.72} strokeLinecap="round" />
        </svg>
        {children}
      </div>
    );
  }

  if (segments && segments.length) {
    let acc = 0;
    return (
      <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={size} height={size} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} stroke={track || "var(--forge-surface-raised)"} strokeWidth={stroke} fill="none" />
          {segments.map((seg, i) => {
            const clamped = Math.max(0, Math.min(1, seg.value));
            const dash = circ * clamped;
            const gap = circ - dash;
            const rotation = acc * 360;
            acc += clamped;
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke={seg.color}
                strokeWidth={stroke}
                fill="none"
                strokeDasharray={`${dash} ${gap}`}
                strokeLinecap="butt"
                style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center", transition: "stroke-dasharray 0.4s ease" }}
              />
            );
          })}
        </svg>
        {children}
      </div>
    );
  }

  const clamped = Math.max(0, Math.min(1, progress));
  const offset = circ * (1 - clamped);
  return (
    <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size} height={size} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke={track || "var(--forge-surface-raised)"} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.4s ease" }}
        />
      </svg>
      {children}
    </div>
  );
}

