import React from "react";
import { Ring } from "../feedback/ring/Ring.jsx";
import { Icon } from "../icons/Icon";
import { content } from "../shared/content.js";

// RestTimer — rest countdown between sets (OP-055). A PRODUCT component (it's a
// training concept), composing the signature Ring: the arc drains from full to
// empty as the rest runs down, with the remaining time (mm:ss, Barlow tabular)
// in the center. The piece a generic DS never has.
//
// Self-running by default: it counts down from `duration` seconds once mounted
// and `running`, calling `onComplete` at zero. The screen can pause/resume,
// add 15s, or skip. `accent` themes the arc (module color / sibling app).
function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = String(Math.max(0, s) % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

export const RestTimer = React.forwardRef(function RestTimer({ duration = 90, running: initialRunning = true, onComplete, onSkip, accent, size = 132, className, style }, ref) {
  const [left, setLeft] = React.useState(duration);
  const [running, setRunning] = React.useState(initialRunning);
  const done = left <= 0;

  // onComplete num ref: o intervalo não deve reiniciar quando o pai passa um
  // callback inline novo a cada render (T-23) — senão o countdown treme/reseta.
  const onCompleteRef = React.useRef(onComplete);
  React.useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  React.useEffect(() => {
    if (!running || done || typeof window === "undefined") return;
    const id = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) { window.clearInterval(id); const cb = onCompleteRef.current; if (cb) cb(); return 0; }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, done]);

  const tint = done ? "var(--forge-success)" : (accent || "var(--forge-accent)");
  const progress = duration > 0 ? left / duration : 0;

  const ctrl = (label, glyph, onClick) => (
    <button
      className="forge-focusable"
      onClick={onClick}
      aria-label={label}
      style={{ width: "var(--forge-size-control-md)", height: "var(--forge-size-control-md)", borderRadius: "var(--forge-radius-pill)", border: "var(--forge-border-w) solid var(--forge-border-input)", backgroundColor: "var(--forge-surface-raised)", color: "var(--forge-text)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
    >
      <Icon name={glyph} color="currentColor" size={20} />
    </button>
  );

  return (
    <div ref={ref} className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--forge-space-16)", ...style }}>
      <Ring size={size} stroke={10} progress={progress} color={tint} label={content.restTimer.ringLabel(fmt(left))}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: "var(--forge-text-stat)", lineHeight: 1, color: "var(--forge-text)", fontVariantNumeric: "tabular-nums", letterSpacing: "var(--forge-tracking-title)" }}>
            {fmt(left)}
          </span>
          <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-label)", letterSpacing: "var(--forge-tracking-label)", textTransform: "uppercase", color: "var(--forge-text-faint)", fontWeight: 700, marginTop: "var(--forge-space-4)" }}>
            {done ? content.restTimer.statusDone : content.restTimer.statusResting}
          </span>
        </div>
      </Ring>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--forge-space-12)" }}>
        {ctrl(content.restTimer.addTime, "plus", () => setLeft((v) => v + 15))}
        {done
          ? ctrl(content.restTimer.restart, "refresh", () => { setLeft(duration); setRunning(true); })
          : ctrl(running ? content.restTimer.pause : content.restTimer.resume, running ? "pause" : "play", () => setRunning((r) => !r))}
        {ctrl(content.restTimer.skip, "x", () => { setRunning(false); setLeft(0); if (onSkip) onSkip(); })}
      </div>
    </div>
  );
});
