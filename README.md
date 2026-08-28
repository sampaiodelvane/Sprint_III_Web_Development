Jovi V70 - Central de Conteúdo

Projeto desenvolvido para a Sprint 3 da turma ESPT/2026 -  disciplina de Web Development da FIAP.

Nas sprints anteriores, desenvolvemos o protótipo da plataforma da câmera Jovi V70 utilizando HTML, CSS e JavaScript. Nesta etapa, o projeto foi migrado para React com Vite, mantendo o visual e as funcionalidades principais do protótipo original.

A versão anterior continua disponível na pasta /prototipo.

Sobre o projeto

A Jovi V70 é uma câmera com sistema de armazenamento inteligente. A aplicação simula uma central onde o usuário pode visualizar e acompanhar o conteúdo armazenado pela câmera.

A página possui:

Cabeçalho e menu de navegação;
Área de apresentação da câmera;
Tela de login;
Informações sobre o armazenamento;
Filtros para visualização das imagens;
Galeria de fotos;
Foto do dia;
Estatísticas dos arquivos armazenados;
Histórico de acessos.
Tecnologias utilizadas
React 19
Vite 8
JavaScript
HTML5
CSS3
localStorage
Git e GitHub
Vercel

O projeto foi desenvolvido em JavaScript com JSX.

Como executar

É necessário ter o Node.js instalado.

Para verificar a instalação:

node --version

Depois de baixar o projeto, abra a pasta pelo terminal e instale as dependências:

npm install

Para iniciar o projeto:

npm run dev (Ou se houver restrições na execução de scripts: npm.cmd run dev)

O Vite mostrará no terminal o endereço para acessar a aplicação, normalmente:

http://localhost:5173/

Para gerar a versão de produção:

npm run build

Para testar o build localmente:

npm run preview
Login para teste

A aplicação possui um login simples para liberar o conteúdo da câmera.

Usuário: opticode
Senha: 1234

O login foi criado apenas para fins acadêmicos e não utiliza banco de dados ou sistema real de autenticação.

Os dados necessários são enviados aos componentes através de props.

Recursos utilizados na Sprint
Durante a migração para React foram utilizados os principais conceitos trabalhados na disciplina:
Recurso	Aplicação
Componentes funcionais	Componentes da pasta src/components
Props	Comunicação entre os componentes
Relação pai e filho	App, Galeria, CardFoto, Filtros e BotaoFiltro
Módulos	calculos.js e acessos.js
localStorage	Registro de visitas e último acesso
Math	Cálculos, arredondamentos e sorteio da foto do dia
CSS	Estilos, filtros e comportamento visual do login
Testes de UX e UI

A documentação dos testes está disponível na pasta /docs:

teste.md

Esses arquivos foram utilizados para organizar os testes de usabilidade e interface realizados no projeto.

Uso de Inteligência Artificial

Durante o desenvolvimento, utilizamos o Claude (Anthropic) como ferramenta de apoio.
A IA foi usada principalmente para tirar dúvidas sobre React, auxiliar na migração do projeto anterior, identificar erros no código e apoiar a organização da documentação. As alterações sugeridas foram revisadas e testadas pelo grupo antes de serem adicionadas ao projeto.

Links

GitHub:
https://github.com/sampaiodelvane/Sprint_III_Web_Development.git

Vercel:
https://sprint-iii-web-development.vercel.app


NTEGRANTES DO GRUPO - OptiCode

Delvane S. Sampaio Oliveira – RM: 571825
Gabriel Brito Braga – RM: 570467
Isadora Basso Asseiro – RM: 569323
Murilo Camilo da Silva – RM: 571631
Murilo Castro Chialastri – RM: 569382