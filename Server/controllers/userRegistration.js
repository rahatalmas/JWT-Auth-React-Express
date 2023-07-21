const bcrypt = require('bcrypt');

const userRagistration = (req,res,next) =>{
    const {username,email,password} = req.body;
    console.log(username,email,password);
     res.json({username,email});
}

module.exports = {userRagistration};