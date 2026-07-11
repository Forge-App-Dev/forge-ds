import { ReactNode } from "react";

/**
 * Full-screen slide-in flow with its own header (close ✕, uppercase title,
 * optional right action) and optional fixed footer — used for large flows
 * like editing a day's meal plan or building a workout.
 * @startingPoint section="Overlays" subtitle="Full-screen flow with header + fixed footer" viewport="700x420"
 */
export interface FullScreenProps {
  visible?: boolean;
  onClose: () => void;
  title: string;
  right?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element;
