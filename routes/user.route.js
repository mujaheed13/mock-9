const { Router } = require("express");
const userRouter = Router();
const { accOrRejFr, sendFriendRequest, getFriendsByUserId, getUsers }  = require("../controllers/user.js");

userRouter.get("/", getUsers);
userRouter.get("/:id/friends", getFriendsByUserId);
userRouter.post("/:id/friends", sendFriendRequest);
userRouter.patch("/:id/friends/:friendId", accOrRejFr);


module.exports = { userRouter }