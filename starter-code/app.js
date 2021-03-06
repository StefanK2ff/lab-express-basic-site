const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/views/home.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname+"/public/views/about.html")
})

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname+"/public/views/gallery.html")
})

app.listen(port, () => {
    console.log(`Server listens to port ${port}`)
});