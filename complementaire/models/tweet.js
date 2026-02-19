const mongoose = require("mongoose");
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(() => {
        console.log("Mongo connection open")
    })
    .catch(err => {
        console.log("Oh no mongo connection error")
        console.log(err)

    })
const userSchema = new Schema({
    username: String,
    age: Number

})
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})
const User = mongoose.model("User", userSchema)
const Tweet = mongoose.model("Tweet", tweetSchema)
// const makeTweets = async () => {
//     // const user = new User({
//     //     username: "chickenfan99",
//     //     age: 12

//     // })
//     // user.save()
//     const user = await  User.findOne({username:"chickenfan99"
//     })
//     const tweet2 = new Tweet({
//         text:"bock bock my chickens ",likes:2123
//     })
//     tweet2.user=user
//     tweet2.save()
//     user.save()

// }
// makeTweets()
const findTweet = async()=>{
    const t = await Tweet.findOne({text: 'bock bock my chickens '}).populate("user","username")
    console.log(t)
}


findTweet()