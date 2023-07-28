const router = require('express').Router();

router.get('/blogs',(req,res,next)=>{
    //console.log(req.cookies);
    res.json({blog:"blog1"})
});

router.get("/blogs/:",(req,res,next)=>{
    res.json({blog:"single Blog"})
})

router.post("/postblog",(req,res,next)=>{
    res.json({message:"blog posted successfully"})
})

router.put("/blogs/editblog/:",(req,res,next)=>{
    res.json({message:"editing done..."})
})

router.delete("/blogs/delete/:",(req,res,next)=>{
    res.json({message:"blog deleted..."})
})

module.exports = router;