# Étape 1 : Utiliser une image Node.js de base
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tout le code du projet (y compris `public`)
COPY . .

# Étape 6 : Construire l'application
RUN npm run build

# Étape 7 : Installer le serveur statique pour servir les fichiers construits
RUN npm install -g serve

# Commande pour démarrer le serveur
CMD ["serve", "-s", "build", "-l", "3000"]

# Exposer le port 3000
EXPOSE 3000
