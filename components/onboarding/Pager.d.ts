import * as React from "react";

/**
 * Onboarding carousel (one slide at a time) with the onboarding rules baked in:
 * at most 3 slides (dev warning if more), "Pular" always visible until the last
 * slide, and a single primary CTA on the last slide. Uncontrolled — tracks the
 * current slide internally; ←/→ move between slides; a live region announces
 * "slide X de N" and inactive slides are aria-hidden.
 */
export interface PagerProps {
  /** Slide contents, one node per slide (max 3). Default `[]`. */
  pages?: React.ReactNode[];
  /** Starting slide index. Default `0`. */
  initialPage?: number;
  /** Called with the new index when the slide changes. */
  onPageChange?: (page: number) => void;
  /** Called from the "Pular" button. */
  onSkip?: () => void;
  /** Called from the final CTA. */
  onDone?: () => void;
  /** Skip button label. Default `"Pular"`. */
  skipLabel?: string;
  /** Next button label. Default `"Próximo"`. */
  nextLabel?: string;
  /** Final CTA label. Default `"Começar"`. */
  doneLabel?: string;
  /** Accent for the dots + CTA (e.g. a sibling-app color). */
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Pager: React.ForwardRefExoticComponent<
  PagerProps & React.RefAttributes<HTMLElement>
>;
