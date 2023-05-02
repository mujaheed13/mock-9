const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: String,
    text: String,
    image: String,
    createdAt: Date,
    likes: Array,
    comments: [{
      user: String,
      text: String,
      createdAt: Date
    }]
});

const PostModel = mongoose.model("posts", postSchema);

module.exports = { PostModel }