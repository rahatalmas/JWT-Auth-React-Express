const router = require('express').Router();
const {userRagistration} = require('../controllers/userRegistration.js');
const {userLogin} = require('../controllers/userlogin.js');

router.post("/register",userRagistration);
router.post("/login",userLogin);

module.exports = router;