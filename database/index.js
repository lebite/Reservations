const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation_module');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const restaurantSchema = mongoose.Schema({
  _id: Number,
  time_intervals: Number,
  max_seating: Number,
  max_party_size: Number,
  open_time: { hour: Number, minute: Number },
  close_time: { hour: Number, minute: Number },
  max_time_range: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const reservationSchema = mongoose.Schema({
  booking_time: Date,
  party_qty: Number,
  restaurant_id: Number,
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Restaurant = Restaurant;
module.exports.Reservation = Reservation;
