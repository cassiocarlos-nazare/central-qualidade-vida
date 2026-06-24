// ============================================================
// Configuração de conexão com o Supabase
// ============================================================
const SUPABASE_URL = "https://vrtjmwthsfpdsqjvnjwy.supabase.co";
const SUPABASE_KEY = "sb_publishable_xqgk-Pt1O-qsJ9-LItLFtg_TEGSXceq";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// Helpers de tradução entre o formato do banco (snake_case,
// horas em numeric) e o formato usado internamente pelo app.js
// (camelCase, mesmos nomes de sempre) — assim o resto do app
// não precisa saber que os dados vêm de um banco remoto.
// ============================================================

function rowSonoToApp(r){
  return {
    id: r.id, grupoData: r.grupo_data, data: r.grupo_data, tipo: r.tipo,
    dormiu: r.dormiu ? r.dormiu.slice(0,5) : null,
    acordou: r.acordou ? r.acordou.slice(0,5) : null,
    horasNaCama: r.horas_total!==null ? Number(r.horas_total) : null,
    horasSonoReal: r.horas_real!==null ? Number(r.horas_real) : null,
    horasRem: r.horas_rem!==null ? Number(r.horas_rem) : null,
    horasFundo: r.horas_fundo!==null ? Number(r.horas_fundo) : null,
    pctRem: r.pct_rem!==null ? Number(r.pct_rem) : null,
    pctFundo: r.pct_fundo!==null ? Number(r.pct_fundo) : null,
    scoreOriginal: r.score!==null ? Number(r.score) : null,
    notas: r.notas || "",
    importado: r.importado
  };
}
function appSonoToRow(reg){
  return {
    id: (reg.id && reg.id.length===36) ? reg.id : undefined,
    grupo_data: reg.grupoData || reg.data,
    tipo: reg.tipo,
    dormiu: reg.dormiu || null,
    acordou: reg.acordou || null,
    horas_total: reg.horasNaCama,
    horas_real: reg.horasSonoReal,
    horas_rem: reg.horasRem,
    horas_fundo: reg.horasFundo,
    pct_rem: reg.pctRem,
    pct_fundo: reg.pctFundo,
    score: reg.scoreOriginal,
    notas: reg.notas || null,
    importado: reg.importado || false
  };
}

function rowCelularToApp(r){
  return { id: r.id, semana: r.semana, periodo: r.periodo, mediaDiaria: Number(r.media_diaria), totalSemanal: Number(r.total_semanal), importado: r.importado };
}
function appCelularToRow(c){
  return { id: (c.id && c.id.length===36) ? c.id : undefined, semana: c.semana, periodo: c.periodo, media_diaria: c.mediaDiaria, total_semanal: c.totalSemanal, importado: c.importado || false };
}

function rowLivroToApp(r){
  return { id: r.id, titulo: r.titulo, paginas: r.paginas, horasLeitura: r.horas_leitura!==null?Number(r.horas_leitura):null, status: r.status, importado: r.importado };
}
function appLivroToRow(l){
  return { id: (l.id && l.id.length===36) ? l.id : undefined, titulo: l.titulo, paginas: l.paginas, horas_leitura: l.horasLeitura, status: l.status, importado: l.importado || false };
}

// ============================================================
// API pública usada pelo app.js
// ============================================================
function rowBioimpedanciaToApp(r){
  return {
    id: r.id, dataMedicao: r.data_medicao, idade: r.idade, alturaCm: r.altura_cm!==null?Number(r.altura_cm):null,
    pontuacaoSaude: r.pontuacao_saude,
    pesoKg: r.peso_kg!==null?Number(r.peso_kg):null,
    aguaCorporalKg: r.agua_corporal_kg!==null?Number(r.agua_corporal_kg):null,
    massaProteicaKg: r.massa_proteica_kg!==null?Number(r.massa_proteica_kg):null,
    mineraisKg: r.minerais_kg!==null?Number(r.minerais_kg):null,
    massaGordaKg: r.massa_gorda_kg!==null?Number(r.massa_gorda_kg):null,
    massaMuscularEsqueleticaKg: r.massa_muscular_esqueletica_kg!==null?Number(r.massa_muscular_esqueletica_kg):null,
    imc: r.imc!==null?Number(r.imc):null,
    relacaoGorduraPct: r.relacao_gordura_pct!==null?Number(r.relacao_gordura_pct):null,
    adiposidadeNivel: r.adiposidade_nivel!==null?Number(r.adiposidade_nivel):null,
    tipoCorpo: r.tipo_corpo,
    massaLivreGorduraKg: r.massa_livre_gordura_kg!==null?Number(r.massa_livre_gordura_kg):null,
    massaGorduraSubcutaneaKg: r.massa_gordura_subcutanea_kg!==null?Number(r.massa_gordura_subcutanea_kg):null,
    idadeCorpo: r.idade_corpo,
    gorduraVisceral: r.gordura_visceral!==null?Number(r.gordura_visceral):null,
    ingestaoCaloricaRecomendadaKcal: r.ingestao_calorica_recomendada_kcal,
    pesoPadraoKg: r.peso_padrao_kg!==null?Number(r.peso_padrao_kg):null,
    controlePesoKg: r.controle_peso_kg!==null?Number(r.controle_peso_kg):null,
    controleGorduraKg: r.controle_gordura_kg!==null?Number(r.controle_gordura_kg):null,
    controleMuscularKg: r.controle_muscular_kg!==null?Number(r.controle_muscular_kg):null,
    bmrKcal: r.bmr_kcal,
    origem: r.origem, notas: r.notas
  };
}
function appBioimpedanciaToRow(b){
  return {
    id: (b.id && b.id.length===36) ? b.id : undefined,
    data_medicao: b.dataMedicao, idade: b.idade, altura_cm: b.alturaCm, pontuacao_saude: b.pontuacaoSaude,
    peso_kg: b.pesoKg, agua_corporal_kg: b.aguaCorporalKg, massa_proteica_kg: b.massaProteicaKg,
    minerais_kg: b.mineraisKg, massa_gorda_kg: b.massaGordaKg,
    massa_muscular_esqueletica_kg: b.massaMuscularEsqueleticaKg,
    imc: b.imc, relacao_gordura_pct: b.relacaoGorduraPct, adiposidade_nivel: b.adiposidadeNivel,
    tipo_corpo: b.tipoCorpo,
    massa_livre_gordura_kg: b.massaLivreGorduraKg, massa_gordura_subcutanea_kg: b.massaGorduraSubcutaneaKg,
    idade_corpo: b.idadeCorpo, gordura_visceral: b.gorduraVisceral,
    ingestao_calorica_recomendada_kcal: b.ingestaoCaloricaRecomendadaKcal,
    peso_padrao_kg: b.pesoPadraoKg, controle_peso_kg: b.controlePesoKg, controle_gordura_kg: b.controleGorduraKg,
    controle_muscular_kg: b.controleMuscularKg, bmr_kcal: b.bmrKcal,
    origem: b.origem || "relatorio", notas: b.notas || null
  };
}

function rowPesoToApp(r){ return { id: r.id, data: r.data, pesoKg: Number(r.peso_kg), notas: r.notas }; }
function appPesoToRow(p){ return { id: (p.id && p.id.length===36)?p.id:undefined, data: p.data, peso_kg: p.pesoKg, notas: p.notas||null }; }

function rowExercicioToApp(r){
  return { id: r.id, data: r.data, tipo: r.tipo, horaInicio: r.hora_inicio?r.hora_inicio.slice(0,5):null, horaFim: r.hora_fim?r.hora_fim.slice(0,5):null, notas: r.notas, importado: r.importado };
}
function appExercicioToRow(e){
  return { id: (e.id && e.id.length===36)?e.id:undefined, data: e.data, tipo: e.tipo||null, hora_inicio: e.horaInicio||null, hora_fim: e.horaFim||null, notas: e.notas||null, importado: e.importado||false };
}

function rowMovimentacaoToApp(r){
  return { id: r.id, data: r.data, minutosAtivo: r.minutos_ativo, passos: r.passos, caloriasAtividade: r.calorias_atividade, caloriasTotais: r.calorias_totais, distanciaKm: r.distancia_km!==null?Number(r.distancia_km):null };
}
function appMovimentacaoToRow(m){
  return { id: (m.id && m.id.length===36)?m.id:undefined, data: m.data, minutos_ativo: m.minutosAtivo, passos: m.passos, calorias_atividade: m.caloriasAtividade, calorias_totais: m.caloriasTotais, distancia_km: m.distanciaKm };
}

const DB = {
  async getSono(){
    const { data, error } = await sb.from("registros_sono").select("*").order("grupo_data", { ascending: true });
    if (error) { console.error("Erro ao buscar sono:", error); return []; }
    return data.map(rowSonoToApp);
  },
  async upsertSono(reg){
    const row = appSonoToRow(reg);
    const { data, error } = await sb.from("registros_sono").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar sono:", error); return null; }
    return rowSonoToApp(data);
  },
  async deleteSono(id){
    const { error } = await sb.from("registros_sono").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir sono:", error); return false; }
    return true;
  },
  async bulkInsertSono(regs){
    const rows = regs.map(appSonoToRow).map(r => { delete r.id; return r; });
    const { error } = await sb.from("registros_sono").insert(rows);
    if (error) { console.error("Erro na carga inicial de sono:", error); return false; }
    return true;
  },

  async getCelular(){
    const { data, error } = await sb.from("registros_celular").select("*").order("semana", { ascending: true });
    if (error) { console.error("Erro ao buscar celular:", error); return []; }
    return data.map(rowCelularToApp);
  },
  async upsertCelular(reg){
    const row = appCelularToRow(reg);
    const { data, error } = await sb.from("registros_celular").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar celular:", error); return null; }
    return rowCelularToApp(data);
  },
  async bulkInsertCelular(regs){
    const rows = regs.map(appCelularToRow).map(r => { delete r.id; return r; });
    const { error } = await sb.from("registros_celular").insert(rows);
    if (error) { console.error("Erro na carga inicial de celular:", error); return false; }
    return true;
  },

  async getLivros(){
    const { data, error } = await sb.from("livros").select("*").order("criado_em", { ascending: true });
    if (error) { console.error("Erro ao buscar livros:", error); return []; }
    return data.map(rowLivroToApp);
  },
  async upsertLivro(livro){
    const row = appLivroToRow(livro);
    const { data, error } = await sb.from("livros").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar livro:", error); return null; }
    return rowLivroToApp(data);
  },
  async deleteLivro(id){
    const { error } = await sb.from("livros").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir livro:", error); return false; }
    return true;
  },
  async bulkInsertLivros(livros){
    const rows = livros.map(appLivroToRow).map(r => { delete r.id; return r; });
    const { error } = await sb.from("livros").insert(rows);
    if (error) { console.error("Erro na carga inicial de livros:", error); return false; }
    return true;
  },

  async getParametros(){
    const { data, error } = await sb.from("parametros").select("*");
    if (error) { console.error("Erro ao buscar parâmetros:", error); return null; }
    if (!data.length) return null;
    const obj = {};
    data.forEach(r => { obj[r.chave] = r.valor; });
    return obj;
  },
  async setParametro(chave, valor){
    const { error } = await sb.from("parametros").upsert({ chave, valor });
    if (error) { console.error("Erro ao salvar parâmetro:", error); return false; }
    return true;
  },

  async contarRegistros(){
    const [s, c, l] = await Promise.all([
      sb.from("registros_sono").select("id", { count: "exact", head: true }),
      sb.from("registros_celular").select("id", { count: "exact", head: true }),
      sb.from("livros").select("id", { count: "exact", head: true })
    ]);
    return { sono: s.count||0, celular: c.count||0, livros: l.count||0 };
  }
};

function rowCelularDiarioToApp(r){
  return { id: r.id, data: r.data, horasConsumo: Number(r.horas_consumo), horasMaps: Number(r.horas_maps), notas: r.notas };
}
function appCelularDiarioToRow(c){
  return { id: (c.id && c.id.length===36)?c.id:undefined, data: c.data, horas_consumo: c.horasConsumo, horas_maps: c.horasMaps||0, notas: c.notas||null };
}

Object.assign(DB, {
  async getBioimpedancia(){
    const { data, error } = await sb.from("bioimpedancia").select("*").order("data_medicao", { ascending: true });
    if (error) { console.error("Erro ao buscar bioimpedância:", error); return []; }
    return data.map(rowBioimpedanciaToApp);
  },
  async upsertBioimpedancia(b){
    const row = appBioimpedanciaToRow(b);
    const { data, error } = await sb.from("bioimpedancia").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar bioimpedância:", error); return null; }
    return rowBioimpedanciaToApp(data);
  },
  async deleteBioimpedancia(id){
    const { error } = await sb.from("bioimpedancia").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir bioimpedância:", error); return false; }
    return true;
  },

  async getPeso(){
    const { data, error } = await sb.from("registros_peso").select("*").order("data", { ascending: true });
    if (error) { console.error("Erro ao buscar peso:", error); return []; }
    return data.map(rowPesoToApp);
  },
  async upsertPeso(p){
    const row = appPesoToRow(p);
    const { data, error } = await sb.from("registros_peso").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar peso:", error); return null; }
    return rowPesoToApp(data);
  },
  async deletePeso(id){
    const { error } = await sb.from("registros_peso").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir peso:", error); return false; }
    return true;
  },

  async getExercicios(){
    const { data, error } = await sb.from("exercicios").select("*").order("data", { ascending: true });
    if (error) { console.error("Erro ao buscar exercícios:", error); return []; }
    return data.map(rowExercicioToApp);
  },
  async upsertExercicio(e){
    const row = appExercicioToRow(e);
    const { data, error } = await sb.from("exercicios").upsert(row).select().single();
    if (error) { console.error("Erro ao salvar exercício:", error); return null; }
    return rowExercicioToApp(data);
  },
  async deleteExercicio(id){
    const { error } = await sb.from("exercicios").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir exercício:", error); return false; }
    return true;
  },
  async bulkInsertExercicios(regs){
    const rows = regs.map(appExercicioToRow).map(r => { delete r.id; return r; });
    const { error } = await sb.from("exercicios").insert(rows);
    if (error) { console.error("Erro na carga inicial de exercícios:", error); return false; }
    return true;
  },

  async contarRegistrosExtra(){
    const [b, p, e] = await Promise.all([
      sb.from("bioimpedancia").select("id", { count: "exact", head: true }),
      sb.from("registros_peso").select("id", { count: "exact", head: true }),
      sb.from("exercicios").select("id", { count: "exact", head: true })
    ]);
    return { bioimpedancia: b.count||0, peso: p.count||0, exercicios: e.count||0 };
  },

  async getMovimentacao(){
    const { data, error } = await sb.from("movimentacao_diaria").select("*").order("data", { ascending: true });
    if (error) { console.error("Erro ao buscar movimentação:", error); return []; }
    return data.map(rowMovimentacaoToApp);
  },
  async upsertMovimentacao(m){
    const row = appMovimentacaoToRow(m);
    const { data, error } = await sb.from("movimentacao_diaria").upsert(row, { onConflict: "data" }).select().single();
    if (error) { console.error("Erro ao salvar movimentação:", error); return null; }
    return rowMovimentacaoToApp(data);
  },
  async deleteMovimentacao(id){
    const { error } = await sb.from("movimentacao_diaria").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir movimentação:", error); return false; }
    return true;
  }
});

Object.assign(DB, {
  async getCelularDiario(){
    const { data, error } = await sb.from("registros_celular_diario").select("*").order("data", { ascending: true });
    if (error) { console.error("Erro ao buscar celular diário:", error); return []; }
    return data.map(rowCelularDiarioToApp);
  },
  async upsertCelularDiario(c){
    const row = appCelularDiarioToRow(c);
    const { data, error } = await sb.from("registros_celular_diario").upsert(row, { onConflict: "data" }).select().single();
    if (error) { console.error("Erro ao salvar celular diário:", error); return null; }
    return rowCelularDiarioToApp(data);
  },
  async deleteCelularDiario(id){
    const { error } = await sb.from("registros_celular_diario").delete().eq("id", id);
    if (error) { console.error("Erro ao excluir celular diário:", error); return false; }
    return true;
  },

  async getSemanasFechadas(){
    const { data, error } = await sb.from("celular_semanas_fechadas").select("*");
    if (error) { console.error("Erro ao buscar semanas fechadas:", error); return {}; }
    const map = {};
    data.forEach(function(r){ map[r.semana_inicio] = r.fechada; });
    return map;
  },
  async setSemanaFechada(semanaInicio, fechada){
    const { error } = await sb.from("celular_semanas_fechadas").upsert({ semana_inicio: semanaInicio, fechada: fechada }, { onConflict: "semana_inicio" });
    if (error) { console.error("Erro ao salvar estado da semana:", error); return false; }
    return true;
  }
});
