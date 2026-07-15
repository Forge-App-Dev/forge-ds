import React from "react";

// MiniChart — small chart of a history (e.g. weight over time).
// variant="line" (default): 2.5px line + 3.5r dots.
// variant="bar": colunas com BASE ZERO (altura ∝ valor, não ao min) — não engana
// (T-63). O line/area segue autoescalado (min→max), padrão para tendência.
// variant="area": line with a soft filled gradient beneath it.
// viewBox 280x60, pad 6. Color applied via CSS (currentColor) so tokens
// resolve. Guards against empty/single-point input (P-10). Gradient id is
// unique per instance via React.useId so multiple charts on one page don't
// bleed into each other (P-10).
export const MiniChart = React.forwardRef(function MiniChart({ values, color = "var(--forge-accent)", variant = "line", title, className, style }, ref) {
  const uid = React.useId ? React.useId() : "forge-mc";
  const gradId = `forge-minichart-grad-${uid}`;
  const data = Array.isArray(values) ? values.filter((v) => typeof v === "number" && !Number.isNaN(v)) : [];
  const W = 280, H = 60, pad = 6;

  if (data.length === 0) {
    return <svg ref={ref} className={className} width="100%" height={60} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title || "Sem dados"} style={{ color, ...style }} />;
  }

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  if (variant === "bar") {
    const n = data.length;
    const bw = (W - 2 * pad) / n;
    return (
      <svg ref={ref} className={className} width="100%" height={60} viewBox={`0 0 ${W} ${H}`} style={{ color, ...style }} role="img" aria-label={title || "Gráfico de barras"}>
        {data.map((v, i) => {
          const h = (Math.max(0, v) / (max > 0 ? max : 1)) * (H - 2 * pad);
          const x = pad + i * bw;
          const y = H - pad - h;
          return <rect key={i} x={x + bw * 0.15} y={y} width={bw * 0.7} height={h} rx={2} fill="currentColor" />;
        })}
      </svg>
    );
  }

  const pts = data.map((v, i) => {
    const x = pad + (i / Math.max(data.length - 1, 1)) * (W - 2 * pad);
    const y = H - pad - ((v - min) / range) * (H - 2 * pad);
    return [x, y];
  });
  const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");

  if (variant === "area") {
    const areaD = d + ` L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pts[0][0].toFixed(1)},${H - pad} Z`;
    return (
      <svg ref={ref} className={className} width="100%" height={60} viewBox={`0 0 ${W} ${H}`} style={{ color, ...style }} role="img" aria-label={title || "Gráfico de área"}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill={`url(#${gradId})`} stroke="none" />
        <path d={d} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg ref={ref} className={className} width="100%" height={60} viewBox={`0 0 ${W} ${H}`} style={{ color, ...style }} role="img" aria-label={title || "Gráfico de linha"}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill="currentColor" />
      ))}
    </svg>
  );
});
