// let { data } = require('./seedData.js');
// var db = require('../PostgreSQL/index.js/index.js');

// const postProductSeed = function (data) {
//   for(let i=0; i < data.length; i++) {

//     const newProductSeed = {
//       id: data[i].id,
//       name: data[i].name,
//       price: data[i].price,
//       store: data[i].store,
//       free_return_days: data[i].free_return_days,
//       sameItem_Id: data[i].sameItem_Id
//     }

//     const queryString = 'INSERT INTO product_items (id, name, price, store, free_return_days, sameItem_Id) ' + 
//                         'VALUES (?, ?, ?, ?, ?, ?)'

//     db.query(queryString, [newProductSeed.id, newProductSeed.name, newProductSeed.price, newProductSeed.store, newProductSeed.free_return_days, newProductSeed.sameItem_Id])
//   }
// }

// postProductSeed(data);
