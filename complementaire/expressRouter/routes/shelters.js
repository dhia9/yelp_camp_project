const express =  require("express")
const router= express.Router();


router.get("/",(req,res)=>{
    res.send('ALL SHELTERS')
})
router.post("/",(req,res)=>{
    res.send('creating SHELTERS')
})
router.get("/:id",(req,res)=>{
    res.send('viewing one shelter')
})
router.get("/:id/edit",(req,res)=>{
    res.send('edinting one shelter ')
})

module.exports = router ;