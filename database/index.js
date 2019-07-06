const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation_module');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const reservationSchema = mongoose.Schema({
  bookings: [{ booking_time: Date, party_qty: Number }],
  time_intervals: Number,
  max_seating: Number,
  max_party_size: Number,
  restaurant_open_time: Number,
  restaurant_close_time: Number,
  restaurant_id: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Reservation = Reservation;
