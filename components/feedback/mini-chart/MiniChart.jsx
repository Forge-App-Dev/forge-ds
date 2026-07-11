import React from "react";

// MiniChart — small chart of a history (e.g. weight over time).
// variant="line" (default): 2.5px line + 3.5r dots.
// variant="bar": simple column bars.
// variant="area": line with a soft filled gradient beneath it.
// viewBox 280x60, pad 6, all in the accent color.
export function MiniChart({ values, color = "#EF4444", variant = "line" }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const W = 280, H = 60, pad = 6;
  const gradId = "forge-minichart-grad";

  if (variant === "bar") {
    const n = values.length;
    const bw = (W - 2 * pad) / n;
    return (
      <svg width="100%" height={60} viewBox={`0 0 ${W} ${H}`}>
        {values.map((v, i) => {
          const h = ((v - min) / range) * (H - 2 * pad - 4) + 4;
          const x = pad + i * bw;
          const y = H - pad - h;
          return <rect key={i} x={x + bw * 0.15} y={y} width={bw * 0.7} height={h} rx={2} fill={color} />;
        })}
      </svg>
    );
  }

  const pts = values.map((v, i) => {
    const x = pad + (i / Math.max(values.length - 1, 1)) * (W - 2 * pad);
    const y = H - pad - ((v - min) / range) * (H - 2 * pad);
    return [x, y];
  });
  const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");

  if (variant === "area") {
    const areaD = d + ` L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pts[0][0].toFixed(1)},${H - pad} Z`;
    return (
      <svg width="100%" height={60} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill={`url(#${gradId})`} stroke="none" />
        <path d={d} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="100%" height={60} viewBox={`0 0 ${W} ${H}`}>
      <path d={d} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill={color} />
      ))}
    </svg>
  );
}
