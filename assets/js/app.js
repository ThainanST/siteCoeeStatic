(function () {
  "use strict";

  const data = window.coeeData;
  const page = document.body.dataset.page;
  const nav = data.navigation;
  const content = document.getElementById("content");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function documentLink(document) {
    const restricted = document.access === "ufop" ? '<span class="badge badge-restricted">Requer conta UFOP</span>' : "";
    if (document.url) {
      return '<div class="document-link"><a href="' + escapeHtml(document.url) + '">' + escapeHtml(document.title) + '</a>' + restricted + '</div>';
    }
    return '<div class="document-link document-unavailable"><span>' + escapeHtml(document.title) + '</span><span class="document-badges">' + restricted + '<span class="badge badge-demo">Link de demonstração indisponível</span></span></div>';
  }

  function documentList(documents) {
    if (!documents.length) return "";
    return '<ul class="document-list">' + documents.map(function (document) {
      return "<li>" + documentLink(document) + "</li>";
    }).join("") + "</ul>";
  }

  function pageHeader(eyebrow, title, description) {
    return '<header class="page-heading"><p class="eyebrow">' + eyebrow + '</p><h1>' + title + '</h1><p>' + description + '</p></header>';
  }

  function publicationCard(item) {
    return '<article class="publication-card"><div class="card-meta"><span class="badge">' + escapeHtml(item.category || item.label) + '</span><time>' + escapeHtml(item.date) + '</time></div><h3>' +
      (item.href ? '<a href="' + escapeHtml(item.href) + '">' + escapeHtml(item.title) + '</a>' : escapeHtml(item.title)) +
      '</h3><p>' + escapeHtml(item.text) + '</p>' +
      (item.status ? '<p class="publication-status">' + escapeHtml(item.status) + (item.deadline ? ' · Prazo: ' + escapeHtml(item.deadline) : '') + '</p>' : '') +
      (item.document ? documentList([item.document]) : '') + '<span class="demo-note">Dados de demonstração</span></article>';
  }

  function renderHome() {
    const shortcuts = [
      { title: "Horários", href: "area-do-aluno.html#horarios" },
      { title: "TCC", href: "tcc.html" },
      { title: "Estágio curricular", href: "area-do-aluno.html#estagio" },
      { title: "Calendário acadêmico", href: "area-do-aluno.html#calendario" }
    ];
    return '<div class="home-layout"><aside class="home-sidebar" aria-labelledby="shortcut-heading"><div class="sidebar-heading"><span class="sidebar-kicker">Para estudantes</span><h2 id="shortcut-heading">Acesso rápido</h2></div><nav class="shortcut-grid" aria-label="Atalhos principais">' +
      shortcuts.map(function (item) {
        return '<a class="shortcut-card" href="' + item.href + '"><span>' + item.title + '</span><span aria-hidden="true">→</span></a>';
      }).join("") + '</nav><details class="more-links"><summary>Mais serviços</summary><nav aria-label="Outros serviços"><a href="colegiado.html">Sobre o Colegiado</a><a href="area-do-aluno.html#enfase">Concessão de ênfase</a><a href="area-do-aluno.html#aproveitamento">Aproveitamento de estudos</a><a href="area-do-aluno.html#atividades">Atividades acadêmicas</a><a href="colegiado.html#documentos">Resoluções</a><a href="area-do-aluno.html#apoio">Apoio ao estudante</a></nav></details><div class="sidebar-contact"><p>Precisa de ajuda?</p><a href="colegiado.html#contato">Fale com o Colegiado →</a></div></aside>' +
      '<div class="home-main"><p class="home-location">Engenharia Elétrica <span> / </span> ICEA · UFOP · João Monlevade</p>' +
      '<section class="home-hero"><div class="hero-copy"><p class="hero-kicker">Colegiado de Engenharia Elétrica</p><h1>Informação para acompanhar sua trajetória.</h1><p>Orientações, documentos e oportunidades do curso em um só lugar.</p><a class="hero-link" href="area-do-aluno.html">Acessar área do aluno <span aria-hidden="true">→</span></a></div><div class="hero-art" aria-hidden="true"></div></section>' +
      '<section class="notice-banner" aria-labelledby="notice-title"><div><p class="eyebrow">Aviso em destaque · ' + escapeHtml(data.notices[0].date) + '</p><h2 id="notice-title">' + escapeHtml(data.notices[0].title) + '</h2><p>' + escapeHtml(data.notices[0].text) + '</p></div><a class="text-link" href="' + escapeHtml(data.notices[0].href) + '">Ver orientações <span aria-hidden="true">→</span></a></section>' +
      '<section class="recent-section"><div class="section-heading"><div><p class="eyebrow">Acompanhe o curso</p><h2>Notícias e editais</h2></div><a class="text-link" href="noticias-e-editais.html">Ver todas <span aria-hidden="true">→</span></a></div><div class="publication-grid">' + data.publications.map(publicationCard).join("") + '</div></section></div></div>';
  }

  function renderCourse() {
    return pageHeader("Graduação · ICEA · UFOP", "Curso de Engenharia Elétrica", data.course.intro) +
      '<div class="card-grid course-grid">' + data.course.topics.map(function (topic) {
        return '<article class="info-card"><span class="card-index">COEE</span><h2>' + escapeHtml(topic.title) + '</h2><p>' + escapeHtml(topic.text) + '</p></article>';
      }).join("") + '</div><div class="callout"><strong>Precisa consultar horários?</strong><a class="text-link" href="area-do-aluno.html#horarios">Ir para horários e serviços do aluno →</a></div>';
  }

  function renderStudent() {
    return pageHeader("Serviços e orientações", "Área do Aluno", "Encontre o procedimento pela tarefa. Confira requisitos, formulário, canal de envio e norma antes de iniciar uma solicitação.") +
      '<div class="task-nav" aria-label="Ir para um procedimento">' + data.studentTasks.map(function (task) {
        return '<a href="#' + task.id + '">' + escapeHtml(task.title.replace("Solicitar ", "")) + '</a>';
      }).join("") + '</div><div class="task-list">' + data.studentTasks.map(function (task) {
        return '<article class="task-card" id="' + task.id + '"><div class="task-title"><span class="card-index">PROCEDIMENTO</span><h2>' + escapeHtml(task.title) + '</h2><p>' + escapeHtml(task.description) + '</p></div><div class="task-details"><section><h3>Requisitos</h3><ul>' + task.requirements.map(function (requirement) { return '<li>' + escapeHtml(requirement) + '</li>'; }).join("") + '</ul></section><section><h3>Formulário</h3><p>' + escapeHtml(task.form) + '</p>' + documentList(task.documents || (task.document ? [task.document] : [])) + '</section><section><h3>Canal de envio</h3><p>' + escapeHtml(task.channel) + '</p></section><section><h3>Norma de referência</h3><p>' + escapeHtml(task.norm) + '</p></section></div></article>';
      }).join("") + '</div>';
  }

  function renderTcc() {
    return pageHeader("Trabalho de Conclusão de Curso", "TCC", "Acompanhe cada etapa do Trabalho de Conclusão de Curso, da escolha do tema ao depósito da versão final.") +
      '<nav class="anchor-nav" aria-label="Seções do TCC">' + data.tcc.steps.map(function (step) {
        return '<a href="#' + step.id + '">' + escapeHtml(step.title) + '<span aria-hidden="true">↘</span></a>';
      }).join("") + '</nav><div class="tcc-sections">' + data.tcc.steps.map(function (step) {
        return '<section class="content-section" id="' + step.id + '"><p class="eyebrow">Etapa do TCC</p><h2>' + escapeHtml(step.title) + '</h2><p>' + escapeHtml(step.text) + '</p>' + documentList(step.documents) + (step.id === "defesas" ? '<div class="defense-list">' + data.tcc.defenses.map(function (defense) {
          return '<article class="defense-card"><div><span class="badge">' + escapeHtml(defense.status) + '</span><h3>' + escapeHtml(defense.title) + '</h3></div><p><strong>' + escapeHtml(defense.date) + '</strong> · ' + escapeHtml(defense.time) + '</p><p>' + escapeHtml(defense.location) + '</p></article>';
        }).join("") + '</div><p class="demo-note">Defesas e dados de demonstração. Publicação sujeita à autorização dos envolvidos.</p>' : "") + '</section>';
      }).join("") + '</div>';
  }

  function peopleCards(people) {
    return '<div class="people-grid">' + people.map(function (person) {
      return '<article class="person-card"><span class="person-avatar" aria-hidden="true">' + escapeHtml(person.name.replace(" (demonstração)", "").split(" ").slice(-2).map(function (part) { return part.charAt(0); }).join("")) + '</span><div><h3>' + escapeHtml(person.name) + '</h3><p>' + escapeHtml(person.role) + '</p></div></article>';
    }).join("") + '</div>';
  }

  function renderColegiado() {
    return pageHeader("Governança acadêmica", "Colegiado do Curso", "O Colegiado acompanha a organização acadêmica e contribui para o funcionamento e a melhoria contínua do curso.") +
      '<section class="content-section"><h2>Atribuições</h2><p>Deliberar sobre assuntos acadêmicos do curso, acompanhar sua execução e apoiar o diálogo entre estudantes, docentes e a instituição.</p>' + documentList(data.colegiadoDocuments.slice(0, 1)) + '</section>' +
      '<section class="content-section"><p class="eyebrow">Representação</p><h2>Membros do Colegiado</h2>' + peopleCards(data.members) + '</section>' +
      '<section class="content-section" id="nde"><p class="eyebrow">Acompanhamento do curso</p><h2>Núcleo Docente Estruturante (NDE)</h2><p>O NDE atua no acompanhamento, na consolidação e na atualização do projeto pedagógico do curso.</p>' + peopleCards(data.nde) + documentList(data.colegiadoDocuments.filter(function (document) { return document.title.indexOf("NDE") >= 0; })) + '</section>' +
      '<section class="content-section" id="documentos"><h2>Reuniões e documentos</h2>' + documentList(data.colegiadoDocuments.slice(1, 3)) + '</section>' +
      '<section class="contact-card" id="contato"><p class="eyebrow">Atendimento</p><h2>Contato do COEE</h2><p>' + escapeHtml(data.contact.institution) + '</p><p>' + escapeHtml(data.contact.location) + '</p><p>' + escapeHtml(data.contact.email) + '</p><span class="demo-note">Dados de demonstração · confirme os canais oficiais antes de enviar informações pessoais.</span></section>';
  }

  function renderNews() {
    const allItems = data.notices.concat(data.publications);
    return pageHeader("Atualizações do curso", "Notícias e editais", "Avisos, publicações e oportunidades acadêmicas. Confira datas, prazos e a situação de cada publicação.") +
      '<div class="news-list">' + allItems.map(publicationCard).join("") + '</div><p class="demo-note">Todos os registros apresentados nesta página são Dados de demonstração.</p>';
  }

  function renderHeader() {
    const activePage = nav.find(function (item) { return item.id === page; });
    document.title = (activePage ? activePage.label : "Início") + " | COEE · UFOP";
    document.getElementById("site-header").innerHTML =
      '<a class="skip-link" href="#content">Pular para o conteúdo</a><header class="site-header"><div class="institution-strip"><div class="container"><span>Universidade Federal de Ouro Preto</span><a href="https://ufop.br/">Portal UFOP <span aria-hidden="true">↗</span></a></div></div><div class="brand-band"><div class="container brand-row"><a class="brand" href="index.html" aria-label="COEE UFOP — página inicial"><img class="brand-logo" src="assets/images/logoDeelt.jpg" alt=""><span class="brand-copy"><span class="brand-abbr">COEE <span>· UFOP</span></span><strong>Colegiado do Curso de<br>Engenharia Elétrica</strong><small>ICEA · Campus João Monlevade</small></span></a><span class="demo-flag">Dados de demonstração</span><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation"><span class="menu-icon" aria-hidden="true">☰</span><span class="menu-label">Menu</span></button></div></div><nav class="primary-nav" id="primary-navigation" aria-label="Navegação principal"><div class="container nav-links">' +
      nav.map(function (item) {
        return '<a href="' + item.href + '"' + (item.id === page ? ' aria-current="page"' : "") + '>' + item.label + '</a>';
      }).join("") + '</div></nav></header>';
    const toggle = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("primary-navigation");
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navigation.classList.toggle("is-open", !expanded);
    });
  }

  function renderFooter() {
    document.getElementById("site-footer").innerHTML = '<footer class="site-footer"><div class="container footer-inner"><a class="footer-brand" href="index.html">COEE <span>· UFOP</span></a><p>Colegiado do Curso de Engenharia Elétrica<br>ICEA · João Monlevade · Minas Gerais</p><a class="text-link" href="colegiado.html#contato">Contato institucional →</a><small>Conteúdo e documentos fictícios para demonstração. Consulte os canais oficiais da UFOP.</small></div></footer>';
  }

  renderHeader();
  renderFooter();
  const renderers = {
    inicio: renderHome,
    curso: renderCourse,
    aluno: renderStudent,
    tcc: renderTcc,
    colegiado: renderColegiado,
    noticias: renderNews
  };
  content.innerHTML = (renderers[page] || renderHome)();
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
}());
