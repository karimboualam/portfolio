# Étape 1 : Utiliser une image Node.js de base
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Ajouter la variable d'environnement pour ignorer les vérifications de React
ENV SKIP_PREFLIGHT_CHECK=true

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste du code dans le conteneur
COPY . .

# Étape 6 : Construire l'application
RUN npm run build

# Étape 7 : Servir l'application avec un serveur HTTP statique
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Exposer le port 3000
EXPOSE 3000
