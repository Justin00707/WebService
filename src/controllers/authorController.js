const Author = require('../models/author');
// Include validation schema if you have one for author
// const { authorValidationSchema } = require('../validation/authorValidation');

class AuthorController {
  static async getAllAuthors(req, res) {
    try {
      const authors = await Author.findAll();
      res.send(authors);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getAuthorById(req, res) {
    try {
      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Author not found.');
      res.send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async createAuthor(req, res) {
    try {
      // If you have validation schema
      // const { error } = authorValidationSchema.validate(req.body);
      // if (error) return res.status(400).send(error.details[0].message);

      const author = await Author.create(req.body);
      res.status(201).send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async updateAuthor(req, res) {
    try {
      // If you have validation schema
      // const { error } = authorValidationSchema.validate(req.body);
      // if (error) return res.status(400).send(error.details[0].message);

      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Author not found.');

      await author.update(req.body);
      res.send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Author not found.');

      await author.destroy();
      res.send({ message: 'Author deleted successfully.' });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = AuthorController;
