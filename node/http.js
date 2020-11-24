// const http = require("http");
// const htmlContent = `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>HTML Content from Node</title>
//     </head>
//     <body>
//         <h1>This is a full HTML document!</h1>
//         <ul>
//             <li>It's Valid!</li>
//             <li>It's From Node!</li>
//             <li>It's Just a String!</li>
//         </ul>
//         <script>
//             console.log("It's like magic")
//         </script>
//     </body>
// </html>
// `;

// // const fs = require("fs");
// //Don't forget to put function parameters inside ()
// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.end(htmlContent);
//     // console.log("request was made: " + req.url);
//     // res.writeHead(200, {"Content-Type": 'application/html'});
//     // let myReadStream = fs.createReadStream(--dirname + '/readMe.txt', 'utf8');
//     // myReadStream.pipe(res);

// })

// server.listen(3344, ()=>{
//     // console.log("The server is up and running ... and listening on port 3344")
//     console.log('yo dawgs now listening to port 3344')
// })




const http = require("http");
const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>The greatest webpage on the net</title>
    </head>
    <body>
        <h1>This is my favorite foods document!</h1>
        <ul>
            <li>Chicken</li>
            <li>Salmon</li>
            <li>Black eyed peas</li>
        </ul>
        <script>
            console.log("Now I'm hungry")
        </script>
    </body>
</html>
`;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.end(htmlContent)
})

server.listen(4000, ()=>{
    console.log('yo dawgs now listening to port 4000')
})