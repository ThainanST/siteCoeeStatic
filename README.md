# COEE — Site do Colegiado de Engenharia Elétrica

Site público do Colegiado do Curso de Engenharia Elétrica da UFOP, no ICEA, em João Monlevade. O aluno deve conseguir encontrar rapidamente orientações, prazos, documentos e o contato certo para cada solicitação, especialmente pelo celular.

## Menu

| Página | Conteúdo |
|---|---|
| Início | Atalhos para Horários, TCC, Estágio e Calendário acadêmico. Avisos com prazo e publicações recentes. |
| Curso | Apresentação, projeto pedagógico, matriz curricular, grade transposta, disciplinas, docentes e avaliação. Laboratórios, pesquisa e extensão. |
| Área do Aluno | Calendário, horários, estágio obrigatório e não obrigatório, aproveitamento de estudos, concessão de ênfase, atividades acadêmicas e de extensão, bolsas, normas e serviços de apoio. |
| TCC | Como começar, prazos, regulamento, modelos, próximas defesas e orientações para a entrega final. |
| Colegiado | Atribuições, membros, reuniões, atas, resoluções e contato. Seção do NDE com finalidade, membros e atas. |
| Notícias e editais | Notícias, avisos e editais com data, prazo, situação e link para o documento oficial. |

## Orientações e solicitações

Em cada procedimento, reunir os requisitos, o que o aluno precisa fazer, o formulário, o canal de envio e a norma aplicável. Em aproveitamento de estudos, identificar os formulários de aproveitamento e de autorização prévia pelos nomes. Em **Após a defesa**, orientar a folha de aprovação, a ficha catalográfica e o depósito no BDTCC. Divulgar apenas defesas e dados autorizados.

## Dados e documentos

O site é estático e compatível com GitHub Pages, sem dependências nem etapa de build. Nesta primeira versão, os exemplos locais ficam em [`assets/data/data.js`](./assets/data/data.js), separados da estrutura HTML e da apresentação. Os registros são fictícios e estão identificados como **Dados de demonstração**. Não há planilha nem serviço externo conectado.

Quando houver documentos oficiais, incluir o endereço direto do arquivo no registro correspondente e marcar documentos restritos com **Requer conta UFOP**. Enquanto um endereço não estiver configurado, o item aparece como demonstração sem link quebrado.

Antes da publicação, conferir com o Colegiado a vigência das normas, os links, as permissões e os dados de atendimento. O [site temporário do COEE](https://coee.my.canva.site/) serve como referência para localizar os materiais atuais.

## Abrir localmente

Abra `index.html` em um navegador moderno. Como alternativa, sirva esta pasta com um servidor HTTP local, por exemplo `python -m http.server 8000`, e acesse `http://localhost:8000`.

## Organização

- `*.html`: páginas e pontos de entrada, mantidos na raiz para navegação direta e GitHub Pages.
- `assets/css/`: estilos compartilhados.
- `assets/js/`: renderização e interações.
- `assets/data/`: conteúdo local de demonstração.
- `assets/images/`: imagens usadas pelo site.
- `siteCoee.png`: captura de referência do site antigo.

A direção visual está no [README-DESIGN.md](./README-DESIGN.md).
