// Importe le module dotenv pour charger les variables d'environnement depuis un fichier .env
require('dotenv').config();

// Importe la classe Sequelize depuis le module sequelize
const { Sequelize } = require('sequelize');

// Initialise une instance Sequelize pour se connecter à la base de données
const sequelize = new Sequelize(
    process.env.DB_NAME || 'b00zxs2ee3avwueqlute', // Nom de la base de données
    process.env.DB_USER || 'ujxuwo0cstoxen9g',     // Nom d'utilisateur de la base de données
    process.env.DB_PASS || 'fpedvDwNdd9Tqu4najqf', // Mot de passe de la base de données
    {
      host: process.env.DB_HOST || 'b00zxs2ee3avwueqlute-mysql.services.clever-cloud.com', // Hôte de la base de données
      dialect: 'mysql' // Type de base de données (MySQL dans ce cas)
    }
);

// Importe les modèles de données (author, book, user) directement, sans les appeler en tant que fonctions
const Author = require('../models/author');
const Book = require('../models/book');
const User = require('../models/user');

// Si vous avez des associations entre les modèles, assurez-vous de les configurer après avoir importé les modèles
// Exemple : setupAssociations(Author, Book, User);

// Exporte l'instance Sequelize configurée pour l'utiliser dans d'autres parties de l'application
module.exports = sequelize;
