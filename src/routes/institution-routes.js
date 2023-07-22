const express = require('express') 
const controllers = require('../controllers/controller')

const router = express.Router() 

router.get('/institutions', controllers.institutions)
router.get('/institutions/:id/', controllers.getInstitutionByID)
router.post('/institutions', controllers.createInstitutions)
router.patch('/institutions/:id/', controllers.updateInstitution)
router.delete('/institutions/:id', controllers.deleteInstitution)

module.exports = router