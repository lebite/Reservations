/**
 * @jest-environment node
 */
jest.mock('mongoose');
jest.mock('../../database/index', () => ({
  Restaurant: {
    find: jest.fn(() => [{ _id: 1 }]),
  },
  Reservation: {
    find: jest.fn(() => [{ restaurant_id: 1 }]),
    count: jest.fn(() => 1),
  },
}));

const request = require('supertest');
const server = require('../../server/app');

const { Restaurant, Reservation } = require('../../database/index');

describe('Server should respond to', () => {
  test('GET /:restaurant_id/reservations with 200 status code', (done) => {
    const restaurant = { _id: 1 };
    const reservations = [{ restaurant_id: 1 }];
    Restaurant.find.mockImplementation((q, cb) => cb(null, [restaurant]));
    Reservation.find.mockImplementation((q, cb) => cb(null, reservations));

    return request(server).get('/1/reservations').expect(200, done);
  });

  test('GET /:restaurant_id/reservations with restaurant info and upcoming bookings', (done) => {
    const restaurant = { _id: 1 };
    const reservations = [{ restaurant_id: 1 }];
    Restaurant.find.mockImplementation((q, cb) => cb(null, [restaurant]));
    Reservation.find.mockImplementation((q, cb) => cb(null, reservations));

    return request(server).get('/1/reservations').expect(200, {
      restaurant_id: '1',
      restaurant_information: restaurant,
      bookings: reservations,
    }, done);
  });

  test('GET /:restaurant_id/reservations/all with restaurant and bookings info', (done) => {
    const restaurant = { _id: 1 };
    const reservations = [{ restaurant_id: 1 }];
    Reservation.find.mockImplementation((q, cb) => cb(null, reservations));

    request(server).get('/1/reservations/all').expect(200, {
      restaurant_id: '1',
      restaurant_information: restaurant,
      bookings: reservations,
    }, done);
  });

  test('GET /:restaurant_id/reservations/count with bookings count', (done) => {
    Reservation.count.mockImplementation((q, cb) => cb(null, 1));

    request(server).get('/1/reservations/count').expect(200, { bookings_count: 1 }, done);
  });

  test('POST /:restaurant_id/reservations with bokings info', (done) => {
    request(server).post('/1/reservations').expect(200, done);
  });
});
