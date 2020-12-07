const http = require("http");
const express = require("express");
const fs = require("fs");
const { resolve } = require("path");
const port = 4000;

const app = express();
const server = http.createServer(app);


app.get("/", (req,res) => {
    console.log(req.url)
    res.send("Hello World!")
})

app.get("*", (req,res) => {
    console.log(req.url)
    res.send("Page Not Found!!!")

})

server.listen(4000, ()=> {
    console.log(`Running on port:${port}!`)
})
