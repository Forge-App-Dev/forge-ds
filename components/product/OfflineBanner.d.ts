import * as React from "react";

/**
 * Persistent inline banner for the offline/sync state. The system has no
 * toast/snackbar (ADR-0002): a system state must not flash and vanish, it stays
 * in the flow until the condition clears. role="status" (polite live region,
 * not alert). Default copy is on-voice and reassuring; an optional action offers
 * a manual retry. A PRODUCT component (it carries the app's offline copy).
 */
export interface OfflineBannerProps {
  /** Banner text. Has an on-voice pt-BR default. Overridden by `children`. */
  message?: string;
  /** Optional action label (e.g. "Tentar de novo"); requires `onAction`. */
  actionLabel?: string;
  /** Handler for the optional action button. */
  onAction?: () => void;
  /** Custom body content, replacing `message`. */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const OfflineBanner: React.ForwardRefExoticComponent<
  OfflineBannerProps & React.RefAttributes<HTMLDivElement>
>;
