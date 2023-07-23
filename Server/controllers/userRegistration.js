const bcrypt = require('bcrypt');
const {AccessTokenGenerator,RefreshTokenGenerator} = require('./jwtTokenGenerator');

const userRagistration = async (req,res,next) =>{
    try{
        const {username,email,password} = await req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        const accessToken = AccessTokenGenerator(username);
        const refreshToken = RefreshTokenGenerator(username);
        res.json({username,email,accessToken});
    }catch(err){
        console.log(err.message);
        res.json({message:"something went wrong..."})
    }finally{
        console.log("the end registration req...")
    }
    next();
}

module.exports = {userRagistration};