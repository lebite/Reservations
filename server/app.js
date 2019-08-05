const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const { getAllReserverations } = require('./controller/controllers');
const { createReservation } = require('./controller/controllers');
const { updateReservation } = require('./controller/controllers');
const { deleteReservation } = require('./controller/controllers');

const expressStaticGzip = require('express-static-gzip');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public/')));
app.use('/:restaurant_id', express.static(path.join(__dirname, '/../public/')));
app.use('/', expressStaticGzip('/../public/', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.get('/:restaurant_id/reservations', (req, res) => {
  getAllReserverations(req, res);
});

app.post('/:restaurant_id/reservations', (req, res) => {
  createReservation(req, res);
});
// app.get('/:restaurant_id/reservations/count', (req, res) => {
//   const restaurantId = req.params.restaurant_id;
app.put('/:restaurant_id/reservations/:reservation_id', (req, res) => {
  updateReservation(req, res);
});

app.delete('/:restaurant_id/reservations/:reservation_id', (req, res) => {
  deleteReservation(req, res);
});

module.exports = app;
