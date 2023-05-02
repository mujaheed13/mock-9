const { PostModel } = require("../models/post.model.js");

const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();        
        res.status(200).send(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const createPost = async  (req, res) => {
    const { user, text, image } = req.body;
    try {
        const createdAt = new Date();
        const likes = [];
        const comments = [];
        if(!user || !text || !image){
            res.status(400).send({msg: "Some fields are missing"});
        }
        const post = new PostModel({ user, text, image, createdAt, likes, comments });
        await post.save();
        res.status(201).send({msg: "Post Created"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        await PostModel.findByIdAndUpdate(id, req.body);
        res.status(204).send({msg: "Post Updated"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await PostModel.findByIdAndDelete(id);
        res.status(202).send({msg: "Post Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const likePost = async (req, res) => {
    const { user_id } = req.body;
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);
        post.likes.push(user_id);
        await PostModel.findByIdAndUpdate(id, post);
        res.status(201).send({msg: "Liked Post"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const commentOnPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);
        const comment = req.body;
        comment.createdAt = new Date();
        post.comments.push(comment);
        await PostModel.findByIdAndUpdate(id, post);
        res.status(201).send({msg: "Comment Posted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const getPostDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);        
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

module.exports = { getPostDetails, commentOnPost, getPosts, createPost, updatePost, deletePost, likePost }