const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: Array,
    friends: Array,
    friendRequests: Array
});

 
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel }