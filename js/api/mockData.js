/**
 * Camada de Mocks de Dados Fictícios (Simulação de API Rest Futura)
 * Pure JavaScript (ES Modules)
 */

export const mockData = {
  institucional: {
    titulo: "Institucional - Prefeitura Municipal",
    historia: "Fundado originalmente em 1712, o município destaca-se por sua rica história, patrimônio arquitetônico colonial e preservação ambiental.",
    missao: "Promover o desenvolvimento sustentável, a justiça social e a excelência nos serviços públicos municipais.",
    visao: "Ser referência regional em gestão pública transparente, sustentabilidade e inovação social.",
    valores: ["Transparência", "Eficiência", "Inclusão Social", "Sustentabilidade", "Respeito ao Cidadão"],
    simbolos: {
      brasaoUrl: "./assets/img/prefeitura.jpg",
      bandeiraUrl: "./assets/img/hero.jpg",
      hino: "Das verdes serras ao azul do mar, tua história é tradição e amor..."
    }
  },

  gestores: {
    prefeito: {
      nome: "Dr. Roberto Albuquerque",
      cargo: "Prefeito Municipal",
      gestao: "2025–2028",
      partido: "PSD",
      foto: "./assets/img/prefeitura.jpg",
      biografia: "Médico sanitarista com mais de 20 anos de atuação em gestão pública e desenvolvimento regional.",
      email: "gabinete@alcantaras.ce.gov.br"
    },
    vicePrefeito: {
      nome: "Maria das Graças Silva",
      cargo: "Vice-Prefeita Municipal",
      gestao: "2025–2028",
      partido: "MDB",
      foto: "./assets/img/cultura.jpg",
      biografia: "Educadora e ex-secretária de Educação com forte atuação comunitária e direitos sociais.",
      email: "viceprefeita@alcantaras.ce.gov.br"
    }
  },

  galeriaGestores: [
    { periodo: "2021–2024", prefeito: "Joaquim Freire de Souza", foto: "./assets/img/centro-historico.jpg", destaques: "Construção do Hospital Municipal e reforma de 12 escolas." },
    { periodo: "2017–2020", prefeito: "Antônio Carlos Fonteles", foto: "./assets/img/hero.jpg", destaques: "Pavimentação asfáltica das rodovias vicinais e Selo UNICEF." },
    { periodo: "2013–2016", prefeito: "Francisca das Chagas Lima", foto: "./assets/img/cultura.jpg", destaques: "Criação da Central do Turista e Feira de Artesanato." }
  ],

  agendas: [
    { data: "12/09/2026", hora: "09:00", evento: "Inauguração da UBS do Distrito de Vento Leste", local: "Distrito Vento Leste", presenca: "Prefeito e Sec. de Saúde" },
    { data: "15/09/2026", hora: "14:30", evento: "Reunião do Conselho Municipal de Desenvolvimento Urbano", local: "Auditório da Prefeitura", presenca: "Equipe Técnica e Conselheiros" },
    { data: "20/09/2026", hora: "08:00", evento: "Abertura Oficial da Semana da Pátria e Regata Cultural", local: "Praça Central", presenca: "Gestores e Comunidade" }
  ],

  secretarias: [
    { sigla: "SEFIN", nome: "Secretaria de Finanças e Arrecadação", gestor: "Carlos Eduardo Mendes", email: "financas@alcantaras.ce.gov.br", fone: "(88) 3000-0101" },
    { sigla: "SMS", nome: "Secretaria Municipal de Saúde", gestor: "Dra. Luciana Paiva", email: "saude@alcantaras.ce.gov.br", fone: "(88) 3000-0102" },
    { sigla: "SME", nome: "Secretaria Municipal de Educação", gestor: "Profª. Helena Ramos", email: "educacao@alcantaras.ce.gov.br", fone: "(88) 3000-0103" },
    { sigla: "SETUR", nome: "Secretaria de Turismo e Patrimônio", gestor: "Marcelo Castro", email: "turismo@alcantaras.ce.gov.br", fone: "(88) 3000-0104" },
    { sigla: "SEINFRA", nome: "Secretaria de Infraestrutura e Obras", gestor: "Eng. Ricardo Vasconcelos", email: "obras@alcantaras.ce.gov.br", fone: "(88) 3000-0105" },
    { sigla: "SEMMA", nome: "Secretaria do Meio Ambiente e Recursos Hídricos", gestor: "Ana Clara Rocha", email: "meioambiente@alcantaras.ce.gov.br", fone: "(88) 3000-0106" }
  ],

  convenios: [
    { numero: "CV-2026/001", orgaoConcedente: "Ministério das Cidades", objeto: "Requalificação urbana e pavimentação com pedras originais no Centro Histórico", valorTotal: 2500000.00, contrapartida: 150000.00, vigencia: "12/2027", status: "Em Execução" },
    { numero: "CV-2025/089", orgaoConcedente: "Secretaria do Turismo do Estado do Ceará", objeto: "Sinalização turística e reforma da Central do Turista", valorTotal: 850000.00, contrapartida: 50000.00, vigencia: "08/2026", status: "Concluído" }
  ],

  emendas: [
    { parlamentar: "Dep. Federal Carlos Gomes", ano: 2026, valor: 1200000.00, destino: "Aquisição de Ambulância UTI e equipamentos para UBS", status: "Pago" },
    { parlamentar: "Senador Fernando Duarte", ano: 2026, valor: 3000000.00, destino: "Construção do Complexo Esportivo e Cultural", status: "Empenhado" }
  ],

  conselhos: [
    { nome: "Conselho Municipal de Saúde (CMS)", presidente: "Raimundo Nonato", reunioes: "Toda 2ª terça-feira do mês", membros: 12 },
    { nome: "Conselho Municipal dos Direitos da Criança e do Adolescente (CMDCA)", presidente: "Mariana Souza", reunioes: "Toda 1ª quarta-feira do mês", membros: 10 },
    { nome: "Conselho Municipal de Meio Ambiente (COMDEMA)", presidente: "Sérgio Ribeiro", reunioes: "Toda 3ª quinta-feira do mês", membros: 8 }
  ],

  cidade: {
    populacao: "48.320 habitantes (IBGE)",
    area: "412,8 km²",
    gentilico: "Alcantarense",
    clima: "Tropical Subúmido com temperatura média de 26°C",
    bioma: "Caatinga e Mata Atlântica de Altitude",
    descricao: "Conhecido pelo clima ameno das serras e praias deslumbrantes no litoral oeste do Ceará."
  },

  selos: [
    { nome: "Selo SEBRAE", descricao: "Reconhecimento pela desburocratização e apoio às micro e pequenas empresas locais.", icon: "🏆" },
    { nome: "Selo Verde", descricao: "Excelência em gestão de resíduos sólidos e conservação ambiental.", icon: "🌿" },
    { nome: "Selo UNICEF", descricao: "Aprovação pelas políticas de proteção à infância e saúde escolar.", icon: "👶" },
    { nome: "Selo Finas", descricao: "Transparência orçamentária e equilíbrio fiscal aprovado pelo TCE.", icon: "💎" },
    { nome: "Selo CMCA", descricao: "Incentivo à cultura e preservação do patrimônio histórico.", icon: "🏛️" },
    { nome: "Selo IQM", descricao: "Índice de Qualidade do Meio Ambiente e saneamento.", icon: "💧" },
    { nome: "Selo TCE Sustentável", descricao: "Práticas governamentais sustentáveis e combate ao desperdício.", icon: "♻️" }
  ],

  licitacoes: [
    { numero: "PE 012/2026", modalidade: "Pregão Eletrônico", objeto: "Contratação de empresa especializada para reforma da escola municipal", abertura: "25/09/2026", valorEstimado: 480000.00, status: "Aberto" },
    { numero: "TP 004/2026", modalidade: "Tomada de Preços", objeto: "Pavimentação em paralelepípedo na comunidade rural", abertura: "18/09/2026", valorEstimado: 320000.00, status: "Em Análise" }
  ],

  diario: [
    { edicao: "Edição 1.842/2026", data: "10/09/2026", resumo: "Decreto de abertura de crédito suplementar e nomeação de servidores aprovados em concurso público.", downloadUrl: "#" },
    { edicao: "Edição 1.841/2026", data: "09/09/2026", resumo: "Portaria de convocação da 4ª Conferência Municipal de Educação.", downloadUrl: "#" }
  ],

  concursos: [
    { edital: "Edital 01/2026", cargo: "Professores, Enfermeiros e Fiscais", vagas: 45, inscrições: "Até 30/09/2026", banca: "Instituto CE Concursos", status: "Inscrições Abertas" }
  ]
};

/**
 * Função simuladora de requisição HTTP assíncrona (API Rest)
 * @param {string} endpoint 
 * @returns {Promise<any>}
 */
export async function fetchApiData(endpoint) {
  // Simula latência de rede (200ms)
  await new Promise(resolve => setTimeout(resolve, 200));

  if (mockData[endpoint]) {
    return mockData[endpoint];
  }
  throw new Error(`Endpoint '${endpoint}' não encontrado.`);
}
