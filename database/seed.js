/**
 * Seed the database
 */
const moment = require('moment');

const { Reservation } = require('./reservation');
const { Restaurant } = require('./restaurant');
const { db } = require('./index');

/**
 * From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * The maximum is exclusive and the minimum is inclusive
 * @param {number} minimum
 * @param {number} maximum
 */
function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);

  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 *
 */
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
  // Time interval restaurant expects between bookings
  const timeIntervals = [5, 10, 15, 30];

  // Other useful constants
  const minSeating = 15;
  const maxSeating = 100;
  const minPartySize = 4;
  const maxPartySize = 10;

  // create 100 restaurants and 2 to 10 reservations per restaurant
  const restaurants = [];
  const reservations = [];

  for (let i = 0; i < 100; i += 1) {
    const newRestaurant = {
      _id: i,
      time_intervals: timeIntervals[getRandomInt(0, timeIntervals.length)],
      max_seating: getRandomInt(minSeating, maxSeating + 1), // +1 because of getRandomInt
      max_party_size: getRandomInt(minPartySize, maxPartySize + 1), // +1 because of getRandomInt
      open_time: openTimes[getRandomInt(0, openTimes.length)],
      close_time: closeTimes[getRandomInt(0, closeTimes.length)],
      max_time_range: getRandomInt(7, 365),
    };
    restaurants.push(newRestaurant);

    const numReservations = getRandomInt(2, 10);

    for (let j = 0; j < numReservations; j += 1) {
      // use Moment.js to create valid booking time
      const hourOffset = getRandomInt(0, newRestaurant.close_time - newRestaurant.open_time);
      const minuteOffset = getRandomInt(0, 60);
      const randomTime = moment(newRestaurant.restaurant_open_time)
        .add(hourOffset, 'hour')
        .add(minuteOffset, 'minute');

      reservations.push({
        booking_time: randomTime,
        party_qty: getRandomInt(1, newRestaurant.max_party_size),
        restaurant_id: i,
      });
    }
  }

  Reservation.insertMany(reservations, function (err) {
    Restaurant.insertMany(restaurants, function (err) {
      db.close();
    })
  });

  // use mongoose models to insert/save
  // restaurants.forEach((restaurant) => {
  //   new Restaurant(restaurant).save();
  // });
  //
  // reservations.forEach((reservation) => {
  //   new Reservation(reservation).save();
  // });
}

seedReservations();
