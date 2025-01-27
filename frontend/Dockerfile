FROM node:18-alpine

WORKDIR /app

COPY . .

# Instale o servidor HTTP simples
RUN npm install -g serve

EXPOSE 8080

# Use "serve" para hospedar o HTML na porta 8080
CMD ["serve", "-s", ".", "-l", "8080"]
