const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();


const server = http.createServer(app)

// const _404Content = `
// <!DOCTYPE html>
// <html> 
//     <head> 
//         <title>An Error you have found</title>
//     </head>
//     <body>
//         <h1>404</h1>
//         <blockquote>"An Error you have found" - Yoda
//         </blockquote>
//     </body>
// </html>
// `

const send404 = (req,res)=>{
    res.status(404);
    res.send("Error")
}

const serveContent = (title)=>`
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
    </body>
</html>
`;


const serveHome = (req, res)=>{
    res.send('<div> You are at Home Page</div>')
}

// app.get("/favicon.ico", sendFavicon)

app.get("/home", serveHome)

app.get("/", serveHome)

app.get("/about", (req, res)=>{
    res.send(serveContent("About", "Lets give them something to talk about."))
})

app.get("/contact", (req, res)=>{
    res.send(serveContent("Contact"))
})


app.get("*", send404)


const port = 4432
server.listen(port, ()=> console.log(`Yo dawgs listening on port ${port}`))