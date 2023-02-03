const Router = require('express');
const router = new Router();
const generalInfoController = require('../controllers/generalInfoController.js');

router.post('/', generalInfoController.create);
router.get('/', generalInfoController.getAll);
router.get('/:id', generalInfoController.getOne);


module.exports = router;