const mongoose = require("mongoose")
const Campground = require("../models/campground")
const cities = require("./cities")
const {places,descriptors} = require("./seedHelpers")
mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample =(arr)=>arr[Math.floor(Math.random()*arr.length)];

const seeDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random()*30)+1
        let obj =cities[random1000];
        const c = new Campground({
            title: `${sample(descriptors)} ,${sample(places)}`,
            description: obj.rank,
            location: `${obj.city} ,${obj.state}`,
            image:`https://picsum.photos/400?random=${Math.random()}`,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae repellendus fuga asperiores laboriosam deleniti doloribus, culpa vel aliquam distinctio numquam, ipsum in! Aperiam nam at assumenda dolor perferendis veniam!",
            price

        })
        await c.save()

    }
}

seeDB()
.then(()=>{
    mongoose.connection.close()
})