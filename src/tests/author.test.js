const request = require('supertest');
const app = require('../app'); 

describe('GET /api/Auteurs', () => {
    it('retrieves a list of Auteurs', async () => {
      const response = await request(app).get('/api/Auteurs');
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);

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

    });
  });
  
  