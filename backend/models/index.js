const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const Link = require('./link');
const link = Link(sequelize, Sequelize.DataTypes);

const User = require('./user');
const user = User(sequelize, Sequelize.DataTypes);

const db = {
  link,
  user,
  sequelize,
};

module.exports = db;
