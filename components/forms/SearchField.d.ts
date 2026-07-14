import { CSSProperties } from "react";

/**
 * Text input with a leading search glyph and a clear (✕) button when non-empty
 * — for food/exercise lookup. `type="search"`, labelled for screen readers via
 * the placeholder, `enterKeyHint="search"`.
 */
export interface SearchFieldProps {
  /** Current query. Default `""`. */
  value?: string;
  /** Called with the next query on input or when cleared. */
  onChange?: (value: string) => void;
  /** Placeholder, also used as the accessible name. Default `"Buscar"`. */
  placeholder?: string;
  /** Called with the current value on Enter. */
  onSubmit?: (value: string) => void;
  /** Autofocus on mount. Default `false`. */
  autoFocus?: boolean;
  style?: CSSProperties;
}

export function SearchField(props: SearchFieldProps): JSX.Element;
