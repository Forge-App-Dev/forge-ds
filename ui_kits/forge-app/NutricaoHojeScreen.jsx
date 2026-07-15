// NutricaoHojeScreen — faithful recreation of src/screens/nutricao/HojeTab.jsx
// (abbreviated: kcal ring + macro meters, meal list with items).
function NutricaoHojeScreen({ onAdjust, onEditMeal }) {
  const { Ring, MacroMeter, Button } = window.ForgeDesignSystem_7731a5;
  const NG = "var(--forge-nutrition)";
  const totals = { kcal: 1680, p: 92, c: 180, f: 40 };
  const target = { kcal: 2400, proteinG: 150, carbG: 260, fatG: 70 };
  const meals = [
    { name: "Café da manhã", kcal: 420, p: 28, c: 45, f: 12, items: [["Ovos mexidos", "3 un"], ["Pão integral", "2 fatias"], ["Café com leite", "200 ml"]] },
    { name: "Almoço", kcal: 780, p: 48, c: 85, f: 18, items: [["Peito de frango grelhado", "180 g"], ["Arroz integral", "150 g"], ["Feijão", "100 g"], ["Salada verde", "à vontade"]] },
  ];

  return (
    <div style={{ padding: "8px 20px 24px", maxWidth: 480, margin: "0 auto", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--forge-text-faint)", marginBottom: 4 }}>
            Terça · 11/07/2026
          </div>
          <div style={{ fontFamily: "var(--forge-font-title)", fontSize: 32, textTransform: "uppercase", color: "var(--forge-text)", lineHeight: "34px" }}>Hoje</div>
        </div>
        <Button small title="Ajustar" color={NG} resolvedColor={NG} onClick={onAdjust} />
      </div>

      <div style={{ backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: "var(--forge-radius-card)", padding: 16, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Ring size={110} stroke={11} progress={totals.kcal / target.kcal} color={NG}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--forge-font-title)", fontSize: 26, color: "var(--forge-text)" }}>{totals.kcal}</div>
              <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 10, color: "var(--forge-text-dim)" }}>/ {target.kcal} kcal</div>
            </div>
          </Ring>
          <div style={{ flex: 1 }}>
            <MacroMeter label="Proteína" color="var(--forge-macro-protein)" value={totals.p} target={target.proteinG} />
            <MacroMeter label="Carbo" color="var(--forge-macro-carb)" value={totals.c} target={target.carbG} />
            <MacroMeter label="Gordura" color="var(--forge-macro-fat)" value={totals.f} target={target.fatG} />
          </div>
        </div>
      </div>

      <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, marginTop: 14, marginBottom: 8 }}>
        Café da manhã
      </div>
      {meals.slice(0, 1).map((meal, idx) => (
        <MealCard key={idx} meal={meal} onEdit={onEditMeal} />
      ))}
      <div style={{ fontFamily: "var(--forge-font-body)", fontWeight: 700, fontSize: 11.5, color: "var(--forge-text-faint)", textTransform: "uppercase", letterSpacing: 1, marginTop: 14, marginBottom: 8 }}>
        Almoço
      </div>
      {meals.slice(1, 2).map((meal, idx) => (
        <MealCard key={idx} meal={meal} defaultOpen onEdit={onEditMeal} />
      ))}
    </div>
  );
}

function MealCard({ meal, defaultOpen = false, onEdit }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const { Icon } = window.ForgeDesignSystem_7731a5;
  return (
    <div onClick={() => setOpen(!open)} style={{ backgroundColor: "var(--forge-surface)", border: "1px solid var(--forge-border)", borderRadius: "var(--forge-radius-card)", padding: 16, marginBottom: 10, cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "var(--forge-text)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 14 }}>{meal.name}</div>
          <div style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontSize: 12, marginTop: 2 }}>{meal.kcal} kcal · P {meal.p} · C {meal.c} · G {meal.f}</div>
        </div>
        {onEdit ? (
          <button onClick={(e) => { e.stopPropagation(); onEdit(meal); }} style={{ background: "none", border: "none", padding: 4, cursor: "pointer" }}>
            <Icon name="pencil" color="var(--forge-text-dimmer)" size={14} />
          </button>
        ) : null}
        <span style={{ color: "var(--forge-text-dim)", fontSize: 13 }}>{open ? "▴" : "▾"}</span>
      </div>
      {open ? (
        <div style={{ marginTop: 8 }}>
          {meal.items.map(([name, qty], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 8, padding: "4px 0" }}>
              <span style={{ color: "var(--forge-text-muted)", fontFamily: "var(--forge-font-body)", fontSize: 12.5, flex: 1, minWidth: 0 }}>{name}</span>
              <span style={{ color: "var(--forge-text-dim)", fontFamily: "var(--forge-font-body)", fontWeight: 600, fontSize: 12 }}>{qty}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
