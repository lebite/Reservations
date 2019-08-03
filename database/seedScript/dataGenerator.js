const faker = require('faker');
faker.seed(123);

function generateRestaurant() {
  const open = faker.random.number({min:9, max:12});
  const close = open + 8;
  const timeSlot1 = open;
  const timeSlot2 = open + 2; 
  const timeSlot3 = open + 4;
  const timeSlot4 = open + 6;
  const max_occupancy = faker.random.number({min:55, max:102});
  const min_party_size = faker.random.number({min:2, max:8})
  const restaurant = `${open},${close},${timeSlot1},${timeSlot2},${timeSlot3},${timeSlot4},${max_occupancy},${min_party_size}`;
  return restaurant;
}

function generateReservation(restaurant) {
  const date = faker.date.between('2019-05-28', '2019-08-28');
  const array = restaurant.split(',');
  const restaurant_id = array[0];
  const index = faker.random.number({min:3, max:6});
  const timeSlot = array[index];
  const party_size = faker.random.number({min:5, max:10});
  const reservation = [date, party_size, timeSlot, restaurant_id].join(); // date, party_size, timeSlot, restaurant_id
  return reservation;
}

function generateContactInfo() {
  const first = faker.name.firstName();
  const last = faker.name.lastName();
  const email = faker.internet.email();
  // console.log(email);
  const phone = faker.phone.phoneNumberFormat();
  const request = faker.lorem.sentence();
  const occasion = faker.lorem.sentence();
  // console.log(occasion);
  const contact = [first, last, email, phone, request, occasion].join();
  // console.log('contact', contact);
  return contact;
}

module.exports.generateRestaurant = generateRestaurant;
module.exports.generateReservation = generateReservation;
module.exports.generateContactInfo = generateContactInfo; 
