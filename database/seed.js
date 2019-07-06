/**
 * Seed the database
 */
const faker = require('faker');
const { Reservation } = require('./index');

function seedReservations() {
  // create some dummy reservations
  let reservations = [];

  for (let i = 0; i < 100; i += 1) {
    let max_seating = faker.random.number({ min: 15, max: 100 });
    let max_party_size = faker.random.number({ min: 4, max: 10 });
    let restaurant_open_time = faker.random.arrayElement([830, 900, 930, 1000, 1030, 1100]);
    let restaurant_close_time = faker.random.arrayElement([1800, 1830, 1900, 1930, 2000]);

    const numReservations = faker.random.number({ min: 2, max: 10 });
    for (let j = 0; j < numReservations; j += 1) {
      reservations.push({
        bookings: [{
          booking_time: faker.date.between('2019-07-10', '2019-07-17'),
          party_qty: faker.random.number(max_party_size),
        }],
        time_intervals: 15,
        max_seating,
        max_party_size,
        restaurant_open_time,
        restaurant_close_time,
        restaurant_id: i,
      });
    }
  }

  // use the Reservation model to insert/save
  reservations.forEach((reservation) => {
    const newReservation = new Reservation(reservation);
    newReservation.save();
  });
}

seedReservations();
