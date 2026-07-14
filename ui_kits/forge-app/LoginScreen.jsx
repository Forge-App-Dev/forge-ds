// LoginScreen — faithful recreation of src/components/LoginScreen.jsx.
// Google button + email/senha fields + esqueci senha + alternar entrar/criar.
function LoginScreen({ onLogin }) {
  const [mode, setMode] = React.useState("in");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div style={{ minHeight: "100%", background: "var(--forge-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 26px", boxSizing: "border-box" }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 11, marginBottom: 6 }}>
          <img src="../../assets/forge-mark.png" style={{ width: 40, height: 40 }} alt="" />
          <span style={{ fontFamily: "var(--font-title)", fontSize: 40, letterSpacing: 0.5, textTransform: "uppercase", color: "var(--forge-text)", lineHeight: "44px" }}>
            <span style={{ color: "var(--forge-accent)" }}>F</span>orge
          </span>
        </div>
        <div style={{ textAlign: "center", color: "var(--forge-text-dim)", fontFamily: "var(--font-body)", fontSize: 13.5, marginBottom: 30 }}>
          Seu treino, em qualquer aparelho.
        </div>

        <button
          onClick={onLogin}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "var(--forge-on-brand-google-bg)", border: "none", borderRadius: 12, padding: "14px 0", cursor: "pointer" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
            <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.34A9 9 0 0 0 9 18z" />
            <path fill="#FBBC05" d="M3.98 10.72a5.4 5.4 0 0 1 0-3.44V4.94H.96a9 9 0 0 0 0 8.12l3.02-2.34z" />
            <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.42 0 9 0A9 9 0 0 0 .96 4.94l3.02 2.34C4.68 5.16 6.66 3.58 9 3.58z" />
          </svg>
          <span style={{ color: "var(--forge-on-brand-google-text)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15 }}>Continuar com Google</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
          <div style={{ flex: 1, height: 1, backgroundColor: "var(--forge-border)" }} />
          <span style={{ color: "var(--forge-text-dimmer)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12 }}>ou</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "var(--forge-border)" }} />
        </div>

        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={inputStyle({ marginBottom: 10 })} />
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Senha" style={inputStyle({ marginBottom: mode === "in" ? 6 : 14 })} />

        {mode === "in" ? (
          <div style={{ textAlign: "right", marginBottom: 12 }}>
            <span style={{ color: "#8a8a92", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12.5, cursor: "pointer" }}>Esqueci minha senha</span>
          </div>
        ) : null}

        <button
          onClick={onLogin}
          style={{ width: "100%", backgroundColor: "var(--forge-accent)", border: "none", borderRadius: "var(--radius-button)", padding: "14px 0", color: "var(--forge-on-accent)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
        >
          {mode === "up" ? "Criar conta" : "Entrar"}
        </button>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 18 }}>
          <span style={{ color: "#8a8a92", fontFamily: "var(--font-body)", fontSize: 13.5 }}>{mode === "up" ? "Já tem conta? " : "Ainda não tem conta? "}</span>
          <span onClick={() => setMode(mode === "up" ? "in" : "up")} style={{ color: "var(--forge-accent)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13.5, cursor: "pointer" }}>
            {mode === "up" ? "Entrar" : "Criar conta"}
          </span>
        </div>
      </div>
    </div>
  );
}

function inputStyle(extra) {
  return {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "var(--forge-surface-raised)",
    border: "1px solid var(--forge-border-input)",
    borderRadius: "var(--radius-input)",
    padding: "13px 14px",
    color: "var(--forge-text)",
    fontFamily: "var(--font-body)",
    fontSize: 14.5,
    ...extra,
  };
}
