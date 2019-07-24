const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  reservation_id: Number,
  booking_time: Date,
  party_qty: Number,
  restaurant_id: Number,
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Reservation = Reservation;
