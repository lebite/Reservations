/* eslint-disable prefer-arrow-callback */
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
      console.log((restaurant[0]));
      console.log((restaurant[0].close_time));
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
  console.log(req.body);

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
