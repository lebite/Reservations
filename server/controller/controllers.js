/* eslint-disable prefer-template */
const { connection } = require('../../database/index');

module.exports = {
  createReservation: (req, res) => { // untested query
    // const data = req.body;
    const restaurant = Math.floor(Math.random() * Math.floor(1000000));
    const data = {
      reserved_date: 20190805,
      party_size: 3,
      timeSlot: 10,
      Restaurant_Id: restaurant,
      first_name: 'yunyun',
      last_name: 'liu',
      email: 'asdfasd@',
      phone: '234134456'

    }
    // const restaurant = req.params.restaurant_id;
    
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
    // const restaurantId = req.params.restaurant_id;
    const restaurantId = Math.floor(Math.random() * Math.floor(1000000));
    // const date = req.query.reserved_date;
    const date = 20190528;
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
