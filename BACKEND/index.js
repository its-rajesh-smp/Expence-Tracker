const express = require('express')
const sequelize = require('./util/database')
const body_parser = require('body-parser')
const cors = require("cors")


const expense = require("./router/expense")

const app = express()



app.use(body_parser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use(expense)






sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("SERVER LISTENING");
    })
}).catch(err => {
    console.log(err);
})