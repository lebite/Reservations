import http from "k6/http";
import { check, sleep } from "k6";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.js';

export const options = {
  // stages: [
  //   { duration: '30s', target: 20 },
  //   { duration: '1m30s', target: 10 },
  //   { duration: '20s', target: 0 },
  // ],
  vus: 10,
  duration: '10s',
};

export default function () {
  // const randomDate = faker.date.between('2019-05-28', '2019-08-28').toLocaleDateString();
  // const dateString = randomDate.split('-').join('');

  // const reservationId1 = faker.random.number({ min: 0, max: 23499417 });
  // const res1 = http.get(`http://localhost:3002/${reservationId1}/reservations?reserved_date=${parseInt(dateString)}`);

  // check(res1, {
  //   'status was 200': r => r.status === 200,
  //   'transaction time OK': r => r.timings.duration < 100,
  // });

  const restaurantId2 = faker.random.number({ min: 0, max: 100000 });
  const res2 = http.post(`http://localhost:3002/${restaurantId2}/reservations`);

  check(res2, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 100,
  });
}
