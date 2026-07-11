import React from "react";

// Quantity + unit selector for a food item — the unit selector only appears
// when the food has portion presets; tapping it cycles through units ("g"
// plus any portions). Grams stays the source of truth for calculation.
export function QtyInput({ qty, unit = "g", units = ["g"], onChange }) {
  const cycleUnit = () => {
    const i = units.indexOf(unit);
    const next = units[(i + 1) % units.length];
    onChange && onChange({ qty, unit: next });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <input
        value={qty ?? ""}
        onChange={(e) => onChange && onChange({ qty: e.target.value.replace(/[^\d,.]/g, ""), unit })}
        placeholder="0"
        style={{
          width: 64,
          height: 36,
          borderRadius: 8,
          border: "1px solid var(--forge-border-input)",
          backgroundColor: "var(--forge-surface-raised)",
          color: "var(--forge-text)",
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: 13.5,
        }}
      />
      {units.length > 1 ? (
        <button
          onClick={cycleUnit}
          style={{
            height: 36,
            minWidth: 44,
            borderRadius: 8,
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "transparent",
            color: "var(--forge-text-muted)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 12,
            paddingInline: 8,
            cursor: "pointer",
          }}
        >
          {unit}
        </button>
      ) : (
        <span style={{ color: "var(--forge-text-muted)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, paddingInline: 8 }}>g</span>
      )}
    </div>
  );
}
