const Author = require('../models/author');
// Inclure le schéma de validation si vous en avez un pour l'auteur
// const { authorValidationSchema } = require('../validation/authorValidation');

class AuthorController {
  static async getAllAuthors(req, res) {
    try {
      // Récupère tous les auteurs depuis la base de données
      const authors = await Author.findAll();
      res.send(authors);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getAuthorById(req, res) {
    try {
      // Récupère un auteur par son identifiant depuis la base de données
      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Auteur non trouvé.');
      res.send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async createAuthor(req, res) {
    try {


      // Crée un nouvel auteur en utilisant les données reçues dans la requête
      const author = await Author.create(req.body);
      res.status(201).send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async updateAuthor(req, res) {
    try {
     

      // Recherche un auteur par son identifiant
      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Auteur non trouvé.');

      // Met à jour les informations de l'auteur avec les données reçues dans la requête
      await author.update(req.body);
      res.send(author);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteAuthor(req, res) {
    try {
      // Recherche un auteur par son identifiant
      const author = await Author.findByPk(req.params.id);
      if (!author) return res.status(404).send('Auteur non trouvé.');

      // Supprime l'auteur de la base de données
      await author.destroy();
      res.send({ message: 'Auteur supprimé avec succès.' });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = AuthorController;
