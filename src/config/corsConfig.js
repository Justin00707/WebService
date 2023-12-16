// Dans un fichier config/corsConfig.js

// Exporte un objet de configuration pour gérer les paramètres CORS (Cross-Origin Resource Sharing)
module.exports = {
  options: {
    // L'origine autorisée pour les requêtes CORS est définie par la variable d'environnement CORS_ORIGIN
    // Si cette variable n'est pas définie, l'origine par défaut sera '*'
    origin: process.env.CORS_ORIGIN || '*', 

    // Le statut de succès des options CORS est fixé à 200
    optionsSuccessStatus: 200 
  }
};
