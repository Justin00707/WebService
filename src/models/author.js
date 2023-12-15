const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

class Author extends Model {}

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
    allowNull: true // Can be null according to your SQL design
  }
}, {
  sequelize,
  modelName: 'Author', // The name of the table
});

module.exports = Author;
