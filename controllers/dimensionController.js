const {Dimension} = require('../models/models.js');
const ApiError = require('../error/ApiError');

class DimensionController {
    async create(req, res){
        const {weight,height, width, thickness} = req.body;
        const dimension = await Dimension.create({weight,height, width, thickness});
        return res.json(dimension);
    }

    async getAll(req, res){
        const dimensions = await Dimension.findAll();
        return res.json(dimensions);
    }

    async getOne(req, res){
        
    }
}

module.exports = new DimensionController();