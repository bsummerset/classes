// const http = require("http");
// const express = require("express");
// const fs = require("fs");

// const app = express();
// const server = http.createServer(app)
// const port = 4432


// const sendHome = (req,res)=>{
//     res.send `"<h1>Some Content @ ${res.content}</h1>"`
// }
// const timeLogger = (req,res, next)=>{
//     let requestTime = new Date()
//     console.log("A request came in at "+requestTime)

//     req.reqestTime = requestTime
//     res.content = requestTime
//     res.send("Im sending this kinda early")
//     next()
// }

// //Middleware is just any function after the route
// app.get("/", timeLogger, (req,res)=>{
//     console.log(req.requestTime)
//     res.send(data)
// })

// app.get("/",timeLogger,sendHome)

//   //You can have multiple middleware and declare middleware on the fly
//   const addOneToCount = (req,res,next)=>{
//     req.count = req.count ? req.count+1 : 1;
//     next()
// }

// app.get("/", 
//     (req,res,next)=>{
//         console.log("I am number 1")
//         next()
//     },
//     addOneToCount,
//     addOneToCount,
//     addOneToCount,
//     (req,res)=>{
//         console.log(`addOneToCount was called : ${req.count} times`)
//         res.json(req.count) //using res.json because sending a number with res.send errors
//     }
// )







// server.listen(port, ()=>console.log(`listening on port ${port}`))



//************************EXERCISE***************************** */

const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const server = http.createServer(app)
const port = 4432

app.get("/", (req,res, next)=>{
    res.send("<h1>Home</h1>")
    console.log(req.newTime)

})

const currentTime = (req, res, next)=>{
    let newTime = new Date()
    console.log("A request came in at " +newTime)

    req.newTime = newTime
    next()
}

app.get("/api", currentTime, (req,res)=>{
    console.log(req.newTime)

})
const timeLogger = (req,res,next)=>{
    console.log(new Date())
    next
}

server.listen(port, ()=>console.log(`listening on port ${port}`))