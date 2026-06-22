-- ============================================================
-- Correção: remover duplicação de livros e celular causada
-- pela falha parcial da primeira tentativa de carga (antes do
-- fix do overflow numérico). O sono já está correto e não é
-- afetado por este script.
-- ============================================================

delete from livros;
delete from registros_celular;
delete from parametros where chave in ('carga_celular_feita', 'carga_livros_feita', 'carga_inicial_feita');

-- Na próxima abertura do sistema, ele detecta que essas duas
-- tabelas estão vazias e recarrega livros (7) e celular (24
-- semanas) corretamente, sem duplicar.
