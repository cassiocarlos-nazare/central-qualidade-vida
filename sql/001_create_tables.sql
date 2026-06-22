-- ============================================================
-- Central de Qualidade de Vida - Cássio
-- Script de criação de tabelas no Supabase
-- Execute este script completo no SQL Editor do Supabase
-- (Dashboard > SQL Editor > New query > colar tudo > Run)
-- ============================================================

-- TABELA: registros de sono (noite + cochilos)
create table if not exists registros_sono (
  id uuid primary key default gen_random_uuid(),
  grupo_data date not null,
  tipo text not null check (tipo in ('noite','cochilo')),
  dormiu time null,
  acordou time null,
  horas_total numeric(5,2) null,
  horas_real numeric(5,2) null,
  horas_rem numeric(5,2) null,
  horas_fundo numeric(5,2) null,
  pct_rem numeric(5,2) null,
  pct_fundo numeric(5,2) null,
  score numeric(5,2) null,
  notas text null,
  importado boolean default false,
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);
create index if not exists idx_registros_sono_grupo_data on registros_sono(grupo_data);

-- TABELA: registros semanais de uso de celular
create table if not exists registros_celular (
  id uuid primary key default gen_random_uuid(),
  semana integer not null,
  periodo text not null,
  media_diaria numeric(5,2) null,
  total_semanal numeric(6,2) null,
  importado boolean default false,
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);
create index if not exists idx_registros_celular_semana on registros_celular(semana);

-- TABELA: livros / leituras
create table if not exists livros (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  paginas integer null,
  horas_leitura numeric(5,2) null,
  status text not null default 'planejado' check (status in ('lendo','concluido','planejado')),
  importado boolean default false,
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);

-- TABELA: parâmetros do sistema (chave/valor único por usuário pessoal)
create table if not exists parametros (
  chave text primary key,
  valor jsonb not null,
  atualizado_em timestamptz default now()
);

-- ============================================================
-- Row Level Security
-- Sistema de uso pessoal (sem login), acesso liberado via
-- chave publishable apenas para estas tabelas específicas.
-- ============================================================
alter table registros_sono enable row level security;
alter table registros_celular enable row level security;
alter table livros enable row level security;
alter table parametros enable row level security;

drop policy if exists "acesso_total_sono" on registros_sono;
create policy "acesso_total_sono" on registros_sono for all using (true) with check (true);

drop policy if exists "acesso_total_celular" on registros_celular;
create policy "acesso_total_celular" on registros_celular for all using (true) with check (true);

drop policy if exists "acesso_total_livros" on livros;
create policy "acesso_total_livros" on livros for all using (true) with check (true);

drop policy if exists "acesso_total_parametros" on parametros;
create policy "acesso_total_parametros" on parametros for all using (true) with check (true);

-- ============================================================
-- Trigger para atualizar "atualizado_em" automaticamente
-- ============================================================
create or replace function set_atualizado_em()
returns trigger as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_sono_atualizado on registros_sono;
create trigger trg_sono_atualizado before update on registros_sono
  for each row execute function set_atualizado_em();

drop trigger if exists trg_celular_atualizado on registros_celular;
create trigger trg_celular_atualizado before update on registros_celular
  for each row execute function set_atualizado_em();

drop trigger if exists trg_livros_atualizado on livros;
create trigger trg_livros_atualizado before update on livros
  for each row execute function set_atualizado_em();
