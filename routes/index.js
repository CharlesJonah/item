const router = require('express').Router();
// const items = require('./controllers/items');

/* GET root page. */
router.get('/', function(req, res) {
  res.status(200).send({ message: 'Welcome to Items API' });
});

module.exports = router;
