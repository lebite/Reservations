const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');

const { connection } = require('../database/reservation');
const { getAllReservations } = require('../database/restaurant');
const { db } = require('../database/index');

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
      res.setHeader("Cache-Control", "public, max-age=31536000");
    }
  })
);

app.get('/:restaurant_id/reservations',);

app.post('/:restaurant_id/reservations', 
  
app.get('/:restaurant_id/reservations/count', (req, res) => {
  const restaurantId = req.params.restaurant_id;

app.delete('/:restaurant_id/reservations/:reservation_id', (req, res) => {
  crvations');

});
module.exports = app;
