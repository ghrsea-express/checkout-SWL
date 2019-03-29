const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'google_express_FEC',
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