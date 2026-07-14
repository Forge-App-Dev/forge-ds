import { CSSProperties } from "react";

/**
 * Content placeholder shown while data loads — the middle of the loading
 * hierarchy (boot = LoadingScreen, screen/content = Skeleton, section/button =
 * Spinner). Uses the global pulse animation, so it honors reduced-motion.
 * Compose several to sketch a card's shape. Purely decorative (`aria-hidden`).
 */
export interface SkeletonProps {
  /** Shape preset. Default `"line"`. */
  variant?: "line" | "block" | "circle";
  /** Explicit width (number = px, or any CSS length). */
  width?: number | string;
  /** Explicit height (number = px, or any CSS length). */
  height?: number | string;
  /** Border radius override (line/block variants). */
  radius?: number | string;
  style?: CSSProperties;
}

export function Skeleton(props: SkeletonProps): JSX.Element;

/**
 * N stacked skeleton lines (last one shorter) for paragraph placeholders.
 * Wraps them in a `role="status"` region labelled "Carregando".
 */
export interface SkeletonTextProps {
  /** Number of lines. Default `3`. */
  lines?: number;
  /** Gap between lines in px. Default `8`. */
  gap?: number;
  style?: CSSProperties;
}

export function SkeletonText(props: SkeletonTextProps): JSX.Element;
