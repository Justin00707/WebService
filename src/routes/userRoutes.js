const express = require('express');
const router = express.Router();


// Exemple de route pour la création d'un nouvel utilisateur
router.post('/create', (req, res) => {
    
    res.status(201).send('Utilisateur créé avec succès');
});

// Exemple de route pour récupérer les informations d'un utilisateur
router.get('/:userId', (req, res) => {
    
    res.status(200).send(`Détails de l'utilisateur ${req.params.userId}`);
});

module.exports = router;
