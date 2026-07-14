import React from "react";

// Slider — accessible single-value range (e.g. peso alvo, intensidade, volume).
// Exposes role="slider" + aria-valuemin/max/now (+ aria-valuetext with the unit).
// Keyboard: Left/Down decrement, Right/Up increment by `step`; PageUp/PageDown by
// 10×; Home/End jump to min/max. Pointer: click or drag anywhere on the track.
// Visual: a track, an accent (or module `color`) fill, and a thumb. Respects
// min/max/step; `unit` is appended to the shown value and to aria-valuetext.
export const Slider = React.forwardRef(function Slider({ value = 0, onChange, min = 0, max = 100, step = 1, unit = "", label, color = "var(--forge-accent)", disabled = false, className, style }, ref) {
  const rid = React.useId ? React.useId() : "forge-slider";
  const trackRef = React.useRef(null);
  const clamp = (v) => Math.min(max, Math.max(min, v));
  const snap = (v) => {
    const stepped = Math.round((v - min) / step) * step + min;
    return clamp(Number(stepped.toFixed(6)));
  };
  const set = (v) => { const c = snap(v); if (onChange && c !== value) onChange(c); };
  const pct = max > min ? ((clamp(value) - min) / (max - min)) * 100 : 0;

  const onKeyDown = (e) => {
    if (disabled) return;
    let v = null;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") v = value + step;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") v = value - step;
    else if (e.key === "PageUp") v = value + step * 10;
    else if (e.key === "PageDown") v = value - step * 10;
    else if (e.key === "Home") v = min;
    else if (e.key === "End") v = max;
    if (v != null) { e.preventDefault(); set(v); }
  };

  const fromClientX = (clientX) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width) return;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    set(min + ratio * (max - min));
  };

  const onPointerDown = (e) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
    trackRef.current && trackRef.current.focus();
    fromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (disabled || e.buttons !== 1) return;
    fromClientX(e.clientX);
  };

  return (
    <div ref={ref} className={className} style={{ ...style }}>
      {label ? (
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <span id={`${rid}-label`} style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-label)", color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: "var(--forge-tracking-label)" }}>
            {label}
          </span>
          <span aria-hidden="true" style={{ fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: 18, color: "var(--forge-text)", fontVariantNumeric: "tabular-nums" }}>
            {value}{unit ? <span style={{ fontSize: 12, color: "var(--forge-text-dim)" }}>{unit}</span> : null}
          </span>
        </div>
      ) : null}
      <div
        ref={trackRef}
        className="forge-focusable"
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={unit ? `${value}${unit}` : undefined}
        aria-labelledby={label ? `${rid}-label` : undefined}
        aria-disabled={disabled || undefined}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        style={{
          position: "relative",
          height: 24,
          display: "flex",
          alignItems: "center",
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
          touchAction: "none",
        }}
      >
        <div style={{ position: "absolute", left: 0, right: 0, height: 6, borderRadius: "var(--forge-radius-pill)", backgroundColor: "var(--forge-surface-raised)", border: "var(--forge-border-w) solid var(--forge-border-input)", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", left: 0, width: `${pct}%`, height: 6, borderRadius: "var(--forge-radius-pill)", backgroundColor: color }} />
        <div style={{ position: "absolute", left: `${pct}%`, transform: "translateX(-50%)", width: 20, height: 20, borderRadius: "var(--forge-radius-pill)", backgroundColor: color, border: "var(--forge-border-w-strong) solid var(--forge-on-accent)", boxSizing: "border-box" }} />
      </div>
    </div>
  );
});
