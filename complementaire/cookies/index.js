const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("this is my secret"));

app.get("/greet",(req,res)=>{
    const {animal } = req.cookies
    res.send(`well well ${animal} `)
    
})
app.get("/getsignedcookie",(req,res)=>{
    res.cookie("fruit","grape",{signed:true})
    res.send("ok signed your cookie")
})
app.get("/verifyfruit",(req,res)=>{
    res.send(req.signedCookies)

})
app.get("/setname",(req,res)=>{
    res.cookie("name","stevie chicks")
    res.cookie("animal","batingen akhidh a sandawitch ala 7ita tenia")
    res.send("hey there sent you a cookie")
    console.log(req.cookies)
})
app.listen(3000,()=>{
    console.log("serving")
})