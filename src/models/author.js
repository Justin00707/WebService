const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajustez le chemin au besoin

class Author extends Model {}

// Initialise le modèle "Author" avec ses attributs
Author.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  biographie: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,            // Instance Sequelize à utiliser
  modelName: 'Author', // Nom du modèle
  tableName: 'authors', // Nom de la table (optionnel, précisez si différent)
  timestamps: false    // Indique si Sequelize doit gérer createdAt et updatedAt (optionnel)
});

module.exports = Author; // Exporte le modèle "Author" pour une utilisation ultérieure
