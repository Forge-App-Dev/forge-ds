import React from "react";

// TextField — labelled text input (single or multiline).
// The label is a real <label htmlFor>, associated to the field by a generated
// id, so screen readers announce it. Pass `error` to show an inline error
// message (role="alert"), set aria-invalid, and tie the message to the field
// via aria-describedby; pass `helper` for non-error guidance. `required` and
// `disabled` supported. Mobile keyboard hints (`inputMode`, `autoComplete`,
// `enterKeyHint`) are passed straight through to the field (OP-115). `trailing`
// renders an adornment inside the single-line field (e.g. the eye toggle of
// PasswordField); it is omitted by default so the render is unchanged.
export const TextField = React.forwardRef(function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  error,
  helper,
  required = false,
  disabled = false,
  inputMode,
  autoComplete,
  enterKeyHint,
  trailing,
  className,
  style,
}, ref) {
  const rid = React.useId ? React.useId() : "forge-tf";
  const fieldId = `${rid}-field`;
  const msgId = `${rid}-msg`;
  const describedBy = error || helper ? msgId : undefined;

  const fieldStyle = {
    width: "100%",
    borderRadius: "var(--forge-radius-input)",
    border: `var(--forge-border-w) solid ${error ? "var(--forge-danger)" : "var(--forge-border-input)"}`,
    backgroundColor: "var(--forge-surface-raised)",
    color: "var(--forge-text)",
    fontFamily: "var(--forge-font-body)",
    fontSize: "var(--forge-text-input)",
    boxSizing: "border-box",
    opacity: disabled ? "var(--forge-opacity-disabled)" : 1,
  };

  return (
    <div ref={ref} className={className} style={{ marginBottom: 12, ...style }}>
      {label ? (
        <label
          htmlFor={fieldId}
          style={{
            display: "block",
            fontFamily: "var(--forge-font-body)",
            fontWeight: 700,
            fontSize: "var(--forge-text-label)",
            color: "var(--forge-text-faint)",
            textTransform: "uppercase",
            letterSpacing: "var(--forge-tracking-label)",
            marginBottom: 6,
          }}
        >
          {label}
          {required ? <span style={{ color: "var(--forge-danger)" }} aria-hidden="true"> *</span> : null}
        </label>
      ) : null}
      {multiline ? (
        <textarea
          id={fieldId}
          className="forge-focusable"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          enterKeyHint={enterKeyHint}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          onChange={(e) => onChange && onChange(e.target.value)}
          style={{ ...fieldStyle, height: 84, padding: "10px 12px", resize: "none" }}
        />
      ) : (
        <div style={{ position: "relative" }}>
          <input
            id={fieldId}
            className="forge-focusable"
            type={type}
            inputMode={inputMode}
            autoComplete={autoComplete}
            enterKeyHint={enterKeyHint}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            onChange={(e) => onChange && onChange(e.target.value)}
            style={{ ...fieldStyle, height: 44, paddingLeft: 12, paddingRight: trailing ? 44 : 12 }}
          />
          {trailing ? (
            <span style={{ position: "absolute", right: 6, top: 0, height: 44, display: "inline-flex", alignItems: "center" }}>
              {trailing}
            </span>
          ) : null}
        </div>
      )}
      {error ? (
        <div id={msgId} role="alert" style={{ marginTop: 5, fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body-sm)", color: "var(--forge-danger)" }}>
          {error}
        </div>
      ) : helper ? (
        <div id={msgId} style={{ marginTop: 5, fontFamily: "var(--forge-font-body)", fontSize: "var(--forge-text-body-sm)", color: "var(--forge-text-dim)" }}>
          {helper}
        </div>
      ) : null}
    </div>
  );
});
