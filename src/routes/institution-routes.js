const express = require('express') 
const controllers = require('../controllers/controller')

const router = express.Router() 

router.get('/', controllers.routerTest)
router.get('/institutions', controllers.institutions)

module.exports = router