// WorkoutEditorScreen — FullScreen build/edit a workout: title + tag, list
// of exercises with sets x reps, add-exercise row, save footer.
function WorkoutEditorScreen({ visible, onClose, onEditExercise }) {
  const { FullScreen, TextField, Button, Icon } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState("Peito & Tríceps");
  const [exercises, setExercises] = React.useState([
    { id: 1, name: "Supino Reto", sets: 4, reps: "8-10" },
    { id: 2, name: "Supino Inclinado com Halteres", sets: 3, reps: "10-12" },
    { id: 3, name: "Crucifixo", sets: 3, reps: "12-15" },
    { id: 4, name: "Tríceps Corda", sets: 4, reps: "10-12" },
  ]);

  return (
    <FullScreen visible={visible} onClose={onClose} title="Montar treino" footer={<Button title="Salvar treino" onClick={onClose} style={{ width: "100%" }} />}>
      <TextField label="Nome do treino" value={name} onChange={setName} />
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>
        Exercícios
      </div>
      {exercises.map((ex, i) => (
        <div
          key={ex.id}
          onClick={() => onEditExercise && onEditExercise(ex)}
          style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: 10, padding: 12, marginBottom: 8, cursor: "pointer" }}
        >
          <span style={{ width: 22, color: "var(--forge-text-dimmer)", fontFamily: "var(--font-title)", fontSize: 16 }}>{i + 1}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "var(--forge-text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5 }}>{ex.name}</div>
            <div style={{ color: "var(--forge-text-dim)", fontSize: 12, marginTop: 1 }}>{ex.sets} séries × {ex.reps} reps</div>
          </div>
          <Icon name="pencil" color="var(--forge-text-dimmer)" size={15} />
        </div>
      ))}
      <div
        onClick={() => onEditExercise && onEditExercise(null)}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px dashed var(--forge-border-input)", borderRadius: 10, padding: 12, marginTop: 4, cursor: "pointer" }}
      >
        <Icon name="plus" color="#EF4444" size={16} />
        <span style={{ color: "#EF4444", fontSize: 13, fontFamily: "var(--font-body)", fontWeight: 700 }}>Adicionar exercício</span>
      </div>
    </FullScreen>
  );
}
