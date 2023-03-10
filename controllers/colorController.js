const {Color} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class ColorController {
    async create(req, res){
        const {name, rgb} = req.body;
        const color = await Color.create({name, rgb});
        return res.json(color);
    }

    async getAll(req, res){
        const colors = await Colors.findAll();
        return res.json(colors);
    }

    async getOne(req, res){
        
    }
}

module.exports = new ColorController();