const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'b00zxs2ee3avwueqlute-mysql.services.clever-cloud.com', 
  username: 'ujxuwo0cstoxen9g', 
  password: 'fpedvDwNdd9Tqu4najqf', 
  database: 'b00zxs2ee3avwueqlute', 
  logging: false, 
});

module.exports = sequelize;

