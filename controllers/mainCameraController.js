const {MainCamera} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class MainCameraController {
    async create(req, res){
        const {numberOfCameras, resolution} = req.body;
        const mainCamera = await MainCamera.create({numberOfCameras, resolution});
        return res.json(mainCamera);
    }

    async getAll(req, res){
        const mainCameras = await MainCamera.findAll();
        return res.json(mainCameras);
    }

    async getOne(req, res){
        
    }
}

module.exports = new MainCameraController();