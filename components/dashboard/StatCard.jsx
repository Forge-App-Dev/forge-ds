import React from "react";
import { Card } from "../core/Card.jsx";
import { Icon } from "../icons/Icon";
import { StatBadge } from "../feedback/StatBadge.jsx";
import { MiniChart } from "../feedback/mini-chart/MiniChart.jsx";

// StatCard — a dashboard metric cell (PF-02, OP-023). The "DashboardTile" the
// screens would otherwise remount by hand: an eyebrow label, a big Barlow value
// (tabular numerals so figures don't jitter), an optional leading icon, an
// optional trend (StatBadge) and an optional sparkline (MiniChart). Composes
// primitives — it holds no product copy, so it works for a workout stat, a
// nutrition total, or a sibling app.
//
// Pass `onClick` to make the whole cell a pressable tile (Card handles the
// role=button + focus + press state) — this is the navigable "tile" sense.
// `accent` tints the left stripe and the icon (e.g. a module color); when
// omitted the cell is neutral. `chart` takes MiniChart props ({ values,
// variant, color }); `trend` takes StatBadge props ({ value, unit,
// goodDirection }).
export const StatCard = React.forwardRef(function StatCard({
  label,
  value,
  unit,
  icon,
  accent,
  trend,
  chart,
  caption,
  onClick,
  className,
  style,
}, ref) {
  const head = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--forge-space-6)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--forge-space-4)", minWidth: 0 }}>
        {icon ? (
          <span style={{ width: 26, height: 26, borderRadius: "var(--forge-radius-chip)", backgroundColor: "var(--forge-surface-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name={icon} color={accent || "var(--forge-text-faint)"} size={15} />
          </span>
        ) : null}
        <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-label)", letterSpacing: "var(--forge-tracking-label)", textTransform: "uppercase", color: "var(--forge-text-faint)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {label}
        </span>
      </div>
      {trend ? <StatBadge {...trend} /> : null}
    </div>
  );

  return (
    <Card ref={ref} stripeColor={accent} onClick={onClick} className={className} style={{ marginBottom: 0, ...style }}>
      {head}
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--forge-space-2)", marginTop: "var(--forge-space-5)" }}>
        <span style={{ fontFamily: "var(--forge-font-title)", fontWeight: 700, fontSize: 30, lineHeight: 1, color: "var(--forge-text)", fontVariantNumeric: "tabular-nums", letterSpacing: "var(--forge-tracking-title)" }}>
          {value}
        </span>
        {unit ? <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body)", color: "var(--forge-text-dim)", fontWeight: 600 }}>{unit}</span> : null}
      </div>
      {caption ? <div style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", color: "var(--forge-text-dim)", marginTop: "var(--forge-space-2)", lineHeight: "var(--forge-lh-chip)" }}>{caption}</div> : null}
      {chart ? <div style={{ marginTop: "var(--forge-space-6)" }}><MiniChart {...chart} /></div> : null}
    </Card>
  );
});
