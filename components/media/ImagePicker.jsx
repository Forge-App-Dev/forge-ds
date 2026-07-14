import React from "react";
import { Icon } from "../icons/Icon";
import { Skeleton } from "../feedback/Skeleton.jsx";
import { content } from "../shared/content.js";

// ImagePicker — the VISUAL layer of a photo picker (OP-050): the empty
// "add photo" placeholder, the selected thumbnail with a remove control, and
// the uploading/loading state. It does NOT capture or pick the image itself —
// the native capture/selection + permissions live in the app (Expo
// `expo-image-picker`). Wire the platform picker to `onPick`, and set `src`
// once you have a URI. This component only renders the reusable chrome around
// that platform flow.
//
// States:
//   - empty (no src, not loading): pressable placeholder (role button via a
//     native <button>) with a camera glyph + `label` ("Adicionar foto").
//   - loading: Skeleton pulse at the same size/shape (honors reduced-motion),
//     wrapped in a polite status region.
//   - filled: the image as a circular/square thumbnail + a remove button.
//
// A11y: the empty placeholder is a real button with an accessible name and a
// ≥44px target (--forge-tap-target-min); the remove button has a 44px hit area
// and the name "Remover foto"; the thumbnail image has a meaningful `alt`.
const CameraGlyph = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export function ImagePicker({
  src,
  onPick,
  onRemove,
  shape = "square",
  size = 96,
  loading = false,
  label = content.imagePicker.add,
  alt,
  style,
}) {
  const radius = shape === "circle" ? "var(--forge-radius-pill)" : "var(--forge-radius-card)";
  const box = {
    width: size,
    height: size,
    minWidth: "var(--forge-tap-target)",
    minHeight: "var(--forge-tap-target)",
    borderRadius: radius,
    flexShrink: 0,
    boxSizing: "border-box",
  };

  // Loading — pulse placeholder at the target size/shape.
  if (loading) {
    return (
      <div role="status" aria-label={content.imagePicker.loading} style={{ position: "relative", ...box, ...style }}>
        <Skeleton
          variant="block"
          width={size}
          height={size}
          radius={radius}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }

  // Filled — thumbnail + remove control.
  if (src) {
    return (
      <div style={{ position: "relative", ...box, ...style }}>
        <img
          src={src}
          alt={alt || content.imagePicker.selectedAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: radius,
            backgroundColor: "var(--forge-surface-raised)",
          }}
        />
        {onRemove ? (
          <button
            type="button"
            className="forge-focusable"
            onClick={onRemove}
            aria-label={content.imagePicker.remove}
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              width: "var(--forge-tap-target)",
              height: "var(--forge-tap-target)",
              padding: 0,
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: "var(--forge-radius-pill)",
                backgroundColor: "var(--forge-surface-raised)",
                border: "var(--forge-border-w) solid var(--forge-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="x" size={14} color="var(--forge-text)" />
            </span>
          </button>
        ) : null}
      </div>
    );
  }

  // Empty — pressable "add photo" placeholder.
  return (
    <button
      type="button"
      className="forge-focusable"
      onClick={onPick}
      aria-label={label}
      style={{
        ...box,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--forge-space-2)",
        padding: "var(--forge-space-3)",
        backgroundColor: "var(--forge-surface)",
        border: "var(--forge-border-w) dashed var(--forge-border-input)",
        color: "var(--forge-text-faint)",
        cursor: "pointer",
        ...style,
      }}
    >
      <CameraGlyph size={Math.max(Math.round(size * 0.26), 18)} />
      <span
        style={{
          fontFamily: "var(--forge-font-body)",
          fontSize: "var(--forge-text-chip)",
          fontWeight: 600,
          lineHeight: "var(--forge-lh-chip)",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </button>
  );
}
