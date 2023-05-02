const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/mongoose.connection.js");
const { registerRouter } = require("./routes/register.route.js");
const { userRouter } = require("./routes/user.route.js");
const { postRouter } = require("./routes/post.route.js");
require("dotenv").config();
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", registerRouter)
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res)=>{
   res.send("Social Media App");
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    try {
        await connection;
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
})