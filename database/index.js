const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Reservations',
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to Reservations');
  }
});



const ;

const ;

const ;

const ;

module.exports.connection = connection;
