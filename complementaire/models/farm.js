const mongoose = require("mongoose");
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(()=>{
        console.log("Mongo connection open")
    })
    .catch(err=>{
        console.log("Oh no mongo connection error")
        console.log(err)

    })

const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:["Spring","Summer","Fall","Winter"]
        
    }
})
const farmSchema = new Schema({
    name:String,
    city:String,
    products:[{type:Schema.Types.ObjectId,ref:"Product"}]
})

const Product = mongoose.model("Product",productSchema);
const Farm = mongoose.model("Farm",farmSchema)

const makeFarm = async()=>{
    const farm = new Farm({
        name : "Full Belly Farms",
        city:"Guinda , CA "
    })
    const melon = await Product.findOne({name:"Goddess Melon"});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);

}
const addProduct = async()=>{
    const farm = await Farm.findOne({name : "Full Belly Farms"});
    const watermelon = await Product.findOne({name: 'Sugar baby'})
    farm.products.push(watermelon);
    await farm.save()
    console.log(farm)
}

Farm.findOne({name:'Full Belly Farms'}).populate("products").then(farm=>console.log(farm.products))
// makeFarm()

// Product.insertMany([
//     {name:"tofeh",price:4.999,season:"Summer"},
//     {name:"Sugar baby",price:4.999,season:"Summer"},
//     {name:"Goddess Melon",price:3.99,season:"Spring"}
// ])

