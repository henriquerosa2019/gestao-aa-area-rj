# Plataforma de Gestão Documental & Administrativa — Delegado AA

Plataforma integrada de alta performance para gestão de documentos oficiais, relatórios financeiros, atas, processos BPMN (AS IS / TO BE), propostas e governança da área de Alcoólicos Anônimos (A.A.).

---

## 🚀 Principais Funcionalidades

1. **Pesquisa Inteligente por Conteúdo**: Localização instantânea de documentos digitando termos parciais (ex: `relatorio financeiro jan/26`, `auditoria pós-csg`, `plano 60/25/15`, `raci`).
2. **Sistema de Versionamento Seguro (v1.0, v1.1, v2.0)**:
   - Registro permanente e imutável de todas as versões do documento.
   - Histórico com linha do tempo, notas/justificativas de alteração, autor e carimbo de data/hora.
   - Cálculo automático de hash de integridade criptográfica **SHA-256** para auditoria.
   - Download de versões anteriores e reversão com 1 clique.
3. **Quadro Kanban Administrativo (Estilo Trello)**:
   - 4 colunas operacionais: *A Fazer*, *Em Andamento*, *Considerações Finais* e *Concluído / Homologado*.
   - Arraste direto de tarefas e documentos entre colunas (*drag & drop*).
4. **Matriz de Permissões RBAC Interativa**:
   - Gestão de atores com funções (Analista de Processos, Delegado de Área RJ, Tesoureiro, Secretaria, etc.).
   - Mapeamento das 35 Áreas de A.A. no Brasil + JUNAAB + Área Online conforme Manual de Serviços.
   - Edição de permissões em tempo real.
5. **Trilha Geral de Auditoria**:
   - Registro cronológico imutável de visualizações, downloads, uploads e movimentações no Kanban.
   - Exportação para CSV e consulta por ator e ação.
6. **Integração com Supabase (PostgreSQL + Storage)**:
   - Persistência em nuvem em tempo real com fallback automático para modo local/offline.

---

## 🛠️ Passo a Passo para Configurar o Supabase

1. Acesse **[supabase.com](https://supabase.com)** e crie um novo projeto gratuito.
2. No menu lateral, acesse **SQL Editor**:
   - Abra o arquivo `supabase_schema.sql` deste repositório, cole no editor e clique em **Run**.
   - Em seguida, abra o arquivo `supabase_seed_data.sql`, cole no editor e clique em **Run** para carregar os 32 documentos iniciais e atores.
3. No menu **Storage** do Supabase:
   - Crie um novo bucket chamado `documentos-delegado` e marque como público.
4. No menu **Project Settings > API**:
   - Copie a **Project URL** e a chave **anon / public key**.
5. Abra a plataforma no navegador, clique no botão superior **⚡ Supabase** e cole as credenciais para ativar a sincronização em nuvem.

---

## 📦 Como Subir para o GitHub

1. Inicialize o repositório Git local e adicione os arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: Plataforma Delegado AA com Supabase, Versionamento e Kanban"
   ```
2. Crie um repositório no seu GitHub (ex: `delegado-aa-gestao`).
3. Conecte o repositório remoto e envie os arquivos:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/delegado-aa-gestao.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ Como Publicar na Vercel

### Opção 1: Direto pelo painel da Vercel (Recomendado)
1. Acesse **[vercel.com](https://vercel.com)** e faça login com seu GitHub.
2. Clique em **Add New... > Project**.
3. Selecione o repositório `delegado-aa-gestao` que acabou de subir.
4. Em **Environment Variables**, adicione (opcionalmente):
   - `SUPABASE_URL` = sua URL do Supabase
   - `SUPABASE_ANON_KEY` = sua anon key
5. Clique em **Deploy**. Sua plataforma estará online instantaneamente com HTTPS gratuito!

### Opção 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📂 Estrutura de Pastas

```
DELEGADO AA/
├── index.html                           # Entrypoint padrão para deploy Vercel/GitHub
├── PLATAFORMA_GESTAO_DELEGADO_AA.html   # Plataforma completa e autocontida
├── documentos_catalogo.js               # Catálogo com 32 documentos indexados
├── supabase_schema.sql                  # DDL de tabelas, versionamento, auditoria e RLS
├── supabase_seed_data.sql               # Povoamento inicial para Supabase
├── vercel.json                          # Configurações de rotas e segurança na Vercel
├── .gitignore                           # Exclusão de arquivos pesados e do sistema
├── .env.example                         # Exemplo de variáveis de ambiente
├── scripts/
│   └── seed_supabase.js                 # Script Node.js para sincronização REST
├── 01 - FINANCEIRO/                     # Demonstrativos, balancetes e auditorias
├── 02 - DOCUMENTOS JUNAAB/              # Atas da Junta, relatórios e circulares
├── 03 - PLANEJAMENTO ESTRATEGICO/       # Planos anuais e diretrizes
├── 04 - MAPEAMENTOS DE PROCESSOS/       # AS IS / TO BE e matrizes BPMN
├── 05 - CONVENCAO/                      # Cadernos de temas e relatórios de comitês
└── 06 - DASHBOARDS E FERRAMENTAS/       # Dashboards analíticos
```

---

## 🔒 Segurança e Privacidade

- **RBAC Integrado**: Controle de acesso por perfil e área de serviço.
- **Trilha de Auditoria Imutável**: Todas as alterações e downloads registram autor, data/hora e justificativa.
- **Hashes Criptográficos SHA-256**: Validação de integridade de arquivos contra alterações indevidas.
