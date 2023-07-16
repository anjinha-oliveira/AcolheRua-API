const institutionsModel = require('../models/institution-model')

const routerTest = (request, response) => {
  response.status(200).json({
    'name': 'Não sei',
  })
}

const institutions = async (request, response) => {
  try {
  const listInstitutions = await institutionsModel.find({}, {__v: 0})
  response.status(200).send({
    result: listInstitutions
  })
    console.log(listInstitutions)
  } catch (error) {
    response.status(400).send(error)
  } 
}

module.exports = {
  routerTest,
  institutions
}