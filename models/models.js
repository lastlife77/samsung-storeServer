const sequelize = require("../db");
const {DataTypes} = require('sequelize');
const { model } = require("../db");

const User = sequelize.define(
    'User',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: "USER"},
    }
);

const Basket = sequelize.define(
    'Basket',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //user_id
        //basket_id
    }
);

const BasketDevice = sequelize.define(
    'BasketDevice',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        //phone_id
    }
);

const Phone = sequelize.define(
    'Phone',
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
    'Model',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING},
        //series_id
    }
);

const Series =  sequelize.define(
    'Series',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true},
    }
);

const Color = sequelize.define(
    'Color',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name:{type: DataTypes.STRING, unique: true},
        rgb:{type: DataTypes.STRING}
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
    'GeneralInfo',
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
        name:{type: DataTypes.STRING, unique: true},
    }
);

const Display = sequelize.define(
    'Display',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        resolution:{type: DataTypes.STRING},
        diagonal:{type: DataTypes.FLOAT},
        technology:{type:DataTypes.STRING},
        frequency:{type:DataTypes.INTEGER},
        glassType:{type:DataTypes.STRING},
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
    'MainCamera',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        numberOfCameras:{type: DataTypes.INTEGER},
        resolution:{type: DataTypes.INTEGER},
    }
);

const FrontCamera = sequelize.define(
    'FrontCamera',
    {
        id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        numberOfCameras:{type: DataTypes.INTEGER},
        resolution:{type: DataTypes.INTEGER},
    }
);

 const Dimension = sequelize.define(
    'Dimension',
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

Phone.hasMany(BasketDevice);
BasketDevice.belongsTo(Phone);

Series.hasMany(Model);
Model.belongsTo(Series);

Model.hasMany(Phone);
Phone.belongsTo(Model);

Color.hasMany(Phone);
Phone.belongsTo(Color);

RAM.hasMany(Phone);
Phone.belongsTo(RAM);

ROM.hasMany(Phone);
Phone.belongsTo(ROM);

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

module.exports = {
    User, Basket, BasketDevice, Series, Model, Phone, Color, RAM, ROM, GeneralInfo, OperatingSystem, Display, CPU, MainCamera, FrontCamera, Dimension,
}

