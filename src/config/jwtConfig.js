// Importe le module dotenv pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Exporte un objet de configuration pour la gestion des jetons JWT (JSON Web Tokens)
module.exports = {
  secret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMjczOTMyOSwiZXhwIjoxNzAyOTk4NTI5fQ.1ZS-i33EAUXdYa-w55aaUQwT1E5aXPAwAbPbBI5cXoE'
};
