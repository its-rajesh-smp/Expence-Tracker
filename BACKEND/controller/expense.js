const ExpenseModal = require('../models/expense')

exports.getAllExpense = async (req, res) => {
    try {
        const dbRes = await ExpenseModal.findAll()
        res.send(dbRes)


    } catch (error) {
        console.log(error);
        res.send(false)
    }

}


exports.addExpense = async (req, res) => {
    try {
        const { Expence, Description, Chatagorie } = req.body
        const dbRes = await ExpenseModal.create({
            Expence, Description, Chatagorie
        })
        res.send(dbRes)

    } catch (error) {
        console.log(error);
        res.send(false)

    }
}


exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.body
        await ExpenseModal.destroy({
            where: {
                id: id
            }
        })

        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)

    }
}