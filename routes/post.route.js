const { Router } = require("express");
const postRouter = Router();
const { getPostDetails, commentOnPost, getPosts, createPost, updatePost, deletePost, likePost } = require("../controllers/posts.js");

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", updatePost);
postRouter.delete("/:id", deletePost);
postRouter.post("/:id/like", likePost);
postRouter.post("/:id/comment", commentOnPost);
postRouter.get("/:id", getPostDetails);



module.exports = { postRouter }