const uuid = require('uuid');
const {Phone} = require('../models/models.js');
const ApiError = require('../error/ApiError');
const path =require('path');

class PhoneController {
    async create(req, res){
        try{
            const {price, discount, rating, ModelId, ColorId, RAMId, ROMId, GeneralInfoId, OperatingSystemId, CPUId, DisplayId, MainCameraId, FrontCameraId, DimensionId} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const phone = await Phone.create({price, discount, rating, img:fileName, ModelId, ColorId, RAMId, ROMId, GeneralInfoId, OperatingSystemId, CPUId, DisplayId, MainCameraId, FrontCameraId, DimensionId});
            return res.json(phone);
        }
        catch(e){
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 30;
        let offset = page*limit - limit;
        let phones = await Phone.findAndCountAll({limit, offset});
        return res.json(phones);
    }

    async getOne(req, res){
        const {id} = req.params;
        const phone = await Phone.findOne({where:{id}});
        return res.json(phone);
    }
}

module.exports = new PhoneController();