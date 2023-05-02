const { UserModel } = require("../models/user.model.js");

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const getFriendsByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if(!user){
            res.status(404).send({msg: "User not found"});
            return;
        }
        res.status(200).send(user.friends);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const sendFriendRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if(!user){
            res.status(404).send({msg: "User not found"});
            return;
        }
        console.log(req.body);
        user.friendRequests.push(req.body?.user_id);
        await UserModel.findByIdAndUpdate(id, user);
        res.status(201).send({msg: "Friend request sent"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

const accOrRejFr = async (req, res) => {
    const { id, friendId } = req.params;
    try {
        const user = await UserModel.findById(id);
        const friend = await UserModel.findById(friendId);
        if(!user){
            res.status(404).send({msg: "User not found"});
            return;
        }
        if(!friend){
            res.status(404).send({msg: "Friend not found"});
            return;
        }
        const newReqList = user.friendRequests.filter((el)=>{
            return el!=friendId;
        });
        user.friendRequests = newReqList;
        user.friends.push(friendId);
        friend.friends.push(id);
        await UserModel.findByIdAndUpdate(id, user);
        res.status(204).send({msg: "Friend request accepted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

module.exports = { accOrRejFr, sendFriendRequest, getFriendsByUserId, getUsers }