const Router = require('express');
const router = new Router();
const colorController = require('../controllers/colorController.js');

router.post('/', colorController.create);
router.get('/', colorController.getAll);
router.get('/:id', colorController.getOne);


module.exports = router;