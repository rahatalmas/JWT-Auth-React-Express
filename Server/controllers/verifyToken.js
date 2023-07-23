const jwt = require('jsonwebtoken');

const verifyToken = async (req,res,next) =>{
     try{
        const foundToken = req.headers["authorization"].split(' ')[1];
        console.log(foundToken);
        next();
     }catch(err){
        console.log(err.message);
        res.status(404);
     }
}

module.exports = verifyToken;