const express=require('express');
const bodyParser=require('body-parser');
const dotenv = require("dotenv").config();
const cors=require('cors');
const app=express();


var corsOptions = {
    origin: process.env.BASE_URL
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});
const route = require("./routes/web");
app.use("/api/v1", route);

module.exports = app;