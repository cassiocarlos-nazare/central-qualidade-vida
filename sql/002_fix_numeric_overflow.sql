-- ============================================================
-- Correção: ampliar margem dos campos numéricos de horas
-- Execute este script no SQL Editor do Supabase (depois do
-- script 001, e antes de tentar carregar os dados novamente)
-- ============================================================

alter table registros_sono
  alter column horas_total type numeric(6,2),
  alter column horas_real type numeric(6,2),
  alter column horas_rem type numeric(6,2),
  alter column horas_fundo type numeric(6,2),
  alter column pct_rem type numeric(6,2),
  alter column pct_fundo type numeric(6,2),
  alter column score type numeric(6,2);

-- Caso a primeira tentativa de carga tenha inserido dados parciais
-- com valores errados, esta linha limpa a tabela de sono para a
-- próxima abertura do sistema recarregar tudo do zero corretamente.
-- (Não afeta registros_celular nem livros, que já carregaram certos.)
delete from registros_sono;
delete from parametros where chave = 'carga_inicial_feita';
