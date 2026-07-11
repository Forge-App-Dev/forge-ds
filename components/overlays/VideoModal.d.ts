import { ReactNode } from "react";

/**
 * Full-bleed video overlay (near-black scrim) for an exercise demo — pass a
 * `<video>`/iframe player as children. Tap outside the player or ✕ closes it.
 * Known pitfall: on native, a raw WebView iframe for YouTube fails
 * (Error 152/153) — wrap `react-native-youtube-iframe` instead.
 */
export interface VideoModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

export function VideoModal(props: VideoModalProps): JSX.Element;
