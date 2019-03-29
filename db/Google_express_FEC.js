var db = require('./index.js');

module.exports.getProductItems = function (callback) {
  db.query('SELECT * FROM product_items;', (err, rows, fields) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}

module.exports.getProductItemById = function (item_id, callback) {
  db.query('SELECT * FROM product_items WHERE id=' + item_id, (err, rows, fields) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}


module.exports.postProductSeed = function (newProductSeed , callback) {
  const queryString = 'INSERT INTO product_items (id, name, price, store, free_return_days) ' + 
                      'VALUES (?, ?, ?, ?, ?)'
  db.query(queryString, [newProductSeed.id, newProductSeed.name, newProductSeed.price, newProductSeed.store, newProductSeed.free_return_days], (err, rows) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}