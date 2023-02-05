const {OperatingSystem} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class OperatingSystemController {
    async create(req, res){
        const {name} = req.body;
        const operatingSystem = await OperatingSystem.create({name});
        return res.json(operatingSystem);
    }

    async getAll(req, res){
        const operatingSystem = await OperatingSystem.findAll();
        return res.json(operatingSystems);
    }

    async getOne(req, res){
        
    }
}

module.exports = new OperatingSystemController();