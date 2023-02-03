const Router = require('express');
const router = new Router();
const modelController = require('../controllers/modelController.js');

router.post('/', modelController.create);
router.get('/', modelController.getAll);
router.get('/:id', modelController.getOne);


module.exports = router;