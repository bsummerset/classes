// const http = require("http");
// const express = require("express");
// const fs = require("fs");

// const app = express();
// const server = http.createServer(app)
// const port = 4430;

// app.get("/posts/:id")

// db = {
//     posts:[
//         {
//             id:"001",
//             title:"Good Things", content:"Lorium ipsum",
//         },
//         {
//             id: "002",
//             title:"Bad Things", content: "foo-bar",
//         }
//     ],
//     people:[
//         {
//             id: "p001",
//             name:"Clint"
//         },
//         {
//             id:"p002",
//             name:"Anna"
//         } 
        
//     ]

// }

// app.get("/", (req,res)=>{
//     res.send(`
//         <h1>You are home</h1>
//         <div id="newData></div>
//         <script>
//             fetch("/api/posts")
//             .then(res=>res.json())
//             .then(data=>{
//                 document.querySelector("#newData")
//                 .append(data[0].title)
//             })
//         </script>
//     `)
// })

// app.get("/api/post/:id", (req, res)=>{
//     // console.log(req.params)
//     // res.send(req.params.id)
//     //deconstruction
//     const {id} = req.params;
//     //find method, acts like foreEach
//     const foundPost = db.posts.find(post=>post.id ==id)
//     res.send(foundPost)
// })

// app.get("api/:type/", (req,res)=>{
//     const{type} = req.params;
//     res.send(db[type])
// })



// server.listen(port, ()=>console.log(`listening on port ${port}`))




//****************************Exercises********************* */

const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const server = http.createServer(app)
const port = 4432



let people = require("./people.json");

// console.log(people)
app.get("/people")

app.get("/",(req,res)=>{
    res.send("<h1> You are home</h1>")
})
//this will send all of the people
app.get("/api/people" ,(req,res)=>{
    res.send(people)
})

//gender is the param, after the :
//anything after the : it will match
//define the param from the route path, after the :, into a variable with the param in {} = request.params;
app.get("/api/people/gender/:gender", (req,res)=>{
    const {gender} = req.params;
    let results = people.filter(person=>person.gender ==gender)
    res.send(results)
})
//.filter makes a new array of all items that the function returns True
//.find returns a single output of the first item that is found True

app.get("/api/people/email/:email", (req, res)=>{
    const {email} = req.params;
    let results = people.find(person=>person.email ==email)
    res.send(results.name)
})



server.listen(port, ()=>console.log(`listening on port ${port}`))

