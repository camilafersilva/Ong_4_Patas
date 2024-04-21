const Sequelize = require('sequelize'); 
const sequelize = require('../config/sequelize'); 
const Parceiro = require('./partners'); 
const partners = Parceiro(sequelize, Sequelize.DataTypes);

const db = {
    partners,
    sequelize
};

module.exports = db; 
