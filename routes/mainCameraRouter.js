const Router = require('express');
const router = new Router();
const mainCameraController = require('../controllers/mainCameraController.js');

router.post('/', mainCameraController.create);
router.get('/', mainCameraController.getAll);
router.get('/:id', mainCameraController.getOne);


module.exports = router;