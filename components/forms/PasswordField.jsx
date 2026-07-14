import React from "react";
import { Icon } from "../icons/Icon";
import { TextField } from "./TextField.jsx";

// PasswordField — a TextField for secure entry with a show/hide toggle. Composes
// TextField (same label/error/helper/required semantics) and drops an eye button
// into its `trailing` slot: toggling flips the input between type="password" and
// "text" and swaps the eye/eye-off glyph. `autoComplete` defaults to
// "current-password" (use "new-password" on signup/reset forms). The toggle is a
// real button with aria-pressed + a state-describing aria-label.
export function PasswordField({
  label = "Senha",
  value,
  onChange,
  placeholder,
  autoComplete = "current-password",
  error,
  helper,
  required = false,
  disabled = false,
  style,
}) {
  const [show, setShow] = React.useState(false);

  return (
    <TextField
      label={label}
      type={show ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      enterKeyHint="done"
      error={error}
      helper={helper}
      required={required}
      disabled={disabled}
      style={style}
      trailing={
        <button
          type="button"
          className="forge-focusable"
          onClick={() => !disabled && setShow((s) => !s)}
          disabled={disabled}
          aria-pressed={show}
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
          style={{
            background: "none",
            border: "none",
            cursor: disabled ? "default" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 6,
            borderRadius: "var(--forge-radius-input)",
          }}
        >
          <Icon name={show ? "eye-off" : "eye"} color="var(--forge-text-dim)" size={18} />
        </button>
      }
    />
  );
}
