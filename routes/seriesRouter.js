const Router = require('express');
const router = new Router();
const seriesController = require('../controllers/seriesController.js');

router.post('/', seriesController.create);
router.get('/', seriesController.getAll);
router.get('/:id', seriesController.getOne);


module.exports = router;