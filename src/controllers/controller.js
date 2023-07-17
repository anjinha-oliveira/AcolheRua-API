const { response } = require('express')
const institutionsModel = require('../models/institution-model')

const routerTest = (request, response) => {
  response.status(200).json({
    'name': 'Não sei',
  })
}

const institutions = async (request, response) => {
  try {
  const listInstitutions = await institutionsModel.find({}, null)
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
    const institution = await institutionsModel.findById(request.params.id)
    response.status(200).send(institution)
  } catch (error) {
    console.log(error)
  }
}

const createInstitutions = async (request, response) => {
  try {
    const {
      name,
      address,
      phone,
      description
    } = request.body

    const newInstititon = new institutionsModel 
    ({
      name,
      address,
      phone,
      description
    })

    const savedNewInstitution = await newInstititon.save()
      response.status(201).send(
        savedNewInstitution
      )   
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  routerTest,
  institutions, 
  getInstitutionByID,
  createInstitutions
}