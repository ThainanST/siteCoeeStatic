# COEE — Site do Colegiado de Engenharia Elétrica

Site público do Colegiado do Curso de Engenharia Elétrica da UFOP, no ICEA, em João Monlevade. O aluno deve conseguir encontrar rapidamente orientações, prazos, documentos e o contato certo para cada solicitação, especialmente pelo celular.

## Menu

| Página | Conteúdo |
|---|---|
| Início | Apresentação, avisos e publicações recentes. |
| Área do Aluno | Abre em TCC; inclui estágio, aproveitamento de estudos, concessão de ênfase e atividade extracurricular (ATV100). A página de TCC também encaminha aos links úteis para estudantes. |
| Curso | Sobre o curso, matriz, PPC, programas das disciplinas e avaliação; links oficiais para o DEELT. |
| Colegiado | Apresentação e membros, agenda de reuniões, atas, resoluções e NDE. |
| Notícias | Avisos, notícias e editais em cartões com busca local por texto e intervalo de datas de publicação. |
| Contato | Informações de atendimento e canais institucionais. |

Notícias e editais também são acessíveis pela página inicial. As três seções com submenu mantêm a navegação lateral no desktop; no celular, o painel pode ser aberto pelo nome da seção.

## Orientações e solicitações

Em cada procedimento, reunir os requisitos, o que o aluno precisa fazer, o formulário, o canal de envio e a norma aplicável. Em aproveitamento de estudos, identificar os formulários de aproveitamento e de autorização prévia pelos nomes. Em **Após a defesa**, orientar a folha de aprovação, a ficha catalográfica e o depósito no BDTCC. Divulgar apenas defesas e dados autorizados.

## Dados e documentos

O site é gerado estaticamente com Astro e é compatível com GitHub Pages. Os exemplos locais ficam em [`src/data/site.js`](./src/data/site.js), separados das páginas e dos componentes, e estão identificados como **Dados de demonstração**. A navegação e os links institucionais compartilhados ficam em [`src/data/navigation.js`](./src/data/navigation.js). Não há planilha nem serviço externo conectado.

As datas de publicação em `notices` e `publications` usam o formato `AAAA-MM-DD`; a busca por período inclui as datas inicial e final.

Quando houver documentos oficiais, incluir o endereço direto do arquivo no registro correspondente e marcar documentos restritos com **Requer conta UFOP**. Enquanto um endereço não estiver configurado, o item aparece como demonstração sem link quebrado.

Na área do Colegiado, apresentação e membros compartilham uma página; agenda, atas, resoluções e NDE têm páginas próprias. Os campos `members`, `nde` e `meetings` em `src/data/site.js` alimentam os cartões, a agenda e as atas; estas reutilizam os mesmos registros de documentos. O campo opcional `photo` aceita o endereço de uma foto autorizada; sem ele, o cartão mostra uma ilustração. `initialMeetingMonth` define o mês inicial do calendário no formato `AAAA-MM`. A matriz e as ementas apontam para o mesmo acervo indicado pelo site anterior; confirme sua vigência.

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
