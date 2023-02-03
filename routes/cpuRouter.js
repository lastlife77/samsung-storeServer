const Router = require('express');
const router = new Router();
const cpuController = require('../controllers/cpuController.js');

router.post('/', cpuController.create);
router.get('/', cpuController.getAll);
router.get('/:id', cpuController.getOne);


module.exports = router;