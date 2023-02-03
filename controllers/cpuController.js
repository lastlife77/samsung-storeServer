const {CPU} = require('../models/models.js');
const ApiError = require('../error/ApiError');
class CPUController {
    async create(req, res){
        const {producer,name, cores, frequency} = req.body;
        const cpu = await CPU.create({producer,name, cores, frequency});
        return res.json(cpu);
    }

    async getAll(req, res){
        const cpus = await CPU.findAll();
        return res.json(cpus);
    }

    async getOne(req, res){
        
    }
}

module.exports = new CPUController();