const request = require('supertest');
const app = require('../app'); // Adjust the path according to your project structure

describe('GET /api/authors', () => {
    it('retrieves a list of authors', async () => {
      const response = await request(app).get('/api/authors');
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      // Add additional assertions as needed
    });
  });


  describe('POST /api/authors', () => {
    it('creates a new author with valid data', async () => {
      const newAuthor = {
        nom: 'Author Name',
        biographie: 'Author biography'
      };
  
      const response = await request(app)
        .post('/api/authors')
        .send(newAuthor);
  
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('id');
      // Add additional assertions as needed
    });
  });
  
  