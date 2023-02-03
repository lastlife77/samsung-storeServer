const Router = require('express');
const router = new Router();
const dimensionController = require('../controllers/dimensionController.js');

router.post('/', dimensionController.create);
router.get('/', dimensionController.getAll);
router.get('/:id', dimensionController.getOne);


module.exports = router;