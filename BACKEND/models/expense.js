const Sequelize = require("sequelize")
const sequelize = require("../util/database")


const Expense = sequelize.define('expense_table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Expence: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Chatagorie: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Expense