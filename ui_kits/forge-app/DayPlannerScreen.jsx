// DayPlannerScreen — FullScreen flow to plan/adjust a nutrition day's meal
// slots. Long, multi-section flow → FullScreen per the modal decision rule.
function DayPlannerScreen({ visible, onClose }) {
  const { FullScreen, Button, HeaderAction, Icon } = window.ForgeDesignSystem_7731a5;
  const [slots, setSlots] = React.useState([
    { id: "cafe", label: "Café da manhã", enabled: true },
    { id: "almoco", label: "Almoço", enabled: true },
    { id: "lanche", label: "Lanche da tarde", enabled: false },
    { id: "jantar", label: "Jantar", enabled: true },
    { id: "ceia", label: "Ceia", enabled: false },
  ]);

  const toggle = (id) => setSlots(slots.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)));

  return (
    <FullScreen visible={visible} onClose={onClose} title="Plano do dia" right={<HeaderAction title="Replicar" onClick={() => {}} />} footer={<Button title="Salvar plano" onClick={onClose} style={{ width: "100%" }} />}>
      <div style={{ color: "var(--forge-text-dim)", fontSize: 13, marginBottom: 16, fontFamily: "var(--forge-font-body)" }}>
        Escolha quais refeições fazem parte do seu dia. Isso ajusta a distribuição das metas de macros.
      </div>
      {slots.map((s) => (
        <div
          key={s.id}
          onClick={() => toggle(s.id)}
          style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "var(--forge-surface)", border: `1px solid ${s.enabled ? "var(--forge-nutrition)" : "var(--forge-border)"}`, borderRadius: 12, padding: 14, marginBottom: 9, cursor: "pointer", opacity: s.enabled ? 1 : 0.55 }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 5, border: `1.5px solid ${s.enabled ? "var(--forge-nutrition)" : "var(--forge-border-input)"}`, backgroundColor: s.enabled ? "var(--forge-nutrition)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {s.enabled ? <Icon name="check" color="var(--forge-on-light)" size={13} /> : null}
          </div>
          <span style={{ flex: 1, color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 14 }}>{s.label}</span>
        </div>
      ))}
    </FullScreen>
  );
}
