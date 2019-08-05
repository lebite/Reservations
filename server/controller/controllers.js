/* eslint-disable prefer-template */
const { connection } = require('../../database/index');

module.exports = {
  createReservation: (req, res) => { // untested query
    const data = req.body;
    const restaurant = req.params.restaurant_id;
    const sql = 'INSERT INTO `Reservations`(reserved_date, party_size, timeSlot, Restaurant_Id, first_name, last_name, email, phone, requests, occasion) VALUES (' + connection.escape(data.reserved_date) + ',' + connection.escape(data.party_size) + ',' + connection.escape(data.timeSlot) + ',' + connection.escape(restaurant) + ',' + connection.escape(data.first_name) + ',' + connection.escape(data.last_name) + ',' + connection.escape(data.email) + ',' + connection.escape(data.phone) + ',' + connection.escape(data.requests) + ',' + connection.escape(data.occasion) + ')';
    connection.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  getAllReservations: (req, res) => { // probably works
    const restaurantId = req.params.restaurant_id;
    const date = req.query.reserved_date;
    const sql = 'SELECT * FROM `Reservations` WHERE `Restaurant_Id` = ? and reserved_date = ?';
    connection.query(sql, [restaurantId, date], (err, results) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  updateReservation: (req, res) => { // untested query
    const id = req.params.reservation_id;
    const data = req.body;
    const sql = 'UPDATE Reservations SET timeSlot = ' + connection.escape(data.timeSlot) + 'reserved_date = ' + connection.escape(data.reserved_date) + 'party_size = ' + connection.escape(data.party_size) + ' where reservation_id = ' + connection.escape(id);
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },
  deleteReservation: (req, res) => { // works
    const id = req.query.reservation_id;
    const sql = 'DELETE FROM Reservations WHERE Rerservation_Id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};
