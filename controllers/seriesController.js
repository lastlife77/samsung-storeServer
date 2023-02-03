const {Series} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class SeriesController {
    async create(req, res){
        const {name} = req.body;
        const series = await Series.create({name});
        return res.json(series);
    }

    async getAll(req, res){
        const serieses = await Series.findAll();
        return res.json(serieses);
    }

    async getOne(req, res){
        
    }
}

module.exports = new SeriesController();