/**
 * Catálogo Geral de Documentos Indexados — Delegado de A.A.
 * Indexação completa com metadados, resumos/ementas para busca de conteúdo,
 * links locais e resumos estruturados por tópicos (máx. 1 página).
 */
const CATALOGO_DOCUMENTOS = [
  {
    "id": "doc-fin-001",
    "titulo": "Demonstrativo Financeiro - Janeiro de 2026",
    "arquivo": "01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2026.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos e Balancetes - 2026/01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2026.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos e Balancetes - 2026",
    "tipo": "PDF",
    "periodo": "Janeiro / 2026",
    "ano": 2026,
    "tamanho": "15.2 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "relatorio financeiro jan/26",
      "demonstrativo financeiro janeiro 2026",
      "balancete",
      "entradas",
      "saidas",
      "reserva prudente",
      "saldo bancario",
      "banco do brasil",
      "caixa"
    ],
    "resumo": "Demonstrativo financeiro completo referente a janeiro de 2026 da Área 27. Contém receitas do Plano 60/25/15, vendas de literatura, relatórios anuais, convenção nacional 2027, conciliação de caixa e extrato bancário detalhado.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Demonstrativo contábil mensal oficial da Área 27 referente a janeiro de 2026, com prestação de contas de entradas, saídas e saldos.",
      "topicos": [
        {
          "titulo": "Receitas & Arrecadação",
          "itens": [
            "Arrecadação total do mês atingiu equilíbrio operacional com aportes do Plano 60/25/15.",
            "Vendas de literatura no balcão do Escritório de Serviços Locais (ESL) e 7ª Tradição dos Grupos com repasses regulares."
          ]
        },
        {
          "titulo": "Despesas & Custeio Operacional",
          "itens": [
            "Despesas correntes concentradas em aluguel da sede, folha de pagamento, água, luz e internet.",
            "Aporte programado para as contas de apoio à preparação da Convenção Nacional de 2027."
          ]
        },
        {
          "titulo": "Saldos & Reserva Prudente",
          "itens": [
            "Saldos conciliados integralmente entre extrato do Banco do Brasil e controle de caixa físico.",
            "Reserva prudente preservada dentro dos parâmetros estatutários de segurança financeira."
          ]
        }
      ],
      "destaque": "Superávit operacional no primeiro mês do ano com regularidade dos repasses estatutários ordinários."
    }
  },
  {
    "id": "doc-fin-002",
    "titulo": "Demonstrativo Resumido - Jan 2026",
    "arquivo": "DEMONSTRATIVO JAN 2026.PDF",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos e Balancetes - 2026/DEMONSTRATIVO JAN 2026.PDF",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos e Balancetes - 2026",
    "tipo": "PDF",
    "periodo": "Janeiro / 2026",
    "ano": 2026,
    "tamanho": "215 KB",
    "dataModificacao": "19/06/2026",
    "status": "Vigente",
    "tags": [
      "relatorio financeiro jan/26",
      "demonstrativo jan 2026",
      "resumo executivo",
      "entradas",
      "despesas"
    ],
    "resumo": "Versão executiva compacta do demonstrativo financeiro de janeiro de 2026 para rápida apreciação da mesa de coordenação de área.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Versão executiva compacta do balancete mensal de janeiro de 2026 para rápida apreciação da Mesa de Coordenação de Área.",
      "topicos": [
        {
          "titulo": "Resumo de Entradas",
          "itens": [
            "Consolidação rápida das receitas de literatura e contribuições da 7ª Tradição enviadas pelos distritos.",
            "Visualização sintética dos totais auferidos no período sem desdobramentos operacionais pesados."
          ]
        },
        {
          "titulo": "Resumo de Saídas",
          "itens": [
            "Demonstração sumária dos principais grupos de custos de manutenção e funcionamento da Área.",
            "Conferência ágil de conformidade com o teto de gastos orçado para o início do exercício."
          ]
        },
        {
          "titulo": "Posição Líquida do Mês",
          "itens": [
            "Saldo líquido disponível em conta bancária para suporte às ações dos comitês de serviço.",
            "Validação prévia pela Tesouraria para deliberação na reunião mensal da mesa."
          ]
        }
      ],
      "destaque": "Documento sintético ideal para tomada de decisões rápidas pela coordenação de Área."
    }
  },
  {
    "id": "doc-fin-003",
    "titulo": "Auditoria 2026 pós-CSG (29/04/26) — Delegados SE",
    "arquivo": "Auditoria_2026 pos_CSG_(29-04-26)_Delegados_SE.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Analise e Auditoria/Auditoria_2026 pos_CSG_(29-04-26)_Delegados_SE.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Análise e Auditoria",
    "tipo": "PDF",
    "periodo": "Abril / 2026",
    "ano": 2026,
    "tamanho": "329 KB",
    "dataModificacao": "29/05/2026",
    "status": "Homologado",
    "tags": [
      "auditoria 2026",
      "csg",
      "conferencia de servicos gerais",
      "delegados se",
      "comite de financas",
      "prestacao de contas"
    ],
    "resumo": "Relatório de auditoria pós-CSG elaborado pelos delegados da região Sudeste. Aborda a verificação contábil, controles internos, parecer sobre receitas da literatura e recomendações para a JUNAAB.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Relatório técnico de auditoria pós-CSG elaborado pelos Delegados de Área da Região Sudeste sobre as finanças e estoques da JUNAAB.",
      "topicos": [
        {
          "titulo": "Controles Internos & Balancetes",
          "itens": [
            "Apontamento de fragilidades na conciliação tempestiva de balancetes enviados pela sede aos delegados.",
            "Exigência de notas explicativas mais detalhadas sobre rubricas de custos administrativos centralizados."
          ]
        },
        {
          "titulo": "Literatura & Margens Editoriais",
          "itens": [
            "Análise dos custos gráficos de edição e tiragem de publicações oficiais de A.A. no Brasil.",
            "Verificação da margem líquida e do impacto de gratuidades e doações institucionais no resultado."
          ]
        },
        {
          "titulo": "Recomendações Estatutárias",
          "itens": [
            "Recomendação de auditoria independente com escopo ampliado em estoques e contratos editoriais.",
            "Adoção de prazos rígidos para disponibilização das contas previamente às Conferências de Serviços Gerais."
          ]
        }
      ],
      "destaque": "Alerta aos Delegados sobre a necessidade imperiosa de transparência e padronização contábil nacional."
    }
  },
  {
    "id": "doc-fin-004",
    "titulo": "Análise Financeira JUNAAB (2019-2025) Gráficos",
    "arquivo": "Analise Financeira JUNAAB (2019-2025) Graficos.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Analise e Auditoria/Analise Financeira JUNAAB (2019-2025) Graficos.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Análise e Auditoria",
    "tipo": "PDF",
    "periodo": "Histórico (2019-2025)",
    "ano": 2025,
    "tamanho": "545 KB",
    "dataModificacao": "21/05/2026",
    "status": "Referência",
    "tags": [
      "analise financeira junaab",
      "graficos financeiros",
      "serie historica",
      "deficit",
      "superavit",
      "evolucao financeira"
    ],
    "resumo": "Estudo comparativo gráfico da saúde financeira da JUNAAB entre 2019 e 2025. Demonstra a evolução das receitas com literatura, contribuições da 7ª Tradição e impacto inflacionário nas despesas operacionais.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Estudo comparativo gráfico da saúde financeira da JUNAAB entre 2019 e 2025, evidenciando o comportamento das receitas e despesas.",
      "topicos": [
        {
          "titulo": "Curva de Receitas da Literatura",
          "itens": [
            "Declínio tendencial do volume físico de literatura comercializada ao longo da série histórica.",
            "Impacto direto da redução da margem de literatura no orçamento global de serviços de A.A. Brasil."
          ]
        },
        {
          "titulo": "Comportamento da 7ª Tradição",
          "itens": [
            "Evolução das doações voluntárias em percentual abaixo da inflação acumulada no período analisado.",
            "Persistência de dependência excessiva das finanças nacionais na venda de livros e folhetos."
          ]
        },
        {
          "titulo": "Custo Estrutural & Inflação",
          "itens": [
            "Crescimento das despesas com pessoal, aluguéis, serviços terceirizados e manutenção da sede nacional.",
            "Cruzamento gráfico mostrando o momento em que as despesas ultrapassam as receitas ordinárias."
          ]
        }
      ],
      "destaque": "Constatação gráfica de déficit estrutural que exige revisão urgente do modelo de autossuficiência da JUNAAB."
    }
  },
  {
    "id": "doc-fin-005",
    "titulo": "Demonstrativo Financeiro - Dezembro de 2025",
    "arquivo": "12 - DEMONSTRATIVO FINANCEIRO DEZEMBRO-2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/12 - DEMONSTRATIVO FINANCEIRO DEZEMBRO-2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Dezembro / 2025",
    "ano": 2025,
    "tamanho": "20.6 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro dezembro 2025",
      "fechamento do ano",
      "balanço anual",
      "sacola da gratidao",
      "13o salario"
    ],
    "resumo": "Fechamento anual de 2025. Demonstração de entradas (R$ 26.462,89), saídas (R$ 26.387,07), saldo bancário de fim de ano e prestação da Sacola da Gratidão.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Fechamento anual de 2025 da Área 27 com prestação de contas da Sacola da Gratidão e apuração do resultado acumulado.",
      "topicos": [
        {
          "titulo": "Entradas Finais de 2025",
          "itens": [
            "Total de entradas em dezembro: R$ 26.462,89 provenientes de literatura, distritos e grupos.",
            "Arrecadação expressiva da Sacola da Gratidão destinada integralmente conforme deliberação da assembleia."
          ]
        },
        {
          "titulo": "Despesas & Obrigações de Fim de Ano",
          "itens": [
            "Total de saídas de R$ 26.387,07 com quitação de 13º salário, encargos trabalhistas e fornecedores.",
            "Manutenção regular dos repasses e fechamento de obrigações tributárias do exercício fiscal."
          ]
        },
        {
          "titulo": "Saldo Residual & Reserva",
          "itens": [
            "Superávit contábil no mês de R$ 75,82 garantindo fechamento com saldo bancário positivo.",
            "Reserva prudente mantida intacta e transferida integralmente para o exercício de 2026."
          ]
        }
      ],
      "destaque": "Encerramento do ano de 2025 com contas equilibradas e todas as obrigações trabalhistas e fiscais adimplidas."
    }
  },
  {
    "id": "doc-fin-006",
    "titulo": "Demonstrativo Financeiro - Novembro de 2025",
    "arquivo": "11 - DEMONSTRATIVO FINANCEIRO NOVEMBRO-2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/11 - DEMONSTRATIVO FINANCEIRO NOVEMBRO-2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Novembro / 2025",
    "ano": 2025,
    "tamanho": "33.1 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro novembro 2025",
      "entradas",
      "despesas",
      "folha de pagamento"
    ],
    "resumo": "Prestação de contas de novembro de 2025: receitas de literatura, arrecadações distritais e provisionamento de encargos.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Prestação de contas contábil de novembro de 2025 da Área 27, detalhando receitas de literatura e provisionamento de encargos.",
      "topicos": [
        {
          "titulo": "Receitas Ordinárias do Mês",
          "itens": [
            "Faturamento consistente do balcão de literatura com reposição de títulos mais demandados pelos grupos.",
            "Contribuições distritais pontuais enviadas para composição das receitas de custeio geral."
          ]
        },
        {
          "titulo": "Provisões Trabalhistas",
          "itens": [
            "Provisionamento da primeira parcela do 13º salário e encargos previdenciários dos funcionários da Área.",
            "Planejamento financeiro antecipado para evitar impacto de caixa no mês subsequente."
          ]
        },
        {
          "titulo": "Movimentação Bancária",
          "itens": [
            "Demonstração de conciliação de contas correntes e aplicações financeiras sem desvios.",
            "Relatório aprovado pelos membros do comitê de finanças de Área."
          ]
        }
      ],
      "destaque": "Gestão preventiva com provisionamento antecipado de encargos de fim de ano sem risco à liquidez."
    }
  },
  {
    "id": "doc-fin-007",
    "titulo": "Demonstrativo Financeiro - Outubro de 2025",
    "arquivo": "10 - DEMONSTRATIVO FINANCEIRO OUTUBRO-2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/10 - DEMONSTRATIVO FINANCEIRO OUTUBRO-2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Outubro / 2025",
    "ano": 2025,
    "tamanho": "31.8 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro outubro 2025",
      "balancete",
      "despesas operacionais"
    ],
    "resumo": "Relatório de receitas e despesas de outubro de 2025 com comprovantes bancários anexados.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Relatório de receitas e despesas de outubro de 2025 da Área 27 com comprovantes fiscais e bancários anexados.",
      "topicos": [
        {
          "titulo": "Arrecadação e Repasses",
          "itens": [
            "Receitas obtidas com vendas diretas de literatura aos comitês distritais e grupos de A.A.",
            "Repasses ordinários da 7ª Tradição recebidos e devidamente contabilizados por distrito."
          ]
        },
        {
          "titulo": "Custeio Administrativo",
          "itens": [
            "Despesas operacionais com insumos de escritório, correios, manutenção predial e tarifas bancárias.",
            "Comprovantes de pagamento e notas fiscais validados pela comissão fiscal."
          ]
        },
        {
          "titulo": "Saldos e Disponibilidades",
          "itens": [
            "Estabilidade das contas bancárias com fluxo de caixa ajustado às metas semestrais.",
            "Verificação física de numerário em caixa e correspondência com o livro caixa."
          ]
        }
      ],
      "destaque": "Regularidade documental atestada com 100% dos comprovantes e notas fiscais arquivados."
    }
  },
  {
    "id": "doc-fin-008",
    "titulo": "Demonstrativo Financeiro - Setembro de 2025",
    "arquivo": "09 - DEMONSTRATIVO FINANCEIRO - SETEMBRO 2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/09 - DEMONSTRATIVO FINANCEIRO - SETEMBRO 2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Setembro / 2025",
    "ano": 2025,
    "tamanho": "30.6 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro setembro 2025",
      "seminario nordeste",
      "repasses"
    ],
    "resumo": "Demonstrativo de setembro de 2025 com receitas do Seminário do Nordeste e apuração das contas distritais.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Demonstrativo financeiro de setembro de 2025 com receitas do Seminário Regional do Nordeste e contas distritais.",
      "topicos": [
        {
          "titulo": "Receitas de Eventos Regionais",
          "itens": [
            "Ingressos e contribuições decorrentes da realização do Seminário Regional do Nordeste.",
            "Venda expressiva de materiais temáticos e informativos durante as atividades do evento."
          ]
        },
        {
          "titulo": "Custos do Seminário & Custeio",
          "itens": [
            "Despesas de locação de espaço, material gráfico, hospedagem de preletores e alimentação.",
            "Rateio transparente de custos entre as áreas participantes conforme acordado previamente."
          ]
        },
        {
          "titulo": "Resultado Consolidado",
          "itens": [
            "Saldo positivo gerado pelo evento e incorporado ao fundo de eventos de Área.",
            "Continuidade das rotinas ordinárias de custeio administrativo sem descontinuidade."
          ]
        }
      ],
      "destaque": "Realização bem-sucedida do Seminário do Nordeste com resultado financeiro e espiritual superavitário."
    }
  },
  {
    "id": "doc-fin-009",
    "titulo": "Demonstrativo Financeiro - Agosto de 2025",
    "arquivo": "08 - DEMONSTRATIVO FINANCEIRO - AGOSTO 2025.pdf.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/08 - DEMONSTRATIVO FINANCEIRO - AGOSTO 2025.pdf.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Agosto / 2025",
    "ano": 2025,
    "tamanho": "19.5 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro agosto 2025",
      "seminario do nordeste receitas"
    ],
    "resumo": "Receitas recordes de agosto de 2025 incluindo arrecadações do Seminário do Nordeste (R$ 9.254,50) e convenção.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Demonstrativo financeiro de agosto de 2025 com apuração de receitas recordes decorrentes do Seminário do Nordeste e literatura.",
      "topicos": [
        {
          "titulo": "Recorde de Arrecadação",
          "itens": [
            "Pico de receitas com arrecadação de R$ 9.254,50 especificamente vinculada ao Seminário do Nordeste.",
            "Forte procura por literatura básica e comemorativa nas semanas que antecederam o encontro regional."
          ]
        },
        {
          "titulo": "Alocação de Recursos",
          "itens": [
            "Separação de contas entre custeio geral e fundos específicos carimbados para eventos.",
            "Pagamento rigorosamente em dia de prestadores de serviços gráficos e logísticos."
          ]
        },
        {
          "titulo": "Patrimônio & Contas",
          "itens": [
            "Aumento temporário do ativo circulante decorrente dos fluxos preparatórios do evento.",
            "Controles rígidos de tesouraria com dupla conferência de depósitos bancários."
          ]
        }
      ],
      "destaque": "Maior volume financeiro mensal do 2º semestre gerido com rigor contábil e transparência."
    }
  },
  {
    "id": "doc-fin-010",
    "titulo": "Demonstrativo Financeiro - Julho de 2025",
    "arquivo": "07 - DEMONSTRATIVO FINANCEIRO - JULHO 2025.pdf.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/07 - DEMONSTRATIVO FINANCEIRO - JULHO 2025.pdf.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Julho / 2025",
    "ano": 2025,
    "tamanho": "27.8 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro julho 2025",
      "resgate duplicidade",
      "conciliacao"
    ],
    "resumo": "Demonstrativo contábil de julho de 2025, detalhando movimentação de entradas (R$ 33.220,82) e conciliações bancárias.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Demonstrativo contábil de julho de 2025 com movimentação de R$ 33.220,82 e detalhamento de conciliações bancárias.",
      "topicos": [
        {
          "titulo": "Movimentação Geral de Entradas",
          "itens": [
            "Entradas totais atingindo R$ 33.220,82 somando vendas de balcão e contribuições voluntárias.",
            "Repasse expressivo de distritos em dia com o plano financeiro da Área."
          ]
        },
        {
          "titulo": "Conciliação e Regularizações",
          "itens": [
            "Identificação e estorno de créditos lançados em duplicidade no sistema bancário.",
            "Conciliação analítica assegurando que o saldo refletido represente a exata realidade financeira."
          ]
        },
        {
          "titulo": "Despesas Mensais",
          "itens": [
            "Manutenção do suporte a comitês temáticos (Comitê de Informação ao Público, Instituições, etc.).",
            "Custos de aquisição de novos lotes de literatura junto à JUNAAB."
          ]
        }
      ],
      "destaque": "Correção ágil de lançamentos bancários duplicados demonstrando eficácia nos controles internos."
    }
  },
  {
    "id": "doc-fin-011",
    "titulo": "Demonstrativo Financeiro - Junho de 2025",
    "arquivo": "06 - DEMONSTRATIVO FINANCEIRO - JUNHO 2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/06 - DEMONSTRATIVO FINANCEIRO - JUNHO 2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Junho / 2025",
    "ano": 2025,
    "tamanho": "27.9 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro junho 2025",
      "fechamento semestral"
    ],
    "resumo": "Demonstrativo mensal e encerramento do primeiro semestre de 2025 da Área 27.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Demonstrativo financeiro mensal de junho de 2025 e encerramento do primeiro semestre da Área 27.",
      "topicos": [
        {
          "titulo": "Fechamento Semestral de Receitas",
          "itens": [
            "Consolidação de todas as fontes de renda do semestre (literatura, 7ª tradição, quotas distritais).",
            "Comparativo de arrecadação real contra a previsão orçamentária do período."
          ]
        },
        {
          "titulo": "Fechamento Semestral de Despesas",
          "itens": [
            "Execução dos gastos operacionais em patamar rigorosamente compatível com as deliberações da mesa.",
            "Inexistência de passivos em atraso com fornecedores ou tributos."
          ]
        },
        {
          "titulo": "Indicadores de Liquidez",
          "itens": [
            "Reserva prudente mantida em nível integral correspondente a 3 meses de despesas fixas.",
            "Apresentação das demonstrações contábeis aos delegados e membros da assembleia."
          ]
        }
      ],
      "destaque": "Primeiro semestre concluído com solidez orçamentária e conformidade fiscal plena."
    }
  },
  {
    "id": "doc-fin-012",
    "titulo": "Balancete Oficial - Junho de 2025",
    "arquivo": "BALANCETE JUNHO-2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/BALANCETE JUNHO-2025.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Junho / 2025",
    "ano": 2025,
    "tamanho": "27.9 MB",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "balancete junho 2025",
      "balanco patrimonial semestral",
      "auditoria"
    ],
    "resumo": "Balancete detalhado com apuração de receitas, despesas administrativas e reserva prudente.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Balancete oficial semestral detalhado de junho de 2025 com apuração de receitas, despesas e reserva prudente.",
      "topicos": [
        {
          "titulo": "Ativo & Disponibilidades",
          "itens": [
            "Discriminação detalhada de caixas, contas bancárias no Banco do Brasil e aplicações financeiras.",
            "Inventário físico e valorizado dos estoques de livros, folhetos e medalhas no ESL."
          ]
        },
        {
          "titulo": "Passivo & Obrigações",
          "itens": [
            "Registro das provisões para despesas vincendas e recolhimentos fiscais devidos.",
            "Ausência de débitos bancários ou dívidas contratuais de qualquer natureza."
          ]
        },
        {
          "titulo": "Demonstração do Superávit",
          "itens": [
            "Cálculo do resultado líquido do semestre destinado aos fundos estatutários da Área.",
            "Parecer técnico atestando a regularidade formal de todas as demonstrações."
          ]
        }
      ],
      "destaque": "Instrumento contábil formal de auditoria à disposição de qualquer membro de A.A."
    }
  },
  {
    "id": "doc-fin-013",
    "titulo": "Demonstrativos Mensais 2025 — Jan a Maio",
    "arquivo": "01 a 05 - DEMONSTRATIVOS FINANCEIROS 2025.pdf",
    "caminhoRelativo": "01 - FINANCEIRO/Demonstrativos Mensais - 2025/01 - DEMONSTRATIVO FINANCEIRO JANEIRO DE 2025.pdf.pdf",
    "categoria": "01 - FINANCEIRO",
    "subcategoria": "Demonstrativos Mensais - 2025",
    "tipo": "PDF",
    "periodo": "Jan-Maio / 2025",
    "ano": 2025,
    "tamanho": "25 MB+",
    "dataModificacao": "19/06/2026",
    "status": "Homologado",
    "tags": [
      "demonstrativo financeiro janeiro 2025",
      "fevereiro 2025",
      "marco 2025",
      "abril 2025",
      "maio 2025"
    ],
    "resumo": "Série histórica completa dos demonstrativos de janeiro, fevereiro, março, abril e maio de 2025 com comprovantes bancários e notas fiscais.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Série histórica completa dos demonstrativos de janeiro a maio de 2025 com comprovantes bancários e notas fiscais.",
      "topicos": [
        {
          "titulo": "Série Histórica Consolidada",
          "itens": [
            "Compilado de 5 meses consecutivos com a evolução financeira e contábil da Área 27.",
            "Trajetória de entradas e saídas demonstrando a sazonalidade da arrecadação no início de ano."
          ]
        },
        {
          "titulo": "Acervo Comprobatório Anexo",
          "itens": [
            "Digitalização completa de notas fiscais, faturas e comprovantes de transferência de cada mês.",
            "Transparência absoluta para consulta de conselhos fiscais e delegados."
          ]
        },
        {
          "titulo": "Conformidade e Arquivo",
          "itens": [
            "Documento permanente de arquivo histórico para prestação de contas governamentais e estatutárias.",
            "Manutenção de registros que embasam os relatórios de gestão do Delegado."
          ]
        }
      ],
      "destaque": "Arquivo histórico indispensável para acompanhamento da evolução fiscal e patrimonial da Área."
    }
  },
  {
    "id": "doc-jun-001",
    "titulo": "Relatório de Contestação — JUNAAB",
    "arquivo": "RELATÓRIO CONTESTACAO_JUNAAB.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/RELATÓRIO CONTESTACAO_JUNAAB.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Pareceres e Contestações",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "235 KB",
    "dataModificacao": "23/05/2026",
    "status": "Vigente",
    "tags": [
      "relatorio contestacao junaab",
      "parecer delegado",
      "impugnacao",
      "analise contabil",
      "regime de competencia",
      "regime de caixa"
    ],
    "resumo": "Relatório fundamentado de contestação apresentado pelo Delegado de Área à JUNAAB. Trata das discrepâncias entre os demonstrativos enviados e a realidade contábil, alertando sobre distorções entre regime de competência e regime de caixa.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Relatório fundamentado de contestação e parecer técnico apresentado pelo Delegado de Área à JUNAAB sobre distorções contábeis.",
      "topicos": [
        {
          "titulo": "Incompatibilidade de Regimes Contábeis",
          "itens": [
            "Alerta enfático sobre os perigos da mistura entre regime de competência e regime de caixa nos relatórios nacionais.",
            "Distorções que geram falsa impressão de liquidez e mascaram o déficit operacional real de A.A. Brasil."
          ]
        },
        {
          "titulo": "Conformidade com a ITG 2002 / CFC",
          "itens": [
            "Exigência de cumprimento estrito das Normas Brasileiras de Contabilidade para entidades sem fins lucrativos.",
            "Demonstração do dever fiduciário dos Custódios na proteção do patrimônio moral e financeiro da Irmandade."
          ]
        },
        {
          "titulo": "Reivindicações & Encaminhamentos",
          "itens": [
            "Publicação de demonstrações contábeis auditadas e unificadas antes das reuniões de delegados.",
            "Instituição de comitê de transição para reestruturação do modelo de governança da JUNAAB."
          ]
        }
      ],
      "destaque": "Peça técnica histórica de cobrança e defesa da transparência nas finanças nacionais de A.A."
    }
  },
  {
    "id": "doc-jun-002",
    "titulo": "Anexo — Análise Financeira JUNAAB",
    "arquivo": "ANEXO_ANALISE_FINANCEIRA_JUNAAB.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/ANEXO_ANALISE_FINANCEIRA_JUNAAB.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Pareceres e Contestações",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "300 KB",
    "dataModificacao": "23/05/2026",
    "status": "Vigente",
    "tags": [
      "anexo analise financeira junaab",
      "tabelas contabeis",
      "demonstracao de resultados",
      "custos operacionais"
    ],
    "resumo": "Anexo técnico com planilhas, memórias de cálculo e auditoria dos balancetes JUNAAB que instruem o relatório de contestação do Delegado.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Anexo técnico com memórias de cálculo, planilhas e auditoria analítica dos balancetes JUNAAB que embasam a contestação.",
      "topicos": [
        {
          "titulo": "Memórias de Cálculo Analíticas",
          "itens": [
            "Abertura minuciosa das contas de receitas de literatura confrontadas com custos industriais gráficos.",
            "Planilhas comprovando a perda de margem operacional nas publicações nos últimos exercícios."
          ]
        },
        {
          "titulo": "Custos Fixos da Sede Nacional",
          "itens": [
            "Mapeamento das linhas de despesa do Escritório de Serviços Gerais (ESG) e peso percentual sobre a receita total.",
            "Identificação de despesas administrativas desproporcionais ao faturamento atual da entidade."
          ]
        },
        {
          "titulo": "Projeções de Esgotamento de Caixa",
          "itens": [
            "Simulação matemática demonstrando o prazo crítico de esgotamento da reserva prudente nacional.",
            "Dados concretos que desarmam narrativas de equilíbrio sustentável no modelo vigente."
          ]
        }
      ],
      "destaque": "Comprovação matemática irrefutável dos desvios apontados na contestação formal do Delegado."
    }
  },
  {
    "id": "doc-jun-003",
    "titulo": "Mapa Mental — Parecer JUNAAB",
    "arquivo": "Mapa Mental Parecer JUNAAB.png",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Pareceres e Contestacoes/Mapa Mental Parecer JUNAAB.png",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Pareceres e Contestações",
    "tipo": "IMAGEM",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "2.3 MB",
    "dataModificacao": "21/05/2026",
    "status": "Referência",
    "tags": [
      "mapa mental",
      "parecer junaab",
      "diagrama sintetico",
      "arvore de decisoes"
    ],
    "resumo": "Diagrama visual sinóptico estruturando todos os argumentos jurídicos, estatutários e financeiros do Parecer JUNAAB.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Diagrama visual sinóptico estruturando todos os argumentos jurídicos, estatutários e financeiros do Parecer do Delegado à JUNAAB.",
      "topicos": [
        {
          "titulo": "Estrutura dos Fundamentos",
          "itens": [
            "Hierarquia visual integrando Doze Passos, Doze Tradições e Doze Conceitos para o Serviço Mundial.",
            "Conexão direta entre os princípios espirituais de A.A. e as obrigações legais da diretoria estatutária."
          ]
        },
        {
          "titulo": "Pilares de Argumentação",
          "itens": [
            "Eixo Contábil: Obrigatoriedade da ITG 2002 e separação de competência e caixa.",
            "Eixo de Governança: Soberania da Conferência de Serviços Gerais e limites dos poderes da Junta de Custódios."
          ]
        },
        {
          "titulo": "Mapa de Ação dos Delegados",
          "itens": [
            "Árvore de decisões estratégicas para articulação regional entre as Áreas do Brasil.",
            "Propostas articuladas para apresentação nas comissões e no plenário da próxima CSG."
          ]
        }
      ],
      "destaque": "Síntese visual excelente para rápido alinhamento de lideranças e consulta estratégica em plenária."
    }
  },
  {
    "id": "doc-jun-004",
    "titulo": "Ata da 5ª Reunião Extraordinária da Junta de Custódios",
    "arquivo": "Ata 5ª Reunião Extraordinária da Junta - junho 202_260523_103001.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Atas e Reunioes/Ata 5ª Reunião Extraordinária da Junta - junho 202_260523_103001.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Atas e Reuniões",
    "tipo": "PDF",
    "periodo": "Junho / 2024-2026",
    "ano": 2026,
    "tamanho": "642 KB",
    "dataModificacao": "23/05/2026",
    "status": "Homologado",
    "tags": [
      "ata reuniao extraordinaria",
      "junta de custodios",
      "deliberacoes",
      "pauta administrativa"
    ],
    "resumo": "Ata oficial da 5ª Reunião Extraordinária da Junta de Custódios de A.A. Brasil. Registra deliberações sobre a gestão financeira, contratos editoriais e comunicação com os delegados de área.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Ata oficial da 5ª Reunião Extraordinária da Junta de Custódios de A.A. Brasil, registrando deliberações sobre gestão e contratos.",
      "topicos": [
        {
          "titulo": "Pauta Administrativa e Contratual",
          "itens": [
            "Deliberações acerca de contratos de impressão gráfica, compra de papel e logística de distribuição de literatura.",
            "Apreciação de pareceres jurídicos sobre contratos de prestação de serviços no escritório nacional."
          ]
        },
        {
          "titulo": "Comunicação com Delegados de Área",
          "itens": [
            "Definição dos termos de resposta institucional às correspondências e questionamentos enviados pelas Áreas.",
            "Orientações da diretoria sobre o fluxo oficial de informações e pautas das conferências regionais."
          ]
        },
        {
          "titulo": "Votações e Prazos Homologados",
          "itens": [
            "Registro das votações nominais dos custódios e deliberações homologadas por maioria.",
            "Fixação de prazos para entrega dos relatórios orçamentários finais comitês da Junta."
          ]
        }
      ],
      "destaque": "Registro oficial de grande relevância institucional para acompanhamento dos compromissos da Junta."
    }
  },
  {
    "id": "doc-jun-005",
    "titulo": "Relatório do Comitê de Finanças — Junta de Custódios",
    "arquivo": "5 - Relatório do Comitê de Finanças - Junta de Cus_260523_103054.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Atas e Reunioes/5 - Relatório do Comitê de Finanças - Junta de Cus_260523_103054.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Atas e Reuniões",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "184 KB",
    "dataModificacao": "23/05/2026",
    "status": "Homologado",
    "tags": [
      "relatorio comite de financas",
      "junta de custodios",
      "parecer financeiro",
      "orcamento anual"
    ],
    "resumo": "Parecer do Comitê de Finanças da Junta avaliando a execução orçamentária do exercício, fluxo de caixa e recomendações de contingenciamento.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Parecer do Comitê de Finanças da Junta de Custódios avaliando a execução orçamentária do exercício e fluxo de caixa.",
      "topicos": [
        {
          "titulo": "Execução Orçamentária Geral",
          "itens": [
            "Balanço das dotações executadas frente ao orçamento aprovado para o ano fiscal da JUNAAB.",
            "Análise das áreas que apresentaram estouro de despesas e daquelas com contingenciamento."
          ]
        },
        {
          "titulo": "Situação do Fluxo de Caixa",
          "itens": [
            "Diagnóstico de aperto na liquidez imediata e necessidade de reescalonamento de pagamentos.",
            "Recomendação de contingenciamento rigoroso em despesas com viagens e eventos corporativos."
          ]
        },
        {
          "titulo": "Recomendações para a CSG",
          "itens": [
            "Proposta de atualização dos preços de capa da literatura para recomposição de perdas inflacionárias.",
            "Campanhas de conscientização nacional para fortalecimento dos repasses da 7ª Tradição."
          ]
        }
      ],
      "destaque": "Reconhecimento oficial dos desafios de liquidez nacional por parte do próprio comitê interno da Junta."
    }
  },
  {
    "id": "doc-jun-006",
    "titulo": "Circular 04-2026 (30/05/2026)",
    "arquivo": "Circular 04-2026 - 30.05.2026_pagenumber.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Circulares/Circular 04-2026 - 30.05.2026_pagenumber.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Circulares",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "8.5 MB",
    "dataModificacao": "19/06/2026",
    "status": "Vigente",
    "tags": [
      "circular 04-2026",
      "comunicado oficial junaab",
      "orientacoes aos grupos",
      "diretrizes nacionais"
    ],
    "resumo": "Circular oficial nº 04/2026 enviada pela JUNAAB a todas as Áreas de A.A. do Brasil com diretrizes sobre encontros estruturais, prestação de contas e temas da próxima CSG.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Circular oficial nº 04/2026 da JUNAAB enviada a todas as Áreas com diretrizes para encontros estruturais e prestação de contas.",
      "topicos": [
        {
          "titulo": "Diretrizes para Encontros Regionais",
          "itens": [
            "Calendário oficial e padronização dos fóruns regionais de serviços gerais em todo o território nacional.",
            "Temas prioritários sugeridos para debate preparatório com foco na próxima Conferência."
          ]
        },
        {
          "titulo": "Prestação de Contas e Prazos",
          "itens": [
            "Fixação de datas-limite para envio das contribuições das Áreas e prestação de contas dos comitês.",
            "Instruções padronizadas para remessa de formulários e comprovantes bancários à tesouraria da JUNAAB."
          ]
        },
        {
          "titulo": "Orientações aos Grupos e Distritos",
          "itens": [
            "Reafirmação dos canais oficiais de compra de literatura e combate à circulação de cópias não autorizadas.",
            "Orientações de proteção à marca e ao legado de A.A. no ambiente digital."
          ]
        }
      ],
      "destaque": "Documento de observância obrigatória para cumprimento do cronograma de serviços gerais de 2026."
    }
  },
  {
    "id": "doc-jun-007",
    "titulo": "Junta de Custódios — Auditoria — Reunião 05/05",
    "arquivo": "1 - JUNTA DE CUSTÓDIOS - AUDITORIA - REUNIÃO 05052_260523_102837.pdf",
    "caminhoRelativo": "02 - DOCUMENTOS JUNAAB/Atas e Reunioes/1 - JUNTA DE CUSTÓDIOS - AUDITORIA - REUNIÃO 05052_260523_102837.pdf",
    "categoria": "02 - DOCUMENTOS JUNAAB",
    "subcategoria": "Atas e Reuniões",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "638 KB",
    "dataModificacao": "23/05/2026",
    "status": "Homologado",
    "tags": [
      "auditoria junta de custodios",
      "reuniao maio",
      "relatorio de auditoria independente"
    ],
    "resumo": "Apresentação e ata da reunião com os auditores independentes acerca do balanço patrimonial e apontamentos contábeis da JUNAAB.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Ata e apresentação da reunião da Junta de Custódios com a empresa de auditoria independente sobre o balanço patrimonial.",
      "topicos": [
        {
          "titulo": "Achados da Auditoria Independente",
          "itens": [
            "Apresentação formal do relatório com ressalvas e pontos de atenção identificados pelos auditores externos.",
            "Apontamentos sobre controle patrimonial, inventário de estoques e conciliações bancárias pendentes."
          ]
        },
        {
          "titulo": "Recomendações Técnicas de Governança",
          "itens": [
            "Necessidade de modernização do software contábil (ERP) e segregação de funções no ESG.",
            "Adoção de comitê de auditoria permanente independente da diretoria executiva estatutária."
          ]
        },
        {
          "titulo": "Plano de Ajustes e Respostas",
          "itens": [
            "Compromisso formal da diretoria de apresentar plano de ação corretivo com cronograma definido.",
            "Submissão do relatório completo para conhecimento e deliberação da Conferência de Serviços Gerais."
          ]
        }
      ],
      "destaque": "Base documental indispensável para fiscalização e cobrança nas comissões de finanças da Conferência."
    }
  },
  {
    "id": "doc-est-001",
    "titulo": "Proposta de Planejamento Estratégico JUNAAB",
    "arquivo": "PROPOSTA DE PLANEJAMENTO ESTRATÉGICO JUNAAB.pdf",
    "caminhoRelativo": "03 - PLANEJAMENTO ESTRATEGICO/Proposta Estrategica JUNAAB/PROPOSTA DE PLANEJAMENTO ESTRATÉGICO JUNAAB.pdf",
    "categoria": "03 - PLANEJAMENTO ESTRATEGICO",
    "subcategoria": "Proposta Estratégica JUNAAB",
    "tipo": "PDF",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "548 KB",
    "dataModificacao": "21/05/2026",
    "status": "Em Análise",
    "tags": [
      "planejamento estrategico junaab",
      "proposta estrategica",
      "metas e diretrizes",
      "missao visao valores",
      "modernizacao"
    ],
    "resumo": "Documento oficial contendo a proposta de Planejamento Estratégico da JUNAAB. Estabelece metas de autossuficiência, ampliação do alcance da mensagem de A.A., sustentabilidade das publicações e transformação digital.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Proposta oficial de Planejamento Estratégico da JUNAAB para modernização, sustentabilidade e alcance da mensagem de A.A.",
      "topicos": [
        {
          "titulo": "Pilares Estratégicos Nacionais",
          "itens": [
            "Autossuficiência financeira através da valorização da 7ª Tradição e sustentabilidade editorial.",
            "Ampliação do alcance da mensagem aos alcoólicos que ainda sofrem, com foco em jovens e grupos minoritários."
          ]
        },
        {
          "titulo": "Metas & Transformação Digital",
          "itens": [
            "Implementação de processos digitais ágeis na distribuição de literatura e comunicação institucional.",
            "Integração das plataformas de reuniões virtuais à estrutura de serviços gerais da Irmandade."
          ]
        },
        {
          "titulo": "Governança e Indicadores de Sucesso",
          "itens": [
            "Adoção de indicadores claros de desempenho operacional (KPIs) para o ESG e comitês da Junta.",
            "Relatórios periódicos de progresso acessíveis a todos os Delegados em plataforma integrada."
          ]
        }
      ],
      "destaque": "Visão estruturante que concilia o legado dos Doze Passos com a eficiência da gestão contemporânea."
    }
  },
  {
    "id": "doc-est-002",
    "titulo": "Estruturação de Áreas Online de A.A. no Brasil",
    "arquivo": "Estruturacao de Areas Online de A.A. no Brasil 1.pptx",
    "caminhoRelativo": "03 - PLANEJAMENTO ESTRATEGICO/Estruturacao Areas Online AA/Estruturacao de Areas Online de A.A. no Brasil 1.pptx",
    "categoria": "03 - PLANEJAMENTO ESTRATEGICO",
    "subcategoria": "Estruturação Áreas Online AA",
    "tipo": "PPTX",
    "periodo": "Maio / 2026",
    "ano": 2026,
    "tamanho": "1.9 MB",
    "dataModificacao": "24/05/2026",
    "status": "Em Análise",
    "tags": [
      "areas online",
      "grupos digitais",
      "reunioes virtuais",
      "apresentacao estruturacao",
      "7a tradicao online"
    ],
    "resumo": "Apresentação executiva em slides sobre o modelo de integração e representatividade de reuniões e distritos virtuais na estrutura de serviços gerais de A.A. no Brasil.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Apresentação executiva em slides sobre o modelo de integração e representatividade das reuniões e distritos virtuais em A.A. Brasil.",
      "topicos": [
        {
          "titulo": "O Desafio da Representatividade Virtual",
          "itens": [
            "Crescimento exponencial de grupos e membros recuperados exclusivamente por plataformas online.",
            "Lacuna estatutária atual: ausência de representação formal e voz com direito a voto na CSG."
          ]
        },
        {
          "titulo": "Proposta de Criação da Área Online (Área 36)",
          "itens": [
            "Estruturação de distritos virtuais por fusos horários ou temas de interesse, com Delegado próprio.",
            "Mecanismos seguros de arrecadação da 7ª Tradição por PIX e repasses automatizados à JUNAAB."
          ]
        },
        {
          "titulo": "Ganhos para a Irmandade",
          "itens": [
            "Inclusão democrática de membros sem acesso a grupos presenciais por questões de saúde, distância ou horários.",
            "Fortalecimento financeiro e espiritual da estrutura de serviços gerais de A.A. no Brasil."
          ]
        }
      ],
      "destaque": "Proposta pioneira e necessária para o acolhimento formal do movimento virtual na governança nacional."
    }
  },
  {
    "id": "doc-proc-001",
    "titulo": "Matriz RACI — Estrutura de Serviços Gerais de A.A. Brasil",
    "arquivo": "matriz_raci_aa_brasil.html",
    "caminhoRelativo": "04 - MAPEAMENTOS DE PROCESSOS/AS IS/matriz_raci_aa_brasil.html",
    "categoria": "04 - MAPEAMENTOS DE PROCESSOS",
    "subcategoria": "AS IS (Situação Atual)",
    "tipo": "HTML",
    "periodo": "Referência Permanente",
    "ano": 2026,
    "tamanho": "11.6 KB",
    "dataModificacao": "21/05/2026",
    "status": "Vigente",
    "tags": [
      "matriz raci",
      "papeis e responsabilidades",
      "governanca",
      "delegado",
      "custodios",
      "csg",
      "conselho fiscal",
      "esg"
    ],
    "resumo": "Matriz interativa definindo papéis e responsabilidades (Responsible, Accountable, Consulted, Informed) para todas as 25 ações críticas de governança, finanças e deliberação estatutária.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Matriz RACI interativa estabelecendo papéis e responsabilidades para 25 processos críticos de governança em A.A. Brasil.",
      "topicos": [
        {
          "titulo": "Metodologia RACI Aplicada",
          "itens": [
            "Definição transparente de R (Executa), A (Aprova/Responsável Final), C (Consultado) e I (Informado).",
            "Aplicação rigorosa aos processos estatutários, financeiros, editoriais e de eventos da estrutura."
          ]
        },
        {
          "titulo": "Instâncias & Autoridades Mapeadas",
          "itens": [
            "Mapeamento detalhado dos papéis dos Delegados de Área, Junta de Custódios, Conselho Fiscal e Plenária da CSG.",
            "Consagração de que a Conferência é a autoridade fiduciária máxima do movimento conforme o Conceito II."
          ]
        },
        {
          "titulo": "Eliminação de Conflitos e Gargalos",
          "itens": [
            "Resolução definitiva de sobreposições de atribuições entre a diretoria da JUNAAB e os delegados.",
            "Segurança jurídica e operacional para a tomada de decisões em momentos de crise institucional."
          ]
        }
      ],
      "destaque": "Instrumento definitivo de governança para assegurar clareza e respeito aos Doze Conceitos para o Serviço Mundial."
    }
  },
  {
    "id": "doc-proc-002",
    "titulo": "Macroprocesso AS IS — JUNAAB",
    "arquivo": "MACRO PROCESSO AS IS JUNAAB.html",
    "caminhoRelativo": "04 - MAPEAMENTOS DE PROCESSOS/AS IS/MACRO PROCESSO AS IS JUNAAB.html",
    "categoria": "04 - MAPEAMENTOS DE PROCESSOS",
    "subcategoria": "AS IS (Situação Atual)",
    "tipo": "HTML",
    "periodo": "Referência Permanente",
    "ano": 2026,
    "tamanho": "52 KB",
    "dataModificacao": "21/05/2026",
    "status": "Vigente",
    "tags": [
      "macroprocesso as is",
      "fluxo atual",
      "bpmn",
      "mapeamento de processos junaab"
    ],
    "resumo": "Mapeamento completo do fluxo de processos atual (AS IS) da JUNAAB e escritórios de área, identificando gargalos burocráticos e duplicidades de esforço.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Mapeamento completo do macroprocesso atual (AS IS) da JUNAAB e escritórios de área, revelando gargalos burocráticos.",
      "topicos": [
        {
          "titulo": "Fluxo Atual de Pedidos de Literatura",
          "itens": [
            "Etapas manuais excessivas desde o pedido inicial do grupo até a confirmação e envio pelo ESG.",
            "Uso de planilhas desconectadas e trocas de e-mails gerando morosidade no faturamento e expedição."
          ]
        },
        {
          "titulo": "Gargalos de Comunicação e Repasses",
          "itens": [
            "Dificuldade de rastreamento das contribuições da 7ª Tradição enviadas pelas contas bancárias distritais.",
            "Demora na emissão de recibos e prestação de contas aos grupos locais de A.A."
          ]
        },
        {
          "titulo": "Diagnóstico de Sobrecarga e Custos",
          "itens": [
            "Sobrecarga de trabalho operacional nos funcionários administrativos em tarefas repetitivas.",
            "Elevado custo de manutenção de processos obsoletos que poderiam ser automatizados com segurança."
          ]
        }
      ],
      "destaque": "Diagnóstico claro e documentado que justifica a transição urgente para a arquitetura de processos TO BE."
    }
  },
  {
    "id": "doc-proc-003",
    "titulo": "Macroprocesso TO BE — JUNAAB (Proposta Otimizada)",
    "arquivo": "MACRO PROCESSO TO BE JUNAAB.html",
    "caminhoRelativo": "04 - MAPEAMENTOS DE PROCESSOS/TO BE/MACRO PROCESSO TO BE JUNAAB.html",
    "categoria": "04 - MAPEAMENTOS DE PROCESSOS",
    "subcategoria": "TO BE (Proposta Futura)",
    "tipo": "HTML",
    "periodo": "Proposta",
    "ano": 2026,
    "tamanho": "60 KB",
    "dataModificacao": "21/05/2026",
    "status": "Em Análise",
    "tags": [
      "macroprocesso to be",
      "modelo futuro",
      "otimizacao de processos",
      "gestao moderna"
    ],
    "resumo": "Arquitetura de processos futura proposta (TO BE) para modernização da JUNAAB com gestão orientada a valor, fluxos ágeis de aprovação e transparência orçamentária.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Arquitetura futura proposta (TO BE) para modernização da JUNAAB com gestão ágil, automação e transparência orçamentária.",
      "topicos": [
        {
          "titulo": "Plataforma Digital Unificada",
          "itens": [
            "Portal integrado para pedidos online de literatura com conciliação automática via PIX e cartão.",
            "Rastreamento em tempo real do status de expedição e entrega dos livros aos escritórios locais."
          ]
        },
        {
          "titulo": "Transparência Financeira em Tempo Real",
          "itens": [
            "Painel analítico permitindo aos Delegados de Área acompanhar entradas da 7ª Tradição instantaneamente.",
            "Automatização das conciliações bancárias com integração direta aos sistemas do Banco do Brasil."
          ]
        },
        {
          "titulo": "Ganhos Operacionais e Redução de Ciclo",
          "itens": [
            "Redução estimada em mais de 60% no tempo de processamento de pedidos de literatura.",
            "Liberação da equipe do ESG para foco em apoio institucional e expansão dos serviços de acolhimento."
          ]
        }
      ],
      "destaque": "Modelo futuro otimizado que moderniza a operação mantendo intactos os princípios espirituais da Irmandade."
    }
  },
  {
    "id": "doc-proc-004",
    "titulo": "Manual de Serviço de A.A. — Referência Estatutária",
    "arquivo": "Manual de Serviço de A.A -.pdf",
    "caminhoRelativo": "04 - MAPEAMENTOS DE PROCESSOS/AS IS/Manual de Serviço de A.A -.pdf",
    "categoria": "04 - MAPEAMENTOS DE PROCESSOS",
    "subcategoria": "AS IS (Situação Atual)",
    "tipo": "PDF",
    "periodo": "Estatutário",
    "ano": 2026,
    "tamanho": "1.2 MB",
    "dataModificacao": "21/05/2026",
    "status": "Referência",
    "tags": [
      "manual de servico",
      "estatuto junaab",
      "12 conceitos",
      "12 tradicoes",
      "deveres do delegado"
    ],
    "resumo": "Manual oficial de Serviços Gerais contendo os Doze Passos, Doze Tradições, Doze Conceitos para o Serviço Mundial e regulamentação das funções dos Delegados de Área.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Manual oficial de Serviços Gerais contendo Doze Passos, Tradições, Conceitos e regulamentação das funções de liderança.",
      "topicos": [
        {
          "titulo": "Estrutura da Conferência de Serviços Gerais",
          "itens": [
            "Composição da Conferência, processo de escolha de delegados de área e dinâmica dos comitês permanentes.",
            "Soberania da Conferência como a guardiã da consciência nacional da Irmandade de A.A."
          ]
        },
        {
          "titulo": "Atribuições e Deveres do Delegado",
          "itens": [
            "O Delegado como canal vital de comunicação bidirecional entre os grupos da Área e a Conferência.",
            "Dever inegociável de prestar contas de todas as deliberações e defender a unidade do movimento."
          ]
        },
        {
          "titulo": "Doze Conceitos para o Serviço Mundial",
          "itens": [
            "Princípios de delegação de autoridade com responsabilidade fiduciária, direito de decisão e direito de apelação.",
            "Garantias estatutárias que protegem as minorias e impedem a concentração autocrática de poder."
          ]
        }
      ],
      "destaque": "A carta magna de governança de Alcoólicos Anônimos e guia obrigatório para todo servidor de Área."
    }
  },
  {
    "id": "doc-cnv-001",
    "titulo": "Prestação de Contas — Vendas de Camisas Convenção 2027",
    "arquivo": "pix_camisas_convencao.csv",
    "caminhoRelativo": "05 - CONVENCAO/Comprovantes de Saques/pix_camisas_convencao.csv",
    "categoria": "05 - CONVENCAO",
    "subcategoria": "Comprovantes de Saques",
    "tipo": "CSV",
    "periodo": "Junho / 2026",
    "ano": 2026,
    "tamanho": "2.5 KB",
    "dataModificacao": "21/06/2026",
    "status": "Vigente",
    "tags": [
      "pix camisas convencao",
      "convencao 2027",
      "comprovantes pix",
      "vendas de camisas",
      "planilha financeira"
    ],
    "resumo": "Planilha em CSV com o registro de todos os pagamentos via PIX para aquisição de camisas promocionais da Convenção Nacional de 2027.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Planilha em CSV com a prestação de contas analítica de pagamentos via PIX para aquisição de camisas da Convenção 2027.",
      "topicos": [
        {
          "titulo": "Registro de Recebimentos por PIX",
          "itens": [
            "Detalhamento nominal de cada transação recebida, com chave PIX, data, valor e identificação do comprador.",
            "Controle rigoroso das encomendas de camisas por tamanho (P, M, G, GG, XG) e por distrito de Área."
          ]
        },
        {
          "titulo": "Custos de Produção e Malharia",
          "itens": [
            "Registro das notas fiscais emitidas pelo fabricante e valor unitário de custo acordado.",
            "Transparência absoluta sobre os custos de frete e embalagem dos lotes encomendados."
          ]
        },
        {
          "titulo": "Resultado Líquido para a Convenção",
          "itens": [
            "Margem líquida apurada transferida integralmente para a conta poupança preparatória da Convenção Nacional de 2027.",
            "Ausência total de desvios com conferência centavo por centavo pela tesouraria de eventos."
          ]
        }
      ],
      "destaque": "Exemplo prático de transparência financeira em projetos comemorativos e preparatórios de A.A."
    }
  },
  {
    "id": "doc-cnv-002",
    "titulo": "Comprovantes e Recibos WhatsApp — Convenção",
    "arquivo": "WhatsApp Unknown 2026-06-19 at 16.48.08.zip",
    "caminhoRelativo": "05 - CONVENCAO/Comprovantes de Saques/WhatsApp Unknown 2026-06-19 at 16.48.08.zip",
    "categoria": "05 - CONVENCAO",
    "subcategoria": "Comprovantes de Saques",
    "tipo": "ZIP",
    "periodo": "Junho / 2026",
    "ano": 2026,
    "tamanho": "505 KB",
    "dataModificacao": "19/06/2026",
    "status": "Vigente",
    "tags": [
      "recibos convencao",
      "comprovantes bancarios whatsapp",
      "saques poupanca",
      "arquivos zip"
    ],
    "resumo": "Pacote contendo comprovantes digitais de transferências, recibos e extratos de saques da conta poupança para custeio operacional da Convenção.",
    "destaque": false,
    "resumoTopicos": {
      "objetivo": "Dossiê digital compactado contendo recibos, extratos e comprovantes bancários das operações da Convenção.",
      "topicos": [
        {
          "titulo": "Comprovantes de Saques e Aplicações",
          "itens": [
            "Comprovantes oficiais dos saques efetuados da conta poupança para custeio de adiantamentos de fornecedores.",
            "Extratos bancários mensais anexados evidenciando a integridade das reservas do evento."
          ]
        },
        {
          "titulo": "Recibos e Comunicações de Pagamento",
          "itens": [
            "Recibos assinados por prestadores de serviços de sonorização, cenografia, segurança e limpeza.",
            "Histórico de mensagens e confirmações trocadas nos canais oficiais de coordenação da Convenção."
          ]
        },
        {
          "titulo": "Trilha para Auditoria Fiscal",
          "itens": [
            "Arquivamento digital organizado em pastas cronológicas pronto para inspeção da comissão fiscal de Área.",
            "Segurança documental completa respaldando as prestações de contas apresentadas à assembleia."
          ]
        }
      ],
      "destaque": "Arquivo comprobatório auditável que blinda a coordenação da Convenção contra qualquer dúvida contábil."
    }
  },
  {
    "id": "doc-dsh-001",
    "titulo": "Painel da Realidade Financeira do Movimento",
    "arquivo": "painel-realidade-financeira-aa-1.html",
    "caminhoRelativo": "painel-realidade-financeira-aa-1.html",
    "categoria": "06 - DASHBOARDS E FERRAMENTAS",
    "subcategoria": "Dashboards Executivos",
    "tipo": "HTML",
    "periodo": "2019-2026",
    "ano": 2026,
    "tamanho": "32.1 KB",
    "dataModificacao": "22/07/2026",
    "status": "Vigente",
    "tags": [
      "painel realidade financeira",
      "deficit estrutural",
      "reserva prudente",
      "diagnostico financeiro",
      "junaab"
    ],
    "resumo": "Painel interativo com visualização da tese financeira: déficit operacional acumulado, queima da reserva prudente de A.A. Brasil e métricas de sustentabilidade.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Painel interativo com visualização da tese financeira nacional: déficit acumulado, queima de reserva prudente e métricas de sustentabilidade.",
      "topicos": [
        {
          "titulo": "Tese Central do Déficit Estrutural",
          "itens": [
            "Demonstração visual de que o modelo de receitas atual não cobre o custo fixo de manutenção da estrutura nacional.",
            "Apresentação da taxa mensal de queima da reserva prudente de A.A. Brasil ao longo dos últimos anos."
          ]
        },
        {
          "titulo": "Indicadores Gráficos Interativos",
          "itens": [
            "Gráficos de dispersão e barras comparando a arrecadação da 7ª Tradição contra a inflação oficial (IPCA).",
            "Métricas de sustentabilidade do ESG e simulação de cenários futuros com horizontes de 12 a 36 meses."
          ]
        },
        {
          "titulo": "Propostas e Soluções Concretas",
          "itens": [
            "Diretrizes para reversão do quadro através do fortalecimento da consciência financeira dos grupos.",
            "Apoio técnico para embasar propostas de reforma orçamentária na Conferência de Serviços Gerais."
          ]
        }
      ],
      "destaque": "A ferramenta visual analítica mais potente da gestão para conscientização e defesa do patrimônio da Irmandade."
    }
  },
  {
    "id": "doc-dsh-002",
    "titulo": "Nota Técnica — Clarificação Metodológica dos Regimes Contábeis",
    "arquivo": "NOTA_TECNICA_COM_CITACOES_COMPLETAS.html",
    "caminhoRelativo": "NOTA_TECNICA_COM_CITACOES_COMPLETAS.html",
    "categoria": "06 - DASHBOARDS E FERRAMENTAS",
    "subcategoria": "Notas Técnicas",
    "tipo": "HTML",
    "periodo": "Julho / 2026",
    "ano": 2026,
    "tamanho": "19.1 KB",
    "dataModificacao": "21/07/2026",
    "status": "Vigente",
    "tags": [
      "nota tecnica",
      "regimes contabeis",
      "citacoes completas",
      "regime de competencia",
      "regime de caixa",
      "itg 2002"
    ],
    "resumo": "Nota técnica aprofundada com citações das normas contábeis brasileiras (NBC TG e ITG 2002 para entidades sem fins lucrativos) fundamentando a correta contabilização das receitas de literatura.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Nota técnica aprofundada com citações das normas contábeis brasileiras (NBC TG e ITG 2002) sobre regimes contábeis.",
      "topicos": [
        {
          "titulo": "Conceituação dos Regimes Contábeis",
          "itens": [
            "Diferenciação técnica definitiva entre Regime de Competência (momento do fato gerador) e Regime de Caixa (movimentação financeira).",
            "Demonstração de como o uso inadequado do regime de caixa distorce balanços de entidades do terceiro setor."
          ]
        },
        {
          "titulo": "Normatização Legal Obrigatória (ITG 2002)",
          "itens": [
            "Citação dos artigos e diretrizes do Conselho Federal de Contabilidade que obrigam a aplicação do regime de competência.",
            "Responsabilidade jurídica e estatutária da diretoria da JUNAAB perante órgãos fiscalizadores e a sociedade."
          ]
        },
        {
          "titulo": "Aplicação Prática à Literatura de A.A.",
          "itens": [
            "Necessidade de contabilizar custos de produção e receitas de literatura no exato período da transação comercial.",
            "Recomendação de ajustes metodológicos imediatos nos demonstrativos financeiros nacionais."
          ]
        }
      ],
      "destaque": "Embasamento doutrinário e normativo irrefutável para os pareceres e contestações do Delegado."
    }
  },
  {
    "id": "doc-dsh-003",
    "titulo": "Dashboard Financeiro ESL Área 27 CE",
    "arquivo": "dashboard_aa_area27.html",
    "caminhoRelativo": "06 - DASHBOARDS E FERRAMENTAS/Dashboard Area 27/dashboard_aa_area27.html",
    "categoria": "06 - DASHBOARDS E FERRAMENTAS",
    "subcategoria": "Dashboard Area 27",
    "tipo": "HTML",
    "periodo": "2025-2026",
    "ano": 2026,
    "tamanho": "170 KB",
    "dataModificacao": "20/06/2026",
    "status": "Vigente",
    "tags": [
      "dashboard area 27",
      "controle financeiro",
      "graficos interativos",
      "extratos",
      "rubricas",
      "convencao 2027"
    ],
    "resumo": "Dashboard financeiro interativo completo com gráficos de receitas por rubrica, despesas por categoria, controle nominal de cotas da Convenção e extrato bancário categorizado.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Dashboard financeiro interativo do ESL Área 27 com gráficos de receitas, despesas por rubrica e cotas da Convenção 2027.",
      "topicos": [
        {
          "titulo": "Controle Orçamentário e Rubricas",
          "itens": [
            "Mapeamento visual de receitas por categoria (literatura, repasses distritais, 7ª Tradição e eventos).",
            "Controle analítico de despesas fixas e variáveis com gráficos interativos de acompanhamento mensal."
          ]
        },
        {
          "titulo": "Acompanhamento das Cotas da Convenção",
          "itens": [
            "Painel nominal de controle do pagamento de cotas por distrito para a Convenção Nacional de 2027.",
            "Indicadores de taxa de adesão e previsão de arrecadação consolidada para o fundo preparatório."
          ]
        },
        {
          "titulo": "Extrato Analítico Categorizado",
          "itens": [
            "Classificação detalhada de todos os lançamentos bancários permitindo filtragem rápida por palavra-chave.",
            "Exportação direta de dados para prestação de contas aos delegados e órgãos fiscalizadores."
          ]
        }
      ],
      "destaque": "Plataforma de controle financeiro diário de ponta para a tesouraria do Escritório de Serviços Locais."
    }
  },
  {
    "id": "doc-dsh-004",
    "titulo": "Apresentação Atualizada — Relatório de Gestão",
    "arquivo": "APRESENTACAO_ATUALIZADA.html",
    "caminhoRelativo": "APRESENTACAO_ATUALIZADA.html",
    "categoria": "06 - DASHBOARDS E FERRAMENTAS",
    "subcategoria": "Apresentações",
    "tipo": "HTML",
    "periodo": "Julho / 2026",
    "ano": 2026,
    "tamanho": "81.2 KB",
    "dataModificacao": "21/07/2026",
    "status": "Vigente",
    "tags": [
      "apresentacao atualizada",
      "slides executivos",
      "prestacao de contas assembleia",
      "relatorio de gestao"
    ],
    "resumo": "Apresentação interativa em slides para assembleia de delegados, sintetizando os números da área, desafios institucionais e propostas para a CSG.",
    "destaque": true,
    "resumoTopicos": {
      "objetivo": "Apresentação interativa em slides para assembleia de delegados, sintetizando números da área, desafios e propostas para a CSG.",
      "topicos": [
        {
          "titulo": "Panorama Geral da Gestão de Área",
          "itens": [
            "Apresentação consolidada dos resultados operacionais, financeiros e de serviço do mandato do Delegado.",
            "Balanço dos grupos em funcionamento, novos distritos e ações de Informação ao Público no Rio de Janeiro."
          ]
        },
        {
          "titulo": "Diagnóstico dos Desafios Institucionais",
          "itens": [
            "Apresentação da situação da JUNAAB, gargalos de processos e necessidade de transparência contábil.",
            "Mobilização e preparativos para a Convenção Nacional de 2027 e projetos de inclusão de áreas online."
          ]
        },
        {
          "titulo": "Plataforma de Propostas para a CSG",
          "itens": [
            "Conjunto articulado de recomendações e temas que a Área levará à Conferência de Serviços Gerais.",
            "Defesa irredutível da soberania dos grupos de A.A. e fortalecimento dos Doze Conceitos."
          ]
        }
      ],
      "destaque": "Apresentação moderna e de alto impacto para alinhamento e empoderamento da assembleia de Delegados."
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CATALOGO_DOCUMENTOS };
}
