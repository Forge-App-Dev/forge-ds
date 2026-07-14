import React from "react";

// WeekStrip — a selectable strip of week days (seg→dom): the minimum date
// picker the app already hand-draws in TreinoHoje (OP-030). The active day is
// the accent, "today" is marked, and each day can carry a completion dot. It is
// NOT a full calendar — just the current week as a horizontal selector.
//
// `days` is up to 7 entries `{ label, sub, done }` (label = weekday, sub = day
// number, done = training logged). `selected` is the active index, `today` the
// index to mark. Semantics: role="group" of buttons (not a radiogroup — ADR-
// 0008), roving tabindex with ArrowLeft/Right/Home/End moving focus, Enter/Space
// (native button) selecting. Selection is exposed via aria-pressed; today via
// aria-current and echoed in the accessible name (never color-only).
const DEFAULT_DAYS = [
  { label: "seg" },
  { label: "ter" },
  { label: "qua" },
  { label: "qui" },
  { label: "sex" },
  { label: "sáb" },
  { label: "dom" },
];

export const WeekStrip = React.forwardRef(function WeekStrip({ days = DEFAULT_DAYS, selected, today, onSelect, accent, label = "Dias da semana", className, style }, ref) {
  const list = Array.isArray(days) && days.length ? days : DEFAULT_DAYS;
  const tint = accent || "var(--forge-accent)";
  const refs = React.useRef([]);
  const [focusIdx, setFocusIdx] = React.useState(selected != null ? selected : 0);

  const move = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = Math.min(i + 1, list.length - 1);
    else if (e.key === "ArrowLeft") next = Math.max(i - 1, 0);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = list.length - 1;
    if (next != null) {
      e.preventDefault();
      setFocusIdx(next);
      const el = refs.current[next];
      if (el) el.focus();
    }
  };

  return (
    <div ref={ref} role="group" aria-label={label} className={className} style={{ display: "flex", gap: "var(--forge-space-3)", ...style }}>
      {list.map((d, i) => {
        const on = i === selected;
        const isToday = i === today;
        const name =
          `${d.label}${d.sub != null ? `, dia ${d.sub}` : ""}` +
          (isToday ? ", hoje" : "") +
          (d.done ? ", concluído" : "");
        return (
          <button
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="forge-focusable"
            aria-pressed={on}
            aria-current={isToday ? "date" : undefined}
            aria-label={name}
            tabIndex={i === focusIdx ? 0 : -1}
            onKeyDown={(e) => move(e, i)}
            onFocus={() => setFocusIdx(i)}
            onClick={() => onSelect && onSelect(i)}
            style={{
              flex: 1,
              minWidth: 40,
              minHeight: "var(--forge-size-control-md)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--forge-space-1)",
              padding: "var(--forge-space-3) var(--forge-space-2)",
              cursor: "pointer",
              borderRadius: "var(--forge-radius-input)",
              border: `var(--forge-border-w) solid ${on ? tint : "var(--forge-border)"}`,
              backgroundColor: on ? tint : "var(--forge-surface)",
              transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard), border-color var(--forge-duration-fast) var(--forge-ease-standard)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--forge-font-body)",
                fontSize: "var(--forge-text-mini-label)",
                letterSpacing: "var(--forge-tracking-label)",
                textTransform: "uppercase",
                fontWeight: 700,
                color: on ? "var(--forge-on-accent)" : "var(--forge-text-faint)",
              }}
            >
              {d.label}
            </span>
            {d.sub != null ? (
              <span
                style={{
                  fontFamily: "var(--forge-font-title)",
                  fontWeight: 700,
                  fontSize: "var(--forge-text-card-title)",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  color: on ? "var(--forge-on-accent)" : "var(--forge-text)",
                }}
              >
                {d.sub}
              </span>
            ) : null}
            <span
              aria-hidden="true"
              style={{
                width: 5,
                height: 5,
                borderRadius: "var(--forge-radius-pill)",
                backgroundColor: d.done
                  ? on
                    ? "var(--forge-on-accent)"
                    : tint
                  : isToday && !on
                    ? "var(--forge-text-faint)"
                    : "transparent",
              }}
            />
          </button>
        );
      })}
    </div>
  );
});
