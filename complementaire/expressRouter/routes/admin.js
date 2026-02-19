const express =require("express")
const router = express.Router()




router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next()
    }else res.send("Sorry not an admin ")
})
router.get("/topsecret",(req,res)=>{
    res.send("top secrett")
    
})



router.get("/deleteeverything",(req,res)=>{
    res.send("deleting everything")
    
})
module.exports = router 



