const {RAM} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class RAMController {
    async create(req, res){
        const {size} = req.body;
        const ram = await RAM.create({size});
        return res.json(ram);
    }

    async getAll(req, res){
        const rams = await RAM.findAll();
        return res.json(rams);
    }

    async getOne(req, res){
        
    }
}

module.exports = new RAMController();