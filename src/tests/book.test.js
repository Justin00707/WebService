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


describe('POST /api/books', () => {
  it('creates a new book with valid data', async () => {
    const newBook = {
      titre: 'New Book Title',
      auteurId: 1, // Ensure this ID exists in your test database
      annee: 2021,
      genre: 'Fiction'
    };

    const response = await request(app)
      .post('/api/books')
      .send(newBook);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
