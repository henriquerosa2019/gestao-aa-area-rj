/**
 * Sincronizador Direto para Supabase (Node.js)
 * Permite sincronizar os metadados dos documentos diretamente via API do Supabase.
 * 
 * Uso:
 *   node scripts/seed_supabase.js https://xyz.supabase.co sua-anon-ou-service-key
 * ou definindo as variáveis de ambiente:
 *   SUPABASE_URL=https://xyz.supabase.co SUPABASE_KEY=sua-chave node scripts/seed_supabase.js
 */

const fs = require('fs');
const path = require('path');

const url = process.argv[2] || process.env.SUPABASE_URL;
const key = process.argv[3] || process.env.SUPABASE_KEY;

if (!url || !key) {
  console.log('--- Instruções de Uso ---');
  console.log('Para sincronizar diretamente com o Supabase via script Node.js:');
  console.log('node scripts/seed_supabase.js <SUPABASE_URL> <SUPABASE_KEY>');
  console.log('Ou execute o arquivo SQL gerado no Supabase SQL Editor:');
  console.log('c:\\PROJETOS IA\\DELEGADO AA\\supabase_seed_data.sql');
  process.exit(0);
}

async function run() {
  console.log(`Conectando ao Supabase em: ${url}`);
  
  // Leitura do catálogo
  const catCode = fs.readFileSync(path.join(__dirname, '..', 'documentos_catalogo.js'), 'utf8');
  const fn = new Function(catCode + '; return CATALOGO_DOCUMENTOS;');
  const docs = fn();
  
  console.log(`Carregados ${docs.length} documentos locais para sincronização.`);

  // Inserção via REST API nativa do Supabase (sem precisar de dependências npm externas)
  const endpoint = `${url.replace(/\/$/, '')}/rest/v1/documents`;
  
  const payload = docs.map(d => ({
    id: d.id,
    codigo: d.id,
    titulo: d.titulo,
    arquivo_nome: d.arquivo,
    caminho_relativo: d.caminhoRelativo,
    categoria: d.categoria,
    subcategoria: d.subcategoria,
    tipo: d.tipo,
    periodo: d.periodo,
    ano: d.ano || null,
    tamanho: d.tamanho,
    status: d.status,
    kanban_status: d.destaque ? 'in_progress' : 'todo',
    tags: d.tags || [],
    resumo: d.resumo,
    destaque: !!d.destaque,
    versao_atual: 1,
    criado_por_nome: 'Henrique',
    atualizado_por_nome: 'Henrique'
  }));

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      console.log('✅ Sincronização concluída com sucesso no Supabase!');
    } else {
      const err = await res.text();
      console.error('❌ Erro na resposta do Supabase:', res.status, err);
    }
  } catch (e) {
    console.error('❌ Falha na conexão:', e.message);
  }
}

run();
