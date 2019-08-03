const fs = require('fs');
const faker = require('faker');

const dataGenerator = require('./dataGenerator');

const generateRestaurant = dataGenerator.generateRestaurant;
const generateReservation = dataGenerator.generateReservation;
const generateContactInfo = dataGenerator.generateContactInfo;
faker.seed(123);

const makeRestaurantsArray = (size) => {
  const restaurants = [];
  for (let i = 0; i < size; i++) {
    const restaurant = i + ',' + generateRestaurant() +  ', \n';
    restaurants.push(restaurant);
  }
  return restaurants;
}

const makeReservationsArray = (restaurants) => {
  const reservations = [];
  for (let i = 0; i < restaurants.length; i++) {
    const numReservations = faker.random.number({min:12, max:40});
    for (let j = 0; j < numReservations; j++) {
      const reservation = j + ',' + generateReservation(restaurants[i]) + ', \n';
      reservations.push(reservation);
    }
  }
  return reservations;
}

const makeContactsArray = (reservations) => {
  const contacts = [];
  for (let i = 0; i < reservations.length; i++) {
    const reservation_Id = reservations[i].split(',')[0];
    let contact = generateContactInfo();
    contact = i + ',' + contact +  ',' + reservation_Id + ' \n'
    contacts.push(contact);
  }
  // console.log('contacts array: ', contacts);
  return contacts;
}

module.exports.makeRestaurantsArray = makeRestaurantsArray;
module.exports.makeReservationsArray = makeReservationsArray;
module.exports.makeContactsArray = makeContactsArray;
