const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: 'database',
  database: 'google_express_FEC',
  port: '3306',
  user: 'root',
  password: 'root'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the db');
  }
})

module.exports = connection;