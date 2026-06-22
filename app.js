const ICONS = {
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l2-7 4 14 3-9 2 4h4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z"/><path d="M4 19.5A2.5 2.5 0 006.5 22H20v-3"/></svg>',
  checklist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>',
  run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="13" cy="4" r="1"/><path d="M4 17l3.5-2 2-4 4 1 3 5 3.5 1.5M9 11l1-4 4-1"/></svg>',
  notebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z"/><path d="M9 7h7M9 11h7"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.2 1 2.1v.2h6v-.2c0-.9.4-1.6 1-2.1A7 7 0 0012 2z"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
  dash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
  analytics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V10M11 19V5M18 19v-7"/><circle cx="4" cy="7" r="1.4" fill="currentColor" stroke="none"/><circle cx="11" cy="3" r="1.4" fill="currentColor" stroke="none"/><circle cx="18" cy="9" r="1.4" fill="currentColor" stroke="none"/></svg>'
};

const MODULES = [
  { id: "inicio", label: "Painel geral", icon: "pulse", active: true, section: "main" },
  { id: "analises", label: "Análises gerais", icon: "analytics", active: true, section: "main" },
  { id: "sono", label: "Sono", icon: "moon", active: true, section: "modules" },
  { id: "celular", label: "Uso do celular", icon: "phone", active: true, section: "modules" },
  { id: "leituras", label: "Leituras", icon: "book", active: true, section: "modules" },
  { id: "habitos", label: "Hábitos diários", icon: "checklist", active: false, section: "modules" },
  { id: "momentos", label: "Momentos diários", icon: "photo", active: false, section: "modules" },
  { id: "proposito", label: "Propósito de vida", icon: "compass", active: false, section: "modules" },
  { id: "exercicios", label: "Exercícios físicos", icon: "run", active: false, section: "modules" },
  { id: "anotacoes", label: "Anotações", icon: "notebook", active: false, section: "modules" },
  { id: "agenda", label: "Agenda", icon: "calendar", active: false, section: "modules" }
];

let state = {
  view: "inicio",
  registrosSono: [],
  registrosCelular: [],
  livros: [],
  parametros: { metaHorasSono: 7.5, horaDormirIdeal: "22:30", horaAcordarIdeal: "06:00", metaCelularHoras: 2 },
  sonoView: { tipo: "mes", offset: 0, dataInicio: null, dataFim: null },
  loaded: false
};

async function loadData(){
  try {
    let parametrosSalvos = await DB.getParametros();

    const sonoJaCarregado = parametrosSalvos && parametrosSalvos.carga_sono_feita;
    const celularJaCarregado = parametrosSalvos && parametrosSalvos.carga_celular_feita;
    const livrosJaCarregado = parametrosSalvos && parametrosSalvos.carga_livros_feita;

    if (!sonoJaCarregado) {
      const contagem = await DB.contarRegistros();
      if (contagem.sono === 0) {
        const sonoInicial = SONO_IMPORT.map(function(a){
          const horasNaCama = a[4], horasSonoReal = a[5], horasRem = a[6], horasFundo = a[7];
          return {
            grupoData: a[0], data: a[0], tipo: "noite",
            scoreOriginal: a[1], dormiu: a[2], acordou: a[3],
            horasNaCama: horasNaCama, horasSonoReal: horasSonoReal,
            horasRem: horasRem, horasFundo: horasFundo,
            pctRem: (horasRem!==null && horasSonoReal) ? Math.round((horasRem/horasSonoReal)*1000)/10 : null,
            pctFundo: (horasFundo!==null && horasSonoReal) ? Math.round((horasFundo/horasSonoReal)*1000)/10 : null,
            notas: "", importado: true
          };
        });
        const ok = await DB.bulkInsertSono(sonoInicial);
        if (ok) await DB.setParametro("carga_sono_feita", true);
      } else {
        await DB.setParametro("carga_sono_feita", true);
      }
    }

    if (!celularJaCarregado) {
      const contagem = await DB.contarRegistros();
      if (contagem.celular === 0) {
        const celularInicial = CELULAR_IMPORT.map(function(a){
          return { semana: a[0], periodo: a[1], mediaDiaria: a[2], totalSemanal: a[3], importado: true };
        });
        const ok = await DB.bulkInsertCelular(celularInicial);
        if (ok) await DB.setParametro("carga_celular_feita", true);
      } else {
        await DB.setParametro("carga_celular_feita", true);
      }
    }

    if (!livrosJaCarregado) {
      const contagem = await DB.contarRegistros();
      if (contagem.livros === 0) {
        const livrosInicial = LIVROS_IMPORT.map(function(a){
          return { titulo: a[0], paginas: a[1], horasLeitura: a[2], status: "concluido", importado: true };
        });
        const ok = await DB.bulkInsertLivros(livrosInicial);
        if (ok) await DB.setParametro("carga_livros_feita", true);
      } else {
        await DB.setParametro("carga_livros_feita", true);
      }
    }

    parametrosSalvos = await DB.getParametros();
    if (parametrosSalvos && parametrosSalvos.gerais) {
      state.parametros = Object.assign({}, state.parametros, parametrosSalvos.gerais);
    }

    const [sono, celular, livros] = await Promise.all([DB.getSono(), DB.getCelular(), DB.getLivros()]);
    state.registrosSono = sono;
    state.registrosCelular = celular;
    state.livros = livros;
    state.dbOnline = true;
  } catch (e) {
    console.error("Falha ao conectar ao banco de dados:", e);
    state.dbOnline = false;
    state.dbError = true;
  }
  state.loaded = true;
  render();
}

async function saveSono(reg){ return await DB.upsertSono(reg); }
async function deleteSonoRemoto(id){ return await DB.deleteSono(id); }
async function saveCelular(reg){ return await DB.upsertCelular(reg); }
async function saveLivro(livro){ return await DB.upsertLivro(livro); }
async function deleteLivroRemoto(id){ return await DB.deleteLivro(id); }
async function saveParametros(){ return await DB.setParametro("gerais", state.parametros); }

function calcIdade(dataNasc){
  const hoje = new Date();
  const nasc = new Date(dataNasc);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  return idade;
}

function timeToMinutes(t){ if(!t) return null; const [h,m] = t.split(":").map(Number); return h*60+m; }
function calcDuracao(dormiu, acordou){
  if(!dormiu||!acordou) return null;
  let d = timeToMinutes(dormiu), a = timeToMinutes(acordou);
  if (a <= d) a += 24*60;
  return (a-d)/60;
}
function fmtHoras(h){
  if (h===null||h===undefined||isNaN(h)) return "—";
  const horas = Math.floor(h), min = Math.round((h-horas)*60);
  return horas + "h" + (min>0 ? (min<10?"0"+min:min)+"m" : "");
}

function scoreNoite(reg){
  if (reg.scoreOriginal !== null && reg.scoreOriginal !== undefined) return Math.round(reg.scoreOriginal);
  const dur = reg.horasSonoReal || calcDuracao(reg.dormiu, reg.acordou);
  if (!dur) return null;
  let score = 100;
  const meta = state.parametros.metaHorasSono;
  score -= Math.min(Math.abs(dur-meta)*12, 40);
  score -= Math.min((reg.latencia||0)/2, 15);
  score -= Math.min((reg.despertares||0)*6, 18);
  if (reg.qualidade) score += (reg.qualidade-3)*5;
  if (reg.cafeina) score -= 5;
  if (reg.alcool) score -= 8;
  if (reg.telaAntes) score -= 5;
  return Math.max(0, Math.min(100, Math.round(score)));
}

const CATEGORIAS_SONO = [
  { id: "otimo", label: "Sono Ótimo", min: 85, max: 100, color: "#4ED9A0" },
  { id: "bom", label: "Sono Bom", min: 75, max: 84, color: "#4D8FFF" },
  { id: "atencao", label: "Sono Atenção", min: 64, max: 74, color: "#F2D94B" },
  { id: "ruim", label: "Sono Ruim", min: 51, max: 63, color: "#F2A23C" },
  { id: "pessimo", label: "Sono Péssimo", min: 0, max: 50, color: "#F2685B" }
];
function categoriaPorScore(score){
  if (score === null || score === undefined) return null;
  return CATEGORIAS_SONO.find(c => score >= c.min && score <= c.max) || CATEGORIAS_SONO[CATEGORIAS_SONO.length-1];
}

// Agrupa registros de sono por grupoData, somando noite + cochilos
function gruposSonoNoPeriodo(regs){
  const porData = {};
  regs.forEach(function(r){
    const key = r.grupoData || r.data;
    if (!porData[key]) porData[key] = [];
    porData[key].push(r);
  });
  return Object.keys(porData).map(function(data){
    const itens = porData[data].sort((a,b)=> a.tipo==="noite" ? -1 : 1);
    const noite = itens.find(i=>i.tipo==="noite") || itens[0];
    const cochilos = itens.filter(i=>i.tipo==="cochilo");
    const somaTotal = itens.reduce((s,i)=>s+(i.horasNaCama||0),0);
    const somaReal = itens.reduce((s,i)=>s+(i.horasSonoReal||0),0);
    const somaRem = itens.reduce((s,i)=>s+(i.horasRem||0),0);
    const somaFundo = itens.reduce((s,i)=>s+(i.horasFundo||0),0);
    const somaScore = itens.reduce((s,i)=>s+(scoreNoite(i)||0),0);
    return {
      data: data, itens: itens, noite: noite, cochilos: cochilos,
      dormiu: noite ? noite.dormiu : null, acordou: noite ? noite.acordou : null,
      horasNaCama: somaTotal, horasSonoReal: somaReal,
      horasRem: somaRem, horasFundo: somaFundo,
      pctRem: somaReal ? Math.round((somaRem/somaReal)*1000)/10 : null,
      pctFundo: somaReal ? Math.round((somaFundo/somaReal)*1000)/10 : null,
      diferenca: somaTotal - somaReal,
      pctDiferenca: somaTotal ? Math.round(((somaTotal-somaReal)/somaTotal)*1000)/10 : null,
      score: Math.max(0, Math.min(100, Math.round(somaScore))),
      temCochilo: cochilos.length > 0
    };
  }).sort((a,b)=>a.data.localeCompare(b.data));
}

function isoDate(d){ return d.toISOString().slice(0,10); }
function startOfWeek(d){ const r = new Date(d); const day = r.getDay(); r.setDate(r.getDate()-day); r.setHours(0,0,0,0); return r; }
function endOfWeek(d){ const s = startOfWeek(d); const e = new Date(s); e.setDate(e.getDate()+6); return e; }
function startOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }

function capitalizeMonthLabel(s){
  return s.replace(/\b(de)\b/gi, "de").replace(/^./, c=>c.toUpperCase());
}
function getPeriodoAtual(stateKey){
  const key = stateKey || "sonoView";
  const v = state[key] || { tipo: "mes", offset: 0 };
  const hoje = new Date();
  if (v.tipo === "mes") {
    const ref = new Date(hoje.getFullYear(), hoje.getMonth()+v.offset, 1);
    return { start: startOfMonth(ref), end: endOfMonth(ref), label: capitalizeMonthLabel(ref.toLocaleDateString("pt-BR",{month:"long",year:"numeric"})) };
  }
  if (v.tipo === "semana") {
    const ref = new Date(hoje); ref.setDate(ref.getDate()+v.offset*7);
    const s = startOfWeek(ref), e = endOfWeek(ref);
    return { start: s, end: e, label: s.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}) + " a " + e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}) };
  }
  // custom
  const s = v.dataInicio ? new Date(v.dataInicio+"T00:00:00") : startOfMonth(hoje);
  const e = v.dataFim ? new Date(v.dataFim+"T00:00:00") : hoje;
  return { start: s, end: e, label: s.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}) + " a " + e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}) };
}

function regsNoPeriodo(start, end){
  const startIso = isoDate(start), endIso = isoDate(end);
  return state.registrosSono.filter(r => r.data >= startIso && r.data <= endIso);
}

function avg(arr){ const v = arr.filter(x=>x!==null && x!==undefined && !isNaN(x)); return v.length ? v.reduce((a,b)=>a+b,0)/v.length : null; }
function avgTimeOfDay(times, isBedtime){
  let mins = times.filter(t=>t!==null && t!==undefined).map(timeToMinutes);
  if (!mins.length) return null;
  if (isBedtime) mins = mins.map(m => m < 720 ? m + 1440 : m);
  let m = avg(mins);
  m = ((m % 1440) + 1440) % 1440;
  const h = Math.floor(m/60), mm = Math.round(m%60);
  return (h%24<10?"0":"")+(h%24)+":"+(mm<10?"0":"")+mm;
}


function sonoUltimosN(n){ return [...state.registrosSono].sort((a,b)=>a.data.localeCompare(b.data)).slice(-n); }
function mediaHorasSono(regs){
  const vals = regs.map(r=>r.horasSonoReal || calcDuracao(r.dormiu,r.acordou)).filter(v=>v);
  if (!vals.length) return 0;
  return vals.reduce((a,b)=>a+b,0)/vals.length;
}
function desvioPadraoHorario(regs, campo){
  let mins = regs.map(r=>timeToMinutes(r[campo])).filter(v=>v!==null);
  if (mins.length<2) return 0;
  if (campo === "dormiu") {
    mins = mins.map(m => m < 720 ? m + 1440 : m);
  }
  const media = mins.reduce((a,b)=>a+b,0)/mins.length;
  const variancia = mins.reduce((s,m)=>s+Math.pow(m-media,2),0)/mins.length;
  return Math.sqrt(variancia);
}

const REFERENCIA_SONO = {
  remMin: 20, remMax: 25,
  profundoMin: 13, profundoMax: 23
};

function avaliarFaixa(valor, min, max){
  if (valor === null || valor === undefined) return null;
  if (valor < min) return "abaixo";
  if (valor > max) return "acima";
  return "dentro";
}

function gerarDicasSono(){
  const regs = sonoUltimosN(21).filter(r=>r.dormiu);
  if (regs.length<3) return ["Registre ao menos 3 noites para liberar as análises de padrão."];
  const dicas = [];
  const media = mediaHorasSono(regs);
  const meta = state.parametros.metaHorasSono;
  if (media < meta-0.5) dicas.push("Sua média de sono nos últimos dias está " + fmtHoras(meta-media) + " abaixo da meta de " + fmtHoras(meta) + ".");
  const desvDormir = desvioPadraoHorario(regs, "dormiu");
  if (desvDormir > 45) dicas.push("Seu horário de dormir varia bastante (desvio de cerca de " + Math.round(desvDormir) + " min). Fixar o horário de dormir ajuda a consolidar o ciclo circadiano.");
  const comAlcool = regs.filter(r=>r.alcool);
  if (comAlcool.length>=2) dicas.push("Você registrou álcool em " + comAlcool.length + " das últimas " + regs.length + " noites. Isso tende a reduzir a qualidade restaurativa do sono.");
  const baixoScore = regs.filter(r=>scoreNoite(r)<70).length;
  if (baixoScore/regs.length > 0.4) dicas.push("Em " + baixoScore + " das últimas " + regs.length + " noites seu score ficou abaixo de 70. Vale revisar a rotina noturna desses dias.");
  if (dicas.length===0) dicas.push("Seus padrões de sono nos últimos dias estão consistentes com sua meta. Continue assim.");
  return dicas;
}

function parsePeriodo(periodo){
  const partes = periodo.split(" a ");
  function toDate(s){ const [d,m] = s.split("/").map(Number); return new Date(2026, m-1, d); }
  return { start: toDate(partes[0]), end: toDate(partes[1]) };
}
function sonoMedioNaSemana(periodo){
  const { start, end } = parsePeriodo(periodo);
  const vals = [];
  let cur = new Date(start);
  while (cur <= end) {
    const iso = cur.toISOString().slice(0,10);
    const rec = state.registrosSono.find(r=>r.data===iso);
    if (rec) { const h = rec.horasSonoReal || calcDuracao(rec.dormiu, rec.acordou); if (h) vals.push(h); }
    cur.setDate(cur.getDate()+1);
  }
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function scoreMedioNaSemana(periodo){
  const { start, end } = parsePeriodo(periodo);
  const vals = [];
  let cur = new Date(start);
  while (cur <= end) {
    const iso = cur.toISOString().slice(0,10);
    const rec = state.registrosSono.find(r=>r.data===iso);
    if (rec) { const s = scoreNoite(rec); if (s!==null) vals.push(s); }
    cur.setDate(cur.getDate()+1);
  }
  return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : null;
}
function pearsonCorr(pairs){
  const n = pairs.length;
  if (n<3) return null;
  const xs = pairs.map(p=>p[0]), ys = pairs.map(p=>p[1]);
  const mx = xs.reduce((a,b)=>a+b,0)/n, my = ys.reduce((a,b)=>a+b,0)/n;
  const cov = pairs.reduce((s,p)=>s+(p[0]-mx)*(p[1]-my),0);
  const sx = Math.sqrt(xs.reduce((s,x)=>s+(x-mx)*(x-mx),0));
  const sy = Math.sqrt(ys.reduce((s,y)=>s+(y-my)*(y-my),0));
  if (sx===0||sy===0) return null;
  return cov/(sx*sy);
}
function buildCruzamentoSemanal(){
  return [...state.registrosCelular].sort((a,b)=>a.semana-b.semana).map(function(s){
    return { periodo: s.periodo, semana: s.semana, celular: s.mediaDiaria, sono: sonoMedioNaSemana(s.periodo), score: scoreMedioNaSemana(s.periodo) };
  });
}
function interpretarCorrelacao(r){
  if (r===null) return "dados insuficientes ainda";
  const abs = Math.abs(r);
  if (abs < 0.2) return "praticamente nenhuma relação";
  if (abs < 0.4) return "relação fraca";
  if (abs < 0.6) return "relação moderada";
  return "relação forte";
}
function gerarInsightsCruzados(){
  const cruz = buildCruzamentoSemanal().filter(c=>c.sono!==null);
  const insights = [];
  if (cruz.length < 4) {
    insights.push("Ainda faltam dados suficientes cruzando sono e celular para gerar conclusões confiáveis.");
    return { insights, corrSonoCelular: null, corrScoreCelular: null, cruz };
  }
  const corrSC = pearsonCorr(cruz.map(c=>[c.celular, c.sono]));
  const corrScoreC = pearsonCorr(cruz.filter(c=>c.score!==null).map(c=>[c.celular, c.score]));
  if (corrSC !== null) {
    const sinal = corrSC < -0.05 ? "menos horas de sono" : corrSC > 0.05 ? "mais horas de sono" : "nenhuma variação clara nas horas de sono";
    insights.push("Nas " + cruz.length + " semanas com dados de ambos os módulos, mais tempo de celular está associado a " + sinal + " (correlação de " + corrSC.toFixed(2) + ", " + interpretarCorrelacao(corrSC) + "). " + (Math.abs(corrSC) < 0.3 ? "Ou seja, na sua rotina o uso de celular não parece ser o principal fator que afeta a quantidade de sono." : ""));
  }
  if (corrScoreC !== null && Math.abs(corrScoreC) >= 0.3) {
    const direcao = corrScoreC < 0 ? "pior" : "melhor";
    insights.push("Já o score de qualidade do sono mostra uma relação " + interpretarCorrelacao(corrScoreC) + " com o celular: semanas de mais uso tendem a ter " + direcao + " qualidade de sono (correlação " + corrScoreC.toFixed(2) + ").");
  }
  const semanasAltoUso = cruz.filter(c=>c.celular > state.parametros.metaCelularHoras);
  const semanasBaixoUso = cruz.filter(c=>c.celular <= state.parametros.metaCelularHoras);
  if (semanasAltoUso.length>=2 && semanasBaixoUso.length>=2) {
    const mediaAlto = semanasAltoUso.reduce((s,c)=>s+c.sono,0)/semanasAltoUso.length;
    const mediaBaixo = semanasBaixoUso.reduce((s,c)=>s+c.sono,0)/semanasBaixoUso.length;
    const diff = mediaBaixo - mediaAlto;
    if (Math.abs(diff) > 0.2) {
      insights.push("Comparando diretamente: nas semanas em que você ficou acima da meta de celular, dormiu em média " + fmtHoras(mediaAlto) + "; nas semanas dentro da meta, " + fmtHoras(mediaBaixo) + (diff>0 ? " — uma diferença a favor de ficar dentro da meta." : "."));
    }
  }
  const totalHorasLeitura = state.livros.reduce((s,l)=>s+(l.horasLeitura||0),0);
  const mediaCelularGeral = cruz.reduce((s,c)=>s+c.celular,0)/cruz.length;
  if (totalHorasLeitura > 0) {
    const horasCelularNoPeriodo = mediaCelularGeral * 7 * cruz.length;
    const proporcao = totalHorasLeitura / horasCelularNoPeriodo;
    insights.push("No período coberto pelos registros, você passou aproximadamente " + Math.round(horasCelularNoPeriodo) + "h no celular contra " + Math.round(totalHorasLeitura) + "h lendo — a leitura representa cerca de " + Math.round(proporcao*100) + "% do tempo de tela.");
  }
  if (insights.length===0) insights.push("Os dados disponíveis ainda não mostram um padrão claro de relação entre os módulos.");
  return { insights, corrSonoCelular: corrSC, corrScoreCelular: corrScoreC, cruz };
}

function icon(name){ return ICONS[name] || ""; }
function el(html){ const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

function renderSidebar(){
  const idade = calcIdade(PROFILE.nascimento);
  const mainItems = MODULES.filter(m=>m.section==="main");
  const moduleItems = MODULES.filter(m=>m.section==="modules");
  function navItem(m){
    const isActive = state.view === m.id;
    return '<button class="nav-item '+(isActive?'is-active':'')+' '+(!m.active?'is-disabled':'')+'" data-nav="'+m.id+'" '+(!m.active?'disabled':'')+'>'+
      '<span class="nav-icon">'+icon(m.icon)+'</span><span>'+m.label+'</span>'+
      (!m.active?'<span class="nav-soon">em breve</span>':'')+'</button>';
  }
  return '<div class="brand"><div class="brand-mark">CN</div><div><div class="brand-text">Central</div><div class="brand-sub">Qualidade de vida</div></div></div>'+
    '<div class="nav-list">'+ mainItems.map(navItem).join("") + '</div>'+
    '<div class="nav-section-label">Módulos</div>'+
    '<div class="nav-list">'+ moduleItems.map(navItem).join("") + '</div>'+
    '<div class="profile-card"><div class="avatar">CN</div><div><div class="profile-name">'+PROFILE.nome+'</div><div class="profile-meta">'+idade+' anos · '+PROFILE.cidade+'</div></div></div>';
}

function metricCard(label, value, iconName, delta){
  return '<div class="metric-card"><div class="metric-label">'+(iconName?'<span>'+icon(iconName)+'</span>':'')+label+'</div>'+
    '<div class="metric-value">'+value+'</div>'+
    (delta ? '<div class="metric-delta '+delta.type+'">'+icon(delta.type==="up"?"up":delta.type==="down"?"down":"dash")+delta.text+'</div>' : '')+
    '</div>';
}

function field(label, inputHtml){ return '<div class="field"><label class="field-label">'+label+'</label>'+inputHtml+'</div>'; }
function checkboxField(id, label, checked){ return '<label class="checkbox-field"><input type="checkbox" id="'+id+'" '+(checked?'checked':'')+' />'+label+'</label>'; }
function backLink(){ return '<a href="#" class="back-link" id="backLink">'+icon("back")+'<span>Painel geral</span></a>'; }
function tabsHtml(tabs, activeId, dataAttr){
  return '<div class="tabs">'+tabs.map(function(t){ return '<button class="tab-btn '+(activeId===t.id?'is-active':'')+'" data-'+dataAttr+'="'+t.id+'">'+t.label+'</button>'; }).join("")+'</div>';
}

function pulseRing(score){
  const r = 70, c = 2*Math.PI*r;
  const pct = Math.max(0,Math.min(100,score))/100;
  const color = score>=75 ? "#4ED9A0" : score>=50 ? "#F2B84B" : "#F2685B";
  return '<svg viewBox="0 0 168 168" width="168" height="168">'+
    '<circle cx="84" cy="84" r="'+r+'" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="12"/>'+
    '<circle cx="84" cy="84" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="12" stroke-linecap="round" '+
      'stroke-dasharray="'+(c*pct)+' '+c+'" transform="rotate(-90 84 84)"/>'+
    '</svg>';
}

function renderInicio(){
  const sono7 = sonoUltimosN(7).filter(r=>r.horasSonoReal||calcDuracao(r.dormiu,r.acordou));
  const sono14 = sonoUltimosN(14).filter(r=>r.horasSonoReal||calcDuracao(r.dormiu,r.acordou));
  const mediaSono7 = sono7.length ? mediaHorasSono(sono7) : 0;
  const mediaSonoAnt = sono14.length>7 ? mediaHorasSono(sono14.slice(0,sono14.length-7)) : null;
  const celOrdenado = [...state.registrosCelular].sort((a,b)=>a.semana-b.semana);
  const celRecente = celOrdenado.slice(-1)[0];
  const celAnterior = celOrdenado.slice(-2)[0];
  const totalLivros = state.livros.filter(l=>l.titulo).length;
  const livrosLendo = state.livros.filter(l=>l.status==="lendo").length;

  const scoresRecentes = sono7.map(scoreNoite).filter(s=>s!==null);
  const scoreMedioSono = scoresRecentes.length ? scoresRecentes.reduce((a,b)=>a+b,0)/scoresRecentes.length : 50;
  const metaCel = state.parametros.metaCelularHoras;
  const scoreCelular = celRecente ? Math.max(0, Math.min(100, 100 - Math.max(0,(celRecente.mediaDiaria-metaCel))*30)) : 50;
  const scoreLeitura = totalLivros>0 ? Math.min(100, 60 + totalLivros*4) : 40;
  const pulso = Math.round(scoreMedioSono*0.5 + scoreCelular*0.3 + scoreLeitura*0.2);

  let deltaSono = null;
  if (mediaSonoAnt !== null && mediaSonoAnt > 0) {
    const diff = mediaSono7 - mediaSonoAnt;
    deltaSono = { type: diff>0.15?"up":diff<-0.15?"down":"neutral", text: (diff>=0?"+":"")+fmtHoras(Math.abs(diff))+" vs. semana anterior" };
  }
  let deltaCel = null;
  if (celRecente && celAnterior) {
    const diff = celRecente.mediaDiaria - celAnterior.mediaDiaria;
    deltaCel = { type: diff<-0.1?"up":diff>0.1?"down":"neutral", text: (diff>=0?"+":"")+fmtHoras(Math.abs(diff))+" vs. semana anterior" };
  }

  return '<div class="page-header"><div class="page-title">Painel geral</div><div class="page-sub">Resumo da sua semana em sono, celular e leitura</div></div>'+
    '<div class="card pulse-section" style="margin-bottom:24px;">'+
      '<div class="pulse-ring-wrap">'+pulseRing(pulso)+'<div class="pulse-center"><div class="pulse-number">'+pulso+'</div><div class="pulse-caption">pulso da semana</div></div></div>'+
      '<div class="pulse-legend">'+
        '<div class="pulse-legend-item"><div class="pulse-legend-left"><span class="pulse-dot" style="background:#4ED9A0"></span>Sono</div><div class="pulse-legend-value">'+Math.round(scoreMedioSono)+'/100</div></div>'+
        '<div class="pulse-legend-item"><div class="pulse-legend-left"><span class="pulse-dot" style="background:#4D8FFF"></span>Uso de celular</div><div class="pulse-legend-value">'+Math.round(scoreCelular)+'/100</div></div>'+
        '<div class="pulse-legend-item"><div class="pulse-legend-left"><span class="pulse-dot" style="background:#6C63FF"></span>Leitura</div><div class="pulse-legend-value">'+Math.round(scoreLeitura)+'/100</div></div>'+
      '</div>'+
    '</div>'+
    '<div class="grid grid-3" style="margin-bottom:8px;">'+
      metricCard("Sono médio (7 dias)", sono7.length?fmtHoras(mediaSono7):"—", "moon", deltaSono) +
      metricCard("Celular (últ. semana)", celRecente?fmtHoras(celRecente.mediaDiaria)+"/dia":"—", "phone", deltaCel) +
      metricCard("Livros concluídos em 2026", totalLivros, "book", null) +
    '</div>'+
    '<div class="section-title">Módulos</div>'+
    '<div class="grid grid-4">'+ MODULES.filter(m=>m.section==="modules").map(moduleTile).join("") +'</div>';
}

function moduleTile(m){
  const descs = {
    sono: "Registro diário, histórico e análises de qualidade do sono.",
    celular: "Acompanhe seu tempo de tela frente à sua meta.",
    leituras: "Sua lista de livros, ritmo de leitura e progresso.",
    habitos: "Hábitos diários e consistência ao longo do tempo.",
    momentos: "Um painel para registrar momentos do seu dia.",
    proposito: "Reflexões e direção de longo prazo.",
    exercicios: "Futebol, natação, academia e passos diários.",
    anotacoes: "Anotações com assistente para te ajudar a organizar.",
    agenda: "Sua agenda integrada à central."
  };
  return '<button class="module-tile '+(!m.active?'is-disabled':'')+'" data-nav="'+m.id+'" '+(!m.active?'disabled':'')+'>'+
    '<div class="module-tile-icon">'+icon(m.icon)+'</div>'+
    '<div><div class="module-tile-title">'+m.label+'</div><div class="module-tile-desc">'+(descs[m.id]||"")+'</div></div>'+
    (!m.active?'<div class="module-tile-tag">em breve</div>':'')+
    '</button>';
}

function periodNavLabel(){
  const v = state.sonoView;
  if (v.tipo === "custom") return "Período personalizado";
  return v.tipo === "mes" ? "Mês" : "Semana";
}

function renderPeriodSelector(stateKey){
  const key = stateKey || "sonoView";
  const v = state[key];
  const { label } = getPeriodoAtual(key);
  const tipos = [{id:"mes",label:"Mês"},{id:"semana",label:"Semana"},{id:"custom",label:"Período"}];
  let nav = "";
  if (v.tipo !== "custom") {
    nav = '<div style="display:flex;align-items:center;gap:8px;">'+
      '<button class="icon-btn" data-periodoprev="'+key+'" aria-label="Período anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<div style="font-size:13.5px;font-weight:500;min-width:150px;text-align:center;">'+label+'</div>'+
      '<button class="icon-btn" data-periodonext="'+key+'" aria-label="Próximo período"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>'+
      (v.offset !== 0 ? '<button class="btn btn-ghost" data-periodohoje="'+key+'" style="padding:6px 12px;font-size:12px;">Hoje</button>' : '') +
      '</div>';
  } else {
    const di = v.dataInicio || isoDate(startOfMonth(new Date()));
    const df = v.dataFim || isoDate(new Date());
    nav = '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">'+
      '<input type="date" id="custom-data-inicio-'+key+'" value="'+di+'" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 10px;font-size:13px;color:var(--text);" />'+
      '<span style="color:var(--text-faint);font-size:13px;">até</span>'+
      '<input type="date" id="custom-data-fim-'+key+'" value="'+df+'" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 10px;font-size:13px;color:var(--text);" />'+
      '<button class="btn btn-ghost" data-aplicarcustom="'+key+'" style="padding:8px 14px;font-size:12.5px;">Aplicar</button>'+
      '</div>';
  }
  return '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px;">'+
    '<div class="tabs" style="border-bottom:none;margin-bottom:0;">'+
      tipos.map(function(t){ return '<button class="tab-btn '+(v.tipo===t.id?'is-active':'')+'" data-periodotipo="'+key+':'+t.id+'" style="padding:7px 12px;">'+t.label+'</button>'; }).join("")+
    '</div>'+ nav +
  '</div>';
}

function renderDashboardSono(){
  const { start, end } = getPeriodoAtual();
  const regsBrutos = regsNoPeriodo(start, end);
  const grupos = gruposSonoNoPeriodo(regsBrutos);
  if (!grupos.length) {
    return renderPeriodSelector() + '<div class="empty-state">Nenhum registro de sono neste período.</div>';
  }
  const mediaQualidade = avg(grupos.map(g=>g.score));
  const mediaDormiu = avgTimeOfDay(grupos.map(g=>g.dormiu), true);
  const mediaAcordou = avgTimeOfDay(grupos.map(g=>g.acordou), false);
  const mediaTotal = avg(grupos.map(g=>g.horasNaCama));
  const mediaReal = avg(grupos.map(g=>g.horasSonoReal));
  const mediaDif = avg(grupos.map(g=>g.diferenca));
  const mediaPctDif = avg(grupos.map(g=>g.pctDiferenca));
  const mediaRem = avg(grupos.map(g=>g.horasRem));
  const mediaPctRem = avg(grupos.map(g=>g.pctRem));
  const mediaFundo = avg(grupos.map(g=>g.horasFundo));
  const mediaPctFundo = avg(grupos.map(g=>g.pctFundo));

  const counts = {};
  CATEGORIAS_SONO.forEach(c=>counts[c.id]=0);
  grupos.forEach(function(g){ const c = categoriaPorScore(g.score); if (c) counts[c.id]++; });
  const total = grupos.length;

  return renderPeriodSelector() +
    '<div class="grid grid-4" style="margin-bottom:24px;">'+
      metricCard("Qualidade do sono", mediaQualidade!==null?Math.round(mediaQualidade):"—", "moon") +
      metricCard("Horário foi dormir", mediaDormiu||"—") +
      metricCard("Horário acordou", mediaAcordou||"—") +
      metricCard("Sono total", fmtHoras(mediaTotal)) +
      metricCard("Sono real", fmtHoras(mediaReal)) +
      metricCard("Diferença total x real", fmtHoras(mediaDif)+(mediaPctDif!==null?" · "+mediaPctDif.toFixed(1)+"%":"")) +
      metricCard("Sono REM", fmtHoras(mediaRem)) +
      metricCard("% Sono REM", mediaPctRem!==null?mediaPctRem.toFixed(1)+"%":"—") +
      metricCard("Sono profundo", fmtHoras(mediaFundo)) +
      metricCard("% Sono profundo", mediaPctFundo!==null?mediaPctFundo.toFixed(1)+"%":"—") +
    '</div>'+
    '<div class="grid grid-2" style="align-items:start;">'+
      '<div>'+
        '<div class="section-title" style="margin-top:0;">Pontuação por categoria</div>'+
        '<table style="width:100%;border-collapse:collapse;font-size:13px;">'+
          '<thead><tr style="color:var(--text-dim);text-align:left;"><th style="padding:8px 10px;font-weight:500;">Categoria</th><th style="padding:8px 10px;font-weight:500;">Faixa</th><th style="padding:8px 10px;font-weight:500;text-align:right;">Dias</th><th style="padding:8px 10px;font-weight:500;text-align:right;">%</th></tr></thead>'+
          '<tbody>'+ CATEGORIAS_SONO.map(function(c){
            const n = counts[c.id]; const pct = total ? Math.round((n/total)*1000)/10 : 0;
            return '<tr style="border-top:1px solid var(--border);"><td style="padding:8px 10px;"><span style="display:inline-flex;align-items:center;gap:7px;"><span style="width:9px;height:9px;border-radius:50%;background:'+c.color+';display:inline-block;"></span>'+c.label+'</span></td>'+
              '<td style="padding:8px 10px;color:var(--text-dim);font-family:var(--font-mono);">'+c.min+'–'+c.max+'</td>'+
              '<td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);">'+n+'</td>'+
              '<td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);">'+pct+'%</td></tr>';
          }).join("") + '</tbody></table>'+
      '</div>'+
      '<div>'+
        '<div class="section-title" style="margin-top:0;">Distribuição por categoria</div>'+
        '<div class="chart-wrap" style="height:240px;"><canvas id="chartCategoriaSono" role="img" aria-label="Gráfico de percentual de dias por categoria de qualidade do sono"></canvas></div>'+
      '</div>'+
    '</div>';
}

function renderRegistroSonoForm(isCochilo, parentGrupoData){
  const today = new Date().toISOString().slice(0,10);
  const titulo = isCochilo ? '<div class="insight-row" style="margin-bottom:16px;">'+icon("bulb")+'<span>Registrando um cochilo. Os valores serão somados ao sono principal do dia '+(parentGrupoData?new Date(parentGrupoData+"T00:00:00").toLocaleDateString("pt-BR"):"")+'.</span></div>' : '';
  return '<div class="form-grid" data-cochilo="'+(isCochilo?"1":"0")+'" data-grupo="'+(parentGrupoData||"")+'">'+
    titulo +
    field("Data", '<input type="date" id="f-data" value="'+(parentGrupoData||today)+'" '+(isCochilo?'readonly':'')+' />') +
    (isCochilo ? '' : '<div class="form-row">'+field("Fui dormir", '<input type="time" id="f-dormiu" value="22:30" />')+field("Acordei", '<input type="time" id="f-acordou" value="06:00" />')+'</div>') +
    field("Horas de sono total", '<input type="text" id="f-total" placeholder="ex: 8:10" value="8:00" />') +
    field("Horas de sono real", '<input type="text" id="f-real" placeholder="ex: 7:40" value="7:30" />') +
    '<div class="field"><label class="field-label">Diferença total x real</label><div id="f-diferenca-out" style="font-family:var(--font-mono);font-size:13px;color:var(--text-dim);padding:10px 0;">—</div></div>'+
    field("Sono REM", '<input type="text" id="f-rem" placeholder="ex: 1:40" value="1:00" />') +
    field("% de Sono REM", '<div id="f-pctrem-out" style="font-family:var(--font-mono);font-size:13px;color:var(--text-dim);padding:10px 0;">—</div>') +
    field("Sono profundo", '<input type="text" id="f-fundo" placeholder="ex: 0:50" value="0:40" />') +
    field("% de Sono profundo", '<div id="f-pctfundo-out" style="font-family:var(--font-mono);font-size:13px;color:var(--text-dim);padding:10px 0;">—</div>') +
    field("Pontuação do sono (score do smartwatch)", '<input type="number" id="f-score" min="0" max="100" value="80" />') +
    field("Observação", '<textarea id="f-notas" rows="2"></textarea>') +
    '<button class="btn btn-primary" id="btn-salvar-sono">'+icon("check")+' Salvar registro</button>'+
    (!isCochilo ? '<button class="btn btn-ghost" id="btn-add-cochilo" type="button">+ Adicionar cochilo</button>' : '')+
    '<div class="toast" id="msg-salvo-sono" style="display:none;">'+icon("check")+' Registro salvo</div></div>';
}

function parseHM(str){
  if (!str) return null;
  const parts = str.split(":");
  if (parts.length!==2) return null;
  const h = Number(parts[0]), m = Number(parts[1]);
  if (isNaN(h)||isNaN(m)) return null;
  return h + m/60;
}

function renderHistoricoSono(){
  const { start, end } = getPeriodoAtual();
  const grupos = [...gruposSonoNoPeriodo(regsNoPeriodo(start,end))].sort((a,b)=>b.data.localeCompare(a.data));
  if (!grupos.length) return renderPeriodSelector() + '<div class="empty-state">Nenhum registro neste período.</div>';
  return renderPeriodSelector() + grupos.map(function(g){
    const cat = categoriaPorScore(g.score);
    const dataFmt = new Date(g.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});
    const cochiloTag = g.temCochilo ? '<span class="module-tile-tag" style="margin-left:8px;">+'+g.cochilos.length+' cochilo'+(g.cochilos.length>1?"s":"")+'</span>' : '';
    const remInfo = (g.horasRem!==null && g.horasRem>0) ? ' · REM '+fmtHoras(g.horasRem)+(g.pctRem!==null?' ('+g.pctRem.toFixed(1)+'%)':'') : '';
    const fundoInfo = (g.horasFundo!==null && g.horasFundo>0) ? ' · prof. '+fmtHoras(g.horasFundo)+(g.pctFundo!==null?' ('+g.pctFundo.toFixed(1)+'%)':'') : '';
    let html = '<div class="list-row" style="flex-wrap:wrap;"><div class="list-row-main"><div class="list-row-title">'+dataFmt + cochiloTag + '</div>'+
      '<div class="list-row-sub">'+(g.dormiu||"—")+' &rarr; '+(g.acordou||"—")+' · total '+fmtHoras(g.horasNaCama)+' · real '+fmtHoras(g.horasSonoReal)+remInfo+fundoInfo+'</div></div>'+
      '<div class="badge" style="background:'+(cat?cat.color+'22':'')+';color:'+(cat?cat.color:'var(--text-dim)')+';">'+g.score+' · '+(cat?cat.label.replace("Sono ",""):"—")+'</div>'+
      '<button class="icon-btn" data-addnap="'+g.data+'" aria-label="Adicionar cochilo neste dia" title="Adicionar cochilo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></button>'+
      '<button class="icon-btn" data-delsono="'+g.noite.id+'" aria-label="Excluir registro">'+icon("trash")+'</button></div>';
    if (g.cochilos.length) {
      html += g.cochilos.map(function(c){
        const remC = (c.horasRem!==null && c.horasRem>0) ? ' · REM '+fmtHoras(c.horasRem) : '';
        const fundoC = (c.horasFundo!==null && c.horasFundo>0) ? ' · prof. '+fmtHoras(c.horasFundo) : '';
        return '<div class="list-row" style="margin-left:20px;background:transparent;border-style:dashed;opacity:0.85;"><div class="list-row-main">'+
          '<div class="list-row-title" style="font-size:12.5px;font-weight:400;color:var(--text-dim);">Cochilo</div>'+
          '<div class="list-row-sub">total '+fmtHoras(c.horasNaCama)+' · real '+fmtHoras(c.horasSonoReal)+remC+fundoC+' · score +'+(scoreNoite(c)||0)+'</div></div>'+
          '<button class="icon-btn" data-delsono="'+c.id+'" aria-label="Excluir cochilo">'+icon("trash")+'</button></div>';
      }).join("");
    }
    return html;
  }).join("");
}

// ---------- Análises avançadas de sono (filtro de período próprio) ----------

function getSemanaCorrente(){
  const hoje = new Date();
  const diaSemana = hoje.getDay(); // 0=domingo
  const inicio = new Date(hoje);
  inicio.setDate(hoje.getDate() - diaSemana);
  inicio.setHours(0,0,0,0);
  const fim = new Date(inicio);
  fim.setDate(inicio.getDate()+6);
  return { start: inicio, end: fim };
}

function gruposNoIntervalo(start, end){
  return gruposSonoNoPeriodo(regsNoPeriodo(start, end));
}

function analisarRemProfundo(grupos){
  const comRem = grupos.filter(g=>g.pctRem!==null && g.horasSonoReal>0);
  const comFundo = grupos.filter(g=>g.pctFundo!==null && g.horasSonoReal>0);
  const mediaPctRem = comRem.length ? avg(comRem.map(g=>g.pctRem)) : null;
  const mediaPctFundo = comFundo.length ? avg(comFundo.map(g=>g.pctFundo)) : null;
  return {
    mediaPctRem, mediaPctFundo,
    statusRem: avaliarFaixa(mediaPctRem, REFERENCIA_SONO.remMin, REFERENCIA_SONO.remMax),
    statusFundo: avaliarFaixa(mediaPctFundo, REFERENCIA_SONO.profundoMin, REFERENCIA_SONO.profundoMax),
    nDiasComDado: Math.max(comRem.length, comFundo.length)
  };
}

function gerarAnaliseRemProfundoIA(analise){
  const { mediaPctRem, mediaPctFundo, statusRem, statusFundo, nDiasComDado } = analise;
  if (nDiasComDado === 0) {
    return ["Não há dados de REM/sono profundo no período selecionado para essa análise. Esses dados ficam disponíveis a partir de maio, quando seu relógio passou a registrar esse detalhamento."];
  }
  const textos = [];
  textos.push("Referência: organizações de sono recomendam de "+REFERENCIA_SONO.remMin+"% a "+REFERENCIA_SONO.remMax+"% do sono em fase REM, e de "+REFERENCIA_SONO.profundoMin+"% a "+REFERENCIA_SONO.profundoMax+"% em sono profundo, para adultos.");

  if (mediaPctRem !== null) {
    if (statusRem === "dentro") {
      textos.push("Seu REM médio de "+mediaPctRem.toFixed(1)+"% está dentro da faixa recomendada. Isso é positivo para consolidação de memória e processamento emocional.");
    } else if (statusRem === "abaixo") {
      textos.push("Seu REM médio de "+mediaPctRem.toFixed(1)+"% está abaixo da faixa recomendada ("+REFERENCIA_SONO.remMin+"–"+REFERENCIA_SONO.remMax+"%). REM tende a se concentrar na segunda metade da noite, então dormir menos horas ou acordar muito cedo reduz desproporcionalmente essa fase. Álcool e privação de sono também suprimem REM.");
    } else {
      textos.push("Seu REM médio de "+mediaPctRem.toFixed(1)+"% está acima da faixa de referência. Isoladamente isso raramente é um problema, mas pode acompanhar fragmentação do sono ou efeito rebote após períodos de privação.");
    }
  }
  if (mediaPctFundo !== null) {
    if (statusFundo === "dentro") {
      textos.push("Seu sono profundo médio de "+mediaPctFundo.toFixed(1)+"% está dentro da faixa recomendada — bom sinal para recuperação física e imunológica.");
    } else if (statusFundo === "abaixo") {
      textos.push("Seu sono profundo médio de "+mediaPctFundo.toFixed(1)+"% está abaixo da faixa recomendada ("+REFERENCIA_SONO.profundoMin+"–"+REFERENCIA_SONO.profundoMax+"%). Sono profundo se concentra na primeira metade da noite; cafeína à tarde, álcool, telas antes de dormir e estresse antes de deitar tendem a reduzir essa fase. Manter o quarto mais frio e escuro costuma ajudar.");
    } else {
      textos.push("Seu sono profundo médio de "+mediaPctFundo.toFixed(1)+"% está acima da faixa de referência, o que pode ocorrer naturalmente após exercício físico intenso ou como compensação de débito de sono acumulado.");
    }
  }
  return textos;
}

function analisarConstancia(grupos){
  const comHorario = grupos.filter(g=>g.dormiu);
  if (comHorario.length < 3) return null;
  const desvDormir = desvioPadraoHorario(comHorario, "dormiu");
  const desvAcordar = desvioPadraoHorario(comHorario.filter(g=>g.acordou), "acordou");
  return { desvDormir, desvAcordar, n: comHorario.length };
}

function gerarAnaliseConstanciaIA(constancia){
  if (!constancia) return ["Registre ao menos 3 noites com horário de dormir para avaliar sua constância."];
  const { desvDormir, desvAcordar } = constancia;
  const textos = [];
  function classificar(desv){
    if (desv <= 20) return "muito consistente";
    if (desv <= 45) return "razoavelmente consistente";
    if (desv <= 75) return "inconsistente";
    return "bastante irregular";
  }
  textos.push("Seu horário de dormir variou em média "+Math.round(desvDormir)+" minutos no período ("+classificar(desvDormir)+"), e o horário de acordar variou "+Math.round(desvAcordar)+" minutos ("+classificar(desvAcordar)+").");
  if (desvDormir > 45) {
    textos.push("Manter um horário de dormir mais fixo — mesmo nos fins de semana — é uma das formas mais eficazes de estabilizar o ritmo circadiano e melhorar a qualidade geral do sono, geralmente com mais impacto do que apenas aumentar o total de horas dormidas.");
  } else {
    textos.push("Sua consistência de horário está em um nível saudável. Manter essa rotina tende a sustentar a qualidade do sono mesmo em semanas mais cheias.");
  }
  return textos;
}

function gerarResumoSemanaCorrenteIA(){
  const { start, end } = getSemanaCorrente();
  const grupos = gruposNoIntervalo(start, end);
  const fmtData = (d) => d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  const label = fmtData(start)+" a "+fmtData(end);
  if (!grupos.length) {
    return { label, texto: "Você ainda não tem registros de sono nesta semana ("+label+"). Que tal começar registrando a noite de hoje?" };
  }
  const media = avg(grupos.map(g=>g.horasSonoReal));
  const scoreMedia = avg(grupos.map(g=>g.score));
  const cat = categoriaPorScore(Math.round(scoreMedia));
  const meta = state.parametros.metaHorasSono;
  const desv = analisarConstancia(grupos);
  const remProfundo = analisarRemProfundo(grupos);

  let texto = "Na semana de "+label+", você tem "+grupos.length+" noite"+(grupos.length>1?"s":"")+" registrada"+(grupos.length>1?"s":"")+", com média de "+fmtHoras(media)+" de sono real e score médio de "+Math.round(scoreMedia)+" ("+(cat?cat.label:"")+"). ";

  if (media < meta - 0.4) {
    texto += "Isso está "+fmtHoras(meta-media)+" abaixo da sua meta de "+fmtHoras(meta)+". ";
  } else if (media >= meta) {
    texto += "Você está atingindo ou superando sua meta de "+fmtHoras(meta)+". ";
  }
  if (desv && desv.desvDormir > 50) {
    texto += "Seu horário de dormir variou bastante essa semana (~"+Math.round(desv.desvDormir)+" min de desvio). ";
  }
  if (remProfundo.mediaPctRem !== null && remProfundo.statusRem === "abaixo") {
    texto += "Seu REM ficou abaixo do recomendado ("+remProfundo.mediaPctRem.toFixed(1)+"%). ";
  }
  return { label, texto };
}

function renderResumoIASemana(){
  if (state.sonoResumoMinimizado) {
    return '<button id="btn-expandir-resumo" class="insight-row" style="width:100%;text-align:left;cursor:pointer;margin-bottom:18px;">'+icon("bulb")+'<span>Resumo da semana (minimizado) — clique para expandir</span></button>';
  }
  const { label, texto } = gerarResumoSemanaCorrenteIA();
  return '<div class="card" style="margin-bottom:24px;border-color:var(--purple);background:linear-gradient(135deg, rgba(108,99,255,0.08), rgba(77,143,255,0.04));">'+
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">'+
      '<div style="display:flex;gap:10px;">'+
        '<div style="flex-shrink:0;color:var(--purple);margin-top:1px;">'+icon("bulb")+'</div>'+
        '<div><p style="font-size:12px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px;">Resumo da semana · '+label+'</p>'+
        '<p style="font-size:13.5px;line-height:1.6;margin:0;">'+texto+'</p></div>'+
      '</div>'+
      '<button id="btn-minimizar-resumo" class="icon-btn" aria-label="Minimizar" title="Minimizar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg></button>'+
    '</div></div>';
}

function renderAnaliseSono(){
  if (!state.analiseView) state.analiseView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null };
  const { start, end } = getPeriodoAtual("analiseView");

  const grupos = gruposNoIntervalo(start, end).filter(g=>g.horasSonoReal>0);
  const resumoIA = renderResumoIASemana();

  if (!grupos.length) {
    return resumoIA + renderPeriodSelector("analiseView") + '<div class="empty-state">Nenhum registro de sono no período selecionado.</div>';
  }

  const media = avg(grupos.map(g=>g.horasSonoReal));
  const scoreMedia = avg(grupos.map(g=>g.score));
  const remProfundo = analisarRemProfundo(grupos);
  const constancia = analisarConstancia(grupos);

  const dicasRem = gerarAnaliseRemProfundoIA(remProfundo);
  const dicasConstancia = gerarAnaliseConstanciaIA(constancia);

  return resumoIA +
    renderPeriodSelector("analiseView") +
    '<div class="grid grid-4" style="margin-bottom:24px;">'+
      metricCard("Média de sono", fmtHoras(media), "moon") +
      metricCard("Score médio", Math.round(scoreMedia)) +
      metricCard("% Sono REM", remProfundo.mediaPctRem!==null ? remProfundo.mediaPctRem.toFixed(1)+"%" : "—") +
      metricCard("% Sono profundo", remProfundo.mediaPctFundo!==null ? remProfundo.mediaPctFundo.toFixed(1)+"%" : "—") +
    '</div>'+

    '<div class="chart-wrap" style="height:220px;"><canvas id="chartHoras" role="img" aria-label="Gráfico de horas de sono por noite com linha de meta"></canvas></div>'+
    '<div class="chart-wrap" style="height:200px;"><canvas id="chartScore" role="img" aria-label="Gráfico de score de qualidade do sono por noite"></canvas></div>'+

    '<div class="section-title">Sono REM e sono profundo — análise assistida por IA</div>'+
    '<p style="font-size:12px;color:var(--text-faint);margin:-6px 0 12px;">Baseado em referências de organizações de sono (Sleep Foundation, CDC, National Sleep Foundation).</p>'+
    dicasRem.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("")+

    '<div class="section-title">Constância do horário de sono — análise assistida por IA</div>'+
    (constancia ? '<div class="grid grid-2" style="margin-bottom:16px;">'+
      metricCard("Variação horário de dormir", Math.round(constancia.desvDormir)+" min") +
      metricCard("Variação horário de acordar", Math.round(constancia.desvAcordar)+" min") +
    '</div>' : '') +
    dicasConstancia.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("");
}

function renderParametrosSono(){
  const p = state.parametros;
  return '<div class="form-grid">'+
    field("Meta de horas de sono por noite", '<input type="number" id="p-meta" value="'+p.metaHorasSono+'" min="4" max="12" step="0.5" />') +
    field("Horário ideal para dormir", '<input type="time" id="p-dormir" value="'+p.horaDormirIdeal+'" />') +
    field("Horário ideal para acordar", '<input type="time" id="p-acordar" value="'+p.horaAcordarIdeal+'" />') +
    '<button class="btn btn-ghost" id="btn-salvar-param-sono">'+icon("check")+' Salvar parâmetros</button>'+
    '<div class="toast" id="msg-param-sono" style="display:none;">'+icon("check")+' Parâmetros atualizados</div></div>';
}

function renderSono(){
  if (!state.sonoTab) state.sonoTab = "dashboard";
  const tabs = [{id:"dashboard",label:"Dashboard"},{id:"registro",label:"Registrar"},{id:"historico",label:"Histórico"},{id:"analise",label:"Análises"},{id:"parametros",label:"Parâmetros"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Controle de sono</div></div>'+
    tabsHtml(tabs, state.sonoTab, "sonotab") +
    '<div id="sono-content">' + (
      state.sonoTab==="dashboard" ? renderDashboardSono() :
      state.sonoTab==="registro" ? renderRegistroSonoForm(!!state.sonoCochiloMode, state.sonoCochiloMode) :
      state.sonoTab==="historico" ? renderHistoricoSono() :
      state.sonoTab==="analise" ? renderAnaliseSono() : renderParametrosSono()
    ) + '</div>';
}

function renderRegistroCelularForm(){
  const dataStr = new Date().toISOString().slice(0,10);
  return '<div class="form-grid">'+
    field("Data", '<input type="date" id="fc-data" value="'+dataStr+'" />') +
    field("Tempo de tela no dia (horas)", '<input type="number" id="fc-horas" value="2" min="0" max="20" step="0.1" />') +
    field("Principal motivo de uso", '<select id="fc-motivo"><option>Trabalho</option><option>Redes sociais</option><option>Mensagens</option><option>Entretenimento</option><option>Outro</option></select>') +
    '<button class="btn btn-primary" id="btn-salvar-celular">'+icon("check")+' Salvar registro diário</button>'+
    '<div class="toast" id="msg-salvo-celular" style="display:none;">'+icon("check")+' Registro salvo</div>'+
    '<p style="font-size:12px;color:var(--text-faint);">O histórico semanal importado continua disponível na aba histórico. Novos registros alimentam a semana corrente.</p></div>';
}

function renderHistoricoCelular(){
  const semanas = [...state.registrosCelular].sort((a,b)=>b.semana-a.semana);
  if (!semanas.length) return '<div class="empty-state">Nenhum dado ainda.</div>';
  return semanas.map(function(s){
    const acima = s.mediaDiaria > state.parametros.metaCelularHoras;
    return '<div class="list-row"><div class="list-row-main"><div class="list-row-title">Semana '+s.periodo+'</div>'+
      '<div class="list-row-sub">total semanal '+fmtHoras(s.totalSemanal)+'</div></div>'+
      '<div class="badge '+(acima?"badge-bad":"badge-good")+'">'+fmtHoras(s.mediaDiaria)+'/dia</div></div>';
  }).join("");
}

function renderAnaliseCelular(){
  const semanas = [...state.registrosCelular].sort((a,b)=>a.semana-b.semana);
  if (semanas.length<2) return '<div class="empty-state">Dados insuficientes para análise.</div>';
  const meta = state.parametros.metaCelularHoras;
  const mediaGeral = semanas.reduce((s,r)=>s+r.mediaDiaria,0)/semanas.length;
  const ultimasQuatro = semanas.slice(-4);
  const mediaRecente = ultimasQuatro.reduce((s,r)=>s+r.mediaDiaria,0)/ultimasQuatro.length;
  const semanasAcimaMeta = semanas.filter(s=>s.mediaDiaria>meta).length;
  return '<div class="grid grid-3" style="margin-bottom:8px;">'+
      metricCard("Média geral 2026", fmtHoras(mediaGeral)+"/dia") +
      metricCard("Média últimas 4 sem.", fmtHoras(mediaRecente)+"/dia") +
      metricCard("Semanas acima da meta", semanasAcimaMeta+" de "+semanas.length) +
    '</div>'+
    '<div class="chart-wrap" style="height:220px;"><canvas id="chartCelular" role="img" aria-label="Gráfico de uso médio diário de celular por semana com linha de meta"></canvas></div>';
}

function renderParametrosCelular(){
  const p = state.parametros;
  return '<div class="form-grid">'+
    field("Meta de uso diário de celular (horas)", '<input type="number" id="pc-meta" value="'+p.metaCelularHoras+'" min="0.5" max="10" step="0.25" />') +
    '<button class="btn btn-ghost" id="btn-salvar-param-celular">'+icon("check")+' Salvar parâmetros</button>'+
    '<div class="toast" id="msg-param-celular" style="display:none;">'+icon("check")+' Parâmetros atualizados</div></div>';
}

function renderCelular(){
  if (!state.celularTab) state.celularTab = "registro";
  const tabs = [{id:"registro",label:"Registrar"},{id:"historico",label:"Histórico"},{id:"analise",label:"Análises"},{id:"parametros",label:"Parâmetros"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Uso do celular</div></div>'+
    tabsHtml(tabs, state.celularTab, "celulartab") +
    '<div id="celular-content">' + (
      state.celularTab==="registro" ? renderRegistroCelularForm() :
      state.celularTab==="historico" ? renderHistoricoCelular() :
      state.celularTab==="analise" ? renderAnaliseCelular() : renderParametrosCelular()
    ) + '</div>';
}

function renderRegistroLivroForm(){
  return '<div class="form-grid">'+
    field("Título do livro", '<input type="text" id="fl-titulo" placeholder="Nome do livro" />') +
    field("Total de páginas", '<input type="number" id="fl-paginas" min="1" />') +
    field("Status", '<select id="fl-status"><option value="lendo">Lendo</option><option value="concluido">Concluído</option><option value="planejado">Planejado</option></select>') +
    field("Horas de leitura até agora", '<input type="number" id="fl-horas" min="0" step="0.5" value="0" />') +
    '<button class="btn btn-primary" id="btn-salvar-livro">'+icon("check")+' Adicionar livro</button>'+
    '<div class="toast" id="msg-salvo-livro" style="display:none;">'+icon("check")+' Livro adicionado</div></div>';
}

function renderHistoricoLivros(){
  if (!state.livros.length) return '<div class="empty-state">Nenhum livro registrado ainda.</div>';
  return state.livros.map(function(l){
    const statusLabel = l.status==="concluido" ? "Concluído" : l.status==="lendo" ? "Lendo" : "Planejado";
    const badgeClass = l.status==="concluido" ? "badge-good" : l.status==="lendo" ? "badge-warn" : "badge-neutral";
    return '<div class="list-row"><div class="list-row-main"><div class="list-row-title">'+l.titulo+'</div>'+
      '<div class="list-row-sub">'+(l.paginas?l.paginas+" pág. · ":"")+fmtHoras(l.horasLeitura||0)+'</div></div>'+
      '<div class="badge '+badgeClass+'">'+statusLabel+'</div>'+
      '<button class="icon-btn" data-dellivro="'+l.id+'" aria-label="Remover livro">'+icon("trash")+'</button></div>';
  }).join("");
}

function renderAnaliseLivros(){
  const livros = state.livros.filter(l=>l.titulo);
  if (!livros.length) return '<div class="empty-state">Nenhum dado ainda.</div>';
  const totalPaginas = livros.reduce((s,l)=>s+(l.paginas||0),0);
  const totalHoras = livros.reduce((s,l)=>s+(l.horasLeitura||0),0);
  const concluidos = livros.filter(l=>l.status==="concluido").length;
  const paginaPorHora = totalHoras ? Math.round(totalPaginas/totalHoras) : 0;
  return '<div class="grid grid-3" style="margin-bottom:8px;">'+
      metricCard("Livros concluídos", concluidos) +
      metricCard("Total de páginas", totalPaginas) +
      metricCard("Ritmo de leitura", paginaPorHora+" pág/h") +
    '</div>'+
    '<div class="chart-wrap" style="height:'+Math.max(220, livros.length*38+80)+'px;"><canvas id="chartLivros" role="img" aria-label="Gráfico de páginas lidas por livro"></canvas></div>';
}

function renderLeituras(){
  if (!state.leiturasTab) state.leiturasTab = "registro";
  const tabs = [{id:"registro",label:"Adicionar livro"},{id:"historico",label:"Minha lista"},{id:"analise",label:"Análises"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Leituras</div></div>'+
    tabsHtml(tabs, state.leiturasTab, "leiturastab") +
    '<div id="leituras-content">' + (
      state.leiturasTab==="registro" ? renderRegistroLivroForm() :
      state.leiturasTab==="historico" ? renderHistoricoLivros() : renderAnaliseLivros()
    ) + '</div>';
}

function renderAnalisesGerais(){
  const { insights, corrSonoCelular, corrScoreCelular, cruz } = gerarInsightsCruzados();
  const cruzValido = cruz.filter(c=>c.sono!==null);
  return backLink() +
    '<div class="page-header"><div class="page-title">Análises gerais</div><div class="page-sub">Cruzamento entre sono, celular e leitura, com base em '+cruzValido.length+' semanas de dados</div></div>'+
    '<div class="grid grid-3" style="margin-bottom:8px;">'+
      metricCard("Correlação sono x celular", corrSonoCelular===null?"—":corrSonoCelular.toFixed(2)) +
      metricCard("Correlação score x celular", corrScoreCelular===null?"—":corrScoreCelular.toFixed(2)) +
      metricCard("Semanas analisadas", cruzValido.length) +
    '</div>'+
    '<div class="chart-wrap" style="height:260px;"><canvas id="chartCruzado" role="img" aria-label="Gráfico combinado de horas de sono e uso de celular por semana, dois eixos verticais"></canvas></div>'+
    '<div class="legend-row"><span><i style="background:#4ED9A0"></i>Horas de sono</span><span><i style="background:#4D8FFF"></i>Uso de celular</span></div>'+
    '<div class="section-title">O que os dados mostram</div>'+
    insights.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("")+
    '<p style="font-size:11.5px;color:var(--text-faint);margin-top:12px;line-height:1.6;">Correlação varia de -1 a 1. Próximo de 0 indica pouca relação entre as variáveis; valores acima de 0.4 (positivo ou negativo) já indicam uma relação que vale observar com atenção.</p>';
}

function render(){
  const content = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = renderSidebar();
  if (!state.loaded) { content.innerHTML = '<div class="empty-state">Carregando...</div>'; return; }
  if (state.dbError) {
    content.innerHTML = '<div class="page-header"><div class="page-title">Não foi possível conectar ao banco de dados</div></div>'+
      '<div class="insight-row">'+icon("bulb")+'<span>Verifique sua conexão com a internet e se as credenciais do Supabase em <strong>supabase-client.js</strong> estão corretas. Veja o console do navegador (F12) para mais detalhes técnicos.</span></div>'+
      '<button class="btn btn-primary" style="margin-top:16px;" onclick="location.reload()">Tentar novamente</button>';
    return;
  }
  if (state.view === "inicio") content.innerHTML = renderInicio();
  else if (state.view === "sono") { content.innerHTML = renderSono(); if (state.sonoTab==="analise") setTimeout(drawSonoCharts,0); if (state.sonoTab==="dashboard") setTimeout(drawCategoriaSonoChart,0); if (state.sonoTab==="registro") setTimeout(attachRegistroSonoLiveCalc,0); }
  else if (state.view === "celular") { content.innerHTML = renderCelular(); if (state.celularTab==="analise") setTimeout(drawCelularChart,0); }
  else if (state.view === "leituras") { content.innerHTML = renderLeituras(); if (state.leiturasTab==="analise") setTimeout(drawLivrosChart,0); }
  else if (state.view === "analises") { content.innerHTML = renderAnalisesGerais(); setTimeout(drawCruzadoChart,0); }
  attachHandlers();
}

const CHART_DEFAULTS = { color: "#8A8FA3", font: { family: "Inter" } };
function baseGridOpts(){ return { grid: { color: "rgba(255,255,255,0.06)" }, ticks: { color: "#8A8FA3", font: { size: 11 } } }; }

function drawCategoriaSonoChart(){
  const { start, end } = getPeriodoAtual();
  const grupos = gruposSonoNoPeriodo(regsNoPeriodo(start,end));
  if (!grupos.length) return;
  const counts = {};
  CATEGORIAS_SONO.forEach(c=>counts[c.id]=0);
  grupos.forEach(function(g){ const c = categoriaPorScore(g.score); if (c) counts[c.id]++; });
  const total = grupos.length;
  const c = document.getElementById("chartCategoriaSono");
  if (!c) return;
  new Chart(c, { type:"doughnut", data:{
    labels: CATEGORIAS_SONO.map(c=>c.label),
    datasets:[{ data: CATEGORIAS_SONO.map(cat=>Math.round((counts[cat.id]/total)*1000)/10), backgroundColor: CATEGORIAS_SONO.map(c=>c.color), borderWidth: 0 }]
  }, options:{ responsive:true, maintainAspectRatio:false, cutout:"62%",
    plugins:{ legend:{ position:"bottom", labels:{ color:"#8A8FA3", font:{size:11}, boxWidth:10, padding:12 } },
      tooltip:{ callbacks:{ label: function(ctx){ return ctx.label+": "+ctx.parsed+"%"; } } } } } });
}

function attachRegistroSonoLiveCalc(){
  const totalEl = document.getElementById("f-total");
  const realEl = document.getElementById("f-real");
  const remEl = document.getElementById("f-rem");
  const fundoEl = document.getElementById("f-fundo");
  if (!totalEl) return;
  function recalc(){
    const total = parseHM(totalEl.value);
    const real = parseHM(realEl.value);
    const rem = parseHM(remEl.value);
    const fundo = parseHM(fundoEl.value);
    const difOut = document.getElementById("f-diferenca-out");
    const pctRemOut = document.getElementById("f-pctrem-out");
    const pctFundoOut = document.getElementById("f-pctfundo-out");
    if (total!==null && real!==null) {
      const dif = total - real;
      const pct = total ? (dif/total)*100 : 0;
      difOut.textContent = fmtHoras(Math.abs(dif)) + " (" + pct.toFixed(1) + "%)";
    } else { difOut.textContent = "—"; }
    if (rem!==null && real) { pctRemOut.textContent = ((rem/real)*100).toFixed(1)+"%"; } else { pctRemOut.textContent = "—"; }
    if (fundo!==null && real) { pctFundoOut.textContent = ((fundo/real)*100).toFixed(1)+"%"; } else { pctFundoOut.textContent = "—"; }
  }
  [totalEl, realEl, remEl, fundoEl].forEach(function(el){ el.addEventListener("input", recalc); });
  recalc();
}

function drawSonoCharts(){
  const { start, end } = getPeriodoAtual("analiseView");
  const regs = gruposNoIntervalo(start, end).filter(g=>g.horasSonoReal>0).sort((a,b)=>a.data.localeCompare(b.data));
  if (!regs.length) return;
  const labels = regs.map(r=>new Date(r.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}));
  const horas = regs.map(r=>Math.round(r.horasSonoReal*10)/10);
  const scores = regs.map(r=>r.score);
  const meta = state.parametros.metaHorasSono;
  const c1 = document.getElementById("chartHoras");
  if (c1) new Chart(c1, { type:"bar", data:{ labels:labels, datasets:[
    { label:"Horas dormidas", data:horas, backgroundColor:"#4D8FFF", borderRadius:3 },
    { label:"Meta", data:labels.map(()=>meta), type:"line", borderColor:"#F2685B", borderDash:[6,4], pointRadius:0, fill:false }
  ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:Object.assign({ticks:{autoSkip:true,maxRotation:45,color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}), y:Object.assign({beginAtZero:true},baseGridOpts()) } } });
  const c2 = document.getElementById("chartScore");
  if (c2) new Chart(c2, { type:"line", data:{ labels:labels, datasets:[{ label:"Score", data:scores, borderColor:"#6C63FF", backgroundColor:"rgba(108,99,255,0.12)", fill:true, tension:0.3, pointRadius:2 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:Object.assign({ticks:{autoSkip:true,maxRotation:45,color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}), y:Object.assign({min:0,max:100},baseGridOpts()) } } });
}
function drawCelularChart(){
  const semanas = [...state.registrosCelular].sort((a,b)=>a.semana-b.semana);
  const labels = semanas.map(s=>s.periodo.split(" a ")[0]);
  const valores = semanas.map(s=>Math.round(s.mediaDiaria*10)/10);
  const meta = state.parametros.metaCelularHoras;
  const c = document.getElementById("chartCelular");
  if (c) new Chart(c, { type:"line", data:{ labels:labels, datasets:[
    { label:"Média diária", data:valores, borderColor:"#4D8FFF", backgroundColor:"rgba(77,143,255,0.12)", fill:true, tension:0.3, pointRadius:2 },
    { label:"Meta", data:labels.map(()=>meta), borderColor:"#F2685B", borderDash:[6,4], pointRadius:0, fill:false }
  ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:Object.assign({ticks:{autoSkip:true,maxRotation:45,color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}), y:Object.assign({beginAtZero:true},baseGridOpts()) } } });
}
function drawLivrosChart(){
  const livros = state.livros.filter(l=>l.titulo && l.paginas);
  if (!livros.length) return;
  const labels = livros.map(l=>l.titulo.length>18 ? l.titulo.slice(0,17)+"…" : l.titulo);
  const valores = livros.map(l=>l.paginas);
  const c = document.getElementById("chartLivros");
  if (c) new Chart(c, { type:"bar", data:{ labels:labels, datasets:[{ label:"Páginas", data:valores, backgroundColor:"#6C63FF", borderRadius:3 }] }, options:{ responsive:true, maintainAspectRatio:false, indexAxis:"y", plugins:{legend:{display:false}}, scales:{ x:Object.assign({beginAtZero:true},baseGridOpts()), y:{grid:{display:false},ticks:{color:"#8A8FA3",font:{size:11}}} } } });
}
function drawCruzadoChart(){
  const { cruz } = gerarInsightsCruzados();
  const validos = cruz.filter(c=>c.sono!==null);
  if (!validos.length) return;
  const labels = validos.map(c=>c.periodo.split(" a ")[0]);
  const sonoVals = validos.map(c=>Math.round(c.sono*10)/10);
  const celularVals = validos.map(c=>Math.round(c.celular*10)/10);
  const c = document.getElementById("chartCruzado");
  if (!c) return;
  new Chart(c, { type:"line", data:{ labels:labels, datasets:[
    { label:"Horas de sono", data:sonoVals, borderColor:"#4ED9A0", backgroundColor:"rgba(78,217,160,0.08)", yAxisID:"y", tension:0.3, pointRadius:2, fill:true },
    { label:"Uso de celular", data:celularVals, borderColor:"#4D8FFF", borderDash:[5,3], backgroundColor:"rgba(77,143,255,0.08)", yAxisID:"y1", tension:0.3, pointRadius:2, fill:false }
  ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
    scales:{
      x:Object.assign({ticks:{autoSkip:true,maxRotation:45,color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}),
      y:Object.assign({ position:"left", min:4, max:11 },baseGridOpts()),
      y1:{ position:"right", min:0, max:5, grid:{drawOnChartArea:false}, ticks:{color:"#8A8FA3",font:{size:11}} }
    } } });
}

function closeSidebarMobile(){
  document.getElementById("sidebar").classList.remove("is-open");
  document.getElementById("scrim").classList.remove("is-open");
}

function attachHandlers(){
  document.querySelectorAll("[data-nav]").forEach(function(btn){
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const mod = btn.getAttribute("data-nav");
      const modDef = MODULES.find(m=>m.id===mod);
      if (modDef && modDef.active) { state.view = mod; render(); closeSidebarMobile(); }
    });
  });
  const backLinkEl = document.getElementById("backLink");
  if (backLinkEl) backLinkEl.addEventListener("click", function(e){ e.preventDefault(); state.view = "inicio"; render(); });

  document.querySelectorAll("[data-sonotab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.sonoTab = btn.getAttribute("data-sonotab"); state.sonoCochiloMode = null; render(); }); });
  document.querySelectorAll("[data-celulartab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.celularTab = btn.getAttribute("data-celulartab"); render(); }); });
  document.querySelectorAll("[data-leiturastab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.leiturasTab = btn.getAttribute("data-leiturastab"); render(); }); });

  const btnMinimizarResumo = document.getElementById("btn-minimizar-resumo");
  if (btnMinimizarResumo) btnMinimizarResumo.addEventListener("click", function(){ state.sonoResumoMinimizado = true; render(); });
  const btnExpandirResumo = document.getElementById("btn-expandir-resumo");
  if (btnExpandirResumo) btnExpandirResumo.addEventListener("click", function(){ state.sonoResumoMinimizado = false; render(); });

  document.querySelectorAll("[data-periodotipo]").forEach(function(btn){ btn.addEventListener("click", function(){
    const [key, tipo] = btn.getAttribute("data-periodotipo").split(":");
    state[key] = { tipo: tipo, offset: 0, dataInicio: state[key].dataInicio, dataFim: state[key].dataFim };
    render();
  }); });
  document.querySelectorAll("[data-periodoprev]").forEach(function(btn){ btn.addEventListener("click", function(){ const key = btn.getAttribute("data-periodoprev"); state[key].offset--; render(); }); });
  document.querySelectorAll("[data-periodonext]").forEach(function(btn){ btn.addEventListener("click", function(){ const key = btn.getAttribute("data-periodonext"); state[key].offset++; render(); }); });
  document.querySelectorAll("[data-periodohoje]").forEach(function(btn){ btn.addEventListener("click", function(){ const key = btn.getAttribute("data-periodohoje"); state[key].offset = 0; render(); }); });
  document.querySelectorAll("[data-aplicarcustom]").forEach(function(btn){ btn.addEventListener("click", function(){
    const key = btn.getAttribute("data-aplicarcustom");
    state[key].dataInicio = document.getElementById("custom-data-inicio-"+key).value;
    state[key].dataFim = document.getElementById("custom-data-fim-"+key).value;
    render();
  }); });

  const btnAddCochilo = document.getElementById("btn-add-cochilo");
  if (btnAddCochilo) btnAddCochilo.addEventListener("click", function(){
    const dataAtual = document.getElementById("f-data").value;
    state.sonoTab = "registro";
    state.sonoCochiloMode = dataAtual;
    render();
  });

  const btnSalvarSono = document.getElementById("btn-salvar-sono");
  if (btnSalvarSono) btnSalvarSono.addEventListener("click", async function(){
    const formEl = document.querySelector(".form-grid[data-cochilo]");
    const isCochilo = formEl && formEl.getAttribute("data-cochilo") === "1";
    const dataVal = document.getElementById("f-data").value;
    const total = parseHM(document.getElementById("f-total").value);
    const real = parseHM(document.getElementById("f-real").value);
    const rem = parseHM(document.getElementById("f-rem").value);
    const fundo = parseHM(document.getElementById("f-fundo").value);
    const score = Number(document.getElementById("f-score").value)||0;
    const notas = document.getElementById("f-notas").value;

    btnSalvarSono.disabled = true; btnSalvarSono.textContent = "Salvando...";

    const reg = {
      grupoData: dataVal, data: dataVal,
      tipo: isCochilo ? "cochilo" : "noite",
      dormiu: isCochilo ? null : document.getElementById("f-dormiu").value,
      acordou: isCochilo ? null : document.getElementById("f-acordou").value,
      horasNaCama: total, horasSonoReal: real, horasRem: rem, horasFundo: fundo,
      pctRem: (rem!==null && real) ? Math.round((rem/real)*1000)/10 : null,
      pctFundo: (fundo!==null && real) ? Math.round((fundo/real)*1000)/10 : null,
      scoreOriginal: score, notas: notas, importado: false
    };

    if (!isCochilo) {
      // remove o registro de noite existente da mesma data (no banco e em memória), mantendo cochilos do dia
      const existente = state.registrosSono.find(r => r.grupoData===dataVal && r.tipo==="noite");
      if (existente) { await deleteSonoRemoto(existente.id); }
      state.registrosSono = state.registrosSono.filter(r => !(r.grupoData===dataVal && r.tipo==="noite"));
    }
    const salvo = await saveSono(reg);
    if (salvo) state.registrosSono.push(salvo);
    state.sonoCochiloMode = null;
    state.sonoTab = "historico";
    render();
  });

  document.querySelectorAll("[data-delsono]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delsono");
    await deleteSonoRemoto(id);
    state.registrosSono = state.registrosSono.filter(r=>r.id!==id);
    render();
  }); });
  document.querySelectorAll("[data-addnap]").forEach(function(btn){ btn.addEventListener("click", function(){ state.sonoCochiloMode = btn.getAttribute("data-addnap"); state.sonoTab = "registro"; render(); }); });

  const btnParamSono = document.getElementById("btn-salvar-param-sono");
  if (btnParamSono) btnParamSono.addEventListener("click", async function(){
    state.parametros.metaHorasSono = Number(document.getElementById("p-meta").value)||7.5;
    state.parametros.horaDormirIdeal = document.getElementById("p-dormir").value;
    state.parametros.horaAcordarIdeal = document.getElementById("p-acordar").value;
    await saveParametros();
    const msg = document.getElementById("msg-param-sono");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });

  const btnSalvarCelular = document.getElementById("btn-salvar-celular");
  if (btnSalvarCelular) btnSalvarCelular.addEventListener("click", async function(){
    const dataStr = document.getElementById("fc-data").value;
    const horas = Number(document.getElementById("fc-horas").value)||0;
    const d = new Date(dataStr+"T00:00:00");
    const semanaAprox = Math.floor((d - new Date("2026-01-01"))/(7*24*3600*1000));
    let semana = state.registrosCelular.find(s=>s.semana===semanaAprox);
    btnSalvarCelular.disabled = true;
    if (!semana) {
      semana = { semana:semanaAprox, periodo:dataStr, mediaDiaria:horas, totalSemanal:horas, importado:false, dias:1 };
      const salvo = await saveCelular(semana);
      if (salvo) state.registrosCelular.push(salvo);
    } else {
      semana.dias = (semana.dias||1)+1; semana.totalSemanal += horas; semana.mediaDiaria = semana.totalSemanal/semana.dias;
      await saveCelular(semana);
    }
    btnSalvarCelular.disabled = false;
    const msg = document.getElementById("msg-salvo-celular");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });

  const btnParamCelular = document.getElementById("btn-salvar-param-celular");
  if (btnParamCelular) btnParamCelular.addEventListener("click", async function(){
    state.parametros.metaCelularHoras = Number(document.getElementById("pc-meta").value)||2;
    await saveParametros();
    const msg = document.getElementById("msg-param-celular");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });

  const btnSalvarLivro = document.getElementById("btn-salvar-livro");
  if (btnSalvarLivro) btnSalvarLivro.addEventListener("click", async function(){
    const titulo = document.getElementById("fl-titulo").value.trim();
    if (!titulo) return;
    btnSalvarLivro.disabled = true;
    const livro = { titulo:titulo, paginas:Number(document.getElementById("fl-paginas").value)||null, status:document.getElementById("fl-status").value, horasLeitura:Number(document.getElementById("fl-horas").value)||0, importado:false };
    const salvo = await saveLivro(livro);
    if (salvo) state.livros.push(salvo);
    btnSalvarLivro.disabled = false;
    const msg = document.getElementById("msg-salvo-livro");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
    document.getElementById("fl-titulo").value=""; document.getElementById("fl-paginas").value="";
    render();
  });
  document.querySelectorAll("[data-dellivro]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-dellivro");
    await deleteLivroRemoto(id);
    state.livros = state.livros.filter(l=>l.id!==id);
    render();
  }); });

  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", function(){ document.getElementById("sidebar").classList.add("is-open"); document.getElementById("scrim").classList.add("is-open"); });
  const scrim = document.getElementById("scrim");
  if (scrim) scrim.addEventListener("click", closeSidebarMobile);
}

loadData();
