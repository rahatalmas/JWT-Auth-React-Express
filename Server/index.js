const express = require('express');
const app = express();
const PORT = 5000;
const blogRoutes = require('./routes/blogRoutes');

app.get("/",(req,res,next)=>{
    res.json({name:"Giant Server"});
})

app.use("/api",blogRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
});