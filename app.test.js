const request = require('supertest');
const app = require('./app');

describe('Todos API', () => {
    it('GET /todos', () => { 
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)).toBe(true);
            });
    });

    it('GET /todos/id', () => { });

    it('GET /todos/id -- 404 if not found', () => { });

    it('POST /todos', () => { });

    it('GET /todos -- validates request body', () => { });
})
