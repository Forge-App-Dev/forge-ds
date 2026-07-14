import React from "react";

// Quantity + unit selector for a food item — the unit selector only appears
// when the food has portion presets; tapping it cycles through units ("g"
// plus any portions). Grams stays the source of truth for calculation.
// OP-116: numeric decimal keyboard (inputMode="decimal"), a proper accessible
// name (the field has no visible label), and comma→dot normalization so a
// pt-BR "1,5" becomes "1.5" (ADR-0056). The unit is a separate control, not
// merged into the number's accessible name.
export const QtyInput = React.forwardRef(function QtyInput({ qty, unit = "g", units = ["g"], onChange, className, style }, ref) {
  const cycleUnit = () => {
    const i = units.indexOf(unit);
    const next = units[(i + 1) % units.length];
    onChange && onChange({ qty, unit: next });
  };

  // Keep only digits and separators, then normalize the decimal comma to a dot.
  const normalizeQty = (raw) => raw.replace(/[^\d,.]/g, "").replace(/,/g, ".");

  return (
    <div ref={ref} className={className} style={{ display: "flex", alignItems: "center", gap: 6, ...style }}>
      <input
        value={qty ?? ""}
        inputMode="decimal"
        aria-label="Quantidade"
        onChange={(e) => onChange && onChange({ qty: normalizeQty(e.target.value), unit })}
        placeholder="0"
        style={{
          width: 64,
          height: 36,
          borderRadius: 8,
          border: "1px solid var(--forge-border-input)",
          backgroundColor: "var(--forge-surface-raised)",
          color: "var(--forge-text)",
          textAlign: "center",
          fontFamily: "var(--forge-font-body)",
          fontWeight: 600,
          fontSize: 13.5,
        }}
      />
      {units.length > 1 ? (
        <button
          onClick={cycleUnit}
          className="forge-focusable"
          aria-label={`Unidade: ${unit}. Toque para trocar`}
          style={{
            height: 36,
            minWidth: 44,
            borderRadius: 8,
            border: "1px solid var(--forge-border-input)",
            backgroundColor: "transparent",
            color: "var(--forge-text-muted)",
            fontFamily: "var(--forge-font-body)",
            fontWeight: 700,
            fontSize: 12,
            paddingInline: 8,
            cursor: "pointer",
          }}
        >
          {unit}
        </button>
      ) : (
        <span style={{ color: "var(--forge-text-muted)", fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 12, paddingInline: 8 }}>g</span>
      )}
    </div>
  );
});
