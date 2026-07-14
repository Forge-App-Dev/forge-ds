import { CSSProperties, ReactNode, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * Centered modal panel with a dark scrim — the system's default for small
 * choices and confirmations (pick a workout, edit weekly schedule).
 * @startingPoint section="Overlays" subtitle="Centered modal panel with scrim" viewport="700x420"
 */
export interface PanelProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
  /** When false, tapping the scrim does not close the panel. Default `true`. */
  dismissible?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Panel: ForwardRefExoticComponent<PanelProps & RefAttributes<HTMLDivElement>>;
