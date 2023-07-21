const router = require('express').Router();
const {userRagistration} = require('../controllers/userRegistration.js');
router.post("/register",userRagistration)

module.exports = router;