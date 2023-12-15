const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/databaseForTest'); // Ajustez le chemin si nécessaire

class Livre extends Model {} // 'Book' translated to 'Livre' in French

Livre.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titre: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [3] // longueur minimale de 3 caractères
    }
  },
  auteurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Auteurs', // nom de la table des auteurs
      key: 'id'
    }
  },
  annee: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isDate: true // vérifie le format de la date YYYY
    }
  },
  genre: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Livres' // nom de la table
});

module.exports = Livre; // 'Book' translated to 'Livre'
