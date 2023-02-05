const {Display} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class DisplayController {
    async create(req, res){
        const {resolution, diagonal, technology, frequency, glassType} = req.body;
        const display = await Display.create({resolution, diagonal, technology, frequency, glassType});
        return res.json(display);
    }

    async getAll(req, res){
        const displays = await Display.findAll();
        return res.json(displays);
    }

    async getOne(req, res){
        
    }
}

module.exports = new DisplayController();