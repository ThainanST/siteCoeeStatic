export const navigation = [
  { id: "inicio", label: "Início", href: "index.html" },
  {
    id: "aluno", label: "Área do Aluno", href: "tcc.html",
    items: [
      { id: "tcc", label: "TCC", href: "tcc.html" },
      { id: "estagio", label: "Estágio curricular", href: "aluno-estagio.html" },
      { id: "aproveitamento", label: "Aproveitamento de estudos", href: "aluno-aproveitamento.html" },
      { id: "enfase", label: "Concessão de ênfase", href: "aluno-enfase.html" },
      { id: "atividades", label: "Atividade extracurricular (ATV100)", href: "aluno-atividades.html" }
    ]
  },
  {
    id: "curso", label: "Curso", href: "curso.html",
    items: [
      { id: "sobre", label: "Sobre o curso", href: "curso.html" },
      { id: "matriz", label: "Matriz curricular", href: "curso-matriz.html" },
      { id: "ppc", label: "Projeto Pedagógico (PPC)", href: "curso-ppc.html" },
      { id: "ementas", label: "Programas das disciplinas (ementas)", href: "curso-ementas.html" },
      { id: "avaliacao", label: "Avaliação do curso", href: "curso-avaliacao.html" }
    ]
  },
  {
    id: "colegiado", label: "Colegiado", href: "colegiado.html",
    items: [
      { id: "sobre", label: "Sobre o colegiado e membros", href: "colegiado.html" },
      { id: "reunioes", label: "Agenda de reuniões", href: "colegiado-reunioes.html" },
      { id: "atas", label: "Atas", href: "colegiado-atas.html" },
      { id: "documentos", label: "Resoluções", href: "colegiado-documentos.html" },
      { id: "nde", label: "Núcleo Docente Estruturante (NDE)", href: "colegiado-nde.html" }
    ]
  },
  { id: "noticias", label: "Notícias", href: "noticias-e-editais.html" },
  { id: "contato", label: "Contato", href: "contato.html" }
];

export const officialLinks = {
  calendario: "https://prograd.ufop.br/calendario-academico",
  psicologia: "https://prace.ufop.br/assistencia-estudantil/psicologia/joao-monlevade",
  docentes: "https://deelt.ufop.br/docentes",
  laboratorios: "https://deelt.ufop.br/laborat%C3%B3rios",
  pesquisa: "https://deelt.ufop.br/grupos-de-pesquisa",
  extensao: "https://deelt.ufop.br/projetos-de-extens%C3%A3o",
  avaliacao: "https://deelt.ufop.br/avalia%C3%A7%C3%A3o-do-curso",
  contatoDeelt: "https://deelt.ufop.br/contato-0"
};
