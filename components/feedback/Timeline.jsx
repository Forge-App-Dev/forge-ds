import React from "react";
import { Icon } from "../icons/Icon";

// Timeline — a vertical history of events/sessions (OP-047): a marker + a
// connecting line + content per item. The pattern for a workout history, a
// weigh-in log, or an activity feed. Semantic by construction: it renders an
// ordered list (<ol>/<li>) so a screen reader announces "lista, N itens" and
// each entry as a list item — the marker line is decorative only.
//
// `items` is an array of `{ title, time, description, icon, color, done }`.
// `icon` renders a glyph chip instead of a plain dot; `color` tints the marker
// (falls back to `accent`). The connecting line is drawn between markers and
// omitted after the last item.
export const Timeline = React.forwardRef(function Timeline({ items = [], accent, className, style }, ref) {
  const tint = accent || "var(--forge-accent)";
  const list = Array.isArray(items) ? items : [];

  return (
    <ol ref={ref} className={className} style={{ listStyle: "none", margin: 0, padding: 0, ...style }}>
      {list.map((item, i) => {
        const last = i === list.length - 1;
        const color = item.color || tint;
        return (
          <li key={i} style={{ display: "flex", gap: "var(--forge-space-6)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 28 }}>
              {item.icon ? (
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "var(--forge-radius-pill)",
                    backgroundColor: `color-mix(in srgb, ${color} 16%, var(--forge-surface))`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={item.icon} color={color} size={14} />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  style={{
                    width: 12,
                    height: 12,
                    marginTop: 3,
                    borderRadius: "var(--forge-radius-pill)",
                    backgroundColor: item.done === false ? "var(--forge-surface)" : color,
                    border: `var(--forge-border-w-strong) solid ${color}`,
                  }}
                />
              )}
              {!last ? (
                <span
                  aria-hidden="true"
                  style={{ flex: 1, width: "var(--forge-border-w-strong)", minHeight: 16, marginTop: "var(--forge-space-2)", backgroundColor: "var(--forge-divider)" }}
                />
              ) : null}
            </div>

            <div style={{ minWidth: 0, paddingBottom: last ? 0 : "var(--forge-space-8)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--forge-space-5)", flexWrap: "wrap" }}>
                {item.title ? (
                  <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body)", fontWeight: 700, color: "var(--forge-text)" }}>
                    {item.title}
                  </span>
                ) : null}
                {item.time ? (
                  <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", color: "var(--forge-text-faint)", fontVariantNumeric: "tabular-nums" }}>
                    {item.time}
                  </span>
                ) : null}
              </div>
              {item.description ? (
                <div style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body-sm)", color: "var(--forge-text-dim)", lineHeight: "var(--forge-lh-body-sm)", marginTop: "var(--forge-space-1)" }}>
                  {item.description}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
});
