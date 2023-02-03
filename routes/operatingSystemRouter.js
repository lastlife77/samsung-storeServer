const Router = require('express');
const router = new Router();
const operatingSystemController = require('../controllers/operatingSystemController.js');

router.post('/', operatingSystemController.create);
router.get('/', operatingSystemController.getAll);
router.get('/:id', operatingSystemController.getOne);


module.exports = router;