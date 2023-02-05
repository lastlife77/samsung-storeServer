const {ROM} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class ROMController {
    async create(req, res){
        const {size} = req.body;
        const rom = await ROM.create({size});
        return res.json(rom);
    }

    async getAll(req, res){
        const roms = await ROM.findAll();
        return res.json(roms);
    }

    async getOne(req, res){
        
    }
}

module.exports = new ROMController();