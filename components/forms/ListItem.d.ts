import { CSSProperties, ReactNode } from "react";

/**
 * Standard list row (the "rowCard" pattern): optional leading (icon/avatar/dot),
 * title + optional subtitle, and an optional trailing slot (value, chevron,
 * Switch…). Pass `onClick` to make it a pressable row (`role="button"`, focus,
 * press state, chevron by default); omit for a static row.
 */
export interface ListItemProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Custom leading element (avatar, dot, custom tile). Overrides `leadingIcon`. */
  leading?: ReactNode;
  /** Convenience: renders an Icon inside a rounded tile as the leading slot. */
  leadingIcon?: string;
  /** Trailing element (value, chevron, Switch…). Suppresses the default chevron. */
  trailing?: ReactNode;
  /** Makes the row pressable (`role="button"`). Omit for a static row. */
  onClick?: () => void;
  /** Force the trailing chevron on/off. Defaults to `true` when pressable and no `trailing`. */
  showChevron?: boolean;
  /** Dims the row and blocks interaction. Default `false`. */
  disabled?: boolean;
  style?: CSSProperties;
}

export function ListItem(props: ListItemProps): JSX.Element;
