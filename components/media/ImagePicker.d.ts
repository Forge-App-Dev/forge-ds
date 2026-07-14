import * as React from "react";

/**
 * Visual layer of a photo picker (OP-050): the empty "add photo" placeholder,
 * the selected thumbnail with a remove control, and the loading state. It does
 * NOT capture or select the image — the native capture + permissions live in
 * the app (Expo `expo-image-picker`); wire that flow to `onPick` and pass the
 * resulting URI as `src`. Circular or square; ≥44px targets throughout.
 * @startingPoint section="Media" subtitle="Photo picker — empty, filled, loading" viewport="700x220"
 */
export interface ImagePickerProps {
  /** Selected image URI. When present, the thumbnail (filled) state renders. */
  src?: string;
  /** Called when the empty placeholder is pressed — trigger the native picker here. */
  onPick?: () => void;
  /** Called when the remove control is pressed. If absent, no remove button shows. */
  onRemove?: () => void;
  /** Thumbnail/placeholder shape. Default "square". */
  shape?: "circle" | "square";
  /** Edge size in px (min 44 is enforced). Default `96`. */
  size?: number;
  /** Show the loading/upload pulse instead of the placeholder or image. Default `false`. */
  loading?: boolean;
  /** Placeholder label and accessible name of the empty state. Default "Adicionar foto". */
  label?: string;
  /** Alt text for the selected image. Default "Foto selecionada". */
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImagePicker: React.ForwardRefExoticComponent<
  ImagePickerProps & React.RefAttributes<HTMLElement>
>;
