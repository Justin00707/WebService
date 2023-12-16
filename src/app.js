const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Importez les options de configuration
const corsOptions = require('./config/corsConfig').options;
const jwtConfig = require('./config/jwtConfig');

// Importez les routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes'); 
const authorRoutes = require('./routes/authorRoutes');

// Initialisez l'application Express
const app = express();

// Appliquez CORS avec les options importées
app.use(cors(corsOptions));

// Middleware pour l'analyse des corps JSON
app.use(express.json());

// Utilisez les routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/authors', authorRoutes);

// Middleware de vérification JWT (exemple d'utilisation, modifiez selon vos besoins réels)
app.use((req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('Aucun jeton fourni');

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error('Jeton Bearer mal formé');

    req.user = jwt.verify(token, jwtConfig.secret);
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Jeton expiré' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Jeton invalide' });
    } else {
      return res.status(401).json({ message: 'L\'authentification a échoué' });
    }
  }
});

// Middleware de gestion des erreurs
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Erreur interne du serveur',
    },
  });
});

module.exports = app;
