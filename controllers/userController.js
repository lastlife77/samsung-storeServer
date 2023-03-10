const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

class UserController {
    async registration(req, res){
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или пароль'));
        }
        const candidate = await User.findOne({where:{email}});
        if(candidate){
            return next(ApiError.badRequest('Пользватель стаким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({UserId: user.id});
        const token = jwt.sign(
            {id:user.id, email, role}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        );
        return res.json(token);

    }

    async login(req, res){
        
    }

    async check(req, res, next){
        const {id} = req.query;
        if(!id){
            return next(ApiError.badRequest('Не задан ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController();