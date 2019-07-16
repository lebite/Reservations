const mongoose = require('mongoose');

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

module.exports.Restaurant = Restaurant;
