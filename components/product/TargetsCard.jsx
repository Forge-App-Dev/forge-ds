import React from "react";
import { content } from "../shared/content.js";

// TargetsCard — daily kcal + macro targets summary, with an edit affordance.
// Used atop the Nutrição "Hoje" screen and in the targets-setup flow.
//
// PRODUCT component (OP-009/131): it knows the nutrition domain (kcal, macros)
// and carries copy, so it lives in components/product/ and composes primitives.
// Default labels come from the central content module (i18n/white-label seam);
// `title`, `editLabel` and `labels` let a call site or sibling app override them.
//
// T-44: token-first (espaço/tipo/tracking saem de tokens, não px crus). NÃO
// compõe MacroMeter/MacroRing de propósito: aqueles são componentes de PROGRESSO
// (valor vs meta); aqui é um resumo NUMÉRICO das metas, não uma barra/anel.
export const TargetsCard = React.forwardRef(function TargetsCard({
  kcal,
  protein,
  carb,
  fat,
  onEdit,
  accent = "var(--forge-nutrition)",
  title = content.targetsCard.title,
  editLabel = content.targetsCard.editLabel,
  labels,
  className,
  style,
}, ref) {
  const t = { kcal: content.targetsCard.kcal, protein: content.targetsCard.protein, carb: content.targetsCard.carb, fat: content.targetsCard.fat, ...labels };
  return (
    <div ref={ref} className={className} style={{ backgroundColor: "var(--forge-surface)", border: "var(--forge-border-w) solid var(--forge-border)", borderRadius: "var(--forge-radius-card)", padding: "var(--forge-space-card)", ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--forge-space-12)" }}>
        <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-label)", textTransform: "uppercase", letterSpacing: "var(--forge-tracking-label)", color: "var(--forge-text-faint)" }}>
          {title}
        </div>
        {onEdit ? (
          <button onClick={onEdit} style={{ background: "none", border: "none", color: accent, fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: "var(--forge-text-chip)", cursor: "pointer", padding: 0 }}>
            {editLabel}
          </button>
        ) : null}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Stat label={t.kcal} value={kcal} color="var(--forge-text)" />
        <Stat label={t.protein} value={protein} unit="g" color="var(--forge-macro-protein)" />
        <Stat label={t.carb} value={carb} unit="g" color="var(--forge-macro-carb)" />
        <Stat label={t.fat} value={fat} unit="g" color="var(--forge-macro-fat)" />
      </div>
    </div>
  );
});

function Stat({ label, value, unit = "", color }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--forge-font-title)", fontSize: 24, color }}>
        {value}
        <span style={{ fontSize: "var(--forge-text-chip)" }}>{unit}</span>
      </div>
      <div style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-mini-label)", color: "var(--forge-text-dim)", marginTop: "var(--forge-space-2)" }}>{label}</div>
    </div>
  );
}
