module.exports = (sequelize) => {
  // Supposons que vous ayez déjà initialisé ces modèles ailleurs avec sequelize.define
  const Author = sequelize.models.Author;
  const Book = sequelize.models.Book;
  const User = sequelize.models.User;

  // Définissez les associations entre les modèles
  // Un auteur peut avoir plusieurs livres, donc "Author hasMany Book"
  Author.hasMany(Book, { foreignKey: 'auteurId' });

  // Un livre appartient à un auteur, donc "Book belongsTo Author"
  Book.belongsTo(Author, { foreignKey: 'auteurId' });

  // Incluez d'autres associations ici si nécessaire

};
