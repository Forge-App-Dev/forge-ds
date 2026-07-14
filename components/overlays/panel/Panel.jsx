import React from "react";
import { useDialogA11y } from "../../shared/useDialogA11y.js";

// Centered modal panel — dark scrim + panel. Used for small
// choices/confirmations (pick-a-workout, schedule editor). Accessible dialog:
// role="dialog" + aria-modal, labelled by its title, Escape to close, focus
// trapped inside, body scroll locked, focus restored on close. Tap-outside
// closes unless `dismissible={false}` (use for flows that must not be lost).
export const Panel = React.forwardRef(function Panel({ visible, onClose, title, children, footer, dismissible = true, className, style }, ref) {
  const dialogRef = useDialogA11y(visible, dismissible ? onClose : undefined);
  const rid = React.useId ? React.useId() : "forge-panel";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return (
    <div
      ref={ref}
      className={className}
      onClick={dismissible ? onClose : undefined}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--forge-scrim)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 14,
        zIndex: "var(--forge-z-overlay)",
        ...style,
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--forge-panel)",
          borderRadius: "var(--forge-radius-panel)",
          border: "var(--forge-border-w) solid var(--forge-border)",
          width: "100%",
          maxWidth: 440,
          maxHeight: "80dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 18px" }}>
          <div
            id={titleId}
            style={{
              flex: 1,
              fontFamily: "var(--forge-font-title)",
              fontWeight: 700,
              fontSize: "var(--forge-text-panel-title)",
              color: "var(--forge-text)",
              textTransform: "uppercase",
              letterSpacing: "var(--forge-tracking-title)",
            }}
          >
            {title}
          </div>
          <button
            className="forge-focusable forge-tap-min"
            onClick={onClose}
            aria-label="Fechar"
            style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 18, cursor: "pointer" }}
          >
            ✕
          </button>
        </div>
        <div style={{ overflowY: "auto", padding: `0 18px ${footer ? 4 : 18}px` }}>{children}</div>
        {footer ? <div style={{ padding: "0 18px 16px" }}>{footer}</div> : null}
      </div>
    </div>
  );
});
