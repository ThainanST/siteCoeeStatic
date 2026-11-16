/* Conteúdo local de demonstração. Substitua esta fonte por uma integração futura. */
export default {
  navigation: [
    { id: "inicio", label: "Início", href: "index.html" },
    { id: "curso", label: "Curso", href: "curso.html" },
    { id: "aluno", label: "Área do Aluno", href: "area-do-aluno.html" },
    { id: "tcc", label: "TCC", href: "tcc.html" },
    { id: "colegiado", label: "Colegiado", href: "colegiado.html" },
    { id: "noticias", label: "Notícias e editais", href: "noticias-e-editais.html" }
  ],
  notices: [
    {
      label: "Aviso",
      title: "Período de solicitação de estágio",
      date: "10 nov 2026",
      deadline: "30 nov 2026",
      status: "Aberto (demonstração)",
      text: "Confira os documentos necessários antes de encaminhar sua solicitação ao Colegiado.",
      href: "area-do-aluno.html#estagio"
    }
  ],
  publications: [
    { category: "Notícia", title: "Orientações para o próximo semestre", date: "08 nov 2026", status: "Publicado (demonstração)", text: "Consulte os horários, o calendário e os canais de atendimento disponíveis nesta página." },
    { category: "Edital", title: "Seleção de monitoria — exemplo", date: "04 nov 2026", deadline: "20 nov 2026", status: "Inscrições abertas (demonstração)", text: "Publicação demonstrativa. O edital oficial será disponibilizado quando houver processo seletivo.", document: { title: "Edital de monitoria", access: "public" } }
  ],
  course: {
    intro: "O curso de Engenharia Elétrica é ofertado pelo Instituto de Ciências Exatas e Aplicadas (ICEA), no campus de João Monlevade da Universidade Federal de Ouro Preto.",
    topics: [
      { title: "Projeto pedagógico", text: "Apresenta os objetivos, o perfil do egresso e as diretrizes de formação do curso." },
      { title: "Matriz curricular", text: "Consulte a organização das disciplinas, os pré-requisitos e a estrutura curricular." },
      { title: "Disciplinas e horários", text: "Acompanhe a oferta de disciplinas e os horários acadêmicos do semestre." },
      { title: "Docentes, pesquisa e extensão", text: "Conheça as atividades de ensino, pesquisa e extensão desenvolvidas no curso." },
      { title: "Laboratórios", text: "O curso conta com atividades práticas e espaços de ensino em diferentes áreas da Engenharia Elétrica." },
      { title: "Avaliação", text: "As avaliações e atividades acadêmicas seguem as normas institucionais e o projeto pedagógico vigente." }
    ]
  },
  studentTasks: [
    {
      id: "calendario",
      title: "Consultar calendário acadêmico",
      description: "Confira períodos letivos, matrícula, trancamento e demais datas acadêmicas.",
      requirements: ["Consulte o calendário correspondente ao semestre letivo."],
      form: "Calendário acadêmico da UFOP",
      channel: "Acesso direto no portal institucional.",
      norm: "Calendário acadêmico vigente da UFOP.",
      document: { title: "Calendário acadêmico 2026/2", access: "public" }
    },
    {
      id: "horarios",
      title: "Consultar horários",
      description: "Veja a grade de horários das disciplinas ofertadas para o período.",
      requirements: ["Selecione o semestre letivo e confira a turma antes da matrícula."],
      form: "Não se aplica.",
      channel: "Consulte a página de horários do curso.",
      norm: "Oferta acadêmica vigente.",
      document: { title: "Quadro de horários 2026/2", access: "ufop" }
    },
    {
      id: "estagio",
      title: "Solicitar estágio obrigatório ou não obrigatório",
      description: "Organize e envie a documentação antes do início das atividades de estágio.",
      requirements: ["Plano de atividades preenchido e assinado.", "Termo de compromisso e dados da concedente.", "Aguarde a aprovação antes de iniciar o estágio."],
      form: "Formulário de solicitação de estágio (demonstração).",
      channel: "Encaminhe o processo ao canal de atendimento do Colegiado.",
      norm: "Lei nº 11.788/2008 e regulamento de estágio do curso.",
      document: { title: "Formulário de estágio", access: "public" }
    },
    {
      id: "aproveitamento",
      title: "Solicitar aproveitamento de estudos",
      description: "Peça análise de equivalência para disciplinas cursadas em outra instituição ou curso.",
      requirements: ["Histórico escolar oficial.", "Ementa e conteúdo programático da disciplina.", "Identifique cada disciplina de origem e a disciplina pretendida."],
      form: "Formulário de aproveitamento de estudos; autorização prévia, quando aplicável.",
      channel: "Protocole a solicitação no canal institucional indicado pela UFOP.",
      norm: "Regimento Geral da UFOP e normas acadêmicas vigentes.",
      documents: [{ title: "Formulário de aproveitamento de estudos", access: "ufop" }, { title: "Formulário de autorização prévia", access: "ufop" }]
    },
    {
      id: "enfase",
      title: "Solicitar concessão de ênfase",
      description: "Verifique os requisitos curriculares antes de solicitar o registro da ênfase.",
      requirements: ["Histórico escolar atualizado.", "Comprovação dos componentes exigidos para a ênfase."],
      form: "Requerimento de concessão de ênfase (demonstração).",
      channel: "Envie a solicitação à Secretaria/atendimento acadêmico da UFOP.",
      norm: "Projeto pedagógico e normas acadêmicas do curso.",
      document: { title: "Requerimento de concessão de ênfase", access: "public" }
    },
    {
      id: "atividades",
      title: "Registrar atividades acadêmicas e de extensão",
      description: "Solicite a análise e o registro de atividades complementares ou de extensão.",
      requirements: ["Certificado ou declaração com período e carga horária.", "Descrição da atividade e vínculo com a formação."],
      form: "Requerimento de atividades acadêmicas (demonstração).",
      channel: "Encaminhe os comprovantes à Secretaria/atendimento acadêmico.",
      norm: "Projeto pedagógico e regulamento de atividades do curso.",
      document: { title: "Requerimento de atividades acadêmicas", access: "public" }
    },
    {
      id: "bolsas",
      title: "Buscar oportunidades de bolsas",
      description: "Acompanhe editais de monitoria, iniciação científica, extensão e assistência estudantil.",
      requirements: ["Leia os critérios e o cronograma do edital de interesse.", "Separe os comprovantes solicitados no edital."],
      form: "Formulário indicado em cada edital.",
      channel: "Siga o canal e o prazo indicados na publicação oficial.",
      norm: "Edital específico e normas do programa.",
      document: { title: "Editais e oportunidades", access: "public" }
    },
    {
      id: "apoio",
      title: "Acessar serviços de apoio",
      description: "Procure os serviços institucionais de orientação e apoio ao estudante.",
      requirements: ["Consulte os canais oficiais para verificar atendimento e agendamento."],
      form: "Conforme o serviço escolhido.",
      channel: "Atendimento pelos canais institucionais da UFOP.",
      norm: "Orientações do serviço institucional correspondente.",
      document: { title: "Serviços de apoio ao estudante", access: "public" }
    }
  ],
  tcc: {
    steps: [
      {
        id: "como-comecar",
        title: "Como começar",
        text: "Converse com um possível orientador, escolha um tema e confirme os requisitos de matrícula e planejamento do TCC.",
        documents: [{ title: "Regulamento de TCC", access: "public" }, { title: "Modelo de proposta de TCC", access: "public" }]
      },
      {
        id: "prazos-documentos",
        title: "Prazos e documentos",
        text: "Acompanhe os prazos do semestre e entregue os formulários com as assinaturas solicitadas.",
        documents: [{ title: "Cronograma de TCC — 2026/2", access: "public" }, { title: "Formulários de acompanhamento", access: "ufop" }]
      },
      {
        id: "defesas",
        title: "Defesas",
        text: "As defesas são divulgadas com autorização dos envolvidos e de acordo com a disponibilidade de agenda.",
        documents: []
      },
      {
        id: "apos-defesa",
        title: "Após a defesa",
        text: "Após aprovação, providencie a folha de aprovação, a ficha catalográfica e o depósito da versão final no BDTCC.",
        documents: [{ title: "Orientações para ficha catalográfica", access: "public" }, { title: "Depósito no BDTCC", access: "ufop" }]
      }
    ],
    defenses: [
      { title: "Sistema de energia — exemplo", date: "25 nov 2026", time: "14h", location: "ICEA · sala a confirmar", status: "Agendada (demonstração)" },
      { title: "Conversores aplicados — exemplo", date: "02 dez 2026", time: "10h", location: "ICEA · sala a confirmar", status: "Agendada (demonstração)" }
    ]
  },
  members: [
    { name: "Profa. Ana Martins (demonstração)", role: "Presidenta do Colegiado" },
    { name: "Prof. Bruno Costa (demonstração)", role: "Representante docente" },
    { name: "Estudante Camila Souza (demonstração)", role: "Representante discente" }
  ],
  meetings: [
    { id: "reuniao-2026-10-15", date: "2026-10-15", title: "Reunião ordinária", time: "14h", location: "ICEA · Sala do Colegiado", minutes: { title: "Ata da reunião ordinária", access: "public" } },
    { id: "reuniao-2026-11-12", date: "2026-11-12", title: "Reunião ordinária", time: "14h", location: "ICEA · Sala do Colegiado", minutes: { title: "Ata da reunião ordinária", access: "public" } },
    { id: "reuniao-2026-11-24", date: "2026-11-24", title: "Reunião extraordinária", time: "15h", location: "ICEA · Sala do Colegiado", minutes: { title: "Ata da reunião extraordinária", access: "ufop" } },
    { id: "reuniao-2026-12-03", date: "2026-12-03", title: "Reunião ordinária", time: "14h", location: "ICEA · Sala do Colegiado", minutes: { title: "Ata da reunião ordinária", access: "public" } }
  ],
  initialMeetingMonth: "2026-11",
  nde: [
    { name: "Profa. Daniela Lima (demonstração)", role: "Coordenadora do NDE" },
    { name: "Prof. Eduardo Reis (demonstração)", role: "Membro docente" },
    { name: "Profa. Fernanda Alves (demonstração)", role: "Membro docente" }
  ],
  colegiadoDocuments: [
    { title: "Atribuições e composição do Colegiado", access: "public" },
    { title: "Atas de reuniões", access: "ufop" },
    { title: "Resoluções do curso", access: "public" },
    { title: "Atas do NDE", access: "ufop" }
  ],
  contact: {
    institution: "Instituto de Ciências Exatas e Aplicadas (ICEA) · UFOP",
    location: "João Monlevade · Minas Gerais",
    email: "coee@ufop.edu.br (endereço demonstrativo)"
  }
};
