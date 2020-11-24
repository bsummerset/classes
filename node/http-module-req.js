// Make a node application that will supply html content based on the page parameter in the query string using the http module.(This is almost exactly the last example from this lesson)
// (bonus) Make the response send full valid html document without writing the top and bottom sections more than once. (IE make re-usable code)
// (Extra Bonus) Add additional content based on any additional parameters in the quesy string.



const http = require("http");
const fs = require("fs");
const port = 6531;


const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`
const makeHeading = (page) =>{
    let heading
    switch(page){
        case "about":
            heading = `<h1>This is about!</h1>`;
            break;
        case "contact":
            heading = `<h1>This is contact</h1>`;
            break;
        case "foo":
            heading = "<h1>I Pitty THE foo</h1>"
            break;
        default:
            heading = `<h1>This is Home</h1>`;
    }
    return heading
}
let generateContent = ({page, navigation, heading, additional,count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Selection:${page}</title><head>
                <link rel= "stylesheet" href="styles.css>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

//using favicon
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
const server = http.createServer((req,res)=>{

    console.log(req.url)


    if(req.url === "/favicon.ico") return serveFavicon(req, res)
    if(req.url === "/styles.css") return serveCss(req, res)


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
   
    
    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })
    let heading = makeHeading(page)
    let foo = "Yo are awesome Clint!"
    let wrapper =  generateContent({
        page,
        navigation, 
        heading, 
        count, 
        additional,
        foo
    })  
    res.write(wrapper)
    res.end()
})
server.listen(port)