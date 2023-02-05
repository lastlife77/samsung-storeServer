const {GeneralInfo} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class GeneralInfoController {
    async create(req, res){
        const {guarantee, country, producer} = req.body;
        const generalInfo = await GeneralInfo.create({guarantee, country, producer});
        return res.json(generalInfo);
    }

    async getAll(req, res){
        const generalInfos = await GeneralInfo.findAll();
        return res.json(generalInfos);
    }

    async getOne(req, res){
    }
}

module.exports = new GeneralInfoController();