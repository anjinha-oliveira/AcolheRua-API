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

const getInstitutionByID = async (request, response) => {
  try {
    const institution = await institutionsModel.findById(request.params.id, {__v: 0})
    response.status(200).send(institution)
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  routerTest,
  institutions, 
  getInstitutionByID
}