const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'mikael',
  password: '&d27082020&',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;