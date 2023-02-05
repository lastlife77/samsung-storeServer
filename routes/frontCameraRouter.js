const Router = require('express');
const router = new Router();
const cameraController = require('../controllers/frontCameraController.js');

router.post('/', cameraController.create);
router.get('/', cameraController.getAll);
router.get('/:id', cameraController.getOne);


module.exports = router;