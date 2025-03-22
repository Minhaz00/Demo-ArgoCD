const request = require('supertest');
const app = require('./index');

describe('Express App', () => {
  afterAll(done => {
    // Close the server after tests
    app.server.close(done);
  });

  test('GET / should return Hello from MyApp! with 200 status code', async () => {
    const response = await request(app.app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from MyApp! Version 1.0.0');
  });

  test('GET /health should return OK with 200 status code', async () => {
    const response = await request(app.app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('OK');
  });
}); 