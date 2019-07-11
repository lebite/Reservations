const request = require('supertest');
const app = require('../../server/app');

/**
 * @jest-environment node
 */
describe('Server should respond to', () => {
  test('GET /:restaurant_id/reservations with ', (done) => {
    request(app).get('/1/reservations').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('GET /:restaurant_id/reservations/all with ', (done) => {
    request(app).get('/1/reservations/all').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('GET /:restaurant_id/reservations/count with ', (done) => {
    request(app).get('/1/reservations/count').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('POST /:restaurant_id/reservations with ', (done) => {
    request(app).post('/1/reservations').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
