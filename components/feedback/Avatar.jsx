import React from "react";

// Avatar — circular user image with initials fallback (OP-037). Shows `src`
// when it loads; on missing/broken src falls back to up-to-two initials from
// `name`, set in the Barlow title face. Sizes sm/md/lg. Always a circle.
//
// The accessible name comes from `alt` (falls back to `name`). Pass alt=""
// only when the avatar is purely decorative next to a visible name.
const AV_SIZE = { sm: 32, md: 44, lg: 64 };

export const Avatar = React.forwardRef(function Avatar({ src, name = "", alt, size = "md", className, style }, ref) {
  const px = AV_SIZE[size] || AV_SIZE.md;
  const [failed, setFailed] = React.useState(false);
  const accName = alt != null ? alt : name;
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const showImg = src && !failed;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: px,
        height: px,
        borderRadius: "var(--forge-radius-pill)",
        overflow: "hidden",
        backgroundColor: "var(--forge-surface-raised)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      {showImg ? (
        <img
          src={src}
          alt={accName}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <span
          role="img"
          aria-label={accName || undefined}
          aria-hidden={accName ? undefined : true}
          style={{
            fontFamily: "var(--forge-font-title)",
            fontWeight: 700,
            fontSize: Math.round(px * 0.4),
            letterSpacing: "var(--forge-tracking-title)",
            color: "var(--forge-text)",
            userSelect: "none",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
});
