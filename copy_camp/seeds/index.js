
const mongoose=require('mongoose');
const Campground=require('../models/campground')
const cities=require("./cities")
const {places,descriptors}=require("./seedHelpers")
mongoose.connect('mongodb://localhost:27017/yelp-camp')
    // .then(()=>console.log("connected"))
    // .catch((err)=>console.log("oh no error",err))


const db=mongoose.connection ;
db.on("error",console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log('Database connected')
})

const sample=(array)=>array[Math.floor(Math.random()*array.length)]




const seeDB=async()=>{
    await Campground.deleteMany({});
    for(let i=0;i<50;i++){
        const random1000=Math.floor(Math.random()*1000);
        const price=Math.floor(Math.random()*20)+10
        const camp = new Campground({
            location:`${cities[random1000].city},${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)},`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias doloribus dolor voluptas quibusdam nesciunt neque perspiciatis illum vitae excepturi minus, inventore natus aspernatur consequatur laborum labore ut fugit beatae!',
            price
        });
        await camp.save()
    }
    
}

seeDB().then(()=>{
    mongoose.connection.close();
})


// image: `https://picsum.photos/400?random=${Math.random()}`,