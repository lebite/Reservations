const fs = require('fs');

const createData = require('./createData');

const makeRestaurantsArray = createData.makeRestaurantsArray;
const restaurantsWriter = fs.createWriteStream('./csvData/restaurants.csv');

const makeReservationsArray = createData.makeReservationsArray;
const reservationWriter = fs.createWriteStream('./csvData/reservations.csv');

const makeContactsArray = createData.makeContactsArray;
const contactInfoWriter = fs.createWriteStream('./csvData/contact_info.csv');

function csvWriter(writer, array, callback) {
  let i = array.length;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i % 10000 === 0) {  
        const data = array[i];
        writer.write(data, 'utf8', callback);
      } else {
        if (i % 10000 === 0) {
          console.log(i + ' items remaining');
        }
        const data = array[i];
        ok = writer.write(data, 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

const size = 100;

const restaurants = makeRestaurantsArray(size);
const reservations = makeReservationsArray(restaurants);
const contacts = makeContactsArray(reservations);


csvWriter(restaurantsWriter, restaurants, () => {
  csvWriter(reservationWriter, reservations, () => {
    csvWriter(contactInfoWriter, contacts, () => console.log('finished'))
  })
});

