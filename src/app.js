const express = require('express')

const app = express()
app.use(express.json())

const rotaTest = require('./routes/test') //importa rotas de song
app.use('/', rotaTest) //definindo rota padrão para songs

module.exports = app