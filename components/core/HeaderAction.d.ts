/**
 * Discreet outlined action button, sized for a FullScreen header (e.g. "Replicar").
 */
export interface HeaderActionProps {
  title: string;
  onClick?: () => void;
}

export function HeaderAction(props: HeaderActionProps): JSX.Element;
