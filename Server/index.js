const express = require('express');
const app = express();
const PORT = 5000;
const blogRoutes = require('./routes/blogRoutes');


app.get("/",(req,res,next)=>{
    res.json({name:"Giant Server"});
})

app.use("/api",(req,res,next)=>{
    console.log('blog middleware');
    next();
},blogRoutes);

app.get("/test",(req,res,next)=>{
     res.json({message:"test"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});