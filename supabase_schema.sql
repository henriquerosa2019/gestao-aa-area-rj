-- ==============================================================================
-- SCHEMA SUPABASE: PLATAFORMA DE GESTÃO DOCUMENTAL & ADMINISTRATIVA (DELEGADO AA)
-- ==============================================================================
-- Este script cria a estrutura completa de tabelas, índices, RLS (Row Level Security),
-- triggers de auditoria e versionamento seguro para o Supabase PostgreSQL.
--
-- Como executar no Supabase:
-- 1. Acesse https://supabase.com/dashboard/project/_/sql
-- 2. Cole este script completo no SQL Editor e clique em "Run".
-- ==============================================================================

-- 1. Extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Tabela de Atores e Perfis de Acesso (RBAC)
CREATE TABLE IF NOT EXISTS public.actors (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    cargo TEXT NOT NULL,
    area TEXT NOT NULL,
    email TEXT,
    permissoes JSONB NOT NULL DEFAULT '{"visualizar": true, "baixar": true, "editar": false, "excluir": false, "kanban": true, "admin": false}'::jsonb,
    ativo BOOLEAN NOT NULL DEFAULT true,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. Tabela Principal de Documentos
CREATE TABLE IF NOT EXISTS public.documents (
    id TEXT PRIMARY KEY DEFAULT ('doc-' || substr(md5(random()::text), 1, 8)),
    codigo TEXT UNIQUE,
    titulo TEXT NOT NULL,
    arquivo_nome TEXT NOT NULL,
    caminho_relativo TEXT NOT NULL,
    categoria TEXT NOT NULL,
    subcategoria TEXT NOT NULL,
    tipo TEXT NOT NULL DEFAULT 'PDF',
    periodo TEXT,
    ano INTEGER,
    tamanho TEXT,
    tamanho_bytes BIGINT DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'Vigente',
    kanban_status TEXT NOT NULL DEFAULT 'todo' CHECK (kanban_status IN ('todo', 'in_progress', 'in_review', 'done')),
    tags TEXT[] DEFAULT '{}',
    resumo TEXT,
    destaque BOOLEAN DEFAULT false,
    storage_path TEXT,
    url_publica TEXT,
    versao_atual INTEGER NOT NULL DEFAULT 1,
    checksum_sha256 TEXT,
    criado_por_nome TEXT DEFAULT 'Henrique',
    atualizado_por_nome TEXT DEFAULT 'Henrique',
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. Tabela de Versionamento Seguro de Documentos (Histórico Imutável)
CREATE TABLE IF NOT EXISTS public.document_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    documento_id TEXT NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
    versao INTEGER NOT NULL,
    numero_versao TEXT NOT NULL, -- ex: 'v1.0', 'v1.1', 'v2.0'
    arquivo_nome TEXT NOT NULL,
    storage_path TEXT,
    url_arquivo TEXT,
    tamanho TEXT,
    tamanho_bytes BIGINT DEFAULT 0,
    checksum_sha256 TEXT,
    notas_alteracao TEXT NOT NULL, -- Obrigatório: motivo da versão
    modificado_por_nome TEXT NOT NULL,
    modificado_por_cargo TEXT,
    modificado_por_area TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. Tabela de Tarefas Administrativas (Kanban)
CREATE TABLE IF NOT EXISTS public.kanban_tasks (
    id TEXT PRIMARY KEY DEFAULT ('task-' || substr(md5(random()::text), 1, 8)),
    titulo TEXT NOT NULL,
    descricao TEXT,
    coluna_id TEXT NOT NULL DEFAULT 'todo' CHECK (coluna_id IN ('todo', 'in_progress', 'in_review', 'done')),
    prioridade TEXT NOT NULL DEFAULT 'media' CHECK (prioridade IN ('baixa', 'media', 'alta', 'urgente')),
    responsavel_nome TEXT,
    responsavel_cargo TEXT,
    prazo DATE,
    ordem INTEGER DEFAULT 0,
    criado_por_nome TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. Tabela de Trilha de Auditoria e Segurança (Logs Imutáveis)
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    documento_id TEXT,
    versao_id UUID,
    acao TEXT NOT NULL CHECK (acao IN (
        'visualizacao',
        'download',
        'upload_novo',
        'nova_versao',
        'alteracao_metadados',
        'alteracao_status_kanban',
        'restauracao_versao',
        'exclusao'
    )),
    ator_nome TEXT NOT NULL,
    ator_cargo TEXT,
    ator_area TEXT,
    detalhes JSONB DEFAULT '{}'::jsonb,
    ip_origem TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 7. Índices para Pesquisa Rápida e Performance
CREATE INDEX IF NOT EXISTS idx_documents_categoria ON public.documents(categoria);
CREATE INDEX IF NOT EXISTS idx_documents_kanban ON public.documents(kanban_status);
CREATE INDEX IF NOT EXISTS idx_documents_tags ON public.documents USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_documents_titulo ON public.documents USING GIN(to_tsvector('portuguese', titulo || ' ' || COALESCE(resumo, '')));
CREATE INDEX IF NOT EXISTS idx_versions_doc_id ON public.document_versions(documento_id, versao DESC);
CREATE INDEX IF NOT EXISTS idx_audit_doc_id ON public.audit_logs(documento_id);
CREATE INDEX IF NOT EXISTS idx_audit_acao ON public.audit_logs(acao);
CREATE INDEX IF NOT EXISTS idx_kanban_coluna ON public.kanban_tasks(coluna_id);

-- 8. Trigger para Atualizar atualizado_em Automaticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.atualizado_em = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_documents_updated_at
BEFORE UPDATE ON public.documents
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER trg_actors_updated_at
BEFORE UPDATE ON public.actors
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER trg_kanban_updated_at
BEFORE UPDATE ON public.kanban_tasks
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 9. Trigger para Versionamento Seguro Automático
CREATE OR REPLACE FUNCTION public.handle_document_versioning()
RETURNS TRIGGER AS $$
DECLARE
    v_num TEXT;
BEGIN
    -- Se a versão atual foi incrementada ou é um novo documento
    IF (TG_OP = 'INSERT') THEN
        v_num := 'v' || NEW.versao_atual || '.0';
        INSERT INTO public.document_versions (
            documento_id,
            versao,
            numero_versao,
            arquivo_nome,
            storage_path,
            url_arquivo,
            tamanho,
            tamanho_bytes,
            checksum_sha256,
            notas_alteracao,
            modificado_por_nome,
            modificado_por_cargo
        ) VALUES (
            NEW.id,
            NEW.versao_atual,
            v_num,
            NEW.arquivo_nome,
            NEW.storage_path,
            NEW.url_publica,
            NEW.tamanho,
            NEW.tamanho_bytes,
            NEW.checksum_sha256,
            'Versão inicial registrada no sistema.',
            NEW.criado_por_nome,
            'Responsável pelo Registro'
        );

        -- Log de auditoria do registro
        INSERT INTO public.audit_logs (
            documento_id,
            acao,
            ator_nome,
            ator_cargo,
            detalhes
        ) VALUES (
            NEW.id,
            'upload_novo',
            NEW.criado_por_nome,
            'Responsável pelo Registro',
            jsonb_build_object('titulo', NEW.titulo, 'arquivo', NEW.arquivo_nome, 'versao', v_num)
        );

    ELSIF (TG_OP = 'UPDATE' AND NEW.versao_atual > OLD.versao_atual) THEN
        v_num := 'v' || NEW.versao_atual || '.0';
        INSERT INTO public.document_versions (
            documento_id,
            versao,
            numero_versao,
            arquivo_nome,
            storage_path,
            url_arquivo,
            tamanho,
            tamanho_bytes,
            checksum_sha256,
            notas_alteracao,
            modificado_por_nome,
            modificado_por_cargo
        ) VALUES (
            NEW.id,
            NEW.versao_atual,
            v_num,
            NEW.arquivo_nome,
            COALESCE(NEW.storage_path, OLD.storage_path),
            COALESCE(NEW.url_publica, OLD.url_publica),
            NEW.tamanho,
            NEW.tamanho_bytes,
            NEW.checksum_sha256,
            COALESCE(NEW.resumo, 'Atualização para nova versão.'),
            NEW.atualizado_por_nome,
            'Responsável pela Alteração'
        );

        -- Log de auditoria da nova versão
        INSERT INTO public.audit_logs (
            documento_id,
            acao,
            ator_nome,
            ator_cargo,
            detalhes
        ) VALUES (
            NEW.id,
            'nova_versao',
            NEW.atualizado_por_nome,
            'Responsável pela Alteração',
            jsonb_build_object('versao_anterior', OLD.versao_atual, 'nova_versao', NEW.versao_atual, 'titulo', NEW.titulo)
        );
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_document_versioning
AFTER INSERT OR UPDATE ON public.documents
FOR EACH ROW EXECUTE FUNCTION public.handle_document_versioning();

-- 10. Políticas de Segurança RLS (Row Level Security)
ALTER TABLE public.actors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kanban_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Leitura pública / autenticada para consulta da plataforma
CREATE POLICY "Permitir leitura para todos" ON public.actors FOR SELECT USING (true);
CREATE POLICY "Permitir leitura para todos" ON public.documents FOR SELECT USING (true);
CREATE POLICY "Permitir leitura para todos" ON public.document_versions FOR SELECT USING (true);
CREATE POLICY "Permitir leitura para todos" ON public.kanban_tasks FOR SELECT USING (true);
CREATE POLICY "Permitir leitura para todos" ON public.audit_logs FOR SELECT USING (true);

-- Inserção e atualização permitidas para chave anon/authenticated
CREATE POLICY "Permitir insercao" ON public.actors FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir atualizacao" ON public.actors FOR UPDATE USING (true);

CREATE POLICY "Permitir insercao" ON public.documents FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir atualizacao" ON public.documents FOR UPDATE USING (true);

CREATE POLICY "Permitir insercao" ON public.document_versions FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir insercao" ON public.kanban_tasks FOR INSERT WITH CHECK (true);
CREATE POLICY "Permitir atualizacao" ON public.kanban_tasks FOR UPDATE USING (true);
CREATE POLICY "Permitir exclusao" ON public.kanban_tasks FOR DELETE USING (true);

CREATE POLICY "Permitir insercao" ON public.audit_logs FOR INSERT WITH CHECK (true);

-- ==============================================================================
-- 11. BUCKET DE STORAGE NO SUPABASE:
-- Para habilitar armazenamento de arquivos:
-- 1. Vá em "Storage" > "New Bucket"
-- 2. Nome do bucket: "documentos-delegado"
-- 3. Marque "Public bucket" (ou configure políticas de RLS para download)
-- ==============================================================================
