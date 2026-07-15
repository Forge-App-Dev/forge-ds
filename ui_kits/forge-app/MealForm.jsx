// MealForm — FullScreen create/edit a meal: name, food item list with
// QtyInput, add-food row, destructive discard via ConfirmButton in footer.
function MealForm({ visible, onClose }) {
  const { FullScreen, TextField, QtyInput, ConfirmButton, Button, Icon } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState("Almoço");
  const [items, setItems] = React.useState([
    { id: 1, name: "Peito de frango grelhado", qty: "180", unit: "g", units: ["g"] },
    { id: 2, name: "Arroz integral", qty: "150", unit: "g", units: ["g", "colher"] },
    { id: 3, name: "Feijão", qty: "1", unit: "concha", units: ["g", "concha"] },
  ]);

  const updateItem = (id, val) => setItems(items.map((it) => (it.id === id ? { ...it, ...val } : it)));

  return (
    <FullScreen
      visible={visible}
      onClose={onClose}
      title="Editar refeição"
      footer={
        <div style={{ display: "flex", gap: 10 }}>
          <ConfirmButton title="Excluir" confirmTitle="Excluir refeição?" onConfirm={onClose} />
          <Button title="Salvar" onClick={onClose} style={{ flex: 1 }} />
        </div>
      }
    >
      <TextField label="Nome da refeição" value={name} onChange={setName} />
      <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>
        Alimentos
      </div>
      {items.map((it) => (
        <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: 10, padding: 10, marginBottom: 8 }}>
          <span style={{ flex: 1, minWidth: 0, color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.name}</span>
          <QtyInput qty={it.qty} unit={it.unit} units={it.units} onChange={(v) => updateItem(it.id, v)} />
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px dashed var(--forge-border-input)", borderRadius: 10, padding: 12, marginTop: 4, cursor: "pointer" }}>
        <Icon name="plus" color="var(--forge-nutrition)" size={16} />
        <span style={{ color: "var(--forge-nutrition)", fontSize: 13, fontFamily: "var(--forge-font-body)", fontWeight: 700 }}>Adicionar alimento</span>
      </div>
    </FullScreen>
  );
}
