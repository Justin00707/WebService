const express = require('express');
const authorController = require('../controllers/authorController');
const router = express.Router();

// Définit les routes pour les opérations CRUD liées aux auteurs
router.get('/', authorController.getAllAuthors);    // Obtenir tous les auteurs
router.post('/', authorController.createAuthor);    // Créer un nouvel auteur
router.get('/:id', authorController.getAuthorById); // Obtenir un auteur par son ID
router.put('/:id', authorController.updateAuthor);  // Mettre à jour un auteur par son ID
router.delete('/:id', authorController.deleteAuthor); // Supprimer un auteur par son ID

module.exports = router;
