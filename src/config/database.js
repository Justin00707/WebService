require('dotenv').config();

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_DATABASE, // Database name
    process.env.DB_USERNAME, // Database username
    process.env.DB_PASSWORD, // Database password
    {
      host: process.env.DB_HOST, // Database host
      dialect: 'mysql'         // Database dialect
  });

// Models
const Author = require('../models/author')(sequelize);
const Book = require('../models/book')(sequelize);
const User = require('../models/user')(sequelize);

// Associations
const setupAssociations = require('../models/associations');
setupAssociations(sequelize); // Setup model associations

module.exports = sequelize;
