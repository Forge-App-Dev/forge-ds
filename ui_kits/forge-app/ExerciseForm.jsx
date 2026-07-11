// ExerciseForm — FullScreen create/edit a single exercise: name, muscle
// group pills, target sets/reps, optional video URL, destructive delete.
function ExerciseForm({ visible, onClose, exercise }) {
  const { FullScreen, TextField, Pill, ConfirmButton, Button } = window.ForgeDesignSystem_7731a5;
  const [name, setName] = React.useState(exercise ? exercise.name : "");
  const [muscle, setMuscle] = React.useState("peito");
  const [sets, setSets] = React.useState(exercise ? String(exercise.sets) : "4");
  const [reps, setReps] = React.useState(exercise ? exercise.reps : "8-10");

  React.useEffect(() => {
    setName(exercise ? exercise.name : "");
    setSets(exercise ? String(exercise.sets) : "4");
    setReps(exercise ? exercise.reps : "8-10");
  }, [exercise, visible]);

  const groups = ["peito", "costas", "pernas", "ombro", "braço", "core"];

  return (
    <FullScreen
      visible={visible}
      onClose={onClose}
      title={exercise ? "Editar exercício" : "Novo exercício"}
      footer={
        exercise ? (
          <div style={{ display: "flex", gap: 10 }}>
            <ConfirmButton title="Excluir" confirmTitle="Excluir exercício?" onConfirm={onClose} />
            <Button title="Salvar" onClick={onClose} style={{ flex: 1 }} />
          </div>
        ) : (
          <Button title="Adicionar ao treino" onClick={onClose} style={{ width: "100%" }} />
        )
      }
    >
      <TextField label="Nome do exercício" value={name} onChange={setName} placeholder="Ex: Supino Reto" />
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>
        Grupo muscular
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
        {groups.map((g) => (
          <Pill key={g} title={g[0].toUpperCase() + g.slice(1)} active={muscle === g} color="#EF4444" onClick={() => setMuscle(g)} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <div style={{ flex: 1 }}>
          <TextField label="Séries" value={sets} onChange={setSets} type="number" />
        </div>
        <div style={{ flex: 1 }}>
          <TextField label="Repetições" value={reps} onChange={setReps} placeholder="8-10" />
        </div>
      </div>
      <TextField label="Vídeo de demonstração (opcional)" placeholder="URL do YouTube" />
    </FullScreen>
  );
}
