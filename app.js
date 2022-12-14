const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

const port = process.env.PORT || 3005;
app.listen(port, () => {console.log("Servidos corriendo en puento",port)})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.get('/user-registers', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/user-register.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
})