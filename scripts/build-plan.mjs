// Forge DS — gerador do dashboard do plano tático.
// Fonte única: docs/plan/plan.json. Fontes embutidas: scripts/plan.fonts.css.
// Gera docs/plan/index.html (NÃO editar à mão — editar plan.json e rodar
// `npm run build:plan`). Ver docs/plan/README.md.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const plan = JSON.parse(fs.readFileSync(path.join(ROOT, "docs", "plan", "plan.json"), "utf8"));
const fontsPath = path.join(ROOT, "scripts", "plan.fonts.css");
const fonts = fs.existsSync(fontsPath) ? fs.readFileSync(fontsPath, "utf8") : "/* fonts.css ausente — rode scripts/fetch-fonts se preciso */";

const CSS = `
${fonts}
:root{
  --bg:#0B0F19; --surface:#141B29; --surface-2:#10151F; --raised:#1A2231;
  --border:#262F40; --border-strong:#37425A;
  --text:#ECEEF3; --text-muted:#9AA0AD; --text-faint:#6E7482;
  --accent:#F05252; --accent-ink:#0B0F19; --brand:#EF4444;
  --sev-def:#F0575C; --sev-reg:#F7913D; --sev-inc:#E8B32E; --sev-opo:#5B9BF0; --sev-exc:#24C08A;
  --good:#24C08A;
  --shadow:0 1px 2px rgba(0,0,0,.3),0 12px 32px -16px rgba(0,0,0,.6);
  --body:"Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --display:"Barlow Condensed","Inter",ui-sans-serif,system-ui,sans-serif;
  --mono:ui-monospace,"SF Mono","Cascadia Code",Menlo,Consolas,monospace;
  --maxw:1080px;
}
:root[data-theme="light"]{
  --bg:#F5F4F1; --surface:#FFFFFF; --surface-2:#FAF9F6; --raised:#FFFFFF;
  --border:#E4E1DA; --border-strong:#D3CFC6;
  --text:#1A1C22; --text-muted:#5E606A; --text-faint:#8A8C94;
  --accent:#D93A3A; --accent-ink:#FFFFFF; --brand:#EF4444;
  --sev-def:#D93A3A; --sev-reg:#E4670F; --sev-inc:#B98700; --sev-opo:#2E6FD6; --sev-exc:#0E9E6E;
  --good:#0E9E6E; --shadow:0 1px 2px rgba(20,20,30,.06),0 8px 24px -12px rgba(20,20,30,.12);
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:var(--body);line-height:1.6;font-size:15.5px;-webkit-font-smoothing:antialiased}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px}
h1,h2,h3,h4{line-height:1.15;text-wrap:balance;margin:0}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
code,.mono{font-family:var(--mono);font-size:.86em}
.kick{font-family:var(--display);font-size:13px;text-transform:uppercase;letter-spacing:.16em;font-weight:600;color:var(--text-faint)}
p{margin:.6em 0}
::selection{background:var(--brand);color:#fff}
header.top{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.top .wrap{display:flex;align-items:center;gap:16px;height:60px}
.brandmark{display:flex;align-items:center;gap:9px;font-family:var(--display);font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:21px}
.brandmark .f{color:var(--brand)}
.top .grow{flex:1}
.miniprog{display:flex;align-items:center;gap:9px;font-size:12.5px;color:var(--text-muted)}
.miniprog .bar{width:120px;height:6px;border-radius:99px;background:var(--border);overflow:hidden}
.miniprog .bar i{display:block;height:100%;background:var(--good);width:0;transition:width .4s ease}
.tbtn{appearance:none;border:1px solid var(--border-strong);background:var(--surface);color:var(--text);border-radius:9px;height:34px;padding:0 12px;font:inherit;font-size:13px;cursor:pointer}
.tbtn:hover{border-color:var(--accent)}
nav.anchors{border-bottom:1px solid var(--border);background:var(--surface-2)}
nav.anchors .wrap{display:flex;gap:4px;overflow-x:auto;height:46px;align-items:center}
nav.anchors a{color:var(--text-muted);font-size:13px;font-weight:600;padding:6px 11px;border-radius:8px;white-space:nowrap}
nav.anchors a:hover{background:var(--surface);color:var(--text);text-decoration:none}
.hero{padding:52px 0 28px}
.hero h1{font-family:var(--display);font-size:clamp(34px,6vw,58px);font-weight:700;text-transform:uppercase;letter-spacing:.01em;line-height:.98}
.hero .lede{font-size:18px;color:var(--text-muted);max-width:64ch;margin-top:16px}
.meta-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.tag{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--text-muted);background:var(--surface);border:1px solid var(--border);border-radius:99px;padding:5px 11px}
.tag b{color:var(--text);font-variant-numeric:tabular-nums}
section.blk{padding:30px 0;border-top:1px solid var(--border)}
section.blk>.wrap>.kick{margin-bottom:6px}
h2.sec{font-family:var(--display);font-size:32px;font-weight:700;text-transform:uppercase;letter-spacing:.01em;margin-bottom:4px}
.sub{color:var(--text-muted);max-width:72ch;margin-bottom:22px}
.verdict{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:26px;box-shadow:var(--shadow)}
.scale{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:20px 0 6px}
.scale .stop{border-radius:10px;padding:12px;border:1px solid var(--border);background:var(--surface-2);font-size:12.5px;font-weight:600;color:var(--text-faint);text-align:center;position:relative}
.scale .stop.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--surface));color:var(--text)}
.scale .stop.on::after{content:"◆ atual";position:absolute;top:-9px;left:50%;transform:translateX(-50%);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);background:var(--bg);padding:0 6px;white-space:nowrap}
.scale .stop b{display:block;font-size:15px;color:inherit;font-weight:800;margin-bottom:2px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}
.stat{background:var(--surface);border:1px solid var(--border);border-radius:13px;padding:16px;position:relative;overflow:hidden}
.stat .n{font-family:var(--display);font-size:34px;font-weight:700;font-variant-numeric:tabular-nums;line-height:1}
.stat .l{font-size:12px;color:var(--text-muted);margin-top:6px;font-weight:600}
.stat .stripe{position:absolute;left:0;top:0;bottom:0;width:4px}
.callout{background:var(--surface);border:1px solid var(--border);border-left:4px solid var(--accent);border-radius:12px;padding:18px 20px;box-shadow:var(--shadow)}
.callout.good{border-left-color:var(--good)}
.callout h4{font-size:15px;margin-bottom:6px}
.callout ul{margin:.3em 0;padding-left:1.1em}
.chips-inline{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.sev{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;border-radius:99px;padding:3px 9px 3px 8px;white-space:nowrap;border:1px solid transparent}
.sev .dot{width:8px;height:8px;border-radius:99px;flex:none}
.sev-def{color:var(--sev-def);background:color-mix(in srgb,var(--sev-def) 13%,transparent);border-color:color-mix(in srgb,var(--sev-def) 30%,transparent)}.sev-def .dot{background:var(--sev-def)}
.sev-reg{color:var(--sev-reg);background:color-mix(in srgb,var(--sev-reg) 13%,transparent);border-color:color-mix(in srgb,var(--sev-reg) 30%,transparent)}.sev-reg .dot{background:var(--sev-reg)}
.sev-inc{color:var(--sev-inc);background:color-mix(in srgb,var(--sev-inc) 15%,transparent);border-color:color-mix(in srgb,var(--sev-inc) 32%,transparent)}.sev-inc .dot{background:var(--sev-inc)}
.sev-opo{color:var(--sev-opo);background:color-mix(in srgb,var(--sev-opo) 13%,transparent);border-color:color-mix(in srgb,var(--sev-opo) 30%,transparent)}.sev-opo .dot{background:var(--sev-opo)}
.sev-exc{color:var(--sev-exc);background:color-mix(in srgb,var(--sev-exc) 13%,transparent);border-color:color-mix(in srgb,var(--sev-exc) 30%,transparent)}.sev-exc .dot{background:var(--sev-exc)}
.tablewrap{overflow-x:auto;border:1px solid var(--border);border-radius:12px;background:var(--surface)}
table{border-collapse:collapse;width:100%;font-size:13.5px;min-width:640px}
th,td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--border);vertical-align:top}
th{font-family:var(--display);font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--text-faint);font-weight:600;background:var(--surface-2)}
tr:last-child td{border-bottom:none}
.cls{font-weight:700;white-space:nowrap}
ol.top{counter-reset:t;list-style:none;padding:0;margin:0;display:grid;gap:10px}
ol.top li{counter-increment:t;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:15px 16px 15px 56px;position:relative}
ol.top li::before{content:counter(t,decimal-leading-zero);position:absolute;left:16px;top:13px;font-family:var(--mono);font-size:15px;font-weight:700;color:var(--accent)}
ol.top li b{font-weight:700}
ol.top li span{display:block;color:var(--text-muted);font-size:14px;margin-top:3px}
.toolbar{display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;margin-bottom:16px}
.filters{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.fbtn{appearance:none;border:1px solid var(--border);background:var(--surface);color:var(--text-muted);border-radius:99px;padding:5px 12px;font:inherit;font-size:12.5px;font-weight:600;cursor:pointer}
.fbtn[aria-pressed="true"]{background:var(--text);color:var(--bg);border-color:var(--text)}
.phase{margin-top:24px}
.phase-head{display:flex;align-items:center;gap:14px;margin-bottom:4px;flex-wrap:wrap}
.phase-head h3{font-family:var(--display);font-size:19px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}
.phase-head .pbar{flex:1;height:7px;border-radius:99px;background:var(--border);overflow:hidden;max-width:260px;min-width:120px}
.phase-head .pbar i{display:block;height:100%;background:var(--good);width:0;transition:width .4s ease}
.phase-head .pct{font-size:12px;color:var(--text-muted);font-variant-numeric:tabular-nums;min-width:74px;text-align:right}
.phase-desc{color:var(--text-faint);font-size:13px;margin:0 0 12px}
.tasks{display:grid;gap:10px}
.task{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px 14px 18px;position:relative;display:grid;grid-template-columns:1fr auto;gap:8px 16px;box-shadow:var(--shadow)}
.task::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;border-radius:12px 0 0 12px;background:var(--stripe,var(--border))}
.task[data-sev="def"]{--stripe:var(--sev-def)}.task[data-sev="reg"]{--stripe:var(--sev-reg)}.task[data-sev="inc"]{--stripe:var(--sev-inc)}.task[data-sev="opo"]{--stripe:var(--sev-opo)}
.task.done{opacity:.6}.task.done .t-title{text-decoration:line-through;text-decoration-color:var(--text-faint)}
.task.hidden{display:none}
.t-main{min-width:0}
.t-top{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:4px}
.t-id{font-family:var(--mono);font-size:11.5px;font-weight:700;color:var(--text-faint)}
.t-title{font-weight:700;font-size:15px}
.t-body{font-size:13.5px;color:var(--text-muted);margin-top:2px}
.t-body .ev{font-family:var(--mono);font-size:12px;color:var(--text-faint)}
.t-note{font-size:12.5px;color:var(--good);margin-top:6px;padding-left:10px;border-left:2px solid color-mix(in srgb,var(--good) 45%,transparent)}
.t-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.pill{font-size:11px;font-weight:600;color:var(--text-muted);background:var(--surface-2);border:1px solid var(--border);border-radius:6px;padding:2px 7px}
.pill .k{color:var(--text-faint)}
.t-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px}
.status{border:1px solid var(--border-strong);border-radius:8px;padding:6px 11px;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:7px;background:var(--surface);white-space:nowrap}
.status .sd{width:8px;height:8px;border-radius:99px;background:var(--text-faint)}
.status[data-st="todo"]{color:var(--text-muted)}
.status[data-st="doing"]{color:var(--sev-opo);border-color:color-mix(in srgb,var(--sev-opo) 45%,transparent)}.status[data-st="doing"] .sd{background:var(--sev-opo)}
.status[data-st="done"]{color:var(--good);border-color:color-mix(in srgb,var(--good) 45%,transparent)}.status[data-st="done"] .sd{background:var(--good)}
.status[data-st="blocked"]{color:var(--sev-reg);border-color:color-mix(in srgb,var(--sev-reg) 45%,transparent)}.status[data-st="blocked"] .sd{background:var(--sev-reg)}
.legend{display:flex;flex-wrap:wrap;gap:14px;font-size:12.5px;color:var(--text-muted);margin-top:8px}
.legend span{display:inline-flex;align-items:center;gap:6px}.legend i{width:9px;height:9px;border-radius:99px;display:inline-block}
.delivery{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 18px;margin-bottom:10px}
.delivery .d-top{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
.delivery .d-date{font-family:var(--mono);font-size:12px;color:var(--accent);font-weight:700}
.delivery .d-title{font-weight:700}
.delivery .d-sum{color:var(--text-muted);font-size:13.5px;margin-top:6px}
.delivery .d-tasks{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.delivery .d-tasks .pill{font-family:var(--mono)}
footer{border-top:1px solid var(--border);margin-top:40px;padding:26px 0 60px;color:var(--text-muted);font-size:13px}
.warn{background:color-mix(in srgb,var(--sev-reg) 12%,var(--surface));border:1px solid color-mix(in srgb,var(--sev-reg) 35%,transparent);border-radius:12px;padding:14px 16px;color:var(--text);font-size:13.5px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media (max-width:760px){.grid2{grid-template-columns:1fr}.task{grid-template-columns:1fr}.t-side{flex-direction:row}.scale{grid-template-columns:1fr 1fr}}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
`;

const BODY = `
<header class="top"><div class="wrap">
  <div class="brandmark"><span class="f">◆</span> Forge DS · Plano</div>
  <div class="grow"></div>
  <div class="miniprog" title="Tarefas concluídas"><span id="mp-txt">0 / 0</span><span class="bar"><i id="mp-bar"></i></span></div>
  <button class="tbtn" id="themeBtn" aria-label="Alternar tema">◑ Tema</button>
</div></header>
<nav class="anchors"><div class="wrap">
  <a href="#veredito">Veredito</a><a href="#rota">Rota</a><a href="#sumario">Sumário</a>
  <a href="#entregas">Entregas</a><a href="#comparacao">Vs. auditoria</a><a href="#top10">Top 10</a>
  <a href="#plano">Plano</a><a href="#preservar">Preservar</a>
</div></nav>
<div class="wrap hero">
  <div class="kick">Design System Readiness Review · Parecer + plano vivo</div>
  <h1 id="h-title"></h1>
  <p class="lede">Revisão independente de 12 especialistas do <span class="mono">Forge-App-Dev/forge-ds</span>, com um plano de correção operável — atualizado a cada entrega, direto do repositório.</p>
  <div class="meta-row" id="metaRow"></div>
</div>

<section class="blk" id="veredito"><div class="wrap">
  <div class="kick">Veredito de prontidão para 1.0</div>
  <h2 class="sec">Está parcialmente pronto</h2>
  <div class="verdict">
    <div class="scale">
      <div class="stop"><b>Não pronto</b>Fundação incompleta</div>
      <div class="stop on"><b>Parcialmente</b>Base sólida, furos reais</div>
      <div class="stop"><b>Praticamente</b>Só polimento</div>
      <div class="stop"><b>Pronto 1.0</b>Publicável</div>
    </div>
    <p>As fundações de um DS de referência existem e várias são boas: pipeline DTCG byte-fiel, <span class="mono">check-drift</span>, cobertura 1:1:1 nos 63 componentes, a11y correta em vários componentes-chave, ADRs opinativos. Um selo 1.0 exige que as <b>alegações sejam verdadeiras</b> e que os fundamentos transversais (contraste, reduced-motion, tipos públicos, escala de tipo/motion) não tenham furos. Corrigível em semanas — mas ainda não é 1.0.</p>
  </div>
</div></section>

<section class="blk" id="rota"><div class="wrap">
  <div class="kick">Decisão estratégica</div>
  <h2 class="sec">Rota escolhida & o que "consumível" significa</h2>
  <p class="sub">O objetivo é usar o <span class="mono">forge-ds</span> ao evoluir o <span class="mono">forge-app</span> (Expo/React Native). "Consumível" = tokens de fonte única + conhecimento para IA/humano + componentes importáveis.</p>
  <div class="grid2">
    <div class="callout"><h4>Níveis de "consumível"</h4><ul>
      <li><b>Tokens de fonte única</b> — o app puxa cor/espaço/tipo/motion do <span class="mono">tokens.json</span> (via <span class="mono">tokens.rn.js</span>).</li>
      <li><b>Conhecimento p/ IA + humano</b> — prompts, guidelines e ADRs orientam o que se constrói.</li>
      <li><b>Componentes importáveis</b> — <span class="mono">import { Button } from "@forge/ds"</span> em RN.</li>
    </ul></div>
    <div class="callout good"><h4>Caminho A — faseado</h4>
      <p style="margin:.2em 0"><b>Agora:</b> <span class="mono">tokens.json</span> como fonte única gerando o theme RN + DS como fonte de conhecimento. <b>Médio prazo:</b> convergir componentes para <b>React Native + react-native-web</b> — o app importa nativamente e o catálogo renderiza o mesmo componente real. Aproveita os componentes RN que já existem no app.</p>
    </div>
  </div>
</div></section>

<section class="blk" id="sumario"><div class="wrap">
  <div class="kick">Sumário quantitativo</div>
  <h2 class="sec">O que a revisão encontrou</h2>
  <p class="sub">Achados classificados viram tarefas. Os 🟢 (excelentes decisões) viram itens a <a href="#preservar">preservar</a>.</p>
  <div class="stats" id="statgrid"></div>
</div></section>

<section class="blk" id="entregas"><div class="wrap">
  <div class="kick">Registro de entregas</div>
  <h2 class="sec">Entregas (lotes)</h2>
  <p class="sub">Cada lote de trabalho atualiza este registro e os status abaixo. Fonte: <span class="mono">docs/plan/plan.json</span>.</p>
  <div id="deliveries"></div>
</div></section>

<section class="blk" id="comparacao"><div class="wrap">
  <div class="kick">Comparação independente</div>
  <h2 class="sec">Recomendações da auditoria anterior — hoje</h2>
  <p class="sub">Classificação técnica após revisão cega das 191 oportunidades + 35 problemas.</p>
  <div class="tablewrap"><table><thead><tr><th>Recomendação anterior</th><th>Situação hoje</th><th>Classificação</th></tr></thead><tbody>
    <tr><td><b>OP-012/P-02</b> index.js + package.json</td><td>Feito</td><td class="cls" style="color:var(--good)">✅ Implementada</td></tr>
    <tr><td><b>OP-124</b> MacroMeter/MetaBar → wrappers de ProgressBar</td><td>Feito e limpo</td><td class="cls" style="color:var(--good)">✅ Implementada</td></tr>
    <tr><td><b>OP-125</b> guard + useId no MiniChart</td><td>Feito</td><td class="cls" style="color:var(--good)">✅ Implementada</td></tr>
    <tr><td><b>OP-001</b> tokens.json DTCG fonte única</td><td>Build byte-fiel + CI; TOKEN_HEX ainda manual</td><td class="cls" style="color:var(--sev-inc)">◐ Parcial</td></tr>
    <tr><td><b>OP-002/P-01</b> DS passa no próprio lint</td><td>Hex resolvido; px cru não (156 literais)</td><td class="cls" style="color:var(--sev-inc)">◐ Diferente</td></tr>
    <tr><td><b>OP-003/P-05</b> a11y estrutural</td><td>Avançou, mas com regressões novas</td><td class="cls" style="color:var(--sev-inc)">◐ Parcial</td></tr>
    <tr><td><b>OP-015/P-21</b> onColor WCAG</td><td>Matemática correta; piso 3:1 fraco</td><td class="cls" style="color:var(--sev-reg)">◐ Discordo do resultado</td></tr>
    <tr><td><b>OP-010/011</b> strings + tema claro provado</td><td>Tema claro REMOVIDO (dark-only); seam de i18n ainda vaza</td><td class="cls" style="color:var(--sev-reg)">↺ Revisto</td></tr>
    <tr><td><b>OP-166</b> lifecycle stable/experimental</td><td>0/63 aplicado</td><td class="cls" style="color:var(--sev-def)">✗ Não implementada</td></tr>
    <tr><td><b>OP-021</b> catálogo publicado</td><td>Publicado, mas cards são mockups</td><td class="cls" style="color:var(--sev-inc)">◐ Diferente</td></tr>
    <tr><td><b>P-03/OP-014</b> drift DS↔app por sourceHash</td><td>ADR-0072 admite que não compara</td><td class="cls" style="color:var(--sev-def)">✗ Não + doc drift</td></tr>
  </tbody></table></div>
</div></section>

<section class="blk" id="top10"><div class="wrap">
  <div class="kick">Prioridade</div>
  <h2 class="sec">As 10 mudanças de maior impacto</h2>
  <ol class="top">
    <li><b>Alvo de plataforma decidido (Caminho A).</b><span>DS web hoje + convergência RN; alegações "Android/iOS: sim" ajustadas. ✔ Lote 1.</span></li>
    <li><b>Reconciliar docs ↔ código.</b><span>Rebaixar toda alegação não-verdadeira a "planejado": tags, ARCHITECTURE, SCALABILITY×ROADMAP, check-drift, contagem.</span></li>
    <li><b>Consertar o contraste.</b><span>onColor com piso 4.5:1; check-oncolor no CI; revisar o brand-lock. (theme-blind já resolvido por dark-only)</span></li>
    <li><b>Acessibilidade de motion + estados.</b><span>reduced-motion nas transições; inert no Accordion; ModuleTabBar navigation; MetaBar/Select nomeados.</span></li>
    <li><b>Defeitos objetivos.</b><span>--text-body; double-fire Checkbox/Switch; foco do SearchField; RestTimer deps; dedup ICON_NAMES.</span></li>
    <li><b>Sincronizar .d.ts com a API real.</b><span>Button/Card à frente; limpar .prompt.md com hex cru.</span></li>
    <li><b>Line-heights sem unidade + escala de tipo.</b><span>Habilitar font-scaling; testar a 1,3–2×.</span></li>
    <li><b>"Adherence" honesto.</b><span>Implementar o contrato no CI ou remover as alegações; estender a px crus.</span></li>
    <li><b>Catálogo acoplado ao componente real + lifecycle.</b><span>Renderizar o .jsx; @status nos 63.</span></li>
    <li><b>Enxugar a manutenção.</b><span>Remover artefatos mortos; repensar a arquitetura de ícones.</span></li>
  </ol>
</div></section>

<section class="blk" id="plano"><div class="wrap">
  <div class="kick">Execução</div>
  <h2 class="sec">Plano tático</h2>
  <p class="sub">Status canônico vindo de <span class="mono">docs/plan/plan.json</span> (atualizado a cada entrega). Filtre por severidade e status.</p>
  <div class="toolbar">
    <div class="filters" id="sevFilters"><span class="kick" style="margin-right:2px">Severidade:</span>
      <button class="fbtn" data-sev="def" aria-pressed="false">Defeito</button>
      <button class="fbtn" data-sev="reg" aria-pressed="false">Regressão</button>
      <button class="fbtn" data-sev="inc" aria-pressed="false">Inconsistência</button>
      <button class="fbtn" data-sev="opo" aria-pressed="false">Oportunidade</button>
    </div>
    <div class="filters" id="stFilters"><span class="kick" style="margin-right:2px">Status:</span>
      <button class="fbtn" data-st="todo" aria-pressed="false">Não iniciado</button>
      <button class="fbtn" data-st="doing" aria-pressed="false">Em andamento</button>
      <button class="fbtn" data-st="done" aria-pressed="false">Concluído</button>
      <button class="fbtn" data-st="blocked" aria-pressed="false">Bloqueado</button>
    </div>
  </div>
  <div class="legend">
    <span><i style="background:var(--sev-def)"></i>Defeito</span><span><i style="background:var(--sev-reg)"></i>Regressão</span>
    <span><i style="background:var(--sev-inc)"></i>Inconsistência</span><span><i style="background:var(--sev-opo)"></i>Oportunidade</span>
  </div>
  <div id="board"></div>
</div></section>

<section class="blk" id="preservar"><div class="wrap">
  <div class="kick">🟢 Excelentes decisões</div>
  <h2 class="sec">Preservar — não regredir</h2>
  <p class="sub">Ao mexer no sistema, manter exatamente como está.</p>
  <div class="chips-inline" id="preserveList"></div>
</div></section>

<footer><div class="wrap">
  <div class="warn"><b>⚠ Segurança:</b> um GitHub PAT foi exposto em texto puro na conversa que gerou este parecer. Revogue/rotacione em GitHub → Settings → Developer settings → Tokens.</div>
  <p style="margin-top:16px"><b>Como este documento se mantém.</b> Fonte única: <span class="mono">docs/plan/plan.json</span>. Uma IA (ou você) atualiza o status/nota de cada tarefa lá, roda <span class="mono">npm run build:plan</span>, e este HTML é regenerado. O <span class="mono">check-drift</span> do CI garante que o HTML nunca fica dessincronizado do JSON. Guia de handoff: <span class="mono">docs/plan/README.md</span>.</p>
</div></footer>
`;

const JS = `
(function(){
  "use strict";
  var PLAN = __PLAN_DATA__;
  var root=document.documentElement;
  try{var st=localStorage.getItem("forge-theme"); if(st)root.setAttribute("data-theme",st);}catch(e){}
  document.getElementById("themeBtn").addEventListener("click",function(){
    var cur=root.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
    var next=cur==="dark"?"light":"dark"; root.setAttribute("data-theme",next);
    try{localStorage.setItem("forge-theme",next);}catch(e){}
  });
  var SEV={def:"Defeito",reg:"Regressão",inc:"Inconsistência",opo:"Oportunidade"};
  var SEVCLS={def:"sev-def",reg:"sev-reg",inc:"sev-inc",opo:"sev-opo"};
  var EF={B:"Baixo",M:"Médio",A:"Alto"};
  var STLABEL={todo:"Não iniciado",doing:"Em andamento",done:"Concluído",blocked:"Bloqueado"};
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  var filters={sev:{},st:{}};

  document.getElementById("h-title").textContent=PLAN.meta.title;
  document.getElementById("metaRow").innerHTML=
    tag("Commit",PLAN.meta.commit)+tag("Versão",PLAN.meta.version)+tag("Componentes",PLAN.meta.components)+
    tag("ADRs",PLAN.meta.adrs)+tag("Tarefas",PLAN.tasks.length)+tag("Atualizado",PLAN.meta.updatedAt)+tag("Rota",PLAN.meta.route.split("—")[0].trim());
  function tag(k,v){return '<span class="tag">'+k+' <b>'+esc(v)+'</b></span>';}

  var counts={def:0,reg:0,inc:0,opo:0};
  PLAN.tasks.forEach(function(t){counts[t.sev]=(counts[t.sev]||0)+1;});
  var done=PLAN.tasks.filter(function(t){return t.status==="done";}).length;
  document.getElementById("statgrid").innerHTML=[
    {n:done+" / "+PLAN.tasks.length,l:"Tarefas concluídas",c:"var(--good)"},
    {n:counts.def,l:"🔴 Defeitos",c:"var(--sev-def)"},
    {n:counts.reg,l:"🟠 Regressões",c:"var(--sev-reg)"},
    {n:counts.inc,l:"🟡 Inconsistências",c:"var(--sev-inc)"},
    {n:counts.opo,l:"🔵 Oportunidades",c:"var(--sev-opo)"},
    {n:PLAN.preserve.length,l:"🟢 A preservar",c:"var(--sev-exc)"}
  ].map(function(c){return '<div class="stat"><span class="stripe" style="background:'+c.c+'"></span><div class="n">'+c.n+'</div><div class="l">'+c.l+'</div></div>';}).join("");

  document.getElementById("deliveries").innerHTML=(PLAN.deliveries||[]).map(function(d){
    return '<div class="delivery"><div class="d-top"><span class="d-date">'+esc(d.date)+'</span><span class="d-title">'+esc(d.title)+'</span></div>'+
      '<div class="d-sum">'+esc(d.summary)+'</div>'+
      '<div class="d-tasks">'+(d.tasks||[]).map(function(id){return '<span class="pill">'+esc(id)+'</span>';}).join("")+'</div></div>';
  }).join("")||'<p class="sub">Sem entregas ainda.</p>';

  document.getElementById("preserveList").innerHTML=PLAN.preserve.map(function(p){
    return '<span class="sev sev-exc"><span class="dot"></span>'+esc(p)+'</span>';
  }).join("");

  function taskHTML(t){
    return '<div class="task'+(t.status==="done"?" done":"")+'" data-sev="'+t.sev+'" data-st="'+t.status+'">'+
      '<div class="t-main"><div class="t-top"><span class="t-id">'+esc(t.id)+'</span>'+
        '<span class="sev '+SEVCLS[t.sev]+'"><span class="dot"></span>'+SEV[t.sev]+'</span>'+
        '<span class="t-title">'+esc(t.title)+'</span></div>'+
        '<div class="t-body">'+esc(t.action)+' <span class="ev">· '+esc(t.ev)+'</span></div>'+
        (t.note?'<div class="t-note">'+esc(t.note)+'</div>':'')+
        '<div class="t-meta"><span class="pill"><span class="k">esforço</span> '+(EF[t.effort]||t.effort)+'</span><span class="pill"><span class="k">frente</span> '+esc(t.phase)+'</span></div>'+
      '</div>'+
      '<div class="t-side"><span class="status" data-st="'+t.status+'"><span class="sd"></span>'+STLABEL[t.status]+'</span></div>'+
    '</div>';
  }
  function render(){
    var board=document.getElementById("board"),html="";
    PLAN.phases.forEach(function(p){
      var items=PLAN.tasks.filter(function(t){return t.phase===p.id;});
      var d=items.filter(function(t){return t.status==="done";}).length;
      var pct=items.length?Math.round(d/items.length*100):0;
      html+='<div class="phase" data-phase="'+p.id+'"><div class="phase-head"><h3>'+esc(p.name)+'</h3>'+
        '<span class="pbar"><i style="width:'+pct+'%"></i></span><span class="pct">'+d+'/'+items.length+' · '+pct+'%</span></div>'+
        '<p class="phase-desc">'+esc(p.desc)+'</p><div class="tasks">'+items.map(taskHTML).join("")+'</div></div>';
    });
    board.innerHTML=html;
    applyFilters();
  }
  function applyFilters(){
    var sevOn=Object.keys(filters.sev).filter(function(k){return filters.sev[k];});
    var stOn=Object.keys(filters.st).filter(function(k){return filters.st[k];});
    document.querySelectorAll(".task").forEach(function(el){
      var ok=(!sevOn.length||sevOn.indexOf(el.getAttribute("data-sev"))>=0)&&(!stOn.length||stOn.indexOf(el.getAttribute("data-st"))>=0);
      el.classList.toggle("hidden",!ok);
    });
    document.querySelectorAll(".phase").forEach(function(ph){ph.style.display=ph.querySelectorAll(".task:not(.hidden)").length?"":"none";});
  }
  document.querySelectorAll("#sevFilters .fbtn").forEach(function(b){b.addEventListener("click",function(){var s=b.getAttribute("data-sev");filters.sev[s]=!filters.sev[s];b.setAttribute("aria-pressed",filters.sev[s]?"true":"false");applyFilters();});});
  document.querySelectorAll("#stFilters .fbtn").forEach(function(b){b.addEventListener("click",function(){var s=b.getAttribute("data-st");filters.st[s]=!filters.st[s];b.setAttribute("aria-pressed",filters.st[s]?"true":"false");applyFilters();});});

  document.getElementById("mp-txt").textContent=done+" / "+PLAN.tasks.length;
  document.getElementById("mp-bar").style.width=Math.round(done/PLAN.tasks.length*100)+"%";
  render();
})();
`;

const html = "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n<meta charset=\"UTF-8\">\n" +
  "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
  "<title>" + plan.meta.title + "</title>\n<style>" + CSS + "</style>\n</head>\n<body>\n" +
  BODY + "\n<script>\n" + JS.replace("__PLAN_DATA__", JSON.stringify(plan)) + "\n</scr" + "ipt>\n</body>\n</html>\n";

fs.writeFileSync(path.join(ROOT, "docs", "plan", "index.html"), html);
console.log("build-plan: docs/plan/index.html gerado —", plan.tasks.length, "tarefas,",
  plan.tasks.filter(function (t) { return t.status === "done"; }).length, "concluídas.");
