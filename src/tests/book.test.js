// tests/book.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/books', () => {
  it('responds with an array of books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});


// describe('POST /api/books', () => {
//     // Test avec des données de livre valides
//     it('creates a new book with valid data', async () => {
//       const newBook = {
//         title: 'Example Book Title',
//         author: 'Author Name',
//         // Autres champs nécessaires pour un livre
//       };
  
//       const response = await request(app)
//         .post('/api/books')
//         .send(newBook);
  
//       expect(response.statusCode).toBe(201); // 201 pour la création réussie
//       expect(response.body).toHaveProperty('id'); // Vérifiez que le livre créé a un ID
//       // Autres assertions pour vérifier les données du livre
//     });
  
//     // Test avec des données de livre invalides
//     it('does not create a book with invalid data', async () => {
//       const invalidBook = {
//         // Données invalides ou incomplètes
//       };
  
//       const response = await request(app)
//         .post('/api/books')
//         .send(invalidBook);
  
//       expect(response.statusCode).toBe(400); // 400 ou autre code approprié pour les données invalides
//       // Assertions supplémentaires pour vérifier la réponse d'erreur
//     });
//   });