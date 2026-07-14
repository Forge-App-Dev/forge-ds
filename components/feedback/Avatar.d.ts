import { CSSProperties } from "react";

/**
 * Circular user image with initials fallback (Barlow). Sizes sm/md/lg; always
 * a circle. Falls back to up-to-two initials from `name` on missing/broken src.
 * @startingPoint section="Feedback" subtitle="Avatar with photo + initials fallback" viewport="700x160"
 */
export interface AvatarProps {
  /** Image URL; when absent or it fails to load, initials are shown. */
  src?: string;
  /** Full name — source of the initials fallback and the default accessible name. */
  name?: string;
  /** Accessible name / alt text. Defaults to `name`; pass "" for decorative. */
  alt?: string;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
