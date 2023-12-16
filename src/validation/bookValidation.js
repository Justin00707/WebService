const Joi = require('joi');

// Définit un schéma de validation pour un objet livre
exports.bookValidationSchema = Joi.object({
  title: Joi.string().min(3).required(), // Le titre doit être une chaîne d'au moins 3 caractères et est requis.
  authorId: Joi.number().integer().required(), // L'ID de l'auteur doit être un nombre entier et est requis.
  publicationYear: Joi.number().integer().min(1900).max(new Date().getFullYear()), // L'année de publication doit être un nombre entier, supérieur ou égal à 1900 et inférieur ou égal à l'année en cours.
  genre: Joi.string().required(), // Le genre doit être une chaîne et est requis.
});
