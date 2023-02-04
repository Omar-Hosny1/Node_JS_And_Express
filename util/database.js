const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;
