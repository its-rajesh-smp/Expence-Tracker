const Sequelize = require('sequelize').Sequelize

const sequelize = new Sequelize("practice_database", "root", "Rajesh500@#", { dialect: "mysql", logging: false, host: "localhost" })


module.exports = sequelize