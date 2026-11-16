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

O site é gerado estaticamente com Astro e é compatível com GitHub Pages. Nesta primeira versão, os exemplos locais ficam em [`src/data/site.js`](./src/data/site.js), separados das páginas e dos componentes. Os registros são fictícios e estão identificados como **Dados de demonstração**. Não há planilha nem serviço externo conectado.

Quando houver documentos oficiais, incluir o endereço direto do arquivo no registro correspondente e marcar documentos restritos com **Requer conta UFOP**. Enquanto um endereço não estiver configurado, o item aparece como demonstração sem link quebrado.

Na área do Colegiado, apresentação, membros, reuniões e atas, NDE, documentos e contato ficam em páginas separadas. Os campos `members`, `nde` e `meetings` em `src/data/site.js` alimentam os cartões e o calendário de reuniões e atas. O campo opcional `photo` aceita o endereço de uma foto autorizada; sem ele, o cartão mostra uma ilustração. `initialMeetingMonth` define o mês inicial do calendário no formato `AAAA-MM`.

Antes da publicação, conferir com o Colegiado a vigência das normas, os links, as permissões e os dados de atendimento. O [site temporário do COEE](https://coee.my.canva.site/) serve como referência para localizar os materiais atuais.

## Abrir localmente

Instale Node.js 24 LTS (ou uma versão compatível indicada em `package.json`) e execute:

```sh
npm install
npm run dev
```

Abra o endereço exibido no terminal, incluindo o prefixo `/siteCoeeStatic/`. Para conferir a versão de produção, execute `npm run build` e depois `npm run preview`.

## Publicação no GitHub Pages

Em **Settings → Pages**, selecione **GitHub Actions** como fonte. O workflow em `.github/workflows/deploy.yml` compila e publica os arquivos gerados ao receber alterações na branch `main`. O endereço e o prefixo do repositório estão configurados em `astro.config.mjs`; atualize-os se o repositório ou domínio mudar.

## Organização

- `src/pages/`: páginas Astro, geradas como arquivos HTML.
- `src/layouts/` e `src/components/`: estrutura e componentes compartilhados.
- `src/styles/`: estilos compartilhados.
- `src/data/`: conteúdo local de demonstração.
- `src/assets/images/`: imagens usadas pelo site.
- `dist/`: resultado do build, gerado localmente e não versionado.
- `siteCoee.png`: captura de referência do site antigo.

A direção visual está no [README-DESIGN.md](./README-DESIGN.md).
