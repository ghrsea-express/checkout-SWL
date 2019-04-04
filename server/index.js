const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/Google_express_FEC')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/product_items', (req, res) => {
  db.getProductItems((err, rows) => {
    if(err) return res.status.send(err)
    res.send(rows)
  })
})

app.get('/product', (req, res) => {
  let datapoint = req.query.id;
  db.getProductItemById(datapoint, (err, data) => {
    if(err) return res.status(500).send(err)
    res.send(data)
  })
})

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));