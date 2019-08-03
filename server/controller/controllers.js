const { connection } = require('../../database/index');

module.exports = {
  getAllReservations: (req, res) => {
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
  createReservation: (req, res) => {
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
  getDailyCount: (req, res) => {
    const sql = 'SELECT COUNT(party_size) FROM Reservations HAVING reserved_date = ?';
    const date = req.query.reserved_date;
    connection.query(sql, [date], (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  updateReservation: (req, res) => {
    const id = req.params.reservation_id;
    const data = req.body;
    const sql = 'UPDATE Reservations SET timeSlot = ?, reserved_date = ?, party_size = ? where reservation_id = ?';
    connection.query(sql, [data.timeSlot, data.reserved_date, data.party_size, id], (err, result) => {
      if (err) {
        console.log(err);
        res.statusCode(404);
      } else {
        res.send(result);
      }
    });
  },
  deleteReservation: (req, res) => {
    const id = req.query.reservation_id;
    const sql = 'DELETE * FROM Reservations WHERE Rerservation_Id = ?';
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
