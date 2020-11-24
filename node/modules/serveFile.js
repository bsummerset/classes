const fs = require("fs");

const serveFile =(r)

const serveCss = (req, res)=>{
    fs.readFile("./styles.css", "utf8", (err, data)=>{
        if(err){
            res.writeHead(404);
            res.end()
        }

        res.writeHead(200, {"Content-Type":"text/css"});
        res.end(data) 
        
    })
}
   
const serveFavicon = (req, res)=>{
    fs.readFile("./favicon.ico", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.writeHead(200);
        res.end(data)
    })

}    