const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// Définit les routes pour les opérations CRUD liées aux livres
router.get('/', bookController.getAllBooks);    // Obtenir tous les livres
router.post('/', bookController.createBook);    // Créer un nouveau livre
router.get('/:id', bookController.getBookById); // Obtenir un livre par son ID
router.put('/:id', bookController.updateBook);  // Mettre à jour un livre par son ID
router.delete('/:id', bookController.deleteBook); // Supprimer un livre par son ID

module.exports = router;
