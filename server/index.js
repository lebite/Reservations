/* eslint-disable func-names */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');

const { Reservation } = require('../database/index');
const { Restaurant } = require('../database/index');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/')));

app.get('/:restaurant_id/reservations', (req, res) => {
  const restaurantId = req.params.restaurant_id;
  Restaurant.find({ _id: restaurantId }, function (err, restaurant) {
    if (err) {
      res.send(err);
    } else {
      Reservation.find({
        restaurant_id: restaurantId,
        booking_time: {
          $gte: moment().valueOf(),
          $lte: moment(restaurant.restaurant_close_time).valueOf(),
        },
      }, function (err, reservations) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            restaurant_id: restaurantId,
            restaurant_information: restaurant,
            bookings: reservations,
          });
        }
      });
    }
  });
});

app.post('/:restaurant_id/reservations', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
