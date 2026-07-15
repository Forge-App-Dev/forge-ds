// PerfilScreen — Profile module home (data not found built out in source app
// screens/ folder at time of writing; built from ui.jsx primitives + the
// account/body-data fields implied by TargetsCard/onboarding flow).
function PerfilScreen({ onOpenTargets }) {
  const { Icon, Card } = window.ForgeDesignSystem_7731a5;

  const rows = [
    { icon: "user", label: "Dados da conta", sub: "Nome, email, senha" },
    { icon: "chart", label: "Dados corporais", sub: "Peso, altura, idade" },
    { icon: "flame", label: "Metas nutricionais", sub: "Kcal e macros diários", onClick: onOpenTargets },
    { icon: "dumbbell", label: "Nível de treino", sub: "Iniciante · 3x por semana" },
    { icon: "moon", label: "Notificações", sub: "Lembretes de treino e refeição" },
  ];

  return (
    <div style={{ padding: "8px 20px 24px", maxWidth: 480, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
        <div style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="user" color="var(--forge-text-muted)" size={26} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--forge-font-title)", fontSize: 26, textTransform: "uppercase", color: "var(--forge-text)", lineHeight: "28px" }}>Mateus</div>
          <div style={{ color: "var(--forge-text-dim)", fontSize: 12.5, fontFamily: "var(--forge-font-body)", marginTop: 2 }}>mateus@email.com</div>
        </div>
      </div>

      <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
        Conta e preferências
      </div>
      {rows.map((r) => (
        <div
          key={r.label}
          onClick={r.onClick}
          style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: 12, padding: 14, marginBottom: 9, cursor: r.onClick ? "pointer" : "default" }}
        >
          <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name={r.icon} color="var(--forge-text-muted)" size={17} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 14 }}>{r.label}</div>
            <div style={{ color: "var(--forge-text-dim)", fontSize: 12, fontFamily: "var(--forge-font-body)", marginTop: 1 }}>{r.sub}</div>
          </div>
          <Icon name="arrow" color="var(--forge-text-dimmer)" size={16} />
        </div>
      ))}
    </div>
  );
}
