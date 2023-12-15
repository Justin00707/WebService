const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'localhost', 
  username: 'root', 
  password: 'Justin333', 
  database: 'wow', 
  logging: false, 
});

module.exports = sequelize;

