require('newrelic');
const app = require('./app');

const PORT = 3002;

module.exports = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
