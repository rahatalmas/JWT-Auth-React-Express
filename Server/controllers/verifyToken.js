const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = require('./secrets.js');

const verifyToken = async (req,res,next) =>{
     try{
        const foundToken = req.headers["authorization"].split(' ')[1];
        const decode = await jwt.verify(foundToken,ACCESS_TOKEN_SECRET);
        //console.log(decode);
        next();
     }catch(err){
        console.log(err.message);
        res.status(401).json({message:`${err.message}`});
     }
}

module.exports = verifyToken;