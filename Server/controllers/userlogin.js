const bcrypt = require('bcrypt');

const defaultUser = {
    username:"rahatalmas",
    email:"rahatalmas55@gmail.com",
    password:"$2b$10$uSNJdvVVQnQk32Y5qhKqK.4E5Xdt6.NALzHH2v.X89gx9FoGKLVIC"
}

const userLogin = async (req,res,next) =>{
    try{
        const {username,password} = await req.body;
        const match = await bcrypt.compare(password,defaultUser.password)
        if(match){
            console.log(match);
            res.json({username})
        }else{
            res.json({message:"incorrect password"});
        }
    }catch(err){
        console.log(err.message);
        res.json({message:"something went wrong..."});
    }finally{
        console.log('end of login req...')
    }
}

module.exports = {userLogin};