const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(()=>{
        console.log("Mongo connection open")
    })
    .catch(err=>{
        console.log("Oh no mongo connection error")
        console.log(err)

    })


const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    adresses:[{
        city:String,
        state:String,
        country:String,
        street:String
    }]
})
const User = mongoose.model("User",userSchema)
const makeUser = async()=>{
    const u = new User({
        fist: "Harry",
        last:"Potter"
    });
    u.adresses.push({
        street:"123 Seaseme St.",
        city:"New Yorl ",
        state:"NY",
        country:"USA"
    })
    const res  = await u.save()
    console.log(res)

    
}
const clearevery = async()=>{
    await User.deleteMany({})
}
const addadress =async(id)=>{
    const user = await User.findById(id)
    user.adresses.push({
        street:"nassr Seaseme St.",
        city:"New Ariana ",
        state:"AR",
        country:"Tun"

    })
    await user.save()

}

addadress('6995db3dc01205d5aa16a8f1')