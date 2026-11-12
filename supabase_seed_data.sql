-- ==============================================================================
-- SEED DATA SUPABASE: PLATAFORMA DE GESTÃO DOCUMENTAL & ADMINISTRATIVA (DELEGADO AA)
-- ==============================================================================
-- Povoamento inicial dos Atores, Tarefas Kanban e Catálogo Completo dos 32 Documentos.
--
-- Execute este script no SQL Editor do Supabase logo após executar o supabase_schema.sql.
-- ==============================================================================

-- 1. Atores Oficiais Iniciais
INSERT INTO public.actors (id, nome, cargo, area, email, permissoes, ativo) VALUES
('henrique', 'Henrique', 'Analista de Processos', 'Área 27 - CE', 'henrique@delegadoaa.org.br', '{"visualizar": true, "baixar": true, "editar": true, "excluir": true, "kanban": true, "admin": true}'::jsonb, true),
('carlos', 'Carlos S.R.', 'Delegado de Área RJ', 'Área 01 - RJ', 'carlos.sr@delegadoaa.org.br', '{"visualizar": true, "baixar": true, "editar": true, "excluir": false, "kanban": true, "admin": true}'::jsonb, true),
('secretaria', 'Secretaria de Área', 'Secretário(a) de Área', 'Área 01 - RJ', 'secretaria@delegadoaa.org.br', '{"visualizar": true, "baixar": true, "editar": false, "excluir": false, "kanban": true, "admin": false}'::jsonb, true),
('tesouraria', 'Tesouraria de Área', 'Tesoureiro(a) de Área', 'Área 01 - RJ', 'tesouraria@delegadoaa.org.br', '{"visualizar": true, "baixar": true, "editar": true, "excluir": false, "kanban": true, "admin": false}'::jsonb, true)
ON CONFLICT (id) DO UPDATE SET
  nome = EXCLUDED.nome,
  cargo = EXCLUDED.cargo,
  area = EXCLUDED.area,
  permissoes = EXCLUDED.permissoes;

-- 2. Tarefas Iniciais do Kanban Administrativo
INSERT INTO public.kanban_tasks (id, titulo, descricao, coluna_id, prioridade, responsavel_nome, prazo, ordem) VALUES
('task-101', 'Análise do Balancete Jan/26 da Área 27', 'Conferir receitas do plano 60/25/15 e conciliação bancária', 'in_progress', 'alta', 'Henrique', CURRENT_DATE + INTERVAL '5 days', 1),
('task-102', 'Revisão da Ata da 48ª CSG (Comitê de Finanças)', 'Levantar recomendações dos delegados para a próxima reunião de área', 'in_review', 'urgente', 'Carlos S.R.', CURRENT_DATE + INTERVAL '2 days', 2),
('task-103', 'Validação do Mapa de Processos TO BE JUNAAB', 'Verificar fluxograma BPMN dos novos processos operacionais', 'in_progress', 'media', 'Henrique', CURRENT_DATE + INTERVAL '10 days', 3),
('task-104', 'Proposta de Estruturação das Áreas Online', 'Apresentar modelo de representação das áreas online de A.A. no Brasil', 'todo', 'alta', 'Carlos S.R.', CURRENT_DATE + INTERVAL '15 days', 4),
('task-105', 'Demonstrativo Financeiro Consolidado 2025', 'Demonstrativos e balancetes arquivados e homologados', 'done', 'media', 'Tesouraria de Área', CURRENT_DATE - INTERVAL '3 days', 5)
ON CONFLICT (id) DO NOTHING;

-- 3. Inserção do Catálogo dos 32 Documentos

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-001', 'doc-fin-001', 'Demonstrativo Financeiro - Janeiro de 2026', '01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2026.pdf', '01 - FINANCEIRO/Demonstrativos e Balancetes - 2026/01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2026.pdf',
  '01 - FINANCEIRO', 'Demonstrativos e Balancetes - 2026', 'PDF', 'Janeiro / 2026', 2026,
  '15.2 MB', 'Homologado', 'in_progress', ARRAY['relatorio financeiro jan/26', 'demonstrativo financeiro janeiro 2026', 'balancete', 'entradas', 'saidas', 'reserva prudente', 'saldo bancario', 'banco do brasil', 'caixa'], 'Demonstrativo financeiro completo referente a janeiro de 2026 da Área 27. Contém receitas do Plano 60/25/15, vendas de literatura, relatórios anuais, convenção nacional 2027, conciliação de caixa e extrato bancário detalhado.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-002', 'doc-fin-002', 'Demonstrativo Resumido - Jan 2026', 'DEMONSTRATIVO JAN 2026.PDF', '01 - FINANCEIRO/Demonstrativos e Balancetes - 2026/DEMONSTRATIVO JAN 2026.PDF',
  '01 - FINANCEIRO', 'Demonstrativos e Balancetes - 2026', 'PDF', 'Janeiro / 2026', 2026,
  '215 KB', 'Vigente', 'todo', ARRAY['relatorio financeiro jan/26', 'demonstrativo jan 2026', 'resumo executivo', 'entradas', 'despesas'], 'Versão executiva compacta do demonstrativo financeiro de janeiro de 2026 para rápida apreciação da mesa de coordenação de área.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-003', 'doc-fin-003', 'Auditoria 2026 pós-CSG (29/04/26) — Delegados SE', 'Auditoria_2026 pos_CSG_(29-04-26)_Delegados_SE.pdf', '01 - FINANCEIRO/Analise e Auditoria/Auditoria_2026 pos_CSG_(29-04-26)_Delegados_SE.pdf',
  '01 - FINANCEIRO', 'Análise e Auditoria', 'PDF', 'Abril / 2026', 2026,
  '329 KB', 'Homologado', 'in_progress', ARRAY['auditoria 2026', 'csg', 'conferencia de servicos gerais', 'delegados se', 'comite de financas', 'prestacao de contas'], 'Relatório de auditoria pós-CSG elaborado pelos delegados da região Sudeste. Aborda a verificação contábil, controles internos, parecer sobre receitas da literatura e recomendações para a JUNAAB.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-004', 'doc-fin-004', 'Análise Financeira JUNAAB (2019-2025) Gráficos', 'Analise Financeira JUNAAB (2019-2025) Graficos.pdf', '01 - FINANCEIRO/Analise e Auditoria/Analise Financeira JUNAAB (2019-2025) Graficos.pdf',
  '01 - FINANCEIRO', 'Análise e Auditoria', 'PDF', 'Histórico (2019-2025)', 2025,
  '545 KB', 'Referência', 'in_progress', ARRAY['analise financeira junaab', 'graficos financeiros', 'serie historica', 'deficit', 'superavit', 'evolucao financeira'], 'Estudo comparativo gráfico da saúde financeira da JUNAAB entre 2019 e 2025. Demonstra a evolução das receitas com literatura, contribuições da 7ª Tradição e impacto inflacionário nas despesas operacionais.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-005', 'doc-fin-005', 'Demonstrativo Financeiro - Dezembro de 2025', '12 - DEMONSTRATIVO FINANCEIRO DEZEMBRO-2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/12 - DEMONSTRATIVO FINANCEIRO DEZEMBRO-2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Dezembro / 2025', 2025,
  '20.6 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro dezembro 2025', 'fechamento do ano', 'balanço anual', 'sacola da gratidao', '13o salario'], 'Fechamento anual de 2025. Demonstração de entradas (R$ 26.462,89), saídas (R$ 26.387,07), saldo bancário de fim de ano e prestação da Sacola da Gratidão.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-006', 'doc-fin-006', 'Demonstrativo Financeiro - Novembro de 2025', '11 - DEMONSTRATIVO FINANCEIRO NOVEMBRO-2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/11 - DEMONSTRATIVO FINANCEIRO NOVEMBRO-2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Novembro / 2025', 2025,
  '33.1 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro novembro 2025', 'entradas', 'despesas', 'folha de pagamento'], 'Prestação de contas de novembro de 2025: receitas de literatura, arrecadações distritais e provisionamento de encargos.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-007', 'doc-fin-007', 'Demonstrativo Financeiro - Outubro de 2025', '10 - DEMONSTRATIVO FINANCEIRO OUTUBRO-2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/10 - DEMONSTRATIVO FINANCEIRO OUTUBRO-2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Outubro / 2025', 2025,
  '31.8 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro outubro 2025', 'balancete', 'despesas operacionais'], 'Relatório de receitas e despesas de outubro de 2025 com comprovantes bancários anexados.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-008', 'doc-fin-008', 'Demonstrativo Financeiro - Setembro de 2025', '09 - DEMONSTRATIVO FINANCEIRO - SETEMBRO 2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/09 - DEMONSTRATIVO FINANCEIRO - SETEMBRO 2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Setembro / 2025', 2025,
  '30.6 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro setembro 2025', 'seminario nordeste', 'repasses'], 'Demonstrativo de setembro de 2025 com receitas do Seminário do Nordeste e apuração das contas distritais.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-009', 'doc-fin-009', 'Demonstrativo Financeiro - Agosto de 2025', '08 - DEMONSTRATIVO FINANCEIRO - AGOSTO 2025.pdf.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/08 - DEMONSTRATIVO FINANCEIRO - AGOSTO 2025.pdf.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Agosto / 2025', 2025,
  '19.5 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro agosto 2025', 'seminario do nordeste receitas'], 'Receitas recordes de agosto de 2025 incluindo arrecadações do Seminário do Nordeste (R$ 9.254,50) e convenção.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-010', 'doc-fin-010', 'Demonstrativo Financeiro - Julho de 2025', '07 - DEMONSTRATIVO FINANCEIRO - JULHO 2025.pdf.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/07 - DEMONSTRATIVO FINANCEIRO - JULHO 2025.pdf.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Julho / 2025', 2025,
  '27.8 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro julho 2025', 'resgate duplicidade', 'conciliacao'], 'Demonstrativo contábil de julho de 2025, detalhando movimentação de entradas (R$ 33.220,82) e conciliações bancárias.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-011', 'doc-fin-011', 'Demonstrativo Financeiro - Junho de 2025', '06 - DEMONSTRATIVO FINANCEIRO - JUNHO 2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/06 - DEMONSTRATIVO FINANCEIRO - JUNHO 2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Junho / 2025', 2025,
  '27.9 MB', 'Homologado', 'todo', ARRAY['demonstrativo financeiro junho 2025', 'fechamento semestral'], 'Demonstrativo mensal e encerramento do primeiro semestre de 2025 da Área 27.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-012', 'doc-fin-012', 'Balancete Oficial - Junho de 2025', 'BALANCETE JUNHO-2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/BALANCETE JUNHO-2025.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Junho / 2025', 2025,
  '27.9 MB', 'Homologado', 'todo', ARRAY['balancete junho 2025', 'balanco patrimonial semestral', 'auditoria'], 'Balancete detalhado com apuração de receitas, despesas administrativas e reserva prudente.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-fin-013', 'doc-fin-013', 'Demonstrativos Mensais 2025 — Jan a Maio', '01 a 05 - DEMONSTRATIVOS FINANCEIROS 2025.pdf', '01 - FINANCEIRO/Demonstrativos Mensais - 2025/01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2025.pdf.pdf',
  '01 - FINANCEIRO', 'Demonstrativos Mensais - 2025', 'PDF', 'Jan-Maio / 2025', 2025,
  '25 MB+', 'Homologado', 'todo', ARRAY['demonstrativo financeiro janeiro 2025', 'fevereiro 2025', 'marco 2025', 'abril 2025', 'maio 2025'], 'Série histórica completa dos demonstrativos de janeiro, fevereiro, março, abril e maio de 2025 com comprovantes bancários e notas fiscais.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-001', 'doc-jun-001', 'Relatório de Contestação — JUNAAB', 'RELATÓRIO CONTESTACAO_JUNAAB.pdf', '02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/RELATÓRIO CONTESTACAO_JUNAAB.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Pareceres e Contestações', 'PDF', 'Maio / 2026', 2026,
  '235 KB', 'Vigente', 'in_progress', ARRAY['relatorio contestacao junaab', 'parecer delegado', 'impugnacao', 'analise contabil', 'regime de competencia', 'regime de caixa'], 'Relatório fundamentado de contestação apresentado pelo Delegado de Área à JUNAAB. Trata das discrepâncias entre os demonstrativos enviados e a realidade contábil, alertando sobre distorções entre regime de competência e regime de caixa.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-002', 'doc-jun-002', 'Anexo — Análise Financeira JUNAAB', 'ANEXO_ANALISE_FINANCEIRA_JUNAAB.pdf', '02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/ANEXO_ANALISE_FINANCEIRA_JUNAAB.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Pareceres e Contestações', 'PDF', 'Maio / 2026', 2026,
  '300 KB', 'Vigente', 'in_progress', ARRAY['anexo analise financeira junaab', 'tabelas contabeis', 'demonstracao de resultados', 'custos operacionais'], 'Anexo técnico com planilhas, memórias de cálculo e auditoria dos balancetes JUNAAB que instruem o relatório de contestação do Delegado.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-003', 'doc-jun-003', 'Mapa Mental — Parecer JUNAAB', 'Mapa Mental Parecer JUNAAB.png', '02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/Mapa Mental Parecer JUNAAB.png',
  '02 - DOCUMENTOS JUNAAB', 'Pareceres e Contestações', 'IMAGEM', 'Maio / 2026', 2026,
  '2.3 MB', 'Referência', 'todo', ARRAY['mapa mental', 'parecer junaab', 'diagrama sintetico', 'arvore de decisoes'], 'Diagrama visual sinóptico estruturando todos os argumentos jurídicos, estatutários e financeiros do Parecer JUNAAB.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-004', 'doc-jun-004', 'Ata da 5ª Reunião Extraordinária da Junta de Custódios', 'Ata 5ª Reunião Extraordinária da Junta - junho 202_260523_103001.pdf', '02 - DOCUMENTOS JUNAAB/Atas e Reunioes/Ata 5ª Reunião Extraordinária da Junta - junho 202_260523_103001.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Atas e Reuniões', 'PDF', 'Junho / 2024-2026', 2026,
  '642 KB', 'Homologado', 'in_progress', ARRAY['ata reuniao extraordinaria', 'junta de custodios', 'deliberacoes', 'pauta administrativa'], 'Ata oficial da 5ª Reunião Extraordinária da Junta de Custódios de A.A. Brasil. Registra deliberações sobre a gestão financeira, contratos editoriais e comunicação com os delegados de área.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-005', 'doc-jun-005', 'Relatório do Comitê de Finanças — Junta de Custódios', '5 - Relatório do Comitê de Finanças - Junta de Cus_260523_103054.pdf', '02 - DOCUMENTOS JUNAAB/Atas e Reunioes/5 - Relatório do Comitê de Finanças - Junta de Cus_260523_103054.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Atas e Reuniões', 'PDF', 'Maio / 2026', 2026,
  '184 KB', 'Homologado', 'todo', ARRAY['relatorio comite de financas', 'junta de custodios', 'parecer financeiro', 'orcamento anual'], 'Parecer do Comitê de Finanças da Junta avaliando a execução orçamentária do exercício, fluxo de caixa e recomendações de contingenciamento.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-006', 'doc-jun-006', 'Circular 04-2026 (30/05/2026)', 'Circular 04-2026 - 30.05.2026_pagenumber.pdf', '02 - DOCUMENTOS JUNAAB/Circulares/Circular 04-2026 - 30.05.2026_pagenumber.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Circulares', 'PDF', 'Maio / 2026', 2026,
  '8.5 MB', 'Vigente', 'in_progress', ARRAY['circular 04-2026', 'comunicado oficial junaab', 'orientacoes aos grupos', 'diretrizes nacionais'], 'Circular oficial nº 04/2026 enviada pela JUNAAB a todas as Áreas de A.A. do Brasil com diretrizes sobre encontros estruturais, prestação de contas e temas da próxima CSG.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-jun-007', 'doc-jun-007', 'Junta de Custódios — Auditoria — Reunião 05/05', '1 - JUNTA DE CUSTÓDIOS - AUDITORIA - REUNIÃO 05052_260523_102837.pdf', '02 - DOCUMENTOS JUNAAB/Atas e Reunioes/1 - JUNTA DE CUSTÓDIOS - AUDITORIA - REUNIÃO 05052_260523_102837.pdf',
  '02 - DOCUMENTOS JUNAAB', 'Atas e Reuniões', 'PDF', 'Maio / 2026', 2026,
  '638 KB', 'Homologado', 'todo', ARRAY['auditoria junta de custodios', 'reuniao maio', 'relatorio de auditoria independente'], 'Apresentação e ata da reunião com os auditores independentes acerca do balanço patrimonial e apontamentos contábeis da JUNAAB.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-est-001', 'doc-est-001', 'Proposta de Planejamento Estratégico JUNAAB', 'PROPOSTA DE PLANEJAMENTO ESTRATÉGICO JUNAAB.pdf', '03 - PLANEJAMENTO ESTRATEGICO/Proposta Estrategica JUNAAB/PROPOSTA DE PLANEJAMENTO ESTRATÉGICO JUNAAB.pdf',
  '03 - PLANEJAMENTO ESTRATEGICO', 'Proposta Estratégica JUNAAB', 'PDF', 'Maio / 2026', 2026,
  '548 KB', 'Em Análise', 'in_progress', ARRAY['planejamento estrategico junaab', 'proposta estrategica', 'metas e diretrizes', 'missao visao valores', 'modernizacao'], 'Documento oficial contendo a proposta de Planejamento Estratégico da JUNAAB. Estabelece metas de autossuficiência, ampliação do alcance da mensagem de A.A., sustentabilidade das publicações e transformação digital.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-est-002', 'doc-est-002', 'Estruturação de Áreas Online de A.A. no Brasil', 'Estruturacao de Areas Online de A.A. no Brasil 1.pptx', '03 - PLANEJAMENTO ESTRATEGICO/Estruturacao Areas Online AA/Estruturacao de Areas Online de A.A. no Brasil 1.pptx',
  '03 - PLANEJAMENTO ESTRATEGICO', 'Estruturação Áreas Online AA', 'PPTX', 'Maio / 2026', 2026,
  '1.9 MB', 'Em Análise', 'in_progress', ARRAY['areas online', 'grupos digitais', 'reunioes virtuais', 'apresentacao estruturacao', '7a tradicao online'], 'Apresentação executiva em slides sobre o modelo de integração e representatividade de reuniões e distritos virtuais na estrutura de serviços gerais de A.A. no Brasil.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-proc-001', 'doc-proc-001', 'Matriz RACI — Estrutura de Serviços Gerais de A.A. Brasil', 'matriz_raci_aa_brasil.html', '04 - MAPEAMENTOS DE PROCESSOS/AS IS/matriz_raci_aa_brasil.html',
  '04 - MAPEAMENTOS DE PROCESSOS', 'AS IS (Situação Atual)', 'HTML', 'Referência Permanente', 2026,
  '11.6 KB', 'Vigente', 'in_progress', ARRAY['matriz raci', 'papeis e responsabilidades', 'governanca', 'delegado', 'custodios', 'csg', 'conselho fiscal', 'esg'], 'Matriz interativa definindo papéis e responsabilidades (Responsible, Accountable, Consulted, Informed) para todas as 25 ações críticas de governança, finanças e deliberação estatutária.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-proc-002', 'doc-proc-002', 'Macroprocesso AS IS — JUNAAB', 'MACRO PROCESSO AS IS JUNAAB.html', '04 - MAPEAMENTOS DE PROCESSOS/AS IS/MACRO PROCESSO AS IS JUNAAB.html',
  '04 - MAPEAMENTOS DE PROCESSOS', 'AS IS (Situação Atual)', 'HTML', 'Referência Permanente', 2026,
  '52 KB', 'Vigente', 'in_progress', ARRAY['macroprocesso as is', 'fluxo atual', 'bpmn', 'mapeamento de processos junaab'], 'Mapeamento completo do fluxo de processos atual (AS IS) da JUNAAB e escritórios de área, identificando gargalos burocráticos e duplicidades de esforço.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-proc-003', 'doc-proc-003', 'Macroprocesso TO BE — JUNAAB (Proposta Otimizada)', 'MACRO PROCESSO TO BE JUNAAB.html', '04 - MAPEAMENTOS DE PROCESSOS/TO BE/MACRO PROCESSO TO BE JUNAAB.html',
  '04 - MAPEAMENTOS DE PROCESSOS', 'TO BE (Proposta Futura)', 'HTML', 'Proposta', 2026,
  '60 KB', 'Em Análise', 'in_progress', ARRAY['macroprocesso to be', 'modelo futuro', 'otimizacao de processos', 'gestao moderna'], 'Arquitetura de processos futura proposta (TO BE) para modernização da JUNAAB com gestão orientada a valor, fluxos ágeis de aprovação e transparência orçamentária.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-proc-004', 'doc-proc-004', 'Manual de Serviço de A.A. — Referência Estatutária', 'Manual de Serviço de A.A -.pdf', '04 - MAPEAMENTOS DE PROCESSOS/AS IS/Manual de Serviço de A.A -.pdf',
  '04 - MAPEAMENTOS DE PROCESSOS', 'AS IS (Situação Atual)', 'PDF', 'Estatutário', 2026,
  '1.2 MB', 'Referência', 'todo', ARRAY['manual de servico', 'estatuto junaab', '12 conceitos', '12 tradicoes', 'deveres do delegado'], 'Manual oficial de Serviços Gerais contendo os Doze Passos, Doze Tradições, Doze Conceitos para o Serviço Mundial e regulamentação das funções dos Delegados de Área.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-cnv-001', 'doc-cnv-001', 'Prestação de Contas — Vendas de Camisas Convenção 2027', 'pix_camisas_convencao.csv', '05 - CONVENCAO/Comprovantes de Saques/pix_camisas_convencao.csv',
  '05 - CONVENCAO', 'Comprovantes de Saques', 'CSV', 'Junho / 2026', 2026,
  '2.5 KB', 'Vigente', 'in_progress', ARRAY['pix camisas convencao', 'convencao 2027', 'comprovantes pix', 'vendas de camisas', 'planilha financeira'], 'Planilha em CSV com o registro de todos os pagamentos via PIX para aquisição de camisas promocionais da Convenção Nacional de 2027.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-cnv-002', 'doc-cnv-002', 'Comprovantes e Recibos WhatsApp — Convenção', 'WhatsApp Unknown 2026-06-19 at 16.48.08.zip', '05 - CONVENCAO/Comprovantes de Saques/WhatsApp Unknown 2026-06-19 at 16.48.08.zip',
  '05 - CONVENCAO', 'Comprovantes de Saques', 'ZIP', 'Junho / 2026', 2026,
  '505 KB', 'Vigente', 'todo', ARRAY['recibos convencao', 'comprovantes bancarios whatsapp', 'saques poupanca', 'arquivos zip'], 'Pacote contendo comprovantes digitais de transferências, recibos e extratos de saques da conta poupança para custeio operacional da Convenção.',
  false, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-dsh-001', 'doc-dsh-001', 'Painel da Realidade Financeira do Movimento', 'painel-realidade-financeira-aa-1.html', 'painel-realidade-financeira-aa-1.html',
  '06 - DASHBOARDS E FERRAMENTAS', 'Dashboards Executivos', 'HTML', '2019-2026', 2026,
  '32.1 KB', 'Vigente', 'in_progress', ARRAY['painel realidade financeira', 'deficit estrutural', 'reserva prudente', 'diagnostico financeiro', 'junaab'], 'Painel interativo com visualização da tese financeira: déficit operacional acumulado, queima da reserva prudente de A.A. Brasil e métricas de sustentabilidade.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-dsh-002', 'doc-dsh-002', 'Nota Técnica — Clarificação Metodológica dos Regimes Contábeis', 'NOTA_TECNICA_COM_CITACOES_COMPLETAS.html', 'NOTA_TECNICA_COM_CITACOES_COMPLETAS.html',
  '06 - DASHBOARDS E FERRAMENTAS', 'Notas Técnicas', 'HTML', 'Julho / 2026', 2026,
  '19.1 KB', 'Vigente', 'in_progress', ARRAY['nota tecnica', 'regimes contabeis', 'citacoes completas', 'regime de competencia', 'regime de caixa', 'itg 2002'], 'Nota técnica aprofundada com citações das normas contábeis brasileiras (NBC TG e ITG 2002 para entidades sem fins lucrativos) fundamentando a correta contabilização das receitas de literatura.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-dsh-003', 'doc-dsh-003', 'Dashboard Financeiro ESL Área 27 CE', 'dashboard_aa_area27.html', '06 - DASHBOARDS E FERRAMENTAS/Dashboard Area 27/dashboard_aa_area27.html',
  '06 - DASHBOARDS E FERRAMENTAS', 'Dashboard Area 27', 'HTML', '2025-2026', 2026,
  '170 KB', 'Vigente', 'in_progress', ARRAY['dashboard area 27', 'controle financeiro', 'graficos interativos', 'extratos', 'rubricas', 'convencao 2027'], 'Dashboard financeiro interativo completo com gráficos de receitas por rubrica, despesas por categoria, controle nominal de cotas da Convenção e extrato bancário categorizado.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

INSERT INTO public.documents (
  id, codigo, titulo, arquivo_nome, caminho_relativo,
  categoria, subcategoria, tipo, periodo, ano,
  tamanho, status, kanban_status, tags, resumo,
  destaque, versao_atual, criado_por_nome, atualizado_por_nome
) VALUES (
  'doc-dsh-004', 'doc-dsh-004', 'Apresentação Atualizada — Relatório de Gestão', 'APRESENTACAO_ATUALIZADA.html', 'APRESENTACAO_ATUALIZADA.html',
  '06 - DASHBOARDS E FERRAMENTAS', 'Apresentações', 'HTML', 'Julho / 2026', 2026,
  '81.2 KB', 'Vigente', 'in_progress', ARRAY['apresentacao atualizada', 'slides executivos', 'prestacao de contas assembleia', 'relatorio de gestao'], 'Apresentação interativa em slides para assembleia de delegados, sintetizando os números da área, desafios institucionais e propostas para a CSG.',
  true, 1, 'Henrique', 'Henrique'
) ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  caminho_relativo = EXCLUDED.caminho_relativo,
  status = EXCLUDED.status,
  tags = EXCLUDED.tags,
  resumo = EXCLUDED.resumo;

-- Finalização do seed
SELECT count(*) AS total_documentos FROM public.documents;
SELECT count(*) AS total_versoes FROM public.document_versions;
