
const Router = require('express-promise-router');

const db = require('../db')

const router = new Router();

module.exports = router

router.get('/homes', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM homes')
  res.send(rows)
})