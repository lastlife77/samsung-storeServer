const Router = require('express');
const router = new Router();
const romController = require('../controllers/romController.js');

router.post('/', romController.create);
router.get('/', romController.getAll);
router.get('/:id', romController.getOne);


module.exports = router;