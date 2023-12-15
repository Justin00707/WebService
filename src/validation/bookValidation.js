const Joi = require('joi');

exports.bookValidationSchema = Joi.object({
  title: Joi.string().min(3).required(),
  authorId: Joi.number().integer().required(),
  publicationYear: Joi.number().integer().min(1900).max(new Date().getFullYear()),
  genre: Joi.string().required(),
});
