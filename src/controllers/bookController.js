const Book = require('../models/book');
const { bookValidationSchema } = require('../validation/bookValidation');

// Obtient tous les livres depuis la base de données
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtient un livre par son identifiant depuis la base de données
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Livre introuvable.');
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Crée un nouveau livre en utilisant les données reçues dans la requête
exports.createBook = async (req, res) => {
  try {
    // Si vous avez un schéma de validation pour les livres, valide les données reçues
    const { error } = bookValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const book = await Book.create(req.body);
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Met à jour les informations d'un livre existant en utilisant les données reçues dans la requête
exports.updateBook = async (req, res) => {
  try {
    // Si vous avez un schéma de validation pour les livres, valide les données reçues
    const { error } = bookValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Livre introuvable.');

    await book.update(req.body);
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Supprime un livre de la base de données
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Livre introuvable.');

    await book.destroy();
    res.send({ message: 'Livre supprimé avec succès.' });
  } catch (error) {
    res.status(400).send(error);
  }
};
