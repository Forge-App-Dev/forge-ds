import * as React from "react";

/**
 * Signature boot/loading treatment — spinning Ring arc + pulsing brand mark
 * + wordmark + status caption. Respects prefers-reduced-motion.
 * @startingPoint section="Feedback" subtitle="Full-screen boot/loading treatment" viewport="700x260"
 */
export interface LoadingScreenProps {
  /** Path/URL to the brand mark image (assets/forge-mark.svg). */
  markSrc?: string;
  message?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LoadingScreen: React.ForwardRefExoticComponent<
  LoadingScreenProps & React.RefAttributes<HTMLDivElement>
>;
