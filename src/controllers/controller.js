const { response, request } = require('express')
const institutionsModel = require('../models/institution-model')

const institutions = async (request, response) => {
  try {
  const listInstitutions = await institutionsModel.find({}, null)
  response.status(200).send({
    result: listInstitutions
  })
  } catch (error) {
    response.status(500).send(error)
  } 
}

const getInstitutionByID = async (request, response) => {
  console.log('getInstitutionByID: ' + request.params.id)
  try {
    const institution = await institutionsModel.findById(request.params.id)
    if (institution != null) {
      response.status(200).send(institution)
    } else {
      response.status(404).send()
    }
  } catch (error) {
    response.status(500).send(error)
  }
}

const getInstitutionsByName = async (request, response) => {
  try {
    const institutions = await institutionsModel.find({name: request.query.name})
    if (institutions != null) {
      response.status(200).send(institutions)
    } else {
      response.status(500).send()
    }
  } catch (error) {
    response.status(500).send(error)
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

    const newInstititon = new institutionsModel({
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
    response.status(400).send(error)
  }
}

const updateInstitution = async (request, response) => {
  try {
    const {
      name,
      address,
      phone,
      description
    } = request.body

    const updateInstitution = await institutionsModel.findByIdAndUpdate(
      request.params.id, {
      name,
      address,
      phone,
      description
      })
    response.status(200).send(
      updateInstitution
    )
  } catch (error) {
    response.status(500).send(error)
  }
}

const deleteInstitution = async (request, response) => {
  try {
    const {id} = request.params
    const deleted = await institutionsModel.findByIdAndDelete(id)
    const message = `Institution ${deleted.name} deleted`
    response.status(200).send({message})
  } catch (error) {
    response.status(500).send({
      message: 'institution was not reported'
    })
  }
}

module.exports = {
  institutions, 
  getInstitutionByID,
  getInstitutionsByName,
  createInstitutions,
  updateInstitution,
  deleteInstitution
}