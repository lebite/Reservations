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
          $gte: moment(restaurant[0].open_time),
          $lte: moment(restaurant[0].close_time),
        },
      }, function (err, reservations) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            restaurant_id: restaurantId,
            restaurant_information: restaurant[0],
            bookings: reservations,
          });
        }
      });
    }
  });
});

app.post('/:restaurant_id/reservations', (req, res) => {
  const restaurantId = req.params.restaurant_id;

  Reservation.find({
    restaurant_id: restaurantId,
    booking_time: {
      $gte: moment(req.body),
      $lte: moment(req.body).add(2, 'hour').add(30, 'minute'),
    },
  }, function (err, reservations) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        restaurant_id: restaurantId,
        bookings: reservations,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
