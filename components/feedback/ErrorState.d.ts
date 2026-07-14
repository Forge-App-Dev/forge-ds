import { CSSProperties } from "react";

/**
 * Sibling of EmptyState for when something failed to load: warn glyph +
 * no-blame message + a retry action (an error state without a way forward is a
 * dead end). Copy follows the brand voice ("Não conseguimos carregar", not
 * "Erro 500"). Two layouts: inline `compact` (row) and full centered block.
 */
export interface ErrorStateProps {
  /** Headline. Default `"Algo não carregou"`. */
  title?: string;
  /** Supporting line. Default `"Verifique a conexão e tente de novo."`. */
  subtitle?: string;
  /** Called by the retry button; the button only renders when provided. */
  onRetry?: () => void;
  /** Retry button label. Default `"Tentar de novo"`. */
  retryLabel?: string;
  /** Icon name. Default `"warn"`. */
  icon?: string;
  /** Inline row layout instead of the full centered block. Default `false`. */
  compact?: boolean;
  style?: CSSProperties;
}

export function ErrorState(props: ErrorStateProps): JSX.Element;
