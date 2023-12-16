// Importe le module dotenv pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Exporte un objet de configuration pour la gestion des jetons JWT (JSON Web Tokens)
module.exports = {
  secret: process.env.JWT_SECRET // La clé secrète JWT est obtenue à partir de la variable d'environnement JWT_SECRET
};
