require('dotenv').config()

const express = require('express')
const routesTest = require('./routes/institution-routes')
const cors = require("cors")
const mongoose = require('./database/db')

const app = express()

app.use(express.json())
app.use(cors());
mongoose()

app.use('/', routesTest)

module.exports = app