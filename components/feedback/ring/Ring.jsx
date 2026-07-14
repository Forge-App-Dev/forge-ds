import React from "react";

// Ring — signature progress element: background track + accent arc.
// Pass `indeterminate` for a continuously-spinning loading variant (no
// fixed progress value); pass `segments` (array of {value, color}) for a
// multi-segment ring that shows several contributors (e.g. macros) at once
// on a single track, each segment stacked after the previous.
//
// Color is applied via CSS (stroke in `style`), not as an SVG attribute, so
// design-system tokens like "var(--forge-accent)" resolve. The indeterminate
// spin uses the global .forge-anim-spin class (tokens/motion.css) instead of
// an injected <style>, so reduced-motion is honored in one place.
//
// `announce` (optional, OP-164): a message announced to screen readers via a
// polite live region ONLY when a determinate progress reaches 100% (e.g. "Série
// concluída"). Additive — with no `announce` prop nothing changes; it never
// affects the visual or the default aria-* behavior.
export const Ring = React.forwardRef(function Ring({ size = 120, stroke = 10, progress = 0, color = "var(--forge-accent)", track = "var(--forge-surface-raised)", children, indeterminate = false, segments, label, announce, className, style }, ref) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const wrap = { position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" };

  if (indeterminate) {
    return (
      <div ref={ref} className={className} style={{ ...wrap, ...style }} role="progressbar" aria-label={label || "Carregando"}>
        <svg width={size} height={size} style={{ position: "absolute" }}>
          <circle cx={size / 2} cy={size / 2} r={r} style={{ stroke: track }} strokeWidth={stroke} fill="none" />
        </svg>
        <svg width={size} height={size} className="forge-anim-spin" style={{ position: "absolute" }}>
          <circle cx={size / 2} cy={size / 2} r={r} style={{ stroke: color }} strokeWidth={stroke} fill="none" strokeDasharray={circ} strokeDashoffset={circ * 0.72} strokeLinecap="round" />
        </svg>
        {children}
      </div>
    );
  }

  if (segments && segments.length) {
    let acc = 0;
    return (
      <div ref={ref} className={className} style={{ ...wrap, ...style }} role="img" aria-label={label || "Progresso segmentado"}>
        <svg width={size} height={size} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} style={{ stroke: track }} strokeWidth={stroke} fill="none" />
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
                style={{ stroke: seg.color, transform: `rotate(${rotation}deg)`, transformOrigin: "center", transition: "stroke-dasharray var(--forge-duration-slow) var(--forge-ease-standard)" }}
                strokeWidth={stroke}
                fill="none"
                strokeDasharray={`${dash} ${gap}`}
                strokeLinecap="butt"
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
    <div ref={ref} className={className} style={{ ...wrap, ...style }} role="progressbar" aria-valuenow={Math.round(clamped * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <svg width={size} height={size} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} style={{ stroke: track }} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          style={{ stroke: color, transition: "stroke-dashoffset var(--forge-duration-slow) var(--forge-ease-standard)" }}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {children}
      {announce && clamped >= 1 ? (
        <span className="forge-sr-only" role="status" aria-live="polite">{announce}</span>
      ) : null}
    </div>
  );
});
