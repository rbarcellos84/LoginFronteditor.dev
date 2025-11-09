# Estágio 1: Usar uma imagem base oficial do Nginx
# O Nginx é um servidor web leve, perfeito para servir arquivos HTML/CSS/JS estáticos.
FROM nginx:alpine

# Copiar os arquivos estáticos do diretório atual (o projeto de login)
# para o diretório padrão de conteúdo estático do Nginx.
COPY . /usr/share/nginx/html

# Expor a porta 80, que é a porta padrão onde o Nginx irá rodar.
EXPOSE 80