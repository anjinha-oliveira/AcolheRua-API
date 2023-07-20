require('dotenv').config()

const express = require('express')
const routesTest = require('./routes/institution-routes')
const cors = require("cors")
const mongoose = require('./database/db')

const app = express()

app.use(express.json())
app.use(cors());
mongoose()

const swaggerUi = require('swagger-ui-express');
  const swaggerFile = require('../swagger/swagger_output.json');
  app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/', routesTest)

module.exports = app