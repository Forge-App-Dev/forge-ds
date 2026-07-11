// ModuleChooserScreen — faithful recreation of src/screens/ModuleChooser.jsx.
function ModuleChooserScreen({ onChoose }) {
  const { Icon } = window.ForgeDesignSystem_7731a5;
  return (
    <div style={{ padding: "8px 20px 24px", maxWidth: 480, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--forge-text-faint)", marginBottom: 4 }}>
        Escolha um módulo
      </div>
      <div style={{ fontFamily: "var(--font-title)", fontSize: 30, textTransform: "uppercase", color: "var(--forge-text)", marginBottom: 22, lineHeight: "32px" }}>
        O que vamos fazer hoje?
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <ModuleCard color="#EF4444" iconName="dumbbell" name="Treino" desc="Treinos, cargas e progresso." onClick={() => onChoose("treino")} Icon={Icon} />
        <ModuleCard color="#10B981" iconName="flame" name="Nutrição" desc="Alimentação, calorias e macros." onClick={() => onChoose("nutricao")} Icon={Icon} />
      </div>

      <div
        onClick={() => onChoose("perfil")}
        style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "var(--forge-surface)", borderRadius: "var(--radius-card)", border: "1px solid var(--forge-border)", padding: 14, marginTop: 14, cursor: "pointer" }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="user" color="var(--forge-text-muted)" size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--forge-text)" }}>Perfil</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--forge-text-dim)", marginTop: 1 }}>Sua conta, dados corporais e objetivo</div>
        </div>
        <Icon name="arrow" color="var(--forge-text-dimmer)" size={18} />
      </div>
    </div>
  );
}

function ModuleCard({ color, iconName, name, desc, onClick, Icon }) {
  return (
    <div
      onClick={onClick}
      style={{ display: "flex", backgroundColor: "var(--forge-surface)", borderRadius: "var(--radius-card)", border: "1px solid var(--forge-border)", overflow: "hidden", cursor: "pointer" }}
    >
      <div style={{ width: 4, backgroundColor: color, flexShrink: 0 }} />
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 18, padding: 22, minWidth: 0 }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, backgroundColor: color + "22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={iconName} color={color} size={30} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-title)", fontSize: 26, textTransform: "uppercase", color: "var(--forge-text)", lineHeight: "28px" }}>{name}</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#8a8a92", marginTop: 6, lineHeight: "18px" }}>{desc}</div>
        </div>
        <Icon name="arrow" color={color} size={18} />
      </div>
    </div>
  );
}
