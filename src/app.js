const express = require('express')
const routesTest = require('./routes/test')
const cors = require("cors")
const mongoose = require('./database/db')

const app = express()

app.use(express.json())
app.use(cors());
mongoose()

app.use('/', routesTest)

module.exports = app