FROM node:23-alpine
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code du backend
COPY . .

EXPOSE 5000
CMD ["node", "server.js"]
