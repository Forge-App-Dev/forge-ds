// TreinoHojeScreen — faithful recreation of src/screens/treino/TodayTab.jsx
// (abbreviated: today's workout card, week row, reminder banner).
function TreinoHojeScreen({ onContinueWorkout, onEditWorkout }) {
  const { Icon, Button } = window.ForgeDesignSystem_7731a5;
  const ACCENT = "var(--forge-accent)";
  const workout = { name: "Peito & Tríceps", tag: "A", items: 6, accent: ACCENT };
  const setsDone = 3, setsTotal = 18;
  const pct = setsDone / setsTotal;

  const week = [
    { day: "SEG", tag: "A", name: "Peito & Tríceps", exos: 6, today: false, done: true },
    { day: "TER", tag: "B", name: "Costas & Bíceps", exos: 7, today: true, done: false },
    { day: "QUA", tag: null, name: "Descanso", exos: 0, today: false, done: false },
    { day: "QUI", tag: "C", name: "Pernas", exos: 8, today: false, done: false },
    { day: "SEX", tag: "A", name: "Peito & Tríceps", exos: 6, today: false, done: false },
  ];

  return (
    <div style={{ padding: "8px 20px 24px", maxWidth: 480, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 4 }}>
        <div>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--forge-text-faint)", marginBottom: 4 }}>Treino</div>
          <div style={{ fontFamily: "var(--font-title)", fontSize: 32, textTransform: "uppercase", color: "var(--forge-text)", lineHeight: "34px" }}>Hoje</div>
        </div>
      </div>
      <div style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--forge-text-faint)", fontFamily: "var(--font-body)", fontWeight: 700, marginTop: 4, marginBottom: 14 }}>
        Terça · treino de hoje
      </div>

      {/* today card */}
      <div style={{ display: "flex", backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: "var(--radius-card)", overflow: "hidden", marginBottom: 14 }}>
        <div style={{ width: 4, backgroundColor: workout.accent, flexShrink: 0 }} />
        <div style={{ flex: 1, padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 0, paddingRight: 10 }}>
              <div style={{ display: "inline-block", backgroundColor: workout.accent, borderRadius: 6, padding: "3px 11px" }}>
                <span style={{ color: "var(--forge-on-accent)", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>{workout.tag}</span>
              </div>
              <div style={{ fontFamily: "var(--font-title)", fontSize: 34, lineHeight: "36px", marginTop: 12, textTransform: "uppercase", color: "var(--forge-text)" }}>{workout.name}</div>
              <div style={{ color: "#8a8a92", fontSize: 14, marginTop: 6, fontFamily: "var(--font-body)" }}>{workout.items} exercícios · {setsDone}/{setsTotal} séries</div>
            </div>
            <Ring size={100} stroke={11} progress={pct} color={workout.accent}>
              <span style={{ fontSize: 24, fontFamily: "var(--font-title)", color: "var(--forge-text)" }}>{Math.round(pct * 100)}<span style={{ fontSize: 13 }}>%</span></span>
            </Ring>
          </div>
          <Button title="Continuar treino  →" color={workout.accent} resolvedColor={workout.accent} style={{ marginTop: 18, width: "100%" }} onClick={onContinueWorkout} />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1px dashed #3a3a42", borderRadius: 12, padding: 13, marginBottom: 28, cursor: "pointer" }}>
        <Icon name="swap" color="#b0b0b8" size={17} />
        <span style={{ color: "#b0b0b8", fontSize: 14, fontFamily: "var(--font-body)", fontWeight: 700 }}>Fazer outro treino hoje</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--forge-text-faint)", fontFamily: "var(--font-body)", fontWeight: 700 }}>Sua semana</span>
        <div onClick={onEditWorkout} style={{ display: "flex", alignItems: "center", gap: 6, border: "1px solid var(--forge-border-input)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
          <Icon name="calendar" color="#b0b0b8" size={14} />
          <span style={{ color: "#b0b0b8", fontSize: 12, fontFamily: "var(--font-body)", fontWeight: 700 }}>Editar agenda</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
        {week.map((w) => (
          <div key={w.day} style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "var(--forge-surface)", border: `1px solid ${w.today ? workout.accent : "var(--forge-border)"}`, borderRadius: 12, padding: 12, opacity: w.today ? 1 : 0.72 }}>
            <span style={{ width: 40, fontSize: 11, fontFamily: "var(--font-body)", fontWeight: 800, textTransform: "uppercase", color: w.today ? "var(--forge-text)" : "var(--forge-text-faint)" }}>{w.day}</span>
            {w.tag ? (
              <>
                <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: workout.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "var(--forge-on-accent)", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13 }}>{w.tag}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "var(--forge-text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15 }}>{w.name}</div>
                  <div style={{ color: "var(--forge-text-dim)", fontSize: 12, fontFamily: "var(--font-body)" }}>{w.today ? "Hoje " : ""}{w.exos} exercícios</div>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: 34, height: 34, borderRadius: 8, backgroundColor: "var(--forge-surface-raised)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="moon" color="#4a4a52" size={16} />
                </div>
                <span style={{ flex: 1, color: "var(--forge-text-faint)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15 }}>Descanso</span>
              </>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: 18, borderRadius: 14, border: "1px solid #3a2f1f", backgroundColor: "#1a1610" }}>
        <Icon name="warn" color={ACCENT} size={18} />
        <div style={{ flex: 1, fontSize: 13, color: "#c9b896", lineHeight: "20px", fontFamily: "var(--font-body)" }}>
          <span style={{ color: ACCENT, fontFamily: "var(--font-body)", fontWeight: 700 }}>Lembrete do programa. </span>
          Rode por 8–10 semanas antes de reavaliar. Qualidade de execução vale mais que quantidade.
        </div>
      </div>
    </div>
  );
}

function Ring({ size, stroke, progress, color, children }) {
  const { Ring: DSRing } = window.ForgeDesignSystem_7731a5;
  return <DSRing size={size} stroke={stroke} progress={progress} color={color}>{children}</DSRing>;
}
