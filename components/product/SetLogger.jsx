import React from "react";
import { Stepper } from "../forms/Stepper.jsx";
import { Icon } from "../icons/Icon";
import { content } from "../shared/content.js";

// SetLogger — a single set-logging row: weight × reps × check (OP-056). The
// most-touched control in a training app, so it's a formalized PRODUCT
// primitive instead of being remounted per screen. Composes Stepper (weight +
// reps) with the hard-won TalkBack rule already inside it, plus a check toggle
// that marks the set done.
//
// `set` is the set number (leading badge). `weight`/`reps` are controlled;
// report edits via `onWeightChange`/`onRepsChange`. `done`/`onToggleDone` mark
// completion (the row dims + the check fills). `weightStep` defaults to 2.5kg,
// `repsStep` to 1. `accent` themes the checked state.
export const SetLogger = React.forwardRef(function SetLogger({
  set,
  weight = 0,
  reps = 0,
  unit = content.setLogger.unit,
  onWeightChange,
  onRepsChange,
  done = false,
  onToggleDone,
  weightStep = 2.5,
  repsStep = 1,
  accent,
  className,
  style,
}, ref) {
  const tint = accent || "var(--forge-accent)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--forge-space-12)",
        padding: "var(--forge-space-10) var(--forge-space-12)",
        backgroundColor: "var(--forge-surface)",
        border: `var(--forge-border-w) solid ${done ? tint : "var(--forge-border)"}`,
        borderRadius: "var(--forge-radius-card)",
        opacity: done ? "var(--forge-opacity-press)" : 1,
        transition: "opacity var(--forge-duration-fast) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
        ...style,
      }}
    >
      {set != null ? (
        <span style={{ width: 24, height: 24, flexShrink: 0, borderRadius: "var(--forge-radius-chip)", backgroundColor: "var(--forge-surface-raised)", color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: 13, display: "inline-flex", alignItems: "center", justifyContent: "center", fontVariantNumeric: "tabular-nums" }}>
          {set}
        </span>
      ) : null}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--forge-space-2)" }}>
        <Stepper value={weight} onChange={onWeightChange} min={0} step={weightStep} unit={unit} label={content.setLogger.weight} disabled={done} />
        <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-mini-label)", letterSpacing: "var(--forge-tracking-label)", textTransform: "uppercase", color: "var(--forge-text-faint)", fontWeight: 700 }}>{content.setLogger.weight}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--forge-space-2)" }}>
        <Stepper value={reps} onChange={onRepsChange} min={0} step={repsStep} label={content.setLogger.reps} disabled={done} />
        <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-mini-label)", letterSpacing: "var(--forge-tracking-label)", textTransform: "uppercase", color: "var(--forge-text-faint)", fontWeight: 700 }}>{content.setLogger.reps}</span>
      </div>

      <button
        className="forge-focusable"
        onClick={onToggleDone}
        role="checkbox"
        aria-checked={done}
        aria-label={content.setLogger.doneLabel(set)}
        style={{
          marginLeft: "auto",
          width: "var(--forge-size-control-md)",
          height: "var(--forge-size-control-md)",
          flexShrink: 0,
          borderRadius: "var(--forge-radius-input)",
          border: `var(--forge-border-w) solid ${done ? tint : "var(--forge-border-input)"}`,
          backgroundColor: done ? tint : "transparent",
          color: done ? "var(--forge-on-accent)" : "var(--forge-text-faint)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
        }}
      >
        <Icon name="check" color="currentColor" size={20} />
      </button>
    </div>
  );
});
