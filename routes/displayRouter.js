const Router = require('express');
const router = new Router();
const displayController = require('../controllers/displayController.js');

router.post('/', displayController.create);
router.get('/', displayController.getAll);
router.get('/:id', displayController.getOne);


module.exports = router;