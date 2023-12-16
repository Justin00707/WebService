const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/databaseForTest'); // Ajustez le chemin au besoin

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true // Valide le format de l'adresse e-mail
    }
  },
  motDePasse: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [8] // Longueur minimale de 8 caractères
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'utilisateur'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Users', // Nom de la table
  hooks: {
    beforeCreate: async (user) => {
      if (user.motDePasse) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.motDePasse = bcrypt.hashSync(user.motDePasse, salt);
      }
    },
    beforeUpdate:async (user) => {
      if (user.motDePasse) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.motDePasse = bcrypt.hashSync(user.motDePasse, salt);
      }
    }
  }
});

module.exports = User;
