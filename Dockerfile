# Utilisez une image parente officielle de Node.js version 14
FROM node:14

# Définissez le répertoire de travail dans le conteneur sur /usr/src/app
WORKDIR /usr/src/app

# Copiez d'abord package.json et package-lock.json pour tirer parti du cache Docker
COPY package*.json ./

# Installez les dépendances spécifiées dans package.json
RUN npm install

# Copiez le reste du code source de votre application depuis votre hôte vers le système de fichiers de l'image
COPY . .

# Si votre server.js se trouve dans le dossier src, vous devez changer le WORKDIR à /usr/src/app/src
WORKDIR /usr/src/app/src

# Rendez le port 8080 disponible pour le monde extérieur à ce conteneur
EXPOSE 8080

# Définissez une variable d'environnement pour indiquer que l'application s'exécute en mode production
ENV NODE_ENV=production

# Exécutez l'application lorsque le conteneur est lancé
CMD ["node", "server.js"]
