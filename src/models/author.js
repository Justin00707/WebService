const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

class Author extends Model {}

Author.init({
  // Model attributes are defined here
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
  // Sequelize instance and other model options are defined here
  sequelize,
  modelName: 'Author',
  tableName: 'authors', // Optional: explicitly specify the table name if different
  timestamps: false    // Optional: set true if you want Sequelize to handle createdAt & updatedAt
});

module.exports = Author;
