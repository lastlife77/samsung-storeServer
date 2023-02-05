const {Model} = require('../models/models.js');
const ApiError = require('../error/ApiError');

class ModelController {
    async create(req, res){
        const {name, SeriesId} = req.body;
        const model = await Model.create({name, SeriesId});
        return res.json(model);
    }

    async getAll(req, res){
        const models = await Model.findAll();
        return res.json(models);
    }

    async getOne(req, res){
        
    }
}

module.exports = new ModelController();