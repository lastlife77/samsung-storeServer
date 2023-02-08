const Router = require('express');
const router = new Router();
const phoneRouter = require('./phoneRouter');
const userRouter = require('./userRouter');
const seriesRouter = require('./seriesRouter');
const colorRouter = require('./colorRouter');
const cpuRouter = require('./cpuRouter');
const dimensionRouter = require('./dimensionRouter');
const displayRouter = require('./displayRouter');
const frontCameraRouter = require('./frontCameraRouter');
const generalInfoRouter = require('./generalInfoRouter');
const mainCameraRouter = require('./mainCameraRouter');
const modelRouter = require('./modelRouter');
const operatingSystemRouter = require('./operatingSystemRouter');
const ramRouter = require('./ramRouter');
const romRouter = require('./romRouter');




router.use('/user', userRouter);
router.use('/phone', phoneRouter);
router.use('/series', seriesRouter);
router.use('/color', colorRouter);
router.use('/cpu', cpuRouter);
router.use('/dimension', dimensionRouter);
router.use('/display', displayRouter);
router.use('/frontCamera', frontCameraRouter);
router.use('/generalInfo', generalInfoRouter);
router.use('/mainCamera', mainCameraRouter);
router.use('/model', modelRouter);
router.use('/operatingSystem', operatingSystemRouter);
router.use('/ram', ramRouter);
router.use('/rom', romRouter);

module.exports = router;
