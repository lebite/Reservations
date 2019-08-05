const { connection } = require('../../database/index');

module.exports = {
  createReservation: (req, res) => { // untested query
    const data = req.body;
    const sql = 'INSERT INTO `Reservations`(`reserved_date`, `party_size`, `timeSlot`, `Restaurant_Id`, `first_name`, `last_name`, `email`, `phone`, `requests`, `occasion`) VALUES (?, ?, ?, ?, ?. ?, ?, ?, ?, ?)';
    connection.query(sql, [data.reserved_date, data.party_size, data.timeSlot, data.Restaurant_Id, data.first_name, data.last_name, data.email, data.phone, data.requests, data.occasion], (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
        res.send(err);
      } else {
        res.sendStatus(201);
      }
    });
  },
  getAllReservations: (req, res) => { // probably works
    const restaurantId = req.params.restaurant_id;
    const sql = 'SELECT * FROM `Reservations` WHERE `Restaurant_Id` = ?';
    connection.query(sql, [restaurantId], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
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
        res.statusCode(404);
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
        res.sendStatus(404);
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};
