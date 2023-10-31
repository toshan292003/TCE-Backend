const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./Routes/Route")
app.use(express.json());
app.use("/",routes);

mongoose.connect("mongodb+srv://ToshanDB:Toshiba292003@cluster0.inmodwz.mongodb.net/MyDatabase").then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err,"Something went wrong");
});

app.get("/home",(req,res)=>{
    res.send("Hello this is my first Nodemon Website");
});

app.listen(4000, ()=>{
    console.log("Server is Connected.");
});