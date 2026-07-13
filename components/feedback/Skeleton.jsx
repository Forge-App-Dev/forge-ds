import React from "react";

// Skeleton — content placeholder shown while data loads (sits between the
// full-screen LoadingScreen and the inline Spinner in the loading hierarchy:
// boot=LoadingScreen, screen/content=Skeleton, section/button=Spinner).
// Uses the global pulse animation (tokens/motion.css → .forge-anim-pulse),
// so it honors reduced-motion. `variant`: "line" | "block" | "circle".
// Compose several to sketch a card's shape.
export function Skeleton({ variant = "line", width, height, radius, style }) {
  const dims =
    variant === "circle"
      ? { width: width || 34, height: height || width || 34, borderRadius: "var(--forge-radius-pill)" }
      : variant === "block"
      ? { width: width || "100%", height: height || 64, borderRadius: radius || "var(--forge-radius-card)" }
      : { width: width || "100%", height: height || 12, borderRadius: radius || "var(--forge-radius-chip)" };

  return (
    <div
      aria-hidden="true"
      className="forge-anim-pulse"
      style={{ backgroundColor: "var(--forge-surface-raised)", ...dims, ...style }}
    />
  );
}

// SkeletonText — n stacked lines, last one shorter, for paragraph placeholders.
export function SkeletonText({ lines = 3, gap = 8, style }) {
  return (
    <div role="status" aria-label="Carregando" style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} variant="line" width={i === lines - 1 ? "60%" : "100%"} />
      ))}
    </div>
  );
}
