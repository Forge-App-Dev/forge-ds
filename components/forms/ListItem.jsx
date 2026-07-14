import React from "react";
import { Icon } from "../icons/Icon";

// ListItem — a standard row: optional leading (icon/avatar/dot), title +
// optional subtitle, and an optional trailing slot (value, chevron, Switch…).
// The pattern every screen rebuilds by hand (the family doc calls it rowCard).
// Pass `onClick` to make it a pressable row (role=button, focus, press,
// chevron by default); omit for a static row. `leadingIcon` is a convenience
// for the common icon-in-a-tile leading.
export const ListItem = React.forwardRef(function ListItem({ title, subtitle, leading, leadingIcon, trailing, onClick, showChevron, selected = false, disabled = false, className, style }, ref) {
  const pressable = typeof onClick === "function";
  const [pressed, setPressed] = React.useState(false);
  const chevron = (showChevron ?? pressable) && !trailing;

  const lead = leading || (leadingIcon ? (
    <span style={{ width: 34, height: 34, borderRadius: "var(--forge-radius-chip)", backgroundColor: "var(--forge-surface-raised)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon name={leadingIcon} color="var(--forge-text-muted)" size={18} />
    </span>
  ) : null);

  const body = (
    <>
      {lead}
      <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2, textAlign: "left" }}>
        <span style={{ fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: "var(--forge-text-list-item)", color: "var(--forge-text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {subtitle ? <span style={{ fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-chip)", color: "var(--forge-text-dim)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{subtitle}</span> : null}
      </span>
      {trailing ? <span style={{ flexShrink: 0, display: "inline-flex", alignItems: "center" }}>{trailing}</span> : null}
      {chevron ? <Icon name="chevron-right" color="var(--forge-text-faint)" size={18} /> : null}
    </>
  );

  const base = {
    display: "flex", alignItems: "center", gap: 12, width: "100%",
    minHeight: "var(--forge-tap-target)",
    padding: "10px 2px",
    background: "none", border: "none",
    opacity: disabled ? "var(--forge-opacity-disabled)" : pressed ? "var(--forge-opacity-press)" : 1,
    transition: "opacity var(--forge-duration-instant) var(--forge-ease-standard)",
    cursor: pressable && !disabled ? "pointer" : "default",
    ...style,
  };

  if (pressable) {
    return (
      <button
        ref={ref}
        className={["forge-focusable", className].filter(Boolean).join(" ")}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-current={selected ? "true" : undefined}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{ ...base, font: "inherit" }}
      >
        {body}
      </button>
    );
  }
  return <div ref={ref} className={className} style={base}>{body}</div>;
});
