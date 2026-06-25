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
  { id: "habitos", label: "Hábitos diários", icon: "checklist", active: true, section: "modules" },
  { id: "momentos", label: "Momentos diários", icon: "photo", active: true, section: "modules" },
  { id: "proposito", label: "Propósito de vida", icon: "compass", active: false, section: "modules" },
  { id: "exercicios", label: "Exercícios físicos", icon: "run", active: true, section: "modules" },
  { id: "anotacoes", label: "Anotações", icon: "notebook", active: false, section: "modules" },
  { id: "agenda", label: "Agenda", icon: "calendar", active: false, section: "modules" }
];

let state = {
  view: "inicio",
  registrosSono: [],
  registrosCelular: [],
  livros: [],
  exercicios: [],
  bioimpedancia: [],
  pesos: [],
  movimentacao: [],
  celularDiario: [],
  semanasFechadasCelularMap: {},
  habitos: [],
  registrosHabitos: [],
  anotacoesDia: [],
  pessoas: [],
  tagsMomentos: [],
  jornadas: [],
  momentos: [],
  momentoPessoas: [],
  momentoTags: [],
  momentoJornadas: [],
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

    const exerciciosJaCarregado = parametrosSalvos && parametrosSalvos.carga_exercicios_feita;
    const bioJaCarregado = parametrosSalvos && parametrosSalvos.carga_bio_feita;

    if (!exerciciosJaCarregado) {
      const contagem = await DB.contarRegistrosExtra();
      if (contagem.exercicios === 0) {
        const exerciciosInicial = EXERCICIOS_IMPORT.filter(function(a){ return a[1]; }).map(function(a){
          return { data: a[0], tipo: a[1], horaInicio: null, horaFim: null, notas: a[2]?("Duração aproximada: "+a[2]+"h"):"", importado: true };
        });
        const ok = await DB.bulkInsertExercicios(exerciciosInicial);
        if (ok) await DB.setParametro("carga_exercicios_feita", true);
      } else {
        await DB.setParametro("carga_exercicios_feita", true);
      }
    }

    const movimentacaoJaCarregada = parametrosSalvos && parametrosSalvos.carga_movimentacao_feita;
    if (!movimentacaoJaCarregada) {
      const contagemMov = (await sb.from("movimentacao_diaria").select("id", { count: "exact", head: true })).count || 0;
      if (contagemMov === 0) {
        const movInicial = EXERCICIOS_IMPORT.filter(function(a){ return a[3]!==null || a[4]!==null; }).map(function(a){
          return { data: a[0], minutosAtivo: a[4], passos: a[3], caloriasAtividade: null, caloriasTotais: null, distanciaKm: null };
        });
        for (const m of movInicial) { await DB.upsertMovimentacao(m); }
        await DB.setParametro("carga_movimentacao_feita", true);
      } else {
        await DB.setParametro("carga_movimentacao_feita", true);
      }
    }

    if (!bioJaCarregado) {
      const contagem = await DB.contarRegistrosExtra();
      if (contagem.bioimpedancia === 0) {
        const ok = await DB.upsertBioimpedancia(Object.assign({
          dataMedicao: BIOIMPEDANCIA_INICIAL.data_medicao, idade: BIOIMPEDANCIA_INICIAL.idade, alturaCm: BIOIMPEDANCIA_INICIAL.altura_cm,
          pontuacaoSaude: BIOIMPEDANCIA_INICIAL.pontuacao_saude, pesoKg: BIOIMPEDANCIA_INICIAL.peso_kg,
          aguaCorporalKg: BIOIMPEDANCIA_INICIAL.agua_corporal_kg, massaProteicaKg: BIOIMPEDANCIA_INICIAL.massa_proteica_kg,
          mineraisKg: BIOIMPEDANCIA_INICIAL.minerais_kg, massaGordaKg: BIOIMPEDANCIA_INICIAL.massa_gorda_kg,
          massaMuscularEsqueleticaKg: BIOIMPEDANCIA_INICIAL.massa_muscular_esqueletica_kg, imc: BIOIMPEDANCIA_INICIAL.imc,
          relacaoGorduraPct: BIOIMPEDANCIA_INICIAL.relacao_gordura_pct, adiposidadeNivel: BIOIMPEDANCIA_INICIAL.adiposidade_nivel,
          tipoCorpo: BIOIMPEDANCIA_INICIAL.tipo_corpo, massaLivreGorduraKg: BIOIMPEDANCIA_INICIAL.massa_livre_gordura_kg,
          massaGorduraSubcutaneaKg: BIOIMPEDANCIA_INICIAL.massa_gordura_subcutanea_kg, idadeCorpo: BIOIMPEDANCIA_INICIAL.idade_corpo,
          gorduraVisceral: BIOIMPEDANCIA_INICIAL.gordura_visceral, ingestaoCaloricaRecomendadaKcal: BIOIMPEDANCIA_INICIAL.ingestao_calorica_recomendada_kcal,
          pesoPadraoKg: BIOIMPEDANCIA_INICIAL.peso_padrao_kg, controlePesoKg: BIOIMPEDANCIA_INICIAL.controle_peso_kg,
          controleGorduraKg: BIOIMPEDANCIA_INICIAL.controle_gordura_kg, controleMuscularKg: BIOIMPEDANCIA_INICIAL.controle_muscular_kg,
          bmrKcal: BIOIMPEDANCIA_INICIAL.bmr_kcal, origem: "relatorio"
        }, {}));
        if (ok) await DB.setParametro("carga_bio_feita", true);
      } else {
        await DB.setParametro("carga_bio_feita", true);
      }
    }

    parametrosSalvos = await DB.getParametros();
    if (parametrosSalvos && parametrosSalvos.gerais) {
      state.parametros = Object.assign({}, state.parametros, parametrosSalvos.gerais);
    }

    const habitosJaCarregados = parametrosSalvos && parametrosSalvos.carga_habitos_feita;
    if (!habitosJaCarregados) {
      const contagem = await DB.contarHabitos();
      if (contagem === 0) {
        const habitosInicial = HABITOS_IMPORT.map(function(h, i){
          return { nome: h.nome, icone: h.icone, negativo: h.negativo, ordem: i, ativo: true, tipoRecorrencia: "diario" };
        });
        const ok = await DB.bulkInsertHabitos(habitosInicial);
        if (ok) await DB.setParametro("carga_habitos_feita", true);
      } else {
        await DB.setParametro("carga_habitos_feita", true);
      }
    }

    const pessoasJaCarregadas = parametrosSalvos && parametrosSalvos.carga_pessoas_feita;
    if (!pessoasJaCarregadas) {
      const contagem = await DB.contarPessoas();
      if (contagem === 0) {
        const ok = await DB.bulkInsertPessoas(PESSOAS_IMPORT);
        if (ok) await DB.setParametro("carga_pessoas_feita", true);
      } else {
        await DB.setParametro("carga_pessoas_feita", true);
      }
    }

    const tagsJaCarregadas = parametrosSalvos && parametrosSalvos.carga_tags_momentos_feita;
    if (!tagsJaCarregadas) {
      const contagem = await DB.contarTagsMomentos();
      if (contagem === 0) {
        const ok = await DB.bulkInsertTagsMomentos(TAGS_MOMENTOS_IMPORT);
        if (ok) await DB.setParametro("carga_tags_momentos_feita", true);
      } else {
        await DB.setParametro("carga_tags_momentos_feita", true);
      }
    }

    const jornadasJaCarregadas = parametrosSalvos && parametrosSalvos.carga_jornadas_feita;
    if (!jornadasJaCarregadas) {
      const contagem = await DB.contarJornadas();
      if (contagem === 0) {
        const jornadasInicial = JORNADAS_IMPORT.map(function(j){ return { nome: j.nome, descricao: j.descricao }; });
        const ok = await DB.bulkInsertJornadas(jornadasInicial);
        if (ok) await DB.setParametro("carga_jornadas_feita", true);
      } else {
        await DB.setParametro("carga_jornadas_feita", true);
      }
    }

    const [sono, celular, livros, exercicios, bioimpedancia, pesos, movimentacao, celularDiario, semanasFechadasCelularMap,
      habitos, registrosHabitos, anotacoesDia, pessoas, tagsMomentos, jornadas, momentos, momentoPessoas, momentoTags, momentoJornadas] = await Promise.all([
      DB.getSono(), DB.getCelular(), DB.getLivros(), DB.getExercicios(), DB.getBioimpedancia(), DB.getPeso(), DB.getMovimentacao(), DB.getCelularDiario(), DB.getSemanasFechadas(),
      DB.getHabitos(), DB.getRegistrosHabitos(), DB.getAnotacoesDia(), DB.getPessoas(), DB.getTagsMomentos(), DB.getJornadas(), DB.getMomentos(), DB.getMomentoPessoas(), DB.getMomentoTags(), DB.getMomentoJornadas()
    ]);
    state.registrosSono = sono;
    state.registrosCelular = celular;
    state.livros = livros;
    state.exercicios = exercicios;
    state.bioimpedancia = bioimpedancia;
    state.pesos = pesos;
    state.movimentacao = movimentacao;
    state.celularDiario = celularDiario;
    state.semanasFechadasCelularMap = semanasFechadasCelularMap;
    state.habitos = habitos;
    state.registrosHabitos = registrosHabitos;
    state.anotacoesDia = anotacoesDia;
    state.pessoas = pessoas;
    state.tagsMomentos = tagsMomentos;
    state.jornadas = jornadas;
    state.momentos = momentos;
    state.momentoPessoas = momentoPessoas;
    state.momentoTags = momentoTags;
    state.momentoJornadas = momentoJornadas;
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
function decimalParaHora(dec){
  if (dec===null||dec===undefined||isNaN(dec)) return "07:30";
  const h = Math.floor(dec), m = Math.round((dec-h)*60);
  return (h<10?"0":"")+h+":"+(m<10?"0":"")+m;
}
function horaParaDecimal(hhmm){
  if (!hhmm) return null;
  const parts = hhmm.split(":");
  if (parts.length!==2) return null;
  return Number(parts[0]) + Number(parts[1])/60;
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

function metricCard(label, value, iconName, delta, valueColor){
  return '<div class="metric-card"><div class="metric-label">'+(iconName?'<span>'+icon(iconName)+'</span>':'')+label+'</div>'+
    '<div class="metric-value" '+(valueColor?'style="color:'+valueColor+';"':'')+'>'+value+'</div>'+
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
    exercicios: "Bioimpedância, controle de peso, futebol, natação, academia e passos.",
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

  const categoriaQualidade = mediaQualidade!==null ? categoriaPorScore(Math.round(mediaQualidade)) : null;

  return renderPeriodSelector() +
    '<div class="grid grid-4" style="margin-bottom:24px;">'+
      metricCard("Qualidade do sono", mediaQualidade!==null?Math.round(mediaQualidade):"—", "moon", null, categoriaQualidade?categoriaQualidade.color:null) +
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
    field("Meta de horas de sono por noite", '<input type="time" id="p-meta" value="'+decimalParaHora(p.metaHorasSono)+'" />') +
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

// ---------- Módulo: Uso do celular (registros diários) ----------

const CATEGORIAS_CELULAR = [
  { id: "excelente", label: "Excelente", min: 0, max: 10, color: "#39FF8B" },
  { id: "otimo", label: "Ótimo", min: 10.0001, max: 15, color: "#4ED9A0" },
  { id: "bom", label: "Bom", min: 15.0001, max: 20, color: "#4D8FFF" },
  { id: "regular", label: "Regular", min: 20.0001, max: 25, color: "#F2D94B" },
  { id: "ruim", label: "Ruim", min: 25.0001, max: 30, color: "#F2A23C" },
  { id: "pessimo", label: "Péssimo", min: 30.0001, max: Infinity, color: "#F2685B" }
];
function categoriaCelularPorHoras(horas){
  if (horas===null||horas===undefined) return null;
  return CATEGORIAS_CELULAR.find(function(c){ return horas>=c.min && horas<=c.max; }) || CATEGORIAS_CELULAR[CATEGORIAS_CELULAR.length-1];
}

function celularHorasNet(reg){ return Math.max(0, (reg.horasConsumo||0) - (reg.horasMaps||0)); }
function celularOrdenado(){ return [...state.celularDiario].sort(function(a,b){ return a.data.localeCompare(b.data); }); }
function celularNoIntervalo(startIso, endIso){ return state.celularDiario.filter(function(r){ return r.data>=startIso && r.data<=endIso; }); }

function sonoRealNoDia(dataIso){
  const grupos = gruposSonoNoPeriodo(state.registrosSono.filter(function(r){ return r.grupoData===dataIso; }));
  const g = grupos.find(function(x){ return x.data===dataIso; });
  return g ? g.horasSonoReal : null;
}

function pctAcordadoUsando(horasUso, dataIso){
  const sonoReal = sonoRealNoDia(dataIso);
  const horasSono = (sonoReal!==null && sonoReal>0) ? sonoReal : state.parametros.metaHorasSono;
  const horasAcordado = 24 - horasSono;
  if (horasAcordado<=0) return null;
  return (horasUso/horasAcordado)*100;
}

function renderDashboardCelularAno(){
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const inicioAno = isoDate(new Date(anoAtual,0,1));
  const hojeIso = isoDate(hoje);
  const diasDoAno = Math.floor((hoje - new Date(anoAtual,0,1))/(24*3600*1000)) + 1;

  const regsAno = celularNoIntervalo(inicioAno, hojeIso);
  const totalHoras = regsAno.reduce(function(s,r){ return s+celularHorasNet(r); }, 0);
  const mediaConsumo = regsAno.length ? totalHoras/regsAno.length : null;
  const qtdDiasUsando = totalHoras/24;
  const pctDiasAno = diasDoAno ? (regsAno.length/diasDoAno)*100 : 0;

  const porMes = {};
  regsAno.forEach(function(r){
    const mes = r.data.slice(0,7);
    if (!porMes[mes]) porMes[mes] = { total:0, dias:0 };
    porMes[mes].total += celularHorasNet(r);
    porMes[mes].dias++;
  });
  const mesesOrdenados = Object.keys(porMes).sort().reverse();

  return '<div class="grid grid-4" style="margin-bottom:8px;">'+
      metricCard("Dia atual", hoje.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"})) +
      metricCard("Dias do ano (até hoje)", diasDoAno) +
      metricCard("Total de horas no ano", fmtHoras(totalHoras)) +
      metricCard("Média de consumo no ano", mediaConsumo!==null?fmtHoras(mediaConsumo)+"/dia":"—") +
    '</div>'+
    '<div class="grid grid-2" style="margin-bottom:24px;">'+
      metricCard("Dias equivalentes usando celular", qtdDiasUsando.toFixed(2)+" dias") +
      metricCard("% do ano usando celular", pctDiasAno.toFixed(1)+"%") +
    '</div>'+
    '<div class="section-title" style="margin-top:0;">Consumo mensal</div>'+
    '<table style="width:100%;border-collapse:collapse;font-size:13px;">'+
      '<thead><tr style="color:var(--text-dim);text-align:left;"><th style="padding:8px 10px;font-weight:500;">Mês</th><th style="padding:8px 10px;font-weight:500;text-align:right;">Total</th><th style="padding:8px 10px;font-weight:500;text-align:right;">Média/dia</th></tr></thead>'+
      '<tbody>'+ mesesOrdenados.map(function(mes){
        const d = porMes[mes];
        const label = capitalizeMonthLabel(new Date(mes+"-02").toLocaleDateString("pt-BR",{month:"long",year:"numeric"}));
        return '<tr style="border-top:1px solid var(--border);"><td style="padding:8px 10px;">'+label+'</td>'+
          '<td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);">'+fmtHoras(d.total)+'</td>'+
          '<td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);">'+fmtHoras(d.total/d.dias)+'</td></tr>';
      }).join("") + '</tbody></table>';
}

function renderRegistroCelularForm(){
  const dataStr = new Date().toISOString().slice(0,10);
  const mostrarMsg = state.celularRegistroSalvoMsg;
  state.celularRegistroSalvoMsg = false;
  return '<div class="form-grid">'+
    field("Data", '<input type="date" id="fc-data" value="'+dataStr+'" />') +
    field("Tempo de consumo do celular (horas)", '<input type="text" id="fc-horas" placeholder="ex: 3:30" value="2:00" />') +
    field("Tempo de Google Maps (horas)", '<input type="text" id="fc-maps" placeholder="ex: 0:40" value="0:00" />') +
    '<div class="field"><label class="field-label">Tempo líquido de uso do celular</label><div id="fc-liquido-out" style="font-family:var(--font-mono);font-size:13px;color:var(--text-dim);padding:10px 0;">—</div></div>'+
    '<div id="fc-meta-indicator"></div>'+
    field("Observação", '<textarea id="fc-notas" rows="2"></textarea>') +
    '<button class="btn btn-primary" id="btn-salvar-celular">'+icon("check")+' Salvar registro diário</button>'+
    '<div class="toast" id="msg-salvo-celular" style="display:'+(mostrarMsg?"flex":"none")+';">'+icon("check")+' Registro salvo</div></div>';
}

function renderFiltroCelular(){
  if (!state.celularAnaliseView) state.celularAnaliseView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null };
  const v = state.celularAnaliseView;
  const tipos = [{id:"mes",label:"Mês"},{id:"semana",label:"Semana"},{id:"ano",label:"Ano"},{id:"custom",label:"Período"}];
  let nav = "";
  if (v.tipo === "ano") {
    nav = '<div style="font-size:13.5px;font-weight:500;">'+new Date().getFullYear()+'</div>';
  } else if (v.tipo !== "custom") {
    const { label } = getPeriodoAtual("celularAnaliseView");
    nav = '<div style="display:flex;align-items:center;gap:8px;">'+
      '<button class="icon-btn" data-periodoprev="celularAnaliseView" aria-label="Período anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>'+
      '<div style="font-size:13.5px;font-weight:500;min-width:150px;text-align:center;">'+label+'</div>'+
      '<button class="icon-btn" data-periodonext="celularAnaliseView" aria-label="Próximo período"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>'+
      (v.offset !== 0 ? '<button class="btn btn-ghost" data-periodohoje="celularAnaliseView" style="padding:6px 12px;font-size:12px;">Hoje</button>' : '') +
      '</div>';
  } else {
    const di = v.dataInicio || isoDate(startOfMonth(new Date()));
    const df = v.dataFim || isoDate(new Date());
    nav = '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">'+
      '<input type="date" id="custom-data-inicio-celularAnaliseView" value="'+di+'" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 10px;font-size:13px;color:var(--text);" />'+
      '<span style="color:var(--text-faint);font-size:13px;">até</span>'+
      '<input type="date" id="custom-data-fim-celularAnaliseView" value="'+df+'" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 10px;font-size:13px;color:var(--text);" />'+
      '<button class="btn btn-ghost" data-aplicarcustom="celularAnaliseView" style="padding:8px 14px;font-size:12.5px;">Aplicar</button>'+
      '</div>';
  }
  return '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px;">'+
    '<div class="tabs" style="border-bottom:none;margin-bottom:0;">'+
      tipos.map(function(t){ return '<button class="tab-btn '+(v.tipo===t.id?'is-active':'')+'" data-periodotipo="celularAnaliseView:'+t.id+'" style="padding:7px 12px;">'+t.label+'</button>'; }).join("")+
    '</div>'+ nav +
  '</div>';
}

function celularGetPeriodoAnalise(){
  const v = state.celularAnaliseView;
  if (v.tipo === "ano") {
    const hoje = new Date();
    return { start: new Date(hoje.getFullYear(),0,1), end: hoje, label: String(hoje.getFullYear()) };
  }
  return getPeriodoAtual("celularAnaliseView");
}

function renderAnaliseCelular(){
  if (!state.celularAnaliseView) state.celularAnaliseView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null };
  const { start, end } = celularGetPeriodoAnalise();
  const startIso = isoDate(start), endIso = isoDate(end);
  const regs = celularNoIntervalo(startIso, endIso);

  if (!regs.length) return renderFiltroCelular() + '<div class="empty-state">Nenhum registro de celular no período selecionado.</div>';

  const totalHoras = regs.reduce(function(s,r){ return s+celularHorasNet(r); }, 0);
  const mediaConsumo = totalHoras/regs.length;
  const pctAcordadoVals = regs.map(function(r){ return pctAcordadoUsando(celularHorasNet(r), r.data); }).filter(function(v){ return v!==null; });
  const mediaPctAcordado = pctAcordadoVals.length ? avg(pctAcordadoVals) : null;

  const counts = {};
  CATEGORIAS_CELULAR.forEach(function(c){ counts[c.id]=0; });
  // Para o gráfico por categoria, agrupamos por semana (já que a categoria é definida pelo TOTAL semanal)
  const porSemana = {};
  regs.forEach(function(r){
    const s = isoDate(startOfWeek(new Date(r.data+"T00:00:00")));
    if (!porSemana[s]) porSemana[s] = 0;
    porSemana[s] += celularHorasNet(r);
  });
  Object.keys(porSemana).forEach(function(s){
    const cat = categoriaCelularPorHoras(porSemana[s]);
    if (cat) counts[cat.id]++;
  });
  const totalSemanas = Object.keys(porSemana).length;

  return renderFiltroCelular() +
    '<div class="grid grid-3" style="margin-bottom:24px;">'+
      metricCard("Média de consumo", fmtHoras(mediaConsumo)+"/dia") +
      metricCard("Total de horas", fmtHoras(totalHoras)) +
      metricCard("% horas acordado em uso", mediaPctAcordado!==null?mediaPctAcordado.toFixed(1)+"%":"—") +
    '</div>'+
    '<div class="grid grid-2" style="align-items:start;">'+
      '<div>'+
        '<div class="section-title" style="margin-top:0;">Tempo de uso por categoria (semanas)</div>'+
        '<table style="width:100%;border-collapse:collapse;font-size:13px;">'+
          '<thead><tr style="color:var(--text-dim);text-align:left;"><th style="padding:8px 10px;font-weight:500;">Categoria</th><th style="padding:8px 10px;font-weight:500;text-align:right;">Semanas</th></tr></thead>'+
          '<tbody>'+ CATEGORIAS_CELULAR.map(function(c){
            return '<tr style="border-top:1px solid var(--border);"><td style="padding:8px 10px;"><span style="display:inline-flex;align-items:center;gap:7px;"><span style="width:9px;height:9px;border-radius:50%;background:'+c.color+';display:inline-block;"></span>'+c.label+'</span></td>'+
              '<td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);">'+counts[c.id]+'</td></tr>';
          }).join("") +
          '<tr style="border-top:1px solid var(--border-strong);"><td style="padding:8px 10px;font-weight:500;">Total</td><td style="padding:8px 10px;text-align:right;font-family:var(--font-mono);font-weight:500;">'+totalSemanas+'</td></tr>'+
          '</tbody></table>'+
      '</div>'+
      '<div>'+
        '<div class="section-title" style="margin-top:0;">Distribuição por categoria</div>'+
        '<div class="chart-wrap" style="height:240px;"><canvas id="chartCategoriaCelular" role="img" aria-label="Gráfico de distribuição de semanas por categoria de uso de celular"></canvas></div>'+
      '</div>'+
    '</div>';
}

function renderParametrosCelular(){
  const p = state.parametros;
  return '<div class="form-grid">'+
    field("Meta de uso diário de celular (horas)", '<input type="number" id="pc-meta" value="'+p.metaCelularHoras+'" min="0.5" max="10" step="0.25" />') +
    '<button class="btn btn-ghost" id="btn-salvar-param-celular">'+icon("check")+' Salvar parâmetros</button>'+
    '<div class="toast" id="msg-param-celular" style="display:none;">'+icon("check")+' Parâmetros atualizados</div></div>';
}

function renderHistoricoCelular(){
  const regs = celularOrdenado();
  if (!regs.length) return '<div class="empty-state">Nenhum registro ainda.</div>';

  const porSemana = {};
  regs.forEach(function(r){
    const s = isoDate(startOfWeek(new Date(r.data+"T00:00:00")));
    if (!porSemana[s]) porSemana[s] = [];
    porSemana[s].push(r);
  });
  const semanaAtualIso = isoDate(startOfWeek(new Date()));
  const semanasOrdenadas = Object.keys(porSemana).sort().reverse();

  return semanasOrdenadas.map(function(semanaIso){
    const itens = porSemana[semanaIso];
    const totalHoras = itens.reduce(function(s,r){ return s+celularHorasNet(r); }, 0);
    const mediaHorasSem = totalHoras/itens.length;
    const cat = categoriaCelularPorHoras(totalHoras);
    const inicio = new Date(semanaIso+"T00:00:00");
    const fim = new Date(inicio); fim.setDate(fim.getDate()+6);
    const labelSemana = inicio.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}) + " a " + fim.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});

    const isSemanaAtual = semanaIso === semanaAtualIso;
    const overrideExiste = state.semanasFechadasCelularMap && (semanaIso in state.semanasFechadasCelularMap);
    const aberta = overrideExiste ? !state.semanasFechadasCelularMap[semanaIso] : isSemanaAtual;

    const header = '<div class="list-row" style="cursor:pointer;" data-togglesemanacelular="'+semanaIso+'">'+
      '<div class="list-row-main"><div class="list-row-title">Semana de '+labelSemana+'</div>'+
      '<div class="list-row-sub">total '+fmtHoras(totalHoras)+' · média '+fmtHoras(mediaHorasSem)+'/dia</div></div>'+
      '<div class="badge" style="background:'+(cat?cat.color+'22':'')+';color:'+(cat?cat.color:'var(--text-dim)')+';">'+(cat?cat.label:"—")+'</div>'+
      '<button class="icon-btn" aria-label="'+(aberta?'Fechar':'Abrir')+' semana">'+(aberta?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>')+'</button>'+
      '</div>';

    const detalhes = aberta ? [...itens].sort(function(a,b){ return b.data.localeCompare(a.data); }).map(function(r){
      if (state.celularEditando === r.id) return renderEdicaoInlineCelular(r);
      const dataFmt = new Date(r.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",weekday:"short"});
      const liquido = celularHorasNet(r);
      const meta = state.parametros.metaCelularHoras;
      const diff = liquido - meta;
      const tagMeta = Math.abs(diff) < 0.0167 ? '<span class="badge badge-neutral" style="font-size:11px;">na meta</span>' :
        diff > 0 ? '<span class="badge" style="font-size:11px;background:#F2685B22;color:#F2685B;">+'+fmtHoras(diff)+' acima</span>' :
        '<span class="badge" style="font-size:11px;background:#4ED9A022;color:#4ED9A0;">'+fmtHoras(Math.abs(diff))+' abaixo</span>';
      return '<div class="list-row" style="margin-left:20px;background:transparent;border-style:dashed;flex-wrap:wrap;"><div class="list-row-main">'+
        '<div class="list-row-title" style="font-size:12.5px;font-weight:400;color:var(--text-dim);">'+dataFmt+'</div>'+
        '<div class="list-row-sub">consumo '+fmtHoras(r.horasConsumo)+' · maps '+fmtHoras(r.horasMaps)+' · líquido '+fmtHoras(liquido)+(r.notas?' · "'+r.notas+'"':'')+'</div></div>'+
        tagMeta+
        '<button class="icon-btn" data-editcelular="'+r.id+'" aria-label="Editar registro" title="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4h2M4 14.5V20h5.5L20 9.5 14.5 4 4 14.5z"/></svg></button>'+
        '<button class="icon-btn" data-delcelular="'+r.id+'" aria-label="Excluir registro">'+icon("trash")+'</button></div>';
    }).join("") : "";

    return header + detalhes;
  }).join("");
}

function renderEdicaoInlineCelular(r){
  const liquidoAtual = celularHorasNet(r);
  return '<div class="list-row" style="margin-left:20px;flex-direction:column;align-items:stretch;gap:10px;background:var(--surface-raised);">'+
    '<div class="form-row">'+
      field("Consumo (horas)", '<input type="text" id="edit-celular-horas" value="'+decimalParaHora(r.horasConsumo)+'" />') +
      field("Google Maps (horas)", '<input type="text" id="edit-celular-maps" value="'+decimalParaHora(r.horasMaps)+'" />') +
    '</div>'+
    field("Observação", '<textarea id="edit-celular-notas" rows="2">'+(r.notas||"")+'</textarea>') +
    '<div style="display:flex;gap:8px;">'+
      '<button class="btn btn-primary" data-salvaredicaocelular="'+r.id+'" style="padding:8px 16px;font-size:12.5px;">'+icon("check")+' Salvar</button>'+
      '<button class="btn btn-ghost" data-cancelaredicaocelular="1" style="padding:8px 16px;font-size:12.5px;">Cancelar</button>'+
    '</div></div>';
}

function renderCelular(){
  if (!state.celularTab) state.celularTab = "dashboard";
  const tabs = [{id:"dashboard",label:"Dashboard"},{id:"registro",label:"Registrar"},{id:"historico",label:"Histórico"},{id:"analise",label:"Análises"},{id:"parametros",label:"Parâmetros"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Uso do celular</div></div>'+
    tabsHtml(tabs, state.celularTab, "celulartab") +
    '<div id="celular-content">' + (
      state.celularTab==="dashboard" ? renderDashboardCelularAno() :
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

// ---------- Módulo: Exercícios físicos (bioimpedância + peso + atividade) ----------

function bioOrdenada(){ return [...state.bioimpedancia].sort((a,b)=>a.dataMedicao.localeCompare(b.dataMedicao)); }
function bioMaisRecente(){ const l = bioOrdenada(); return l.length ? l[l.length-1] : null; }
function bioAnterior(){ const l = bioOrdenada(); return l.length>1 ? l[l.length-2] : null; }
function bioPrimeira(){ const l = bioOrdenada(); return l.length ? l[0] : null; }

function deltaTexto(atual, anterior, unidade, decimais){
  if (atual===null || atual===undefined || anterior===null || anterior===undefined) return null;
  const diff = atual - anterior;
  if (Math.abs(diff) < (decimais===0?1:0.05)) return { type:"neutral", text:"sem alteração" };
  const sinal = diff > 0 ? "+" : "";
  return { type: diff>0?"up":"down", text: sinal+diff.toFixed(decimais!==undefined?decimais:1)+unidade+" vs. anterior" };
}

// Classificação individual de cada indicador: positivo / padrão / negativo
// Usa as faixas do próprio relatório da balança (pessoais) como referência
// principal, complementadas por referências gerais conhecidas.
const BIO_INDICADORES = [
  { key: "imc", label: "IMC", unidade: "", decimais: 1,
    classificar: function(v){ if (v===null) return null; if (v<18.5) return "atencao"; if (v<=24.9) return "positivo"; if (v<=29.9) return "atencao"; return "negativo"; },
    desc: function(v,c){ return c==="positivo" ? "Dentro da faixa considerada normal (18.5–24.9)." : c==="atencao" ? (v<18.5?"Abaixo do peso normal.":"Faixa de sobrepeso (25–29.9) — vale atenção para não progredir.") : "Faixa de obesidade (30+) pela classificação padrão de IMC — recomenda-se acompanhamento."; } },
  { key: "relacaoGorduraPct", label: "Relação de gordura", unidade: "%", decimais: 1,
    classificar: function(v){ if (v===null) return null; if (v<=20) return "positivo"; if (v<=26.5) return "atencao"; return "negativo"; },
    desc: function(v,c){ return c==="positivo" ? "Percentual de gordura corporal saudável." : c==="atencao" ? "Pouco acima da faixa normal (10–20%)." : "Acima da faixa recomendada — vale priorizar redução de gordura nos próximos meses."; } },
  { key: "gorduraVisceral", label: "Gordura visceral", unidade: "", decimais: 0,
    classificar: function(v){ if (v===null) return null; if (v<10) return "positivo"; if (v<=14) return "atencao"; return "negativo"; },
    desc: function(v,c){ return c==="positivo" ? "Nível saudável — baixo risco cardiometabólico associado." : c==="atencao" ? "No limite superior; merece atenção." : "Elevada — associada a maior risco cardiovascular e metabólico. Atividade aeróbica regular ajuda a reduzir esse indicador."; } },
  { key: "idadeCorpo", label: "Idade do corpo", unidade: " anos", decimais: 0,
    classificar: function(v,bio){ if (v===null||!bio.idade) return null; const diff=v-bio.idade; if (diff<=0) return "positivo"; if (diff<=5) return "atencao"; return "negativo"; },
    desc: function(v,c,bio){ const diff = bio&&bio.idade? v-bio.idade : null; if (diff===null) return ""; if (diff<=0) return "Sua idade corporal está igual ou abaixo da sua idade real — bom sinal."; if (diff<=5) return "Idade corporal "+diff+" anos acima da real — espaço para melhora."; return "Idade corporal "+diff+" anos acima da real, indicando necessidade de atenção a composição corporal e condicionamento."; } },
  { key: "massaMuscularEsqueleticaKg", label: "Massa muscular esquelética", unidade: "kg", decimais: 1,
    classificar: function(v){ if (v===null) return null; if (v>=35.2) return "positivo"; if (v>=28.8) return "atencao"; return "negativo"; },
    desc: function(v,c){ return c==="positivo" ? "Acima da faixa normal para o seu perfil — bom volume muscular." : c==="atencao" ? "Dentro da faixa normal." : "Abaixo da faixa normal — treino de força pode ajudar a desenvolver massa muscular."; } },
  { key: "bmrKcal", label: "Metabolismo basal (BMR)", unidade: " kcal", decimais: 0,
    classificar: function(){ return "atencao"; },
    desc: function(){ return "Quantidade mínima de energia que seu corpo consome em repouso. Não tem faixa de 'bom ou ruim' — varia com sua composição corporal."; } }
];

function analisarIndicadoresBio(bio){
  return BIO_INDICADORES.map(function(ind){
    const valor = bio[ind.key];
    const cat = ind.classificar(valor, bio);
    return { label: ind.label, valor: valor, unidade: ind.unidade, decimais: ind.decimais, categoria: cat, descricao: ind.desc(valor, cat, bio) };
  });
}

function gerarComparativoIA(atual, referencia, tituloPeriodo){
  if (!atual || !referencia || atual.id===referencia.id) return [];
  const textos = [];
  const diffPeso = atual.pesoKg - referencia.pesoKg;
  const diffGordura = (atual.massaGordaKg||0) - (referencia.massaGordaKg||0);
  const diffMuscular = (atual.massaMuscularEsqueleticaKg||0) - (referencia.massaMuscularEsqueleticaKg||0);
  const diffImc = (atual.imc||0) - (referencia.imc||0);
  const diffVisceral = (atual.gorduraVisceral||0) - (referencia.gorduraVisceral||0);
  const dataRef = new Date(referencia.dataMedicao).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"});

  textos.push(tituloPeriodo+" ("+dataRef+"): peso "+(diffPeso>=0?"+":"")+diffPeso.toFixed(1)+"kg, massa gorda "+(diffGordura>=0?"+":"")+diffGordura.toFixed(1)+"kg, massa muscular "+(diffMuscular>=0?"+":"")+diffMuscular.toFixed(1)+"kg.");

  if (diffGordura < -0.3 && diffMuscular >= -0.2) {
    textos.push("Tendência positiva: redução de massa gorda com manutenção ou ganho de massa muscular — composição corporal melhorando, não apenas o peso na balança.");
  } else if (diffGordura > 0.3 && diffMuscular < 0) {
    textos.push("Atenção: aumento de massa gorda combinado com queda de massa muscular nesse período. Vale revisar treino de força e ingestão de proteína.");
  } else if (Math.abs(diffPeso) < 0.3) {
    textos.push("Peso estável nesse período, com pequenas variações na composição corporal.");
  }
  if (diffVisceral !== 0) {
    textos.push("Gordura visceral "+(diffVisceral>0?"aumentou":"diminuiu")+" "+Math.abs(diffVisceral).toFixed(0)+" ponto(s) no período.");
  }
  return textos;
}

function renderIndicadorBadge(categoria){
  const map = { positivo: { label:"Bom", color:"#4ED9A0" }, atencao: { label:"Moderado", color:"#F2D94B" }, negativo: { label:"Alerta", color:"#F2685B" } };
  const c = map[categoria] || { label:"—", color:"var(--text-dim)" };
  return '<span class="badge" style="background:'+c.color+'22;color:'+c.color+';">'+c.label+'</span>';
}

function renderVisaoGeralBio(){
  const atual = bioMaisRecente();
  if (!atual) return '<div class="empty-state">Nenhum relatório de bioimpedância ainda. Envie a foto do relatório no chat para que seja importado.</div>';
  const anterior = bioAnterior();
  const primeira = bioPrimeira();
  const indicadores = analisarIndicadoresBio(atual);
  const dataFmt = new Date(atual.dataMedicao).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"});

  const comparativoAnterior = anterior ? gerarComparativoIA(atual, anterior, "Desde a medição anterior") : [];
  const comparativoPrimeira = (primeira && primeira.id!==atual.id) ? gerarComparativoIA(atual, primeira, "Desde a primeira medição") : [];

  return '<div class="section-title" style="margin-top:0;">Análise assistida por IA</div>'+
    (comparativoAnterior.length ? comparativoAnterior.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("") : '<div class="insight-row">'+icon("bulb")+'<span>Esta é sua primeira medição registrada. Assim que houver uma segunda, mostraremos a evolução aqui.</span></div>')+
    (comparativoPrimeira.length ? '<p style="font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.5px;margin:16px 0 8px;">Desde a primeira medição</p>'+comparativoPrimeira.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("") : '')+

    '<div class="section-title">Última medição · '+dataFmt+'</div>'+
    '<div class="grid grid-3" style="margin-bottom:8px;">'+
      metricCard("Pontuação de saúde", atual.pontuacaoSaude) +
      metricCard("Peso", atual.pesoKg!==null?atual.pesoKg.toFixed(2)+"kg":"—") +
      metricCard("Tipo de corpo", atual.tipoCorpo||"—") +
    '</div>'+

    '<div class="section-title">Análise individual dos indicadores</div>'+
    indicadores.map(function(ind){
      return '<div class="list-row" style="align-items:flex-start;"><div class="list-row-main" style="flex:1;">'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">'+
        '<span class="list-row-title">'+ind.label+'</span>'+
        '<span style="display:flex;align-items:center;gap:10px;"><span style="font-family:var(--font-mono);">'+(ind.valor!==null?ind.valor.toFixed(ind.decimais)+ind.unidade:"—")+'</span>'+renderIndicadorBadge(ind.categoria)+'</span>'+
        '</div>'+
        '<div class="list-row-sub" style="font-family:var(--font-body);">'+ind.descricao+'</div>'+
        '</div></div>';
    }).join("")+

    '<div class="chart-wrap" style="height:220px;margin-top:20px;"><canvas id="chartBioEvolucao" role="img" aria-label="Gráfico de evolução de peso e massa gorda ao longo das medições"></canvas></div>';
}

function renderBioimpedanciaCard(bio, anterior){
  const dataFmt = new Date(bio.dataMedicao).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"});
  const horaFmt = new Date(bio.dataMedicao).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});

  function linha(label, valor, unidade, deltaAnt, decimais){
    const delta = anterior ? deltaTexto(valor, deltaAnt, unidade, decimais) : null;
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);font-size:13px;">'+
      '<span style="color:var(--text-dim);">'+label+'</span>'+
      '<span style="display:flex;align-items:center;gap:8px;"><span style="font-family:var(--font-mono);font-weight:500;">'+(valor!==null&&valor!==undefined?valor+unidade:"—")+'</span>'+
      (delta?'<span class="metric-delta '+delta.type+'" style="font-size:11px;">'+delta.text+'</span>':'')+'</span></div>';
  }

  return '<div class="card" style="margin-bottom:20px;">'+
    '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">'+
      '<div><p style="font-size:15px;font-weight:500;margin:0;">'+dataFmt+'</p><p style="font-size:12px;color:var(--text-dim);margin:2px 0 0;">'+horaFmt+' · '+(bio.tipoCorpo||"")+'</p></div>'+
      '<div style="text-align:right;"><div style="font-family:var(--font-mono);font-size:22px;font-weight:500;">'+bio.pontuacaoSaude+'</div><div style="font-size:11px;color:var(--text-dim);">pontos de saúde</div></div>'+
      '<button class="icon-btn" data-delbio="'+bio.id+'" aria-label="Excluir relatório">'+icon("trash")+'</button>'+
    '</div>'+
    '<div class="grid grid-2" style="gap:24px;margin-top:14px;">'+
      '<div>'+
        '<p style="font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.5px;margin:0 0 4px;">Composição corporal</p>'+
        linha("Peso", bio.pesoKg, "kg", anterior?anterior.pesoKg:null, 2) +
        linha("Água corporal", bio.aguaCorporalKg, "kg", anterior?anterior.aguaCorporalKg:null, 1) +
        linha("Massa proteica", bio.massaProteicaKg, "kg", anterior?anterior.massaProteicaKg:null, 1) +
        linha("Minerais", bio.mineraisKg, "kg", anterior?anterior.mineraisKg:null, 1) +
        linha("Massa gorda", bio.massaGordaKg, "kg", anterior?anterior.massaGordaKg:null, 1) +
        linha("Massa muscular esquelética", bio.massaMuscularEsqueleticaKg, "kg", anterior?anterior.massaMuscularEsqueleticaKg:null, 1) +
      '</div>'+
      '<div>'+
        '<p style="font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.5px;margin:0 0 4px;">Obesidade e indicadores</p>'+
        linha("IMC", bio.imc, "", anterior?anterior.imc:null, 1) +
        linha("Relação de gordura", bio.relacaoGorduraPct, "%", anterior?anterior.relacaoGorduraPct:null, 1) +
        linha("Adiposidade", bio.adiposidadeNivel, "", anterior?anterior.adiposidadeNivel:null, 0) +
        linha("Gordura visceral", bio.gorduraVisceral, "", anterior?anterior.gorduraVisceral:null, 0) +
        linha("Idade do corpo", bio.idadeCorpo, " anos", anterior?anterior.idadeCorpo:null, 0) +
        linha("BMR", bio.bmrKcal, " kcal", anterior?anterior.bmrKcal:null, 0) +
      '</div>'+
    '</div>'+
    '<div class="grid grid-2" style="gap:24px;margin-top:6px;">'+
      '<div>'+
        '<p style="font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.5px;margin:14px 0 4px;">Outros indicadores</p>'+
        linha("Massa livre de gordura", bio.massaLivreGorduraKg, "kg", anterior?anterior.massaLivreGorduraKg:null, 1) +
        linha("Massa gordura subcutânea", bio.massaGorduraSubcutaneaKg, "kg", anterior?anterior.massaGorduraSubcutaneaKg:null, 1) +
        linha("Ingestão calórica recomendada", bio.ingestaoCaloricaRecomendadaKcal, " kcal", anterior?anterior.ingestaoCaloricaRecomendadaKcal:null, 0) +
      '</div>'+
      '<div>'+
        '<p style="font-size:11px;color:var(--text-faint);text-transform:uppercase;letter-spacing:0.5px;margin:14px 0 4px;">Controle de peso</p>'+
        linha("Peso padrão", bio.pesoPadraoKg, "kg", null) +
        linha("Controle de peso", bio.controlePesoKg, "kg", null) +
        linha("Controle de gordura", bio.controleGorduraKg, "kg", null) +
        linha("Controle muscular", bio.controleMuscularKg, "kg", null) +
      '</div>'+
    '</div>'+
  '</div>';
}

function renderHistoricoBio(){
  const lista = bioOrdenada();
  if (!lista.length) return '<div class="empty-state">Nenhum relatório ainda.</div>';
  return [...lista].reverse().map(function(b, i){ return renderBioimpedanciaCard(b, lista[lista.length-2-i] || null); }).join("");
}

function renderBioimpedanciaTab(){
  if (!state.bioTab) state.bioTab = "geral";
  const tabs = [{id:"geral",label:"Visão geral"},{id:"historico",label:"Histórico"}];
  return tabsHtml(tabs, state.bioTab, "biotab") +
    '<div id="bio-content">' + (
      state.bioTab==="geral" ? renderVisaoGeralBio() : renderHistoricoBio()
    ) + '</div>';
}

function renderRegistroPesoForm(){
  const today = new Date().toISOString().slice(0,10);
  return '<div class="form-grid">'+
    field("Data", '<input type="date" id="fp-data" value="'+today+'" />') +
    field("Peso (kg)", '<input type="number" id="fp-peso" min="30" max="250" step="0.1" placeholder="ex: 88.5" />') +
    field("Observação (opcional)", '<textarea id="fp-notas" rows="2"></textarea>') +
    '<button class="btn btn-primary" id="btn-salvar-peso">'+icon("check")+' Salvar peso</button>'+
    '<div class="toast" id="msg-salvo-peso" style="display:none;">'+icon("check")+' Peso salvo</div></div>';
}

function renderHistoricoPeso(){
  const lista = [...state.pesos].sort((a,b)=>b.data.localeCompare(a.data));
  if (!lista.length) return '<div class="empty-state">Nenhum registro de peso ainda.</div>';
  const bio = bioMaisRecente();
  return lista.map(function(p, i){
    const dataFmt = new Date(p.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});
    const anterior = lista[i+1];
    const delta = anterior ? deltaTexto(p.pesoKg, anterior.pesoKg, "kg", 1) : null;
    return '<div class="list-row"><div class="list-row-main"><div class="list-row-title">'+dataFmt+'</div>'+
      (p.notas?'<div class="list-row-sub" style="font-family:var(--font-body);">'+p.notas+'</div>':'')+'</div>'+
      '<div style="display:flex;align-items:center;gap:10px;">'+
      (delta?'<span class="metric-delta '+delta.type+'" style="font-size:11.5px;">'+delta.text+'</span>':'')+
      '<div class="badge badge-neutral" style="font-size:13px;">'+p.pesoKg.toFixed(1)+'kg</div></div>'+
      '<button class="icon-btn" data-delpeso="'+p.id+'" aria-label="Excluir registro">'+icon("trash")+'</button></div>';
  }).join("");
}

function renderAnalisePeso(){
  const lista = [...state.pesos].sort((a,b)=>a.data.localeCompare(b.data));
  const bio = bioMaisRecente();
  if (!lista.length && !bio) return '<div class="empty-state">Nenhum dado de peso ainda.</div>';
  const ultimoPeso = lista.length ? lista[lista.length-1].pesoKg : (bio?bio.pesoKg:null);
  const primeiroPeso = lista.length ? lista[0].pesoKg : null;
  const variacaoTotal = (ultimoPeso!==null && primeiroPeso!==null) ? ultimoPeso-primeiroPeso : null;
  return '<div class="grid grid-3" style="margin-bottom:20px;">'+
      metricCard("Peso atual", ultimoPeso!==null?ultimoPeso.toFixed(1)+"kg":"—") +
      metricCard("Peso padrão (meta)", bio&&bio.pesoPadraoKg!==null?bio.pesoPadraoKg.toFixed(1)+"kg":"—") +
      metricCard("Variação no período", variacaoTotal!==null?(variacaoTotal>=0?"+":"")+variacaoTotal.toFixed(1)+"kg":"—") +
    '</div>'+
    '<div class="chart-wrap" style="height:240px;"><canvas id="chartPesoEvolucao" role="img" aria-label="Gráfico de evolução do peso ao longo do tempo"></canvas></div>';
}

function renderPesoTab(){
  if (!state.pesoTab) state.pesoTab = "registro";
  const tabs = [{id:"registro",label:"Registrar"},{id:"historico",label:"Histórico"},{id:"analise",label:"Análises"}];
  return tabsHtml(tabs, state.pesoTab, "pesotab") +
    '<div id="peso-content">' + (
      state.pesoTab==="registro" ? renderRegistroPesoForm() :
      state.pesoTab==="historico" ? renderHistoricoPeso() : renderAnalisePeso()
    ) + '</div>';
}

function calcDuracaoAtividade(horaInicio, horaFim){
  if (!horaInicio || !horaFim) return null;
  return calcDuracao(horaInicio, horaFim);
}

function movPorData(data){ return state.movimentacao.find(function(m){ return m.data===data; }) || null; }

function exerAtividadeGetPeriodo(){
  if (!state.atividadeView) state.atividadeView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null, filtroTipo: "" };
  return getPeriodoAtual("atividadeView");
}

function renderFiltroAtividade(){
  const tiposDisponiveis = Array.from(new Set(state.exercicios.map(function(e){ return e.tipo; }).filter(Boolean))).sort();
  const v = state.atividadeView;
  return renderPeriodSelector("atividadeView") +
    '<div style="margin:-6px 0 18px;">'+
      '<select id="filtro-tipo-atividade" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 12px;font-size:13px;color:var(--text);max-width:220px;">'+
        '<option value="">Todos os tipos</option>'+
        tiposDisponiveis.map(function(t){ return '<option value="'+t+'" '+(v.filtroTipo===t?"selected":"")+'>'+t+'</option>'; }).join("")+
      '</select>'+
    '</div>';
}

function renderAnaliseExercicios(){
  if (!state.atividadeView) state.atividadeView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null, filtroTipo: "" };
  const { start, end } = exerAtividadeGetPeriodo();
  const startIso = isoDate(start), endIso = isoDate(end);
  const filtroTipo = state.atividadeView.filtroTipo;

  let atividades = state.exercicios.filter(function(e){ return e.data>=startIso && e.data<=endIso; });
  if (filtroTipo) atividades = atividades.filter(function(e){ return e.tipo===filtroTipo; });

  const movs = state.movimentacao.filter(function(m){ return m.data>=startIso && m.data<=endIso; });

  const diasAtivos = new Set(atividades.map(function(e){ return e.data; })).size;
  const mediaPassos = movs.filter(function(m){ return m.passos; }).length ? Math.round(avg(movs.filter(function(m){ return m.passos; }).map(function(m){ return m.passos; }))) : null;
  const mediaAtivo = movs.filter(function(m){ return m.minutosAtivo; }).length ? Math.round(avg(movs.filter(function(m){ return m.minutosAtivo; }).map(function(m){ return m.minutosAtivo; }))) : null;
  const mediaCalorias = movs.filter(function(m){ return m.caloriasTotais; }).length ? Math.round(avg(movs.filter(function(m){ return m.caloriasTotais; }).map(function(m){ return m.caloriasTotais; }))) : null;
  const mediaDistancia = movs.filter(function(m){ return m.distanciaKm; }).length ? avg(movs.filter(function(m){ return m.distanciaKm; }).map(function(m){ return m.distanciaKm; })) : null;

  const porTipo = {};
  atividades.forEach(function(e){ if (e.tipo) porTipo[e.tipo] = (porTipo[e.tipo]||0)+1; });
  const tipoMaisFreq = Object.keys(porTipo).sort(function(a,b){ return porTipo[b]-porTipo[a]; })[0];

  const insights = [];
  insights.push("No período selecionado, você teve "+diasAtivos+" dia(s) com atividade física registrada"+(filtroTipo?" do tipo "+filtroTipo:"")+".");
  if (tipoMaisFreq) insights.push("Atividade mais frequente: "+tipoMaisFreq+" ("+porTipo[tipoMaisFreq]+"x).");
  if (mediaPassos) insights.push("Média de passos no período: "+mediaPassos.toLocaleString("pt-BR")+" por dia.");

  return renderFiltroAtividade() +
    '<div class="grid grid-4" style="margin-bottom:20px;">'+
      metricCard("Dias ativos", diasAtivos, "run") +
      metricCard("Passos (média)", mediaPassos!==null?mediaPassos.toLocaleString("pt-BR"):"—") +
      metricCard("Tempo ativo (média)", mediaAtivo!==null?mediaAtivo+" min":"—") +
      metricCard("Calorias (média)", mediaCalorias!==null?mediaCalorias.toLocaleString("pt-BR")+" kcal":"—") +
    '</div>'+
    '<div class="grid grid-2" style="margin-bottom:20px;">'+
      metricCard("Distância (média)", mediaDistancia!==null?mediaDistancia.toFixed(1)+" km":"—") +
      metricCard("Atividade mais frequente", tipoMaisFreq||"—") +
    '</div>'+
    '<div class="chart-wrap" style="height:220px;"><canvas id="chartExerciciosTipo" role="img" aria-label="Gráfico de frequência por tipo de exercício"></canvas></div>'+
    '<div class="section-title">Observações</div>'+
    insights.map(function(d){ return '<div class="insight-row">'+icon("bulb")+'<span>'+d+'</span></div>'; }).join("");
}

function renderRegistroAtividadeForm(){
  const today = new Date().toISOString().slice(0,10);
  return '<div class="form-grid">'+
    '<p style="font-size:12.5px;color:var(--text-dim);margin:-6px 0 4px;">Registre uma atividade física específica que você praticou.</p>'+
    field("Data", '<input type="date" id="fe-data" value="'+today+'" />') +
    field("Tipo de atividade", '<select id="fe-tipo"><option value="Academia">Academia</option><option value="Futebol">Futebol</option><option value="Natação">Natação</option><option value="Bike">Bike</option><option value="Corrida">Corrida</option><option value="Outro">Outro</option></select>') +
    '<div class="form-row">'+field("Hora início", '<input type="time" id="fe-inicio" value="19:00" />')+field("Hora fim", '<input type="time" id="fe-fim" value="20:00" />')+'</div>'+
    field("Observação", '<textarea id="fe-notas" rows="2"></textarea>') +
    '<button class="btn btn-primary" id="btn-salvar-exercicio">'+icon("check")+' Salvar atividade</button>'+
    '<div class="toast" id="msg-salvo-exercicio" style="display:none;">'+icon("check")+' Atividade salva</div></div>';
}

function renderRegistroMovimentacaoForm(){
  const today = new Date().toISOString().slice(0,10);
  return '<div class="form-grid">'+
    '<p style="font-size:12.5px;color:var(--text-dim);margin:-6px 0 4px;">Registre as movimentações do dia (dados do smartwatch), independente de ter feito uma atividade específica.</p>'+
    field("Data", '<input type="date" id="fm-data" value="'+today+'" />') +
    field("Tempo ativo (minutos)", '<input type="number" id="fm-ativo" min="0" max="1000" placeholder="ex: 90" />') +
    field("Passos", '<input type="number" id="fm-passos" min="0" max="50000" placeholder="ex: 8000" />') +
    field("Calorias da atividade", '<input type="number" id="fm-calatividade" min="0" max="5000" placeholder="ex: 350" />') +
    field("Total de calorias perdidas", '<input type="number" id="fm-caltotal" min="0" max="6000" placeholder="ex: 2100" />') +
    field("Distância durante atividade (km)", '<input type="number" id="fm-distancia" min="0" max="100" step="0.1" placeholder="ex: 5.2" />') +
    '<button class="btn btn-primary" id="btn-salvar-movimentacao">'+icon("check")+' Salvar movimentação</button>'+
    '<div class="toast" id="msg-salvo-movimentacao" style="display:none;">'+icon("check")+' Movimentação salva</div></div>';
}

function renderRegistroExercicioForm(){
  if (!state.tipoRegistroAtividade) state.tipoRegistroAtividade = "atividade";
  const opcoes = [{id:"atividade",label:"Atividade física"},{id:"movimentacao",label:"Movimentação do dia"}];
  return tabsHtml(opcoes, state.tipoRegistroAtividade, "tiporegistro") +
    '<div id="registro-atividade-content">' + (
      state.tipoRegistroAtividade==="atividade" ? renderRegistroAtividadeForm() : renderRegistroMovimentacaoForm()
    ) + '</div>';
}

function renderHistoricoExercicios(){
  const datasAtividade = new Set(state.exercicios.map(function(e){ return e.data; }));
  const datasMov = new Set(state.movimentacao.map(function(m){ return m.data; }));
  const todasDatas = Array.from(new Set([...datasAtividade, ...datasMov])).sort().reverse().slice(0,60);
  if (!todasDatas.length) return '<div class="empty-state">Nenhum dado registrado ainda.</div>';

  return todasDatas.map(function(data){
    const dataFmt = new Date(data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});
    const atividadesDoDia = state.exercicios.filter(function(e){ return e.data===data; });
    const mov = movPorData(data);

    const detalhesAtividade = atividadesDoDia.map(function(e){
      const dur = calcDuracaoAtividade(e.horaInicio, e.horaFim);
      return e.tipo+(e.horaInicio&&e.horaFim?" ("+e.horaInicio+"–"+e.horaFim+(dur?", "+fmtHoras(dur):"")+")":"");
    }).join(" · ");

    const detalhesMov = [];
    if (mov) {
      if (mov.passos) detalhesMov.push(mov.passos.toLocaleString("pt-BR")+" passos");
      if (mov.minutosAtivo) detalhesMov.push(mov.minutosAtivo+" min ativo");
      if (mov.caloriasTotais) detalhesMov.push(mov.caloriasTotais+" kcal");
      if (mov.distanciaKm) detalhesMov.push(mov.distanciaKm+" km");
    }

    const botoesExcluir = atividadesDoDia.map(function(e){ return '<button class="icon-btn" data-delexercicio="'+e.id+'" aria-label="Excluir atividade" title="Excluir atividade">'+icon("trash")+'</button>'; }).join("");
    const botaoExcluirMov = mov ? '<button class="icon-btn" data-delmovimentacao="'+mov.id+'" aria-label="Excluir movimentação" title="Excluir movimentação"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 17l3.5-2 2-4 4 1 3 5 3.5 1.5"/></svg></button>' : '';

    return '<div class="list-row" style="flex-wrap:wrap;"><div class="list-row-main">'+
      '<div class="list-row-title">'+dataFmt+'</div>'+
      (detalhesAtividade?'<div class="list-row-sub" style="font-family:var(--font-body);color:var(--purple);">'+detalhesAtividade+'</div>':'')+
      (detalhesMov.length?'<div class="list-row-sub" style="font-family:var(--font-body);">'+detalhesMov.join(" · ")+'</div>':'')+
      '</div>'+
      '<div style="display:flex;gap:4px;">'+botoesExcluir+botaoExcluirMov+'</div>'+
      '</div>';
  }).join("");
}

function renderExerciciosTab(){
  if (!state.exercicioTab) state.exercicioTab = "analise";
  const tabs = [{id:"analise",label:"Análises"},{id:"registro",label:"Registrar"},{id:"historico",label:"Histórico"}];
  return tabsHtml(tabs, state.exercicioTab, "exerciciotab") +
    '<div id="exercicio-content">' + (
      state.exercicioTab==="registro" ? renderRegistroExercicioForm() :
      state.exercicioTab==="historico" ? renderHistoricoExercicios() : renderAnaliseExercicios()
    ) + '</div>';
}

function renderExercicios(){
  if (!state.exerciciosSecao) state.exerciciosSecao = "bioimpedancia";
  const secoes = [{id:"bioimpedancia",label:"Bioimpedância"},{id:"peso",label:"Peso"},{id:"atividade",label:"Atividade física"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Exercícios físicos</div></div>'+
    tabsHtml(secoes, state.exerciciosSecao, "exerciciosecao") +
    '<div id="exercicios-content">' + (
      state.exerciciosSecao==="bioimpedancia" ? renderBioimpedanciaTab() :
      state.exerciciosSecao==="peso" ? renderPesoTab() : renderExerciciosTab()
    ) + '</div>';
}

// ---------- Módulo: Hábitos diários ----------

function habitoAplicavelNoDia(habito, dataIso){
  const d = new Date(dataIso+"T00:00:00");
  const diaSemana = d.getDay(); // 0=domingo
  const diaMes = d.getDate();
  if (habito.tipoRecorrencia === "diario") return true;
  if (habito.tipoRecorrencia === "semanal") return (habito.diasSemana||[]).indexOf(diaSemana) >= 0;
  if (habito.tipoRecorrencia === "mensal") return (habito.diasMes||[]).indexOf(diaMes) >= 0;
  return true;
}

function habitosAplicaveisNoDia(dataIso, incluirInativos){
  return state.habitos.filter(function(h){
    if (!incluirInativos && !h.ativo) return false;
    return habitoAplicavelNoDia(h, dataIso);
  });
}

function registroHabitoNoDia(habitoId, dataIso){
  return state.registrosHabitos.find(function(r){ return r.habitoId===habitoId && r.data===dataIso; }) || null;
}

function scoreDisciplinaDia(dataIso){
  // Para o cálculo no dashboard de dias passados, considera os hábitos que tinham
  // QUALQUER registro nesse dia (cumprido ou não) — preserva histórico mesmo se o
  // hábito for inativado depois.
  const idsComRegistro = state.registrosHabitos.filter(function(r){ return r.data===dataIso; }).map(function(r){ return r.habitoId; });
  const aplicaveisHoje = habitosAplicaveisNoDia(dataIso, false).map(function(h){ return h.id; });
  const idsRelevantes = Array.from(new Set([...idsComRegistro, ...aplicaveisHoje]));
  if (!idsRelevantes.length) return null;
  const cumpridos = idsRelevantes.filter(function(id){
    const r = registroHabitoNoDia(id, dataIso);
    return r && r.cumprido;
  }).length;
  return Math.round((cumpridos/idsRelevantes.length)*100);
}

function calcularSequenciaAtual(){
  let seq = 0;
  let cur = new Date();
  while (true) {
    const iso = isoDate(cur);
    const aplicaveis = habitosAplicaveisNoDia(iso, false);
    if (aplicaveis.length === 0) { cur.setDate(cur.getDate()-1); continue; }
    const score = scoreDisciplinaDia(iso);
    if (score === null || score < 100) break;
    seq++;
    cur.setDate(cur.getDate()-1);
    if (seq > 730) break;
  }
  return seq;
}

function renderDashboardHabitos(){
  const hoje = isoDate(new Date());
  const scoreHoje = scoreDisciplinaDia(hoje);
  const sequencia = calcularSequenciaAtual();

  const { start, end } = getPeriodoAtual("habitosView");
  const startIso = isoDate(start), endIso = isoDate(end);
  const dias = [];
  let cur = new Date(start);
  while (isoDate(cur) <= endIso) { dias.push(isoDate(cur)); cur.setDate(cur.getDate()+1); }
  const scoresPeriodo = dias.map(scoreDisciplinaDia).filter(function(s){ return s!==null; });
  const mediaPeriodo = scoresPeriodo.length ? Math.round(avg(scoresPeriodo)) : null;

  // Consistência por hábito ativo no período
  const habitosAtivos = state.habitos.filter(function(h){ return h.ativo; }).sort(function(a,b){ return a.ordem-b.ordem; });
  const consistencia = habitosAtivos.map(function(h){
    const diasAplicaveis = dias.filter(function(d){ return habitoAplicavelNoDia(h, d); });
    const diasCumpridos = diasAplicaveis.filter(function(d){ const r = registroHabitoNoDia(h.id, d); return r && r.cumprido; });
    const pct = diasAplicaveis.length ? Math.round((diasCumpridos.length/diasAplicaveis.length)*100) : null;
    return { habito: h, pct: pct, total: diasAplicaveis.length, cumpridos: diasCumpridos.length };
  });
  const emDia = consistencia.filter(function(c){ return c.pct!==null && c.pct>=80; });
  const maisFraco = consistencia.filter(function(c){ return c.pct!==null; }).sort(function(a,b){ return a.pct-b.pct; })[0];

  return renderPeriodSelector("habitosView") +
    '<div class="grid grid-4" style="margin-bottom:24px;">'+
      metricCard("Disciplina hoje", scoreHoje!==null?scoreHoje+"%":"—", "checklist", null, scoreHoje!==null?corDisciplina(scoreHoje):null) +
      metricCard("Média do período", mediaPeriodo!==null?mediaPeriodo+"%":"—") +
      metricCard("Sequência atual", sequencia+" dia"+(sequencia!==1?"s":"")) +
      metricCard("Hábitos em dia (≥80%)", emDia.length+" de "+consistencia.length) +
    '</div>'+
    (maisFraco ? '<div class="insight-row" style="margin-bottom:20px;">'+icon("bulb")+'<span>O hábito que mais precisa de atenção no período é <strong>'+maisFraco.habito.nome+'</strong>, cumprido em '+maisFraco.pct+'% dos dias aplicáveis.</span></div>' : '')+
    '<div class="section-title" style="margin-top:0;">Consistência por hábito</div>'+
    consistencia.map(function(c){
      const cor = c.pct!==null ? corDisciplina(c.pct) : "var(--text-faint)";
      return '<div class="list-row"><div class="list-row-main">'+
        '<div class="list-row-title">'+c.habito.nome+(c.habito.negativo?' <span style="font-size:10.5px;color:var(--text-faint);">(evitar)</span>':'')+'</div>'+
        '<div class="list-row-sub" style="font-family:var(--font-body);">'+c.cumpridos+' de '+c.total+' dias aplicáveis</div></div>'+
        '<div style="width:90px;"><div style="background:var(--surface-raised);border-radius:6px;height:8px;overflow:hidden;"><div style="background:'+cor+';height:100%;width:'+(c.pct||0)+'%;"></div></div></div>'+
        '<div style="font-family:var(--font-mono);font-size:13px;width:40px;text-align:right;color:'+cor+';">'+(c.pct!==null?c.pct+"%":"—")+'</div>'+
        '</div>';
    }).join("");
}

function corDisciplina(pct){
  if (pct>=85) return "#4ED9A0";
  if (pct>=70) return "#4D8FFF";
  if (pct>=50) return "#F2D94B";
  if (pct>=30) return "#F2A23C";
  return "#F2685B";
}

function renderChecklistHabitos(){
  const dataAtual = state.habitosChecklistData || isoDate(new Date());
  const habitosHoje = habitosAplicaveisNoDia(dataAtual, false).sort(function(a,b){ return a.ordem-b.ordem; });
  const anotacao = state.anotacoesDia.find(function(a){ return a.data===dataAtual; });
  const dataFmt = new Date(dataAtual+"T00:00:00").toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});

  return '<div style="display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap;">'+
      '<input type="date" id="habito-data-picker" value="'+dataAtual+'" style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-sm);padding:8px 10px;font-size:13px;color:var(--text);" />'+
      '<span style="font-size:13px;color:var(--text-dim);text-transform:capitalize;">'+dataFmt+'</span>'+
    '</div>'+
    (habitosHoje.length===0 ? '<div class="empty-state">Nenhum hábito aplicável para este dia, de acordo com as regras de recorrência configuradas.</div>' :
    '<div class="card" style="margin-bottom:20px;">'+
      habitosHoje.map(function(h){
        const r = registroHabitoNoDia(h.id, dataAtual);
        const cumprido = r ? r.cumprido : false;
        return '<div style="display:flex;align-items:center;gap:12px;padding:10px 4px;border-bottom:1px solid var(--border);">'+
          '<button class="habito-toggle-btn" data-habito="'+h.id+'" data-data="'+dataAtual+'" style="width:28px;height:28px;border-radius:50%;border:2px solid '+(cumprido?"var(--purple)":"var(--border-strong)")+';background:'+(cumprido?"var(--purple)":"transparent")+';display:flex;align-items:center;justify-content:center;flex-shrink:0;">'+
            (cumprido?icon("check"):'')+
          '</button>'+
          '<span style="font-size:14px;flex:1;">'+h.nome+(h.negativo?' <span style="font-size:11px;color:var(--text-faint);">(evitar)</span>':'')+'</span>'+
        '</div>';
      }).join("")+
    '</div>')+
    '<div class="field"><label class="field-label">Anotação do dia</label>'+
      '<textarea id="habito-anotacao" rows="3" placeholder="Como foi o dia...">'+(anotacao?anotacao.texto:"")+'</textarea>'+
    '</div>'+
    '<button class="btn btn-ghost" id="btn-salvar-anotacao-dia" style="margin-top:10px;">'+icon("check")+' Salvar anotação</button>'+
    '<div class="toast" id="msg-salvo-anotacao" style="display:none;margin-top:8px;">'+icon("check")+' Anotação salva</div>';
}

function renderHistoricoHabitos(){
  const { start, end } = getPeriodoAtual("habitosView");
  const dias = [];
  let cur = new Date(start);
  while (isoDate(cur) <= isoDate(end)) { dias.push(isoDate(cur)); cur.setDate(cur.getDate()+1); }
  const diasOrdenados = [...dias].reverse();

  return renderPeriodSelector("habitosView") +
    diasOrdenados.map(function(d){
      const score = scoreDisciplinaDia(d);
      const dataFmt = new Date(d+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"short"});
      const cor = score!==null ? corDisciplina(score) : "var(--text-faint)";
      const aplicaveis = habitosAplicaveisNoDia(d, true).filter(function(h){
        return registroHabitoNoDia(h.id, d) !== null || h.ativo;
      });
      const anotacao = state.anotacoesDia.find(function(a){ return a.data===d; });
      return '<div class="list-row" style="align-items:flex-start;flex-wrap:wrap;"><div class="list-row-main">'+
        '<div class="list-row-title">'+dataFmt+'</div>'+
        '<div class="list-row-sub" style="font-family:var(--font-body);">'+(anotacao&&anotacao.texto?'"'+anotacao.texto+'"':(score!==null?aplicaveis.filter(function(h){var r=registroHabitoNoDia(h.id,d);return r&&r.cumprido;}).length+" de "+aplicaveis.length+" hábitos cumpridos":"sem registros"))+'</div></div>'+
        '<div class="badge" style="background:'+cor+'22;color:'+cor+';">'+(score!==null?score+"%":"—")+'</div>'+
      '</div>';
    }).join("");
}

function renderGerenciarHabitos(){
  const habitosOrdenados = [...state.habitos].sort(function(a,b){ return a.ordem-b.ordem; });
  return '<button class="btn btn-primary" id="btn-novo-habito" style="margin-bottom:18px;">'+icon("check")+' Novo hábito</button>'+
    habitosOrdenados.map(function(h){
      const recorrenciaTxt = h.tipoRecorrencia==="diario" ? "Todos os dias" :
        h.tipoRecorrencia==="semanal" ? "Dias da semana: "+(h.diasSemana||[]).map(function(d){ return ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][d]; }).join(", ") :
        "Dias do mês: "+(h.diasMes||[]).join(", ");
      return '<div class="list-row"><div class="list-row-main">'+
        '<div class="list-row-title">'+h.nome+(h.negativo?' <span style="font-size:10.5px;color:var(--text-faint);">(evitar)</span>':'')+(!h.ativo?' <span class="module-tile-tag">inativo</span>':'')+'</div>'+
        '<div class="list-row-sub" style="font-family:var(--font-body);">'+recorrenciaTxt+'</div></div>'+
        '<button class="icon-btn" data-editarhabito="'+h.id+'" aria-label="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4h2M4 14.5V20h5.5L20 9.5 14.5 4 4 14.5z"/></svg></button>'+
        '<button class="icon-btn" data-toggleativohabito="'+h.id+'" aria-label="'+(h.ativo?"Inativar":"Ativar")+'">'+(h.ativo?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 12h6"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></svg>')+'</button>'+
        '</div>';
    }).join("") +
    (state.habitoFormAberto ? renderFormHabito() : "");
}

function renderFormHabito(){
  const h = state.habitoEditando ? state.habitos.find(function(x){ return x.id===state.habitoEditando; }) : null;
  const tipo = h ? h.tipoRecorrencia : "diario";
  const diasSemanaSel = h ? (h.diasSemana||[]) : [];
  const diasMesSel = h ? (h.diasMes||[]) : [];
  const diasSemanaLabels = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

  return '<div class="card" style="margin-top:16px;">'+
    '<p style="font-size:14px;font-weight:500;margin:0 0 14px;">'+(h?"Editar hábito":"Novo hábito")+'</p>'+
    '<div class="form-grid">'+
    field("Nome do hábito", '<input type="text" id="hf-nome" value="'+(h?h.nome:"")+'" placeholder="ex: Meditação" />') +
    '<label class="checkbox-field"><input type="checkbox" id="hf-negativo" '+(h&&h.negativo?"checked":"")+' /> Hábito negativo (marcar como cumprido quando EVITAR o comportamento)</label>'+
    field("Recorrência", '<select id="hf-tipo">'+
      '<option value="diario" '+(tipo==="diario"?"selected":"")+'>Todos os dias</option>'+
      '<option value="semanal" '+(tipo==="semanal"?"selected":"")+'>Dias específicos da semana</option>'+
      '<option value="mensal" '+(tipo==="mensal"?"selected":"")+'>Dias específicos do mês</option>'+
      '</select>') +
    '<div id="hf-dias-semana" style="display:'+(tipo==="semanal"?"flex":"none")+';gap:6px;flex-wrap:wrap;">'+
      diasSemanaLabels.map(function(lbl, i){ return '<button type="button" class="hf-dia-semana-btn tab-btn '+(diasSemanaSel.indexOf(i)>=0?"is-active":"")+'" data-dia="'+i+'" style="padding:6px 10px;">'+lbl+'</button>'; }).join("")+
    '</div>'+
    '<div id="hf-dias-mes" style="display:'+(tipo==="mensal"?"block":"none")+';">'+
      '<input type="text" id="hf-dias-mes-input" value="'+diasMesSel.join(", ")+'" placeholder="ex: 1, 15, 30" />'+
      '<p style="font-size:11.5px;color:var(--text-faint);margin-top:4px;">Dias do mês separados por vírgula</p>'+
    '</div>'+
    '<div style="display:flex;gap:8px;">'+
      '<button class="btn btn-primary" id="btn-salvar-habito" '+(h?'data-id="'+h.id+'"':'')+'>'+icon("check")+' Salvar</button>'+
      '<button class="btn btn-ghost" id="btn-cancelar-habito">Cancelar</button>'+
    '</div></div></div>';
}

function renderHabitos(){
  if (!state.habitosView) state.habitosView = { tipo: "mes", offset: 0, dataInicio: null, dataFim: null };
  if (!state.habitosTab) state.habitosTab = "dashboard";
  const tabs = [{id:"dashboard",label:"Dashboard"},{id:"checklist",label:"Checklist do dia"},{id:"historico",label:"Histórico"},{id:"gerenciar",label:"Gerenciar hábitos"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Hábitos diários</div></div>'+
    tabsHtml(tabs, state.habitosTab, "habitostab") +
    '<div id="habitos-content">' + (
      state.habitosTab==="dashboard" ? renderDashboardHabitos() :
      state.habitosTab==="checklist" ? renderChecklistHabitos() :
      state.habitosTab==="historico" ? renderHistoricoHabitos() : renderGerenciarHabitos()
    ) + '</div>';
}

// ---------- Módulo: Registro de Momentos (cadastro) ----------

function multiSelectChip(id, label, selecionado){
  return '<button type="button" class="momento-chip" data-chipgroup="'+id.split(":")[0]+'" data-chipid="'+id.split(":")[1]+'" style="padding:6px 12px;font-size:12px;border-radius:var(--radius-sm);border:1px solid '+(selecionado?"var(--purple)":"var(--border)")+';background:'+(selecionado?"var(--purple-dim)":"var(--surface-raised)")+';color:'+(selecionado?"var(--text)":"var(--text-dim)")+';">'+label+'</button>';
}

function renderCadastroMomento(){
  const m = state.momentoEditando;
  const today = new Date().toISOString().slice(0,10);
  const pessoasSelecionadas = m ? state.momentoPessoas.filter(function(mp){ return mp.momento_id===m.id; }).map(function(mp){ return mp.pessoa_id; }) : (state.momentoFormPessoasSel||[]);
  const tagsSelecionadas = m ? state.momentoTags.filter(function(mt){ return mt.momento_id===m.id; }).map(function(mt){ return mt.tag_id; }) : (state.momentoFormTagsSel||[]);
  const jornadasSelecionadas = m ? state.momentoJornadas.filter(function(mj){ return mj.momento_id===m.id; }).map(function(mj){ return mj.jornada_id; }) : (state.momentoFormJornadasSel||[]);

  const pessoasOrdenadas = [...state.pessoas].filter(function(p){ return p.ativo; }).sort(function(a,b){ return a.nome.localeCompare(b.nome); });
  const tagsOrdenadas = [...state.tagsMomentos].filter(function(t){ return t.ativo; }).sort(function(a,b){ return a.nome.localeCompare(b.nome); });
  const jornadasOrdenadas = [...state.jornadas].filter(function(j){ return j.ativo; });

  return '<div class="form-grid" style="max-width:560px;">'+
    field("Título do momento", '<input type="text" id="mf-titulo" value="'+(m?m.titulo:"")+'" placeholder="ex: Sábado de churrasco" />') +
    field("Data", '<input type="date" id="mf-data" value="'+(m?m.data:today)+'" />') +
    field("Foto (opcional)", '<input type="file" id="mf-foto" accept="image/*" />'+(m&&m.fotoUrl?'<div style="margin-top:8px;"><img src="'+m.fotoUrl+'" style="max-width:160px;border-radius:var(--radius-sm);" /></div>':'')) +
    field("Anotação", '<textarea id="mf-anotacao" rows="3" placeholder="Conte como foi...">'+(m&&m.anotacao?m.anotacao:"")+'</textarea>') +

    '<div class="field"><label class="field-label">Pessoas envolvidas</label>'+
      '<div id="mf-pessoas-chips" style="display:flex;flex-wrap:wrap;gap:6px;max-height:160px;overflow-y:auto;padding:4px 0;">'+
        pessoasOrdenadas.map(function(p){ return multiSelectChip("pessoa:"+p.id, p.nome, pessoasSelecionadas.indexOf(p.id)>=0); }).join("")+
      '</div></div>'+

    '<div class="field"><label class="field-label">Tags</label>'+
      '<div id="mf-tags-chips" style="display:flex;flex-wrap:wrap;gap:6px;max-height:160px;overflow-y:auto;padding:4px 0;">'+
        tagsOrdenadas.map(function(t){ return multiSelectChip("tag:"+t.id, t.nome, tagsSelecionadas.indexOf(t.id)>=0); }).join("")+
      '</div></div>'+

    '<div class="field"><label class="field-label">Jornadas</label>'+
      '<div id="mf-jornadas-chips" style="display:flex;flex-wrap:wrap;gap:6px;">'+
        jornadasOrdenadas.map(function(j){ return multiSelectChip("jornada:"+j.id, j.nome, jornadasSelecionadas.indexOf(j.id)>=0); }).join("")+
      '</div></div>'+

    '<button class="btn btn-primary" id="btn-salvar-momento" '+(m?'data-id="'+m.id+'"':'')+'>'+icon("check")+' Salvar momento</button>'+
    '<div class="toast" id="msg-salvo-momento" style="display:none;">'+icon("check")+' Momento salvo</div>'+
  '</div>';
}

function renderListaMomentos(){
  const lista = [...state.momentos].sort(function(a,b){ return b.data.localeCompare(a.data); });
  if (!lista.length) return '<div class="empty-state">Nenhum momento registrado ainda.</div>';
  return lista.map(function(m){
    const dataFmt = new Date(m.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"});
    const tags = state.momentoTags.filter(function(mt){ return mt.momento_id===m.id; }).map(function(mt){
      const t = state.tagsMomentos.find(function(x){ return x.id===mt.tag_id; }); return t?t.nome:null;
    }).filter(Boolean);
    const pessoas = state.momentoPessoas.filter(function(mp){ return mp.momento_id===m.id; }).map(function(mp){
      const p = state.pessoas.find(function(x){ return x.id===mp.pessoa_id; }); return p?p.nome:null;
    }).filter(Boolean);
    return '<div class="list-row" style="align-items:flex-start;">'+
      (m.fotoUrl ? '<img src="'+m.fotoUrl+'" style="width:48px;height:48px;border-radius:var(--radius-sm);object-fit:cover;flex-shrink:0;margin-right:4px;" />' : '<div class="module-tile-icon" style="width:48px;height:48px;flex-shrink:0;">'+icon("photo")+'</div>')+
      '<div class="list-row-main" style="margin-left:10px;">'+
        '<div class="list-row-title">'+m.titulo+'</div>'+
        '<div class="list-row-sub" style="font-family:var(--font-body);">'+dataFmt+(tags.length?" · "+tags.join(", "):"")+(pessoas.length?" · "+pessoas.join(", "):"")+'</div>'+
      '</div>'+
      '<button class="icon-btn" data-editarmomento="'+m.id+'" aria-label="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4h2M4 14.5V20h5.5L20 9.5 14.5 4 4 14.5z"/></svg></button>'+
      '<button class="icon-btn" data-delmomento="'+m.id+'" aria-label="Excluir">'+icon("trash")+'</button>'+
      '</div>';
  }).join("");
}

function renderMomentos(){
  if (!state.momentosTab) state.momentosTab = "registro";
  const tabs = [{id:"registro",label:"Registrar"},{id:"lista",label:"Meus momentos"}];
  return backLink() +
    '<div class="page-header"><div class="page-title">Momentos diários</div><div class="page-sub">Um diário para registrar os momentos do seu dia a dia.</div></div>'+
    tabsHtml(tabs, state.momentosTab, "momentostab") +
    '<div id="momentos-content">' + (
      state.momentosTab==="registro" ? renderCadastroMomento() : renderListaMomentos()
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
  else if (state.view === "celular") {
    content.innerHTML = renderCelular();
    if (state.celularTab==="analise") setTimeout(drawCategoriaCelularChart,0);
    if (state.celularTab==="registro") {
      setTimeout(attachRegistroCelularLiveCalc,0);
      const msgEl = document.getElementById("msg-salvo-celular");
      if (msgEl && msgEl.style.display==="flex") setTimeout(function(){ if(msgEl) msgEl.style.display="none"; },2500);
    }
  }
  else if (state.view === "leituras") { content.innerHTML = renderLeituras(); if (state.leiturasTab==="analise") setTimeout(drawLivrosChart,0); }
  else if (state.view === "analises") { content.innerHTML = renderAnalisesGerais(); setTimeout(drawCruzadoChart,0); }
  else if (state.view === "exercicios") {
    content.innerHTML = renderExercicios();
    if (state.exerciciosSecao==="bioimpedancia") setTimeout(drawBioEvolucaoChart,0);
    if (state.exerciciosSecao==="peso" && state.pesoTab==="analise") setTimeout(drawPesoEvolucaoChart,0);
    if (state.exerciciosSecao==="atividade" && state.exercicioTab==="analise") setTimeout(drawExerciciosTipoChart,0);
  }
  else if (state.view === "habitos") { content.innerHTML = renderHabitos(); }
  else if (state.view === "momentos") { content.innerHTML = renderMomentos(); }
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
  const plugins = (typeof ChartDataLabels !== "undefined") ? [ChartDataLabels] : [];
  new Chart(c, { type:"doughnut", data:{
    labels: CATEGORIAS_SONO.map(c=>c.label),
    datasets:[{ data: CATEGORIAS_SONO.map(cat=>Math.round((counts[cat.id]/total)*1000)/10), backgroundColor: CATEGORIAS_SONO.map(c=>c.color), borderWidth: 0 }]
  }, plugins: plugins, options:{ responsive:true, maintainAspectRatio:false, cutout:"62%",
    plugins:{ legend:{ position:"bottom", labels:{ color:"#8A8FA3", font:{size:11}, boxWidth:10, padding:12 } },
      tooltip:{ callbacks:{ label: function(ctx){ return ctx.label+": "+ctx.parsed+"%"; } } },
      datalabels:{ display: function(ctx){ return ctx.dataset.data[ctx.dataIndex] > 0; }, color:"#0B0E14", font:{ weight:"600", size:11 }, formatter: function(v){ return v+"%"; } }
    } } });
}

function attachRegistroCelularLiveCalc(){
  const horasEl = document.getElementById("fc-horas");
  const mapsEl = document.getElementById("fc-maps");
  if (!horasEl) return;
  function recalc(){
    const total = parseHM(horasEl.value);
    const maps = parseHM(mapsEl.value);
    const out = document.getElementById("fc-liquido-out");
    const indicator = document.getElementById("fc-meta-indicator");
    if (total!==null) {
      const liquido = Math.max(0, total - (maps||0));
      out.textContent = fmtHoras(liquido);
      const meta = state.parametros.metaCelularHoras;
      const diff = liquido - meta;
      const acima = diff > 0.0167; // tolerância de 1 minuto
      const abaixo = diff < -0.0167;
      let cor = "var(--text-dim)", texto = "Igual à meta de "+fmtHoras(meta);
      if (acima) { cor = "#F2685B"; texto = fmtHoras(Math.abs(diff))+" acima da meta de "+fmtHoras(meta); }
      else if (abaixo) { cor = "#4ED9A0"; texto = fmtHoras(Math.abs(diff))+" abaixo da meta de "+fmtHoras(meta); }
      indicator.innerHTML = '<div class="insight-row" style="border-left:3px solid '+cor+';"><span style="color:'+cor+';font-weight:500;">'+texto+'</span></div>';
    } else { out.textContent = "—"; indicator.innerHTML = ""; }
  }
  [horasEl, mapsEl].forEach(function(el){ el.addEventListener("input", recalc); });
  recalc();
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
function drawCategoriaCelularChart(){
  const { start, end } = celularGetPeriodoAnalise();
  const startIso = isoDate(start), endIso = isoDate(end);
  const regs = celularNoIntervalo(startIso, endIso);
  if (!regs.length) return;
  const porSemana = {};
  regs.forEach(function(r){
    const s = isoDate(startOfWeek(new Date(r.data+"T00:00:00")));
    if (!porSemana[s]) porSemana[s] = 0;
    porSemana[s] += celularHorasNet(r);
  });
  const counts = {};
  CATEGORIAS_CELULAR.forEach(function(c){ counts[c.id]=0; });
  Object.keys(porSemana).forEach(function(s){ const cat = categoriaCelularPorHoras(porSemana[s]); if (cat) counts[cat.id]++; });
  const total = Object.keys(porSemana).length;
  if (!total) return;
  const c = document.getElementById("chartCategoriaCelular");
  if (!c) return;
  const plugins = (typeof ChartDataLabels !== "undefined") ? [ChartDataLabels] : [];
  new Chart(c, { type:"doughnut", data:{
    labels: CATEGORIAS_CELULAR.map(function(c){ return c.label; }),
    datasets:[{ data: CATEGORIAS_CELULAR.map(function(cat){ return Math.round((counts[cat.id]/total)*1000)/10; }), backgroundColor: CATEGORIAS_CELULAR.map(function(c){ return c.color; }), borderWidth: 0 }]
  }, plugins: plugins, options:{ responsive:true, maintainAspectRatio:false, cutout:"62%",
    plugins:{ legend:{ position:"bottom", labels:{ color:"#8A8FA3", font:{size:11}, boxWidth:10, padding:12 } },
      tooltip:{ callbacks:{ label: function(ctx){ return ctx.label+": "+ctx.parsed+"%"; } } },
      datalabels:{ display: function(ctx){ return ctx.dataset.data[ctx.dataIndex] > 0; }, color:"#0B0E14", font:{ weight:"600", size:11 }, formatter: function(v){ return v+"%"; } }
    } } });
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

function drawBioEvolucaoChart(){
  const lista = bioOrdenada();
  if (lista.length < 2) return;
  const labels = lista.map(b=>new Date(b.dataMedicao).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}));
  const pesoVals = lista.map(b=>b.pesoKg);
  const gordaVals = lista.map(b=>b.massaGordaKg);
  const c = document.getElementById("chartBioEvolucao");
  if (!c) return;
  new Chart(c, { type:"line", data:{ labels:labels, datasets:[
    { label:"Peso", data:pesoVals, borderColor:"#4D8FFF", backgroundColor:"rgba(77,143,255,0.08)", tension:0.3, pointRadius:3, fill:true },
    { label:"Massa gorda", data:gordaVals, borderColor:"#F2685B", backgroundColor:"rgba(242,104,91,0.06)", tension:0.3, pointRadius:3, fill:false }
  ]}, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:true, position:"bottom", labels:{color:"#8A8FA3",font:{size:11}}}},
    scales:{ x:Object.assign({ticks:{color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}), y:Object.assign({},baseGridOpts()) } } });
}

function drawPesoEvolucaoChart(){
  const lista = [...state.pesos].sort((a,b)=>a.data.localeCompare(b.data));
  const bio = bioMaisRecente();
  if (!lista.length) return;
  const labels = lista.map(p=>new Date(p.data+"T00:00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}));
  const valores = lista.map(p=>p.pesoKg);
  const meta = bio ? bio.pesoPadraoKg : null;
  const c = document.getElementById("chartPesoEvolucao");
  if (!c) return;
  const datasets = [{ label:"Peso", data:valores, borderColor:"#4D8FFF", backgroundColor:"rgba(77,143,255,0.1)", tension:0.3, pointRadius:3, fill:true }];
  if (meta) datasets.push({ label:"Peso padrão", data:labels.map(()=>meta), borderColor:"#4ED9A0", borderDash:[6,4], pointRadius:0, fill:false });
  new Chart(c, { type:"line", data:{ labels:labels, datasets:datasets }, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
    scales:{ x:Object.assign({ticks:{color:"#8A8FA3",font:{size:10}}},{grid:{display:false}}), y:Object.assign({},baseGridOpts()) } } });
}

function drawExerciciosTipoChart(){
  const { start, end } = exerAtividadeGetPeriodo();
  const startIso = isoDate(start), endIso = isoDate(end);
  const filtroTipo = state.atividadeView ? state.atividadeView.filtroTipo : "";
  let lista = state.exercicios.filter(function(e){ return e.tipo && e.data>=startIso && e.data<=endIso; });
  if (filtroTipo) lista = lista.filter(function(e){ return e.tipo===filtroTipo; });
  if (!lista.length) return;
  const porTipo = {};
  lista.forEach(function(e){ porTipo[e.tipo] = (porTipo[e.tipo]||0)+1; });
  const labels = Object.keys(porTipo);
  const valores = labels.map(function(l){ return porTipo[l]; });
  const c = document.getElementById("chartExerciciosTipo");
  if (!c) return;
  new Chart(c, { type:"bar", data:{ labels:labels, datasets:[{ label:"Sessões", data:valores, backgroundColor:"#6C63FF", borderRadius:3 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{ x:{grid:{display:false},ticks:{color:"#8A8FA3",font:{size:11}}}, y:Object.assign({beginAtZero:true},baseGridOpts()) } } });
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
    state.parametros.metaHorasSono = horaParaDecimal(document.getElementById("p-meta").value) || 7.5;
    state.parametros.horaDormirIdeal = document.getElementById("p-dormir").value;
    state.parametros.horaAcordarIdeal = document.getElementById("p-acordar").value;
    await saveParametros();
    const msg = document.getElementById("msg-param-sono");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });

  const btnSalvarCelular = document.getElementById("btn-salvar-celular");
  if (btnSalvarCelular) btnSalvarCelular.addEventListener("click", async function(){
    const dataStr = document.getElementById("fc-data").value;
    const horasConsumo = parseHM(document.getElementById("fc-horas").value);
    const horasMaps = parseHM(document.getElementById("fc-maps").value) || 0;
    const notas = document.getElementById("fc-notas").value;
    if (horasConsumo===null) return;
    btnSalvarCelular.disabled = true;
    const existente = state.celularDiario.find(function(r){ return r.data===dataStr; });
    const reg = { data: dataStr, horasConsumo: horasConsumo, horasMaps: horasMaps, notas: notas };
    if (existente) reg.id = existente.id;
    const salvo = await DB.upsertCelularDiario(reg);
    if (salvo) {
      state.celularDiario = state.celularDiario.filter(function(r){ return r.data!==dataStr; });
      state.celularDiario.push(salvo);
    }
    state.celularRegistroSalvoMsg = true;
    render();
  });

  document.querySelectorAll("[data-delcelular]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const motivo = prompt("Por que deseja excluir este registro?");
    if (motivo === null) return; // cancelou
    const id = btn.getAttribute("data-delcelular");
    await DB.deleteCelularDiario(id);
    state.celularDiario = state.celularDiario.filter(function(r){ return r.id!==id; });
    render();
  }); });

  document.querySelectorAll("[data-editcelular]").forEach(function(btn){ btn.addEventListener("click", function(){
    state.celularEditando = btn.getAttribute("data-editcelular");
    render();
  }); });
  document.querySelectorAll("[data-cancelaredicaocelular]").forEach(function(btn){ btn.addEventListener("click", function(){
    state.celularEditando = null;
    render();
  }); });
  document.querySelectorAll("[data-salvaredicaocelular]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-salvaredicaocelular");
    const reg = state.celularDiario.find(function(r){ return r.id===id; });
    if (!reg) return;
    const horasConsumo = horaParaDecimal(document.getElementById("edit-celular-horas").value);
    const horasMaps = horaParaDecimal(document.getElementById("edit-celular-maps").value) || 0;
    const notas = document.getElementById("edit-celular-notas").value;
    if (horasConsumo===null) return;
    const atualizado = { id: id, data: reg.data, horasConsumo: horasConsumo, horasMaps: horasMaps, notas: notas };
    const salvo = await DB.upsertCelularDiario(atualizado);
    if (salvo) {
      state.celularDiario = state.celularDiario.map(function(r){ return r.id===id ? salvo : r; });
    }
    state.celularEditando = null;
    render();
  }); });

  document.querySelectorAll("[data-togglesemanacelular]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const semanaIso = btn.getAttribute("data-togglesemanacelular");
    const semanaAtualIso = isoDate(startOfWeek(new Date()));
    const overrideExiste = semanaIso in state.semanasFechadasCelularMap;
    const estaAbertaAgora = overrideExiste ? !state.semanasFechadasCelularMap[semanaIso] : semanaIso===semanaAtualIso;
    const novoFechada = estaAbertaAgora; // se estava aberta, fecha; se estava fechada, abre
    await DB.setSemanaFechada(semanaIso, novoFechada);
    state.semanasFechadasCelularMap[semanaIso] = novoFechada;
    render();
  }); });

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

  document.querySelectorAll("[data-exerciciosecao]").forEach(function(btn){ btn.addEventListener("click", function(){ state.exerciciosSecao = btn.getAttribute("data-exerciciosecao"); render(); }); });
  document.querySelectorAll("[data-pesotab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.pesoTab = btn.getAttribute("data-pesotab"); render(); }); });
  document.querySelectorAll("[data-exerciciotab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.exercicioTab = btn.getAttribute("data-exerciciotab"); render(); }); });
  document.querySelectorAll("[data-biotab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.bioTab = btn.getAttribute("data-biotab"); render(); }); });
  document.querySelectorAll("[data-tiporegistro]").forEach(function(btn){ btn.addEventListener("click", function(){ state.tipoRegistroAtividade = btn.getAttribute("data-tiporegistro"); render(); }); });

  const filtroTipoAtividade = document.getElementById("filtro-tipo-atividade");
  if (filtroTipoAtividade) filtroTipoAtividade.addEventListener("change", function(){ state.atividadeView.filtroTipo = filtroTipoAtividade.value; render(); });

  const btnSalvarPeso = document.getElementById("btn-salvar-peso");
  if (btnSalvarPeso) btnSalvarPeso.addEventListener("click", async function(){
    const dataVal = document.getElementById("fp-data").value;
    const pesoVal = Number(document.getElementById("fp-peso").value);
    if (!pesoVal) return;
    btnSalvarPeso.disabled = true;
    const salvo = await DB.upsertPeso({ data: dataVal, pesoKg: pesoVal, notas: document.getElementById("fp-notas").value });
    if (salvo) state.pesos.push(salvo);
    btnSalvarPeso.disabled = false;
    const msg = document.getElementById("msg-salvo-peso");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });
  document.querySelectorAll("[data-delpeso]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delpeso");
    await DB.deletePeso(id);
    state.pesos = state.pesos.filter(p=>p.id!==id);
    render();
  }); });

  const btnSalvarExercicio = document.getElementById("btn-salvar-exercicio");
  if (btnSalvarExercicio) btnSalvarExercicio.addEventListener("click", async function(){
    const reg = {
      data: document.getElementById("fe-data").value,
      tipo: document.getElementById("fe-tipo").value,
      horaInicio: document.getElementById("fe-inicio").value || null,
      horaFim: document.getElementById("fe-fim").value || null,
      notas: document.getElementById("fe-notas").value,
      importado: false
    };
    btnSalvarExercicio.disabled = true;
    const salvo = await DB.upsertExercicio(reg);
    if (salvo) state.exercicios.push(salvo);
    btnSalvarExercicio.disabled = false;
    const msg = document.getElementById("msg-salvo-exercicio");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });
  document.querySelectorAll("[data-delexercicio]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delexercicio");
    await DB.deleteExercicio(id);
    state.exercicios = state.exercicios.filter(e=>e.id!==id);
    render();
  }); });

  const btnSalvarMovimentacao = document.getElementById("btn-salvar-movimentacao");
  if (btnSalvarMovimentacao) btnSalvarMovimentacao.addEventListener("click", async function(){
    const dataVal = document.getElementById("fm-data").value;
    const reg = {
      data: dataVal,
      minutosAtivo: Number(document.getElementById("fm-ativo").value)||null,
      passos: Number(document.getElementById("fm-passos").value)||null,
      caloriasAtividade: Number(document.getElementById("fm-calatividade").value)||null,
      caloriasTotais: Number(document.getElementById("fm-caltotal").value)||null,
      distanciaKm: Number(document.getElementById("fm-distancia").value)||null
    };
    btnSalvarMovimentacao.disabled = true;
    const existente = movPorData(dataVal);
    if (existente) reg.id = existente.id;
    const salvo = await DB.upsertMovimentacao(reg);
    if (salvo) {
      state.movimentacao = state.movimentacao.filter(function(m){ return m.data!==dataVal; });
      state.movimentacao.push(salvo);
    }
    btnSalvarMovimentacao.disabled = false;
    const msg = document.getElementById("msg-salvo-movimentacao");
    if (msg) { msg.style.display="flex"; setTimeout(()=>{ if(msg) msg.style.display="none"; },2500); }
  });
  document.querySelectorAll("[data-delmovimentacao]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delmovimentacao");
    await DB.deleteMovimentacao(id);
    state.movimentacao = state.movimentacao.filter(function(m){ return m.id!==id; });
    render();
  }); });

  document.querySelectorAll("[data-delbio]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delbio");
    await DB.deleteBioimpedancia(id);
    state.bioimpedancia = state.bioimpedancia.filter(b=>b.id!==id);
    render();
  }); });

  // ---------- Hábitos ----------
  document.querySelectorAll("[data-habitostab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.habitosTab = btn.getAttribute("data-habitostab"); state.habitoFormAberto = false; render(); }); });

  const habitoDataPicker = document.getElementById("habito-data-picker");
  if (habitoDataPicker) habitoDataPicker.addEventListener("change", function(){ state.habitosChecklistData = habitoDataPicker.value; render(); });

  document.querySelectorAll(".habito-toggle-btn").forEach(function(btn){ btn.addEventListener("click", async function(){
    const habitoId = btn.getAttribute("data-habito");
    const data = btn.getAttribute("data-data");
    const existente = registroHabitoNoDia(habitoId, data);
    const novoCumprido = !(existente && existente.cumprido);
    const reg = { habitoId: habitoId, data: data, cumprido: novoCumprido };
    if (existente) reg.id = existente.id;
    const salvo = await DB.upsertRegistroHabito(reg);
    if (salvo) {
      state.registrosHabitos = state.registrosHabitos.filter(function(r){ return !(r.habitoId===habitoId && r.data===data); });
      state.registrosHabitos.push(salvo);
    }
    render();
  }); });

  const btnSalvarAnotacao = document.getElementById("btn-salvar-anotacao-dia");
  if (btnSalvarAnotacao) btnSalvarAnotacao.addEventListener("click", async function(){
    const data = state.habitosChecklistData || isoDate(new Date());
    const texto = document.getElementById("habito-anotacao").value;
    const salvo = await DB.upsertAnotacaoDia(data, texto);
    if (salvo) {
      state.anotacoesDia = state.anotacoesDia.filter(function(a){ return a.data!==data; });
      state.anotacoesDia.push(salvo);
    }
    const msg = document.getElementById("msg-salvo-anotacao");
    if (msg) { msg.style.display="flex"; setTimeout(function(){ if(msg) msg.style.display="none"; },2500); }
  });

  const btnNovoHabito = document.getElementById("btn-novo-habito");
  if (btnNovoHabito) btnNovoHabito.addEventListener("click", function(){ state.habitoEditando = null; state.habitoFormAberto = true; render(); });
  document.querySelectorAll("[data-editarhabito]").forEach(function(btn){ btn.addEventListener("click", function(){ state.habitoEditando = btn.getAttribute("data-editarhabito"); state.habitoFormAberto = true; render(); }); });
  const btnCancelarHabito = document.getElementById("btn-cancelar-habito");
  if (btnCancelarHabito) btnCancelarHabito.addEventListener("click", function(){ state.habitoFormAberto = false; render(); });

  document.querySelectorAll("[data-toggleativohabito]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-toggleativohabito");
    const h = state.habitos.find(function(x){ return x.id===id; });
    if (!h) return;
    const atualizado = Object.assign({}, h, { ativo: !h.ativo });
    const salvo = await DB.upsertHabito(atualizado);
    if (salvo) state.habitos = state.habitos.map(function(x){ return x.id===id ? salvo : x; });
    render();
  }); });

  const hfTipo = document.getElementById("hf-tipo");
  if (hfTipo) hfTipo.addEventListener("change", function(){
    document.getElementById("hf-dias-semana").style.display = hfTipo.value==="semanal" ? "flex" : "none";
    document.getElementById("hf-dias-mes").style.display = hfTipo.value==="mensal" ? "block" : "none";
  });
  document.querySelectorAll(".hf-dia-semana-btn").forEach(function(btn){ btn.addEventListener("click", function(){ btn.classList.toggle("is-active"); }); });

  const btnSalvarHabito = document.getElementById("btn-salvar-habito");
  if (btnSalvarHabito) btnSalvarHabito.addEventListener("click", async function(){
    const id = btnSalvarHabito.getAttribute("data-id");
    const nome = document.getElementById("hf-nome").value.trim();
    if (!nome) return;
    const tipo = document.getElementById("hf-tipo").value;
    const negativo = document.getElementById("hf-negativo").checked;
    let diasSemana = null, diasMes = null;
    if (tipo==="semanal") {
      diasSemana = Array.from(document.querySelectorAll(".hf-dia-semana-btn.is-active")).map(function(b){ return Number(b.getAttribute("data-dia")); });
    } else if (tipo==="mensal") {
      diasMes = document.getElementById("hf-dias-mes-input").value.split(",").map(function(s){ return Number(s.trim()); }).filter(function(n){ return !isNaN(n) && n>=1 && n<=31; });
    }
    const existente = id ? state.habitos.find(function(h){ return h.id===id; }) : null;
    const habito = {
      id: id||undefined, nome: nome, negativo: negativo, tipoRecorrencia: tipo, diasSemana: diasSemana, diasMes: diasMes,
      icone: existente?existente.icone:"checklist", ordem: existente?existente.ordem:state.habitos.length, ativo: existente?existente.ativo:true
    };
    const salvo = await DB.upsertHabito(habito);
    if (salvo) {
      if (existente) state.habitos = state.habitos.map(function(h){ return h.id===id ? salvo : h; });
      else state.habitos.push(salvo);
    }
    state.habitoFormAberto = false;
    state.habitoEditando = null;
    render();
  });

  // ---------- Momentos ----------
  document.querySelectorAll("[data-momentostab]").forEach(function(btn){ btn.addEventListener("click", function(){ state.momentosTab = btn.getAttribute("data-momentostab"); state.momentoEditando = null; render(); }); });

  document.querySelectorAll(".momento-chip").forEach(function(btn){ btn.addEventListener("click", function(){
    const grupo = btn.getAttribute("data-chipgroup");
    const id = btn.getAttribute("data-chipid");
    const key = grupo==="pessoa" ? "momentoFormPessoasSel" : grupo==="tag" ? "momentoFormTagsSel" : "momentoFormJornadasSel";
    if (!state[key]) state[key] = [];
    const idx = state[key].indexOf(id);
    if (idx>=0) state[key].splice(idx,1); else state[key].push(id);
    const selecionado = idx<0;
    btn.style.borderColor = selecionado ? "var(--purple)" : "var(--border)";
    btn.style.background = selecionado ? "var(--purple-dim)" : "var(--surface-raised)";
    btn.style.color = selecionado ? "var(--text)" : "var(--text-dim)";
  }); });

  document.querySelectorAll("[data-editarmomento]").forEach(function(btn){ btn.addEventListener("click", function(){
    const id = btn.getAttribute("data-editarmomento");
    state.momentoEditando = state.momentos.find(function(m){ return m.id===id; });
    state.momentosTab = "registro";
    render();
  }); });

  document.querySelectorAll("[data-delmomento]").forEach(function(btn){ btn.addEventListener("click", async function(){
    const id = btn.getAttribute("data-delmomento");
    await DB.deleteMomento(id);
    state.momentos = state.momentos.filter(function(m){ return m.id!==id; });
    render();
  }); });

  const btnSalvarMomento = document.getElementById("btn-salvar-momento");
  if (btnSalvarMomento) btnSalvarMomento.addEventListener("click", async function(){
    const idExistente = btnSalvarMomento.getAttribute("data-id");
    const titulo = document.getElementById("mf-titulo").value.trim();
    if (!titulo) return;
    btnSalvarMomento.disabled = true;
    const data = document.getElementById("mf-data").value;
    const anotacao = document.getElementById("mf-anotacao").value;
    const fotoInput = document.getElementById("mf-foto");

    let fotoUrl = idExistente ? (state.momentos.find(function(m){ return m.id===idExistente; })||{}).fotoUrl : null;
    if (fotoInput && fotoInput.files && fotoInput.files[0]) {
      const file = fotoInput.files[0];
      const fileName = Date.now()+"_"+file.name.replace(/[^a-zA-Z0-9.\-_]/g,"_");
      const url = await DB.uploadFotoMomento(file, fileName);
      if (url) fotoUrl = url;
    }

    const momento = { id: idExistente||undefined, titulo: titulo, data: data, anotacao: anotacao, fotoUrl: fotoUrl };
    const salvo = await DB.upsertMomento(momento);
    if (salvo) {
      if (idExistente) state.momentos = state.momentos.map(function(m){ return m.id===idExistente ? salvo : m; });
      else state.momentos.push(salvo);

      const pessoasSel = state.momentoFormPessoasSel || [];
      const tagsSel = state.momentoFormTagsSel || [];
      const jornadasSel = state.momentoFormJornadasSel || [];
      await DB.setMomentoPessoas(salvo.id, pessoasSel);
      await DB.setMomentoTags(salvo.id, tagsSel);
      await DB.setMomentoJornadas(salvo.id, jornadasSel);
      state.momentoPessoas = state.momentoPessoas.filter(function(mp){ return mp.momento_id!==salvo.id; }).concat(pessoasSel.map(function(pid){ return { momento_id: salvo.id, pessoa_id: pid }; }));
      state.momentoTags = state.momentoTags.filter(function(mt){ return mt.momento_id!==salvo.id; }).concat(tagsSel.map(function(tid){ return { momento_id: salvo.id, tag_id: tid }; }));
      state.momentoJornadas = state.momentoJornadas.filter(function(mj){ return mj.momento_id!==salvo.id; }).concat(jornadasSel.map(function(jid){ return { momento_id: salvo.id, jornada_id: jid }; }));
    }
    state.momentoFormPessoasSel = [];
    state.momentoFormTagsSel = [];
    state.momentoFormJornadasSel = [];
    state.momentoEditando = null;
    btnSalvarMomento.disabled = false;
    state.momentosTab = "lista";
    render();
  });
}

loadData();
