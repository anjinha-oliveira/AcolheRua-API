require('dotenv').config()

const express = require('express')
const routes = require('./routes/institution-routes')
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const mongoose = require('./database/db')

const app = express()

app.use(express.json())
app.use(cors());
mongoose()


app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', routes)

module.exports = app