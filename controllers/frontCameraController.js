const {FrontCamera} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class FrontCameraController {
    async create(req, res){
        const {numberOfCameras, resolution} = req.body;
        const frontCamera = await FrontCamera.create({numberOfCameras, resolution});
        return res.json(frontCamera);
    }

    async getAll(req, res){
        const frontCameras = await FrontCamera.findAll();
        return res.json(frontCameras);
    }

    async getOne(req, res){
        
    }
}

module.exports = new FrontCameraController();