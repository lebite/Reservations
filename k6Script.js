/* eslint-disable prefer-template */
import http from "k6/http";
import { check } from "k6";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js';
// import moment from 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/es-us.js';

export const options = {
  // stages: [
  //   { duration: '30s', target: 20 },
  //   { duration: '1m30s', target: 10 },
  //   { duration: '20s', target: 0 },
  // ],
  vus: 10,
  duration: '40s',
};

export default function () {
  // const randomDate = faker.date.between('2019-5-28', '2019-8-28');
  // const date = moment(randomDate, 'YYYY-M-D').format('YYYY-MM-DD').toString( );
  // const dateString = date.split('-').join('');
// find empty reservations
  const reservation = faker.random.number({ min: 0, max: 23513290 });

  const res1 = http.get(`http://localhost:3002/reservations/${reservation}`);

  console.log('Response time was ' + String(res1.timings.duration) + 'ms');
  check(res1, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 50,
  });

  // create reservation
  const restaurantId = faker.random.number({ min: 0, max: 100000 });
  const res2 = http.post(`http://localhost:3002/${restaurantId}/reservations`);

  check(res2, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 100,
  });
}
