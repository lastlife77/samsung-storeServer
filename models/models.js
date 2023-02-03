const sequelize = require("../db");
const {DataTypes} = require('sequelize');
const { model } = require("../db");

const User = sequelize.define(
    'user',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: "USER"},
    }
);

const Basket = sequelize.define(
    'basket',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //user_id
    }
);

const BasketDevice = sequelize.define(
    'basketDevice',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //phone_id
    }
);

const Phone = sequelize.define(
    'phone',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //model_id
        price:{type: DataTypes.INTEGER},
        discount:{type: DataTypes.INTEGER, defaultValue: 0},
        rating:{type: DataTypes.INTEGER, defaultValue: 0},
        img:{type: DataTypes.STRING, allowNull: false},
        //color_id
        //RAM_id
        //ROM_id
        //generalInfo_id
        //operatingSystem_id
        //CPU_id
        //mainCamera_id
        //frontCamera_id
        //dimension_id
    
    }
);

const Model = sequelize.define(
    'model',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true},
        //series_id
    }
);

const Series =  sequelize.define(
    'series',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true},
    }
);

const Color = sequelize.define(
    'color',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true},
    }
);

const RAM = sequelize.define(
    'RAM',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        size:{type: DataTypes.INTEGER, unique: true},
    }
);

const ROM = sequelize.define(
    'ROM',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        size:{type: DataTypes.INTEGER, unique: true},
    }
);

const GeneralInfo = sequelize.define(
    'generalInfo',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        guarantee:{type: DataTypes.INTEGER},
        country:{type: DataTypes.STRING},
        producer:{type: DataTypes.STRING},
    }
);

const OperatingSystem = sequelize.define(
    'OperatingSystem',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.INTEGER},
    }
);

const Display = sequelize.define(
    'display',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        resolution:{type: DataTypes.STRING},
        diagonal:{type: DataTypes.FLOAT},
        technology:{type:DataTypes.STRING},
        frequency:{type:DataTypes.INTEGER},
        frequency:{type:DataTypes.STRING},
    }
);

const CPU = sequelize.define(
    'CPU',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        producer:{type: DataTypes.STRING},
        name:{type: DataTypes.STRING},
        cores:{type:DataTypes.INTEGER},
        frequency:{type:DataTypes.FLOAT},
    }
);

const MainCamera = sequelize.define(
    'mainCamera',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        numberOfCameras:{type: DataTypes.INTEGER},
        resolution:{type: DataTypes.INTEGER},
    }
);

const FrontCamera = sequelize.define(
    'frontCamera',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        numberOfCameras:{type: DataTypes.INTEGER},
        resolution:{type: DataTypes.INTEGER},
    }
);

 const Dimension = sequelize.define(
    'dimension',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        weight:{type: DataTypes.FLOAT},
        height:{type: DataTypes.FLOAT},
        width:{type: DataTypes.FLOAT},
        thickness:{type: DataTypes.FLOAT},
    }
);

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Series.hasMany(Model);
Model.belongsTo(Series);

Model.hasMany(Phone);
Phone.belongsTo(Model);

Color.hasMany(Phone);
Phone.belongsTo(Color);

RAM.hasMany(Phone);
Phone.belongsTo(RAM);

GeneralInfo.hasMany(Phone);
Phone.belongsTo(GeneralInfo);

OperatingSystem.hasMany(Phone);
Phone.belongsTo(OperatingSystem);

Display.hasMany(Phone);
Phone.belongsTo(Display);

CPU.hasMany(Phone);
Phone.belongsTo(CPU);

MainCamera.hasMany(Phone);
Phone.belongsTo(MainCamera);

FrontCamera.hasMany(Phone);
Phone.belongsTo(FrontCamera);

Dimension.hasOne(FrontCamera);
FrontCamera.belongsTo(Dimension);

module.exports = {
    User, Basket, BasketDevice, Series, Model, Phone, Color, RAM, ROM, GeneralInfo, OperatingSystem, Display, CPU, MainCamera, FrontCamera, Dimension,
}

