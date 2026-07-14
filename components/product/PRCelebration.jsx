import React from "react";
import { Icon } from "../icons/Icon";
import { Button } from "../core/Button.jsx";

// PRCelebration — the personal-record moment (OP-054). This is a PRODUCT
// component: it knows the training domain (a "recorde") and carries brand copy,
// so it lives in components/product/, composing primitives (Icon, Button) — it
// is not a neutral primitive (OP-009).
//
// It is also the system's ONE sanctioned "emotional" motion: the trophy scales
// and fades in once via .forge-anim-celebrate (tokens/motion.css), which is
// disabled under prefers-reduced-motion in that same file. No other emotional
// motion is allowed anywhere in the system — this is the exception, formalized.
//
// `exercise` + `value`/`unit` name the record; `previous` optionally shows the
// mark it beat. role="status" + aria-live announces it to screen readers.
// `accent` themes the ring/trophy (sibling apps / module color).
export function PRCelebration({
  title = "Novo recorde!",
  exercise,
  value,
  unit,
  previous,
  onContinue,
  continueLabel = "Continuar",
  accent,
  style,
}) {
  const tint = accent || "var(--forge-accent)";
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "var(--forge-space-8)", padding: "var(--forge-space-16) var(--forge-space-10)", ...style }}
    >
      <div className="forge-anim-celebrate" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--forge-space-8)" }}>
        <div style={{ position: "relative", width: 96, height: 96, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "var(--forge-radius-pill)", backgroundColor: tint, opacity: 0.14 }} />
          <div style={{ position: "absolute", inset: 12, borderRadius: "var(--forge-radius-pill)", backgroundColor: tint, opacity: 0.22 }} />
          <Icon name="trophy" color={tint} size={40} />
        </div>
        <div style={{ fontFamily: "var(--forge-font-title)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "var(--forge-tracking-title)", fontSize: "var(--forge-text-panel-title)", lineHeight: "var(--forge-lh-panel-title)", color: tint }}>
          {title}
        </div>
      </div>

      {(exercise || value != null) ? (
        <div>
          {exercise ? <div style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body)", color: "var(--forge-text-dim)", marginBottom: "var(--forge-space-2)" }}>{exercise}</div> : null}
          {value != null ? (
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "var(--forge-space-2)" }}>
              <span style={{ fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: 34, lineHeight: 1, color: "var(--forge-text)", fontVariantNumeric: "tabular-nums", letterSpacing: "var(--forge-tracking-title)" }}>{value}</span>
              {unit ? <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-card-title)", color: "var(--forge-text-dim)", fontWeight: 600 }}>{unit}</span> : null}
            </div>
          ) : null}
          {previous ? <div style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", color: "var(--forge-text-faint)", marginTop: "var(--forge-space-3)" }}>{`anterior: ${previous}`}</div> : null}
        </div>
      ) : null}

      {onContinue ? <Button variant="primary" size="lg" color={accent} title={continueLabel} onClick={onContinue} /> : null}
    </div>
  );
}
