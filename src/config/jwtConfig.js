// Importe le module dotenv pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Exporte un objet de configuration pour la gestion des jetons JWT (JSON Web Tokens)
module.exports = {
  secret: process.env.JWT_SECRET || '6vQ5ZQGpDwjH92MC97wbQqttZDiRJn372pdBOUnjJdQ='
};
