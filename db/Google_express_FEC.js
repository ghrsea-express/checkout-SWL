// var db = require('./PostgreSQL/index.js');

// module.exports.getProductItems = function (callback) {
//   db.query('SELECT * FROM product_items;', (err, rows, fields) => {
//     if(err) return callback(err)
//     callback(null, rows)
//   })
// }

// module.exports.getProductItemById = function (item_id, callback) {
//   db.query('SELECT * FROM product_items WHERE id=' + item_id, (err, rows, fields) => {
//     if(err) return callback(err)
//     callback(null, rows)
//   })
// }