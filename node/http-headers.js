// const http = require("http")
// const server = http.createServer((req,res)=>{
//     //res.statusCode = 200;
//     //set headers. Not real headers but are valid, the X makes it a valid custom header
//     res.writeHead(200, {
//         "X-Foo-Header": "RandomData/Random",
//         "X-My-Header-Not-Real": "MoreRandom AHHHHHHHH"
//     })
  
//     res.end("Sent. Check the network!")
// })

// server.listen(5566,()=>{
//     console.log(`Running on Port ${5566}`)
// })
// //When you attempt to retrieve data from a server that is not the same domain as the current domain (IE fetech to another server) You have to handle CORS issues. 
// //when dealing with cors issues using headers. 
// //The Server needs to be able to tell the browser that content is expected to be viewed on another domain.

// res.writeHead(200, {
//     "Content-Type":"application/json",
//     "Access-Control-Allow-Origin":"http://localhost:8888"
//     //I can access the site from localhost:8888, but nowwhere else
// })
// //This is useful if you have a front-end app being served from a different port than the backend app or api.

// res.writeHead(200, {
//     "Content-Type":"application/json",
//     "Access-Control-Allow-Origin":"*"
//     //I can access the site from anywhere
// })





const http = require("http")
const port = 4500;

const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>HTML Content from Node</title>
    </head>
    <body>
        <h1>This is a full HTML document!</h1>
        <ul>
            <li>It's Valid!</li>
            <li>It's From Node!</li>
            <li>It's Just a String!</li>
        </ul>
        <script>
            console.log("It's like magic")
        </script>
    </body>
</html>
`;



const server = http.createServer((req, res)=>{
    console.log('request was made:' + req.url);
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
    })



    res.setHeader("X-Main-Header", "RandomData/Random");
    res.setHeader("X-Body-Header", "MoreRandom")
    let myArr =  [
        {
            lastName: "Summerset",
            firstName: "Brian",
            email:"abc@gmail.com"


        }
    ]
    res.end(JSON.stringify(myArr));
})

server.listen(4500, ()=>{
    console.log("yo dawgs now listening to port 4500");
})
