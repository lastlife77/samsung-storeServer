const {Display} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class DisplayController {
    async create(req, res){
        const {name} = req.body;
        const display = await Display.create({name});
        return res.json(display);
    }

    async getAll(req, res){
        const displays = await Series.findAll();
        return res.json(displays);
    }

    async getOne(req, res){
        
    }
}

module.exports = new DisplayController();