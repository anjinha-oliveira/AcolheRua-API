const express = require('express') 
const controllers = require('../controllers/test')

const router = express.Router() 

router.get('/', controllers.routerTest)

module.exports = router