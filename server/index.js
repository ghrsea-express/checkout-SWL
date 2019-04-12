const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
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

app.get('/product/:id', (req, res) => {
  let datapoint = req.params.id;
  db.getProductItemById(datapoint, (err, data) => {
    if(err) return res.status(500).send(err)
    res.send(data)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})

let port = process.env. PORT || 3002;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));