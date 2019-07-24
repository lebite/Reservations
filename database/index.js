const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/reservation_module', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));

module.exports.db = db;
