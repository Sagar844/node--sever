const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const  path = require("path")

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
//   console.log("db conceted");
// }

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: Number,
// });

// const User = mongoose.model("User", userSchema);
// server.use(bodyParser.json());
const server = express();

server.set("view engine" , "ejs")


console.log(server.get("views"))
server.use(cors());

server.get("/", (req, res) => {
  res.render('index' ,{
    title:"my node js page"
  });
});


server.get("/about", (req, res) => {
  res.render('about', {
    title:"this is about  page"
  });
});


server.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});


const PORT = process.env.PORT || 3000

server.listen(PORT, console.log("listening on port"));
