🚀 Tela de Login Interativa
Uma tela de login moderna e responsiva desenvolvida em HTML, CSS (nativo e customizado) e JavaScript puro, utilizando a estrutura do Bootstrap 5 para estilização e componentes modais.

Este projeto foca em uma experiência de usuário aprimorada, destacando-se por seu fundo gradiente animado (azul, amarelo e verde) e o uso eficiente de modals (janelas pop-up) para feedback de login e recuperação de senha.

✨ Funcionalidades Principais
Fundo Animado: Efeito de fundo gradiente animado (linear-gradient) em loop infinito, criando um visual dinâmico e moderno.

Design Responsivo: Layout totalmente adaptável a diferentes tamanhos de tela, garantido pela integração do Bootstrap 5.

Componente de Cartão: O formulário de login é apresentado em um cartão branco centralizado, com sombra, para maior destaque.

Modais Interativas:

Sucesso de Login: Exibe um modal de confirmação com os dados (Login e Password) inseridos pelo usuário, simulando um processamento bem-sucedido.

Recuperação de Senha: Apresenta um modal específico para a recuperação de senha, solicitando um e-mail.

Validação Simples: Uso do atributo required nos campos do formulário para garantir o preenchimento antes da submissão.

🛠️ Tecnologias Utilizadas
O projeto foi construído apenas com tecnologias front-end e não requer back-end para a sua execução, focando na demonstração visual e de interação.

HTML5: Estrutura e marcação da página.

CSS3: Estilização personalizada, incluindo a animação @keyframes do fundo.

JavaScript: Lógica para manipulação do formulário e controle dos modals do Bootstrap.

Bootstrap 5.3.2: Framework CSS/JS para layout e componentes prontos (modals, formulário, botões).

🐳 Deployment com Docker
Como o projeto é estático (HTML/CSS/JS), ele será servido dentro de um contêiner Nginx leve, ideal para ambientes de produção e desenvolvimento.

Dockerfile
Crie um arquivo chamado Dockerfile (sem extensão) na raiz do seu projeto:

Dockerfile

# Usa a imagem base oficial do Nginx em sua versão mais leve (alpine)
FROM nginx:alpine

# Copia todos os arquivos estáticos do projeto para o diretório de serviço do Nginx
COPY . /usr/share/nginx/html

# Define a porta 80 como a porta a ser exposta pelo contêiner
EXPOSE 80
Instruções de Containerização
Siga os passos a seguir para construir a imagem e executar o contêiner:

1. 🏗️ Construir a Imagem
Execute o comando de build no terminal. O nome da imagem será tela-login.

Bash

docker build -t tela-login:latest .
2. 🏃 Executar o Contêiner
Execute o contêiner em modo detached (-d), mapeando a porta interna 80 do Nginx para a porta 8080 do seu host (máquina local).

Bash

docker run -d -p 8080:80 --name login-app tela-login:latest
3. ✅ Acessar o Projeto
Acesse a tela de login no seu navegador:

http://localhost:8080
4. 🛑 Parar e Remover
Para parar e limpar o contêiner:

Bash

docker stop login-app
docker rm login-app
💻 Execução Local
Caso não queira usar o Docker, você pode executar o projeto diretamente no seu navegador:

Clone o Repositório:

Bash

git clone https://www.youtube.com/shorts/3mMG25WHLkU
Abra o Arquivo: Abra o arquivo HTML (por exemplo, index.html) em qualquer navegador.

📄 Estrutura do Código
O projeto é contido em um único arquivo HTML, index.html, que inclui:

As importações do Bootstrap (CSS e JS).

O bloco de tags <style> com o CSS customizado e a animação do fundo.

Os elementos visuais do formulário e os componentes modal.

O bloco de tags <script> com a lógica JavaScript para manipulação dos eventos e modais.

👨‍💻 Próximos Passos (Sugestões de Melhoria)
Integração com Backend: Conectar o formulário a um endpoint real de autenticação.

Feedback de Erro: Adicionar mensagens de alerta para credenciais incorretas.

Refatoração CSS: Mover o CSS customizado para um arquivo externo (style.css).

Autor: @rbarcellos84 - Rodrigo de Andrade Barcellos

