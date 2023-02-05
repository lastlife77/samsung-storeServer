const {Phone} = require('../models/models.js');
const ApiError = require('../error/ApiError');

class PhoneController {
    async create(req, res){
        const {price, discount, rating, img, ColorId, RAMId, ROMId, GeneralInfoId, OperatingSystemId, CPUId, MainCameraId, FrontCameraID, DimensionId} = req.body;
        const phone = await Phone.create({price, discount, rating, img, ColorId, RAMId, ROMId, GeneralInfoId, OperatingSystemId, CPUId, MainCameraId, FrontCameraID, DimensionId});
        return res.json(phone);
    }

    async getAll(req, res){
        
    }

    async getOne(req, res){
        
    }
}

module.exports = new PhoneController();