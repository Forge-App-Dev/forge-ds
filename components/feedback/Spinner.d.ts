/**
 * Small inline spinner — an icon-scale spinning arc for use inside a
 * button, list row, or section while content loads. For a full-screen boot
 * loading treatment, use LoadingScreen instead.
 */
export interface SpinnerProps {
  size?: number;
  stroke?: number;
  color?: string;
}

export function Spinner(props: SpinnerProps): JSX.Element;
