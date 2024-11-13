const express = require('express')
var bodyParser = require('body-parser')
const bugerrouter = require('./routes/buger_router')
const pizzacontroller = require('./routes/pizza')
const chickencontroller = require('./routes/chicken')
var cors = require('cors')


const app = express()

app.use(cors())
app.use(express.static("images"))
const port = 3000

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//---------------------------------------
app.use('/buger', bugerrouter)
app.use('/pizza', pizzacontroller)
app.use('/chicken', chickencontroller)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})