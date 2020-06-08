const mysql = require ('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'cows'
});

connection.connect();

module.exports = connection;