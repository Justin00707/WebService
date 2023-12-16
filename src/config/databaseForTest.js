// Importe la classe Sequelize depuis le module sequelize
const { Sequelize } = require('sequelize');

// Initialise une instance Sequelize pour se connecter à la base de données MySQL
const sequelize = new Sequelize({
  dialect: 'mysql', // Type de base de données (MySQL dans ce cas)
  host: 'b00zxs2ee3avwueqlute-mysql.services.clever-cloud.com', // Hôte de la base de données
  username: 'ujxuwo0cstoxen9g', // Nom d'utilisateur de la base de données
  password: 'fpedvDwNdd9Tqu4najqf', // Mot de passe de la base de données
  database: 'b00zxs2ee3avwueqlute', // Nom de la base de données
  logging: false, // Désactive l'enregistrement des requêtes SQL
});

// Exporte l'instance Sequelize configurée pour l'utiliser dans d'autres parties de l'application
module.exports = sequelize;
