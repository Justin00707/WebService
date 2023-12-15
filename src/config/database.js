require('dotenv').config();

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_NAME || 'b00zxs2ee3avwueqlute', // Database name
    process.env.DB_USER || 'ujxuwo0cstoxen9g',     // Database username
    process.env.DB_PASS || 'fpedvDwNdd9Tqu4najqf', // Database password
    {
      host: process.env.DB_HOST || 'b00zxs2ee3avwueqlute-mysql.services.clever-cloud.com',
      dialect: 'mysql'
    }
);

// Import models directly, without invoking them as functions
const Author = require('../models/author');
const Book = require('../models/book');
const User = require('../models/user');

// If you have associations, ensure they are setup after importing the models
// Example: setupAssociations(Author, Book, User);

module.exports = sequelize;
