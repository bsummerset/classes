const http = require("http");
const generateContent = require("./modules.generateContent")
const serveFile = require("./module/serveFile")
const port = 6527

const server = http. createServer((req, res)=>{

    if(req.url === "/favicon.ico") return serveFavicon(req, res)
    if(req.url === "/styles.css") return serveCss(req, res)

    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")

    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })

    let wrapper =  generateContent({
        page,
        count, 
        additional,
    })

    res.write(wrapper)
    res.end()
})

server.listen(port)