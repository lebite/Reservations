const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/reservation_module');

db.on('error', console.error.bind(console, 'connection error:'));

module.exports.db = db;
