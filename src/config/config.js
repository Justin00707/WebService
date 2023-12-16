// config/config.js

// Obtient la valeur de l'environnement NODE_ENV ou utilise 'development' par défaut
const env = process.env.NODE_ENV || 'development';

// Charge la configuration appropriée depuis le fichier config.json en fonction de l'environnement
const config = require('./config.json')[env];

// Exporte la configuration pour qu'elle puisse être utilisée ailleurs dans l'application

module.exports = config;



