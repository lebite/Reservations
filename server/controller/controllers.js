/* eslint-disable prefer-template */
const { connection } = require('../../database/index');
const faker = require('faker');

module.exports = {
  createReservation: (req, res) => { // untested query
    // const data = req.body;
    const dateString = faker.date.between('2019-05-28', '2019-08-28').toLocaleDateString();
    const restaurant = req.params.restaurant_id;
    const sql = 'INSERT INTO Reservations (reserved_date, party_size, timeSlot, Restaurant_Id, first_name, last_name, email, phone, requests, occasion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [dateString, 2, 14, restaurant, 'diana', 'yu', 'vesper_astrum@gmail.com', '510-234-4256', 'dark blue roses', 'birthday'];
    connection.query(sql, values, (err, results) => {
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
    const date = req.body;
    const sql = 'SELECT * FROM `Reservations` WHERE `Restaurant_Id` = ? and reserved_date = ?';
    connection.query(sql, [restaurantId, date], (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  },
  updateReservation: (req, res) => { // untested query
    // const id = req.params.reservation_id;
    const id = Math.floor(Math.random() * Math.floor(23499417));
    // const data = req.body;
    const data = {
      timeSlot: 13,
      reserved_date: 20200805,
      party_size: 2,
    };
    const sql = 'UPDATE Reservations SET timeSlot = ' + connection.escape(data.timeSlot) + 'reserved_date = ' + connection.escape(data.reserved_date) + 'party_size = ' + connection.escape(data.party_size) + ' where reservation_id = ' + connection.escape(id);
    connection.query(sql, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  deleteReservation: (req, res) => { // works
    // const id = req.query.reservation_id;
    const id = Math.floor(Math.random() * Math.floor(23499417));
    const sql = 'DELETE FROM Reservations WHERE Reservation_Id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};
