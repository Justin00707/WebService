const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/databaseForTest'); // adjust the path as needed

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
      isEmail: true // validates email format
    }
  },
  motDePasse: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [8] // minimum length of 8 characters
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'utilisateur'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Users', // the name of the table
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
