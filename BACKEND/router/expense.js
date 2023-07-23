const express = require('express')
const router = express.Router()
const ExpenseController = require('../controller/expense')

router.post("/addExpense", ExpenseController.addExpense)
router.get("/getAllExpense", ExpenseController.getAllExpense)
router.post("/deleteExpense", ExpenseController.deleteExpense)


module.exports = router