/**
 * Seed the database
 */
const faker = require('faker');
const moment = require('moment');

const { Reservation } = require('./index');
const { Restaurant } = require('./index');

function seedReservations() {
  // hardcoded open and close times to choose from
  const openTimes = [
    { hour: 8, minute: 30 },
    { hour: 9, minute: 0 },
    { hour: 9, minute: 30 },
    { hour: 10, minute: 0 },
    { hour: 10, minute: 30 },
    { hour: 11, minute: 0 },
  ];
  const closeTimes = [
    { hour: 18, minute: 30 },
    { hour: 19, minute: 0 },
    { hour: 19, minute: 30 },
    { hour: 20, minute: 0 },
    { hour: 20, minute: 30 },
    { hour: 21, minute: 0 },
  ];

  // create 100 restaurants and 2 to 10 reservations per restaurant
  let restaurants = [];
  let reservations = [];

  for (let i = 0; i < 100; i += 1) {
    const newRestaurant = {
      _id: i,
      time_intervals: 15,
      max_seating: faker.random.number({ min: 15, max: 100 }),
      max_party_size: faker.random.number({ min: 4, max: 10 }),
      restaurant_open_time: faker.random.arrayElement(openTimes),
      restaurant_close_time: faker.random.arrayElement(closeTimes),
    };
    restaurants.push(newRestaurant);

    const numReservations = faker.random.number({ min: 2, max: 10 });
    for (let j = 0; j < numReservations; j += 1) {
      reservations.push({
        booking_time: faker.date.between(
          moment(newRestaurant.restaurant_open_time),
          moment(newRestaurant.restaurant_close_time),
        ),
        party_qty: faker.random.number({ min: 1, max: newRestaurant.max_party_size }),
        restaurant_id: i,
      });
    }
  }

  // use mongoose models to insert/save
  restaurants.forEach((restaurant) => {
    new Restaurant(restaurant).save();
  });

  reservations.forEach((reservation) => {
    new Reservation(reservation).save();
  });
}

seedReservations();
