const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//app.use(express.json());
//app.use(express.urlencoded({extended:false}));

app.get("/",(req,res,next)=>{
    res.json({name:"Giant Server"});
})

const AuthChecker = (req,res,next)=>{
        console.log('blog middleware');
        next();
    }


app.use("/user",userRoutes);
app.use("/api",AuthChecker,blogRoutes);

app.get("/test",(req,res,next)=>{
     res.json({message:"test"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});