// models/associations.js
const Author = require('./author');
const Book = require('./book');
const User = require('./user');

module.exports = (sequelize) => {
  // Assuming your models are already initialized with sequelize.define
  Author.hasMany(Book, { foreignKey: 'auteurId' });
  Book.belongsTo(Author, { foreignKey: 'auteurId' });

  // Include other associations here if needed

  // No need to export the models here, as they will be exported individually from their files
};
