const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/')));

app.get('/:restaurant_id/reservations', (req, res) => {
  res.sendStatus(200);
});

app.post('/:restaurant_id/reservations', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
