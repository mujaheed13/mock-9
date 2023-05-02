const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model.js");


const register = (req, res) => {
    const { name, email, password, dob, bio} = req.body;
    try {
        if(!name || !email || !password || !dob || !bio){
            res.status(400).send({msg: "All fields required!"});
            return;
        }
        bcrypt.hash(password, 3, async (err, hashed_pass)=>{
            if(err){
                res.status(500).send({msg: err.message || err});
                return;
            }
            const user = new UserModel({name, email, password: hashed_pass, dob, bio, posts : [], friendRequests : [], friends : []});
            await user.save();
            res.status(201).send({msg: "User Registered"});
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({msg: error.message || error});
    }
}

module.exports = { register }