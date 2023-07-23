const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//app.use(express.json());
//app.use(express.urlencoded({extended:false}));
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const verifyToken = require('./controllers/verifyToken');

app.get("/",(req,res,next)=>{
    res.json({name:"Giant Server"});
})

app.use("/user",userRoutes);
app.use("/api",verifyToken,blogRoutes);

app.get("/test",(req,res,next)=>{
     res.json({message:"test"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});