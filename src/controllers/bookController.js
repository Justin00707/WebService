const Book = require('../models/book');
const { bookValidationSchema } = require('../validation/bookValidation');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Book not found.');
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createBook = async (req, res) => {
  try {
    const { error } = bookValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const book = await Book.create(req.body);
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { error } = bookValidationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Book not found.');

    await book.update(req.body);
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).send('Book not found.');

    await book.destroy();
    res.send({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(400).send(error);
  }
};
