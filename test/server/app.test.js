const request = require('supertest');
const app = require('../../server/app');

/**
 * @jest-environment node
 */
describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/1/reservations').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
