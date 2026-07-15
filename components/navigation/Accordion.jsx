import React from "react";

// Accordion — a single expandable disclosure item (OP-040): a header button
// with a ▾ chevron over a collapsible region. Uncontrolled by default
// (`defaultOpen`); pass `open` + `onToggle` to control it. Exposes
// `aria-expanded` on the header and `aria-controls`/`aria-labelledby` wiring to
// the region. Height + chevron animate over a duration token, and the whole
// animation is dropped under prefers-reduced-motion (ADR / readme §Motion).
//
// Compose several in a column for an FAQ-style list; each owns its own border.
export const Accordion = React.forwardRef(function Accordion({ title, children, open: openProp, defaultOpen = false, onToggle, idBase = "forge-accordion", className, style }, ref) {
  const controlled = openProp != null;
  const [openState, setOpenState] = React.useState(defaultOpen);
  const open = controlled ? openProp : openState;

  const [reduce, setReduce] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync);
    else mq.addListener(sync);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", sync);
      else mq.removeListener(sync);
    };
  }, []);

  const toggle = () => {
    const next = !open;
    if (!controlled) setOpenState(next);
    if (onToggle) onToggle(next);
  };

  const panelId = `${idBase}-panel`;
  const headerId = `${idBase}-header`;

  return (
    <div ref={ref} className={className} style={{ borderBottom: "var(--forge-border-w) solid var(--forge-divider)", ...style }}>
      <button
        className="forge-focusable"
        id={headerId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        style={{
          width: "100%",
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--forge-space-8)",
          padding: "var(--forge-space-6) 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          color: "var(--forge-text)",
          fontFamily: "var(--forge-font-body)",
          fontWeight: 700,
          fontSize: "var(--forge-text-body)",
        }}
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            color: "var(--forge-text-dim)",
            fontSize: "var(--forge-text-body-sm)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: reduce ? "none" : "transform var(--forge-duration-base) var(--forge-ease-standard)",
          }}
        >
          ▾
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        inert={!open || undefined}
        aria-hidden={!open || undefined}
        style={{
          overflow: "hidden",
          maxHeight: open ? 2000 : 0,
          opacity: open ? 1 : 0,
          transition: reduce ? "none" : "max-height var(--forge-duration-base) var(--forge-ease-standard), opacity var(--forge-duration-fast) var(--forge-ease-standard)",
        }}
      >
        <div style={{ paddingBottom: "var(--forge-space-12)" }}>{children}</div>
      </div>
    </div>
  );
});
