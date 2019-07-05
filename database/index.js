const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation_module');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let reservationSchema = mongoose.Schema({
  _id: 'number',
  bookings: [{ booking_time: 'date', party_qty: 'number' }],
  time_intervals: 'number',
  max_seating: 'number',
  max_party_size: 'number',
  restaurant_open_time: 'number',
  restaurant_close_time: 'number',
  restaurant_id: 'number',
});

let Reservation = mongoose.model('Reservation', reservationSchema);
