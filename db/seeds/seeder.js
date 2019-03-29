let { data } = require('./seedData.js');
var db = require('./../index.js');

const postProductSeed = function (data) {
  for(let i=0; i < data.length; i++) {

    const newProductSeed = {
      id: data[i].id,
      name: data[i].name,
      price: data[i].price,
      store: data[i].store,
      free_return_days: data[i].free_return_days
    }

    const queryString = 'INSERT INTO product_items (id, name, price, store, free_return_days) ' + 
                        'VALUES (?, ?, ?, ?, ?)'

    db.query(queryString, [newProductSeed.id, newProductSeed.name, newProductSeed.price, newProductSeed.store, newProductSeed.free_return_days])
   
  }
}

postProductSeed(data);
