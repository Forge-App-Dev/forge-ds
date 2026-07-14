import React from "react";

// PageDots — position indicator for a Pager/carousel (PF-01, OP-022). The
// active dot grows into an accent pill; the rest stay small and dimmer, per the
// token rule (accent ativo, dimmer inativo). Presentational only: it's marked
// aria-hidden because the Pager owns the spoken "página X de N" announcement —
// duplicating it here would make a screen reader say the position twice.
export function PageDots({ count = 0, active = 0, accent, style }) {
  const on = accent || "var(--forge-accent)";
  return (
    <div aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", gap: "var(--forge-space-3)", ...style }}>
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === active;
        return (
          <span
            key={i}
            style={{
              width: isActive ? 18 : 6,
              height: 6,
              borderRadius: "var(--forge-radius-pill)",
              backgroundColor: isActive ? on : "var(--forge-text-dimmer)",
              transition: "width var(--forge-duration-base) var(--forge-ease-standard), background-color var(--forge-duration-base) var(--forge-ease-standard)",
            }}
          />
        );
      })}
    </div>
  );
}
