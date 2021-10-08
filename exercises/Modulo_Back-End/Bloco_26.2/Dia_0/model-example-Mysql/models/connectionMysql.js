const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  user: 'mikael',
  password: '&d27082020&',
  host: 'localhost',
  database: 'model_example',
});
