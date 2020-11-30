const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const server = http.createServer(app)

const sendFavicon = (req, res)=>{
    fs.readFile("/favicon.ico", (err, data)=>{
        if(err) return res.send(err);
        res.send(data)
    } )
}

const _404Content = `
<!DOCTYPE html>
<html> 
    <head> 
        <title>An Error you have found</title>
    </head>
    <body>
        <h1>404</h1>
        <blockquote>"An Error you have found" - Yoda
        </blockquote>
    </body>
</html>
`
const send404 = (req,res)=>{
    res.status(404);
    res.send(_404Content)
}

// app.get("/favicon.ico", sendFavicon)

app.get("/", (req, res)=>{
    res.send('<div> You are at Home Page </div>')
})

app.get("/about", (req, res)=>{
    res.send('<div>You are at the About Page</div>')
})

app.get("*", (req,res)=>{
    console.log("A Request has been recieved!")
    res.send('Hello Express!')
})

const port = 4431
server.listen(port, ()=>console.log(`listening on port ${port}`))