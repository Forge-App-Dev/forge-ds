import React from "react";

// Chart — the rich sibling of MiniChart (OP-053). Where MiniChart draws a
// compact, axis-less trend, Chart is the full read: labelled x/y axes, a
// subtle grid, plotted points/values, and one OR several `series`.
// variant="line" (default) | "bar" | "area". Colors come from tokens
// (`color`, or per-series `color`, defaulting to the categorical palette
// var(--forge-cat-*)); SVG is inline and responsive (viewBox + width 100%).
//
// Data shapes accepted by `series`:
//   - number[]                          → a single unnamed series
//   - { name, values:number[], color }[] → one or many named series
// `values` is a convenience alias for a single number[] series.
//
// A11y (OP-053, checklist "Gráficos"): the SVG is role="img" with a
// descriptive aria-label summarizing the data (e.g. "Peso: de 80 a 78,6 kg em
// 5 semanas") plus <title>/<desc>. Series carry a legend (never color-only),
// and the plot is wrapped in an overflow-x:auto container so it never makes
// the body scroll (ADR-0053). Guards against empty / single-point input like
// MiniChart (P-10); gradient ids are unique per instance via React.useId.
const PALETTE = [
  "var(--forge-cat-1)",
  "var(--forge-cat-2)",
  "var(--forge-cat-3)",
  "var(--forge-cat-4)",
  "var(--forge-cat-5)",
  "var(--forge-cat-6)",
];

function normalizeSeries(series, values, color) {
  const clean = (arr) =>
    (Array.isArray(arr) ? arr : []).filter((v) => typeof v === "number" && !Number.isNaN(v));
  if (Array.isArray(series) && series.length && typeof series[0] === "object") {
    return series
      .map((s, i) => ({
        name: s && s.name,
        color: (s && s.color) || PALETTE[i % PALETTE.length],
        values: clean(s && s.values),
      }))
      .filter((s) => s.values.length > 0);
  }
  const raw = clean(Array.isArray(series) ? series : values);
  return raw.length ? [{ name: undefined, color: color || "var(--forge-accent)", values: raw }] : [];
}

const fmt = (v) => (typeof v === "number" ? v.toLocaleString("pt-BR") : v);

export const Chart = React.forwardRef(function Chart({
  series,
  values,
  variant = "line",
  xLabels,
  yTicks = 4,
  title,
  unit,
  xUnit = "pontos",
  color,
  ariaLabel,
  showValues = false,
  height = 200,
  className,
  style,
}, ref) {
  const uid = React.useId ? React.useId() : "forge-chart";
  const S = normalizeSeries(series, values, color);
  const W = 320;
  const H = height;
  const multi = S.length > 1;

  // Empty guard (P-10) — mirror MiniChart: render an empty, still-labelled SVG.
  if (S.length === 0) {
    return (
      <div ref={ref} className={className} style={{ overflowX: "auto", ...style }}>
        <svg
          width="100%"
          height={H}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={ariaLabel || title || "Sem dados"}
        >
          {title ? <title>{title}</title> : null}
          <desc>Sem dados para exibir.</desc>
        </svg>
      </div>
    );
  }

  const n = Math.max(...S.map((s) => s.values.length));
  const all = S.flatMap((s) => s.values);
  const dataMin = Math.min(...all);
  const dataMax = Math.max(...all);
  const baseZero = variant === "bar";
  const yMin = baseZero ? Math.min(0, dataMin) : dataMin;
  let yMax = dataMax;
  if (yMax === yMin) yMax = yMin + 1; // single-point / flat guard (P-10)
  const range = yMax - yMin;

  const mL = 42;
  const mR = 12;
  const mT = 12;
  const mB = xLabels && xLabels.length ? 30 : 14;
  const plotW = W - mL - mR;
  const plotH = H - mT - mB;
  const x0 = mL;
  const y0 = mT;
  const baselineY = y0 + plotH;

  const xFor = (i, len) => x0 + (len <= 1 ? plotW / 2 : (i / (len - 1)) * plotW);
  const yFor = (v) => y0 + plotH - ((v - yMin) / range) * plotH;

  const ticks = [];
  for (let i = 0; i <= yTicks; i++) ticks.push(yMin + (range * i) / yTicks);

  // Descriptive accessible name summarizing the data.
  const count = xLabels && xLabels.length ? xLabels.length : n;
  let autoLabel;
  if (!multi) {
    const v = S[0].values;
    const first = v[0];
    const last = v[v.length - 1];
    const span = v.length > 1 ? `de ${fmt(first)} a ${fmt(last)}` : `${fmt(first)}`;
    autoLabel = `${title ? title + ": " : "Gráfico: "}${span}${unit ? " " + unit : ""}${
      count > 1 ? ` em ${count} ${xUnit}` : ""
    }`;
  } else {
    const names = S.map((s) => s.name).filter(Boolean).join(", ");
    autoLabel = `${title ? title + ": " : "Gráfico: "}${S.length} séries${
      names ? " (" + names + ")" : ""
    }${count > 1 ? ` em ${count} ${xUnit}` : ""}`;
  }
  const label = ariaLabel || autoLabel;

  const axisText = { fill: "var(--forge-text-faint)" };
  const gridStroke = { stroke: "var(--forge-border)" };

  return (
    <div ref={ref} className={className} style={{ overflowX: "auto", ...style }}>
      <svg
        width="100%"
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={label}
        style={{ display: "block", fontFamily: "var(--forge-font-body)" }}
      >
        {title ? <title>{title}</title> : null}
        <desc>{autoLabel}</desc>

        {/* Grid + y-axis labels */}
        {ticks.map((t, i) => {
          const y = yFor(t);
          return (
            <g key={`t${i}`}>
              <line x1={x0} y1={y} x2={x0 + plotW} y2={y} style={gridStroke} strokeWidth={1} />
              <text
                x={x0 - 6}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={9}
                style={axisText}
              >
                {fmt(Math.round(t * 10) / 10)}
              </text>
            </g>
          );
        })}

        {/* x-axis labels */}
        {xLabels && xLabels.length
          ? xLabels.map((lbl, i) => (
              <text
                key={`x${i}`}
                x={xFor(i, xLabels.length)}
                y={baselineY + 14}
                textAnchor="middle"
                fontSize={9}
                style={axisText}
              >
                {lbl}
              </text>
            ))
          : null}

        {/* Series */}
        {S.map((s, si) => {
          const len = s.values.length;
          const pts = s.values.map((v, i) => [xFor(i, len), yFor(v)]);

          if (variant === "bar") {
            const slot = plotW / n;
            const groupPad = 0.16;
            const inner = slot * (1 - 2 * groupPad);
            const bw = inner / S.length;
            return (
              <g key={`s${si}`} style={{ color: s.color }}>
                {s.values.map((v, i) => {
                  const yTop = yFor(v);
                  const x = x0 + i * slot + slot * groupPad + si * bw;
                  const h = baselineY - yTop;
                  return (
                    <rect
                      key={i}
                      x={x}
                      y={yTop}
                      width={Math.max(bw - 1.5, 1)}
                      height={Math.max(h, 0)}
                      rx={2}
                      fill="currentColor"
                    />
                  );
                })}
              </g>
            );
          }

          const d = pts
            .map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1))
            .join(" ");

          if (variant === "area") {
            const gradId = `forge-chart-grad-${uid}-${si}`;
            const areaD =
              len > 1
                ? d +
                  ` L${pts[len - 1][0].toFixed(1)},${baselineY} L${pts[0][0].toFixed(1)},${baselineY} Z`
                : "";
            return (
              <g key={`s${si}`} style={{ color: s.color }}>
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {areaD ? <path d={areaD} fill={`url(#${gradId})`} stroke="none" /> : null}
                <path
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {pts.map((p, i) => (
                  <circle key={i} cx={p[0]} cy={p[1]} r={3} fill="currentColor" />
                ))}
              </g>
            );
          }

          // line (default)
          return (
            <g key={`s${si}`} style={{ color: s.color }}>
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {pts.map((p, i) => (
                <circle key={i} cx={p[0]} cy={p[1]} r={3} fill="currentColor" />
              ))}
              {showValues
                ? pts.map((p, i) => (
                    <text
                      key={`v${i}`}
                      x={p[0]}
                      y={p[1] - 7}
                      textAnchor="middle"
                      fontSize={9}
                      style={{ fill: "var(--forge-text-dim)" }}
                    >
                      {fmt(s.values[i])}
                    </text>
                  ))
                : null}
            </g>
          );
        })}
      </svg>

      {/* Legend — never rely on color alone to distinguish series (SC 1.4.1) */}
      {multi ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--forge-space-4)",
            marginTop: "var(--forge-space-3)",
          }}
        >
          {S.map((s, si) => (
            <span
              key={si}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--forge-space-2)",
                fontFamily: "var(--forge-font-body)",
                fontSize: "var(--forge-text-chip)",
                color: "var(--forge-text-dim)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "var(--forge-radius-chip)",
                  backgroundColor: s.color,
                  flexShrink: 0,
                }}
              />
              {s.name || `Série ${si + 1}`}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
});
