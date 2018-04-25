const router = require('express').Router();
const items = require('../controllers/items');

router.get('/', function(req, res) {
  res.status(200).send({ message: 'Welcome to Items API' });
});

router.post('/items',items.createItem);
router.get('/items',items.getItems);
router.get('/items/:id',items.getItem);
router.put('/items/:id', items.updateItem);
router.get('/categorize',  items.searchByCategory);
router.delete('/items/:id',items.deleteItem);


module.exports = router;
