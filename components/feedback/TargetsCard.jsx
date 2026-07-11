import React from "react";

// TargetsCard — daily kcal + macro targets summary, with an edit affordance.
// Used atop the Nutrição "Hoje" screen and in the targets-setup flow.
export function TargetsCard({ kcal, protein, carb, fat, onEdit, accent = "#10B981" }) {
  return (
    <div style={{ backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: "var(--radius-card)", padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11.5, textTransform: "uppercase", letterSpacing: 1, color: "var(--forge-text-faint)" }}>
          Suas metas diárias
        </div>
        {onEdit ? (
          <button onClick={onEdit} style={{ background: "none", border: "none", color: accent, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, cursor: "pointer", padding: 0 }}>
            Ajustar
          </button>
        ) : null}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Stat label="Kcal" value={kcal} color="var(--forge-text)" />
        <Stat label="Proteína" value={protein} unit="g" color="var(--forge-macro-protein)" />
        <Stat label="Carbo" value={carb} unit="g" color="var(--forge-macro-carb)" />
        <Stat label="Gordura" value={fat} unit="g" color="var(--forge-macro-fat)" />
      </div>
    </div>
  );
}

function Stat({ label, value, unit = "", color }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-title)", fontSize: 24, color }}>
        {value}
        <span style={{ fontSize: 12 }}>{unit}</span>
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--forge-text-dim)", marginTop: 2 }}>{label}</div>
    </div>
  );
}
