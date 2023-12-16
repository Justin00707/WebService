const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware pour l'authentification par jeton JWT
exports.authenticate = (req, res, next) => {
  try {
    // Récupère le jeton JWT à partir de l'en-tête de la requête
    const token = req.headers.authorization.split(' ')[1];

    // Décode le jeton JWT en utilisant la clé secrète JWT (JSON Web Tokens)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Stocke les données de l'utilisateur décodées dans l'objet req pour une utilisation ultérieure
    req.userData = decoded;

    // Passe à la prochaine fonction middleware ou route
    next();
  } catch (error) {
    // En cas d'échec de l'authentification, renvoie une réponse d'erreur avec le statut 401 (non autorisé)
    return res.status(401).json({
      message: 'L\'authentification a échoué'
    });
  }
};


