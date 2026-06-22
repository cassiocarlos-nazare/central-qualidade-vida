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
