const Router = require('express');
const router = new Router();
const ramController = require('../controllers/ramController.js');

router.post('/', ramController.create);
router.get('/', ramController.getAll);
router.get('/:id', ramController.getOne);


module.exports = router;