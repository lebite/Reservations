const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation_module');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const restaurantSchema = mongoose.Schema({
  _id: Number,
  time_intervals: Number,
  max_seating: Number,
  max_party_size: Number,
  restaurant_open_time: { hour: Number, minute: Number },
  restaurant_close_time: { hour: Number, minute: Number },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const reservationSchema = mongoose.Schema({
  booking_time: Date,
  party_qty: Number,
  restaurant_id: Number,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Restaurant = Restaurant;
module.exports.Reservation = Reservation;
