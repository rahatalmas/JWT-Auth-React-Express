const bcrypt = require('bcrypt');

const userRagistration = async (req,res,next) =>{
    try{
        const {username,email,password} = await req.body;
        const hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);
        res.json({username,email});
    }catch(err){
        console.log(err.message);
        res.json({message:"something went wrong..."})
    }finally{
        console.log("the end for this req...")
    }
    next();
}

module.exports = {userRagistration};