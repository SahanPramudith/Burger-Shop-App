const express = require('express')
var bodyParser = require('body-parser')
const bugerrouter = require('./routes/buger_router')
const pizzacontroller = require('./routes/pizza')
const chickencontroller = require('./routes/chicken')


const app = express()
app.use(express.static("images"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000



app.use('/buger', bugerrouter)
app.use('/pizza', pizzacontroller)
app.use('/chicken', chickencontroller)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})