const express = require('express')
const app = express()
const ShelterRoutes = require('./routes/shelters')
const dogRoutes = require("./routes/dogs")
const  adminRoutes = require('./routes/admin')



app.use("/dogs",dogRoutes)
app.use("/shelters",ShelterRoutes)
app.use("/admin",adminRoutes)
app.listen(3000,()=>{
    console.log("serving app on localhost 3000")
})