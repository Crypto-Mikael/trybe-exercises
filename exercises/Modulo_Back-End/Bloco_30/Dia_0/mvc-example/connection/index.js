const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'mikael',
  password: '&d27082020&',
  database: 'mvc_example'
});
